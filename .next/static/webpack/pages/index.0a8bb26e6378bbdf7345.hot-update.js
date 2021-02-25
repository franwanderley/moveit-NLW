webpackHotUpdate_N_E("pages/index",{

/***/ "./src/context/CountdownContext.tsx":
/*!******************************************!*\
  !*** ./src/context/CountdownContext.tsx ***!
  \******************************************/
/*! exports provided: CountdownContext, CountdownProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountdownContext", function() { return CountdownContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountdownProvider", function() { return CountdownProvider; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_Wanderley_Desktop_moveit_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ChallengesContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ChallengesContext */ "./src/context/ChallengesContext.tsx");



var _jsxFileName = "C:\\Users\\Wanderley\\Desktop\\moveit-next\\src\\context\\CountdownContext.tsx",
    _s = $RefreshSig$();



var CountdownContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_2__["createContext"])({});
function CountdownProvider(_ref) {
  _s();

  var children = _ref.children;

  var resetCountdown = function resetCountdown() {
    setIsActive(false);
    clearTimeout(countdownTimeout);
    setHasFinished(false);
  };

  var startCountDown = function startCountDown() {
    setIsActive(true);
  };

  var countdownTimeout;

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_ChallengesContext__WEBPACK_IMPORTED_MODULE_3__["ChallengesContext"]),
      startNewChallengs = _useContext.startNewChallengs;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0.1 * 60),
      time = _useState[0],
      setTime = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      isActive = _useState2[0],
      setIsActive = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      hasFinished = _useState3[0],
      setHasFinished = _useState3[1];

  var minute = Math.floor(time / 60); //Arredonda para baixo

  var second = time % 60; //O resto que será os segundos

  var _String$padStart$spli = String(minute).padStart(2, '0').split(''),
      _String$padStart$spli2 = Object(C_Users_Wanderley_Desktop_moveit_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_String$padStart$spli, 2),
      minuteLeft = _String$padStart$spli2[0],
      minuteRight = _String$padStart$spli2[1];

  var _String$padStart$spli3 = String(second).padStart(2, '0').split(''),
      _String$padStart$spli4 = Object(C_Users_Wanderley_Desktop_moveit_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_String$padStart$spli3, 2),
      secondLeft = _String$padStart$spli4[0],
      secondRight = _String$padStart$spli4[1]; //Para parar e continuar o cronometro


  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    if (isActive && time > 0) {
      countdownTimeout = setTimeout(function () {
        setTime(time - 1);
      }, 1000);
    } else if (isActive && time === 0) {
      setTime(0.1 * 60);
      setIsActive(false);
      setHasFinished(true);
      startNewChallengs();
    } else setTime(0.1 * 60);
  }, [isActive, time]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(CountdownContext.Provider, {
    value: {
      minute: minute,
      second: second,
      hasFinished: hasFinished,
      isActive: isActive,
      resetCountdown: resetCountdown,
      startCountDown: startCountDown
    },
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 49,
    columnNumber: 10
  }, this);
}

_s(CountdownProvider, "mB3YuCsizKBsy/2O2/Pgudh+1lA=");

_c = CountdownProvider;

var _c;

$RefreshReg$(_c, "CountdownProvider");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRleHQvQ291bnRkb3duQ29udGV4dC50c3giXSwibmFtZXMiOlsiQ291bnRkb3duQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJDb3VudGRvd25Qcm92aWRlciIsImNoaWxkcmVuIiwicmVzZXRDb3VudGRvd24iLCJzZXRJc0FjdGl2ZSIsImNsZWFyVGltZW91dCIsImNvdW50ZG93blRpbWVvdXQiLCJzZXRIYXNGaW5pc2hlZCIsInN0YXJ0Q291bnREb3duIiwidXNlQ29udGV4dCIsIkNoYWxsZW5nZXNDb250ZXh0Iiwic3RhcnROZXdDaGFsbGVuZ3MiLCJ1c2VTdGF0ZSIsInRpbWUiLCJzZXRUaW1lIiwiaXNBY3RpdmUiLCJoYXNGaW5pc2hlZCIsIm1pbnV0ZSIsIk1hdGgiLCJmbG9vciIsInNlY29uZCIsIlN0cmluZyIsInBhZFN0YXJ0Iiwic3BsaXQiLCJtaW51dGVMZWZ0IiwibWludXRlUmlnaHQiLCJzZWNvbmRMZWZ0Iiwic2Vjb25kUmlnaHQiLCJ1c2VFZmZlY3QiLCJzZXRUaW1lb3V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQVdRLElBQU1BLGdCQUFnQixnQkFBR0MsMkRBQWEsQ0FBQyxFQUFELENBQXRDO0FBRUQsU0FBU0MsaUJBQVQsT0FBaUU7QUFBQTs7QUFBQSxNQUFwQ0MsUUFBb0MsUUFBcENBLFFBQW9DOztBQUVwRSxNQUFNQyxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLEdBQU07QUFBRUMsZUFBVyxDQUFDLEtBQUQsQ0FBWDtBQUFvQkMsZ0JBQVksQ0FBQ0MsZ0JBQUQsQ0FBWjtBQUFnQ0Msa0JBQWMsQ0FBQyxLQUFELENBQWQ7QUFBdUIsR0FBMUc7O0FBQ0EsTUFBTUMsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixHQUFNO0FBQUVKLGVBQVcsQ0FBQyxJQUFELENBQVg7QUFBbUIsR0FBbEQ7O0FBRUEsTUFBSUUsZ0JBQUo7O0FBTG9FLG9CQU14Q0csd0RBQVUsQ0FBQ0Msb0VBQUQsQ0FOOEI7QUFBQSxNQU03REMsaUJBTjZELGVBTTdEQSxpQkFONkQ7O0FBQUEsa0JBUTVDQyxzREFBUSxDQUFTLE1BQU0sRUFBZixDQVJvQztBQUFBLE1BUTdEQyxJQVI2RDtBQUFBLE1BUXZEQyxPQVJ1RDs7QUFBQSxtQkFTcENGLHNEQUFRLENBQVUsS0FBVixDQVQ0QjtBQUFBLE1BUzdERyxRQVQ2RDtBQUFBLE1BU25EWCxXQVRtRDs7QUFBQSxtQkFVOUJRLHNEQUFRLENBQVUsS0FBVixDQVZzQjtBQUFBLE1BVTdESSxXQVY2RDtBQUFBLE1BVWhEVCxjQVZnRDs7QUFZcEUsTUFBTVUsTUFBTSxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBV04sSUFBSSxHQUFDLEVBQWhCLENBQWYsQ0Fab0UsQ0FZaEM7O0FBQ3BDLE1BQU1PLE1BQU0sR0FBR1AsSUFBSSxHQUFHLEVBQXRCLENBYm9FLENBYTFDOztBQWIwQyw4QkFjbENRLE1BQU0sQ0FBQ0osTUFBRCxDQUFOLENBQWVLLFFBQWYsQ0FBd0IsQ0FBeEIsRUFBMkIsR0FBM0IsRUFBZ0NDLEtBQWhDLENBQXNDLEVBQXRDLENBZGtDO0FBQUE7QUFBQSxNQWM3REMsVUFkNkQ7QUFBQSxNQWNqREMsV0FkaUQ7O0FBQUEsK0JBZWxDSixNQUFNLENBQUNELE1BQUQsQ0FBTixDQUFlRSxRQUFmLENBQXdCLENBQXhCLEVBQTJCLEdBQTNCLEVBQWdDQyxLQUFoQyxDQUFzQyxFQUF0QyxDQWZrQztBQUFBO0FBQUEsTUFlN0RHLFVBZjZEO0FBQUEsTUFlakRDLFdBZmlELDhCQWlCcEU7OztBQUNBQyx5REFBUyxDQUFDLFlBQU07QUFDWixRQUFJYixRQUFRLElBQUlGLElBQUksR0FBRyxDQUF2QixFQUEwQjtBQUN0QlAsc0JBQWdCLEdBQUd1QixVQUFVLENBQUMsWUFBTTtBQUNoQ2YsZUFBTyxDQUFDRCxJQUFJLEdBQUcsQ0FBUixDQUFQO0FBQ0gsT0FGNEIsRUFFM0IsSUFGMkIsQ0FBN0I7QUFHSCxLQUpELE1BSU0sSUFBR0UsUUFBUSxJQUFJRixJQUFJLEtBQUssQ0FBeEIsRUFBMEI7QUFDNUJDLGFBQU8sQ0FBQyxNQUFNLEVBQVAsQ0FBUDtBQUNBVixpQkFBVyxDQUFDLEtBQUQsQ0FBWDtBQUNBRyxvQkFBYyxDQUFDLElBQUQsQ0FBZDtBQUNBSSx1QkFBaUI7QUFDcEIsS0FMSyxNQU1GRyxPQUFPLENBQUMsTUFBTSxFQUFQLENBQVA7QUFFUCxHQWJRLEVBYU4sQ0FBQ0MsUUFBRCxFQUFXRixJQUFYLENBYk0sQ0FBVDtBQWVBLHNCQUNLLHFFQUFDLGdCQUFELENBQWtCLFFBQWxCO0FBQTJCLFNBQUssRUFBSTtBQUFDSSxZQUFNLEVBQU5BLE1BQUQ7QUFBU0csWUFBTSxFQUFOQSxNQUFUO0FBQWlCSixpQkFBVyxFQUFYQSxXQUFqQjtBQUE4QkQsY0FBUSxFQUFSQSxRQUE5QjtBQUF3Q1osb0JBQWMsRUFBZEEsY0FBeEM7QUFBd0RLLG9CQUFjLEVBQWRBO0FBQXhELEtBQXBDO0FBQUEsY0FDS047QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREw7QUFLSDs7R0F0Q2VELGlCOztLQUFBQSxpQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4wYThiYjI2ZTYzNzhiYmRmNzM0NS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgUmVhY3ROb2RlLCB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQ2hhbGxlbmdlc0NvbnRleHQgfSBmcm9tIFwiLi9DaGFsbGVuZ2VzQ29udGV4dFwiO1xyXG5cclxuaW50ZXJmYWNlIENvdW50ZG93bkNvbnRleHREYXRhIHtcclxuICAgIG1pbnV0ZSA6IG51bWJlcjtcclxuICAgIHNlY29uZCA6IG51bWJlcjtcclxuICAgIGhhc0ZpbmlzaGVkIDogYm9vbGVhbjsgXHJcbiAgICBpc0FjdGl2ZSA6IGJvb2xlYW47XHJcbiAgICByZXNldENvdW50ZG93biA6ICgpID0+IHZvaWQ7IFxyXG4gICAgc3RhcnRDb3VudERvd24gOiAoKSA9PiB2b2lkO1xyXG59XHJcblxyXG4gZXhwb3J0IGNvbnN0IENvdW50ZG93bkNvbnRleHQgPSBjcmVhdGVDb250ZXh0KHt9IGFzIENvdW50ZG93bkNvbnRleHREYXRhKTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBDb3VudGRvd25Qcm92aWRlciAoe2NoaWxkcmVufSA6IHtjaGlsZHJlbiA6IFJlYWN0Tm9kZX0pIHtcclxuXHJcbiAgICBjb25zdCByZXNldENvdW50ZG93biA9ICgpID0+IHsgc2V0SXNBY3RpdmUoZmFsc2UpOyBjbGVhclRpbWVvdXQoY291bnRkb3duVGltZW91dCk7IHNldEhhc0ZpbmlzaGVkKGZhbHNlKSB9O1xyXG4gICAgY29uc3Qgc3RhcnRDb3VudERvd24gPSAoKSA9PiB7IHNldElzQWN0aXZlKHRydWUpIH07XHJcblxyXG4gICAgbGV0IGNvdW50ZG93blRpbWVvdXQgOiBOb2RlSlMuVGltZW91dDtcclxuICAgIGNvbnN0IHtzdGFydE5ld0NoYWxsZW5nc30gPSB1c2VDb250ZXh0KENoYWxsZW5nZXNDb250ZXh0KTtcclxuICAgIFxyXG4gICAgY29uc3QgW3RpbWUsIHNldFRpbWVdID0gdXNlU3RhdGU8bnVtYmVyPigwLjEgKiA2MCk7XHJcbiAgICBjb25zdCBbaXNBY3RpdmUsIHNldElzQWN0aXZlXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcclxuICAgIGNvbnN0IFtoYXNGaW5pc2hlZCwgc2V0SGFzRmluaXNoZWRdID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xyXG5cclxuICAgIGNvbnN0IG1pbnV0ZSA9IE1hdGguZmxvb3IodGltZS82MCk7IC8vQXJyZWRvbmRhIHBhcmEgYmFpeG9cclxuICAgIGNvbnN0IHNlY29uZCA9IHRpbWUgJSA2MDsgLy9PIHJlc3RvIHF1ZSBzZXLDoSBvcyBzZWd1bmRvc1xyXG4gICAgY29uc3QgW21pbnV0ZUxlZnQsIG1pbnV0ZVJpZ2h0XSA9IFN0cmluZyhtaW51dGUpLnBhZFN0YXJ0KDIsICcwJykuc3BsaXQoJycpO1xyXG4gICAgY29uc3QgW3NlY29uZExlZnQsIHNlY29uZFJpZ2h0XSA9IFN0cmluZyhzZWNvbmQpLnBhZFN0YXJ0KDIsICcwJykuc3BsaXQoJycpO1xyXG5cclxuICAgIC8vUGFyYSBwYXJhciBlIGNvbnRpbnVhciBvIGNyb25vbWV0cm9cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYoIGlzQWN0aXZlICYmIHRpbWUgPiAwICl7XHJcbiAgICAgICAgICAgIGNvdW50ZG93blRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHNldFRpbWUodGltZSAtIDEpO1xyXG4gICAgICAgICAgICB9LDEwMDApO1xyXG4gICAgICAgIH1lbHNlIGlmKGlzQWN0aXZlICYmIHRpbWUgPT09IDApe1xyXG4gICAgICAgICAgICBzZXRUaW1lKDAuMSAqIDYwKTtcclxuICAgICAgICAgICAgc2V0SXNBY3RpdmUoZmFsc2UpO1xyXG4gICAgICAgICAgICBzZXRIYXNGaW5pc2hlZCh0cnVlKTtcclxuICAgICAgICAgICAgc3RhcnROZXdDaGFsbGVuZ3MoKTtcclxuICAgICAgICB9ZWxzZVxyXG4gICAgICAgICAgICBzZXRUaW1lKDAuMSAqIDYwKTtcclxuICAgIFxyXG4gICAgfSwgW2lzQWN0aXZlLCB0aW1lXSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICAgPENvdW50ZG93bkNvbnRleHQuUHJvdmlkZXIgdmFsdWUgPSB7e21pbnV0ZSwgc2Vjb25kLCBoYXNGaW5pc2hlZCwgaXNBY3RpdmUsIHJlc2V0Q291bnRkb3duLCBzdGFydENvdW50RG93bn19PlxyXG4gICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgICA8L0NvdW50ZG93bkNvbnRleHQuUHJvdmlkZXI+XHJcbiAgICApO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==