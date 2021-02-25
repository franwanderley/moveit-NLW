webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/Countdown.tsx":
/*!**************************************!*\
  !*** ./src/components/Countdown.tsx ***!
  \**************************************/
/*! exports provided: Countdown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Countdown", function() { return Countdown; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_Wanderley_Desktop_moveit_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _context_CountdownContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context/CountdownContext */ "./src/context/CountdownContext.tsx");
/* harmony import */ var _styles_count_down_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/count-down.module.css */ "./src/styles/count-down.module.css");
/* harmony import */ var _styles_count_down_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_count_down_module_css__WEBPACK_IMPORTED_MODULE_4__);




var _jsxFileName = "C:\\Users\\Wanderley\\Desktop\\moveit-next\\src\\components\\Countdown.tsx",
    _s = $RefreshSig$();




function Countdown() {
  _s();

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_context_CountdownContext__WEBPACK_IMPORTED_MODULE_3__["CountdownContext"]),
      minute = _useContext.minute,
      second = _useContext.second,
      isActive = _useContext.isActive,
      hasFinished = _useContext.hasFinished,
      resetCountdown = _useContext.resetCountdown,
      startCountDown = _useContext.startCountDown;

  var _String$padStart$spli = String(minute).padStart(2, '0').split(''),
      _String$padStart$spli2 = Object(C_Users_Wanderley_Desktop_moveit_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_String$padStart$spli, 2),
      minuteLeft = _String$padStart$spli2[0],
      minuteRight = _String$padStart$spli2[1];

  var _String$padStart$spli3 = String(second).padStart(2, '0').split(''),
      _String$padStart$spli4 = Object(C_Users_Wanderley_Desktop_moveit_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_String$padStart$spli3, 2),
      secondLeft = _String$padStart$spli4[0],
      secondRight = _String$padStart$spli4[1];

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_count_down_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.countDownContainer,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          children: minuteLeft
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          children: minuteRight
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 13
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        children: ":"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 13
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          children: secondLeft
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 16
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          children: secondRight
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 16
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 10
    }, this), hasFinished ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
      disabled: true,
      className: _styles_count_down_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.CountDownButton,
      children: " Ciclo Encerrado "
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: isActive ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        type: "button",
        onClick: function onClick() {
          setIsActive(false);
          clearTimeout(countdownTimeout);
        },
        className: _styles_count_down_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.CountDownButtonActive,
        children: "Abandonar ciclo"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 21
      }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        type: "button",
        onClick: function onClick() {
          setIsActive(true);
        },
        className: _styles_count_down_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.CountDownButton,
        children: "Iniciar um Ciclo"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 21
      }, this)
    }, void 0, false)]
  }, void 0, true);
}

_s(Countdown, "zZMsLcf85vD9llnzOC8k/GTCyAM=");

_c = Countdown;
;

var _c;

$RefreshReg$(_c, "Countdown");

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

/***/ }),

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ291bnRkb3duLnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRleHQvQ291bnRkb3duQ29udGV4dC50c3giXSwibmFtZXMiOlsiQ291bnRkb3duIiwidXNlQ29udGV4dCIsIkNvdW50ZG93bkNvbnRleHQiLCJtaW51dGUiLCJzZWNvbmQiLCJpc0FjdGl2ZSIsImhhc0ZpbmlzaGVkIiwicmVzZXRDb3VudGRvd24iLCJzdGFydENvdW50RG93biIsIlN0cmluZyIsInBhZFN0YXJ0Iiwic3BsaXQiLCJtaW51dGVMZWZ0IiwibWludXRlUmlnaHQiLCJzZWNvbmRMZWZ0Iiwic2Vjb25kUmlnaHQiLCJzdHlsZXMiLCJjb3VudERvd25Db250YWluZXIiLCJDb3VudERvd25CdXR0b24iLCJzZXRJc0FjdGl2ZSIsImNsZWFyVGltZW91dCIsImNvdW50ZG93blRpbWVvdXQiLCJDb3VudERvd25CdXR0b25BY3RpdmUiLCJjcmVhdGVDb250ZXh0IiwiQ291bnRkb3duUHJvdmlkZXIiLCJjaGlsZHJlbiIsIkNoYWxsZW5nZXNDb250ZXh0Iiwic3RhcnROZXdDaGFsbGVuZ3MiLCJ1c2VTdGF0ZSIsInRpbWUiLCJzZXRUaW1lIiwic2V0SGFzRmluaXNoZWQiLCJNYXRoIiwiZmxvb3IiLCJ1c2VFZmZlY3QiLCJzZXRUaW1lb3V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFTyxTQUFTQSxTQUFULEdBQW9CO0FBQUE7O0FBQUEsb0JBRTBEQyx3REFBVSxDQUFDQywwRUFBRCxDQUZwRTtBQUFBLE1BRWZDLE1BRmUsZUFFZkEsTUFGZTtBQUFBLE1BRVJDLE1BRlEsZUFFUkEsTUFGUTtBQUFBLE1BRUFDLFFBRkEsZUFFQUEsUUFGQTtBQUFBLE1BRVVDLFdBRlYsZUFFVUEsV0FGVjtBQUFBLE1BRXVCQyxjQUZ2QixlQUV1QkEsY0FGdkI7QUFBQSxNQUV1Q0Ms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TEssTUFNRkcsT0FBTyxDQUFDLE1BQU0sRUFBUCxDQUFQO0FBRVAsR0FiUSxFQWFOLENBQUN6QixRQUFELEVBQVd3QixJQUFYLENBYk0sQ0FBVDtBQWVBLHNCQUNLLHFFQUFDLGdCQUFELENBQWtCLFFBQWxCO0FBQTJCLFNBQUssRUFBSTtBQUFDMUIsWUFBTSxFQUFOQSxNQUFEO0FBQVNDLFlBQU0sRUFBTkEsTUFBVDtBQUFpQkUsaUJBQVcsRUFBWEEsV0FBakI7QUFBOEJELGNBQVEsRUFBUkEsUUFBOUI7QUFBd0NFLG9CQUFjLEVBQWRBLGNBQXhDO0FBQXdEQyxvQkFBYyxFQUFkQTtBQUF4RCxLQUFwQztBQUFBLGNBQ0tpQjtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFETDtBQUtIOztHQXRDZUQsaUI7O0tBQUFBLGlCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjM4YjY0YzU5NmY4NGRlNGRmZTNlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge0NvdW50ZG93bkNvbnRleHR9IGZyb20gJy4uL2NvbnRleHQvQ291bnRkb3duQ29udGV4dCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL2NvdW50LWRvd24ubW9kdWxlLmNzcyc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gQ291bnRkb3duKCl7XHJcblxyXG4gICAgY29uc3QgeyBtaW51dGUsc2Vjb25kLCBpc0FjdGl2ZSwgaGFzRmluaXNoZWQsIHJlc2V0Q291bnRkb3duLCBzdGFydENvdW50RG93biB9ID0gdXNlQ29udGV4dChDb3VudGRvd25Db250ZXh0KTtcclxuICAgIGNvbnN0IFttaW51dGVMZWZ0LCBtaW51dGVSaWdodF0gPSBTdHJpbmcobWludXRlKS5wYWRTdGFydCgyLCAnMCcpLnNwbGl0KCcnKTtcclxuICAgIGNvbnN0IFtzZWNvbmRMZWZ0LCBzZWNvbmRSaWdodF0gPSBTdHJpbmcoc2Vjb25kKS5wYWRTdGFydCgyLCAnMCcpLnNwbGl0KCcnKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgPD5cclxuICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb3VudERvd25Db250YWluZXJ9PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+e21pbnV0ZUxlZnR9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+e21pbnV0ZVJpZ2h0fTwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxzcGFuPjo8L3NwYW4+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgIDxzcGFuPntzZWNvbmRMZWZ0fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgPHNwYW4+e3NlY29uZFJpZ2h0fTwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIHsgaGFzRmluaXNoZWQgPyAoXHJcbiAgICAgICAgICAgIDxidXR0b24gZGlzYWJsZWQgIGNsYXNzTmFtZT17c3R5bGVzLkNvdW50RG93bkJ1dHRvbn0+IENpY2xvIEVuY2VycmFkbyA8L2J1dHRvbj5cclxuICAgICAgICApIDogKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgeyBpc0FjdGl2ZSA/IChcclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXsgKCkgPT4geyBzZXRJc0FjdGl2ZShmYWxzZSk7IGNsZWFyVGltZW91dChjb3VudGRvd25UaW1lb3V0KSB9IH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuQ291bnREb3duQnV0dG9uQWN0aXZlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQWJhbmRvbmFyIGNpY2xvXHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9eyAoKSA9PiB7IHNldElzQWN0aXZlKHRydWUpIH0gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5Db3VudERvd25CdXR0b259PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBJbmljaWFyIHVtIENpY2xvXHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8Lz4gXHJcbiAgICAgICAgKX1cclxuXHJcbiAgICAgICA8Lz5cclxuICAgICk7XHJcbn07IiwiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgUmVhY3ROb2RlLCB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQ2hhbGxlbmdlc0NvbnRleHQgfSBmcm9tIFwiLi9DaGFsbGVuZ2VzQ29udGV4dFwiO1xyXG5cclxuaW50ZXJmYWNlIENvdW50ZG93bkNvbnRleHREYXRhIHtcclxuICAgIG1pbnV0ZSA6IG51bWJlcjtcclxuICAgIHNlY29uZCA6IG51bWJlcjtcclxuICAgIGhhc0ZpbmlzaGVkIDogYm9vbGVhbjsgXHJcbiAgICBpc0FjdGl2ZSA6IGJvb2xlYW47XHJcbiAgICByZXNldENvdW50ZG93biA6ICgpID0+IHt9IFxyXG4gICAgc3RhcnRDb3VudERvd24gOiAoKSA9PiB7fVxyXG59XHJcblxyXG4gZXhwb3J0IGNvbnN0IENvdW50ZG93bkNvbnRleHQgPSBjcmVhdGVDb250ZXh0KHt9IGFzIENvdW50ZG93bkNvbnRleHREYXRhKTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBDb3VudGRvd25Qcm92aWRlciAoe2NoaWxkcmVufSA6IHtjaGlsZHJlbiA6IFJlYWN0Tm9kZX0pIHtcclxuXHJcbiAgICBjb25zdCByZXNldENvdW50ZG93biA9ICgpID0+IHsgc2V0SXNBY3RpdmUoZmFsc2UpOyBjbGVhclRpbWVvdXQoY291bnRkb3duVGltZW91dCkgfTtcclxuICAgIGNvbnN0IHN0YXJ0Q291bnREb3duID0gKCkgPT4geyBzZXRJc0FjdGl2ZSh0cnVlKSB9O1xyXG5cclxuICAgIGxldCBjb3VudGRvd25UaW1lb3V0IDogTm9kZUpTLlRpbWVvdXQ7XHJcbiAgICBjb25zdCB7c3RhcnROZXdDaGFsbGVuZ3N9ID0gdXNlQ29udGV4dChDaGFsbGVuZ2VzQ29udGV4dCk7XHJcbiAgICBcclxuICAgIGNvbnN0IFt0aW1lLCBzZXRUaW1lXSA9IHVzZVN0YXRlPG51bWJlcj4oMC4xICogNjApO1xyXG4gICAgY29uc3QgW2lzQWN0aXZlLCBzZXRJc0FjdGl2ZV0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XHJcbiAgICBjb25zdCBbaGFzRmluaXNoZWQsIHNldEhhc0ZpbmlzaGVkXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcclxuXHJcbiAgICBjb25zdCBtaW51dGUgPSBNYXRoLmZsb29yKHRpbWUvNjApOyAvL0FycmVkb25kYSBwYXJhIGJhaXhvXHJcbiAgICBjb25zdCBzZWNvbmQgPSB0aW1lICUgNjA7IC8vTyByZXN0byBxdWUgc2Vyw6Egb3Mgc2VndW5kb3NcclxuICAgIGNvbnN0IFttaW51dGVMZWZ0LCBtaW51dGVSaWdodF0gPSBTdHJpbmcobWludXRlKS5wYWRTdGFydCgyLCAnMCcpLnNwbGl0KCcnKTtcclxuICAgIGNvbnN0IFtzZWNvbmRMZWZ0LCBzZWNvbmRSaWdodF0gPSBTdHJpbmcoc2Vjb25kKS5wYWRTdGFydCgyLCAnMCcpLnNwbGl0KCcnKTtcclxuXHJcbiAgICAvL1BhcmEgcGFyYXIgZSBjb250aW51YXIgbyBjcm9ub21ldHJvXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmKCBpc0FjdGl2ZSAmJiB0aW1lID4gMCApe1xyXG4gICAgICAgICAgICBjb3VudGRvd25UaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lKHRpbWUgLSAxKTtcclxuICAgICAgICAgICAgfSwxMDAwKTtcclxuICAgICAgICB9ZWxzZSBpZihpc0FjdGl2ZSAmJiB0aW1lID09PSAwKXtcclxuICAgICAgICAgICAgc2V0VGltZSgwLjEgKiA2MCk7XHJcbiAgICAgICAgICAgIHNldElzQWN0aXZlKGZhbHNlKTtcclxuICAgICAgICAgICAgc2V0SGFzRmluaXNoZWQodHJ1ZSk7XHJcbiAgICAgICAgICAgIHN0YXJ0TmV3Q2hhbGxlbmdzKCk7XHJcbiAgICAgICAgfWVsc2VcclxuICAgICAgICAgICAgc2V0VGltZSgwLjEgKiA2MCk7XHJcbiAgICBcclxuICAgIH0sIFtpc0FjdGl2ZSwgdGltZV0pO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgIDxDb3VudGRvd25Db250ZXh0LlByb3ZpZGVyIHZhbHVlID0ge3ttaW51dGUsIHNlY29uZCwgaGFzRmluaXNoZWQsIGlzQWN0aXZlLCByZXNldENvdW50ZG93biwgc3RhcnRDb3VudERvd259fT5cclxuICAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICAgPC9Db3VudGRvd25Db250ZXh0LlByb3ZpZGVyPlxyXG4gICAgKTtcclxufSJdLCJzb3VyY2VSb290IjoiIn0=