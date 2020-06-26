(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

/***/ "./client/components/ModalContent.jsx":
/*!********************************************!*\
  !*** ./client/components/ModalContent.jsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\n\nvar ReviewList = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__[\"lazy\"])(function () {\n  return Promise.all(/*! import() */[__webpack_require__.e(1), __webpack_require__.e(11)]).then(__webpack_require__.bind(null, /*! ./ReviewList.jsx */ \"./client/components/ReviewList.jsx\"));\n}); // import OverallStars from './OverallStars.jsx';\n// import StarsList from './StarsList.jsx';\n\nvar OverallStars = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__[\"lazy\"])(function () {\n  return __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ./OverallStars.jsx */ \"./client/components/OverallStars.jsx\"));\n});\nvar StarsList = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__[\"lazy\"])(function () {\n  return __webpack_require__.e(/*! import() */ 2).then(__webpack_require__.bind(null, /*! ./StarsList.jsx */ \"./client/components/StarsList.jsx\"));\n});\nvar MainBox = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n  displayName: \"ModalContent__MainBox\",\n  componentId: \"mdopow-0\"\n})([\"flex:1 1 auto;padding:24px 24px 24px 18px;display:block;max-height:680px;overflow-y:scroll;\"]);\nvar ContentBox = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n  displayName: \"ModalContent__ContentBox\",\n  componentId: \"mdopow-1\"\n})([\"color:rgb(34,34,34);font-weight:400;margin-top:-24px;display:flex;\"]);\nvar AllStars = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n  displayName: \"ModalContent__AllStars\",\n  componentId: \"mdopow-2\"\n})([\"top:-30px;left:0;position:-webkit-sticky !important;position:sticky !important;width:33.3%;height:300px;padding:0px -8px;\"]);\nvar AllReviews = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n  displayName: \"ModalContent__AllReviews\",\n  componentId: \"mdopow-3\"\n})([\"width:58%;margin-left:8.3%;padding:0px 8px;float:left;position:relative;\"]);\n\nvar ModalContent = function ModalContent(_ref) {\n  var data = _ref.data;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MainBox, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ContentBox, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AllStars, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__[\"Suspense\"], {\n    fallback: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, \"Loading...\")\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(OverallStars, {\n    stars: data.overall,\n    number: data.reviews.length,\n    modal: true\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StarsList, {\n    stars: data.otherStars,\n    modal: true\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AllReviews, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__[\"Suspense\"], {\n    fallback: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, \"Loading...\")\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ReviewList, {\n    reviews: data.reviews,\n    modal: true\n  })))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(ModalContent));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvY29tcG9uZW50cy9Nb2RhbENvbnRlbnQuanN4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY2xpZW50L2NvbXBvbmVudHMvTW9kYWxDb250ZW50LmpzeD84NWVkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBsYXp5LCBTdXNwZW5zZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5jb25zdCBSZXZpZXdMaXN0ID0gbGF6eSgoKSA9PiBpbXBvcnQoJy4vUmV2aWV3TGlzdC5qc3gnKSk7XG4vLyBpbXBvcnQgT3ZlcmFsbFN0YXJzIGZyb20gJy4vT3ZlcmFsbFN0YXJzLmpzeCc7XG4vLyBpbXBvcnQgU3RhcnNMaXN0IGZyb20gJy4vU3RhcnNMaXN0LmpzeCc7XG5jb25zdCBPdmVyYWxsU3RhcnMgPSBsYXp5KCgpID0+IGltcG9ydCgnLi9PdmVyYWxsU3RhcnMuanN4JykpO1xuY29uc3QgU3RhcnNMaXN0ID0gbGF6eSgoKSA9PiBpbXBvcnQoJy4vU3RhcnNMaXN0LmpzeCcpKTtcblxuY29uc3QgTWFpbkJveCA9IHN0eWxlZC5kaXZgXG4gIGZsZXg6IDEgMSBhdXRvO1xuICBwYWRkaW5nOiAyNHB4IDI0cHggMjRweCAxOHB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWF4LWhlaWdodDogNjgwcHg7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbmA7XG5cbmNvbnN0IENvbnRlbnRCb3ggPSBzdHlsZWQuZGl2YFxuICBjb2xvcjogcmdiKDM0LCAzNCwgMzQpO1xuICBmb250LXdlaWdodDogNDAwO1xuICBtYXJnaW4tdG9wOiAtMjRweDtcbiAgZGlzcGxheTogZmxleDtcbmA7XG5cbmNvbnN0IEFsbFN0YXJzID0gc3R5bGVkLmRpdmBcbiAgdG9wOiAtMzBweDtcbiAgbGVmdDogMDtcbiAgcG9zaXRpb246IC13ZWJraXQtc3RpY2t5ICFpbXBvcnRhbnQ7XG4gIHBvc2l0aW9uOiBzdGlja3kgIWltcG9ydGFudDtcbiAgd2lkdGg6IDMzLjMlO1xuICBoZWlnaHQ6IDMwMHB4O1xuICBwYWRkaW5nOiAwcHggLThweDtcbmA7XG5cbmNvbnN0IEFsbFJldmlld3MgPSBzdHlsZWQuZGl2YFxuICAvKiBtYXgtaGVpZ2h0OiAxMDAlOyAqL1xuICB3aWR0aDogNTglO1xuICBtYXJnaW4tbGVmdDogOC4zJTtcbiAgcGFkZGluZzogMHB4IDhweDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbmA7XG5cbmNvbnN0IE1vZGFsQ29udGVudCA9ICh7IGRhdGEgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxNYWluQm94PlxuICAgICAgPENvbnRlbnRCb3g+XG4gICAgICAgIDxBbGxTdGFycz5cbiAgICAgICAgPFN1c3BlbnNlIGZhbGxiYWNrPXs8ZGl2PkxvYWRpbmcuLi48L2Rpdj59PlxuICAgICAgICAgIDxPdmVyYWxsU3RhcnMgc3RhcnM9e2RhdGEub3ZlcmFsbH0gbnVtYmVyPXtkYXRhLnJldmlld3MubGVuZ3RofSBtb2RhbCAvPlxuICAgICAgICAgIDxTdGFyc0xpc3Qgc3RhcnM9e2RhdGEub3RoZXJTdGFyc30gbW9kYWwgLz5cbiAgICAgICAgPC9TdXNwZW5zZT5cbiAgICAgICAgPC9BbGxTdGFycz5cbiAgICAgICAgPEFsbFJldmlld3M+XG4gICAgICAgICAgPFN1c3BlbnNlIGZhbGxiYWNrPXs8ZGl2PkxvYWRpbmcuLi48L2Rpdj59PlxuICAgICAgICAgICAgPFJldmlld0xpc3QgcmV2aWV3cz17ZGF0YS5yZXZpZXdzfSBtb2RhbCAvPlxuICAgICAgICAgIDwvU3VzcGVuc2U+XG4gICAgICAgIDwvQWxsUmV2aWV3cz5cbiAgICAgIDwvQ29udGVudEJveD5cbiAgICA8L01haW5Cb3g+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBSZWFjdC5tZW1vKE1vZGFsQ29udGVudCk7XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQVFBO0FBQUE7QUFBQTtBQUFBO0FBT0E7QUFBQTtBQUFBO0FBQUE7QUFVQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBUUE7QUFBQTtBQUNBO0FBSUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBSUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQU1BO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./client/components/ModalContent.jsx\n");

/***/ })

}]);