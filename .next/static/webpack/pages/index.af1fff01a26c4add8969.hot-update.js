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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _challenges_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../challenges.json */ "./challenges.json");
var _challenges_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../challenges.json */ "./challenges.json", 1);


var _jsxFileName = "C:\\Users\\Wanderley\\Desktop\\moveit-next\\src\\context\\ChallengesContext.tsx",
    _s = $RefreshSig$();



;
var ChallengesContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["createContext"])({});
function ChallengesProvider(_ref) {
  _s();

  var children = _ref.children;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(1),
      level = _useState[0],
      setLevel = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      currentExperience = _useState2[0],
      setCurrentExperience = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      challengeCompleted = _useState3[0],
      setChallengeCompleted = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
      activeChallenge = _useState4[0],
      setActiveChallenge = _useState4[1];

  var experienceToNextLevel = Math.pow((level + 1) * 4, 2);

  function levelUp() {
    setLevel(level + 1);
  }

  function completeChallenge() {
    console.log('completeChallenge');
    if (!activeChallenge) return;
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
    var randomChallengeIndex = Math.floor(Math.random() * _challenges_json__WEBPACK_IMPORTED_MODULE_2__.length);
    setActiveChallenge(_challenges_json__WEBPACK_IMPORTED_MODULE_2__[randomChallengeIndex]); //Audio

    new Audio('/notification.mp3').play(); //Notificação

    if (Notification.permission === "granted") {
      new Notification('Novo Desafio', {
        'body': "Valendo ".concat(_challenges_json__WEBPACK_IMPORTED_MODULE_2__[randomChallengeIndex].amount, " xp!"),
        'icon': "favicon.png"
      });
    }
  }

  function resetChallenge() {
    setActiveChallenge(null);
  }

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    Notification.requestPermission();
  }, []);
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
    lineNumber: 72,
    columnNumber: 5
  }, this);
}

_s(ChallengesProvider, "hFrC/pvyn3FuNLRfEefM8qYp3ek=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRleHQvQ2hhbGxlbmdlc0NvbnRleHQudHN4Il0sIm5hbWVzIjpbIkNoYWxsZW5nZXNDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsIkNoYWxsZW5nZXNQcm92aWRlciIsImNoaWxkcmVuIiwidXNlU3RhdGUiLCJsZXZlbCIsInNldExldmVsIiwiY3VycmVudEV4cGVyaWVuY2UiLCJzZXRDdXJyZW50RXhwZXJpZW5jZSIsImNoYWxsZW5nZUNvbXBsZXRlZCIsInNldENoYWxsZW5nZUNvbXBsZXRlZCIsImFjdGl2ZUNoYWxsZW5nZSIsInNldEFjdGl2ZUNoYWxsZW5nZSIsImV4cGVyaWVuY2VUb05leHRMZXZlbCIsIk1hdGgiLCJwb3ciLCJsZXZlbFVwIiwiY29tcGxldGVDaGFsbGVuZ2UiLCJjb25zb2xlIiwibG9nIiwiYW1vdW50IiwiZmluYWxFeHBlcmllbmNlIiwic3RhcnROZXdDaGFsbGVuZ3MiLCJyYW5kb21DaGFsbGVuZ2VJbmRleCIsImZsb29yIiwicmFuZG9tIiwiY2hhbGxlbmdlcyIsImxlbmd0aCIsIkF1ZGlvIiwicGxheSIsIk5vdGlmaWNhdGlvbiIsInBlcm1pc3Npb24iLCJyZXNldENoYWxsZW5nZSIsInVzZUVmZmVjdCIsInJlcXVlc3RQZXJtaXNzaW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBU0M7QUFZTSxJQUFNQSxpQkFBaUIsZ0JBQUdDLDJEQUFhLENBQUMsRUFBRCxDQUF2QztBQUNBLFNBQVNDLGtCQUFULE9BQW9FO0FBQUE7O0FBQUEsTUFBdENDLFFBQXNDLFFBQXRDQSxRQUFzQzs7QUFBQSxrQkFDN0NDLHNEQUFRLENBQVMsQ0FBVCxDQURxQztBQUFBLE1BQ2hFQyxLQURnRTtBQUFBLE1BQ3pEQyxRQUR5RDs7QUFBQSxtQkFFdEJGLHNEQUFRLENBQVMsQ0FBVCxDQUZjO0FBQUEsTUFFaEVHLGlCQUZnRTtBQUFBLE1BRTlDQyxvQkFGOEM7O0FBQUEsbUJBR25CSixzREFBUSxDQUFTLENBQVQsQ0FIVztBQUFBLE1BR2hFSyxrQkFIZ0U7QUFBQSxNQUc1Q0MscUJBSDRDOztBQUFBLG1CQUl6Qk4sc0RBQVEsQ0FBQyxJQUFELENBSmlCO0FBQUEsTUFJaEVPLGVBSmdFO0FBQUEsTUFJL0NDLGtCQUorQzs7QUFNdkUsTUFBTUMscUJBQXFCLEdBQUdDLElBQUksQ0FBQ0MsR0FBTCxDQUFTLENBQUNWLEtBQUssR0FBRyxDQUFULElBQWMsQ0FBdkIsRUFBMEIsQ0FBMUIsQ0FBOUI7O0FBRUEsV0FBU1csT0FBVCxHQUFrQjtBQUNkVixZQUFRLENBQUNELEtBQUssR0FBRyxDQUFULENBQVI7QUFDSDs7QUFDRCxXQUFTWSxpQkFBVCxHQUE2QjtBQUN6QkMsV0FBTyxDQUFDQyxHQUFSLENBQVksbUJBQVo7QUFDQSxRQUFHLENBQUVSLGVBQUwsRUFDSTtBQUhxQixRQUlqQlMsTUFKaUIsR0FJTlQsZUFKTSxDQUlqQlMsTUFKaUI7QUFLekIsUUFBSUMsZUFBZSxHQUFHZCxpQkFBaUIsR0FBR2EsTUFBMUM7O0FBQ0EsUUFBR0MsZUFBZSxJQUFJUixxQkFBdEIsRUFBNEM7QUFDeENHLGFBQU87QUFDUFIsMEJBQW9CLENBQUNhLGVBQWUsR0FBR1IscUJBQW5CLENBQXBCO0FBQ0FELHdCQUFrQixDQUFDLElBQUQsQ0FBbEI7QUFDQUYsMkJBQXFCLENBQUNELGtCQUFrQixHQUFHLENBQXRCLENBQXJCO0FBQ0g7QUFDSjs7QUFFRCxXQUFTYSxpQkFBVCxHQUE0QjtBQUN6QixRQUFNQyxvQkFBb0IsR0FBR1QsSUFBSSxDQUFDVSxLQUFMLENBQVdWLElBQUksQ0FBQ1csTUFBTCxLQUFnQkMsNkNBQVUsQ0FBQ0MsTUFBdEMsQ0FBN0I7QUFDQWYsc0JBQWtCLENBQUNjLDZDQUFVLENBQUNILG9CQUFELENBQVgsQ0FBbEIsQ0FGeUIsQ0FHeEI7O0FBQ0EsUUFBSUssS0FBSixDQUFVLG1CQUFWLEVBQStCQyxJQUEvQixHQUp3QixDQUt6Qjs7QUFDQSxRQUFHQyxZQUFZLENBQUNDLFVBQWIsS0FBNEIsU0FBL0IsRUFBeUM7QUFDckMsVUFBSUQsWUFBSixDQUFpQixjQUFqQixFQUFpQztBQUM3QixrQ0FBb0JKLDZDQUFVLENBQUNILG9CQUFELENBQVYsQ0FBaUNILE1BQXJELFNBRDZCO0FBRTdCO0FBRjZCLE9BQWpDO0FBSUg7QUFDSDs7QUFFRCxXQUFTWSxjQUFULEdBQXlCO0FBQ3JCcEIsc0JBQWtCLENBQUMsSUFBRCxDQUFsQjtBQUNIOztBQUVEcUIseURBQVMsQ0FBQyxZQUFNO0FBQ1pILGdCQUFZLENBQUNJLGlCQUFiO0FBQ0gsR0FGUSxFQUVOLEVBRk0sQ0FBVDtBQUlBLHNCQUNBLHFFQUFDLGlCQUFELENBQW1CLFFBQW5CO0FBQTRCLFNBQUssRUFBRTtBQUFFN0IsV0FBSyxFQUFMQSxLQUFGO0FBQVNFLHVCQUFpQixFQUFqQkEsaUJBQVQ7QUFBNEJFLHdCQUFrQixFQUFsQkEsa0JBQTVCO0FBQWdEYSx1QkFBaUIsRUFBakJBLGlCQUFoRDtBQUFtRVgscUJBQWUsRUFBZkEsZUFBbkU7QUFBb0ZxQixvQkFBYyxFQUFkQSxjQUFwRjtBQUFvR25CLDJCQUFxQixFQUFyQkEscUJBQXBHO0FBQTJISSx1QkFBaUIsRUFBakJBO0FBQTNILEtBQW5DO0FBQUEsY0FDU2Q7QUFEVDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREE7QUFLSDs7R0FwRGVELGtCOztLQUFBQSxrQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5hZjFmZmYwMWEyNmM0YWRkODk2OS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtjcmVhdGVDb250ZXh0LCBSZWFjdE5vZGUsIHVzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGNoYWxsZW5nZXMgZnJvbSAnLi4vLi4vY2hhbGxlbmdlcy5qc29uJztcclxuXHJcbmludGVyZmFjZSBDaGFsbGVuZ2VzUHJvdmlkZXJQcm9wcyB7XHJcbiAgICBjaGlsZHJlbiA6IFJlYWN0Tm9kZTtcclxufVxyXG5pbnRlcmZhY2UgQWN0aXZlQ2hhbGxlbmdlICB7XHJcbiAgICB0eXBlICAgICAgICAgICAgICA6ICdib2R5JyB8ICdleWUnO1xyXG4gICAgZGVzY3JpcHRpb24gICAgICAgOiBzdHJpbmc7XHJcbiAgICBhbW91bnQgICAgICAgICAgICA6IG51bWJlcjsgXHJcbn07XHJcbmludGVyZmFjZSBDaGFsbGVuZ2VzQ29udGV4dERhdGF7XHJcbiAgICBsZXZlbCAgICAgICAgICAgICAgICAgOiBudW1iZXI7IFxyXG4gICAgY3VycmVudEV4cGVyaWVuY2UgICAgIDogbnVtYmVyO1xyXG4gICAgY2hhbGxlbmdlQ29tcGxldGVkICAgIDogbnVtYmVyOyBcclxuICAgIHN0YXJ0TmV3Q2hhbGxlbmdzICAgICA6ICgpID0+IHZvaWQ7XHJcbiAgICBhY3RpdmVDaGFsbGVuZ2UgICAgICAgOiBBY3RpdmVDaGFsbGVuZ2U7XHJcbiAgICByZXNldENoYWxsZW5nZSAgICAgICAgOiAoKSA9PiB2b2lkO1xyXG4gICAgY29tcGxldGVDaGFsbGVuZ2UgICAgIDogKCkgPT4gdm9pZDtcclxuICAgIGV4cGVyaWVuY2VUb05leHRMZXZlbCA6IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IENoYWxsZW5nZXNDb250ZXh0ID0gY3JlYXRlQ29udGV4dCh7fSBhcyBDaGFsbGVuZ2VzQ29udGV4dERhdGEpO1xyXG5leHBvcnQgZnVuY3Rpb24gQ2hhbGxlbmdlc1Byb3ZpZGVyKHsgY2hpbGRyZW4gfSA6IENoYWxsZW5nZXNQcm92aWRlclByb3BzKSB7XHJcbiAgICBjb25zdCBbbGV2ZWwsIHNldExldmVsXSA9IHVzZVN0YXRlPG51bWJlcj4oMSk7XHJcbiAgICBjb25zdCBbY3VycmVudEV4cGVyaWVuY2Usc2V0Q3VycmVudEV4cGVyaWVuY2VdID0gdXNlU3RhdGU8bnVtYmVyPigwKTtcclxuICAgIGNvbnN0IFtjaGFsbGVuZ2VDb21wbGV0ZWQsIHNldENoYWxsZW5nZUNvbXBsZXRlZF0gPSB1c2VTdGF0ZTxudW1iZXI+KDApO1xyXG4gICAgY29uc3QgW2FjdGl2ZUNoYWxsZW5nZSwgc2V0QWN0aXZlQ2hhbGxlbmdlXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICAgIGNvbnN0IGV4cGVyaWVuY2VUb05leHRMZXZlbCA9IE1hdGgucG93KChsZXZlbCArIDEpICogNCwgMik7IFxyXG5cclxuICAgIGZ1bmN0aW9uIGxldmVsVXAoKXtcclxuICAgICAgICBzZXRMZXZlbChsZXZlbCArIDEpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gY29tcGxldGVDaGFsbGVuZ2UoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2NvbXBsZXRlQ2hhbGxlbmdlJyk7XHJcbiAgICAgICAgaWYoISBhY3RpdmVDaGFsbGVuZ2UpXHJcbiAgICAgICAgICAgIHJldHVybiA7XHJcbiAgICAgICAgY29uc3QgeyBhbW91bnQgfSA9IGFjdGl2ZUNoYWxsZW5nZTtcclxuICAgICAgICBsZXQgZmluYWxFeHBlcmllbmNlID0gY3VycmVudEV4cGVyaWVuY2UgKyBhbW91bnQ7XHJcbiAgICAgICAgaWYoZmluYWxFeHBlcmllbmNlID49IGV4cGVyaWVuY2VUb05leHRMZXZlbCl7XHJcbiAgICAgICAgICAgIGxldmVsVXAoKTtcclxuICAgICAgICAgICAgc2V0Q3VycmVudEV4cGVyaWVuY2UoZmluYWxFeHBlcmllbmNlIC0gZXhwZXJpZW5jZVRvTmV4dExldmVsKTtcclxuICAgICAgICAgICAgc2V0QWN0aXZlQ2hhbGxlbmdlKG51bGwpO1xyXG4gICAgICAgICAgICBzZXRDaGFsbGVuZ2VDb21wbGV0ZWQoY2hhbGxlbmdlQ29tcGxldGVkICsgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHN0YXJ0TmV3Q2hhbGxlbmdzKCl7XHJcbiAgICAgICBjb25zdCByYW5kb21DaGFsbGVuZ2VJbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGNoYWxsZW5nZXMubGVuZ3RoKTtcclxuICAgICAgIHNldEFjdGl2ZUNoYWxsZW5nZShjaGFsbGVuZ2VzW3JhbmRvbUNoYWxsZW5nZUluZGV4XSk7XHJcbiAgICAgICAgLy9BdWRpb1xyXG4gICAgICAgIG5ldyBBdWRpbygnL25vdGlmaWNhdGlvbi5tcDMnKS5wbGF5KCk7XHJcbiAgICAgICAvL05vdGlmaWNhw6fDo29cclxuICAgICAgIGlmKE5vdGlmaWNhdGlvbi5wZXJtaXNzaW9uID09PSBcImdyYW50ZWRcIil7XHJcbiAgICAgICAgICAgbmV3IE5vdGlmaWNhdGlvbignTm92byBEZXNhZmlvJywge1xyXG4gICAgICAgICAgICAgICAnYm9keScgOiBgVmFsZW5kbyAke2NoYWxsZW5nZXNbcmFuZG9tQ2hhbGxlbmdlSW5kZXhdLmFtb3VudH0geHAhYCxcclxuICAgICAgICAgICAgICAgJ2ljb24nIDogYGZhdmljb24ucG5nYFxyXG4gICAgICAgICAgIH0pXHJcbiAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcmVzZXRDaGFsbGVuZ2UoKXtcclxuICAgICAgICBzZXRBY3RpdmVDaGFsbGVuZ2UobnVsbCk7XHJcbiAgICB9XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBOb3RpZmljYXRpb24ucmVxdWVzdFBlcm1pc3Npb24oKTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgPENoYWxsZW5nZXNDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IGxldmVsLCBjdXJyZW50RXhwZXJpZW5jZSwgY2hhbGxlbmdlQ29tcGxldGVkLCBzdGFydE5ld0NoYWxsZW5ncywgYWN0aXZlQ2hhbGxlbmdlLCByZXNldENoYWxsZW5nZSwgZXhwZXJpZW5jZVRvTmV4dExldmVsLCBjb21wbGV0ZUNoYWxsZW5nZX19PlxyXG4gICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgPC9DaGFsbGVuZ2VzQ29udGV4dC5Qcm92aWRlcj5cclxuICAgICk7XHJcbn0gIl0sInNvdXJjZVJvb3QiOiIifQ==