webpackHotUpdate("static\\development\\pages\\users.js",{

/***/ "./components/layout/Layout.js":
/*!*************************************!*\
  !*** ./components/layout/Layout.js ***!
  \*************************************/
/*! exports provided: Layout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Layout", function() { return Layout; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/md */ "./node_modules/react-icons/md/index.esm.js");
/* harmony import */ var _hooks_identity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hooks/identity */ "./hooks/identity.js");
/* harmony import */ var _AccountPicker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../AccountPicker */ "./components/AccountPicker.js");
/* harmony import */ var _MultilevelMenu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../MultilevelMenu */ "./components/MultilevelMenu.js");
/* harmony import */ var _PushSubToggle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../PushSubToggle */ "./components/PushSubToggle.js");
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Container */ "./components/layout/Container.js");
/* harmony import */ var _ContextMenu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ContextMenu */ "./components/layout/ContextMenu.js");
/* harmony import */ var _EyeOfJudgement__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./EyeOfJudgement */ "./components/layout/EyeOfJudgement.js");
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Header */ "./components/layout/Header.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var _PostForm__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../PostForm */ "./components/PostForm.js");
/* harmony import */ var _ProfileForm__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../ProfileForm */ "./components/ProfileForm.js");
var _jsxFileName = "C:\\Users\\kongr\\Documents\\ProjectHome\\Programming\\node\\discussion\\components\\layout\\Layout.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;














function Layout(props) {
  return __jsx(_EyeOfJudgement__WEBPACK_IMPORTED_MODULE_9__["EyeProvider"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }, __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }
  }, props.windowTitle || "Civil Discussion")), __jsx(_hooks_identity__WEBPACK_IMPORTED_MODULE_3__["IdentityProvider"], {
    disablePopup: props.disablePopup,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  }, __jsx(_ContextMenu__WEBPACK_IMPORTED_MODULE_8__["ContextMenu"], {
    style: {
      backgroundColor: "#181a1b",
      height: "100vh",
      width: "100vw"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }
  }, __jsx(_Header__WEBPACK_IMPORTED_MODULE_10__["Header"], {
    title: props.title,
    rerenderFunc: props.rerenderFunc || function () {},
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 17
    }
  }, __jsx(_Header__WEBPACK_IMPORTED_MODULE_10__["HeaderButton"], {
    icon: __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_11__["FaPlus"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 41
      }
    }),
    drawer: __jsx(_PostForm__WEBPACK_IMPORTED_MODULE_12__["PostForm"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 25
      }
    }),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 21
    }
  }), __jsx(_Header__WEBPACK_IMPORTED_MODULE_10__["UserHeaderButton"], {
    icon: __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_11__["FaUser"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 45
      }
    }),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 21
    }
  }, __jsx(_MultilevelMenu__WEBPACK_IMPORTED_MODULE_5__["Dropdown"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 25
    }
  }, __jsx(_ProfileForm__WEBPACK_IMPORTED_MODULE_13__["AccountSettingsButton"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 29
    }
  }), __jsx(_MultilevelMenu__WEBPACK_IMPORTED_MODULE_5__["DropdownItem"], {
    leftIcon: __jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_2__["MdSwapHoriz"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 53
      }
    }),
    text: "Switch Acount",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 29
    }
  }, __jsx(_AccountPicker__WEBPACK_IMPORTED_MODULE_4__["AccountPicker"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 33
    }
  })), __jsx(_PushSubToggle__WEBPACK_IMPORTED_MODULE_6__["PushSubToggle"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 29
    }
  }))), __jsx(_Header__WEBPACK_IMPORTED_MODULE_10__["HeaderButton"], {
    icon: __jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_2__["MdSettings"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 41
      }
    }),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 21
    }
  }, __jsx(_MultilevelMenu__WEBPACK_IMPORTED_MODULE_5__["Dropdown"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 25
    }
  }, __jsx(_MultilevelMenu__WEBPACK_IMPORTED_MODULE_5__["DropdownItem"], {
    text: "Privacy Policy",
    link: "" + "/privacy",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 29
    }
  }), __jsx(_MultilevelMenu__WEBPACK_IMPORTED_MODULE_5__["DropdownItem"], {
    text: "SECRET (dont open!!)",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 29
    }
  }, __jsx(_MultilevelMenu__WEBPACK_IMPORTED_MODULE_5__["DropdownItem"], {
    text: "lmao",
    link: "https://www.youtube.com/watch?v=djV11Xbc914",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 33
    }
  }), __jsx(_MultilevelMenu__WEBPACK_IMPORTED_MODULE_5__["DropdownItem"], {
    text: "DONT CLICK",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 33
    }
  }, __jsx(_MultilevelMenu__WEBPACK_IMPORTED_MODULE_5__["DropdownItem"], {
    text: "CIA Database",
    link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ&autoplay=1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 37
    }
  }), __jsx(_MultilevelMenu__WEBPACK_IMPORTED_MODULE_5__["DropdownItem"], {
    text: "No :o",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 37
    }
  })))))), __jsx(_Container__WEBPACK_IMPORTED_MODULE_7__["Container"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 17
    }
  }, props.children))));
}

/***/ })

})
//# sourceMappingURL=users.js.774385b69979e31d774a.hot-update.js.map