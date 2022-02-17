webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Post.js":
/*!****************************!*\
  !*** ./components/Post.js ***!
  \****************************/
/*! exports provided: Post, PostContent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Post", function() { return Post; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostContent", function() { return PostContent; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _res_svg_commentIcon_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../res/svg/commentIcon.svg */ "./res/svg/commentIcon.svg");
/* harmony import */ var _Vote__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Vote */ "./components/Vote.js");
/* harmony import */ var _Timestamp__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Timestamp */ "./components/Timestamp.js");
/* harmony import */ var _style_post_module_sass__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../style/post.module.sass */ "./style/post.module.sass");
/* harmony import */ var _style_post_module_sass__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_style_post_module_sass__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _CommentSection__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./CommentSection */ "./components/CommentSection.js");
/* harmony import */ var _components_MultilevelMenu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/MultilevelMenu */ "./components/MultilevelMenu.js");
/* harmony import */ var _style_document_module_sass__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../style/document.module.sass */ "./style/document.module.sass");
/* harmony import */ var _style_document_module_sass__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_style_document_module_sass__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _helpers_markdown__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../helpers/markdown */ "./helpers/markdown.js");
/* harmony import */ var _layout_ContextMenu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./layout/ContextMenu */ "./components/layout/ContextMenu.js");
/* harmony import */ var _hooks_identity__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../hooks/identity */ "./hooks/identity.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var react_icons_hi__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-icons/hi */ "./node_modules/react-icons/hi/index.esm.js");
/* harmony import */ var react_icons_im__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-icons/im */ "./node_modules/react-icons/im/index.esm.js");
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-icons/md */ "./node_modules/react-icons/md/index.esm.js");
/* harmony import */ var _ConfirmMenuItem__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./ConfirmMenuItem */ "./components/ConfirmMenuItem.js");
/* harmony import */ var _PostForm__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./PostForm */ "./components/PostForm.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../constants */ "./constants/index.js");
/* harmony import */ var _FallbackImg__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./FallbackImg */ "./components/FallbackImg.js");
/* harmony import */ var _layout_Modal__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./layout/Modal */ "./components/layout/Modal.js");
/* harmony import */ var _constants_randomText__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../constants/randomText */ "./constants/randomText.js");



var _this = undefined,
    _jsxFileName = "C:\\Users\\kongr\\Documents\\ProjectHome\\Programming\\node\\discussion\\components\\Post.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;






 //markdown styling



var md = Object(_helpers_markdown__WEBPACK_IMPORTED_MODULE_10__["default"])({
  anchor: false,
  embeds: true,
  supressHeadings: true
});












console.log(_style_post_module_sass__WEBPACK_IMPORTED_MODULE_6___default.a.postScronch);
var Post = function Post(props) {
  var p = props.post;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      commentsOpen = _useState[0],
      setCommentsOpen = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      deletion = _useState2[0],
      setDeletion = _useState2[1];

  var delRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])();

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      highlighted = _useState3[0],
      setHightlighted = _useState3[1]; //----show a context menu on rightclick


  var contextMenu = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_layout_ContextMenu__WEBPACK_IMPORTED_MODULE_11__["MenuData"]);

  var _useIdentity = Object(_hooks_identity__WEBPACK_IMPORTED_MODULE_12__["useIdentity"])(),
      _useIdentity2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useIdentity, 2),
      id = _useIdentity2[0],
      axios = _useIdentity2[1];

  var embed = props.embed;

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      editing = _useState4[0],
      setEditing = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(p.entity.comments_hidden ? "hidden" : p.entity.comments_locked ? "locked" : undefined),
      comState = _useState5[0],
      setComState = _useState5[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    if (p.entity.comments_hidden) {
      setComState("hidden");
    } else if (p.entity.comments_locked) {
      setComState("locked");
    } else {
      setComState("e");
    }
  }, [p.entity.comments_locked, p.entity.comments_hidden]);

  switch (comState) {
    case "locked":
      p.entity.comments_hidden = false;
      p.entity.comments_locked = true;
      break;

    case "hidden":
      p.entity.comments_hidden = true;
      break;

    default:
      p.entity.comments_hidden = false;
      p.entity.comments_locked = false;
  }

  var postRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])();

  if (props.rerender === p.entity.id) {
    scrollFetch();
  }

  function context(evt) {
    if (deletion || editing) return false;
    evt.preventDefault();
    var menu = [__jsx(_ConfirmMenuItem__WEBPACK_IMPORTED_MODULE_17__["ConfirmMenuItem"], {
      text: "Embed",
      leftIcon: __jsx(react_icons_im__WEBPACK_IMPORTED_MODULE_15__["ImEmbed"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 53
        }
      }),
      onClick: function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(navigator.clipboard.writeText("<iframe src=\"https://drkslv.github.io/discussion/embed/post?id=".concat(p.entity.id, "\" width=\"700px\" height=\"500px\" frameborder=\"0\"></iframe>")));

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
        lineNumber: 85,
        columnNumber: 13
      }
    }), __jsx(_ConfirmMenuItem__WEBPACK_IMPORTED_MODULE_17__["ConfirmMenuItem"], {
      text: "Copy markdown",
      leftIcon: __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_13__["FaCopy"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 61
        }
      }),
      onClick: function _callee2() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(navigator.clipboard.writeText(p.text));

              case 3:
                return _context2.abrupt("return", true);

              case 6:
                _context2.prev = 6;
                _context2.t0 = _context2["catch"](0);
                return _context2.abrupt("return", false);

              case 9:
              case "end":
                return _context2.stop();
            }
          }
        }, null, null, [[0, 6]], Promise);
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 13
      }
    })];
    if (typeof id.active !== "number" || !id.users[id.active]) return contextMenu.openMenu(evt.pageX, evt.pageY, menu);
    if (p.author && id.users[id.active].username === p.author.username) menu.push(__jsx(_components_MultilevelMenu__WEBPACK_IMPORTED_MODULE_8__["DropdownItem"], {
      text: "Edit",
      onClick: edit,
      leftIcon: __jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_16__["MdEdit"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107,
          columnNumber: 68
        }
      }),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 17
      }
    }));
    if (p.author && id.users[id.active].username === p.author.username || id.users[id.active].moderator) menu.push(__jsx(_components_MultilevelMenu__WEBPACK_IMPORTED_MODULE_8__["DropdownItem"], {
      text: "Delete",
      onClick: deleteModal,
      warn: true,
      leftIcon: __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_13__["FaBan"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109,
          columnNumber: 95
        }
      }),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 23
      }
    }));

    if (id.users[id.active].moderator) {
      var l = p.entity.comments_locked;
      var h = p.entity.comments_hidden;
      menu.push(__jsx(_components_MultilevelMenu__WEBPACK_IMPORTED_MODULE_8__["DropdownItem"], {
        text: "Comments",
        warn: true,
        leftIcon: __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_13__["FaCommentDots"], {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 114,
            columnNumber: 69
          }
        }),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114,
          columnNumber: 17
        }
      }, __jsx(_components_MultilevelMenu__WEBPACK_IMPORTED_MODULE_8__["DropdownItem"], {
        text: !l ? "Lock" : "Unlock",
        leftIcon: !l ? __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_13__["FaLock"], {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 115,
            columnNumber: 80
          }
        }) : __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_13__["FaLockOpen"], {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 115,
            columnNumber: 93
          }
        }),
        warn: true,
        onClick: function onClick() {
          return entity(!l);
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115,
          columnNumber: 21
        }
      }), __jsx(_components_MultilevelMenu__WEBPACK_IMPORTED_MODULE_8__["DropdownItem"], {
        text: !h ? "Hide" : "Show",
        leftIcon: !h ? __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_13__["FaEyeSlash"], {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 116,
            columnNumber: 78
          }
        }) : __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_13__["FaEye"], {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 116,
            columnNumber: 95
          }
        }),
        warn: true,
        onClick: function onClick() {
          return entity(undefined, !h);
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116,
          columnNumber: 21
        }
      })));
    }

    contextMenu.openMenu(evt.pageX, evt.pageY, menu);
  }

  function entity(lock, hide) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function entity$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            axios.put("/entity/".concat(p.entity.id), {
              comments_locked: typeof lock === "boolean" ? String(lock) : undefined,
              comments_hidden: typeof hide === "boolean" ? String(hide) : undefined
            }).then(function (res) {
              contextMenu.removeMenu();
              setCommentsOpen(false);

              if (res.data.comments_hidden === true) {
                setComState("hidden");
              } else if (res.data.comments_locked === true) {
                setComState("locked");
              } else {
                setComState("e");
              }
            });

          case 1:
          case "end":
            return _context3.stop();
        }
      }
    }, null, null, null, Promise);
  }

  function edit() {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function edit$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            console.log("edit post");
            contextMenu.removeMenu();
            setEditing(true);
            scrollFetch();

          case 4:
          case "end":
            return _context4.stop();
        }
      }
    }, null, null, null, Promise);
  }

  function deleteP() {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function deleteP$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            setHightlighted(false);
            axios["delete"]("/post/".concat(p.entity.id)).then(function _callee3() {
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee3$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      console.log("scronch post");
                      contextMenu.removeMenu();
                      setCommentsOpen(false);
                      setDeletion(true);
                      scrollFetch();
                      _context5.next = 7;
                      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(later(2000));

                    case 7:
                      props.rerenderFunc();

                    case 8:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, null, null, null, Promise);
            })["catch"](function () {
              contextMenu.removeMenu();
            });

          case 2:
          case "end":
            return _context6.stop();
        }
      }
    }, null, null, null, Promise);
  }

  function scrollFetch() {
    var bodyRect = document.body.getBoundingClientRect(),
        elemRect = postRef.current.getBoundingClientRect(),
        offset = elemRect.top - bodyRect.top;

    if (postRef.current.clientHeight > 350 && commentsOpen && offset < window.scrollY && !embed) {
      postRef.current.scrollIntoView();
      window.scrollBy(0, -120);
    }
  }

  function onEdit(text, cancel) {
    var res;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function onEdit$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            if (!cancel) {
              _context7.next = 2;
              break;
            }

            return _context7.abrupt("return", setEditing(false));

          case 2:
            _context7.prev = 2;
            res = axios.put("/post/".concat(p.entity.id), {
              text: text
            });
            _context7.next = 9;
            break;

          case 6:
            _context7.prev = 6;
            _context7.t0 = _context7["catch"](2);
            return _context7.abrupt("return", false);

          case 9:
            setEditing(false);
            props.rerenderFunc(p.entity.id);
            return _context7.abrupt("return", true);

          case 12:
          case "end":
            return _context7.stop();
        }
      }
    }, null, null, [[2, 6]], Promise);
  }

  function deleteModal() {
    setHightlighted(true);
    delRef.current.toggleModal();
  }

  function deleteCancel() {
    setHightlighted(false);
  } //----Expand when clicked


  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(_layout_Modal__WEBPACK_IMPORTED_MODULE_21__["DialogBox"], {
    onConfirm: deleteP,
    onCancel: deleteCancel,
    ref: delRef,
    text: "Delete this post?",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202,
      columnNumber: 11
    }
  }), __jsx("div", {
    style: {
      zIndex: highlighted ? 6 : undefined
    },
    className: "".concat(_style_post_module_sass__WEBPACK_IMPORTED_MODULE_6___default.a.postWrapper, " ").concat(deletion && !commentsOpen && _style_post_module_sass__WEBPACK_IMPORTED_MODULE_6___default.a.postScronch),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "".concat(_style_post_module_sass__WEBPACK_IMPORTED_MODULE_6___default.a.post),
    ref: postRef,
    onClick: function onClick() {
      if (p.entity.comments_hidden) {
        postRef.current.classList.remove(_style_post_module_sass__WEBPACK_IMPORTED_MODULE_6___default.a.wrong);
        void postRef.current.offsetWidth;
        postRef.current.classList.add(_style_post_module_sass__WEBPACK_IMPORTED_MODULE_6___default.a.wrong);
      }

      if (!deletion && !editing) setCommentsOpen(!commentsOpen);
      if (!editing) scrollFetch();
    },
    onContextMenu: context,
    "data-expanded": commentsOpen,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206,
      columnNumber: 13
    }
  }, !editing ? __jsx(PostContent, {
    post: p,
    expanded: commentsOpen,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220,
      columnNumber: 30
    }
  }) : __jsx(_PostForm__WEBPACK_IMPORTED_MODULE_18__["PostForm"], {
    title: p.title,
    text: p.text,
    edit: true,
    onEdit: onEdit,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221,
      columnNumber: 24
    }
  })), !p.entity.comments_hidden ? __jsx(_CommentSection__WEBPACK_IMPORTED_MODULE_7__["CommentSection"], {
    id: p.entity.id,
    open: commentsOpen,
    key: "cs" + p.entity.id,
    entity: p.entity,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224,
      columnNumber: 42
    }
  }) : __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null)));
};
function PostContent(_ref) {
  var p = _ref.post,
      expanded = _ref.expanded;
  // determine avatar
  var avatar;
  var text = p.text;

  if (p.author) {
    avatar = p.author.avatarUrl;
  } else {
    if (p.text === "~d~") {
      avatar = _constants__WEBPACK_IMPORTED_MODULE_19__["apiUrl"] + "/assets/img/trash.jpg";
      text = Object(_constants_randomText__WEBPACK_IMPORTED_MODULE_22__["getRandom"])("post deleted");
    } else if (p.text === "~r~") {
      avatar = _constants__WEBPACK_IMPORTED_MODULE_19__["apiUrl"] + "/assets/img/nuke.jpg";
      text = Object(_constants_randomText__WEBPACK_IMPORTED_MODULE_22__["getRandom"])("post removed");
    } else {
      avatar = _constants__WEBPACK_IMPORTED_MODULE_19__["apiUrl"] + "/assets/img/kill.png";
    }
  }

  var smR = window.screen.width < 600; // determine vote

  var myVote = null;
  var votes = p.entity.votes;
  if (votes && votes[0]) myVote = votes[0].positive; // determine time it takes to expand

  var bodyRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])();
  var expandTime;

  if (bodyRef.current) {
    expandTime = 0.71428571429 * bodyRef.current.clientHeight - 350;
  }

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      collapsed = _useState6[0],
      setCollapsed = _useState6[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    setCollapsed(!expanded && bodyRef.current.clientHeight > 350);
  }, [bodyRef, expanded]);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 268,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: _style_post_module_sass__WEBPACK_IMPORTED_MODULE_6___default.a.pic,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 269,
      columnNumber: 13
    }
  }, __jsx(_FallbackImg__WEBPACK_IMPORTED_MODULE_20__["FallbackImg"], {
    src: avatar,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 270,
      columnNumber: 17
    }
  })), __jsx(_Vote__WEBPACK_IMPORTED_MODULE_4__["Vote"], {
    up: p.entity.upvotes,
    down: p.entity.downvotes,
    id: p.entity.id,
    my: myVote,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 272,
      columnNumber: 13
    }
  })), __jsx("div", {
    className: _style_post_module_sass__WEBPACK_IMPORTED_MODULE_6___default.a.content,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 274,
      columnNumber: 9
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 275,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: _style_post_module_sass__WEBPACK_IMPORTED_MODULE_6___default.a.head,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 276,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: _style_post_module_sass__WEBPACK_IMPORTED_MODULE_6___default.a.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 277,
      columnNumber: 21
    }
  }, __jsx("b", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 278,
      columnNumber: 25
    }
  }, p.title), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 278,
      columnNumber: 41
    }
  }), __jsx("span", {
    className: _style_post_module_sass__WEBPACK_IMPORTED_MODULE_6___default.a.author,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 279,
      columnNumber: 25
    }
  }, "posted by ", p.author ? p.author.username : "❌DELETED❌")), __jsx("div", {
    className: _style_post_module_sass__WEBPACK_IMPORTED_MODULE_6___default.a.comments,
    "data-state": p.entity.comments_hidden ? "hidden" : p.entity.comments_locked ? "locked" : undefined,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 282,
      columnNumber: 21
    }
  }, !p.entity.comments_hidden ? __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, p.entity.comments_locked ? __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, smR ? __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_13__["FaLock"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 287,
      columnNumber: 66
    }
  }) : __jsx("b", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 287,
      columnNumber: 77
    }
  }, "LOCKED"), " -") : __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null), " ", (p.entity.comment.rgt - p.entity.comment.lft - 1) / 2) : __jsx("b", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 289,
      columnNumber: 29
    }
  }, "Closed."), __jsx(_res_svg_commentIcon_svg__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 291,
      columnNumber: 25
    }
  })))), __jsx("div", {
    className: _style_post_module_sass__WEBPACK_IMPORTED_MODULE_6___default.a.body,
    style: {
      maxHeight: !expanded ? "350px" : bodyRef.current.clientHeight + 10,
      "--expandtime": expandTime + "ms",
      overflow: "hidden"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 297,
      columnNumber: 13
    }
  }, __jsx("div", {
    dangerouslySetInnerHTML: {
      __html: md(text)
    },
    className: _style_document_module_sass__WEBPACK_IMPORTED_MODULE_9___default.a.mdPost,
    ref: bodyRef,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 298,
      columnNumber: 17
    }
  }), collapsed && __jsx("div", {
    className: _style_post_module_sass__WEBPACK_IMPORTED_MODULE_6___default.a.expandDialogWrapper,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 299,
      columnNumber: 31
    }
  }, __jsx("div", {
    className: _style_post_module_sass__WEBPACK_IMPORTED_MODULE_6___default.a.expandDialog,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 299,
      columnNumber: 70
    }
  }, "Click to Expand"))), __jsx(_Timestamp__WEBPACK_IMPORTED_MODULE_5__["Timestamp"], {
    time: p.createdAt,
    edit: p.updatedAt,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 302,
      columnNumber: 13
    }
  })));
}

function later(delay) {
  return new Promise(function (resolve) {
    setTimeout(resolve, delay);
  });
}

function checkVisible(elm) {
  var rect = elm.getBoundingClientRect();
  var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
  return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
}

/***/ })

})
//# sourceMappingURL=index.js.ad000a30801afe4cd98e.hot-update.js.map