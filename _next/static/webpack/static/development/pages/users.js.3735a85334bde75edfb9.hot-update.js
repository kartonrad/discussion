webpackHotUpdate("static\\development\\pages\\users.js",{

/***/ "./components/UserList.js":
/*!********************************!*\
  !*** ./components/UserList.js ***!
  \********************************/
/*! exports provided: UserList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserList", function() { return UserList; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hooks_users__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hooks/users */ "./hooks/users.js");
/* harmony import */ var _UserEntry__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UserEntry */ "./components/UserEntry.js");
/* harmony import */ var _style_user_module_sass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../style/user.module.sass */ "./style/user.module.sass");
/* harmony import */ var _style_user_module_sass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_user_module_sass__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ProfileForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ProfileForm */ "./components/ProfileForm.js");
var _jsxFileName = "C:\\Users\\kongr\\Documents\\ProjectHome\\Programming\\node\\discussion\\components\\UserList.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function UserList() {
  var _this = this;

  var users = Object(_hooks_users__WEBPACK_IMPORTED_MODULE_1__["useUserIds"])();
  var usrObjs = users.map(function (usr) {
    return __jsx(_UserEntry__WEBPACK_IMPORTED_MODULE_2__["UserEntry"], {
      key: usr.id,
      usr: usr,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 17
      }
    });
  });
  return __jsx("div", {
    className: _style_user_module_sass__WEBPACK_IMPORTED_MODULE_3___default.a.userList,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 12
    }
  }, usrObjs);
}

/***/ })

})
//# sourceMappingURL=users.js.3735a85334bde75edfb9.hot-update.js.map