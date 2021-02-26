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
    console.log([activeChallenge, currentExperience]);
    if (!activeChallenge.amount > 0) return;
    var amount = activeChallenge.amount;
    var finalExperience = currentExperience + amount;

    if (finalExperience >= experienceToNextLevel) {
      levelUp();
      setCurrentExperience(finalExperience - experienceToNextLevel);
      setActiveChallenge(null);
      setChallengeCompleted(challengeCompleted + 1);
    }
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
    lineNumber: 85,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRleHQvQ2hhbGxlbmdlc0NvbnRleHQudHN4Il0sIm5hbWVzIjpbIkNoYWxsZW5nZXNDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsIkNoYWxsZW5nZXNQcm92aWRlciIsImNoaWxkcmVuIiwicmVzdCIsInVzZVN0YXRlIiwibGV2ZWwiLCJzZXRMZXZlbCIsImN1cnJlbnRFeHBlcmllbmNlIiwic2V0Q3VycmVudEV4cGVyaWVuY2UiLCJjaGFsbGVuZ2VDb21wbGV0ZWQiLCJzZXRDaGFsbGVuZ2VDb21wbGV0ZWQiLCJhY3RpdmVDaGFsbGVuZ2UiLCJzZXRBY3RpdmVDaGFsbGVuZ2UiLCJleHBlcmllbmNlVG9OZXh0TGV2ZWwiLCJNYXRoIiwicG93IiwibGV2ZWxVcCIsImNvbXBsZXRlQ2hhbGxlbmdlIiwiY29uc29sZSIsImxvZyIsImFtb3VudCIsImZpbmFsRXhwZXJpZW5jZSIsInN0YXJ0TmV3Q2hhbGxlbmdzIiwicmFuZG9tQ2hhbGxlbmdlSW5kZXgiLCJmbG9vciIsInJhbmRvbSIsImNoYWxsZW5nZXMiLCJsZW5ndGgiLCJBdWRpbyIsInBsYXkiLCJOb3RpZmljYXRpb24iLCJwZXJtaXNzaW9uIiwicmVzZXRDaGFsbGVuZ2UiLCJ1c2VFZmZlY3QiLCJyZXF1ZXN0UGVybWlzc2lvbiIsIkNvb2tpZXMiLCJzZXQiLCJTdHJpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFhQztBQVlNLElBQU1BLGlCQUFpQixnQkFBR0MsMkRBQWEsQ0FBQyxFQUFELENBQXZDO0FBQ0EsU0FBU0Msa0JBQVQsT0FBNEU7QUFBQTs7QUFBQTs7QUFBQSxNQUE5Q0MsUUFBOEMsUUFBOUNBLFFBQThDO0FBQUEsTUFBakNDLElBQWlDOztBQUFBLGtCQUNyREMsc0RBQVEsZ0JBQVNELElBQUksQ0FBQ0UsS0FBZCxxREFBdUIsQ0FBdkIsQ0FENkM7QUFBQSxNQUN4RUEsS0FEd0U7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bEJBLGtCQUE1QjtBQUFnRGEsdUJBQWlCLEVBQWpCQSxpQkFBaEQ7QUFBbUVYLHFCQUFlLEVBQWZBLGVBQW5FO0FBQW9GcUIsb0JBQWMsRUFBZEEsY0FBcEY7QUFBb0duQiwyQkFBcUIsRUFBckJBLHFCQUFwRztBQUEySEksdUJBQWlCLEVBQWpCQTtBQUEzSCxLQUFuQztBQUFBLGNBQ1NmO0FBRFQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURBO0FBS0g7O0dBNURlRCxrQjs7S0FBQUEsa0IiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguY2Q3NWEyNmY5NWY2OTQyMWY5MzUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Y3JlYXRlQ29udGV4dCwgUmVhY3ROb2RlLCB1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBjaGFsbGVuZ2VzIGZyb20gJy4uLy4uL2NoYWxsZW5nZXMuanNvbic7XHJcbmltcG9ydCBDb29raWVzIGZyb20gJ2pzLWNvb2tpZSc7XHJcblxyXG5cclxuaW50ZXJmYWNlIENoYWxsZW5nZXNQcm92aWRlclByb3BzIHtcclxuICAgIGNoaWxkcmVuICAgICAgICAgICA6IFJlYWN0Tm9kZTtcclxuICAgIGxldmVsICAgICAgICAgICAgICA6IG51bWJlcjtcclxuICAgIGN1cnJlbnRFeHBlcmllbmNlICA6IG51bWJlcjtcclxuICAgIGNoYWxsZW5nZUNvbXBsZXRlZCA6IG51bWJlcjtcclxufVxyXG5pbnRlcmZhY2UgQWN0aXZlQ2hhbGxlbmdlICB7XHJcbiAgICB0eXBlICAgICAgICAgICAgICA6IHN0cmluZztcclxuICAgIGRlc2NyaXB0aW9uICAgICAgIDogc3RyaW5nO1xyXG4gICAgYW1vdW50ICAgICAgICAgICAgOiBudW1iZXI7IFxyXG59O1xyXG5pbnRlcmZhY2UgQ2hhbGxlbmdlc0NvbnRleHREYXRhe1xyXG4gICAgbGV2ZWwgICAgICAgICAgICAgICAgIDogbnVtYmVyOyBcclxuICAgIGN1cnJlbnRFeHBlcmllbmNlICAgICA6IG51bWJlcjtcclxuICAgIGNoYWxsZW5nZUNvbXBsZXRlZCAgICA6IG51bWJlcjsgXHJcbiAgICBzdGFydE5ld0NoYWxsZW5ncyAgICAgOiAoKSA9PiB2b2lkO1xyXG4gICAgYWN0aXZlQ2hhbGxlbmdlICAgICAgIDogQWN0aXZlQ2hhbGxlbmdlO1xyXG4gICAgcmVzZXRDaGFsbGVuZ2UgICAgICAgIDogKCkgPT4gdm9pZDtcclxuICAgIGNvbXBsZXRlQ2hhbGxlbmdlICAgICA6ICgpID0+IHZvaWQ7XHJcbiAgICBleHBlcmllbmNlVG9OZXh0TGV2ZWwgOiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBDaGFsbGVuZ2VzQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoe30gYXMgQ2hhbGxlbmdlc0NvbnRleHREYXRhKTtcclxuZXhwb3J0IGZ1bmN0aW9uIENoYWxsZW5nZXNQcm92aWRlcih7IGNoaWxkcmVuLCAuLi5yZXN0fSA6IENoYWxsZW5nZXNQcm92aWRlclByb3BzKSB7XHJcbiAgICBjb25zdCBbbGV2ZWwsIHNldExldmVsXSA9IHVzZVN0YXRlPG51bWJlcj4ocmVzdC5sZXZlbCA/PyAxKTtcclxuICAgIGNvbnN0IFtjdXJyZW50RXhwZXJpZW5jZSxzZXRDdXJyZW50RXhwZXJpZW5jZV0gPSB1c2VTdGF0ZTxudW1iZXI+KHJlc3QuY3VycmVudEV4cGVyaWVuY2UgPz8gMCk7XHJcbiAgICBjb25zdCBbY2hhbGxlbmdlQ29tcGxldGVkLCBzZXRDaGFsbGVuZ2VDb21wbGV0ZWRdID0gdXNlU3RhdGU8bnVtYmVyPihyZXN0LmNoYWxsZW5nZUNvbXBsZXRlZCA/PyAwKTtcclxuICAgIGNvbnN0IFthY3RpdmVDaGFsbGVuZ2UsIHNldEFjdGl2ZUNoYWxsZW5nZV0gPSB1c2VTdGF0ZTxBY3RpdmVDaGFsbGVuZ2U+KG51bGwpO1xyXG5cclxuICAgIGNvbnN0IGV4cGVyaWVuY2VUb05leHRMZXZlbCA9IE1hdGgucG93KChsZXZlbCArIDEpICogNCwgMik7IFxyXG5cclxuICAgIGZ1bmN0aW9uIGxldmVsVXAoKXtcclxuICAgICAgICBzZXRMZXZlbChsZXZlbCArIDEpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gY29tcGxldGVDaGFsbGVuZ2UoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coW2FjdGl2ZUNoYWxsZW5nZSwgY3VycmVudEV4cGVyaWVuY2VdKTtcclxuICAgICAgICBpZighIGFjdGl2ZUNoYWxsZW5nZS5hbW91bnQgPiAwKVxyXG4gICAgICAgIHJldHVybiA7XHJcbiAgICAgICAgY29uc3QgeyBhbW91bnQgfSA9IGFjdGl2ZUNoYWxsZW5nZTtcclxuICAgICAgICBsZXQgZmluYWxFeHBlcmllbmNlID0gY3VycmVudEV4cGVyaWVuY2UgKyBhbW91bnQ7XHJcbiAgICAgICAgaWYoZmluYWxFeHBlcmllbmNlID49IGV4cGVyaWVuY2VUb05leHRMZXZlbCl7XHJcbiAgICAgICAgICAgIGxldmVsVXAoKTtcclxuICAgICAgICAgICAgc2V0Q3VycmVudEV4cGVyaWVuY2UoZmluYWxFeHBlcmllbmNlIC0gZXhwZXJpZW5jZVRvTmV4dExldmVsKTtcclxuICAgICAgICAgICAgc2V0QWN0aXZlQ2hhbGxlbmdlKG51bGwpO1xyXG4gICAgICAgICAgICBzZXRDaGFsbGVuZ2VDb21wbGV0ZWQoY2hhbGxlbmdlQ29tcGxldGVkICsgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHN0YXJ0TmV3Q2hhbGxlbmdzKCl7XHJcbiAgICAgICBjb25zdCByYW5kb21DaGFsbGVuZ2VJbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGNoYWxsZW5nZXMubGVuZ3RoKTtcclxuICAgICAgIHNldEFjdGl2ZUNoYWxsZW5nZShjaGFsbGVuZ2VzW3JhbmRvbUNoYWxsZW5nZUluZGV4XSk7XHJcbiAgICAgICAgLy9BdWRpb1xyXG4gICAgICAgIG5ldyBBdWRpbygnL25vdGlmaWNhdGlvbi5tcDMnKS5wbGF5KCk7XHJcbiAgICAgICAvL05vdGlmaWNhw6fDo29cclxuICAgICAgIGlmKE5vdGlmaWNhdGlvbi5wZXJtaXNzaW9uID09PSBcImdyYW50ZWRcIil7XHJcbiAgICAgICAgICAgbmV3IE5vdGlmaWNhdGlvbignTm92byBEZXNhZmlvJywge1xyXG4gICAgICAgICAgICAgICAnYm9keScgOiBgVmFsZW5kbyAke2NoYWxsZW5nZXNbcmFuZG9tQ2hhbGxlbmdlSW5kZXhdLmFtb3VudH0geHAhYCxcclxuICAgICAgICAgICAgICAgJ2ljb24nIDogYGZhdmljb24ucG5nYFxyXG4gICAgICAgICAgIH0pXHJcbiAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcmVzZXRDaGFsbGVuZ2UoKXtcclxuICAgICAgICBzZXRBY3RpdmVDaGFsbGVuZ2UobnVsbCk7XHJcbiAgICB9XHJcbiAgICAvL05vdGlmaWNhw6fDo29cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgTm90aWZpY2F0aW9uLnJlcXVlc3RQZXJtaXNzaW9uKCk7XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgLy9TYWx2YXIgZW0gY29va2llc1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBDb29raWVzLnNldCgnbGV2ZWwnLCBTdHJpbmcobGV2ZWwpKTtcclxuICAgICAgICBDb29raWVzLnNldCgnY3VycmVudEV4cGVyaWVuY2UnLCBTdHJpbmcoY3VycmVudEV4cGVyaWVuY2UpKTtcclxuICAgICAgICBDb29raWVzLnNldCgnY2hhbGxlbmdlQ29tcGxldGVkJywgU3RyaW5nKGNoYWxsZW5nZUNvbXBsZXRlZCkpO1xyXG5cclxuICAgIH0sIFtsZXZlbCwgY3VycmVudEV4cGVyaWVuY2UsIGNoYWxsZW5nZUNvbXBsZXRlZF0pO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICA8Q2hhbGxlbmdlc0NvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgbGV2ZWwsIGN1cnJlbnRFeHBlcmllbmNlLCBjaGFsbGVuZ2VDb21wbGV0ZWQsIHN0YXJ0TmV3Q2hhbGxlbmdzLCBhY3RpdmVDaGFsbGVuZ2UsIHJlc2V0Q2hhbGxlbmdlLCBleHBlcmllbmNlVG9OZXh0TGV2ZWwsIGNvbXBsZXRlQ2hhbGxlbmdlfX0+XHJcbiAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICA8L0NoYWxsZW5nZXNDb250ZXh0LlByb3ZpZGVyPlxyXG4gICAgKTtcclxufSAiXSwic291cmNlUm9vdCI6IiJ9