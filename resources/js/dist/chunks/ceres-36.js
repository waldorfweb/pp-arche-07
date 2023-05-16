(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[36],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./resources/js/src/app/components/item/ItemImageCarousel.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/app/components/item/ItemImageCarousel.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_6__);







/* harmony default export */ __webpack_exports__["default"] = ({
  name: "item-image-carousel",
  props: {
    maxQuantity: {
      type: Number,
      default: 10
    },
    showThumbs: {
      type: Boolean,
      default: true
    },
    showDots: {
      type: Boolean,
      default: true
    },
    showNav: {
      type: Boolean,
      default: false
    },
    animationStyle: {
      type: String,
      default: "standard"
    }
  },
  inject: {
    itemId: {
      default: null
    }
  },
  data: function data() {
    return {
      imageObserver: null,
      id: null
    };
  },
  computed: {
    currentVariation: function currentVariation() {
      return this.$store.getters["".concat(this.itemId, "/currentItemVariation")];
    },
    carouselImages: function carouselImages() {
      var carouselImages = this.$options.filters.itemImages(this.currentVariation.images, "url").slice(0, this.maxQuantity);
      carouselImages.forEach(function (image) {
        image.url = image.url.replace("https://cdn02.plentymarkets.com/rm2ukznxe8l9/", "https://waldorfshop.sirv.com/") + "?scale.width=100&scale.height=100";
      });
      return carouselImages;
    },
    singleImages: function singleImages() {
      var singleImages = this.$options.filters.itemImages(this.currentVariation.images, "url").slice(0, this.maxQuantity);
      singleImages.forEach(function (image) {
        image.url = image.url.replace("https://cdn02.plentymarkets.com/rm2ukznxe8l9/", "https://waldorfshop.sirv.com/") + "?scale.width=700&scale.height=700";
      });
      return singleImages;
    }
  },
  watch: {
    currentVariation: {
      handler: function handler(val, oldVal) {
        var _this = this;
        if (val !== oldVal) {
          this.$nextTick(function () {
            _this.registerElementsForIntersection();
          });
        }
      },
      deep: true
    }
  },
  mounted: function mounted() {
    var _this2 = this;
    this.id = this._uid;
    this.$nextTick(function () {
      _this2.initCarousel();
    });
  },
  methods: {
    showImages: function showImages(parentElement) {
      parentElement.querySelectorAll(".defer-load").forEach(function (elem) {
        var dataSrc = elem.getAttribute("data-src");
        if (dataSrc && dataSrc !== elem.src) {
          elem.src = dataSrc;
        }
      });
    },
    registerElementsForIntersection: function registerElementsForIntersection() {
      var _this3 = this;
      if (this.showGallery()) {
        this.imageObserver.observe(document.querySelector("#carousel-wrapper" + this.id + " .carousel-thumbnails"));
        $("#carousel" + this.id).on('slide.bs.carousel', function () {
          _this3.showImages(document.querySelector("#carousel" + _this3.id));
        });
      }
    },
    initCarousel: function initCarousel() {
      var _this4 = this;
      if ("IntersectionObserver" in window) {
        this.imageObserver = new IntersectionObserver(function (entries, imageObserver) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              _this4.showImages(entry.target);
              imageObserver.unobserve(entry.target);
            }
          });
        });
        this.registerElementsForIntersection();
      } else {
        if (this.showGallery()) {
          console.log("Your Browser is too old!");
          var images = this.$el.getElementsByClassName('defer-load');
          var i;
          for (i = 0; i < x.length; i++) {
            images[i].src = images[i].getAttribute("data-src");
            images[i].removeAttribute("data-src");
          }
        }
      }
      $('#carousel' + this.id).carousel();
    },
    getImageCount: function getImageCount() {
      return this.carouselImages.length > this.maxQuantity ? this.maxQuantity : this.carouselImages.length;
    },
    getAltText: function getAltText(image) {
      var altText = image && image.alternate ? image.alternate : this.$options.filters.itemName(this.currentVariation);
      if (this.currentVariation.attributes.length > 0) {
        altText = altText + ' ' + this.currentVariation.attributes[0].value.names.name;
      }
      return altText;
    },
    getImageName: function getImageName(image) {
      var imageName = image && image.name ? image.name : this.$options.filters.itemName(this.currentVariation);
      if (this.currentVariation.attributes.length > 0) {
        imageName = imageName + ' ' + this.currentVariation.attributes[0].value.names.name;
      }
      return imageName;
    },
    showGallery: function showGallery() {
      return this.getImageCount() > 1;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/app/components/item/ItemImageCarousel.vue?vue&type=template&id=5285279e&":
/*!*****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/app/components/item/ItemImageCarousel.vue?vue&type=template&id=5285279e& ***!
  \*****************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _vm.showGallery() ? _c("div", {
    staticClass: "text-center",
    attrs: {
      itemscope: "",
      itemtype: "http://schema.org/Thing",
      id: "carousel-wrapper" + _vm.id
    }
  }, [_c("div", {
    staticClass: "carousel slide",
    attrs: {
      id: "carousel" + _vm.id,
      "data-interval": "false"
    }
  }, [_vm.showDots ? _c("ol", {
    staticClass: "carousel-indicators"
  }, _vm._l(_vm.singleImages, function (image, index) {
    return _c("li", {
      class: {
        active: index === 0
      },
      attrs: {
        "data-target": "#carousel" + _vm.id,
        "data-slide-to": index
      }
    });
  }), 0) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "carousel-inner text-center"
  }, _vm._l(_vm.singleImages, function (image, index) {
    return _c("div", {
      staticClass: "carousel-item prop-1-1",
      class: {
        active: index === 0
      }
    }, [_c("div", {
      staticClass: "position-absolute w-100 h-100"
    }, [index === 0 ? _c("img", {
      staticClass: "mw-100 mh-100",
      staticStyle: {
        "object-fit": "contain"
      },
      attrs: {
        width: "1000",
        height: "1000",
        src: image.url,
        alt: _vm.getAltText(image),
        loading: "eager"
      }
    }) : _c("img", {
      staticClass: "mw-100 mh-100 defer-load",
      staticStyle: {
        "object-fit": "contain"
      },
      attrs: {
        width: "1000",
        height: "1000",
        "data-src": image.url,
        alt: _vm.getAltText(image)
      }
    })])]);
  }), 0), _vm._v(" "), _vm.showNav && _vm.singleImages.length > 1 ? _c("a", {
    staticClass: "carousel-control-prev",
    attrs: {
      href: "#carousel" + _vm._uid,
      role: "button",
      "data-slide": "prev"
    }
  }, [_c("span", {
    staticClass: "carousel-control-prev-icon",
    attrs: {
      "aria-hidden": "true"
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "sr-only"
  }, [_vm._v("Previous")])]) : _vm._e(), _vm._v(" "), _vm.showNav && _vm.singleImages.length > 1 ? _c("a", {
    staticClass: "carousel-control-next",
    attrs: {
      href: "#carousel" + _vm._uid,
      role: "button",
      "data-slide": "next"
    }
  }, [_c("span", {
    staticClass: "carousel-control-next-icon",
    attrs: {
      "aria-hidden": "true"
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "sr-only"
  }, [_vm._v("Next")])]) : _vm._e()]), _vm._v(" "), _vm.showThumbs ? _c("div", {
    staticClass: "carousel-thumbnails"
  }, [_c("div", {
    staticClass: "row mx-n2"
  }, _vm._l(_vm.carouselImages, function (imagePreview, index) {
    return _c("div", {
      staticClass: "col col-lg-1 col-2 pt-2 px-2"
    }, [_c("a", {
      staticClass: "d-block prop-1-1",
      attrs: {
        href: "#carousel" + _vm.id,
        "data-target": "#carousel" + _vm.id,
        "data-slide-to": index,
        title: _vm.getImageName(imagePreview)
      }
    }, [_c("span", {
      staticClass: "position-absolute d-block w-100 h-100 px-2"
    }, [_c("img", {
      staticClass: "mw-100 mh-100 border defer-load",
      staticStyle: {
        "object-fit": "contain"
      },
      attrs: {
        width: "100",
        height: "100",
        "data-src": imagePreview.url,
        alt: _vm.getAltText(imagePreview)
      }
    })])])]);
  }), 0)]) : _vm._e()]) : _c("div", {
    staticClass: "prop-1-1"
  }, [_c("img", {
    staticClass: "position-absolute w-100 h-100",
    staticStyle: {
      "object-fit": "contain"
    },
    attrs: {
      width: "1000",
      height: "1000",
      src: _vm.singleImages[0].url,
      alt: _vm.getAltText(_vm.singleImages[0].url),
      title: _vm.getImageName(_vm.singleImages[0].url),
      loading: "eager"
    }
  })]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/src/app/components/item/ItemImageCarousel.vue":
/*!********************************************************************!*\
  !*** ./resources/js/src/app/components/item/ItemImageCarousel.vue ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ItemImageCarousel_vue_vue_type_template_id_5285279e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ItemImageCarousel.vue?vue&type=template&id=5285279e& */ "./resources/js/src/app/components/item/ItemImageCarousel.vue?vue&type=template&id=5285279e&");
/* harmony import */ var _ItemImageCarousel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ItemImageCarousel.vue?vue&type=script&lang=js& */ "./resources/js/src/app/components/item/ItemImageCarousel.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ItemImageCarousel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ItemImageCarousel_vue_vue_type_template_id_5285279e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ItemImageCarousel_vue_vue_type_template_id_5285279e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/app/components/item/ItemImageCarousel.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/app/components/item/ItemImageCarousel.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/src/app/components/item/ItemImageCarousel.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemImageCarousel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ItemImageCarousel.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./resources/js/src/app/components/item/ItemImageCarousel.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemImageCarousel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/app/components/item/ItemImageCarousel.vue?vue&type=template&id=5285279e&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/src/app/components/item/ItemImageCarousel.vue?vue&type=template&id=5285279e& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemImageCarousel_vue_vue_type_template_id_5285279e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ItemImageCarousel.vue?vue&type=template&id=5285279e& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/app/components/item/ItemImageCarousel.vue?vue&type=template&id=5285279e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemImageCarousel_vue_vue_type_template_id_5285279e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemImageCarousel_vue_vue_type_template_id_5285279e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=ceres-36.js.map