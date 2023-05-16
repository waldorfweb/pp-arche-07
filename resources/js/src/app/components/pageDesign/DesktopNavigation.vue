<template>
    <ul data-level="1" :class="'collapse nav-dropdown-' + navCounter">
        <template v-if="isNavigationInitialized">
            <li v-for="category in categories">
                <ul v-if="showNextLevel(category)" class="collapse-inner">
                    <li class="level1">
                        <a :href="getCategoryUrl(category.url)" :title="category.details[0].name">{{ category.details[0].name }}</a>
                    </li>
                    <desktop-navigation-node v-for="child in category.children" v-bind:key="child.id" :category="child" :level="2"></desktop-navigation-node>
                </ul>
            </li>
        </template>
        <template v-else>
            <li>
                <loading-animation></loading-animation>
            </li>
        </template>
    </ul>
</template>

<script>
import { isNullOrUndefined } from "../../helper/utils";
import { mapState } from "vuex";
import DesktopNavigationNode from "./DesktopNavigationNode.vue";

export default {
    name: "desktop-navigation",
    components: {DesktopNavigationNode},
    props: {
        template: {
            type: String
        },
        navCounter: Number,
        navDropdownCounter: Number
    },

    data()
    {
        return {
            dataContainer: {
                categories: []
            }
        };
    },

    computed:
    {
        categories()
        {
            return (this.isNavigationInitialized() && typeof this.navigationTree[this.navCounter] !== 'undefined') ? this.navigationTree[this.navCounter].children : [];
        },

        ...mapState({
            navigationTree: state => state.navigation.tree
        })
    },

    created()
    {
        this.loadInitialTree();
    },

    methods:
    {
        isNavigationInitialized() {
            return this.navigationTree.length > 0;
        },

        showNextLevel(category){
            return (category.level < App.config.header.megamenuLevels);
        },

        loadInitialTree()
        {
            if (!this.isNavigationInitialized()) {
                if (isNullOrUndefined(App.DesktopNavigationLoaded)) {
                    App.DesktopNavigationLoaded = false;
                    this.$store.dispatch("loadPartialNavigationTree", {
                        categoryId: null,
                        depth: App.config.header.megamenuLevels
                    })
                        .then(response => {
                                this.$store.commit("setNavigationTree", response);
                                App.DesktopNavigationLoaded = true;
                            },
                            error => {
                                App.DesktopNavigationLoaded = null;
                            });
                }
            }
        },

        getCategoryUrl(url)
        {
            const trailingSlash = url[0] === "/" ? "" : "/";
            const prefix = App.urls.includeLanguage ? `/${App.language}${trailingSlash}` : "";

            return prefix + url;
        }
    }
}
</script>