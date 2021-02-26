webpackHotUpdate_N_E("pages/index",{

/***/ "./src/context/ChallengesContext.tsx":
/*!*******************************************!*\
  !*** ./src/context/ChallengesContext.tsx ***!
  \*******************************************/
/*! exports provided: ChallengesContext, ChallengesProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChallengesContext", function() { return ChallengesContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChallengesProvider", function() { return ChallengesProvider; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_Wanderley_Desktop_moveit_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _challenges_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../challenges.json */ "./challenges.json");
var _challenges_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../challenges.json */ "./challenges.json", 1);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_4__);



var _jsxFileName = "C:\\Users\\Wanderley\\Desktop\\moveit-next\\src\\context\\ChallengesContext.tsx",
    _s = $RefreshSig$();




;
var ChallengesContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_2__["createContext"])({});
function ChallengesProvider(_ref) {
  _s();

  var _rest$level, _rest$currentExperien, _rest$challengeComple;

  var children = _ref.children,
      rest = Object(C_Users_Wanderley_Desktop_moveit_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["children"]);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])((_rest$level = rest.level) !== null && _rest$level !== void 0 ? _rest$level : 1),
      level = _useState[0],
      setLevel = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])((_rest$currentExperien = rest.currentExperience) !== null && _rest$currentExperien !== void 0 ? _rest$currentExperien : 0),
      currentExperience = _useState2[0],
      setCurrentExperience = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])((_rest$challengeComple = rest.challengeCompleted) !== null && _rest$challengeComple !== void 0 ? _rest$challengeComple : 0),
      challengeCompleted = _useState3[0],
      setChallengeCompleted = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(null),
      activeChallenge = _useState4[0],
      setActiveChallenge = _useState4[1];

  var experienceToNextLevel = Math.pow((level + 1) * 4, 2);

  function levelUp() {
    setLevel(level + 1);
  }

  function completeChallenge() {
    if (activeChallenge.amount <= 0) return;
    console.log([activeChallenge, currentExperience]);
    var amount = activeChallenge.amount;
    var finalExperience = currentExperience + amount;

    if (finalExperience >= experienceToNextLevel) {
      levelUp();
      setCurrentExperience(finalExperience - experienceToNextLevel);
    } else setCurrentExperience(finalExperience);

    setActiveChallenge(null);
    setChallengeCompleted(challengeCompleted + 1);
  }

  function startNewChallengs() {
    var randomChallengeIndex = Math.floor(Math.random() * _challenges_json__WEBPACK_IMPORTED_MODULE_3__.length);
    setActiveChallenge(_challenges_json__WEBPACK_IMPORTED_MODULE_3__[randomChallengeIndex]); //Audio

    new Audio('/notification.mp3').play(); //Notificação

    if (Notification.permission === "granted") {
      new Notification('Novo Desafio', {
        'body': "Valendo ".concat(_challenges_json__WEBPACK_IMPORTED_MODULE_3__[randomChallengeIndex].amount, " xp!"),
        'icon': "favicon.png"
      });
    }
  }

  function resetChallenge() {
    setActiveChallenge(null);
  } //Notificação


  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    Notification.requestPermission();
  }, []); //Salvar em cookies

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    js_cookie__WEBPACK_IMPORTED_MODULE_4___default.a.set('level', String(level));
    js_cookie__WEBPACK_IMPORTED_MODULE_4___default.a.set('currentExperience', String(currentExperience));
    js_cookie__WEBPACK_IMPORTED_MODULE_4___default.a.set('challengeCompleted', String(challengeCompleted));
  }, [level, currentExperience, challengeCompleted]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ChallengesContext.Provider, {
    value: {
      level: level,
      currentExperience: currentExperience,
      challengeCompleted: challengeCompleted,
      startNewChallengs: startNewChallengs,
      activeChallenge: activeChallenge,
      resetChallenge: resetChallenge,
      experienceToNextLevel: experienceToNextLevel,
      completeChallenge: completeChallenge
    },
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 86,
    columnNumber: 5
  }, this);
}

_s(ChallengesProvider, "Xlodci6BwibRMnOy0sgAf7eW/E8=");

_c = ChallengesProvider;

var _c;

$RefreshReg$(_c, "ChallengesProvider");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRleHQvQ2hhbGxlbmdlc0NvbnRleHQudHN4Il0sIm5hbWVzIjpbIkNoYWxsZW5nZXNDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsIkNoYWxsZW5nZXNQcm92aWRlciIsImNoaWxkcmVuIiwicmVzdCIsInVzZVN0YXRlIiwibGV2ZWwiLCJzZXRMZXZlbCIsImN1cnJlbnRFeHBlcmllbmNlIiwic2V0Q3VycmVudEV4cGVyaWVuY2UiLCJjaGFsbGVuZ2VDb21wbGV0ZWQiLCJzZXRDaGFsbGVuZ2VDb21wbGV0ZWQiLCJhY3RpdmVDaGFsbGVuZ2UiLCJzZXRBY3RpdmVDaGFsbGVuZ2UiLCJleHBlcmllbmNlVG9OZXh0TGV2ZWwiLCJNYXRoIiwicG93IiwibGV2ZWxVcCIsImNvbXBsZXRlQ2hhbGxlbmdlIiwiYW1vdW50IiwiY29uc29sZSIsImxvZyIsImZpbmFsRXhwZXJpZW5jZSIsInN0YXJ0TmV3Q2hhbGxlbmdzIiwicmFuZG9tQ2hhbGxlbmdlSW5kZXgiLCJmbG9vciIsInJhbmRvbSIsImNoYWxsZW5nZXMiLCJsZW5ndGgiLCJBdWRpbyIsInBsYXkiLCJOb3RpZmljYXRpb24iLCJwZXJtaXNzaW9uIiwicmVzZXRDaGFsbGVuZ2UiLCJ1c2VFZmZlY3QiLCJyZXF1ZXN0UGVybWlzc2lvbiIsIkNvb2tpZXMiLCJzZXQiLCJTdHJpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFhQztBQVlNLElBQU1BLGlCQUFpQixnQkFBR0MsMkRBQWEsQ0FBQyxFQUFELENBQXZDO0FBQ0EsU0FBU0Msa0JBQVQsT0FBNEU7QUFBQTs7QUFBQTs7QUFBQSxNQUE5Q0MsUUFBOEMsUUFBOUNBLFFBQThDO0FBQUEsTUFBakNDLElBQWlDOztBQUFBLGtCQUNyREMsc0RBQVEsZ0JBQVNELElBQUksQ0FBQ0UsS0FBZCxxREFBdUIsQ0FBdkIsQ0FENkM7QUFBQSxNQUN4RUEsS0FEd0U7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LEVBQWpCQSxpQkFBVDtBQUE0QkUsd0JBQWtCLEVBQWxCQSxrQkFBNUI7QUFBZ0RhLHVCQUFpQixFQUFqQkEsaUJBQWhEO0FBQW1FWCxxQkFBZSxFQUFmQSxlQUFuRTtBQUFvRnFCLG9CQUFjLEVBQWRBLGNBQXBGO0FBQW9HbkIsMkJBQXFCLEVBQXJCQSxxQkFBcEc7QUFBMkhJLHVCQUFpQixFQUFqQkE7QUFBM0gsS0FBbkM7QUFBQSxjQUNTZjtBQURUO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFEQTtBQUtIOztHQTdEZUQsa0I7O0tBQUFBLGtCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjkzNWZhNmMyYTQ4ODUzZmQyYzM0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2NyZWF0ZUNvbnRleHQsIFJlYWN0Tm9kZSwgdXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgY2hhbGxlbmdlcyBmcm9tICcuLi8uLi9jaGFsbGVuZ2VzLmpzb24nO1xyXG5pbXBvcnQgQ29va2llcyBmcm9tICdqcy1jb29raWUnO1xyXG5cclxuXHJcbmludGVyZmFjZSBDaGFsbGVuZ2VzUHJvdmlkZXJQcm9wcyB7XHJcbiAgICBjaGlsZHJlbiAgICAgICAgICAgOiBSZWFjdE5vZGU7XHJcbiAgICBsZXZlbCAgICAgICAgICAgICAgOiBudW1iZXI7XHJcbiAgICBjdXJyZW50RXhwZXJpZW5jZSAgOiBudW1iZXI7XHJcbiAgICBjaGFsbGVuZ2VDb21wbGV0ZWQgOiBudW1iZXI7XHJcbn1cclxuaW50ZXJmYWNlIEFjdGl2ZUNoYWxsZW5nZSAge1xyXG4gICAgdHlwZSAgICAgICAgICAgICAgOiBzdHJpbmc7XHJcbiAgICBkZXNjcmlwdGlvbiAgICAgICA6IHN0cmluZztcclxuICAgIGFtb3VudCAgICAgICAgICAgIDogbnVtYmVyOyBcclxufTtcclxuaW50ZXJmYWNlIENoYWxsZW5nZXNDb250ZXh0RGF0YXtcclxuICAgIGxldmVsICAgICAgICAgICAgICAgICA6IG51bWJlcjsgXHJcbiAgICBjdXJyZW50RXhwZXJpZW5jZSAgICAgOiBudW1iZXI7XHJcbiAgICBjaGFsbGVuZ2VDb21wbGV0ZWQgICAgOiBudW1iZXI7IFxyXG4gICAgc3RhcnROZXdDaGFsbGVuZ3MgICAgIDogKCkgPT4gdm9pZDtcclxuICAgIGFjdGl2ZUNoYWxsZW5nZSAgICAgICA6IEFjdGl2ZUNoYWxsZW5nZTtcclxuICAgIHJlc2V0Q2hhbGxlbmdlICAgICAgICA6ICgpID0+IHZvaWQ7XHJcbiAgICBjb21wbGV0ZUNoYWxsZW5nZSAgICAgOiAoKSA9PiB2b2lkO1xyXG4gICAgZXhwZXJpZW5jZVRvTmV4dExldmVsIDogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQ2hhbGxlbmdlc0NvbnRleHQgPSBjcmVhdGVDb250ZXh0KHt9IGFzIENoYWxsZW5nZXNDb250ZXh0RGF0YSk7XHJcbmV4cG9ydCBmdW5jdGlvbiBDaGFsbGVuZ2VzUHJvdmlkZXIoeyBjaGlsZHJlbiwgLi4ucmVzdH0gOiBDaGFsbGVuZ2VzUHJvdmlkZXJQcm9wcykge1xyXG4gICAgY29uc3QgW2xldmVsLCBzZXRMZXZlbF0gPSB1c2VTdGF0ZTxudW1iZXI+KHJlc3QubGV2ZWwgPz8gMSk7XHJcbiAgICBjb25zdCBbY3VycmVudEV4cGVyaWVuY2Usc2V0Q3VycmVudEV4cGVyaWVuY2VdID0gdXNlU3RhdGU8bnVtYmVyPihyZXN0LmN1cnJlbnRFeHBlcmllbmNlID8/IDApO1xyXG4gICAgY29uc3QgW2NoYWxsZW5nZUNvbXBsZXRlZCwgc2V0Q2hhbGxlbmdlQ29tcGxldGVkXSA9IHVzZVN0YXRlPG51bWJlcj4ocmVzdC5jaGFsbGVuZ2VDb21wbGV0ZWQgPz8gMCk7XHJcbiAgICBjb25zdCBbYWN0aXZlQ2hhbGxlbmdlLCBzZXRBY3RpdmVDaGFsbGVuZ2VdID0gdXNlU3RhdGU8QWN0aXZlQ2hhbGxlbmdlPihudWxsKTtcclxuXHJcbiAgICBjb25zdCBleHBlcmllbmNlVG9OZXh0TGV2ZWwgPSBNYXRoLnBvdygobGV2ZWwgKyAxKSAqIDQsIDIpOyBcclxuXHJcbiAgICBmdW5jdGlvbiBsZXZlbFVwKCl7XHJcbiAgICAgICAgc2V0TGV2ZWwobGV2ZWwgKyAxKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGNvbXBsZXRlQ2hhbGxlbmdlKCkge1xyXG4gICAgICAgIGlmKCBhY3RpdmVDaGFsbGVuZ2UuYW1vdW50IDw9IDAgKVxyXG4gICAgICAgICAgICByZXR1cm4gO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFthY3RpdmVDaGFsbGVuZ2UsIGN1cnJlbnRFeHBlcmllbmNlXSk7XHJcbiAgICAgICAgY29uc3QgeyBhbW91bnQgfSA9IGFjdGl2ZUNoYWxsZW5nZTtcclxuICAgICAgICBsZXQgZmluYWxFeHBlcmllbmNlID0gY3VycmVudEV4cGVyaWVuY2UgKyBhbW91bnQ7XHJcbiAgICAgICAgaWYoZmluYWxFeHBlcmllbmNlID49IGV4cGVyaWVuY2VUb05leHRMZXZlbCl7XHJcbiAgICAgICAgICAgIGxldmVsVXAoKTtcclxuICAgICAgICAgICAgc2V0Q3VycmVudEV4cGVyaWVuY2UoZmluYWxFeHBlcmllbmNlIC0gZXhwZXJpZW5jZVRvTmV4dExldmVsKTtcclxuICAgICAgICB9ZWxzZVxyXG4gICAgICAgICAgICBzZXRDdXJyZW50RXhwZXJpZW5jZShmaW5hbEV4cGVyaWVuY2UpO1xyXG4gICAgICAgIHNldEFjdGl2ZUNoYWxsZW5nZShudWxsKTtcclxuICAgICAgICBzZXRDaGFsbGVuZ2VDb21wbGV0ZWQoY2hhbGxlbmdlQ29tcGxldGVkICsgMSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc3RhcnROZXdDaGFsbGVuZ3MoKXtcclxuICAgICAgIGNvbnN0IHJhbmRvbUNoYWxsZW5nZUluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogY2hhbGxlbmdlcy5sZW5ndGgpO1xyXG4gICAgICAgc2V0QWN0aXZlQ2hhbGxlbmdlKGNoYWxsZW5nZXNbcmFuZG9tQ2hhbGxlbmdlSW5kZXhdKTtcclxuICAgICAgICAvL0F1ZGlvXHJcbiAgICAgICAgbmV3IEF1ZGlvKCcvbm90aWZpY2F0aW9uLm1wMycpLnBsYXkoKTtcclxuICAgICAgIC8vTm90aWZpY2HDp8Ojb1xyXG4gICAgICAgaWYoTm90aWZpY2F0aW9uLnBlcm1pc3Npb24gPT09IFwiZ3JhbnRlZFwiKXtcclxuICAgICAgICAgICBuZXcgTm90aWZpY2F0aW9uKCdOb3ZvIERlc2FmaW8nLCB7XHJcbiAgICAgICAgICAgICAgICdib2R5JyA6IGBWYWxlbmRvICR7Y2hhbGxlbmdlc1tyYW5kb21DaGFsbGVuZ2VJbmRleF0uYW1vdW50fSB4cCFgLFxyXG4gICAgICAgICAgICAgICAnaWNvbicgOiBgZmF2aWNvbi5wbmdgXHJcbiAgICAgICAgICAgfSlcclxuICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiByZXNldENoYWxsZW5nZSgpe1xyXG4gICAgICAgIHNldEFjdGl2ZUNoYWxsZW5nZShudWxsKTtcclxuICAgIH1cclxuICAgIC8vTm90aWZpY2HDp8Ojb1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBOb3RpZmljYXRpb24ucmVxdWVzdFBlcm1pc3Npb24oKTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICAvL1NhbHZhciBlbSBjb29raWVzXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIENvb2tpZXMuc2V0KCdsZXZlbCcsIFN0cmluZyhsZXZlbCkpO1xyXG4gICAgICAgIENvb2tpZXMuc2V0KCdjdXJyZW50RXhwZXJpZW5jZScsIFN0cmluZyhjdXJyZW50RXhwZXJpZW5jZSkpO1xyXG4gICAgICAgIENvb2tpZXMuc2V0KCdjaGFsbGVuZ2VDb21wbGV0ZWQnLCBTdHJpbmcoY2hhbGxlbmdlQ29tcGxldGVkKSk7XHJcblxyXG4gICAgfSwgW2xldmVsLCBjdXJyZW50RXhwZXJpZW5jZSwgY2hhbGxlbmdlQ29tcGxldGVkXSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgIDxDaGFsbGVuZ2VzQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyBsZXZlbCwgY3VycmVudEV4cGVyaWVuY2UsIGNoYWxsZW5nZUNvbXBsZXRlZCwgc3RhcnROZXdDaGFsbGVuZ3MsIGFjdGl2ZUNoYWxsZW5nZSwgcmVzZXRDaGFsbGVuZ2UsIGV4cGVyaWVuY2VUb05leHRMZXZlbCwgY29tcGxldGVDaGFsbGVuZ2V9fT5cclxuICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgIDwvQ2hhbGxlbmdlc0NvbnRleHQuUHJvdmlkZXI+XHJcbiAgICApO1xyXG59ICJdLCJzb3VyY2VSb290IjoiIn0=