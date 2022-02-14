webpackHotUpdate("static\\development\\pages\\users.js",{

/***/ "./components/FallbackImg.js":
/*!***********************************!*\
  !*** ./components/FallbackImg.js ***!
  \***********************************/
/*! exports provided: FallbackImg */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FallbackImg", function() { return FallbackImg; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var _style_style_module_sass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../style/style.module.sass */ "./style/style.module.sass");
/* harmony import */ var _style_style_module_sass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_style_module_sass__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\kongr\\Documents\\ProjectHome\\Programming\\node\\discussion\\components\\FallbackImg.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function FallbackImg(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      error = _useState[0],
      setError = _useState[1];

  function onerror(ev) {
    setError(true);
  }

  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }, __jsx("img", {
    src: error ? props.src2 : props.src || props.src2,
    onError: onerror,
    style: {
      filter: error ? "brightness(50%)" : ""
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }
  }), error && __jsx("div", {
    style: {
      color: "red",
      width: "40px",
      height: "50px"
    },
    className: _style_style_module_sass__WEBPACK_IMPORTED_MODULE_2___default.a.centerAbsolute,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 17
    }
  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__["FaBolt"], {
    size: "30px",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 21
    }
  }), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 21
    }
  }, "URL")));
}

/***/ })

})
//# sourceMappingURL=users.js.aeb9aec0c71a884816ed.hot-update.js.map