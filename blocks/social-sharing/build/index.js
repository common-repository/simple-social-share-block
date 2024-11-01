this["eventpost"] = this["eventpost"] || {}; this["eventpost"]["social-sharing"] =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__wordpress_blocks__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__wordpress_blocks___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__wordpress_blocks__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__wordpress_editor__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__wordpress_editor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__wordpress_editor__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__wordpress_element__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__wordpress_element___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__wordpress_element__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__wordpress_components__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__wordpress_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__wordpress_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__style_scss__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__style_scss__);


// Just a way to wrap elements without producing any wrapper markup


// Just a way to wrap elements without producing any wrapper markup


// Components contain several reusable React components


var __ = wp.i18n.__;



Object(__WEBPACK_IMPORTED_MODULE_0__wordpress_blocks__["registerBlockType"])("sssb/block", {
  title: __("Social Sharing Button", 'simple-social-sharing-block'),
  icon: "share",
  category: "common",
  attributes: {
    display: { type: 'string' },
    colour: { type: 'string' },
    side: { type: 'string' },

    show_facebook: { type: 'number' },

    show_twitter: { type: 'number' },
    text_twitter: { type: 'string' },

    show_email: { type: 'number' },
    object_email: { type: 'string' },
    text_email: { type: 'string' },

    show_print: { type: 'number' },

    url: { type: 'string' }
  },

  edit: function edit(_ref) {
    var className = _ref.className,
        attributes = _ref.attributes,
        setAttributes = _ref.setAttributes,
        isSelected = _ref.isSelected,
        id = _ref.id;
    var display = attributes.display,
        colour = attributes.colour,
        side = attributes.side,
        _attributes$show_face = attributes.show_facebook,
        show_facebook = _attributes$show_face === undefined ? true : _attributes$show_face,
        _attributes$show_twit = attributes.show_twitter,
        show_twitter = _attributes$show_twit === undefined ? true : _attributes$show_twit,
        text_twitter = attributes.text_twitter,
        _attributes$show_emai = attributes.show_email,
        show_email = _attributes$show_emai === undefined ? true : _attributes$show_emai,
        object_email = attributes.object_email,
        text_email = attributes.text_email,
        _attributes$show_prin = attributes.show_print,
        show_print = _attributes$show_prin === undefined ? true : _attributes$show_prin,
        url = attributes.url;


    var setdisplay = function setdisplay(display) {
      return setAttributes({ display: display });
    };
    var setcolour = function setcolour(colour) {
      return setAttributes({ colour: colour });
    };
    var setside = function setside(side) {
      return setAttributes({ side: side });
    };

    var setshow_facebook = function setshow_facebook(value) {
      setAttributes({ show_facebook: value });
    };

    var setshow_twitter = function setshow_twitter(value) {
      setAttributes({ show_twitter: value });
    };
    var settext_twitter = function settext_twitter(text_twitter) {
      return setAttributes({ text_twitter: text_twitter });
    };

    var setshow_email = function setshow_email(value) {
      setAttributes({ show_email: value });
    };
    var setobject_email = function setobject_email(object_email) {
      return setAttributes({ object_email: object_email });
    };
    var settext_email = function settext_email(text_email) {
      return setAttributes({ text_email: text_email });
    };

    var setshow_print = function setshow_print(value) {
      setAttributes({ show_print: value });
    };

    var seturl = function seturl(value) {
      setAttributes({ url: value });
    };

    return React.createElement(
      __WEBPACK_IMPORTED_MODULE_2__wordpress_element__["Fragment"],
      null,
      React.createElement(
        "div",
        { className: "wp-block-socia-sharing", id: "preview-" + id },
        React.createElement(
          "ul",
          { className: "list-socia-sharing " + colour + " " + side },
          show_email == 1 && React.createElement(
            "li",
            null,
            React.createElement(
              "a",
              { className: "share-button share-button_email " + display },
              React.createElement("span", { className: "dashicons dashicons-email-alt" })
            )
          ),
          show_print == 1 && React.createElement(
            "li",
            null,
            React.createElement(
              "a",
              { className: "share-button share-button_print " + display },
              React.createElement("span", { className: "dashicons dashicons-media-document" })
            )
          ),
          show_facebook == 1 && React.createElement(
            "li",
            null,
            React.createElement(
              "a",
              { className: "share-button share-button_facebook " + display },
              React.createElement("span", { className: "dashicons dashicons-facebook-alt" })
            )
          ),
          show_twitter == 1 && React.createElement(
            "li",
            null,
            React.createElement(
              "a",
              { className: "share-button share-button_twitter " + display },
              React.createElement("span", { className: "dashicons dashicons-twitter" })
            )
          )
        )
      ),
      isSelected && React.createElement(
        __WEBPACK_IMPORTED_MODULE_1__wordpress_editor__["InspectorControls"],
        null,
        React.createElement(__WEBPACK_IMPORTED_MODULE_3__wordpress_components__["SelectControl"], {
          label: __('Display :', 'simple-social-sharing-block'),
          value: display,
          className: "first_control",
          options: [{ label: __('Images', 'simple-social-sharing-block'), value: "images" }, { label: __('Icons', 'simple-social-sharing-block'), value: "icons" }],
          onChange: setdisplay
        }),
        display == "icons" && React.createElement(__WEBPACK_IMPORTED_MODULE_3__wordpress_components__["SelectControl"], {
          label: __('Colour :', 'simple-social-sharing-block'),
          value: colour,
          options: [{ label: __('Originals', 'simple-social-sharing-block'), value: "original" }, { label: __('Grayscale', 'simple-social-sharing-block'), value: "grayscale" }, { label: __('Black', 'simple-social-sharing-block'), value: "black" }, { label: __('White', 'simple-social-sharing-block'), value: "white" }],
          onChange: setcolour
        }),
        display == "images" && React.createElement(__WEBPACK_IMPORTED_MODULE_3__wordpress_components__["SelectControl"], {
          label: __('Colour :', 'simple-social-sharing-block'),
          value: colour,
          options: [{ label: __('Originals', 'simple-social-sharing-block'), value: "original" }, { label: __('Grayscale', 'simple-social-sharing-block'), value: "grayscale" }],
          onChange: setcolour
        }),
        React.createElement(__WEBPACK_IMPORTED_MODULE_3__wordpress_components__["SelectControl"], {
          label: __('Colour :', 'simple-social-sharing-block'),
          value: colour,
          options: [{ label: __('Originals', 'simple-social-sharing-block'), value: "original" }, { label: __('Grayscale', 'simple-social-sharing-block'), value: "grayscale" }, { label: __('Black', 'simple-social-sharing-block'), value: "black" }, { label: __('White', 'simple-social-sharing-block'), value: "white" }],
          onChange: setcolour
        }),
        React.createElement(__WEBPACK_IMPORTED_MODULE_3__wordpress_components__["SelectControl"], {
          label: __('Alignment :', 'simple-social-sharing-block'),
          value: side,
          className: "first_control",
          options: [{ label: __('Aligned Right', 'simple-social-sharing-block'), value: "right" }, { label: __('Aligned Left', 'simple-social-sharing-block'), value: "left" }],
          onChange: setside
        }),
        React.createElement(__WEBPACK_IMPORTED_MODULE_3__wordpress_components__["ToggleControl"], {
          label: __('Show eMail', 'simple-social-sharing-block'),
          checked: show_email,
          onChange: setshow_email
        }),
        show_email && React.createElement(__WEBPACK_IMPORTED_MODULE_3__wordpress_components__["TextControl"], {
          label: __('Object', 'simple-social-sharing-block'),
          value: object_email,
          onChange: setobject_email,
          className: "setobject_email share_text",
          placeholder: __('Have a look at this!', 'simple-social-sharing-block'),
          help: __('This is the object that will be used by default when sharing via eMail. If you use %s it will be replaced by the Title of the article.', 'simple-social-sharing-block')
        }),
        show_email && React.createElement(__WEBPACK_IMPORTED_MODULE_3__wordpress_components__["TextareaControl"], {
          value: text_email,
          label: __('Body', 'simple-social-sharing-block'),
          onChange: settext_email,
          className: "settext_email share_text",
          placeholder: __('You might be interested in this article.', 'simple-social-sharing-block'),
          help: __('This is the text that will be used by default when sharing via eMail. If you use %s it will be replaced by the Title of the article.', 'simple-social-sharing-block')
        }),
        React.createElement(__WEBPACK_IMPORTED_MODULE_3__wordpress_components__["ToggleControl"], {
          label: __('Show Print', 'simple-social-sharing-block'),
          checked: show_print,
          onChange: setshow_print
        }),
        React.createElement(__WEBPACK_IMPORTED_MODULE_3__wordpress_components__["ToggleControl"], {
          label: __('Show Facebook', 'simple-social-sharing-block'),
          checked: show_facebook,
          onChange: setshow_facebook
        }),
        React.createElement(__WEBPACK_IMPORTED_MODULE_3__wordpress_components__["ToggleControl"], {
          label: __('Show Twitter', 'simple-social-sharing-block'),
          checked: show_twitter,
          onChange: setshow_twitter
        }),
        show_twitter && React.createElement(__WEBPACK_IMPORTED_MODULE_3__wordpress_components__["TextareaControl"], {
          value: text_twitter,
          label: __('Message', 'simple-social-sharing-block'),
          onChange: settext_twitter,
          className: "settext_twitter share_text",
          placeholder: __('Hey Twitter!', 'simple-social-sharing-block'),
          help: __('This is the text that will be used by default when sharing on Twitter. If you use %s it will be replaced by the Title of the article.', 'simple-social-sharing-block')
        }),
        React.createElement(__WEBPACK_IMPORTED_MODULE_3__wordpress_components__["TextControl"], {
          value: url,
          label: __('URL', 'simple-social-sharing-block'),
          onChange: seturl,
          className: "seturl",
          placeholder: __('Current Page', 'simple-social-sharing-block'),
          help: __('The above will change the URL for the Sharing, if left empty the URL will be the one of the current page. It must be a valid URL.', 'simple-social-sharing-block')
        })
      )
    );
  },
  save: function save() {
    return null;
  }
});

/***/ }),
/* 1 */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["blocks"]; }());

/***/ }),
/* 2 */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["editor"]; }());

/***/ }),
/* 3 */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["element"]; }());

/***/ }),
/* 4 */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["components"]; }());

/***/ }),
/* 5 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);
//# sourceMappingURL=index.js.map