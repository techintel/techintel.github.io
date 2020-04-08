webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./components/Web/Header.js":
/*!**********************************!*\
  !*** ./components/Web/Header.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Header; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/AppBar */ "./node_modules/@material-ui/core/esm/AppBar/index.js");
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Toolbar */ "./node_modules/@material-ui/core/esm/Toolbar/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/Menu */ "./node_modules/@material-ui/icons/Menu.js");
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _src_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../src/utils */ "./src/utils/index.js");
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Link */ "./components/Web/Link.js");
/* harmony import */ var _MiniDrawer__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./MiniDrawer */ "./components/Web/MiniDrawer.js");
var _jsxFileName="C:\\Users\\5ervant\\Documents\\Node.js Projects\\Next Expo Apps\\techintel\\components\\Web\\Header.js";var __jsx=react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;var drawerWidth=240;var useStyles=Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["makeStyles"])(function(theme){return{appBar:{backgroundColor:Object(_src_utils__WEBPACK_IMPORTED_MODULE_11__["hexToRgba"])(theme.palette.primary.main,0.85),zIndex:theme.zIndex.drawer+1,transition:theme.transitions.create(['width','margin'],{easing:theme.transitions.easing.sharp,duration:theme.transitions.duration.leavingScreen})},appBarShift:{marginLeft:drawerWidth,width:"calc(100% - ".concat(drawerWidth,"px)"),transition:theme.transitions.create(['width','margin'],{easing:theme.transitions.easing.sharp,duration:theme.transitions.duration.enteringScreen})},titleLink:{textDecoration:'none !important'},title:{color:theme.palette.background.paper,backgroundColor:theme.palette.text.primary,padding:'4px 10px',fontWeight:700,borderRadius:4},menuButton:{marginRight:37},hide:{display:'none'}};});function Header(){var classes=useStyles();var _useTranslation=Object(react_i18next__WEBPACK_IMPORTED_MODULE_3__["useTranslation"])('app'),t=_useTranslation.t;var _React$useState=react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(false),_React$useState2=_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_React$useState,2),open=_React$useState2[0],setOpen=_React$useState2[1];var handleDrawerOpen=function handleDrawerOpen(){setOpen(true);};var handleDrawerClose=function handleDrawerClose(){setOpen(false);};return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment,{__self:this,__source:{fileName:_jsxFileName,lineNumber:66,columnNumber:5}},__jsx(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_6__["default"],{position:"fixed",className:Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.appBar,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({},classes.appBarShift,open)),__self:this,__source:{fileName:_jsxFileName,lineNumber:67,columnNumber:7}},__jsx(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_7__["default"],{__self:this,__source:{fileName:_jsxFileName,lineNumber:73,columnNumber:9}},__jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_9__["default"],{color:"inherit","aria-label":"open drawer",onClick:handleDrawerOpen,edge:"start",className:Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.menuButton,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({},classes.hide,open)),__self:this,__source:{fileName:_jsxFileName,lineNumber:74,columnNumber:11}},__jsx(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_10___default.a,{__self:this,__source:{fileName:_jsxFileName,lineNumber:83,columnNumber:13}})),__jsx(_Link__WEBPACK_IMPORTED_MODULE_12__["default"],{href:"/",className:classes.titleLink,__self:this,__source:{fileName:_jsxFileName,lineNumber:85,columnNumber:11}},__jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__["default"],{variant:"h6",className:classes.title,__self:this,__source:{fileName:_jsxFileName,lineNumber:86,columnNumber:13}},t('name'))))),__jsx(_MiniDrawer__WEBPACK_IMPORTED_MODULE_13__["default"],{drawerWidth:drawerWidth,open:open,handleDrawerClose:handleDrawerClose,__self:this,__source:{fileName:_jsxFileName,lineNumber:92,columnNumber:7}}));}

/***/ })

})
//# sourceMappingURL=_app.js.bc57c705601967479f51.hot-update.js.map