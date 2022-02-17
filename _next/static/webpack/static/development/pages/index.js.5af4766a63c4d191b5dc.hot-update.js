webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/PostForm.js":
/*!********************************!*\
  !*** ./components/PostForm.js ***!
  \********************************/
/*! exports provided: PostForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostForm", function() { return PostForm; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _hooks_identity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/identity */ "./hooks/identity.js");
/* harmony import */ var _style_postForm_module_sass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../style/postForm.module.sass */ "./style/postForm.module.sass");
/* harmony import */ var _style_postForm_module_sass__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_postForm_module_sass__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _helpers_markdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../helpers/markdown */ "./helpers/markdown.js");


var _jsxFileName = "C:\\Users\\kongr\\Documents\\ProjectHome\\Programming\\node\\discussion\\components\\PostForm.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;




var md = Object(_helpers_markdown__WEBPACK_IMPORTED_MODULE_5__["default"])({
  anchor: false,
  embeds: true,
  supressHeadings: true
});
var MAX_TITLE_LEN = 100;
function PostForm(props) {
  var _useIdentity = Object(_hooks_identity__WEBPACK_IMPORTED_MODULE_3__["useIdentity"])(),
      _useIdentity2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useIdentity, 2),
      id = _useIdentity2[0],
      axios = _useIdentity2[1];

  var activeUser = id.users[id.active];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(props.title || ""),
      title = _useState[0],
      setTitle = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(props.text || ""),
      text = _useState2[0],
      setText = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      loading = _useState3[0],
      setLoading = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      failed = _useState4[0],
      setFailed = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(props.comment ? "4em" : "8em"),
      textareaHeight = _useState5[0],
      setTextAreaHeight = _useState5[1];

  var textareaRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])();
  console.log(loading);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    if (textareaRef && textareaRef.current) setTextAreaHeight(function (height) {
      /* if(props.heightChange) {
           props.heightChange(textareaRef.current.scrollHeight-(typeof height === "number" ? height : 100))
       }*/
      return textareaRef.current.scrollHeight;
    });
  }, [textareaRef]);

  function change(evt) {
    switch (evt.target.name) {
      case "title":
        return setTitle(evt.target.value);

      case "text":
        setTextAreaHeight(textareaRef.current.scrollHeight);
        return setText(evt.target.value);
    }
  }

  function submit(evt) {
    var res;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function submit$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            evt.preventDefault();
            setLoading(true);
            _context.next = 4;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(later(1000));

          case 4:
            console.log("Title:", title);
            console.log("Text:", text);

            if (activeUser) {
              _context.next = 9;
              break;
            }

            setLoading(false);
            return _context.abrupt("return", id.toggleModal());

          case 9:
            if (!props.edit) {
              _context.next = 16;
              break;
            }

            _context.next = 12;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(props.onEdit(text));

          case 12:
            res = _context.sent;
            if (!res) setFailed(true);
            setLoading(false);
            return _context.abrupt("return");

          case 16:
            //Submit Form
            if (title.length >= 1 && title.length <= MAX_TITLE_LEN || props.comment) {
              axios.post(!props.comment ? "/post/" : "/comment/".concat(props.comment), {
                title: title,
                text: text
              }).then(function (response) {
                if (props.close) props.close(); //show post 

                if (props.rerender) props.rerender(response.data.entityId || response.data.id);
                setLoading(false);
              })["catch"](function (error) {
                console.log(error); //console.log(error.response.data);

                if (props.rerender) props.rerender();
                setLoading(false);
              });
            } else {
              setLoading(false);
              if (props.rerender) props.rerender(); //props.close()
            }

          case 17:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, null, Promise);
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx("form", {
    onSubmit: submit,
    className: _style_postForm_module_sass__WEBPACK_IMPORTED_MODULE_4___default.a.postForm,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 13
    }
  }, !props.comment && __jsx("div", {
    className: _style_postForm_module_sass__WEBPACK_IMPORTED_MODULE_4___default.a.titleCounter,
    "data-invalid": title.length < 1 || title.length > MAX_TITLE_LEN,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 17
    }
  }, __jsx("input", {
    type: "text",
    className: _style_postForm_module_sass__WEBPACK_IMPORTED_MODULE_4___default.a.title,
    value: title,
    onChange: change,
    name: "title",
    placeholder: "The post's title",
    autoComplete: "off",
    disabled: loading || props.edit || props.locked,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 21
    }
  }), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 21
    }
  }, title.length, "/", MAX_TITLE_LEN)), __jsx("textarea", {
    name: "text",
    value: text,
    onChange: change,
    placeholder: props.locked ? "LOCKED, bitch" : "Go ahead, unleash your creative Genius!",
    rows: props.comment ? "2" : "4",
    autoComplete: "off",
    disabled: loading || props.locked,
    ref: textareaRef,
    style: {
      height: textareaHeight + 3 + "px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "".concat(_style_postForm_module_sass__WEBPACK_IMPORTED_MODULE_4___default.a.postButton, " ").concat(props.locked && _style_postForm_module_sass__WEBPACK_IMPORTED_MODULE_4___default.a.dull),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 17
    }
  }, __jsx("button", {
    type: "submit",
    value: props.cta || "Post!",
    "data-known": !Boolean(activeUser),
    disabled: loading || props.locked,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 78
    }
  }, props.locked ? "HAHA NO" : props.cta || "Post!")), props.edit && __jsx("button", {
    className: _style_postForm_module_sass__WEBPACK_IMPORTED_MODULE_4___default.a.cancelButton,
    value: "Cancel",
    disabled: loading,
    onClick: function onClick() {
      props.onEdit(null, true);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 32
    }
  }, "Cancel"), __jsx("div", {
    className: _style_postForm_module_sass__WEBPACK_IMPORTED_MODULE_4___default.a.author,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 17
    }
  }, "as", __jsx("span", {
    "data-known": Boolean(activeUser),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 21
    }
  }, activeUser ? activeUser.username : "<UNKNOWN>"), failed && __jsx("i", {
    style: {
      color: "red",
      marginLeft: "2em"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 32
    }
  }, "(an error occured)"))));
}

function later(delay) {
  return new Promise(function (resolve) {
    setTimeout(resolve, delay);
  });
}

/***/ })

})
//# sourceMappingURL=index.js.5af4766a63c4d191b5dc.hot-update.js.map