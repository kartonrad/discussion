webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/CommentSection.js":
/*!**************************************!*\
  !*** ./components/CommentSection.js ***!
  \**************************************/
/*! exports provided: CommentSection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentSection", function() { return CommentSection; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _hooks_comments__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hooks/comments */ "./hooks/comments.js");
/* harmony import */ var _Comment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Comment */ "./components/Comment.js");
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-transition-group */ "./node_modules/react-transition-group/esm/index.js");
/* harmony import */ var _style_commentSection_module_sass__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../style/commentSection.module.sass */ "./style/commentSection.module.sass");
/* harmony import */ var _style_commentSection_module_sass__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_style_commentSection_module_sass__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _PostForm__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./PostForm */ "./components/PostForm.js");



var _jsxFileName = "C:\\Users\\kongr\\Documents\\ProjectHome\\Programming\\node\\discussion\\components\\CommentSection.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }







function CommentSection(props) {
  var _this = this;

  //load comments
  var _useCommentIds = Object(_hooks_comments__WEBPACK_IMPORTED_MODULE_4__["useCommentIds"])(props.open, props.id),
      _useCommentIds2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useCommentIds, 2),
      comIds = _useCommentIds2[0],
      setIds = _useCommentIds2[1];

  var _useComments = Object(_hooks_comments__WEBPACK_IMPORTED_MODULE_4__["useComments"])(comIds),
      _useComments2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useComments, 2),
      comments = _useComments2[0],
      setComments = _useComments2[1];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(null),
      height = _useState[0],
      setHeight = _useState[1]; //required by css switch transition


  var animKey = undefined;
  var comObjects = comments.map(function (comment, idx) {
    //comments not yet loaded
    if (comment === "not epic") {
      animKey = "wait";
      return __jsx("p", {
        key: 0,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 20
        }
      }, "Loading...");
    } //COMMENTS!


    animKey = "cs";
    return __jsx(_Comment__WEBPACK_IMPORTED_MODULE_5__["Comment"], {
      key: comment.entityId,
      comment: comment,
      onEdit: function onEdit(c) {
        setComments(function (cs) {
          var newC = Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(cs);

          newC[idx] = c;
          return newC;
        });
      },
      onReply: function onReply(c) {
        setComments(function (cs) {
          var newC = Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(cs);

          var nnewC = newC.slice(0, idx + 1).concat(c, newC.slice(idx + 1));
          return newC;
        });
      },
      onComStateChange: function onComStateChange(comState) {
        setComments(function (cs) {
          var newC = Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(cs);

          return newC.map(function (val) {
            if (val.lft > comment.lft && val.rgt < comment.rgt) {
              var newCC = _objectSpread({}, val);

              if (comState === "hidden") {
                if (!newCC.hidden_lvl.includes(comment.level)) newCC.hidden_lvl.push(comment.level);
              } else if (comState === "locked") {
                newCC.hidden_lvl = newCC.hidden_lvl.filter(function (e) {
                  return e != comment.level;
                });
                if (!newCC.locked_lvl.includes(comment.level)) newCC.locked_lvl.push(comment.level);
              } else {
                newCC.hidden_lvl = newCC.hidden_lvl.filter(function (e) {
                  return e != comment.level;
                });
                newCC.locked_lvl = newCC.locked_lvl.filter(function (e) {
                  return e != comment.level;
                });
              }

              return newCC;
            } else {
              return val;
            }
          });
        });
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 9
      }
    });
  }); //no comments :(

  if (!comments[0]) {
    animKey = "no";
    comObjects = [__jsx("p", {
      key: 0,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 23
      }
    }, "There are no Comments")];
  }

  if (!props.open) {
    animKey = "hurensohn nein";
    comObjects = [__jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null)];
  }

  function calculateHeight(el, appear) {
    if (!el.firstChild) return;
    var h = el.firstChild.offsetHeight;
    console.log(el.firstChild);
    console.log(h);
    setHeight(h);
  } //heightChange={(diff) => setHeight((h)=>h+diff)}


  return __jsx(react_transition_group__WEBPACK_IMPORTED_MODULE_6__["SwitchTransition"], {
    mode: "out-in",
    key: "l",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 13
    }
  }, __jsx(react_transition_group__WEBPACK_IMPORTED_MODULE_6__["CSSTransition"], {
    timeout: 300,
    classNames: _objectSpread({}, _style_commentSection_module_sass__WEBPACK_IMPORTED_MODULE_7___default.a),
    component: "div",
    onEnter: calculateHeight,
    onExit: calculateHeight,
    key: animKey,
    style: {
      "--height": height + "px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 17
    }
  }, props.open ? __jsx("div", {
    className: _style_commentSection_module_sass__WEBPACK_IMPORTED_MODULE_7___default.a.commentSectionWrap,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: _style_commentSection_module_sass__WEBPACK_IMPORTED_MODULE_7___default.a.commentSection,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 29
    }
  }, __jsx(_PostForm__WEBPACK_IMPORTED_MODULE_8__["PostForm"], {
    comment: props.id,
    rerender: function rerender(id) {
      console.log("YOO " + id);
      if (id) setIds(function (ids) {
        var ids2 = [id].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(ids));
        return ids2;
      });
    },
    locked: props.entity.comments_locked,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 33
    }
  }), comObjects)) : __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 23
    }
  })));
}

/***/ })

})
//# sourceMappingURL=index.js.26b4d7a177e422d17e96.hot-update.js.map