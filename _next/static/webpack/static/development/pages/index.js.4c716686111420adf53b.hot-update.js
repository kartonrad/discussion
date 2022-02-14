webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/FallbackImg.js":
/*!***********************************!*\
  !*** ./components/FallbackImg.js ***!
  \***********************************/
/*! exports provided: FallbackImg, FallbackImgImg */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FallbackImg", function() { return FallbackImg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FallbackImgImg", function() { return FallbackImgImg; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constants */ "./constants/index.js");
/* harmony import */ var _style_style_module_sass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../style/style.module.sass */ "./style/style.module.sass");
/* harmony import */ var _style_style_module_sass__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_style_style_module_sass__WEBPACK_IMPORTED_MODULE_5__);


var _jsxFileName = "C:\\Users\\kongr\\Documents\\ProjectHome\\Programming\\node\\discussion\\components\\FallbackImg.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }





function FallbackImg(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      error = _useState[0],
      setError = _useState[1];

  function onerror(ev) {
    setError(true);
  }

  var src2 = props.src2 || _constants__WEBPACK_IMPORTED_MODULE_4__["apiUrl"] + "/assets/img/gnomed.png";
  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }, __jsx("img", {
    src: error ? src2 : props.src || src2,
    onError: onerror,
    style: {
      filter: error ? "brightness(50%)" : ""
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }
  }), error && __jsx("div", {
    style: {
      color: "red",
      width: "40px",
      height: "50px"
    },
    className: _style_style_module_sass__WEBPACK_IMPORTED_MODULE_5___default.a.centerAbsolute,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 17
    }
  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__["FaBolt"], {
    size: "30px",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 21
    }
  }), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 21
    }
  }, "URL")));
}
function FallbackImgImg(props) {
  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      error = _useState2[0],
      setError = _useState2[1];

  function onerror(ev) {
    setError(true);
  }

  var src2 = props.src2 || _constants__WEBPACK_IMPORTED_MODULE_4__["apiUrl"] + "/assets/img/gnomed.png";
  console.log("src", props.src);
  console.log("src2", src2);

  var pass = _objectSpread({}, props);

  delete pass.src;
  return __jsx("img", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    src: error ? src2 : props.src || src2,
    onError: onerror
  }, pass, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 9
    }
  }));
}

/***/ })

})
//# sourceMappingURL=index.js.4c716686111420adf53b.hot-update.js.map