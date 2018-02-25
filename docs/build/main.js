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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _class = function () {
  function _class(livePoint, item) {
    _classCallCheck(this, _class);

    this.livePoint = livePoint;
    this.item = item;
    this.minute = 60;
    this.hour = this.minute * 60;
    this.day = this.hour * 24;
  }

  _createClass(_class, [{
    key: "calcRequireLiveNum",
    value: function calcRequireLiveNum(finishPoint, currentPoint, currentItem) {
      finishPoint = parseInt(finishPoint, 10);
      currentPoint = parseInt(currentPoint, 10);
      currentItem = parseInt(currentItem, 10);
      var requireLiveNum = { normal: 0, event: 0 };
      var getPoint = currentPoint;
      while (getPoint < finishPoint) {
        if (currentItem >= this.item.use) {
          getPoint += this.livePoint.event;
          currentItem -= this.item.use;
          requireLiveNum.event++;
        } else {
          getPoint += this.livePoint.normal;
          currentItem += this.item.get;
          requireLiveNum.normal++;
        }
      }
      return requireLiveNum;
    }
  }, {
    key: "calcRequireTime",
    value: function calcRequireTime(requireLiveNum, playLiveTime) {
      var requireTime = {};
      requireTime.day = 0;
      requireTime.hour = 0;
      requireTime.minute = 0;
      requireTime.second = (requireLiveNum.normal + requireLiveNum.event) * playLiveTime;
      while (requireTime.second >= this.day) {
        requireTime.second -= this.day;
        requireTime.day++;
      }
      while (requireTime.second >= this.hour) {
        requireTime.second -= this.hour;
        requireTime.hour++;
      }
      while (requireTime.second >= this.minute) {
        requireTime.second -= this.minute;
        requireTime.minute++;
      }
      return requireTime.day + "日" + requireTime.hour + "時間" + requireTime.minute + "分" + requireTime.second + "秒";
    }
  }]);

  return _class;
}();

exports.default = _class;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _calc = __webpack_require__(0);

var _calc2 = _interopRequireDefault(_calc);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MIN_INPUT = 0;
var MAX_INPUT = 9999999999;

var GET_POINT_EVENTLIVE = 320;
var GET_POINT_NORMALLIVE = 53;
var GET_ITEM = 53;
var USE_ITEM = 150;
var USE_STAMINA = 19;
var LIVE_TIME_SECOND = 180;

var MINUTE = 60;
var HOUR = MINUTE * 60;
var DAY = HOUR * 24;

var app = new Vue({
  el: "#app",
  data: {
    enabledCalcButton: true,
    displayedOption: false,
    finishPoint: "18000",
    currentPoint: "0",
    currentItem: "0",
    staminaList: [19, 18, 17, 16, 15, 14, 13, 12, 11, 10],
    scaleList: {
      normal: [{ text: "1倍", value: 1 }, { text: "2倍", value: 2 }],
      event: [{ text: "1倍", value: 1 }, { text: "2倍", value: 2 }, { text: "4倍", value: 4 }]
    },
    scoreList: ["S", "A", "B", "C"],
    minutesList: [1, 2, 3, 4],
    secondsList: [],
    selected: {
      normal: {
        stamina: 19,
        scale: 1,
        score: "S"
      },
      event: {
        difficulty: "MASTER",
        scale: 1,
        score: "S"
      },
      playTime: {
        minutes: 4,
        seconds: 0
      }
    },
    requireLiveNum: {
      normal: "",
      event: ""
    },
    requireEventItemNum: "",
    requireStamina: "",
    requireTime: ""
  },
  created: function created() {
    for (var i = 0; i < MINUTE; i++) {
      this.secondsList.push(i);
    }
  },
  watch: {
    finishPoint: function finishPoint() {
      this.enabledCalcButton = true;
    },
    currentPoint: function currentPoint() {
      this.enabledCalcButton = true;
    },
    currentItem: function currentItem() {
      this.enabledCalcButton = true;
    }
  },
  methods: {
    toggleOption: function toggleOption() {
      this.displayedOption = !this.displayedOption;
    },
    calc: function calc() {
      this.enabledCalcButton = false;
      if (this.finishPoint > MAX_INPUT || this.currentPoint > MAX_INPUT || this.currentItem > MAX_INPUT) {
        alert("数値は" + MAX_INPUT + "以下で入力してください");
        throw new Error("数値は" + MAX_INPUT + "以上で入力してください");
      } else if (String(this.finishPoint).search(/^[0-9]+$/) < MIN_INPUT || String(this.currentPoint).search(/^[0-9]+$/) < MIN_INPUT || String(this.currentItem).search(/^[0-9]+$/) < MIN_INPUT) {
        alert("数値は" + MIN_INPUT + "以上で入力してください");
        throw new Error("数値は" + MIN_INPUT + "以上で入力してください");
      }
      var calcData = new _calc2.default({ normal: GET_POINT_NORMALLIVE, event: GET_POINT_EVENTLIVE }, { get: GET_ITEM, use: USE_ITEM });
      this.requireLiveNum = calcData.calcRequireLiveNum(this.finishPoint, this.currentPoint, this.currentItem);
      this.requireEventItemNum = this.requireLiveNum.event * USE_ITEM;
      this.requireStamina = this.requireLiveNum.normal * USE_STAMINA;
      this.requireTime = calcData.calcRequireTime(this.requireLiveNum, LIVE_TIME_SECOND);

      console.log(this.selected.normal.stamina, this.selected.normal.scale, this.selected.normal.score);
      console.log(this.selected.event.difficulty, this.selected.event.scale, this.selected.event.score);
      console.log(this.selected.playTime.minutes, this.selected.playTime.seconds);
    },
    calcGetPoint: function calcGetPoint() {}
  }
});

/***/ })
/******/ ]);