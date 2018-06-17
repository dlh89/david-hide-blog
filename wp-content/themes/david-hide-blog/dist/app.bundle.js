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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./sass/main.scss":
/*!************************!*\
  !*** ./sass/main.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./sass/main.scss?");

/***/ }),

/***/ "./scripts/app.js":
/*!************************!*\
  !*** ./scripts/app.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_Navigation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/Navigation */ \"./scripts/modules/Navigation.js\");\n/* harmony import */ var _modules_Search__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/Search */ \"./scripts/modules/Search.js\");\n\n\n\nconst navigation = new _modules_Navigation__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\nconst search = new _modules_Search__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n\n//# sourceURL=webpack:///./scripts/app.js?");

/***/ }),

/***/ "./scripts/modules/Navigation.js":
/*!***************************************!*\
  !*** ./scripts/modules/Navigation.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Navigation; });\nclass Navigation {\n  constructor() {\n    this.toggleBtn = document.querySelector('.nav__toggle-button');\n    this.burger = document.querySelector('.nav__burger');\n    this.navList = document.querySelector('.nav__list');\n    this.events();\n  }\n  events() {\n    this.toggleBtn.addEventListener('click', this.toggleNav.bind(this));\n  }\n  toggleNav() {\n    this.burger.classList.toggle('nav__burger--active');\n    this.toggleBtn.classList.toggle('nav__toggle-button--active');\n\n    if (!this.navList.style.maxHeight) {\n      this.navList.style.maxHeight = `${this.navList.scrollHeight}px`;\n    } else {\n      this.navList.style.maxHeight = null;\n    }\n  }\n}\n\n//# sourceURL=webpack:///./scripts/modules/Navigation.js?");

/***/ }),

/***/ "./scripts/modules/Search.js":
/*!***********************************!*\
  !*** ./scripts/modules/Search.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Search; });\nclass Search {\n  constructor() {\n    this.searchButton = document.querySelector('#searchButton');\n    this.searchInput = document.querySelector('.search__input');\n    this.search = document.querySelector('.search');\n    this.searchActive = false;\n    this.typingTimer;\n    this.resultsDiv = document.querySelector('.search__results');\n    this.spinnerVisible = false;\n    this.previousValue;\n    this.events();\n  }\n  events() {\n    this.searchButton.addEventListener('click', this.activateSearch.bind(this));\n    this.searchInput.addEventListener('keyup', this.typingLogic.bind(this));\n  }\n  typingLogic(e) {\n    if (this.searchInput.value !== this.previousValue) {\n      clearTimeout(this.typingTimer);\n\n      if (this.searchInput.value) {\n        if (!this.spinnerVisible) {\n          this.resultsDiv.innerHTML = '<div class=\"u-spinner\"></div>';\n          this.spinnerVisible = true;\n        }\n        this.typingTimer = setTimeout(this.getResults.bind(this), 1000);\n        this.previousValue = this.searchInput.value;\n      } else {\n        this.resultsDiv.innerHTML = '';\n        this.spinnerVisible = false;\n      }\n    }\n    // close search if esc pressed\n    if (e.keyCode === 27) {\n      this.closeSearch();\n    }\n  }\n  getResults() {\n    return new Promise((resolve, reject) => {\n      // Make the AJAX request to WordPress API\n      const xhr = new XMLHttpRequest();\n      const url = `${blogData.root_url}/wp-json/dh/v1/search?term=${this.searchInput.value}`;\n      xhr.open('GET', url, true);\n      xhr.setRequestHeader('Content-Type', 'application/json');\n      xhr.onreadystatechange = () => {\n        if (xhr.readyState === 4) {\n          if (xhr.status === 200) {\n            const results = JSON.parse(xhr.responseText);\n            this.resultsDiv.innerHTML = '';\n            this.spinnerVisible = false;\n            resolve(results);\n          } else {\n            reject();\n          }\n        }\n      };\n      xhr.send();\n    }).then(this.updateResultsDivSuccess.bind(this), this.updateResultsDivFailure.bind(this));\n  }\n  updateResultsDivSuccess(results) {\n    if (this.searchInput.value) {\n      if (results.length) {\n        this.resultsDiv.innerHTML = `\n        <ul>\n          ${results.map(post => `<a href=\"${post.link}\" class=\"search__link\"><li class=\"search__item\">${post.title} <span class=\"search__category\">${post.type}</span></li></a>`).join('')}\n        </ul>`;\n      } else {\n        this.resultsDiv.innerHTML = '<li class=\"search__item\">No results found</li>';\n      }\n    }\n  }\n  updateResultsDivFailure() {\n    this.resultsDiv.innerHTML = '<li class=\"search__item\">There was an error retrieving search data.</li>';\n  }\n  activateSearch(e) {\n    e.preventDefault();\n    this.searchButton.classList.toggle('nav__search-button--active');\n    this.search.classList.toggle('search--active');\n    if (!this.search.style.maxHeight) {\n      this.search.style.maxHeight = `${this.search.scrollHeight}px`;\n      this.searchInput.setAttribute('aria-hidden', false);\n      this.searchInput.focus();\n      this.searchActive = true;\n    } else {\n      this.closeSearch();\n    }\n  }\n  closeSearch() {\n    this.search.style.maxHeight = null;\n    this.searchInput.setAttribute('aria-hidden', true);\n    this.resultsDiv.innerHTML = '';\n    this.searchActive = false;\n    this.searchInput.value = '';\n    this.searchButton.classList.remove('nav__search-button--active');\n    this.search.classList.remove('search--active');\n  }\n}\n\n//# sourceURL=webpack:///./scripts/modules/Search.js?");

/***/ }),

/***/ 0:
/*!***********************************************!*\
  !*** multi ./scripts/app.js ./sass/main.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./scripts/app.js */\"./scripts/app.js\");\nmodule.exports = __webpack_require__(/*! ./sass/main.scss */\"./sass/main.scss\");\n\n\n//# sourceURL=webpack:///multi_./scripts/app.js_./sass/main.scss?");

/***/ })

/******/ });