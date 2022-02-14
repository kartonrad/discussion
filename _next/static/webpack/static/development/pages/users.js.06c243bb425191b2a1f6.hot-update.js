webpackHotUpdate("static\\development\\pages\\users.js",{

/***/ "./components/layout/Header.js":
/*!*************************************!*\
  !*** ./components/layout/Header.js ***!
  \*************************************/
/*! exports provided: Header, HeaderButton, UserHeaderButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Header", function() { return Header; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderButton", function() { return HeaderButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserHeaderButton", function() { return UserHeaderButton; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _style_header_module_sass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../style/header.module.sass */ "./style/header.module.sass");
/* harmony import */ var _style_header_module_sass__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_header_module_sass__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _style_headerDrawer_module_sass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../style/headerDrawer.module.sass */ "./style/headerDrawer.module.sass");
/* harmony import */ var _style_headerDrawer_module_sass__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_style_headerDrawer_module_sass__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _res_svg_eyeOfJudgementEllipse_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../res/svg/eyeOfJudgementEllipse.svg */ "./res/svg/eyeOfJudgementEllipse.svg");
/* harmony import */ var _hooks_clickOutside__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../hooks/clickOutside */ "./hooks/clickOutside.js");
/* harmony import */ var _MultilevelMenu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../MultilevelMenu */ "./components/MultilevelMenu.js");
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-transition-group */ "./node_modules/react-transition-group/esm/index.js");
/* harmony import */ var _EyeOfJudgement__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./EyeOfJudgement */ "./components/layout/EyeOfJudgement.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _hooks_identity__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../hooks/identity */ "./hooks/identity.js");
/* harmony import */ var _FallbackImg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../FallbackImg */ "./components/FallbackImg.js");



var _jsxFileName = "C:\\Users\\kongr\\Documents\\ProjectHome\\Programming\\node\\discussion\\components\\layout\\Header.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }












function Header(props) {
  //Drawer
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(-2),
      drawerButton = _useState[0],
      setDrawerButton = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(undefined),
      drawer = _useState2[0],
      setDrawer = _useState2[1]; //collect refs


  var items = props.children || [];
  var refs = [];

  if (!Array.isArray(items)) {
    items = [items];
  }

  var itemObj = items.map(function (item, index) {
    return react__WEBPACK_IMPORTED_MODULE_3___default.a.cloneElement(item, {
      ref: function ref(_ref) {
        return refs.push(_ref);
      },
      key: index,
      addDrawer: addDrawer(index),
      removeDrawer: removeDrawer(index),
      currentDrawer: drawer,
      rerender: props.rerenderFunc
    });
  });

  function addDrawer(nr) {
    return function (drawer) {
      setDrawer(drawer);
      setDrawerButton(nr);
    };
  }

  function removeDrawer(nr) {
    return function () {
      setDrawer(undefined);
      setDrawerButton(-2);
    };
  }

  var open = drawerButton > -1;

  function noop() {}

  return __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx("nav", {
    className: _style_header_module_sass__WEBPACK_IMPORTED_MODULE_4___default.a.header,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: _style_header_module_sass__WEBPACK_IMPORTED_MODULE_4___default.a.headerStart,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 17
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_11___default.a, {
    href: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 21
    }
  }, __jsx(_EyeOfJudgement__WEBPACK_IMPORTED_MODULE_10__["EyePlaceholder"], {
    size: 40,
    id: "default",
    onClick: noop,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 36
    }
  })), __jsx("div", {
    className: _style_header_module_sass__WEBPACK_IMPORTED_MODULE_4___default.a.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 21
    }
  }, props.title)), __jsx("ul", {
    className: _style_header_module_sass__WEBPACK_IMPORTED_MODULE_4___default.a.headerTray,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 17
    }
  }, itemObj)), __jsx("div", {
    style: {
      paddingTop: "50px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: _style_header_module_sass__WEBPACK_IMPORTED_MODULE_4___default.a.headerDrawerWrap,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 13
    }
  }, __jsx(react_transition_group__WEBPACK_IMPORTED_MODULE_9__["SwitchTransition"], {
    mode: "out-in",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 17
    }
  }, __jsx(react_transition_group__WEBPACK_IMPORTED_MODULE_9__["CSSTransition"], {
    classNames: _objectSpread({}, _style_headerDrawer_module_sass__WEBPACK_IMPORTED_MODULE_5___default.a),
    className: _style_header_module_sass__WEBPACK_IMPORTED_MODULE_4___default.a.headerDrawer,
    timeout: open ? 500 : 0,
    key: drawerButton,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 21
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 25
    }
  }, drawer)))));
}
var HeaderButton = react__WEBPACK_IMPORTED_MODULE_3___default.a.forwardRef(function HeaderButton(props, ref) {
  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      open = _useState3[0],
      setOpen = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      drawerOpen = _useState4[0],
      setDrawerOpen = _useState4[1]; //dropdown will only open if component IS a dropdown


  var openD = typeof props.children === "object" && props.children.type.name === _MultilevelMenu__WEBPACK_IMPORTED_MODULE_8__["Dropdown"].name;

  function clickOutside() {
    setOpen(false);
  }

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    if (!props.currentDrawer) {
      setDrawerOpen(false);
    }
  }, [props.currentDrawer]);
  var drawer;

  if (props.drawer && !Array.isArray(props.drawer)) {
    drawer = react__WEBPACK_IMPORTED_MODULE_3___default.a.cloneElement(props.drawer, {
      close: props.removeDrawer,
      rerender: props.rerender
    });
  }

  return __jsx(_hooks_clickOutside__WEBPACK_IMPORTED_MODULE_7__["OutsideAlerter"], {
    className: _style_header_module_sass__WEBPACK_IMPORTED_MODULE_4___default.a.headerItem,
    component: "li",
    onClickOutside: clickOutside,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: _style_header_module_sass__WEBPACK_IMPORTED_MODULE_4___default.a.headerButton,
    "data-drawer": drawerOpen,
    onClick: function onClick() {
      setOpen(!open);

      if (!drawerOpen) {
        if (props.drawer) {
          props.addDrawer(drawer);
          setDrawerOpen(true);
        } else {
          props.removeDrawer();
        }

        ;
      } else {
        props.removeDrawer();
      }
    },
    ref: ref,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 13
    }
  }, props.imgUrl !== undefined && __jsx(_FallbackImg__WEBPACK_IMPORTED_MODULE_13__["FallbackImgImg"], {
    src: props.imgUrl,
    alt: "image icon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 46
    }
  }), props.icon && props.icon), open ? __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 17
    }
  }, props.children) : undefined);
});
var UserHeaderButton = react__WEBPACK_IMPORTED_MODULE_3___default.a.forwardRef(function UserHeaderButton(props, ref) {
  var _useIdentity = Object(_hooks_identity__WEBPACK_IMPORTED_MODULE_12__["useIdentity"])(),
      _useIdentity2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useIdentity, 2),
      id = _useIdentity2[0],
      axios = _useIdentity2[1];

  return __jsx(HeaderButton, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    ref: ref,
    imgUrl: id.active != null ? id.users[id.active].avatarUrl : undefined
  }, props, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 13
    }
  }), props.children);
});

/***/ })

})
//# sourceMappingURL=users.js.06c243bb425191b2a1f6.hot-update.js.map