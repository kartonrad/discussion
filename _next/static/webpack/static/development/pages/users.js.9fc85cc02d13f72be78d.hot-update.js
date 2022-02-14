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
/* harmony import */ var _style_user_module_sass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../style/user.module.sass */ "./style/user.module.sass");
/* harmony import */ var _style_user_module_sass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_user_module_sass__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constants */ "./constants/index.js");
var _jsxFileName = "C:\\Users\\kongr\\Documents\\ProjectHome\\Programming\\node\\discussion\\components\\FallbackImg.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





function FallbackImg(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      error = _useState[0],
      setError = _useState[1];

  var src2 = props.src2 || _constants__WEBPACK_IMPORTED_MODULE_4__["apiUrl"] + "/assets/img/gnomed.png";

  function onerror(ev) {
    setError(true);
  }

  return __jsx("div", {
    className: "fallbackImg " + _style_user_module_sass__WEBPACK_IMPORTED_MODULE_3___default.a.pic,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
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
      lineNumber: 18,
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
      lineNumber: 20,
      columnNumber: 17
    }
  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__["FaBolt"], {
    size: "30px",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 21
    }
  }), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 21
    }
  }, "URL")));
}

/***/ })

})
//# sourceMappingURL=users.js.9fc85cc02d13f72be78d.hot-update.js.map