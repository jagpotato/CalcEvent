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
/******/ 	return __webpack_require__(__webpack_require__.s = "./docs/js/calc.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./docs/js/calc.js":
/*!*************************!*\
  !*** ./docs/js/calc.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar _class = function () {\n  function _class(livePoint, item) {\n    _classCallCheck(this, _class);\n\n    this.livePoint = livePoint;\n    this.item = item;\n    this.minute = 60;\n    this.hour = this.minute * 60;\n    this.day = this.hour * 24;\n  }\n\n  _createClass(_class, [{\n    key: \"calcRequireLiveNum\",\n    value: function calcRequireLiveNum(finishPoint, currentPoint, currentItem) {\n      finishPoint = parseInt(finishPoint, 10);\n      currentPoint = parseInt(currentPoint, 10);\n      currentItem = parseInt(currentItem, 10);\n      var requireLiveNum = { normal: 0, event: 0 };\n      var getPoint = currentPoint;\n      while (getPoint < finishPoint) {\n        if (currentItem >= this.item.use) {\n          getPoint += this.livePoint.event;\n          currentItem -= this.item.use;\n          requireLiveNum.event++;\n        } else {\n          getPoint += this.livePoint.normal;\n          currentItem += this.item.get;\n          requireLiveNum.normal++;\n        }\n      }\n      return requireLiveNum;\n    }\n  }, {\n    key: \"calcRequireTime\",\n    value: function calcRequireTime(requireLiveNum, playLiveTime) {\n      var requireTime = {};\n      requireTime.day = 0;\n      requireTime.hour = 0;\n      requireTime.minute = 0;\n      requireTime.second = (requireLiveNum.normal + requireLiveNum.event) * playLiveTime;\n      while (requireTime.second >= this.day) {\n        requireTime.second -= this.day;\n        requireTime.day++;\n      }\n      while (requireTime.second >= this.hour) {\n        requireTime.second -= this.hour;\n        requireTime.hour++;\n      }\n      while (requireTime.second >= this.minute) {\n        requireTime.second -= this.minute;\n        requireTime.minute++;\n      }\n      return requireTime.day + \"日\" + requireTime.hour + \"時間\" + requireTime.minute + \"分\" + requireTime.second + \"秒\";\n    }\n  }]);\n\n  return _class;\n}();\n\nexports.default = _class;\n\n//# sourceURL=webpack:///./docs/js/calc.js?");

/***/ })

/******/ });