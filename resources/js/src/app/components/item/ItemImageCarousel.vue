<template>
    <div itemscope itemtype="http://schema.org/Thing" v-if="showGallery()" class="text-center" :id="'carousel-wrapper'+id">
        <div :id="'carousel'+id" class="carousel slide" data-interval="false">
            <ol class="carousel-indicators" v-if="showDots">
                <li v-for="(image, index) in singleImages" :data-target="'#carousel'+id" :data-slide-to="index" :class="{ active: index === 0 }"></li>
            </ol>
            <div class="carousel-inner text-center">
                <div v-for="(image, index) in singleImages" class="carousel-item prop-1-1" :class="{ active: index === 0 }">
                    <div class="position-absolute w-100 h-100">
                        <img
                            class="mw-100 mh-100"
                            style="object-fit: contain"
                            width="1000"
                            height="1000"
                            :src="image.url"
                            :alt="getAltText(image)"
                            loading="eager"
                            v-if="index === 0">
                        <img
                            class="mw-100 mh-100 defer-load"
                            style="object-fit: contain"
                            width="1000"
                            height="1000"
                            :data-src="image.url"
                            :alt="getAltText(image)"
                            v-else>
                    </div>
                </div>
            </div>
            <a class="carousel-control-prev" :href="'#carousel'+_uid" role="button" data-slide="prev" v-if="showNav && singleImages.length > 1">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" :href="'#carousel'+_uid" role="button" data-slide="next" v-if="showNav && singleImages.length > 1">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>

        <div v-if="showThumbs" class="carousel-thumbnails">
            <div class="row mx-n2">
                <div class="col col-lg-1 col-2 pt-2 px-2" v-for="(imagePreview, index) in carouselImages">
                    <a class="d-block prop-1-1" :href="'#carousel'+id" :data-target="'#carousel'+id" :data-slide-to="index" :title="getImageName(imagePreview)">
                        <span class="position-absolute d-block w-100 h-100 px-2">
                            <img
                                class="mw-100 mh-100 border defer-load"
                                style="object-fit: contain"
                                width="100"
                                height="100"
                                :data-src="imagePreview.url"
                                :alt="getAltText(imagePreview)">
                        </span>
                    </a>
                </div>
            </div>
        </div>
    </div>
    <div v-else class="prop-1-1">
        <img
            class="position-absolute w-100 h-100"
            style="object-fit: contain"
            width="1000"
            height="1000"
            :src="singleImages[0].url"
            :alt="getAltText(singleImages[0].url)"
            :title="getImageName(singleImages[0].url)"
            loading="eager"
        >
    </div>
</template>

<script>

export default {
    name: "item-image-carousel",

    props: {
        maxQuantity:
        {
            type: Number,
            default: 10
        },
        showThumbs:
        {
            type: Boolean,
            default: true
        },
        showDots:
        {
            type: Boolean,
            default: true
        },
        showNav:
        {
            type: Boolean,
            default: false
        },
        animationStyle:
        {
            type: String,
            default: "standard"
        }
    },

    inject: {
        itemId: {
            default: null
        }
    },

    data()
    {
        return {
            imageObserver: null,
            id: null
        }
    },

    computed:
    {
        currentVariation()
        {
            return this.$store.getters[`${this.itemId}/currentItemVariation`]
        },

        carouselImages()
        {
            const carouselImages = this.$options.filters.itemImages(
                this.currentVariation.images,
                "url"
            ).slice(0, this.maxQuantity);

            // carouselImages.forEach((image) => {
            //     image.url = image.url.replace("https://cdn02.plentymarkets.com/rm2ukznxe8l9/", "https://waldorfshop.sirv.com/") + "?scale.width=100&scale.height=100";
            // });

            return carouselImages;
        },

        singleImages()
        {
            const singleImages = this.$options.filters.itemImages(
                this.currentVariation.images,
                "url"
            ).slice(0, this.maxQuantity);

            // singleImages.forEach((image) => {
            //    image.url = image.url.replace("https://cdn02.plentymarkets.com/rm2ukznxe8l9/", "https://waldorfshop.sirv.com/") + "?scale.width=700&scale.height=700";
            // });

            return singleImages;
        }
    },

    watch: {
        currentVariation:
            {
                handler(val, oldVal)
                {
                    if (val !== oldVal)
                    {
                        this.$nextTick(() => {
                            this.registerElementsForIntersection();
                        });
                    }
                },
                deep: true
            }
    },

    mounted()
    {
        this.id = this._uid;

        this.$nextTick(() =>
        {
            this.initCarousel();
        });
    },

    methods:
    {
        showImages(parentElement)
        {
            parentElement.querySelectorAll(".defer-load").forEach((elem) => {
                const dataSrc = elem.getAttribute("data-src");

                if (dataSrc && dataSrc !== elem.src) {
                    elem.src = dataSrc;
                }
            });
        },

        registerElementsForIntersection()
        {
            if (this.showGallery()) {
                this.imageObserver.observe(document.querySelector("#carousel-wrapper" + this.id + " .carousel-thumbnails"));

                $("#carousel" + this.id).on('slide.bs.carousel', () => {
                    this.showImages(document.querySelector("#carousel" + this.id));
                });
            }
        },

        initCarousel()
        {
            if ("IntersectionObserver" in window) {
                this.imageObserver = new IntersectionObserver((entries, imageObserver) => {
                    entries.forEach((entry) => {
                        if(entry.isIntersecting)
                        {
                            this.showImages(entry.target);
                            imageObserver.unobserve(entry.target);
                        }
                    });
                });
                this.registerElementsForIntersection();
            }
            else {
                if (this.showGallery()) {
                    console.log("Your Browser is too old!");
                    const images = this.$el.getElementsByClassName('defer-load');
                    let i;
                    for (i = 0; i < x.length; i++) {
                        images[i].src = images[i].getAttribute("data-src");
                        images[i].removeAttribute("data-src");
                    }
                }
            }
            $('#carousel' + this.id).carousel();
        },

        getImageCount()
        {
            return this.carouselImages.length > this.maxQuantity ? this.maxQuantity : this.carouselImages.length;
        },

        getAltText(image)
        {
            let altText = image && image.alternate ? image.alternate : this.$options.filters.itemName(this.currentVariation);
            if (this.currentVariation.attributes.length > 0) {
                altText = altText + ' ' + this.currentVariation.attributes[0].value.names.name
            }
            return altText;
        },

        getImageName(image)
        {
            let imageName =  image && image.name ? image.name : this.$options.filters.itemName(this.currentVariation);
            if (this.currentVariation.attributes.length > 0) {
                imageName = imageName + ' ' + this.currentVariation.attributes[0].value.names.name
            }
            return imageName;
        },

        showGallery()
        {
            return (this.getImageCount() > 1);
        }
    }
}
</script>
