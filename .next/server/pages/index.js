module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./challenges.json":
/*!*************************!*\
  !*** ./challenges.json ***!
  \*************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"type\":\"body\",\"description\":\"Estique um de seus braços com a palma da mão virada para frente e puxe os dedos para cima por 10 segundos por mão.\",\"amount\":80},{\"type\":\"body\",\"description\":\"Estique seu braço contra o peito e puxe-o utilizando o outro braço por 10 segundos por braço.\",\"amount\":60},{\"type\":\"body\",\"description\":\"Puxe seu pescoço com a ajuda da mão para a direita e para a esquerda, permanecendo na posição por alguns segundos.\",\"amount\":70},{\"type\":\"body\",\"description\":\"Com as duas mãos na parte de trás da cabeça, leve-a para baixo, alongando a parte de trás da região.\",\"amount\":60},{\"type\":\"body\",\"description\":\"Cruze as pernas e desça com as mãos esticadas em direção ao chão. Repita o movimento com a outra perna na frente.\",\"amount\":100},{\"type\":\"body\",\"description\":\"Sentado, abra as pernas e tente encostar as palmas das mãos no chão, repita 3 vezes por 5 segundos.\",\"amount\":80},{\"type\":\"body\",\"description\":\"Puxe o joelho de encontro ao peito e segure, troque de perna após 10 segundos.\",\"amount\":50},{\"type\":\"body\",\"description\":\"Sentado, cruze uma perna e incline seu tronco à frente, troque de perna após 10 segundos.\",\"amount\":80},{\"type\":\"eye\",\"description\":\"Sentado, feche os olhos e cubra-os com as palmas da mão durante 2 minutos, depois abra normalmente.\",\"amount\":90},{\"type\":\"eye\",\"description\":\"Em algum ambiente aberto, olhe o mais longe que puder em quatro direções por 3s, mexa apenas os olhos. Repita 3 vezes.\",\"amount\":140},{\"type\":\"eye\",\"description\":\"Usando os polegares, massage a área abaixo das sobrancelhas em movimentos circulares por 15 segundos.\",\"amount\":70},{\"type\":\"body\",\"description\":\"Em pé, gire a cintura o máximo que puder para a esquerda, segure por cinco segundos. Repita para a direita.\",\"amount\":90}]");

/***/ }),

/***/ "./src/components/ChallengeBox.tsx":
/*!*****************************************!*\
  !*** ./src/components/ChallengeBox.tsx ***!
  \*****************************************/
/*! exports provided: ChallengeBox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChallengeBox", function() { return ChallengeBox; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _context_ChallengesContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/ChallengesContext */ "./src/context/ChallengesContext.tsx");
/* harmony import */ var _context_CountdownContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context/CountdownContext */ "./src/context/CountdownContext.tsx");
/* harmony import */ var _styles_challenge_box_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/challenge-box.module.css */ "./src/styles/challenge-box.module.css");
/* harmony import */ var _styles_challenge_box_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_challenge_box_module_css__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "C:\\Users\\Wanderley\\Desktop\\moveit-next\\src\\components\\ChallengeBox.tsx";




function ChallengeBox() {
  function handleChallengeSucceeded() {
    completeChallenge();
    resetCountdown();
  }

  function handleChallengeFailed() {
    resetChallenge();
    resetCountdown();
  }

  const {
    resetCountdown
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_context_CountdownContext__WEBPACK_IMPORTED_MODULE_3__["CountdownContext"]);
  const {
    activeChallenge,
    resetChallenge,
    completeChallenge
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_context_ChallengesContext__WEBPACK_IMPORTED_MODULE_2__["ChallengesContext"]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _styles_challenge_box_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.challengeBoxContainer,
    children: activeChallenge ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_challenge_box_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.challengeActive,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("header", {
        children: [" Ganhe ", activeChallenge.amount, " xp "]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 21
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("main", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: `icons/${activeChallenge.type}.svg`,
          alt: "Exercite"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
          children: "Novo desafio"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: activeChallenge.description
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 25
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 21
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("footer", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          type: "button",
          onClick: handleChallengeFailed,
          className: _styles_challenge_box_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.challengeFaleidButton,
          children: "Falhei"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          type: "button",
          onClick: handleChallengeSucceeded,
          className: _styles_challenge_box_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.challengeSucceededButton,
          children: "Completei"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 25
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 21
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 17
    }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_challenge_box_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.challengeNotActive,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
        children: "Finalize um ciclo para receber desafios"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 21
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: "icons/level-up.svg",
          alt: "Level Up"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 25
        }, this), "Avance de Level completando desafios."]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 21
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 17
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./src/components/CompletedChallenges.tsx":
/*!************************************************!*\
  !*** ./src/components/CompletedChallenges.tsx ***!
  \************************************************/
/*! exports provided: CompletedChallenges */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompletedChallenges", function() { return CompletedChallenges; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _context_ChallengesContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/ChallengesContext */ "./src/context/ChallengesContext.tsx");
/* harmony import */ var _styles_completed_challenges_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/completed-challenges.module.css */ "./src/styles/completed-challenges.module.css");
/* harmony import */ var _styles_completed_challenges_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_completed_challenges_module_css__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\Wanderley\\Desktop\\moveit-next\\src\\components\\CompletedChallenges.tsx";



function CompletedChallenges() {
  const {
    challengeCompleted
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_context_ChallengesContext__WEBPACK_IMPORTED_MODULE_2__["ChallengesContext"]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _styles_completed_challenges_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.completedChallengesContainer,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      children: "Desafios completos"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      children: challengeCompleted
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./src/components/Countdown.tsx":
/*!**************************************!*\
  !*** ./src/components/Countdown.tsx ***!
  \**************************************/
/*! exports provided: Countdown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Countdown", function() { return Countdown; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _context_CountdownContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/CountdownContext */ "./src/context/CountdownContext.tsx");
/* harmony import */ var _styles_count_down_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/count-down.module.css */ "./src/styles/count-down.module.css");
/* harmony import */ var _styles_count_down_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_count_down_module_css__WEBPACK_IMPORTED_MODULE_3__);


var _jsxFileName = "C:\\Users\\Wanderley\\Desktop\\moveit-next\\src\\components\\Countdown.tsx";



function Countdown() {
  const {
    minute,
    second,
    isActive,
    hasFinished,
    resetCountdown,
    startCountDown
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_context_CountdownContext__WEBPACK_IMPORTED_MODULE_2__["CountdownContext"]);
  const [minuteLeft, minuteRight] = String(minute).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(second).padStart(2, '0').split('');
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_count_down_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.countDownContainer,
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
      className: _styles_count_down_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.CountDownButton,
      children: " Ciclo Encerrado "
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: isActive ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        type: "button",
        onClick: resetCountdown,
        className: _styles_count_down_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.CountDownButtonActive,
        children: "Abandonar ciclo"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 21
      }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        type: "button",
        onClick: startCountDown,
        className: _styles_count_down_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.CountDownButton,
        children: "Iniciar um Ciclo"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 21
      }, this)
    }, void 0, false)]
  }, void 0, true);
}
;

/***/ }),

/***/ "./src/components/ExperienceBar.tsx":
/*!******************************************!*\
  !*** ./src/components/ExperienceBar.tsx ***!
  \******************************************/
/*! exports provided: ExperienceBar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExperienceBar", function() { return ExperienceBar; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _context_ChallengesContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/ChallengesContext */ "./src/context/ChallengesContext.tsx");
/* harmony import */ var _styles_experience_bar_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/experience-bar.module.css */ "./src/styles/experience-bar.module.css");
/* harmony import */ var _styles_experience_bar_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_experience_bar_module_css__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\Wanderley\\Desktop\\moveit-next\\src\\components\\ExperienceBar.tsx";



function ExperienceBar() {
  const {
    currentExperience,
    experienceToNextLevel
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_context_ChallengesContext__WEBPACK_IMPORTED_MODULE_2__["ChallengesContext"]);
  const percentToNextLevel = Math.round(currentExperience * 100 / experienceToNextLevel);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("header", {
    className: _styles_experience_bar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.experienceBar,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      children: "0 xp"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        style: {
          width: `${percentToNextLevel}%`
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        className: _styles_experience_bar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.currentExperience,
        style: {
          left: `${percentToNextLevel}%`
        },
        children: [currentExperience, " xp"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      children: [experienceToNextLevel, " xp"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 9
  }, this);
}
;

/***/ }),

/***/ "./src/components/LevelUpModal.tsx":
/*!*****************************************!*\
  !*** ./src/components/LevelUpModal.tsx ***!
  \*****************************************/
/*! exports provided: LevelUpModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LevelUpModal", function() { return LevelUpModal; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _context_ChallengesContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/ChallengesContext */ "./src/context/ChallengesContext.tsx");
/* harmony import */ var _styles_levelup_modal_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/levelup-modal.module.css */ "./src/styles/levelup-modal.module.css");
/* harmony import */ var _styles_levelup_modal_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_levelup_modal_module_css__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\Wanderley\\Desktop\\moveit-next\\src\\components\\LevelUpModal.tsx";



function LevelUpModal() {
  const {
    level,
    closeModal
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_context_ChallengesContext__WEBPACK_IMPORTED_MODULE_2__["ChallengesContext"]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _styles_levelup_modal_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.overlay,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_levelup_modal_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.container,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("header", {
        children: level
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
        children: "Parab\xE9ns"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: "Voc\xEA alcan\xE7ou um novo level"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        type: "button",
        onClick: closeModal,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: "icons/close.svg",
          alt: "fechar"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./src/components/Profile.tsx":
/*!************************************!*\
  !*** ./src/components/Profile.tsx ***!
  \************************************/
/*! exports provided: Profile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Profile", function() { return Profile; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _context_ChallengesContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/ChallengesContext */ "./src/context/ChallengesContext.tsx");
/* harmony import */ var _styles_profile_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/profile.module.css */ "./src/styles/profile.module.css");
/* harmony import */ var _styles_profile_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_profile_module_css__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\Wanderley\\Desktop\\moveit-next\\src\\components\\Profile.tsx";



function Profile() {
  const {
    level
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_context_ChallengesContext__WEBPACK_IMPORTED_MODULE_2__["ChallengesContext"]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _styles_profile_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.profileCotainer,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
      src: "https://github.com/franwanderley.png",
      alt: "Imagem do perfil"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
        children: "Francisco Wanderley"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: "icons/level.svg",
          alt: "Level"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 21
        }, this), "Level ", level]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 9
  }, this);
}
;

/***/ }),

/***/ "./src/context/ChallengesContext.tsx":
/*!*******************************************!*\
  !*** ./src/context/ChallengesContext.tsx ***!
  \*******************************************/
/*! exports provided: ChallengesContext, ChallengesProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChallengesContext", function() { return ChallengesContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChallengesProvider", function() { return ChallengesProvider; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _challenges_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../challenges.json */ "./challenges.json");
var _challenges_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../challenges.json */ "./challenges.json", 1);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_LevelUpModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/LevelUpModal */ "./src/components/LevelUpModal.tsx");

var _jsxFileName = "C:\\Users\\Wanderley\\Desktop\\moveit-next\\src\\context\\ChallengesContext.tsx";

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





;
const ChallengesContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["createContext"])({});
function ChallengesProvider(_ref) {
  var _rest$level, _rest$currentExperien, _rest$challengeComple;

  let {
    children
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["children"]);

  const {
    0: level,
    1: setLevel
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])((_rest$level = rest.level) !== null && _rest$level !== void 0 ? _rest$level : 1);
  const {
    0: currentExperience,
    1: setCurrentExperience
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])((_rest$currentExperien = rest.currentExperience) !== null && _rest$currentExperien !== void 0 ? _rest$currentExperien : 0);
  const {
    0: challengeCompleted,
    1: setChallengeCompleted
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])((_rest$challengeComple = rest.challengeCompleted) !== null && _rest$challengeComple !== void 0 ? _rest$challengeComple : 0);
  const {
    0: activeChallenge,
    1: setActiveChallenge
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null);
  const {
    0: isLevelUpModalOpen,
    1: setIsLevelUpModalOpen
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const experienceToNextLevel = Math.pow((level + 1) * 4, 2);

  function levelUp() {
    setLevel(level + 1);
    setIsLevelUpModalOpen(true);
  }

  function completeChallenge() {
    if (activeChallenge.amount <= 0) return;
    console.log([activeChallenge, currentExperience]);
    const {
      amount
    } = activeChallenge;
    let finalExperience = currentExperience + amount;

    if (finalExperience >= experienceToNextLevel) {
      levelUp();
      setCurrentExperience(finalExperience - experienceToNextLevel);
    } else setCurrentExperience(finalExperience);

    setActiveChallenge(null);
    setChallengeCompleted(challengeCompleted + 1);
  }

  function startNewChallengs() {
    const randomChallengeIndex = Math.floor(Math.random() * _challenges_json__WEBPACK_IMPORTED_MODULE_2__.length);
    setActiveChallenge(_challenges_json__WEBPACK_IMPORTED_MODULE_2__[randomChallengeIndex]); //Audio

    new Audio('/notification.mp3').play(); //Notificação

    if (Notification.permission === "granted") {
      new Notification('Novo Desafio', {
        'body': `Valendo ${_challenges_json__WEBPACK_IMPORTED_MODULE_2__[randomChallengeIndex].amount} xp!`,
        'icon': `favicon.png`
      });
    }
  }

  function resetChallenge() {
    setActiveChallenge(null);
  }

  function closeModal() {
    setIsLevelUpModalOpen(false);
  } //Notificação


  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    Notification.requestPermission();
  }, []); //Salvar em cookies

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.set('level', String(level));
    js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.set('currentExperience', String(currentExperience));
    js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.set('challengeCompleted', String(challengeCompleted));
  }, [level, currentExperience, challengeCompleted]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ChallengesContext.Provider, {
    value: {
      level,
      currentExperience,
      challengeCompleted,
      startNewChallengs,
      activeChallenge,
      resetChallenge,
      experienceToNextLevel,
      completeChallenge,
      closeModal
    },
    children: [isLevelUpModalOpen && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_LevelUpModal__WEBPACK_IMPORTED_MODULE_4__["LevelUpModal"], {}, void 0, false, {
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

/***/ }),

/***/ "./src/context/CountdownContext.tsx":
/*!******************************************!*\
  !*** ./src/context/CountdownContext.tsx ***!
  \******************************************/
/*! exports provided: CountdownContext, CountdownProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountdownContext", function() { return CountdownContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountdownProvider", function() { return CountdownProvider; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ChallengesContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ChallengesContext */ "./src/context/ChallengesContext.tsx");

var _jsxFileName = "C:\\Users\\Wanderley\\Desktop\\moveit-next\\src\\context\\CountdownContext.tsx";


const CountdownContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["createContext"])({});
function CountdownProvider({
  children
}) {
  const resetCountdown = () => {
    setIsActive(false);
    clearTimeout(countdownTimeout);
    setHasFinished(false);
  };

  const startCountDown = () => {
    setIsActive(true);
  };

  let countdownTimeout;
  const {
    startNewChallengs
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_ChallengesContext__WEBPACK_IMPORTED_MODULE_2__["ChallengesContext"]);
  const {
    0: time,
    1: setTime
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(25 * 60);
  const {
    0: isActive,
    1: setIsActive
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: hasFinished,
    1: setHasFinished
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const minute = Math.floor(time / 60); //Arredonda para baixo

  const second = time % 60; //O resto que será os segundos
  //Para parar e continuar o cronometro

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (isActive && time > 0) {
      countdownTimeout = setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    } else if (isActive && time === 0) {
      setTime(25 * 60);
      setIsActive(false);
      setHasFinished(true);
      startNewChallengs();
    } else setTime(0.1 * 60);
  }, [isActive, time]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(CountdownContext.Provider, {
    value: {
      minute,
      second,
      hasFinished,
      isActive,
      resetCountdown,
      startCountDown
    },
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 47,
    columnNumber: 10
  }, this);
}

/***/ }),

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/*! exports provided: default, getServerSideProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return getServerSideProps; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_home_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/home.module.css */ "./src/styles/home.module.css");
/* harmony import */ var _styles_home_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_home_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_ExperienceBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/ExperienceBar */ "./src/components/ExperienceBar.tsx");
/* harmony import */ var _components_Profile__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Profile */ "./src/components/Profile.tsx");
/* harmony import */ var _components_CompletedChallenges__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/CompletedChallenges */ "./src/components/CompletedChallenges.tsx");
/* harmony import */ var _components_Countdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Countdown */ "./src/components/Countdown.tsx");
/* harmony import */ var _components_ChallengeBox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/ChallengeBox */ "./src/components/ChallengeBox.tsx");
/* harmony import */ var _context_CountdownContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../context/CountdownContext */ "./src/context/CountdownContext.tsx");
/* harmony import */ var _context_ChallengesContext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../context/ChallengesContext */ "./src/context/ChallengesContext.tsx");

var _jsxFileName = "C:\\Users\\Wanderley\\Desktop\\moveit-next\\src\\pages\\index.tsx";









function Home(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_context_ChallengesContext__WEBPACK_IMPORTED_MODULE_9__["ChallengesProvider"], {
    level: props.level,
    currentExperience: props.currentExperience,
    challengeCompleted: props.challengeCompleted,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.container,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
          children: " Inicio | Moveit "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 7
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 5
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_ExperienceBar__WEBPACK_IMPORTED_MODULE_3__["ExperienceBar"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 7
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_context_CountdownContext__WEBPACK_IMPORTED_MODULE_8__["CountdownProvider"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Profile__WEBPACK_IMPORTED_MODULE_4__["Profile"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 31,
              columnNumber: 13
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_CompletedChallenges__WEBPACK_IMPORTED_MODULE_5__["CompletedChallenges"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 32,
              columnNumber: 13
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Countdown__WEBPACK_IMPORTED_MODULE_6__["Countdown"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 33,
              columnNumber: 13
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 30,
            columnNumber: 11
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_ChallengeBox__WEBPACK_IMPORTED_MODULE_7__["ChallengeBox"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 36,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 35,
            columnNumber: 11
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 7
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 5
  }, this);
} //E aqui onde vamos pegar os dados do back end

const getServerSideProps = async ctx => {
  const {
    level,
    currentExperience,
    challengeCompleted
  } = ctx.req.cookies;
  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengeCompleted: Number(challengeCompleted)
    }
  };
};

/***/ }),

/***/ "./src/styles/challenge-box.module.css":
/*!*********************************************!*\
  !*** ./src/styles/challenge-box.module.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"challengeBoxContainer": "challenge-box_challengeBoxContainer__2kF6B",
	"challengeNotActive": "challenge-box_challengeNotActive__2Y9Fs",
	"challengeActive": "challenge-box_challengeActive__3LMuQ",
	"challengeFaleidButton": "challenge-box_challengeFaleidButton__c7iFa",
	"challengeSucceededButton": "challenge-box_challengeSucceededButton__1Zg8r"
};


/***/ }),

/***/ "./src/styles/completed-challenges.module.css":
/*!****************************************************!*\
  !*** ./src/styles/completed-challenges.module.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"completedChallengesContainer": "completed-challenges_completedChallengesContainer__lK6sB"
};


/***/ }),

/***/ "./src/styles/count-down.module.css":
/*!******************************************!*\
  !*** ./src/styles/count-down.module.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"countDownContainer": "count-down_countDownContainer__35WHw",
	"CountDownButton": "count-down_CountDownButton__PWRKA",
	"CountDownButtonActive": "count-down_CountDownButtonActive__vsinU"
};


/***/ }),

/***/ "./src/styles/experience-bar.module.css":
/*!**********************************************!*\
  !*** ./src/styles/experience-bar.module.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"experienceBar": "experience-bar_experienceBar__2LXpE",
	"currentExperience": "experience-bar_currentExperience__16dLp"
};


/***/ }),

/***/ "./src/styles/home.module.css":
/*!************************************!*\
  !*** ./src/styles/home.module.css ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container": "home_container__3sUed"
};


/***/ }),

/***/ "./src/styles/levelup-modal.module.css":
/*!*********************************************!*\
  !*** ./src/styles/levelup-modal.module.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"overlay": "levelup-modal_overlay__3F7DU",
	"container": "levelup-modal_container__lRuzp"
};


/***/ }),

/***/ "./src/styles/profile.module.css":
/*!***************************************!*\
  !*** ./src/styles/profile.module.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"profileCotainer": "profile_profileCotainer__2nO3K"
};


/***/ }),

/***/ "js-cookie":
/*!****************************!*\
  !*** external "js-cookie" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQ2hhbGxlbmdlQm94LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Db21wbGV0ZWRDaGFsbGVuZ2VzLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Db3VudGRvd24udHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0V4cGVyaWVuY2VCYXIudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0xldmVsVXBNb2RhbC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvUHJvZmlsZS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRleHQvQ2hhbGxlbmdlc0NvbnRleHQudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb250ZXh0L0NvdW50ZG93bkNvbnRleHQudHN4Iiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9jaGFsbGVuZ2UtYm94Lm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9jb21wbGV0ZWQtY2hhbGxlbmdlcy5tb2R1bGUuY3NzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvY291bnQtZG93bi5tb2R1bGUuY3NzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvZXhwZXJpZW5jZS1iYXIubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2hvbWUubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2xldmVsdXAtbW9kYWwubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL3Byb2ZpbGUubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqcy1jb29raWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbIkNoYWxsZW5nZUJveCIsImhhbmRsZUNoYWxsZW5nZVN1Y2NlZWRlZCIsImNvbXBsZXRlQ2hhbGxlbmdlIiwicmVzZXRDb3VudGRvd24iLCJoYW5kbGVDaGFsbGVuZ2VGYWlsZWQiLCJyZXNldENoYWxsZW5nZSIsInVzZUNvbnRleHQiLCJDb3VudGRvd25Db250ZXh0IiwiYWN0aXZlQ2hhbGxlbmdlIiwiQ2hhbGxlbmdlc0NvbnRleHQiLCJzdHlsZXMiLCJjaGFsbGVuZ2VCb3hDb250YWluZXIiLCJjaGFsbGVuZ2VBY3RpdmUiLCJhbW91bnQiLCJ0eXBlIiwiZGVzY3JpcHRpb24iLCJjaGFsbGVuZ2VGYWxlaWRCdXR0b24iLCJjaGFsbGVuZ2VTdWNjZWVkZWRCdXR0b24iLCJjaGFsbGVuZ2VOb3RBY3RpdmUiLCJDb21wbGV0ZWRDaGFsbGVuZ2VzIiwiY2hhbGxlbmdlQ29tcGxldGVkIiwiY29tcGxldGVkQ2hhbGxlbmdlc0NvbnRhaW5lciIsIkNvdW50ZG93biIsIm1pbnV0ZSIsInNlY29uZCIsImlzQWN0aXZlIiwiaGFzRmluaXNoZWQiLCJzdGFydENvdW50RG93biIsIm1pbnV0ZUxlZnQiLCJtaW51dGVSaWdodCIsIlN0cmluZyIsInBhZFN0YXJ0Iiwic3BsaXQiLCJzZWNvbmRMZWZ0Iiwic2Vjb25kUmlnaHQiLCJjb3VudERvd25Db250YWluZXIiLCJDb3VudERvd25CdXR0b24iLCJDb3VudERvd25CdXR0b25BY3RpdmUiLCJFeHBlcmllbmNlQmFyIiwiY3VycmVudEV4cGVyaWVuY2UiLCJleHBlcmllbmNlVG9OZXh0TGV2ZWwiLCJwZXJjZW50VG9OZXh0TGV2ZWwiLCJNYXRoIiwicm91bmQiLCJleHBlcmllbmNlQmFyIiwid2lkdGgiLCJsZWZ0IiwiTGV2ZWxVcE1vZGFsIiwibGV2ZWwiLCJjbG9zZU1vZGFsIiwib3ZlcmxheSIsImNvbnRhaW5lciIsIlByb2ZpbGUiLCJwcm9maWxlQ290YWluZXIiLCJjcmVhdGVDb250ZXh0IiwiQ2hhbGxlbmdlc1Byb3ZpZGVyIiwiY2hpbGRyZW4iLCJyZXN0Iiwic2V0TGV2ZWwiLCJ1c2VTdGF0ZSIsInNldEN1cnJlbnRFeHBlcmllbmNlIiwic2V0Q2hhbGxlbmdlQ29tcGxldGVkIiwic2V0QWN0aXZlQ2hhbGxlbmdlIiwiaXNMZXZlbFVwTW9kYWxPcGVuIiwic2V0SXNMZXZlbFVwTW9kYWxPcGVuIiwicG93IiwibGV2ZWxVcCIsImNvbnNvbGUiLCJsb2ciLCJmaW5hbEV4cGVyaWVuY2UiLCJzdGFydE5ld0NoYWxsZW5ncyIsInJhbmRvbUNoYWxsZW5nZUluZGV4IiwiZmxvb3IiLCJyYW5kb20iLCJjaGFsbGVuZ2VzIiwibGVuZ3RoIiwiQXVkaW8iLCJwbGF5IiwiTm90aWZpY2F0aW9uIiwicGVybWlzc2lvbiIsInVzZUVmZmVjdCIsInJlcXVlc3RQZXJtaXNzaW9uIiwiQ29va2llcyIsInNldCIsIkNvdW50ZG93blByb3ZpZGVyIiwic2V0SXNBY3RpdmUiLCJjbGVhclRpbWVvdXQiLCJjb3VudGRvd25UaW1lb3V0Iiwic2V0SGFzRmluaXNoZWQiLCJ0aW1lIiwic2V0VGltZSIsInNldFRpbWVvdXQiLCJIb21lIiwicHJvcHMiLCJnZXRTZXJ2ZXJTaWRlUHJvcHMiLCJjdHgiLCJyZXEiLCJjb29raWVzIiwiTnVtYmVyIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4RkE7QUFDQTtBQUNBO0FBQ0E7QUFFTyxTQUFTQSxZQUFULEdBQXVCO0FBRTFCLFdBQVNDLHdCQUFULEdBQW1DO0FBQy9CQyxxQkFBaUI7QUFDakJDLGtCQUFjO0FBQ2pCOztBQUNELFdBQVNDLHFCQUFULEdBQWdDO0FBQzVCQyxrQkFBYztBQUNkRixrQkFBYztBQUNqQjs7QUFFRCxRQUFNO0FBQUNBO0FBQUQsTUFBbUJHLHdEQUFVLENBQUNDLDBFQUFELENBQW5DO0FBQ0EsUUFBTTtBQUFDQyxtQkFBRDtBQUFrQkgsa0JBQWxCO0FBQWtDSDtBQUFsQyxNQUF1REksd0RBQVUsQ0FBQ0csNEVBQUQsQ0FBdkU7QUFFQSxzQkFDSTtBQUFLLGFBQVMsRUFBRUMsdUVBQU0sQ0FBQ0MscUJBQXZCO0FBQUEsY0FDS0gsZUFBZSxnQkFDWjtBQUFLLGVBQVMsRUFBRUUsdUVBQU0sQ0FBQ0UsZUFBdkI7QUFBQSw4QkFDSTtBQUFBLDhCQUFnQkosZUFBZSxDQUFDSyxNQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixlQUVJO0FBQUEsZ0NBQ0k7QUFBSyxhQUFHLEVBQUcsU0FBUUwsZUFBZSxDQUFDTSxJQUFLLE1BQXhDO0FBQStDLGFBQUcsRUFBQztBQUFuRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURKLGVBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkosZUFHSTtBQUFBLG9CQUFJTixlQUFlLENBQUNPO0FBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkosZUFPSTtBQUFBLGdDQUNJO0FBQVEsY0FBSSxFQUFDLFFBQWI7QUFBc0IsaUJBQU8sRUFBRVgscUJBQS9CO0FBQ0ksbUJBQVMsRUFBRU0sdUVBQU0sQ0FBQ00scUJBRHRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURKLGVBS0k7QUFBUSxjQUFJLEVBQUMsUUFBYjtBQUFzQixpQkFBTyxFQUFFZix3QkFBL0I7QUFDSSxtQkFBUyxFQUFFUyx1RUFBTSxDQUFDTyx3QkFEdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBTEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBUEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRFksZ0JBb0JaO0FBQUssZUFBUyxFQUFFUCx1RUFBTSxDQUFDUSxrQkFBdkI7QUFBQSw4QkFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLGVBRUk7QUFBQSxnQ0FDSTtBQUFLLGFBQUcsRUFBQyxvQkFBVDtBQUE4QixhQUFHLEVBQUM7QUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFyQlI7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBZ0NILEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkREO0FBQ0E7QUFDQTtBQUVRLFNBQVNDLG1CQUFULEdBQThCO0FBQ2xDLFFBQU07QUFBRUM7QUFBRixNQUF5QmQsd0RBQVUsQ0FBQ0csNEVBQUQsQ0FBekM7QUFDQSxzQkFDSTtBQUFLLGFBQVMsRUFBRUMsOEVBQU0sQ0FBQ1csNEJBQXZCO0FBQUEsNEJBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixlQUVJO0FBQUEsZ0JBQU9EO0FBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBTUgsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWkQ7QUFDQTtBQUNBO0FBRU8sU0FBU0UsU0FBVCxHQUFvQjtBQUV2QixRQUFNO0FBQUVDLFVBQUY7QUFBU0MsVUFBVDtBQUFpQkMsWUFBakI7QUFBMkJDLGVBQTNCO0FBQXdDdkIsa0JBQXhDO0FBQXdEd0I7QUFBeEQsTUFBMkVyQix3REFBVSxDQUFDQywwRUFBRCxDQUEzRjtBQUNBLFFBQU0sQ0FBQ3FCLFVBQUQsRUFBYUMsV0FBYixJQUE0QkMsTUFBTSxDQUFDUCxNQUFELENBQU4sQ0FBZVEsUUFBZixDQUF3QixDQUF4QixFQUEyQixHQUEzQixFQUFnQ0MsS0FBaEMsQ0FBc0MsRUFBdEMsQ0FBbEM7QUFDQSxRQUFNLENBQUNDLFVBQUQsRUFBYUMsV0FBYixJQUE0QkosTUFBTSxDQUFDTixNQUFELENBQU4sQ0FBZU8sUUFBZixDQUF3QixDQUF4QixFQUEyQixHQUEzQixFQUFnQ0MsS0FBaEMsQ0FBc0MsRUFBdEMsQ0FBbEM7QUFFQSxzQkFDRztBQUFBLDRCQUNFO0FBQUssZUFBUyxFQUFFdEIsb0VBQU0sQ0FBQ3lCLGtCQUF2QjtBQUFBLDhCQUNHO0FBQUEsZ0NBQ0k7QUFBQSxvQkFBT1A7QUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURKLGVBRUk7QUFBQSxvQkFBT0M7QUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURILGVBS0c7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FMSCxlQU1HO0FBQUEsZ0NBQ0c7QUFBQSxvQkFBT0k7QUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURILGVBRUc7QUFBQSxvQkFBT0M7QUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQU5IO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLEVBYUdSLFdBQVcsZ0JBQ1Q7QUFBUSxjQUFRLE1BQWhCO0FBQWtCLGVBQVMsRUFBRWhCLG9FQUFNLENBQUMwQixlQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURTLGdCQUdUO0FBQUEsZ0JBQ01YLFFBQVEsZ0JBQ047QUFBUSxZQUFJLEVBQUMsUUFBYjtBQUFzQixlQUFPLEVBQUd0QixjQUFoQztBQUNJLGlCQUFTLEVBQUVPLG9FQUFNLENBQUMyQixxQkFEdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FETSxnQkFNTjtBQUFRLFlBQUksRUFBQyxRQUFiO0FBQXNCLGVBQU8sRUFBR1YsY0FBaEM7QUFDSSxpQkFBUyxFQUFFakIsb0VBQU0sQ0FBQzBCLGVBRHRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUFIscUJBaEJMO0FBQUEsa0JBREg7QUFrQ0g7QUFBQSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVDRDtBQUNBO0FBQ0E7QUFFTyxTQUFTRSxhQUFULEdBQXdCO0FBQzNCLFFBQU07QUFBRUMscUJBQUY7QUFBcUJDO0FBQXJCLE1BQStDbEMsd0RBQVUsQ0FBQ0csNEVBQUQsQ0FBL0Q7QUFDQSxRQUFNZ0Msa0JBQWtCLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFZSixpQkFBaUIsR0FBRyxHQUFyQixHQUE0QkMscUJBQXZDLENBQTNCO0FBRUEsc0JBQ0k7QUFBUSxhQUFTLEVBQUU5Qix3RUFBTSxDQUFDa0MsYUFBMUI7QUFBQSw0QkFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLGVBRUk7QUFBQSw4QkFDSTtBQUFLLGFBQUssRUFBRTtBQUFFQyxlQUFLLEVBQUksR0FBRUosa0JBQW1CO0FBQWhDO0FBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLGVBRUk7QUFBTSxpQkFBUyxFQUFFL0Isd0VBQU0sQ0FBQzZCLGlCQUF4QjtBQUEyQyxhQUFLLEVBQUU7QUFBRU8sY0FBSSxFQUFJLEdBQUVMLGtCQUFtQjtBQUEvQixTQUFsRDtBQUFBLG1CQUF3RkYsaUJBQXhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZKLGVBTUk7QUFBQSxpQkFBT0MscUJBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFVSDtBQUFBLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEJEO0FBQ0E7QUFDQTtBQUVPLFNBQVNPLFlBQVQsR0FBdUI7QUFDMUIsUUFBTTtBQUFDQyxTQUFEO0FBQVFDO0FBQVIsTUFBc0IzQyx3REFBVSxDQUFDRyw0RUFBRCxDQUF0QztBQUNBLHNCQUNJO0FBQUssYUFBUyxFQUFFQyx1RUFBTSxDQUFDd0MsT0FBdkI7QUFBQSwyQkFDSTtBQUFLLGVBQVMsRUFBRXhDLHVFQUFNLENBQUN5QyxTQUF2QjtBQUFBLDhCQUNJO0FBQUEsa0JBQVNIO0FBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLGVBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGSixlQUdJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSEosZUFLSTtBQUFRLFlBQUksRUFBQyxRQUFiO0FBQXNCLGVBQU8sRUFBR0MsVUFBaEM7QUFBQSwrQkFDSTtBQUFLLGFBQUcsRUFBQyxpQkFBVDtBQUEyQixhQUFHLEVBQUM7QUFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FMSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFhSCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25CRDtBQUNBO0FBQ0E7QUFFTyxTQUFTRyxPQUFULEdBQWtCO0FBQ3JCLFFBQU07QUFBRUo7QUFBRixNQUFZMUMsd0RBQVUsQ0FBQ0csNEVBQUQsQ0FBNUI7QUFDQSxzQkFDSTtBQUFLLGFBQVMsRUFBRUMsaUVBQU0sQ0FBQzJDLGVBQXZCO0FBQUEsNEJBQ0k7QUFBSyxTQUFHLEVBQUMsc0NBQVQ7QUFBZ0QsU0FBRyxFQUFDO0FBQXBEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixlQUVJO0FBQUEsOEJBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixlQUVJO0FBQUEsZ0NBQ0k7QUFBSyxhQUFHLEVBQUMsaUJBQVQ7QUFBMkIsYUFBRyxFQUFDO0FBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREosWUFFV0wsS0FGWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQVlIO0FBQUEsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xCRDtBQUNBO0FBQ0E7QUFDQTtBQWFDO0FBYU0sTUFBTXZDLGlCQUFpQixnQkFBRzZDLDJEQUFhLENBQUMsRUFBRCxDQUF2QztBQUNBLFNBQVNDLGtCQUFULE9BQTRFO0FBQUE7O0FBQUEsTUFBaEQ7QUFBRUM7QUFBRixHQUFnRDtBQUFBLE1BQWpDQyxJQUFpQzs7QUFDL0UsUUFBTTtBQUFBLE9BQUNULEtBQUQ7QUFBQSxPQUFRVTtBQUFSLE1BQW9CQyxzREFBUSxnQkFBU0YsSUFBSSxDQUFDVCxLQUFkLHFEQUF1QixDQUF2QixDQUFsQztBQUNBLFFBQU07QUFBQSxPQUFDVCxpQkFBRDtBQUFBLE9BQW1CcUI7QUFBbkIsTUFBMkNELHNEQUFRLDBCQUFTRixJQUFJLENBQUNsQixpQkFBZCx5RUFBbUMsQ0FBbkMsQ0FBekQ7QUFDQSxRQUFNO0FBQUEsT0FBQ25CLGtCQUFEO0FBQUEsT0FBcUJ5QztBQUFyQixNQUE4Q0Ysc0RBQVEsMEJBQVNGLElBQUksQ0FBQ3JDLGtCQUFkLHlFQUFvQyxDQUFwQyxDQUE1RDtBQUNBLFFBQU07QUFBQSxPQUFDWixlQUFEO0FBQUEsT0FBa0JzRDtBQUFsQixNQUF3Q0gsc0RBQVEsQ0FBa0IsSUFBbEIsQ0FBdEQ7QUFDQSxRQUFNO0FBQUEsT0FBQ0ksa0JBQUQ7QUFBQSxPQUFxQkM7QUFBckIsTUFBOENMLHNEQUFRLENBQVUsS0FBVixDQUE1RDtBQUVBLFFBQU1uQixxQkFBcUIsR0FBR0UsSUFBSSxDQUFDdUIsR0FBTCxDQUFTLENBQUNqQixLQUFLLEdBQUcsQ0FBVCxJQUFjLENBQXZCLEVBQTBCLENBQTFCLENBQTlCOztBQUVBLFdBQVNrQixPQUFULEdBQWtCO0FBQ2RSLFlBQVEsQ0FBQ1YsS0FBSyxHQUFHLENBQVQsQ0FBUjtBQUNBZ0IseUJBQXFCLENBQUMsSUFBRCxDQUFyQjtBQUNIOztBQUNELFdBQVM5RCxpQkFBVCxHQUE2QjtBQUN6QixRQUFJTSxlQUFlLENBQUNLLE1BQWhCLElBQTBCLENBQTlCLEVBQ0k7QUFDSnNELFdBQU8sQ0FBQ0MsR0FBUixDQUFZLENBQUM1RCxlQUFELEVBQWtCK0IsaUJBQWxCLENBQVo7QUFDQSxVQUFNO0FBQUUxQjtBQUFGLFFBQWFMLGVBQW5CO0FBQ0EsUUFBSTZELGVBQWUsR0FBRzlCLGlCQUFpQixHQUFHMUIsTUFBMUM7O0FBQ0EsUUFBR3dELGVBQWUsSUFBSTdCLHFCQUF0QixFQUE0QztBQUN4QzBCLGFBQU87QUFDUE4sMEJBQW9CLENBQUNTLGVBQWUsR0FBRzdCLHFCQUFuQixDQUFwQjtBQUNILEtBSEQsTUFJSW9CLG9CQUFvQixDQUFDUyxlQUFELENBQXBCOztBQUNKUCxzQkFBa0IsQ0FBQyxJQUFELENBQWxCO0FBQ0FELHlCQUFxQixDQUFDekMsa0JBQWtCLEdBQUcsQ0FBdEIsQ0FBckI7QUFDSDs7QUFFRCxXQUFTa0QsaUJBQVQsR0FBNEI7QUFDekIsVUFBTUMsb0JBQW9CLEdBQUc3QixJQUFJLENBQUM4QixLQUFMLENBQVc5QixJQUFJLENBQUMrQixNQUFMLEtBQWdCQyw2Q0FBVSxDQUFDQyxNQUF0QyxDQUE3QjtBQUNBYixzQkFBa0IsQ0FBQ1ksNkNBQVUsQ0FBQ0gsb0JBQUQsQ0FBWCxDQUFsQixDQUZ5QixDQUd4Qjs7QUFDQSxRQUFJSyxLQUFKLENBQVUsbUJBQVYsRUFBK0JDLElBQS9CLEdBSndCLENBS3pCOztBQUNBLFFBQUdDLFlBQVksQ0FBQ0MsVUFBYixLQUE0QixTQUEvQixFQUF5QztBQUNyQyxVQUFJRCxZQUFKLENBQWlCLGNBQWpCLEVBQWlDO0FBQzdCLGdCQUFVLFdBQVVKLDZDQUFVLENBQUNILG9CQUFELENBQVYsQ0FBaUMxRCxNQUFPLE1BRC9CO0FBRTdCLGdCQUFVO0FBRm1CLE9BQWpDO0FBSUg7QUFDSDs7QUFFRCxXQUFTUixjQUFULEdBQXlCO0FBQ3JCeUQsc0JBQWtCLENBQUMsSUFBRCxDQUFsQjtBQUNIOztBQUVELFdBQVNiLFVBQVQsR0FBcUI7QUFDakJlLHlCQUFxQixDQUFDLEtBQUQsQ0FBckI7QUFDSCxHQWhEOEUsQ0FrRC9FOzs7QUFDQWdCLHlEQUFTLENBQUMsTUFBTTtBQUNaRixnQkFBWSxDQUFDRyxpQkFBYjtBQUNILEdBRlEsRUFFTixFQUZNLENBQVQsQ0FuRCtFLENBdUQvRTs7QUFDQUQseURBQVMsQ0FBQyxNQUFNO0FBQ1pFLG9EQUFPLENBQUNDLEdBQVIsQ0FBWSxPQUFaLEVBQXFCckQsTUFBTSxDQUFDa0IsS0FBRCxDQUEzQjtBQUNBa0Msb0RBQU8sQ0FBQ0MsR0FBUixDQUFZLG1CQUFaLEVBQWlDckQsTUFBTSxDQUFDUyxpQkFBRCxDQUF2QztBQUNBMkMsb0RBQU8sQ0FBQ0MsR0FBUixDQUFZLG9CQUFaLEVBQWtDckQsTUFBTSxDQUFDVixrQkFBRCxDQUF4QztBQUVILEdBTFEsRUFLTixDQUFDNEIsS0FBRCxFQUFRVCxpQkFBUixFQUEyQm5CLGtCQUEzQixDQUxNLENBQVQ7QUFPQSxzQkFDSSxxRUFBQyxpQkFBRCxDQUFtQixRQUFuQjtBQUE0QixTQUFLLEVBQUU7QUFBRTRCLFdBQUY7QUFBU1QsdUJBQVQ7QUFBNEJuQix3QkFBNUI7QUFBZ0RrRCx1QkFBaEQ7QUFBbUU5RCxxQkFBbkU7QUFBb0ZILG9CQUFwRjtBQUFvR21DLDJCQUFwRztBQUEySHRDLHVCQUEzSDtBQUE4SStDO0FBQTlJLEtBQW5DO0FBQUEsZUFDQ2Msa0JBQWtCLGlCQUFJLHFFQUFDLHFFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFEdkIsRUFFS1AsUUFGTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQU1ILEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuR0Q7QUFDQTtBQVdRLE1BQU1qRCxnQkFBZ0IsZ0JBQUcrQywyREFBYSxDQUFDLEVBQUQsQ0FBdEM7QUFFRCxTQUFTOEIsaUJBQVQsQ0FBNEI7QUFBQzVCO0FBQUQsQ0FBNUIsRUFBaUU7QUFFcEUsUUFBTXJELGNBQWMsR0FBRyxNQUFNO0FBQUVrRixlQUFXLENBQUMsS0FBRCxDQUFYO0FBQW9CQyxnQkFBWSxDQUFDQyxnQkFBRCxDQUFaO0FBQWdDQyxrQkFBYyxDQUFDLEtBQUQsQ0FBZDtBQUF1QixHQUExRzs7QUFDQSxRQUFNN0QsY0FBYyxHQUFHLE1BQU07QUFBRTBELGVBQVcsQ0FBQyxJQUFELENBQVg7QUFBbUIsR0FBbEQ7O0FBRUEsTUFBSUUsZ0JBQUo7QUFDQSxRQUFNO0FBQUNqQjtBQUFELE1BQXNCaEUsd0RBQVUsQ0FBQ0csb0VBQUQsQ0FBdEM7QUFFQSxRQUFNO0FBQUEsT0FBQ2dGLElBQUQ7QUFBQSxPQUFPQztBQUFQLE1BQWtCL0Isc0RBQVEsQ0FBUyxLQUFLLEVBQWQsQ0FBaEM7QUFDQSxRQUFNO0FBQUEsT0FBQ2xDLFFBQUQ7QUFBQSxPQUFXNEQ7QUFBWCxNQUEwQjFCLHNEQUFRLENBQVUsS0FBVixDQUF4QztBQUNBLFFBQU07QUFBQSxPQUFDakMsV0FBRDtBQUFBLE9BQWM4RDtBQUFkLE1BQWdDN0Isc0RBQVEsQ0FBVSxLQUFWLENBQTlDO0FBRUEsUUFBTXBDLE1BQU0sR0FBR21CLElBQUksQ0FBQzhCLEtBQUwsQ0FBV2lCLElBQUksR0FBQyxFQUFoQixDQUFmLENBWm9FLENBWWhDOztBQUNwQyxRQUFNakUsTUFBTSxHQUFHaUUsSUFBSSxHQUFHLEVBQXRCLENBYm9FLENBYTFDO0FBRTFCOztBQUNBVCx5REFBUyxDQUFDLE1BQU07QUFDWixRQUFJdkQsUUFBUSxJQUFJZ0UsSUFBSSxHQUFHLENBQXZCLEVBQTBCO0FBQ3RCRixzQkFBZ0IsR0FBR0ksVUFBVSxDQUFDLE1BQU07QUFDaENELGVBQU8sQ0FBQ0QsSUFBSSxHQUFHLENBQVIsQ0FBUDtBQUNILE9BRjRCLEVBRTNCLElBRjJCLENBQTdCO0FBR0gsS0FKRCxNQUlNLElBQUdoRSxRQUFRLElBQUlnRSxJQUFJLEtBQUssQ0FBeEIsRUFBMEI7QUFDNUJDLGFBQU8sQ0FBQyxLQUFLLEVBQU4sQ0FBUDtBQUNBTCxpQkFBVyxDQUFDLEtBQUQsQ0FBWDtBQUNBRyxvQkFBYyxDQUFDLElBQUQsQ0FBZDtBQUNBbEIsdUJBQWlCO0FBQ3BCLEtBTEssTUFNRm9CLE9BQU8sQ0FBQyxNQUFNLEVBQVAsQ0FBUDtBQUVQLEdBYlEsRUFhTixDQUFDakUsUUFBRCxFQUFXZ0UsSUFBWCxDQWJNLENBQVQ7QUFlQSxzQkFDSyxxRUFBQyxnQkFBRCxDQUFrQixRQUFsQjtBQUEyQixTQUFLLEVBQUk7QUFBQ2xFLFlBQUQ7QUFBU0MsWUFBVDtBQUFpQkUsaUJBQWpCO0FBQThCRCxjQUE5QjtBQUF3Q3RCLG9CQUF4QztBQUF3RHdCO0FBQXhELEtBQXBDO0FBQUEsY0FDSzZCO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURMO0FBS0gsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEREO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVFlLFNBQVNvQyxJQUFULENBQWNDLEtBQWQsRUFBaUM7QUFDOUMsc0JBRUUscUVBQUMsNkVBQUQ7QUFBb0IsU0FBSyxFQUFFQSxLQUFLLENBQUM3QyxLQUFqQztBQUF3QyxxQkFBaUIsRUFBRTZDLEtBQUssQ0FBQ3RELGlCQUFqRTtBQUFvRixzQkFBa0IsRUFBRXNELEtBQUssQ0FBQ3pFLGtCQUE5RztBQUFBLDJCQUNFO0FBQUssZUFBUyxFQUFFViw4REFBTSxDQUFDeUMsU0FBdkI7QUFBQSw4QkFDRixxRUFBQyxnREFBRDtBQUFBLCtCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURFLGVBSUEscUVBQUMsdUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUpBLGVBS0EscUVBQUMsMkVBQUQ7QUFBQSwrQkFDRTtBQUFBLGtDQUNFO0FBQUEsb0NBQ0UscUVBQUMsMkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFERixlQUVFLHFFQUFDLG1GQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBRkYsZUFHRSxxRUFBQywrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixlQU1FO0FBQUEsbUNBQ0UscUVBQUMscUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUxBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFGRjtBQXVCRCxDLENBRUQ7O0FBQ08sTUFBTTJDLGtCQUF1QyxHQUFHLE1BQU9DLEdBQVAsSUFBZTtBQUNwRSxRQUFNO0FBQUMvQyxTQUFEO0FBQVFULHFCQUFSO0FBQTJCbkI7QUFBM0IsTUFBaUQyRSxHQUFHLENBQUNDLEdBQUosQ0FBUUMsT0FBL0Q7QUFDQSxTQUFPO0FBQ0xKLFNBQUssRUFBRztBQUFFN0MsV0FBSyxFQUFnQmtELE1BQU0sQ0FBQ2xELEtBQUQsQ0FBN0I7QUFDRVQsdUJBQWlCLEVBQUkyRCxNQUFNLENBQUMzRCxpQkFBRCxDQUQ3QjtBQUVFbkIsd0JBQWtCLEVBQUc4RSxNQUFNLENBQUM5RSxrQkFBRDtBQUY3QjtBQURILEdBQVA7QUFNRCxDQVJNLEM7Ozs7Ozs7Ozs7O0FDN0NQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ1BBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ0pBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNKQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDSEEsc0M7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsa0QiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9wYWdlcy9pbmRleC50c3hcIik7XG4iLCJpbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBDaGFsbGVuZ2VzQ29udGV4dCB9IGZyb20gJy4uL2NvbnRleHQvQ2hhbGxlbmdlc0NvbnRleHQnO1xyXG5pbXBvcnQgeyBDb3VudGRvd25Db250ZXh0IH0gZnJvbSAnLi4vY29udGV4dC9Db3VudGRvd25Db250ZXh0JztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvY2hhbGxlbmdlLWJveC5tb2R1bGUuY3NzJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBDaGFsbGVuZ2VCb3goKXtcclxuICAgIFxyXG4gICAgZnVuY3Rpb24gaGFuZGxlQ2hhbGxlbmdlU3VjY2VlZGVkKCl7XHJcbiAgICAgICAgY29tcGxldGVDaGFsbGVuZ2UoKTtcclxuICAgICAgICByZXNldENvdW50ZG93bigpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gaGFuZGxlQ2hhbGxlbmdlRmFpbGVkKCl7XHJcbiAgICAgICAgcmVzZXRDaGFsbGVuZ2UoKTtcclxuICAgICAgICByZXNldENvdW50ZG93bigpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBjb25zdCB7cmVzZXRDb3VudGRvd259ID0gdXNlQ29udGV4dChDb3VudGRvd25Db250ZXh0KTtcclxuICAgIGNvbnN0IHthY3RpdmVDaGFsbGVuZ2UsIHJlc2V0Q2hhbGxlbmdlLCBjb21wbGV0ZUNoYWxsZW5nZX0gPSB1c2VDb250ZXh0KENoYWxsZW5nZXNDb250ZXh0KTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2hhbGxlbmdlQm94Q29udGFpbmVyfT5cclxuICAgICAgICAgICAge2FjdGl2ZUNoYWxsZW5nZSA/IChcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2hhbGxlbmdlQWN0aXZlfT5cclxuICAgICAgICAgICAgICAgICAgICA8aGVhZGVyPiBHYW5oZSB7YWN0aXZlQ2hhbGxlbmdlLmFtb3VudH0geHAgPC9oZWFkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPG1haW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtgaWNvbnMvJHthY3RpdmVDaGFsbGVuZ2UudHlwZX0uc3ZnYH0gYWx0PVwiRXhlcmNpdGVcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+Tm92byBkZXNhZmlvPC9zdHJvbmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPnthY3RpdmVDaGFsbGVuZ2UuZGVzY3JpcHRpb259PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbWFpbj5cclxuICAgICAgICAgICAgICAgICAgICA8Zm9vdGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXtoYW5kbGVDaGFsbGVuZ2VGYWlsZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5jaGFsbGVuZ2VGYWxlaWRCdXR0b259PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgRmFsaGVpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXtoYW5kbGVDaGFsbGVuZ2VTdWNjZWVkZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5jaGFsbGVuZ2VTdWNjZWVkZWRCdXR0b259PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29tcGxldGVpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZm9vdGVyPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNoYWxsZW5nZU5vdEFjdGl2ZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz5GaW5hbGl6ZSB1bSBjaWNsbyBwYXJhIHJlY2ViZXIgZGVzYWZpb3M8L3N0cm9uZz5cclxuICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJpY29ucy9sZXZlbC11cC5zdmdcIiBhbHQ9XCJMZXZlbCBVcFwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQXZhbmNlIGRlIExldmVsIGNvbXBsZXRhbmRvIGRlc2FmaW9zLlxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufSIsImltcG9ydCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IENoYWxsZW5nZXNDb250ZXh0IH0gZnJvbSAnLi4vY29udGV4dC9DaGFsbGVuZ2VzQ29udGV4dCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL2NvbXBsZXRlZC1jaGFsbGVuZ2VzLm1vZHVsZS5jc3MnO1xyXG5cclxuZXhwb3J0ICBmdW5jdGlvbiBDb21wbGV0ZWRDaGFsbGVuZ2VzKCl7XHJcbiAgICBjb25zdCB7IGNoYWxsZW5nZUNvbXBsZXRlZCB9ID0gdXNlQ29udGV4dChDaGFsbGVuZ2VzQ29udGV4dCk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29tcGxldGVkQ2hhbGxlbmdlc0NvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgIDxzcGFuPkRlc2FmaW9zIGNvbXBsZXRvczwvc3Bhbj5cclxuICAgICAgICAgICAgPHNwYW4+e2NoYWxsZW5nZUNvbXBsZXRlZH08L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59IiwiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtDb3VudGRvd25Db250ZXh0fSBmcm9tICcuLi9jb250ZXh0L0NvdW50ZG93bkNvbnRleHQnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9jb3VudC1kb3duLm1vZHVsZS5jc3MnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIENvdW50ZG93bigpe1xyXG5cclxuICAgIGNvbnN0IHsgbWludXRlLHNlY29uZCwgaXNBY3RpdmUsIGhhc0ZpbmlzaGVkLCByZXNldENvdW50ZG93biwgc3RhcnRDb3VudERvd24gfSA9IHVzZUNvbnRleHQoQ291bnRkb3duQ29udGV4dCk7XHJcbiAgICBjb25zdCBbbWludXRlTGVmdCwgbWludXRlUmlnaHRdID0gU3RyaW5nKG1pbnV0ZSkucGFkU3RhcnQoMiwgJzAnKS5zcGxpdCgnJyk7XHJcbiAgICBjb25zdCBbc2Vjb25kTGVmdCwgc2Vjb25kUmlnaHRdID0gU3RyaW5nKHNlY29uZCkucGFkU3RhcnQoMiwgJzAnKS5zcGxpdCgnJyk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgIDw+XHJcbiAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY291bnREb3duQ29udGFpbmVyfT5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxzcGFuPnttaW51dGVMZWZ0fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxzcGFuPnttaW51dGVSaWdodH08L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8c3Bhbj46PC9zcGFuPlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICA8c3Bhbj57c2Vjb25kTGVmdH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgIDxzcGFuPntzZWNvbmRSaWdodH08L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICBcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICB7IGhhc0ZpbmlzaGVkID8gKFxyXG4gICAgICAgICAgICA8YnV0dG9uIGRpc2FibGVkICBjbGFzc05hbWU9e3N0eWxlcy5Db3VudERvd25CdXR0b259PiBDaWNsbyBFbmNlcnJhZG8gPC9idXR0b24+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIHsgaXNBY3RpdmUgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17IHJlc2V0Q291bnRkb3duIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuQ291bnREb3duQnV0dG9uQWN0aXZlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQWJhbmRvbmFyIGNpY2xvXHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9eyBzdGFydENvdW50RG93biB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLkNvdW50RG93bkJ1dHRvbn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEluaWNpYXIgdW0gQ2ljbG9cclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvPiBcclxuICAgICAgICApfVxyXG5cclxuICAgICAgIDwvPlxyXG4gICAgKTtcclxufTsiLCJpbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBDaGFsbGVuZ2VzQ29udGV4dCB9IGZyb20gJy4uL2NvbnRleHQvQ2hhbGxlbmdlc0NvbnRleHQnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9leHBlcmllbmNlLWJhci5tb2R1bGUuY3NzJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBFeHBlcmllbmNlQmFyKCl7XHJcbiAgICBjb25zdCB7IGN1cnJlbnRFeHBlcmllbmNlLCBleHBlcmllbmNlVG9OZXh0TGV2ZWwgfSA9IHVzZUNvbnRleHQoQ2hhbGxlbmdlc0NvbnRleHQpO1xyXG4gICAgY29uc3QgcGVyY2VudFRvTmV4dExldmVsID0gTWF0aC5yb3VuZCgoY3VycmVudEV4cGVyaWVuY2UgKiAxMDApIC8gZXhwZXJpZW5jZVRvTmV4dExldmVsKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPXtzdHlsZXMuZXhwZXJpZW5jZUJhcn0+XHJcbiAgICAgICAgICAgIDxzcGFuPjAgeHA8L3NwYW4+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoIDogYCR7cGVyY2VudFRvTmV4dExldmVsfSVgIH19Lz5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmN1cnJlbnRFeHBlcmllbmNlfSBzdHlsZT17eyBsZWZ0IDogYCR7cGVyY2VudFRvTmV4dExldmVsfSVgIH19PntjdXJyZW50RXhwZXJpZW5jZX0geHA8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8c3Bhbj57ZXhwZXJpZW5jZVRvTmV4dExldmVsfSB4cDwvc3Bhbj5cclxuICAgICAgICA8L2hlYWRlcj5cclxuICAgICk7XHJcbn07IiwiaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQ2hhbGxlbmdlc0NvbnRleHQgfSBmcm9tICcuLi9jb250ZXh0L0NoYWxsZW5nZXNDb250ZXh0JztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvbGV2ZWx1cC1tb2RhbC5tb2R1bGUuY3NzJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBMZXZlbFVwTW9kYWwoKXtcclxuICAgIGNvbnN0IHtsZXZlbCwgY2xvc2VNb2RhbH0gPSB1c2VDb250ZXh0KENoYWxsZW5nZXNDb250ZXh0KTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5vdmVybGF5fT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgPGhlYWRlcj57bGV2ZWx9PC9oZWFkZXI+XHJcbiAgICAgICAgICAgICAgICA8c3Ryb25nPlBhcmFiw6luczwvc3Ryb25nPlxyXG4gICAgICAgICAgICAgICAgPHA+Vm9jw6ogYWxjYW7Dp291IHVtIG5vdm8gbGV2ZWw8L3A+XHJcblxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17IGNsb3NlTW9kYWwgfT5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImljb25zL2Nsb3NlLnN2Z1wiIGFsdD1cImZlY2hhclwiLz5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPiBcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59IiwiaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQ2hhbGxlbmdlc0NvbnRleHQgfSBmcm9tICcuLi9jb250ZXh0L0NoYWxsZW5nZXNDb250ZXh0JztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvcHJvZmlsZS5tb2R1bGUuY3NzJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBQcm9maWxlKCl7XHJcbiAgICBjb25zdCB7IGxldmVsIH0gPSB1c2VDb250ZXh0KENoYWxsZW5nZXNDb250ZXh0KTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wcm9maWxlQ290YWluZXJ9PlxyXG4gICAgICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vZ2l0aHViLmNvbS9mcmFud2FuZGVybGV5LnBuZ1wiIGFsdD1cIkltYWdlbSBkbyBwZXJmaWxcIi8+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8c3Ryb25nPkZyYW5jaXNjbyBXYW5kZXJsZXk8L3N0cm9uZz5cclxuICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaWNvbnMvbGV2ZWwuc3ZnXCIgYWx0PVwiTGV2ZWxcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgTGV2ZWwge2xldmVsfVxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07IiwiaW1wb3J0IHtjcmVhdGVDb250ZXh0LCBSZWFjdE5vZGUsIHVzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGNoYWxsZW5nZXMgZnJvbSAnLi4vLi4vY2hhbGxlbmdlcy5qc29uJztcclxuaW1wb3J0IENvb2tpZXMgZnJvbSAnanMtY29va2llJztcclxuaW1wb3J0IHsgTGV2ZWxVcE1vZGFsIH0gZnJvbSAnLi4vY29tcG9uZW50cy9MZXZlbFVwTW9kYWwnO1xyXG5cclxuXHJcbmludGVyZmFjZSBDaGFsbGVuZ2VzUHJvdmlkZXJQcm9wcyB7XHJcbiAgICBjaGlsZHJlbiAgICAgICAgICAgOiBSZWFjdE5vZGU7XHJcbiAgICBsZXZlbCAgICAgICAgICAgICAgOiBudW1iZXI7XHJcbiAgICBjdXJyZW50RXhwZXJpZW5jZSAgOiBudW1iZXI7XHJcbiAgICBjaGFsbGVuZ2VDb21wbGV0ZWQgOiBudW1iZXI7XHJcbn1cclxuaW50ZXJmYWNlIEFjdGl2ZUNoYWxsZW5nZSAge1xyXG4gICAgdHlwZSAgICAgICAgICAgICAgOiBzdHJpbmc7XHJcbiAgICBkZXNjcmlwdGlvbiAgICAgICA6IHN0cmluZztcclxuICAgIGFtb3VudCAgICAgICAgICAgIDogbnVtYmVyOyBcclxufTtcclxuaW50ZXJmYWNlIENoYWxsZW5nZXNDb250ZXh0RGF0YXtcclxuICAgIGxldmVsICAgICAgICAgICAgICAgICA6IG51bWJlcjsgXHJcbiAgICBjdXJyZW50RXhwZXJpZW5jZSAgICAgOiBudW1iZXI7XHJcbiAgICBjaGFsbGVuZ2VDb21wbGV0ZWQgICAgOiBudW1iZXI7IFxyXG4gICAgc3RhcnROZXdDaGFsbGVuZ3MgICAgIDogKCkgPT4gdm9pZDtcclxuICAgIGFjdGl2ZUNoYWxsZW5nZSAgICAgICA6IEFjdGl2ZUNoYWxsZW5nZTtcclxuICAgIHJlc2V0Q2hhbGxlbmdlICAgICAgICA6ICgpID0+IHZvaWQ7XHJcbiAgICBjb21wbGV0ZUNoYWxsZW5nZSAgICAgOiAoKSA9PiB2b2lkO1xyXG4gICAgZXhwZXJpZW5jZVRvTmV4dExldmVsIDogbnVtYmVyO1xyXG4gICAgY2xvc2VNb2RhbCAgICAgICAgICAgIDogKCkgPT4gdm9pZDtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IENoYWxsZW5nZXNDb250ZXh0ID0gY3JlYXRlQ29udGV4dCh7fSBhcyBDaGFsbGVuZ2VzQ29udGV4dERhdGEpO1xyXG5leHBvcnQgZnVuY3Rpb24gQ2hhbGxlbmdlc1Byb3ZpZGVyKHsgY2hpbGRyZW4sIC4uLnJlc3R9IDogQ2hhbGxlbmdlc1Byb3ZpZGVyUHJvcHMpIHtcclxuICAgIGNvbnN0IFtsZXZlbCwgc2V0TGV2ZWxdID0gdXNlU3RhdGU8bnVtYmVyPihyZXN0LmxldmVsID8/IDEpO1xyXG4gICAgY29uc3QgW2N1cnJlbnRFeHBlcmllbmNlLHNldEN1cnJlbnRFeHBlcmllbmNlXSA9IHVzZVN0YXRlPG51bWJlcj4ocmVzdC5jdXJyZW50RXhwZXJpZW5jZSA/PyAwKTtcclxuICAgIGNvbnN0IFtjaGFsbGVuZ2VDb21wbGV0ZWQsIHNldENoYWxsZW5nZUNvbXBsZXRlZF0gPSB1c2VTdGF0ZTxudW1iZXI+KHJlc3QuY2hhbGxlbmdlQ29tcGxldGVkID8/IDApO1xyXG4gICAgY29uc3QgW2FjdGl2ZUNoYWxsZW5nZSwgc2V0QWN0aXZlQ2hhbGxlbmdlXSA9IHVzZVN0YXRlPEFjdGl2ZUNoYWxsZW5nZT4obnVsbCk7XHJcbiAgICBjb25zdCBbaXNMZXZlbFVwTW9kYWxPcGVuLCBzZXRJc0xldmVsVXBNb2RhbE9wZW5dID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xyXG5cclxuICAgIGNvbnN0IGV4cGVyaWVuY2VUb05leHRMZXZlbCA9IE1hdGgucG93KChsZXZlbCArIDEpICogNCwgMik7IFxyXG5cclxuICAgIGZ1bmN0aW9uIGxldmVsVXAoKXtcclxuICAgICAgICBzZXRMZXZlbChsZXZlbCArIDEpO1xyXG4gICAgICAgIHNldElzTGV2ZWxVcE1vZGFsT3Blbih0cnVlKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGNvbXBsZXRlQ2hhbGxlbmdlKCkge1xyXG4gICAgICAgIGlmKCBhY3RpdmVDaGFsbGVuZ2UuYW1vdW50IDw9IDAgKVxyXG4gICAgICAgICAgICByZXR1cm4gO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFthY3RpdmVDaGFsbGVuZ2UsIGN1cnJlbnRFeHBlcmllbmNlXSk7XHJcbiAgICAgICAgY29uc3QgeyBhbW91bnQgfSA9IGFjdGl2ZUNoYWxsZW5nZTtcclxuICAgICAgICBsZXQgZmluYWxFeHBlcmllbmNlID0gY3VycmVudEV4cGVyaWVuY2UgKyBhbW91bnQ7XHJcbiAgICAgICAgaWYoZmluYWxFeHBlcmllbmNlID49IGV4cGVyaWVuY2VUb05leHRMZXZlbCl7XHJcbiAgICAgICAgICAgIGxldmVsVXAoKTtcclxuICAgICAgICAgICAgc2V0Q3VycmVudEV4cGVyaWVuY2UoZmluYWxFeHBlcmllbmNlIC0gZXhwZXJpZW5jZVRvTmV4dExldmVsKTtcclxuICAgICAgICB9ZWxzZVxyXG4gICAgICAgICAgICBzZXRDdXJyZW50RXhwZXJpZW5jZShmaW5hbEV4cGVyaWVuY2UpO1xyXG4gICAgICAgIHNldEFjdGl2ZUNoYWxsZW5nZShudWxsKTtcclxuICAgICAgICBzZXRDaGFsbGVuZ2VDb21wbGV0ZWQoY2hhbGxlbmdlQ29tcGxldGVkICsgMSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc3RhcnROZXdDaGFsbGVuZ3MoKXtcclxuICAgICAgIGNvbnN0IHJhbmRvbUNoYWxsZW5nZUluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogY2hhbGxlbmdlcy5sZW5ndGgpO1xyXG4gICAgICAgc2V0QWN0aXZlQ2hhbGxlbmdlKGNoYWxsZW5nZXNbcmFuZG9tQ2hhbGxlbmdlSW5kZXhdKTtcclxuICAgICAgICAvL0F1ZGlvXHJcbiAgICAgICAgbmV3IEF1ZGlvKCcvbm90aWZpY2F0aW9uLm1wMycpLnBsYXkoKTtcclxuICAgICAgIC8vTm90aWZpY2HDp8Ojb1xyXG4gICAgICAgaWYoTm90aWZpY2F0aW9uLnBlcm1pc3Npb24gPT09IFwiZ3JhbnRlZFwiKXtcclxuICAgICAgICAgICBuZXcgTm90aWZpY2F0aW9uKCdOb3ZvIERlc2FmaW8nLCB7XHJcbiAgICAgICAgICAgICAgICdib2R5JyA6IGBWYWxlbmRvICR7Y2hhbGxlbmdlc1tyYW5kb21DaGFsbGVuZ2VJbmRleF0uYW1vdW50fSB4cCFgLFxyXG4gICAgICAgICAgICAgICAnaWNvbicgOiBgZmF2aWNvbi5wbmdgXHJcbiAgICAgICAgICAgfSlcclxuICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiByZXNldENoYWxsZW5nZSgpe1xyXG4gICAgICAgIHNldEFjdGl2ZUNoYWxsZW5nZShudWxsKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjbG9zZU1vZGFsKCl7XHJcbiAgICAgICAgc2V0SXNMZXZlbFVwTW9kYWxPcGVuKGZhbHNlKTtcclxuICAgIH1cclxuXHJcbiAgICAvL05vdGlmaWNhw6fDo29cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgTm90aWZpY2F0aW9uLnJlcXVlc3RQZXJtaXNzaW9uKCk7XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgLy9TYWx2YXIgZW0gY29va2llc1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBDb29raWVzLnNldCgnbGV2ZWwnLCBTdHJpbmcobGV2ZWwpKTtcclxuICAgICAgICBDb29raWVzLnNldCgnY3VycmVudEV4cGVyaWVuY2UnLCBTdHJpbmcoY3VycmVudEV4cGVyaWVuY2UpKTtcclxuICAgICAgICBDb29raWVzLnNldCgnY2hhbGxlbmdlQ29tcGxldGVkJywgU3RyaW5nKGNoYWxsZW5nZUNvbXBsZXRlZCkpO1xyXG5cclxuICAgIH0sIFtsZXZlbCwgY3VycmVudEV4cGVyaWVuY2UsIGNoYWxsZW5nZUNvbXBsZXRlZF0pO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPENoYWxsZW5nZXNDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IGxldmVsLCBjdXJyZW50RXhwZXJpZW5jZSwgY2hhbGxlbmdlQ29tcGxldGVkLCBzdGFydE5ld0NoYWxsZW5ncywgYWN0aXZlQ2hhbGxlbmdlLCByZXNldENoYWxsZW5nZSwgZXhwZXJpZW5jZVRvTmV4dExldmVsLCBjb21wbGV0ZUNoYWxsZW5nZSwgY2xvc2VNb2RhbH19PlxyXG4gICAgICAgeyBpc0xldmVsVXBNb2RhbE9wZW4gJiYgPExldmVsVXBNb2RhbC8+IH1cclxuICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgIDwvQ2hhbGxlbmdlc0NvbnRleHQuUHJvdmlkZXI+XHJcbiAgICApO1xyXG59ICIsImltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIFJlYWN0Tm9kZSwgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IENoYWxsZW5nZXNDb250ZXh0IH0gZnJvbSBcIi4vQ2hhbGxlbmdlc0NvbnRleHRcIjtcclxuXHJcbmludGVyZmFjZSBDb3VudGRvd25Db250ZXh0RGF0YSB7XHJcbiAgICBtaW51dGUgOiBudW1iZXI7XHJcbiAgICBzZWNvbmQgOiBudW1iZXI7XHJcbiAgICBoYXNGaW5pc2hlZCA6IGJvb2xlYW47IFxyXG4gICAgaXNBY3RpdmUgOiBib29sZWFuO1xyXG4gICAgcmVzZXRDb3VudGRvd24gOiAoKSA9PiB2b2lkOyBcclxuICAgIHN0YXJ0Q291bnREb3duIDogKCkgPT4gdm9pZDtcclxufVxyXG5cclxuIGV4cG9ydCBjb25zdCBDb3VudGRvd25Db250ZXh0ID0gY3JlYXRlQ29udGV4dCh7fSBhcyBDb3VudGRvd25Db250ZXh0RGF0YSk7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gQ291bnRkb3duUHJvdmlkZXIgKHtjaGlsZHJlbn0gOiB7Y2hpbGRyZW4gOiBSZWFjdE5vZGV9KSB7XHJcblxyXG4gICAgY29uc3QgcmVzZXRDb3VudGRvd24gPSAoKSA9PiB7IHNldElzQWN0aXZlKGZhbHNlKTsgY2xlYXJUaW1lb3V0KGNvdW50ZG93blRpbWVvdXQpOyBzZXRIYXNGaW5pc2hlZChmYWxzZSkgfTtcclxuICAgIGNvbnN0IHN0YXJ0Q291bnREb3duID0gKCkgPT4geyBzZXRJc0FjdGl2ZSh0cnVlKSB9O1xyXG5cclxuICAgIGxldCBjb3VudGRvd25UaW1lb3V0IDogTm9kZUpTLlRpbWVvdXQ7XHJcbiAgICBjb25zdCB7c3RhcnROZXdDaGFsbGVuZ3N9ID0gdXNlQ29udGV4dChDaGFsbGVuZ2VzQ29udGV4dCk7XHJcbiAgICBcclxuICAgIGNvbnN0IFt0aW1lLCBzZXRUaW1lXSA9IHVzZVN0YXRlPG51bWJlcj4oMjUgKiA2MCk7XHJcbiAgICBjb25zdCBbaXNBY3RpdmUsIHNldElzQWN0aXZlXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcclxuICAgIGNvbnN0IFtoYXNGaW5pc2hlZCwgc2V0SGFzRmluaXNoZWRdID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xyXG5cclxuICAgIGNvbnN0IG1pbnV0ZSA9IE1hdGguZmxvb3IodGltZS82MCk7IC8vQXJyZWRvbmRhIHBhcmEgYmFpeG9cclxuICAgIGNvbnN0IHNlY29uZCA9IHRpbWUgJSA2MDsgLy9PIHJlc3RvIHF1ZSBzZXLDoSBvcyBzZWd1bmRvc1xyXG5cclxuICAgIC8vUGFyYSBwYXJhciBlIGNvbnRpbnVhciBvIGNyb25vbWV0cm9cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYoIGlzQWN0aXZlICYmIHRpbWUgPiAwICl7XHJcbiAgICAgICAgICAgIGNvdW50ZG93blRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHNldFRpbWUodGltZSAtIDEpO1xyXG4gICAgICAgICAgICB9LDEwMDApO1xyXG4gICAgICAgIH1lbHNlIGlmKGlzQWN0aXZlICYmIHRpbWUgPT09IDApe1xyXG4gICAgICAgICAgICBzZXRUaW1lKDI1ICogNjApO1xyXG4gICAgICAgICAgICBzZXRJc0FjdGl2ZShmYWxzZSk7XHJcbiAgICAgICAgICAgIHNldEhhc0ZpbmlzaGVkKHRydWUpO1xyXG4gICAgICAgICAgICBzdGFydE5ld0NoYWxsZW5ncygpO1xyXG4gICAgICAgIH1lbHNlXHJcbiAgICAgICAgICAgIHNldFRpbWUoMC4xICogNjApO1xyXG4gICAgXHJcbiAgICB9LCBbaXNBY3RpdmUsIHRpbWVdKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgICA8Q291bnRkb3duQ29udGV4dC5Qcm92aWRlciB2YWx1ZSA9IHt7bWludXRlLCBzZWNvbmQsIGhhc0ZpbmlzaGVkLCBpc0FjdGl2ZSwgcmVzZXRDb3VudGRvd24sIHN0YXJ0Q291bnREb3dufX0+XHJcbiAgICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgIDwvQ291bnRkb3duQ29udGV4dC5Qcm92aWRlcj5cclxuICAgICk7XHJcbn0iLCJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IHtHZXRTZXJ2ZXJTaWRlUHJvcHN9IGZyb20gJ25leHQnO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9ob21lLm1vZHVsZS5jc3MnO1xuaW1wb3J0IHsgRXhwZXJpZW5jZUJhciB9IGZyb20gXCIuLi9jb21wb25lbnRzL0V4cGVyaWVuY2VCYXJcIjtcbmltcG9ydCB7IFByb2ZpbGUgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9Qcm9maWxlXCI7XG5pbXBvcnQgeyBDb21wbGV0ZWRDaGFsbGVuZ2VzIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvQ29tcGxldGVkQ2hhbGxlbmdlc1wiO1xuaW1wb3J0IHsgQ291bnRkb3duIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvQ291bnRkb3duXCI7XG5pbXBvcnQgeyBDaGFsbGVuZ2VCb3ggfSBmcm9tIFwiLi4vY29tcG9uZW50cy9DaGFsbGVuZ2VCb3hcIjtcbmltcG9ydCB7IENvdW50ZG93blByb3ZpZGVyIH0gZnJvbSAnLi4vY29udGV4dC9Db3VudGRvd25Db250ZXh0JztcbmltcG9ydCB7IENoYWxsZW5nZXNQcm92aWRlciB9IGZyb20gJy4uL2NvbnRleHQvQ2hhbGxlbmdlc0NvbnRleHQnO1xuXG5pbnRlcmZhY2UgSG9tZVByb3BzIHtcbiAgbGV2ZWwgICAgICAgICAgICAgIDogbnVtYmVyO1xuICBjdXJyZW50RXhwZXJpZW5jZSAgOiBudW1iZXI7XG4gIGNoYWxsZW5nZUNvbXBsZXRlZCA6IG51bWJlcjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZShwcm9wcyA6IEhvbWVQcm9wcykge1xuICByZXR1cm4gKFxuXG4gICAgPENoYWxsZW5nZXNQcm92aWRlciBsZXZlbD17cHJvcHMubGV2ZWx9IGN1cnJlbnRFeHBlcmllbmNlPXtwcm9wcy5jdXJyZW50RXhwZXJpZW5jZX0gY2hhbGxlbmdlQ29tcGxldGVkPXtwcm9wcy5jaGFsbGVuZ2VDb21wbGV0ZWR9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgIDxIZWFkPlxuICAgICAgPHRpdGxlPiBJbmljaW8gfCBNb3ZlaXQgPC90aXRsZT5cbiAgICA8L0hlYWQ+XG4gICAgICA8RXhwZXJpZW5jZUJhci8+XG4gICAgICA8Q291bnRkb3duUHJvdmlkZXI+XG4gICAgICAgIDxzZWN0aW9uPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8UHJvZmlsZS8+XG4gICAgICAgICAgICA8Q29tcGxldGVkQ2hhbGxlbmdlcy8+XG4gICAgICAgICAgICA8Q291bnRkb3duLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPENoYWxsZW5nZUJveC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgIDwvQ291bnRkb3duUHJvdmlkZXI+XG4gICAgPC9kaXY+XG4gICAgPC9DaGFsbGVuZ2VzUHJvdmlkZXI+XG4gIClcbn1cblxuLy9FIGFxdWkgb25kZSB2YW1vcyBwZWdhciBvcyBkYWRvcyBkbyBiYWNrIGVuZFxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wcyA6IEdldFNlcnZlclNpZGVQcm9wcyA9IGFzeW5jIChjdHgpID0+IHsgXG4gIGNvbnN0IHtsZXZlbCwgY3VycmVudEV4cGVyaWVuY2UsIGNoYWxsZW5nZUNvbXBsZXRlZH0gPSBjdHgucmVxLmNvb2tpZXM7XG4gIHJldHVybiB7XG4gICAgcHJvcHMgOiB7IGxldmVsICAgICAgICAgICAgICA6IE51bWJlcihsZXZlbCksXG4gICAgICAgICAgICAgIGN1cnJlbnRFeHBlcmllbmNlICA6IE51bWJlcihjdXJyZW50RXhwZXJpZW5jZSksXG4gICAgICAgICAgICAgIGNoYWxsZW5nZUNvbXBsZXRlZCA6IE51bWJlcihjaGFsbGVuZ2VDb21wbGV0ZWQpfVxuICB9O1xuXG59IiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY2hhbGxlbmdlQm94Q29udGFpbmVyXCI6IFwiY2hhbGxlbmdlLWJveF9jaGFsbGVuZ2VCb3hDb250YWluZXJfXzJrRjZCXCIsXG5cdFwiY2hhbGxlbmdlTm90QWN0aXZlXCI6IFwiY2hhbGxlbmdlLWJveF9jaGFsbGVuZ2VOb3RBY3RpdmVfXzJZOUZzXCIsXG5cdFwiY2hhbGxlbmdlQWN0aXZlXCI6IFwiY2hhbGxlbmdlLWJveF9jaGFsbGVuZ2VBY3RpdmVfXzNMTXVRXCIsXG5cdFwiY2hhbGxlbmdlRmFsZWlkQnV0dG9uXCI6IFwiY2hhbGxlbmdlLWJveF9jaGFsbGVuZ2VGYWxlaWRCdXR0b25fX2M3aUZhXCIsXG5cdFwiY2hhbGxlbmdlU3VjY2VlZGVkQnV0dG9uXCI6IFwiY2hhbGxlbmdlLWJveF9jaGFsbGVuZ2VTdWNjZWVkZWRCdXR0b25fXzFaZzhyXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb21wbGV0ZWRDaGFsbGVuZ2VzQ29udGFpbmVyXCI6IFwiY29tcGxldGVkLWNoYWxsZW5nZXNfY29tcGxldGVkQ2hhbGxlbmdlc0NvbnRhaW5lcl9fbEs2c0JcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvdW50RG93bkNvbnRhaW5lclwiOiBcImNvdW50LWRvd25fY291bnREb3duQ29udGFpbmVyX18zNVdId1wiLFxuXHRcIkNvdW50RG93bkJ1dHRvblwiOiBcImNvdW50LWRvd25fQ291bnREb3duQnV0dG9uX19QV1JLQVwiLFxuXHRcIkNvdW50RG93bkJ1dHRvbkFjdGl2ZVwiOiBcImNvdW50LWRvd25fQ291bnREb3duQnV0dG9uQWN0aXZlX192c2luVVwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiZXhwZXJpZW5jZUJhclwiOiBcImV4cGVyaWVuY2UtYmFyX2V4cGVyaWVuY2VCYXJfXzJMWHBFXCIsXG5cdFwiY3VycmVudEV4cGVyaWVuY2VcIjogXCJleHBlcmllbmNlLWJhcl9jdXJyZW50RXhwZXJpZW5jZV9fMTZkTHBcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcImhvbWVfY29udGFpbmVyX18zc1VlZFwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwib3ZlcmxheVwiOiBcImxldmVsdXAtbW9kYWxfb3ZlcmxheV9fM0Y3RFVcIixcblx0XCJjb250YWluZXJcIjogXCJsZXZlbHVwLW1vZGFsX2NvbnRhaW5lcl9fbFJ1enBcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInByb2ZpbGVDb3RhaW5lclwiOiBcInByb2ZpbGVfcHJvZmlsZUNvdGFpbmVyX18ybk8zS1wiXG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwianMtY29va2llXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==