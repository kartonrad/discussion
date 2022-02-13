(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static\\development\\pages\\404.js"],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./style/eye.module.sass":
/*!***********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./node_modules/resolve-url-loader??ref--5-oneOf-3-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./style/eye.module.sass ***!
  \***********************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, ".eye_flyingEye__3KiV7 {\n  position: absolute;\n  z-index: 100;\n  transition: 1000ms cubic-bezier(0.68, -0.6, 0.32, 1.6);\n  transition-property: height, width, top, left;\n}\n.eye_flyingEye__3KiV7 * {\n  transition: 1000ms;\n  transition-property: stroke, stop-color;\n}\n\n.eye_flyingEyeNoAnim__3VQxz {\n  position: absolute;\n  z-index: 100;\n}\n\n.eye_eyeWrapper__1RNu4 {\n  display: block;\n  position: relative;\n}\n\n.eye_eye__34j_G {\n  position: absolute;\n  transition: transform 20s ease-in;\n  transform: scale(1);\n  z-index: 2;\n}\n.eye_eye__34j_G svg {\n  transition: -webkit-filter 20s ease-in;\n  transition: filter 20s ease-in;\n  transition: filter 20s ease-in, -webkit-filter 20s ease-in;\n  -webkit-filter: contrast(1);\n          filter: contrast(1);\n}\n\n.eye_eye__34j_G:hover {\n  transform: scale(100);\n}\n.eye_eye__34j_G:hover svg {\n  animation: eye_triggered___-AcB 0.2s steps(2) infinite;\n  -webkit-filter: contrast(100);\n          filter: contrast(100);\n}\n\n.eye_triggered___-AcB {\n  animation: eye_triggered___-AcB 0.2s steps(2) infinite;\n}\n\n@keyframes eye_triggered___-AcB {\n  0% {\n    transform: translate(2px, 1px) rotate(0deg);\n  }\n  10% {\n    transform: translate(-1px, -2px) rotate(-2deg);\n  }\n  20% {\n    transform: translate(-3px, 0) rotate(3deg);\n  }\n  30% {\n    transform: translate(0, 2px) rotate(0deg);\n  }\n  40% {\n    transform: translate(1px, -1px) rotate(1deg);\n  }\n  50% {\n    transform: translate(-1px, 2px) rotate(-1deg);\n  }\n  60% {\n    transform: translate(-3px, 1px) rotate(0deg);\n  }\n  70% {\n    transform: translate(2px, 1px) rotate(-2deg);\n  }\n  80% {\n    transform: translate(-1px, -1px) rotate(4deg);\n  }\n  90% {\n    transform: translate(2px, 2px) rotate(0deg);\n  }\n  100% {\n    transform: translate(1px, -2px) rotate(-1deg);\n  }\n}", "",{"version":3,"sources":["C:/Users/kongr/Documents/ProjectHome/Programming/node/discussion/style/eye.module.sass"],"names":[],"mappings":"AAAA;EACI,kBAAA;EACA,YAAA;EACA,sDAAA;EACA,6CAAA;AACJ;AACI;EACI,kBAAA;EACA,uCAAA;AACR;;AACA;EACI,kBAAA;EACA,YAAA;AAEJ;;AAAA;EACI,cAAA;EACA,kBAAA;AAGJ;;AAAA;EACI,kBAAA;EACA,iCAAA;EACA,mBAAA;EACA,UAAA;AAGJ;AADI;EACI,sCAAA;EAAA,8BAAA;EAAA,0DAAA;EACA,2BAAA;UAAA,mBAAA;AAGR;;AADA;EACI,qBAAA;AAIJ;AAFI;EACI,sDAAA;EACA,6BAAA;UAAA,qBAAA;AAIR;;AAFA;EACI,sDAAA;AAKJ;;AAHA;EACI;IACI,2CAAA;EAMN;EAJE;IACI,8CAAA;EAMN;EAJE;IACI,0CAAA;EAMN;EAJE;IACI,yCAAA;EAMN;EAJE;IACI,4CAAA;EAMN;EAJE;IACI,6CAAA;EAMN;EAJE;IACI,4CAAA;EAMN;EAJE;IACI,4CAAA;EAMN;EAJE;IACI,6CAAA;EAMN;EAJE;IACI,2CAAA;EAMN;EAJE;IACI,6CAAA;EAMN;AACF","file":"eye.module.sass","sourcesContent":[".flyingEye\r\n    position: absolute\r\n    z-index: 100\r\n    transition: 1000ms cubic-bezier(0.68, -0.6, 0.32, 1.6)\r\n    transition-property: height, width, top, left\r\n\r\n    & *\r\n        transition: 1000ms\r\n        transition-property: stroke, stop-color\r\n\r\n.flyingEyeNoAnim\r\n    position: absolute\r\n    z-index: 100\r\n\r\n.eyeWrapper \r\n    display: block\r\n    position: relative\r\n    \r\n\r\n.eye\r\n    position: absolute\r\n    transition: transform 20s ease-in\r\n    transform: scale(1)\r\n    z-index: 2\r\n\r\n    svg\r\n        transition: filter 20s ease-in\r\n        filter: contrast(1)\r\n\r\n.eye:hover\r\n    transform: scale(100)\r\n\r\n    svg\r\n        animation: triggered .2s steps(2) infinite\r\n        filter: contrast(100)\r\n\r\n.triggered\r\n    animation: triggered .2s steps(2) infinite\r\n\r\n@keyframes triggered     \r\n    0% \r\n        transform: translate(2px,1px) rotate(0deg)\r\n    \r\n    10% \r\n        transform: translate(-1px,-2px) rotate(-2deg)\r\n    \r\n    20% \r\n        transform: translate(-3px,0) rotate(3deg)\r\n    \r\n    30% \r\n        transform: translate(0,2px) rotate(0deg)\r\n    \r\n    40% \r\n        transform: translate(1px,-1px) rotate(1deg)\r\n    \r\n    50% \r\n        transform: translate(-1px,2px) rotate(-1deg)\r\n    \r\n    60% \r\n        transform: translate(-3px,1px) rotate(0deg)\r\n    \r\n    70% \r\n        transform: translate(2px,1px) rotate(-2deg)\r\n\r\n    80% \r\n        transform: translate(-1px,-1px) rotate(4deg)\r\n    \r\n    90% \r\n        transform: translate(2px,2px) rotate(0deg)\r\n    \r\n    100% \r\n        transform: translate(1px,-2px) rotate(-1deg)"]}]);
// Exports
exports.locals = {
	"flyingEye": "eye_flyingEye__3KiV7",
	"flyingEyeNoAnim": "eye_flyingEyeNoAnim__3VQxz",
	"eyeWrapper": "eye_eyeWrapper__1RNu4",
	"eye": "eye_eye__34j_G",
	"triggered": "eye_triggered___-AcB"
};
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F404&absolutePagePath=C%3A%5CUsers%5Ckongr%5CDocuments%5CProjectHome%5CProgramming%5Cnode%5Cdiscussion%5Cpages%5C404.js&hotRouterUpdates=true!./":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F404&absolutePagePath=C%3A%5CUsers%5Ckongr%5CDocuments%5CProjectHome%5CProgramming%5Cnode%5Cdiscussion%5Cpages%5C404.js&hotRouterUpdates=true ***!
  \***************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/404",
      function () {
        var mod = __webpack_require__(/*! ./pages/404.js */ "./pages/404.js");
        if (true) {
          module.hot.accept(/*! ./pages/404.js */ "./pages/404.js", function () {
            if (!next.router.components["/404"]) return;
            var updatedPage = __webpack_require__(/*! ./pages/404.js */ "./pages/404.js");
            next.router.update("/404", updatedPage);
          });
        }
        return mod;
      }
    ]);
  

/***/ }),

/***/ "./node_modules/react/index.js":
/*!*******************************************************************************************!*\
  !*** delegated ./node_modules/react/index.js from dll-reference dll_2adc2403d89adc16ead0 ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_2adc2403d89adc16ead0 */ "dll-reference dll_2adc2403d89adc16ead0"))("./node_modules/react/index.js");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./pages/404.js":
/*!**********************!*\
  !*** ./pages/404.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return custom404; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_eye_module_sass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../style/eye.module.sass */ "./style/eye.module.sass");
/* harmony import */ var _style_eye_module_sass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_eye_module_sass__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\kongr\\Documents\\ProjectHome\\Programming\\node\\discussion\\pages\\404.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function custom404() {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 9
    }
  }, "404 NOT FOUND"), __jsx("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }
  }, "The page or resource you are looking for is not here. "), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }, "There reasons for this error include:"), __jsx("ol", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }
  }, __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }
  }, " ", __jsx("b", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 18
    }
  }, "YOU"), " are a retard"), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }
  }, " ", __jsx("b", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 18
    }
  }, "YOU"), " can't type"), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }
  }, " I deleted your content because it was bad"), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }
  }, "I ", __jsx("span", {
    className: _style_eye_module_sass__WEBPACK_IMPORTED_MODULE_1___default.a.triggered,
    style: {
      display: "inline-block"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 19
    }
  }, "gnomed "), " you by fooling you with an invalid link "), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }
  }, " (maybe ", __jsx("sub", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 25
    }
  }, "never"), " i screwed up my JavaScript", __jsx("sub", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 68
    }
  }, "impossible"), ")")));
}

/***/ }),

/***/ "./style/eye.module.sass":
/*!*******************************!*\
  !*** ./style/eye.module.sass ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!../node_modules/resolve-url-loader??ref--5-oneOf-3-3!../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./eye.module.sass */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./style/eye.module.sass");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement)// Remember: this is development only code.
//
// After styles are injected, we need to remove the
// <style> tags that set `body { display: none; }`.
//
// We use `requestAnimationFrame` as a way to defer
// this operation since there may be multiple style
// tags.
;(self.requestAnimationFrame||setTimeout)(function(){for(var x=document.querySelectorAll('[data-next-hide-fouc]'),i=x.length;i--;){x[i].parentNode.removeChild(x[i]);}});};
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!../node_modules/resolve-url-loader??ref--5-oneOf-3-3!../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./eye.module.sass */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./style/eye.module.sass",
      function () {
        var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!../node_modules/resolve-url-loader??ref--5-oneOf-3-3!../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./eye.module.sass */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./style/eye.module.sass");

              newContent = newContent.__esModule ? newContent.default : newContent;

              if (typeof newContent === 'string') {
                newContent = [[module.i, newContent, '']];
              }

              if (!isEqualLocals(oldLocals, newContent.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = newContent.locals;

              update(newContent);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ 1:
/*!*******************************************************************************************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2F404&absolutePagePath=C%3A%5CUsers%5Ckongr%5CDocuments%5CProjectHome%5CProgramming%5Cnode%5Cdiscussion%5Cpages%5C404.js&hotRouterUpdates=true ***!
  \*******************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! next-client-pages-loader?page=%2F404&absolutePagePath=C%3A%5CUsers%5Ckongr%5CDocuments%5CProjectHome%5CProgramming%5Cnode%5Cdiscussion%5Cpages%5C404.js&hotRouterUpdates=true! */"./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F404&absolutePagePath=C%3A%5CUsers%5Ckongr%5CDocuments%5CProjectHome%5CProgramming%5Cnode%5Cdiscussion%5Cpages%5C404.js&hotRouterUpdates=true!./");


/***/ }),

/***/ "dll-reference dll_2adc2403d89adc16ead0":
/*!*******************************************!*\
  !*** external "dll_2adc2403d89adc16ead0" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = dll_2adc2403d89adc16ead0;

/***/ })

},[[1,"static/runtime/webpack.js"]]]);
//# sourceMappingURL=404.js.map