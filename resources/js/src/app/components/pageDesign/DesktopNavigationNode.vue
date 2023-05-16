<template>
    <li :class="'level'+level">
        <a :href="getCategoryUrl(category.url)" :title="category.details[0].name">{{ category.details[0].name }}</a>
        <ul v-if="showNextLevel(category)">
            <desktop-navigation-node v-for="child in category.children" v-bind:key="child.id" :category="child" :level="(level+1)"></desktop-navigation-node>
        </ul>
    </li>
</template>

<script>

import {isNullOrUndefined} from "../../helper/utils";

export default {
    name: "desktop-navigation-node",

    props: {
        category: Object,
        level: Number
    },

    methods:
    {
        showNextLevel(category){
            return (this.level < App.config.header.megamenuLevels && !isNullOrUndefined(category.children));
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