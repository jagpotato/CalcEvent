/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./docs/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./docs/js/calc.js":
/*!*************************!*\
  !*** ./docs/js/calc.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _default; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar _default =\n/*#__PURE__*/\nfunction () {\n  function _default(livePoint, item) {\n    _classCallCheck(this, _default);\n\n    this.livePoint = livePoint;\n    this.item = item;\n    this.minute = 60;\n    this.hour = this.minute * 60;\n    this.day = this.hour * 24;\n  }\n\n  _createClass(_default, [{\n    key: \"calcRequireLiveNum\",\n    value: function calcRequireLiveNum(finishPoint, currentPoint, currentItem) {\n      finishPoint = parseInt(finishPoint, 10);\n      currentPoint = parseInt(currentPoint, 10);\n      currentItem = parseInt(currentItem, 10);\n      var requireLiveNum = {\n        normal: 0,\n        event: 0\n      };\n      var getPoint = currentPoint;\n\n      while (getPoint < finishPoint) {\n        if (currentItem >= this.item.use) {\n          getPoint += this.livePoint.event;\n          currentItem -= this.item.use;\n          requireLiveNum.event++;\n        } else {\n          getPoint += this.livePoint.normal;\n          currentItem += this.item.get;\n          requireLiveNum.normal++;\n        }\n      }\n\n      return requireLiveNum;\n    }\n  }, {\n    key: \"calcRequireTime\",\n    value: function calcRequireTime(requireLiveNum, playLiveTime) {\n      var requireTime = {};\n      requireTime.day = 0;\n      requireTime.hour = 0;\n      requireTime.minute = 0;\n      requireTime.second = (requireLiveNum.normal + requireLiveNum.event) * playLiveTime;\n\n      while (requireTime.second >= this.day) {\n        requireTime.second -= this.day;\n        requireTime.day++;\n      }\n\n      while (requireTime.second >= this.hour) {\n        requireTime.second -= this.hour;\n        requireTime.hour++;\n      }\n\n      while (requireTime.second >= this.minute) {\n        requireTime.second -= this.minute;\n        requireTime.minute++;\n      }\n\n      return requireTime.day + \"日\" + requireTime.hour + \"時間\" + requireTime.minute + \"分\" + requireTime.second + \"秒\";\n    }\n  }]);\n\n  return _default;\n}();\n\n\n\n//# sourceURL=webpack:///./docs/js/calc.js?");

/***/ }),

/***/ "./docs/js/main.js":
/*!*************************!*\
  !*** ./docs/js/main.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _calc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calc */ \"./docs/js/calc.js\");\n\nvar MIN_INPUT = 0;\nvar MAX_INPUT = 9999999999;\nvar app = new Vue({\n  el: \"#app\",\n  data: {\n    displayedOption: false,\n    finishPoint: \"18000\",\n    currentPoint: \"0\",\n    currentItem: \"0\",\n    staminaList: [19, 18, 17, 16, 15, 14, 13, 12, 11, 10],\n    scaleList: {\n      normal: [{\n        text: \"1倍\",\n        value: 1\n      }, {\n        text: \"2倍\",\n        value: 2\n      }],\n      event: [{\n        text: \"1倍\",\n        value: 1\n      }, {\n        text: \"2倍\",\n        value: 2\n      }, {\n        text: \"4倍\",\n        value: 4\n      }]\n    },\n    scoreList: [\"S\", \"A\", \"B\", \"C\"],\n    minutesList: [1, 2, 3, 4],\n    secondsList: [],\n    useItemList: {\n      \"MASTER/MASTER+\": 150,\n      \"PRO\": 120,\n      \"REGULAR\": 90,\n      \"DEBUT\": 75\n    },\n    selected: {\n      normal: {\n        stamina: 19,\n        scale: 1,\n        score: \"S\"\n      },\n      event: {\n        difficulty: \"MASTER/MASTER+\",\n        scale: 1,\n        score: \"S\"\n      },\n      playTime: {\n        minutes: 3,\n        seconds: 0\n      }\n    },\n    requireLiveNum: {\n      normal: \"\",\n      event: \"\"\n    },\n    requireEventItemNum: \"\",\n    requireStamina: \"\",\n    requireTime: \"\"\n  },\n  created: function created() {\n    for (var i = 0; i < 60; i++) {\n      this.secondsList.push(i);\n    }\n  },\n  methods: {\n    toggleOption: function toggleOption() {\n      this.displayedOption = !this.displayedOption;\n    },\n    calc: function calc() {\n      if (this.finishPoint > MAX_INPUT || this.currentPoint > MAX_INPUT || this.currentItem > MAX_INPUT) {\n        alert(\"数値は\" + MAX_INPUT + \"以下で入力してください\");\n        throw new Error(\"数値は\" + MAX_INPUT + \"以上で入力してください\");\n      } else if (String(this.finishPoint).search(/^[0-9]+$/) < MIN_INPUT || String(this.currentPoint).search(/^[0-9]+$/) < MIN_INPUT || String(this.currentItem).search(/^[0-9]+$/) < MIN_INPUT) {\n        alert(\"数値は\" + MIN_INPUT + \"以上で入力してください\");\n        throw new Error(\"数値は\" + MIN_INPUT + \"以上で入力してください\");\n      }\n\n      var getItem = this.calcGetItem(this.selected.normal.stamina, this.selected.normal.scale, this.selected.normal.score);\n      var normalLivePoint = getItem / this.selected.normal.scale;\n      var eventLivePoint = this.calcGetPointEvent(this.selected.event.difficulty, this.selected.event.scale, this.selected.event.score);\n      var useItem = this.useItemList[this.selected.event.difficulty] * this.selected.event.scale;\n      var calcData = new _calc__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n        normal: normalLivePoint,\n        event: eventLivePoint\n      }, {\n        get: getItem,\n        use: useItem\n      });\n      this.requireLiveNum = calcData.calcRequireLiveNum(this.finishPoint, this.currentPoint, this.currentItem);\n      this.requireEventItemNum = this.requireLiveNum.event * useItem;\n      this.requireStamina = this.requireLiveNum.normal * this.selected.normal.stamina * this.selected.normal.scale;\n      this.requireTime = calcData.calcRequireTime(this.requireLiveNum, this.selected.playTime.minutes * 60 + this.selected.playTime.seconds);\n    },\n    calcGetItem: function calcGetItem(useStamina, scale, score) {\n      var itemS = Math.ceil(useStamina * 3.1 - 6.5);\n\n      switch (score) {\n        case \"S\":\n          return itemS * scale;\n          break;\n\n        case \"A\":\n          return Math.ceil(itemS * 0.95) * scale;\n          break;\n\n        case \"B\":\n          return Math.ceil(itemS * 0.90) * scale;\n          break;\n\n        case \"C\":\n          return Math.ceil(itemS * 0.85) * scale;\n          break;\n\n        default:\n          break;\n      }\n    },\n    calcGetPointEvent: function calcGetPointEvent(difficulty, scale, score) {\n      var EVENTLIVE_POINT = {\n        \"MASTER/MASTER+\": {\n          \"S\": 320,\n          \"A\": 304,\n          \"B\": 288,\n          \"C\": 272\n        },\n        \"PRO\": {\n          \"S\": 240,\n          \"A\": 228,\n          \"B\": 216,\n          \"C\": 204\n        },\n        \"REGULAR\": {\n          \"S\": 170,\n          \"A\": 162,\n          \"B\": 153,\n          \"C\": 145\n        },\n        \"DEBUT\": {\n          \"S\": 130,\n          \"A\": 124,\n          \"B\": 117,\n          \"C\": 111\n        }\n      };\n      return EVENTLIVE_POINT[difficulty][score] * scale;\n    }\n  }\n});\n\n//# sourceURL=webpack:///./docs/js/main.js?");

/***/ })

/******/ });