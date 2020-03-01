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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_hideDisplayPrice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/hideDisplayPrice */ \"./src/js/hideDisplayPrice.js\");\n/* harmony import */ var _js_addOrRemoveHighlight__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/addOrRemoveHighlight */ \"./src/js/addOrRemoveHighlight.js\");\n/* harmony import */ var _js_togglePrice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/togglePrice */ \"./src/js/togglePrice.js\");\n\n\n // Window load - make sure that only one of the price plans are showed on load\n\n(function loadPrice() {\n  if (localStorage.getItem('price') === '.monthly') {\n    Object(_js_hideDisplayPrice__WEBPACK_IMPORTED_MODULE_0__[\"hidePrice\"])('.monthly');\n    Object(_js_addOrRemoveHighlight__WEBPACK_IMPORTED_MODULE_1__[\"addHighlight\"])('.left-element p');\n    Object(_js_addOrRemoveHighlight__WEBPACK_IMPORTED_MODULE_1__[\"removeHighlight\"])('.right-element p');\n    document.querySelector('#slider').checked = false;\n  } else {\n    Object(_js_hideDisplayPrice__WEBPACK_IMPORTED_MODULE_0__[\"hidePrice\"])('.anually');\n    Object(_js_addOrRemoveHighlight__WEBPACK_IMPORTED_MODULE_1__[\"addHighlight\"])('.right-element p');\n    Object(_js_addOrRemoveHighlight__WEBPACK_IMPORTED_MODULE_1__[\"removeHighlight\"])('.left-element p');\n    document.querySelector('#slider').checked = true;\n  }\n})();\n\ndocument.querySelector('#slider').addEventListener('change', _js_togglePrice__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/js/addOrRemoveHighlight.js":
/*!****************************************!*\
  !*** ./src/js/addOrRemoveHighlight.js ***!
  \****************************************/
/*! exports provided: addHighlight, removeHighlight */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addHighlight\", function() { return addHighlight; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"removeHighlight\", function() { return removeHighlight; });\nvar addHighlight = function addHighlight(item) {\n  document.querySelector(item).style.color = '#6d708d';\n};\nvar removeHighlight = function removeHighlight(item) {\n  document.querySelector(item).style.color = '#b3b5c6';\n};\n\n//# sourceURL=webpack:///./src/js/addOrRemoveHighlight.js?");

/***/ }),

/***/ "./src/js/hideDisplayPrice.js":
/*!************************************!*\
  !*** ./src/js/hideDisplayPrice.js ***!
  \************************************/
/*! exports provided: displayPrice, hidePrice */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"displayPrice\", function() { return displayPrice; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"hidePrice\", function() { return hidePrice; });\n// Functions to execute on toggle and window load\nvar displayPrice = function displayPrice(pricePlan) {\n  localStorage.setItem('price', pricePlan);\n  document.querySelectorAll(pricePlan).forEach(function (price) {\n    price.classList.remove('hide');\n  });\n};\nvar hidePrice = function hidePrice(pricePlan) {\n  localStorage.setItem('price', pricePlan);\n  document.querySelectorAll(pricePlan).forEach(function (price) {\n    price.classList.add('hide');\n  });\n};\n\n//# sourceURL=webpack:///./src/js/hideDisplayPrice.js?");

/***/ }),

/***/ "./src/js/togglePrice.js":
/*!*******************************!*\
  !*** ./src/js/togglePrice.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _hideDisplayPrice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hideDisplayPrice */ \"./src/js/hideDisplayPrice.js\");\n/* harmony import */ var _addOrRemoveHighlight__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addOrRemoveHighlight */ \"./src/js/addOrRemoveHighlight.js\");\n\n // Toggle by user\n\nvar togglePrice = function togglePrice() {\n  if (localStorage.getItem('price') === '.monthly') {\n    Object(_hideDisplayPrice__WEBPACK_IMPORTED_MODULE_0__[\"displayPrice\"])('.monthly');\n    Object(_hideDisplayPrice__WEBPACK_IMPORTED_MODULE_0__[\"hidePrice\"])('.anually');\n    Object(_addOrRemoveHighlight__WEBPACK_IMPORTED_MODULE_1__[\"addHighlight\"])('.right-element p');\n    Object(_addOrRemoveHighlight__WEBPACK_IMPORTED_MODULE_1__[\"removeHighlight\"])('.left-element p');\n  } else {\n    Object(_hideDisplayPrice__WEBPACK_IMPORTED_MODULE_0__[\"displayPrice\"])('.anually');\n    Object(_hideDisplayPrice__WEBPACK_IMPORTED_MODULE_0__[\"hidePrice\"])('.monthly');\n    Object(_addOrRemoveHighlight__WEBPACK_IMPORTED_MODULE_1__[\"addHighlight\"])('.left-element p');\n    Object(_addOrRemoveHighlight__WEBPACK_IMPORTED_MODULE_1__[\"removeHighlight\"])('.right-element p');\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (togglePrice);\n\n//# sourceURL=webpack:///./src/js/togglePrice.js?");

/***/ })

/******/ });