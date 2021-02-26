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
/* harmony import */ var _components_LevelUpModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/LevelUpModal */ "./src/components/LevelUpModal.tsx");



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

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      isLevelUpModalOpen = _useState5[0],
      setIsLevelUpModalOpen = _useState5[1];

  var experienceToNextLevel = Math.pow((level + 1) * 4, 2);

  function levelUp() {
    setLevel(level + 1);
    setIsLevelUpModalOpen(true);
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
  }

  function closeModal() {
    setIsLevelUpModalOpen(false);
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
      completeChallenge: completeChallenge,
      closeModal: closeModal
    },
    children: [isLevelUpModalOpen && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_LevelUpModal__WEBPACK_IMPORTED_MODULE_5__["LevelUpModal"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 32
    }, this), children]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 95,
    columnNumber: 9
  }, this);
}

_s(ChallengesProvider, "hzjCxF8t8uwJGcL9nLGW3PGyXw8=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRleHQvQ2hhbGxlbmdlc0NvbnRleHQudHN4Il0sIm5hbWVzIjpbIkNoYWxsZW5nZXNDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsIkNoYWxsZW5nZXNQcm92aWRlciIsImNoaWxkcmVuIiwicmVzdCIsInVzZVN0YXRlIiwibGV2ZWwiLCJzZXRMZXZlbCIsImN1cnJlbnRFeHBlcmllbmNlIiwic2V0Q3VycmVudEV4cGVyaWVuY2UiLCJjaGFsbGVuZ2VDb21wbGV0ZWQiLCJzZXRDaGFsbGVuZ2VDb21wbGV0ZWQiLCJhY3RpdmVDaGFsbGVuZ2UiLCJzZXRBY3RpdmVDaGFsbGVuZ2UiLCJpc0xldmVsVXBNb2RhbE9wZW4iLCJzZXRJc0xldmVsVXBNb2RhbE9wZW4iLCJleHBlcmllbmNlVG9OZXh0TGV2ZWwiLCJNYXRoIiwicG93IiwibGV2ZWxVcCIsImNvbXBsZXRlQ2hhbGxlbmdlIiwiYW1vdW50IiwiY29uc29sZSIsImxvZyIsImZpbmFsRXhwZXJpZW5jZSIsInN0YXJ0TmV3Q2hhbGxlbmdzIiwicmFuZG9tQ2hhbGxlbmdlSW5kZXgiLCJmbG9vciIsInJhbmRvbSIsImNoYWxsZW5nZXMiLCJsZW5ndGgiLCJBdWRpbyIsInBsYXkiLCJOb3RpZmljYXRpb24iLCJwZXJtaXNzaW9uIiwicmVzZXRDaGFsbGVuZ2UiLCJjbG9zZU1vZGFsIiwidXNlRWZmZWN0IiwicmVxdWVzdFBlcm1pc3Npb24iLCJDb29raWVzIiwic2V0IiwiU3RyaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBYUM7QUFhTSxJQUFNQSxpQkFBaUIsZ0JBQUdDLDJEQUFhLENBQUMsRUFBRCxDQUF2QztBQUNBLFNBQVNDLGtCQUFULE9BQTRFO0FBQUE7O0FBQUE7O0FBQUEsTUFBOUNDLFFBQThDLFFBQTlDQSxRQUE4QztBQUFBLE1BQWpDQyxJQUFpQzs7QUFBQSxrQkFDckRDLHNE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QUNqQyxpQkFBRCxDQUF2QztBQUNBK0Isb0RBQU8sQ0FBQ0MsR0FBUixDQUFZLG9CQUFaLEVBQWtDQyxNQUFNLENBQUMvQixrQkFBRCxDQUF4QztBQUVILEdBTFEsRUFLTixDQUFDSixLQUFELEVBQVFFLGlCQUFSLEVBQTJCRSxrQkFBM0IsQ0FMTSxDQUFUO0FBT0Esc0JBQ0kscUVBQUMsaUJBQUQsQ0FBbUIsUUFBbkI7QUFBNEIsU0FBSyxFQUFFO0FBQUVKLFdBQUssRUFBTEEsS0FBRjtBQUFTRSx1QkFBaUIsRUFBakJBLGlCQUFUO0FBQTRCRSx3QkFBa0IsRUFBbEJBLGtCQUE1QjtBQUFnRGUsdUJBQWlCLEVBQWpCQSxpQkFBaEQ7QUFBbUViLHFCQUFlLEVBQWZBLGVBQW5FO0FBQW9GdUIsb0JBQWMsRUFBZEEsY0FBcEY7QUFBb0duQiwyQkFBcUIsRUFBckJBLHFCQUFwRztBQUEySEksdUJBQWlCLEVBQWpCQSxpQkFBM0g7QUFBOElnQixnQkFBVSxFQUFWQTtBQUE5SSxLQUFuQztBQUFBLGVBQ0N0QixrQkFBa0IsaUJBQUkscUVBQUMscUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUR2QixFQUVLWCxRQUZMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBTUg7O0dBckVlRCxrQjs7S0FBQUEsa0IiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguM2IzOTEwYTAzZjNkMmE0YmI5ZDUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Y3JlYXRlQ29udGV4dCwgUmVhY3ROb2RlLCB1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBjaGFsbGVuZ2VzIGZyb20gJy4uLy4uL2NoYWxsZW5nZXMuanNvbic7XHJcbmltcG9ydCBDb29raWVzIGZyb20gJ2pzLWNvb2tpZSc7XHJcbmltcG9ydCB7IExldmVsVXBNb2RhbCB9IGZyb20gJy4uL2NvbXBvbmVudHMvTGV2ZWxVcE1vZGFsJztcclxuXHJcblxyXG5pbnRlcmZhY2UgQ2hhbGxlbmdlc1Byb3ZpZGVyUHJvcHMge1xyXG4gICAgY2hpbGRyZW4gICAgICAgICAgIDogUmVhY3ROb2RlO1xyXG4gICAgbGV2ZWwgICAgICAgICAgICAgIDogbnVtYmVyO1xyXG4gICAgY3VycmVudEV4cGVyaWVuY2UgIDogbnVtYmVyO1xyXG4gICAgY2hhbGxlbmdlQ29tcGxldGVkIDogbnVtYmVyO1xyXG59XHJcbmludGVyZmFjZSBBY3RpdmVDaGFsbGVuZ2UgIHtcclxuICAgIHR5cGUgICAgICAgICAgICAgIDogc3RyaW5nO1xyXG4gICAgZGVzY3JpcHRpb24gICAgICAgOiBzdHJpbmc7XHJcbiAgICBhbW91bnQgICAgICAgICAgICA6IG51bWJlcjsgXHJcbn07XHJcbmludGVyZmFjZSBDaGFsbGVuZ2VzQ29udGV4dERhdGF7XHJcbiAgICBsZXZlbCAgICAgICAgICAgICAgICAgOiBudW1iZXI7IFxyXG4gICAgY3VycmVudEV4cGVyaWVuY2UgICAgIDogbnVtYmVyO1xyXG4gICAgY2hhbGxlbmdlQ29tcGxldGVkICAgIDogbnVtYmVyOyBcclxuICAgIHN0YXJ0TmV3Q2hhbGxlbmdzICAgICA6ICgpID0+IHZvaWQ7XHJcbiAgICBhY3RpdmVDaGFsbGVuZ2UgICAgICAgOiBBY3RpdmVDaGFsbGVuZ2U7XHJcbiAgICByZXNldENoYWxsZW5nZSAgICAgICAgOiAoKSA9PiB2b2lkO1xyXG4gICAgY29tcGxldGVDaGFsbGVuZ2UgICAgIDogKCkgPT4gdm9pZDtcclxuICAgIGV4cGVyaWVuY2VUb05leHRMZXZlbCA6IG51bWJlcjtcclxuICAgIGNsb3NlTW9kYWwgICAgICAgICAgICA6ICgpID0+IHZvaWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBDaGFsbGVuZ2VzQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoe30gYXMgQ2hhbGxlbmdlc0NvbnRleHREYXRhKTtcclxuZXhwb3J0IGZ1bmN0aW9uIENoYWxsZW5nZXNQcm92aWRlcih7IGNoaWxkcmVuLCAuLi5yZXN0fSA6IENoYWxsZW5nZXNQcm92aWRlclByb3BzKSB7XHJcbiAgICBjb25zdCBbbGV2ZWwsIHNldExldmVsXSA9IHVzZVN0YXRlPG51bWJlcj4ocmVzdC5sZXZlbCA/PyAxKTtcclxuICAgIGNvbnN0IFtjdXJyZW50RXhwZXJpZW5jZSxzZXRDdXJyZW50RXhwZXJpZW5jZV0gPSB1c2VTdGF0ZTxudW1iZXI+KHJlc3QuY3VycmVudEV4cGVyaWVuY2UgPz8gMCk7XHJcbiAgICBjb25zdCBbY2hhbGxlbmdlQ29tcGxldGVkLCBzZXRDaGFsbGVuZ2VDb21wbGV0ZWRdID0gdXNlU3RhdGU8bnVtYmVyPihyZXN0LmNoYWxsZW5nZUNvbXBsZXRlZCA/PyAwKTtcclxuICAgIGNvbnN0IFthY3RpdmVDaGFsbGVuZ2UsIHNldEFjdGl2ZUNoYWxsZW5nZV0gPSB1c2VTdGF0ZTxBY3RpdmVDaGFsbGVuZ2U+KG51bGwpO1xyXG4gICAgY29uc3QgW2lzTGV2ZWxVcE1vZGFsT3Blbiwgc2V0SXNMZXZlbFVwTW9kYWxPcGVuXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcclxuXHJcbiAgICBjb25zdCBleHBlcmllbmNlVG9OZXh0TGV2ZWwgPSBNYXRoLnBvdygobGV2ZWwgKyAxKSAqIDQsIDIpOyBcclxuXHJcbiAgICBmdW5jdGlvbiBsZXZlbFVwKCl7XHJcbiAgICAgICAgc2V0TGV2ZWwobGV2ZWwgKyAxKTtcclxuICAgICAgICBzZXRJc0xldmVsVXBNb2RhbE9wZW4odHJ1ZSk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBjb21wbGV0ZUNoYWxsZW5nZSgpIHtcclxuICAgICAgICBpZiggYWN0aXZlQ2hhbGxlbmdlLmFtb3VudCA8PSAwIClcclxuICAgICAgICAgICAgcmV0dXJuIDtcclxuICAgICAgICBjb25zb2xlLmxvZyhbYWN0aXZlQ2hhbGxlbmdlLCBjdXJyZW50RXhwZXJpZW5jZV0pO1xyXG4gICAgICAgIGNvbnN0IHsgYW1vdW50IH0gPSBhY3RpdmVDaGFsbGVuZ2U7XHJcbiAgICAgICAgbGV0IGZpbmFsRXhwZXJpZW5jZSA9IGN1cnJlbnRFeHBlcmllbmNlICsgYW1vdW50O1xyXG4gICAgICAgIGlmKGZpbmFsRXhwZXJpZW5jZSA+PSBleHBlcmllbmNlVG9OZXh0TGV2ZWwpe1xyXG4gICAgICAgICAgICBsZXZlbFVwKCk7XHJcbiAgICAgICAgICAgIHNldEN1cnJlbnRFeHBlcmllbmNlKGZpbmFsRXhwZXJpZW5jZSAtIGV4cGVyaWVuY2VUb05leHRMZXZlbCk7XHJcbiAgICAgICAgfWVsc2VcclxuICAgICAgICAgICAgc2V0Q3VycmVudEV4cGVyaWVuY2UoZmluYWxFeHBlcmllbmNlKTtcclxuICAgICAgICBzZXRBY3RpdmVDaGFsbGVuZ2UobnVsbCk7XHJcbiAgICAgICAgc2V0Q2hhbGxlbmdlQ29tcGxldGVkKGNoYWxsZW5nZUNvbXBsZXRlZCArIDEpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHN0YXJ0TmV3Q2hhbGxlbmdzKCl7XHJcbiAgICAgICBjb25zdCByYW5kb21DaGFsbGVuZ2VJbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGNoYWxsZW5nZXMubGVuZ3RoKTtcclxuICAgICAgIHNldEFjdGl2ZUNoYWxsZW5nZShjaGFsbGVuZ2VzW3JhbmRvbUNoYWxsZW5nZUluZGV4XSk7XHJcbiAgICAgICAgLy9BdWRpb1xyXG4gICAgICAgIG5ldyBBdWRpbygnL25vdGlmaWNhdGlvbi5tcDMnKS5wbGF5KCk7XHJcbiAgICAgICAvL05vdGlmaWNhw6fDo29cclxuICAgICAgIGlmKE5vdGlmaWNhdGlvbi5wZXJtaXNzaW9uID09PSBcImdyYW50ZWRcIil7XHJcbiAgICAgICAgICAgbmV3IE5vdGlmaWNhdGlvbignTm92byBEZXNhZmlvJywge1xyXG4gICAgICAgICAgICAgICAnYm9keScgOiBgVmFsZW5kbyAke2NoYWxsZW5nZXNbcmFuZG9tQ2hhbGxlbmdlSW5kZXhdLmFtb3VudH0geHAhYCxcclxuICAgICAgICAgICAgICAgJ2ljb24nIDogYGZhdmljb24ucG5nYFxyXG4gICAgICAgICAgIH0pXHJcbiAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcmVzZXRDaGFsbGVuZ2UoKXtcclxuICAgICAgICBzZXRBY3RpdmVDaGFsbGVuZ2UobnVsbCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY2xvc2VNb2RhbCgpe1xyXG4gICAgICAgIHNldElzTGV2ZWxVcE1vZGFsT3BlbihmYWxzZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy9Ob3RpZmljYcOnw6NvXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIE5vdGlmaWNhdGlvbi5yZXF1ZXN0UGVybWlzc2lvbigpO1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIC8vU2FsdmFyIGVtIGNvb2tpZXNcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgQ29va2llcy5zZXQoJ2xldmVsJywgU3RyaW5nKGxldmVsKSk7XHJcbiAgICAgICAgQ29va2llcy5zZXQoJ2N1cnJlbnRFeHBlcmllbmNlJywgU3RyaW5nKGN1cnJlbnRFeHBlcmllbmNlKSk7XHJcbiAgICAgICAgQ29va2llcy5zZXQoJ2NoYWxsZW5nZUNvbXBsZXRlZCcsIFN0cmluZyhjaGFsbGVuZ2VDb21wbGV0ZWQpKTtcclxuXHJcbiAgICB9LCBbbGV2ZWwsIGN1cnJlbnRFeHBlcmllbmNlLCBjaGFsbGVuZ2VDb21wbGV0ZWRdKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxDaGFsbGVuZ2VzQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyBsZXZlbCwgY3VycmVudEV4cGVyaWVuY2UsIGNoYWxsZW5nZUNvbXBsZXRlZCwgc3RhcnROZXdDaGFsbGVuZ3MsIGFjdGl2ZUNoYWxsZW5nZSwgcmVzZXRDaGFsbGVuZ2UsIGV4cGVyaWVuY2VUb05leHRMZXZlbCwgY29tcGxldGVDaGFsbGVuZ2UsIGNsb3NlTW9kYWx9fT5cclxuICAgICAgIHsgaXNMZXZlbFVwTW9kYWxPcGVuICYmIDxMZXZlbFVwTW9kYWwvPiB9XHJcbiAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICA8L0NoYWxsZW5nZXNDb250ZXh0LlByb3ZpZGVyPlxyXG4gICAgKTtcclxufSAiXSwic291cmNlUm9vdCI6IiJ9