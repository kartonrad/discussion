webpackHotUpdate("static\\development\\pages\\users.js",{

/***/ "./components/UserEntry.js":
/*!*********************************!*\
  !*** ./components/UserEntry.js ***!
  \*********************************/
/*! exports provided: UserEntry */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserEntry", function() { return UserEntry; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_user_module_sass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../style/user.module.sass */ "./style/user.module.sass");
/* harmony import */ var _style_user_module_sass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_user_module_sass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _FallbackImg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FallbackImg */ "./components/FallbackImg.js");
var _jsxFileName = "C:\\Users\\kongr\\Documents\\ProjectHome\\Programming\\node\\discussion\\components\\UserEntry.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function UserEntry(props) {
  var u = props.usr;
  return __jsx("div", {
    className: _style_user_module_sass__WEBPACK_IMPORTED_MODULE_1___default.a.userEntry,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 13
    }
  }, " apiUrl", __jsx("div", {
    className: _style_user_module_sass__WEBPACK_IMPORTED_MODULE_1___default.a.pic,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }
  }, __jsx(_FallbackImg__WEBPACK_IMPORTED_MODULE_2__["FallbackImg"], {
    src: u.avatarUrl,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 32
    }
  })), __jsx("div", {
    className: _style_user_module_sass__WEBPACK_IMPORTED_MODULE_1___default.a.body,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }
  }, __jsx("b", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 18
    }
  }, u.clearname || u.username)), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }
  }, __jsx("i", {
    style: {
      color: "#888"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 18
    }
  }, "@", u.username)), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 10
    }
  }, __jsx("pre", {
    style: {
      fontFamily: "inherit"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 15
    }
  }, u.description || "...")), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }
  }, __jsx("i", {
    style: {
      color: "#888"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 18
    }
  }, "id: ", u.id))));
}

/***/ })

})
//# sourceMappingURL=users.js.596cd0320c0dde5d51de.hot-update.js.map