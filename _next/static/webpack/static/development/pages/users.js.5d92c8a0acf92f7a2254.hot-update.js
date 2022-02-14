webpackHotUpdate("static\\development\\pages\\users.js",{

/***/ "./components/AccountPicker.js":
/*!*************************************!*\
  !*** ./components/AccountPicker.js ***!
  \*************************************/
/*! exports provided: AccountPicker, AccountModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountPicker", function() { return AccountPicker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountModal", function() { return AccountModal; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _hooks_identity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/identity */ "./hooks/identity.js");
/* harmony import */ var _components_MultilevelMenu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/MultilevelMenu */ "./components/MultilevelMenu.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var _layout_Modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./layout/Modal */ "./components/layout/Modal.js");
/* harmony import */ var _style_form_module_sass__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../style/form.module.sass */ "./style/form.module.sass");
/* harmony import */ var _style_form_module_sass__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_style_form_module_sass__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _style_style_module_sass__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../style/style.module.sass */ "./style/style.module.sass");
/* harmony import */ var _style_style_module_sass__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_style_style_module_sass__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _style_eye_module_sass__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../style/eye.module.sass */ "./style/eye.module.sass");
/* harmony import */ var _style_eye_module_sass__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_style_eye_module_sass__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _layout_EyeOfJudgement__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./layout/EyeOfJudgement */ "./components/layout/EyeOfJudgement.js");
/* harmony import */ var _AccountForm__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./AccountForm */ "./components/AccountForm.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../constants */ "./constants/index.js");


var _jsxFileName = "C:\\Users\\kongr\\Documents\\ProjectHome\\Programming\\node\\discussion\\components\\AccountPicker.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;












function AccountPicker(props) {
  var _this = this;

  var _useIdentity = Object(_hooks_identity__WEBPACK_IMPORTED_MODULE_3__["useIdentity"])(),
      _useIdentity2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useIdentity, 2),
      id = _useIdentity2[0],
      axios = _useIdentity2[1];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(-1),
      modalUser = _useState[0],
      setModalUser = _useState[1];

  var modalRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])();

  function _onClick(idx) {
    if (id.active === idx) return id.setActive(null);

    if (id.users[idx].error) {
      setModalUser(idx);
      return modalRef.current.toggleModal();
      ;
    }

    id.setActive(idx);
  }

  function icon(idx) {
    if (id.users[idx].error) {
      return getIcon(id.users[idx]);
    } else if (idx === id.active) {
      return __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_5__["FaCheck"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 20
        }
      });
    }
  }

  function addAccountClick(evt) {
    setModalUser(-1);
    modalRef.current.toggleModal();
  }

  if (modalUser > -1 && (!id.users[modalUser] || !id.users[modalUser].error)) {
    setModalUser(-1);
  }

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    setTimeout(props.reHeight, 100);
  }, [id.users]);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, id.users.map(function (user, idx) {
    return __jsx(_components_MultilevelMenu__WEBPACK_IMPORTED_MODULE_4__["DropdownItem"], {
      leftIcon: user.avatarUrl && __jsx("img", {
        src: user.avatarUrl,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 45
        }
      }),
      text: user.username,
      rightIcon: icon(idx),
      key: idx,
      onClick: function onClick() {
        return _onClick(idx);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 13
      }
    });
  }), __jsx(_components_MultilevelMenu__WEBPACK_IMPORTED_MODULE_4__["DropdownItem"], {
    leftIcon: __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_5__["FaPlus"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 33
      }
    }),
    text: "Add Acount",
    onClick: addAccountClick,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 9
    }
  }), __jsx(AccountModal, {
    ref: modalRef,
    user: id.users[modalUser] || undefined,
    id: id,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 9
    }
  }));
}
var AccountModal = Object(react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"])(function AccModal(props, ref) {
  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      deleteButtonClick = _useState2[0],
      setDBC = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(150),
      eyeSize = _useState3[0],
      setEyeSize = _useState3[1];

  function submit(data, register) {
    var registerResponse, loginResponse;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function submit$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            console.log("ehre");

            if (!register) {
              _context.next = 23;
              break;
            }

            _context.prev = 2;
            _context.next = 5;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(axios__WEBPACK_IMPORTED_MODULE_12___default.a.post("".concat(_constants__WEBPACK_IMPORTED_MODULE_13__["apiUrl"], "/register"), data));

          case 5:
            registerResponse = _context.sent;
            _context.next = 22;
            break;

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](2);

            if (!_context.t0.response) {
              _context.next = 20;
              break;
            }

            _context.t1 = _context.t0.response.status;
            _context.next = _context.t1 === 409 ? 14 : _context.t1 === 429 ? 15 : 16;
            break;

          case 14:
            return _context.abrupt("return", "username/email taken");

          case 15:
            return _context.abrupt("return", "ratelimit");

          case 16:
            ref.current.toggleModal();
            return _context.abrupt("return", "unexpected");

          case 18:
            _context.next = 22;
            break;

          case 20:
            ref.current.toggleModal();
            return _context.abrupt("return", "unexpected");

          case 22:
            console.log("register:", registerResponse);

          case 23:
            _context.prev = 23;
            _context.next = 26;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(axios__WEBPACK_IMPORTED_MODULE_12___default.a.post("".concat(_constants__WEBPACK_IMPORTED_MODULE_13__["apiUrl"], "/login"), data));

          case 26:
            loginResponse = _context.sent;
            _context.next = 46;
            break;

          case 29:
            _context.prev = 29;
            _context.t2 = _context["catch"](23);

            if (!_context.t2.response) {
              _context.next = 44;
              break;
            }

            _context.t3 = _context.t2.response.status;
            _context.next = _context.t3 === 403 ? 35 : _context.t3 === 429 ? 39 : 40;
            break;

          case 35:
            if (!register) {
              _context.next = 38;
              break;
            }

            ref.current.toggleModal();
            return _context.abrupt("return", "unexpected");

          case 38:
            return _context.abrupt("return", "wrong credentials");

          case 39:
            return _context.abrupt("return", "ratelimit");

          case 40:
            ref.current.toggleModal();
            return _context.abrupt("return", "unexpected");

          case 42:
            _context.next = 46;
            break;

          case 44:
            ref.current.toggleModal();
            return _context.abrupt("return", "unexpected");

          case 46:
            console.log("login:", loginResponse); //add account

            props.id.addUser("gamer", data.username, loginResponse.data.access_token);
            ref.current.toggleModal();

          case 49:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[2, 8], [23, 29]], Promise);
  }

  function lol() {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function lol$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(timeout(3000));

          case 2:
          case "end":
            return _context2.stop();
        }
      }
    }, null, null, null, Promise);
  } //default


  var content = __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(_AccountForm__WEBPACK_IMPORTED_MODULE_11__["TabbedAccountForm"], {
    onSubmit: submit,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 9
    }
  }), __jsx("hr", {
    style: {
      color: "#717878",
      marginTop: "2.5em"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 9
    }
  }), __jsx("p", {
    style: {
      fontSize: "1em",
      color: "#717878"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 9
    }
  }, "(Did you see how cool the eye moved?)", __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 93
    }
  }), __jsx("span", {
    className: _style_style_module_sass__WEBPACK_IMPORTED_MODULE_8___default.a.fabulous,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 98
    }
  }, "Fabulous!")));

  var eyeText = __jsx("div", {
    style: {
      color: "#ff00fe"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 19
    }
  }, __jsx("p", {
    style: {
      margin: "0"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 51
    }
  }, "Your Personal DAta.", __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 95
    }
  })), __jsx("span", {
    className: _style_eye_module_sass__WEBPACK_IMPORTED_MODULE_9___default.a.triggered,
    style: {
      display: "inline-block"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 104
    }
  }, "HAND IT OVER."));

  var color = ["", ""];
  var user = props.user;
  var icon;
  var userFate = "";
  var error = "";
  if (user) error = user.error.err;

  if (user) {
    content = __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null);
  }

  switch (error) {
    case "TokenExpiredError":
      //expiry
      eyeText = __jsx("p", {
        style: {
          color: "#ff008f"
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156,
          columnNumber: 23
        }
      }, "Sowwy >_<");
      userFate = "was automatically logged out.";
      content = __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158,
          columnNumber: 25
        }
      }, "Accounts stay logged in for 7 days.", __jsx("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158,
          columnNumber: 63
        }
      }), "Yes, this is annoying. I know.", __jsx("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158,
          columnNumber: 98
        }
      }), " ", __jsx("sup", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158,
          columnNumber: 104
        }
      }, "too scared of oauth spec tho")), __jsx("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159,
          columnNumber: 25
        }
      }, "Please reenter your password below."));
      color = ["#ff008f", "#fff"];
      break;

    case "NotBeforeError":
      //patience
      eyeText = __jsx("p", {
        style: {
          color: "#8e95ff"
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164,
          columnNumber: 23
        }
      }, "Be patient and let mystery unfold", __jsx("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164,
          columnNumber: 86
        }
      }), __jsx("i", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164,
          columnNumber: 95
        }
      }, "-Albert EInstein"));
      userFate = "will soon be logged in.";
      content = __jsx("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166,
          columnNumber: 23
        }
      }, "I don't expect this error to be caused anytime soon.", __jsx("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166,
          columnNumber: 79
        }
      }), "This occurs when you log in faster than allowed on the server", __jsx("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166,
          columnNumber: 145
        }
      }), "SO CALM DOWN, SANIC");
      color = ["#1400ff", "#ffd700"];
      break;

    case "TokenClaimError":
      if (user.error.desc === "invalid claims.") {
        //acc gone
        eyeText = __jsx("i", {
          style: {
            color: "#888"
          },
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 173,
            columnNumber: 27
          }
        }, "I`m afraid you won't be able to return");
        userFate = "was permanently deleted.";
        color = ["#888", "#000"];
        content = __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx("h3", {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 177,
            columnNumber: 21
          }
        }, "== Reasons for Deletion: =="), __jsx("ul", {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 178,
            columnNumber: 21
          }
        }, __jsx("li", {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 179,
            columnNumber: 25
          }
        }, "U dumb"), __jsx("li", {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 180,
            columnNumber: 25
          }
        }, "U deleted it urself"), __jsx("li", {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 181,
            columnNumber: 25
          }
        }, "Ur user-id changed, and your account still exists ", __jsx("br", {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 181,
            columnNumber: 79
          }
        }), __jsx("sub", {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 181,
            columnNumber: 84
          }
        }, "that would be rlly dumb and a major security concern but jk maybe")), __jsx("li", {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 182,
            columnNumber: 25
          }
        }, "Ur a toxic troglodyte"), __jsx("li", {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 183,
            columnNumber: 25
          }
        }, "U ", __jsx("i", {
          style: {
            color: "#a4000e"
          },
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 183,
            columnNumber: 31
          }
        }, "stole"), " an email, and it's owner sent the ", __jsx("i", {
          style: {
            color: "#a4000e"
          },
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 183,
            columnNumber: 105
          }
        }, "fire nation"), " \uD83D\uDD25 to ", __jsx("i", {
          style: {
            color: "#a4000e"
          },
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 183,
            columnNumber: 157
          }
        }, "capture"), " you")));
        break;
      } else if (user.error.desc === "insufficient claims.") {//forgery -- fall through
      }

    case "JsonWebTokenError":
      //forgery
      color = ["#a4000e", "#e6f309"];
      eyeText = __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx("p", {
        style: {
          color: "#a4000e",
          fontSize: "1.4em"
        },
        className: _style_eye_module_sass__WEBPACK_IMPORTED_MODULE_9___default.a.triggered,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 194,
          columnNumber: 25
        }
      }, "FOOL!"));
      userFate = "is not properly logged in.";
      content = __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, "Your Login-Token is either:", __jsx("ul", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 198,
          columnNumber: 17
        }
      }, __jsx("li", {
        style: {
          color: "#a4000e"
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 199,
          columnNumber: 21
        }
      }, "A Counterfeit"), __jsx("li", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 200,
          columnNumber: 21
        }
      }, "containing ", __jsx("i", {
        style: {
          color: "#a4000e"
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 200,
          columnNumber: 36
        }
      }, "false"), " information"), __jsx("li", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 201,
          columnNumber: 21
        }
      }, "subject to other ", __jsx("i", {
        style: {
          color: "#a4000e"
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 201,
          columnNumber: 42
        }
      }, "malicious"), " acts of ", __jsx("b", {
        style: {
          color: "#a4000e"
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 201,
          columnNumber: 94
        }
      }, "Deception")), __jsx("li", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 202,
          columnNumber: 21
        }
      }, "or outdated. ", __jsx("sub", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 202,
          columnNumber: 38
        }
      }, "this is my fault sorry"), __jsx("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 202,
          columnNumber: 71
        }
      }), " in this case, log in again")));
      break;

    default:
  }

  icon = getIcon(user);

  function onDeleteClick() {
    setDBC(function (prev) {
      if (prev === false) setTimeout(function () {
        console.log(user);
        props.id.removeUser(user.username);
        ref.current.toggleModal();
        setDBC(false);
      }, 1000);
      return true;
    });
  }

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    if (window.screen.width <= 600) setEyeSize(100);
  }, []);
  return __jsx(_layout_Modal__WEBPACK_IMPORTED_MODULE_6__["Modal"], {
    ref: ref,
    className: _style_form_module_sass__WEBPACK_IMPORTED_MODULE_7___default.a.accountFormWrap,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229,
      columnNumber: 12
    }
  }, __jsx(_layout_EyeOfJudgement__WEBPACK_IMPORTED_MODULE_10__["EyeOnMount"], {
    size: eyeSize,
    baseColor: color[0],
    innerColor: color[1],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230,
      columnNumber: 9
    }
  }), __jsx("div", {
    style: {
      marginBottom: "1em",
      fontSize: "1.1em"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 231,
      columnNumber: 9
    }
  }, eyeText), __jsx("div", {
    className: _style_style_module_sass__WEBPACK_IMPORTED_MODULE_8___default.a.scroll,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 233,
      columnNumber: 9
    }
  }, user && __jsx("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234,
      columnNumber: 22
    }
  }, __jsx("span", {
    className: _style_form_module_sass__WEBPACK_IMPORTED_MODULE_7___default.a.usernameHighlight,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234,
      columnNumber: 26
    }
  }, user.username), " ~~ ", userFate), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235,
      columnNumber: 13
    }
  }, content), user && __jsx("button", {
    className: deleteButtonClick ? _style_form_module_sass__WEBPACK_IMPORTED_MODULE_7___default.a.removeButton + " " + _style_form_module_sass__WEBPACK_IMPORTED_MODULE_7___default.a.clicked : _style_form_module_sass__WEBPACK_IMPORTED_MODULE_7___default.a.removeButton,
    onClick: onDeleteClick,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 238,
      columnNumber: 22
    }
  }, icon, " Remove Entry")));
});

function getIcon(user) {
  if (!user) return;

  switch (user.error.icon) {
    case "bolt":
      return __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_5__["FaBolt"], {
        "data-error": true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 249,
          columnNumber: 20
        }
      });

    case "time":
      return __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_5__["FaClock"], {
        "data-error": true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 251,
          columnNumber: 20
        }
      });

    case "death":
      return __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_5__["FaSkull"], {
        "data-error": true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 253,
          columnNumber: 20
        }
      });
  }
}

function timeout(ms) {
  return new Promise(function (resolve) {
    return setTimeout(resolve, ms);
  });
}

/***/ })

})
//# sourceMappingURL=users.js.5d92c8a0acf92f7a2254.hot-update.js.map