(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{0:function(module,exports,__webpack_require__){__webpack_require__("487f"),__webpack_require__("48a2"),module.exports=__webpack_require__("5d29")},"108e":function(module,__webpack_exports__,__webpack_require__){"use strict";var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_0_0_node_modules_css_loader_index_js_ref_6_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_header_1_vue_vue_type_style_index_0_module_true_lang_css___WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("52d8"),_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_0_0_node_modules_css_loader_index_js_ref_6_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_header_1_vue_vue_type_style_index_0_module_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_0_0_node_modules_css_loader_index_js_ref_6_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_header_1_vue_vue_type_style_index_0_module_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);__webpack_exports__.default=_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_0_0_node_modules_css_loader_index_js_ref_6_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_header_1_vue_vue_type_style_index_0_module_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a},"52d8":function(module,exports,__webpack_require__){module.exports={header1:"header-1_header1_hz7-2"}},"5d29":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){__webpack_require__("927c");var _storybook_vue__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("7d14"),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("4357"),_storybook_addon_centered_vue__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("8331"),_storybook_addon_centered_vue__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_storybook_addon_centered_vue__WEBPACK_IMPORTED_MODULE_3__),_theme__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("d1e2");Object(_storybook_vue__WEBPACK_IMPORTED_MODULE_1__.addDecorator)(_storybook_addon_centered_vue__WEBPACK_IMPORTED_MODULE_3___default.a),Object(_storybook_vue__WEBPACK_IMPORTED_MODULE_1__.addDecorator)(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.withKnobs),Object(_storybook_vue__WEBPACK_IMPORTED_MODULE_1__.addParameters)({options:{theme:_theme__WEBPACK_IMPORTED_MODULE_4__.a}});const req=__webpack_require__("f330");Object(_storybook_vue__WEBPACK_IMPORTED_MODULE_1__.configure)(function loadStories(){req.keys().forEach(filename=>req(filename))},module)}.call(this,__webpack_require__("8ca4")(module))},7909:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_vue__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("7d14"),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("4357"),_components_header_1_vue__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("906c");Object(_storybook_vue__WEBPACK_IMPORTED_MODULE_0__.storiesOf)("Header1",module).add("normal",()=>({components:{Header1:_components_header_1_vue__WEBPACK_IMPORTED_MODULE_2__.a},props:{tag:{default:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("Tag","h1")}},template:'<header-1 :tag="tag">Hello World!</header-1>'}))}.call(this,__webpack_require__("8ca4")(module))},"906c":function(module,__webpack_exports__,__webpack_require__){"use strict";var components_header_1vue_type_script_lang_js_={name:"Header1",props:{tag:{type:String,default:"h1"}}},header_1vue_type_style_index_0_module_true_lang_css_=__webpack_require__("108e"),componentNormalizer=__webpack_require__("2877");var component=Object(componentNormalizer.a)(components_header_1vue_type_script_lang_js_,function(){var _h=this.$createElement;return(this._self._c||_h)(this.tag,{tag:"component",class:this.$style.header1},[this._t("default")],2)},[],!1,function injectStyles(context){this.$style=header_1vue_type_style_index_0_module_true_lang_css_.default.locals||header_1vue_type_style_index_0_module_true_lang_css_.default},null,null);__webpack_exports__.a=component.exports},"927c":function(module,exports,__webpack_require__){},d1e2:function(module,__webpack_exports__,__webpack_require__){"use strict";var dist=__webpack_require__("8b21");__webpack_require__.d(__webpack_exports__,"a",function(){return theme});const theme=Object(dist.create)({base:"light",colorPrimary:"rgb(87, 79, 74)",colorSecondary:"rgb(250, 164, 26)",appBg:"rgb(242, 242, 242)",appContentBg:"rgb(255, 255, 255)",brandTitle:"System76",brandUrl:"https://system76.github.io/web-design",brandImage:"https://system76.com/assets/logo.png"})},f330:function(module,exports,__webpack_require__){var map={"./header.stories.js":"7909"};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id="f330"}},[[0,1,2]]]);
//# sourceMappingURL=main.dd264f10e8a4b9d66dc0.bundle.js.map