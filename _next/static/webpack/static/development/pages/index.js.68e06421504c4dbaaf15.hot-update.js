webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/ProfileForm.js":
/*!***********************************!*\
  !*** ./components/ProfileForm.js ***!
  \***********************************/
/*! exports provided: ProfileForm, LogoutButton, AccountSettingsButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileForm", function() { return ProfileForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutButton", function() { return LogoutButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountSettingsButton", function() { return AccountSettingsButton; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _hooks_identity__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hooks/identity */ "./hooks/identity.js");
/* harmony import */ var _style_form_module_sass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../style/form.module.sass */ "./style/form.module.sass");
/* harmony import */ var _style_form_module_sass__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_style_form_module_sass__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _layout_Modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./layout/Modal */ "./components/layout/Modal.js");
/* harmony import */ var _MultilevelMenu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./MultilevelMenu */ "./components/MultilevelMenu.js");
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-icons/md */ "./node_modules/react-icons/md/index.esm.js");
/* harmony import */ var _FallbackImg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./FallbackImg */ "./components/FallbackImg.js");
/* harmony import */ var _layout_EyeOfJudgement__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./layout/EyeOfJudgement */ "./components/layout/EyeOfJudgement.js");



var _jsxFileName = "C:\\Users\\kongr\\Documents\\ProjectHome\\Programming\\node\\discussion\\components\\ProfileForm.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }









function ProfileForm(props) {
  var _useIdentity = Object(_hooks_identity__WEBPACK_IMPORTED_MODULE_4__["useIdentity"])(),
      _useIdentity2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useIdentity, 2),
      id = _useIdentity2[0],
      axios = _useIdentity2[1];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({}),
      u = _useState[0],
      setU = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({}),
      changes = _useState2[0],
      setChanges = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      loading = _useState3[0],
      setLoading = _useState3[1];

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    if (id.active !== null) update();
  }, [id]);

  function update() {
    axios.get("/user/me").then(function (res) {
      setU(res.data);
    })["catch"]();
  }

  function onChange(evt) {
    var _evt$target = evt.target,
        name = _evt$target.name,
        value = _evt$target.value;
    setChanges(function (prev) {
      var lol = _objectSpread({}, prev);

      lol[name] = value;
      if (!value) delete lol[name];
      return lol;
    });
  }

  function onSubmit(evt) {
    var res;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function onSubmit$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            evt.preventDefault();
            setLoading(true);
            _context.prev = 2;
            _context.next = 5;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(axios.put("/user/me", changes));

          case 5:
            res = _context.sent;
            setLoading(false);
            reset();
            update();
            _context.next = 14;
            break;

          case 11:
            _context.prev = 11;
            _context.t0 = _context["catch"](2);
            setLoading(false);

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[2, 11]], Promise);
  }

  function reset(evt) {
    setChanges({});
    if (evt) evt.preventDefault();
  }

  return __jsx("form", {
    className: _style_form_module_sass__WEBPACK_IMPORTED_MODULE_5___default.a.form,
    onSubmit: onSubmit,
    style: {
      position: "relative"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 12
    }
  }, __jsx("label", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 9
    }
  }, " Username:", __jsx("div", {
    style: {
      display: "flex"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 13
    }
  }, "@", __jsx("input", {
    type: "text",
    style: {
      flexGrow: 1
    },
    placeholder: u.username || "",
    onChange: onChange,
    value: changes.username || "",
    name: "username",
    disabled: loading,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 45
    }
  }))), __jsx("label", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 9
    }
  }, " Clear Name:", __jsx("input", {
    type: "text",
    name: "clearname",
    placeholder: u.clearname || u.username || "",
    onChange: onChange,
    value: changes.clearname || "",
    disabled: loading,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 13
    }
  })), __jsx("label", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 9
    }
  }, " Profile Picture (direct link to image):", __jsx(_FallbackImg__WEBPACK_IMPORTED_MODULE_9__["FallbackImgImg"], {
    src: u.avatarUrl,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 13
    }
  }), " ", __jsx("input", {
    type: "text",
    style: {
      width: "calc( 100% - 3.5em)"
    },
    name: "avatarUrl",
    placeholder: u.avatarUrl || "(none)",
    onChange: onChange,
    value: changes.avatarUrl || "",
    disabled: loading,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 13
    }
  })), __jsx("label", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 9
    }
  }, "Description:", __jsx("textarea", {
    name: "description",
    placeholder: u.description || "(none)",
    rows: "4",
    autoComplete: "off",
    onChange: onChange,
    value: changes.description || "",
    disabled: loading,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 13
    }
  })), __jsx("button", {
    onClick: reset,
    disabled: loading,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 9
    }
  }, "Reset"), __jsx("div", {
    className: _style_form_module_sass__WEBPACK_IMPORTED_MODULE_5___default.a.submitButton,
    style: {
      zIndex: 1
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 9
    }
  }, __jsx("button", {
    disabled: loading,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 60
    }
  }, "Save")));
}
function LogoutButton() {
  var _useIdentity3 = Object(_hooks_identity__WEBPACK_IMPORTED_MODULE_4__["useIdentity"])(),
      _useIdentity4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useIdentity3, 2),
      id = _useIdentity4[0],
      axios = _useIdentity4[1];

  function onClick() {
    console.log(user);
    props.id.removeUser(user.username);
    ref.current.toggleModal();
  }
}
function AccountSettingsButton(props) {
  var _useIdentity5 = Object(_hooks_identity__WEBPACK_IMPORTED_MODULE_4__["useIdentity"])(),
      _useIdentity6 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useIdentity5, 2),
      id = _useIdentity6[0],
      axios = _useIdentity6[1];

  var modalRef = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])();
  return __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx(_MultilevelMenu__WEBPACK_IMPORTED_MODULE_7__["DropdownItem"], {
    leftIcon: __jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_8__["MdSettings"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 33
      }
    }),
    text: "Account Settings",
    onClick: function onClick() {
      if (id.active !== null) modalRef.current.toggleModal();else id.toggleModal();
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 9
    }
  }), __jsx(_layout_Modal__WEBPACK_IMPORTED_MODULE_6__["Modal"], {
    ref: modalRef,
    className: _style_form_module_sass__WEBPACK_IMPORTED_MODULE_5___default.a.accountFormWrap,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 9
    }
  }, __jsx("div", {
    style: {
      position: "absolute",
      top: "2em",
      left: "2em"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 13
    }
  }, __jsx(_layout_EyeOfJudgement__WEBPACK_IMPORTED_MODULE_10__["EyeOnMount"], {
    size: 40,
    baseColor: "#008c16",
    innerColor: "#00ffab",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 74
    }
  })), __jsx("h1", {
    style: {
      marginTop: "0px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 13
    }
  }, "Profile"), __jsx(ProfileForm, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 13
    }
  }), __jsx("hr", {
    style: {
      width: " 100%"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 13
    }
  }), __jsx("h1", {
    style: {
      marginTop: "0px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 13
    }
  }, "\uD83D\uDEE1 Security Area \uD83D\uDEE1"), __jsx("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 13
    }
  }, __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 17
    }
  }, "Log out"), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 17
    }
  }, "End all Sessions"), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 17
    }
  }, "Change Email"), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 17
    }
  }, "Change Password")), __jsx("hr", {
    style: {
      width: " 100%"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 13
    }
  }), __jsx("h1", {
    style: {
      marginTop: "0px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 13
    }
  }, "\uD83D\uDD25 Danger Zone \uD83D\uDD25"), __jsx("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 13
    }
  }, __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 17
    }
  }, "Deactivate Account"), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 17
    }
  }, "Delete Account forever"))));
}

/***/ })

})
//# sourceMappingURL=index.js.68e06421504c4dbaaf15.hot-update.js.map