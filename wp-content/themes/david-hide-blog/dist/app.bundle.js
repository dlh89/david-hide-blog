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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _Navigation = __webpack_require__(/*! ./modules/Navigation */ \"./scripts/modules/Navigation.js\");\n\nvar _Navigation2 = _interopRequireDefault(_Navigation);\n\nvar _Search = __webpack_require__(/*! ./modules/Search */ \"./scripts/modules/Search.js\");\n\nvar _Search2 = _interopRequireDefault(_Search);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar navigation = new _Navigation2.default();\nvar search = new _Search2.default();\n\n//# sourceURL=webpack:///./scripts/app.js?");

/***/ }),

/***/ "./scripts/modules/Navigation.js":
/*!***************************************!*\
  !*** ./scripts/modules/Navigation.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Navigation = function () {\n  function Navigation() {\n    _classCallCheck(this, Navigation);\n\n    this.toggleBtn = document.querySelector('.nav__toggle-button');\n    this.burger = document.querySelector('.nav__burger');\n    this.navList = document.querySelector('.nav__list');\n    this.events();\n  }\n\n  _createClass(Navigation, [{\n    key: 'events',\n    value: function events() {\n      this.toggleBtn.addEventListener('click', this.toggleNav.bind(this));\n    }\n  }, {\n    key: 'toggleNav',\n    value: function toggleNav() {\n      this.navbarActive = true;\n      this.burger.classList.toggle('nav__burger--active');\n      this.toggleBtn.classList.toggle('nav__toggle-button--active');\n\n      if (!this.navList.style.maxHeight) {\n        this.navList.style.maxHeight = this.navList.scrollHeight + 'px';\n      } else {\n        this.navList.style.maxHeight = null;\n      }\n    }\n  }]);\n\n  return Navigation;\n}();\n\nexports.default = Navigation;\n\n//# sourceURL=webpack:///./scripts/modules/Navigation.js?");

/***/ }),

/***/ "./scripts/modules/Search.js":
/*!***********************************!*\
  !*** ./scripts/modules/Search.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Search = function () {\n  function Search() {\n    _classCallCheck(this, Search);\n\n    console.log('hello from search');\n    this.searchButton = document.querySelector('#searchButton');\n    // this.search = document.querySelector('.search');\n    this.events();\n  }\n\n  _createClass(Search, [{\n    key: 'events',\n    value: function events() {\n      this.searchButton.addEventListener('click', this.activateSearch);\n    }\n  }, {\n    key: 'activateSearch',\n    value: function activateSearch() {\n      console.log(this.search);\n      var search = document.querySelector('.search');\n      search.classList.toggle('search--active');\n      if (!search.style.maxHeight) {\n        search.style.maxHeight = search.scrollHeight + 'px';\n      } else {\n        search.style.maxHeight = null;\n      }\n    }\n  }]);\n\n  return Search;\n}();\n\nexports.default = Search;\n\n//# sourceURL=webpack:///./scripts/modules/Search.js?");

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