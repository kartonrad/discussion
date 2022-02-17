webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Comment.js":
/*!*******************************!*\
  !*** ./components/Comment.js ***!
  \*******************************/
/*! exports provided: Comment, Threadindent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Comment", function() { return Comment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Threadindent", function() { return Threadindent; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Vote__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Vote */ "./components/Vote.js");
/* harmony import */ var _Timestamp__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Timestamp */ "./components/Timestamp.js");
/* harmony import */ var _style_post_module_sass__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../style/post.module.sass */ "./style/post.module.sass");
/* harmony import */ var _style_post_module_sass__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_style_post_module_sass__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _ConfirmMenuItem__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ConfirmMenuItem */ "./components/ConfirmMenuItem.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var _layout_ContextMenu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./layout/ContextMenu */ "./components/layout/ContextMenu.js");
/* harmony import */ var _hooks_identity__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../hooks/identity */ "./hooks/identity.js");
/* harmony import */ var _hooks_entity__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../hooks/entity */ "./hooks/entity.js");
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-icons/md */ "./node_modules/react-icons/md/index.esm.js");
/* harmony import */ var _MultilevelMenu__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./MultilevelMenu */ "./components/MultilevelMenu.js");
/* harmony import */ var _PostForm__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./PostForm */ "./components/PostForm.js");




var _jsxFileName = "C:\\Users\\kongr\\Documents\\ProjectHome\\Programming\\node\\discussion\\components\\Comment.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }













function Comment(props) {
  var c = props.comment;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      editing = _useState[0],
      setEditing = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      deletion = _useState2[0],
      setDeletion = _useState2[1];

  var contextMenu = Object(react__WEBPACK_IMPORTED_MODULE_4__["useContext"])(_layout_ContextMenu__WEBPACK_IMPORTED_MODULE_10__["MenuData"]);

  var _useIdentity = Object(_hooks_identity__WEBPACK_IMPORTED_MODULE_11__["useIdentity"])(),
      _useIdentity2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_useIdentity, 2),
      id = _useIdentity2[0],
      axios = _useIdentity2[1];

  var _useEntity = Object(_hooks_entity__WEBPACK_IMPORTED_MODULE_12__["useEntity"])(c.entity),
      _useEntity2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_useEntity, 2),
      comState = _useEntity2[0],
      entity = _useEntity2[1];

  var indents = [];

  for (var i = 0; i < c.level; i++) {
    indents.push(__jsx(Threadindent, {
      key: i,
      "data-state": c.hidden_lvl && c.hidden_lvl.includes(i) ? "hidden" : c.locked_lvl && c.locked_lvl.includes(i) ? "locked" : undefined,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 22
      }
    }));
  }

  console.log(c);

  function context(evt) {
    if (deletion || editing) return false;
    evt.preventDefault();
    var menu = [__jsx(_ConfirmMenuItem__WEBPACK_IMPORTED_MODULE_8__["ConfirmMenuItem"], {
      text: "Copy markdown",
      leftIcon: __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_9__["FaCopy"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 61
        }
      }),
      onClick: function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.async(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.awrap(navigator.clipboard.writeText(c.text));

              case 3:
                return _context.abrupt("return", true);

              case 6:
                _context.prev = 6;
                _context.t0 = _context["catch"](0);
                return _context.abrupt("return", false);

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, null, null, [[0, 6]], Promise);
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 13
      }
    })];
    if (typeof id.active !== "number" || !id.users[id.active]) return contextMenu.openMenu(evt.pageX, evt.pageY, menu);
    if (c.locked_lvl.length === 0) menu = [__jsx(_MultilevelMenu__WEBPACK_IMPORTED_MODULE_14__["DropdownItem"], {
      text: "Reply",
      onClick: edit,
      leftIcon: __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_9__["FaReply"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 73
        }
      }),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 21
      }
    })].concat(menu);
    if (c.author && id.users[id.active].username === c.author.username && props.onEdit) menu.push(__jsx(_MultilevelMenu__WEBPACK_IMPORTED_MODULE_14__["DropdownItem"], {
      text: "Edit",
      onClick: edit,
      leftIcon: __jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_13__["MdEdit"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 68
        }
      }),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 17
      }
    }));
    /*if ((c.author && id.users[id.active].username === c.author.username) || id.users[id.active].moderator)
        menu.push(<DropdownItem text="Delete" onClick={deleteModal} warn={true} leftIcon={<FaBan />} />); */

    if (id.users[id.active].moderator) {
      var l = comState === "locked" || comState === "hidden";
      var h = comState === "hidden";
      menu.push(__jsx(_MultilevelMenu__WEBPACK_IMPORTED_MODULE_14__["DropdownItem"], {
        text: "Comments",
        warn: true,
        leftIcon: __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_9__["FaCommentDots"], {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 61,
            columnNumber: 69
          }
        }),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 17
        }
      }, __jsx(_MultilevelMenu__WEBPACK_IMPORTED_MODULE_14__["DropdownItem"], {
        text: !l ? "Lock" : "Unlock",
        leftIcon: !l ? __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_9__["FaLock"], {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 62,
            columnNumber: 80
          }
        }) : __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_9__["FaLockOpen"], {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 62,
            columnNumber: 93
          }
        }),
        warn: true,
        onClick: function _callee2() {
          var state;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.async(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.next = 2;
                  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.awrap(entity(!l));

                case 2:
                  state = _context2.sent;
                  contextMenu.removeMenu();
                  if (props.onComStateChange) props.onComStateChange(state);

                case 5:
                case "end":
                  return _context2.stop();
              }
            }
          }, null, null, null, Promise);
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 21
        }
      }), __jsx(_MultilevelMenu__WEBPACK_IMPORTED_MODULE_14__["DropdownItem"], {
        text: !h ? "Hide" : "Show",
        leftIcon: !h ? __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_9__["FaEyeSlash"], {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 65,
            columnNumber: 78
          }
        }) : __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_9__["FaEye"], {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 65,
            columnNumber: 95
          }
        }),
        warn: true,
        onClick: function _callee3() {
          var state;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.async(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  _context3.next = 2;
                  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.awrap(entity(undefined, !h));

                case 2:
                  state = _context3.sent;
                  contextMenu.removeMenu();
                  if (props.onComStateChange) props.onComStateChange(state);

                case 5:
                case "end":
                  return _context3.stop();
              }
            }
          }, null, null, null, Promise);
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 21
        }
      })));
    }

    contextMenu.openMenu(evt.pageX, evt.pageY, menu);
  }

  function edit() {
    setEditing(true);
    contextMenu.removeMenu();
  }

  var hideIndicator = __jsx("div", {
    className: _style_post_module_sass__WEBPACK_IMPORTED_MODULE_7___default.a.comStateInd,
    "data-state": comState,
    style: {
      display: "inline-block",
      marginLeft: "1em"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 9
    }
  }, comState === "hidden" ? __jsx(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, " Hidden ", __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_9__["FaEyeSlash"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 23
    }
  })) : comState === "locked" ? __jsx(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, " Locked ", __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_9__["FaLock"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 24
    }
  })) : undefined);

  if (editing) {
    return __jsx("div", {
      className: _style_post_module_sass__WEBPACK_IMPORTED_MODULE_7___default.a.commentWrap,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: _style_post_module_sass__WEBPACK_IMPORTED_MODULE_7___default.a.indents,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 17
      }
    }, indents), __jsx("div", {
      className: _style_post_module_sass__WEBPACK_IMPORTED_MODULE_7___default.a.comment,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 17
      }
    }, __jsx(_PostForm__WEBPACK_IMPORTED_MODULE_15__["PostForm"], {
      comment: c.entity.id,
      edit: true,
      text: c.text,
      onEdit: function onEdit(text, cancel) {
        if (cancel) return setEditing(false);

        try {
          var res = axios.put("/comment/".concat(c.entity.id), {
            text: text
          });
        } catch (error) {
          console.error(error);
          return false;
        }

        props.onEdit(_objectSpread({}, c, {
          text: text
        }));
        setEditing(false);
        return true;
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 21
      }
    })));
  }

  if (!c.author && c.text === "~d~" || c.text === "~r~") {
    return __jsx("div", {
      className: _style_post_module_sass__WEBPACK_IMPORTED_MODULE_7___default.a.commentWrap,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: _style_post_module_sass__WEBPACK_IMPORTED_MODULE_7___default.a.indents,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 17
      }
    }, indents), __jsx("div", {
      className: _style_post_module_sass__WEBPACK_IMPORTED_MODULE_7___default.a.comment,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: _style_post_module_sass__WEBPACK_IMPORTED_MODULE_7___default.a.indentVote,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 123,
        columnNumber: 21
      }
    }, __jsx(Threadindent, {
      "data-state": comState,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 124,
        columnNumber: 25
      }
    })), __jsx("div", {
      className: _style_post_module_sass__WEBPACK_IMPORTED_MODULE_7___default.a.content,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 126,
        columnNumber: 21
      }
    }, __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127,
        columnNumber: 25
      }
    }, __jsx("p", {
      className: _style_post_module_sass__WEBPACK_IMPORTED_MODULE_7___default.a.author,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128,
        columnNumber: 29
      }
    }, __jsx(_Timestamp__WEBPACK_IMPORTED_MODULE_6__["Timestamp"], {
      time: c.createdAt,
      edit: c.updatedAt,
      compact: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129,
        columnNumber: 33
      }
    }), " ", hideIndicator)), __jsx("div", {
      className: _style_post_module_sass__WEBPACK_IMPORTED_MODULE_7___default.a.body,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132,
        columnNumber: 25
      }
    }, __jsx("p", {
      style: {
        color: "grey"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 133,
        columnNumber: 29
      }
    }, "COMMENT ", c.text === "~d~" ? "❌DELETED❌" : "🔥REMOVED🔥")))));
  }

  return __jsx("div", {
    className: _style_post_module_sass__WEBPACK_IMPORTED_MODULE_7___default.a.commentWrap,
    onContextMenu: context,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: _style_post_module_sass__WEBPACK_IMPORTED_MODULE_7___default.a.indents,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 13
    }
  }, indents), __jsx("div", {
    className: _style_post_module_sass__WEBPACK_IMPORTED_MODULE_7___default.a.comment,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: _style_post_module_sass__WEBPACK_IMPORTED_MODULE_7___default.a.indentVote,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 17
    }
  }, __jsx(_Vote__WEBPACK_IMPORTED_MODULE_5__["Vote"], {
    up: c.entity.upvotes,
    down: c.entity.downvotes,
    small: true,
    id: c.entity.id,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 21
    }
  }), __jsx(Threadindent, {
    "data-state": comState,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 21
    }
  })), __jsx("div", {
    className: _style_post_module_sass__WEBPACK_IMPORTED_MODULE_7___default.a.content,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 17
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 21
    }
  }, __jsx("p", {
    className: _style_post_module_sass__WEBPACK_IMPORTED_MODULE_7___default.a.author,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 25
    }
  }, "posted by ", __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 39
    }
  }, c.author ? c.author.username : "❌DELETED❌"), " ", __jsx(_Timestamp__WEBPACK_IMPORTED_MODULE_6__["Timestamp"], {
    time: c.createdAt,
    edit: c.updatedAt,
    compact: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 97
    }
  }), " ", hideIndicator)), __jsx("div", {
    className: _style_post_module_sass__WEBPACK_IMPORTED_MODULE_7___default.a.body,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 21
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 25
    }
  }, c.text)))));
}
function Threadindent(props) {
  return __jsx("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: _style_post_module_sass__WEBPACK_IMPORTED_MODULE_7___default.a.threadindent
  }, props, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 9
    }
  }));
}

/***/ })

})
//# sourceMappingURL=index.js.20b46abc7dae8108132d.hot-update.js.map