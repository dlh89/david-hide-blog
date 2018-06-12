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
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Search = function () {\n  function Search() {\n    _classCallCheck(this, Search);\n\n    this.searchButton = document.querySelector('#searchButton');\n    this.searchInput = document.querySelector('.search__input');\n    this.search = document.querySelector('.search');\n    this.searchActive = false;\n    this.typingTimer;\n    this.resultsDiv = document.querySelector('.search__results');\n    this.spinnerVisible = false;\n    this.previousValue;\n    this.events();\n  }\n\n  _createClass(Search, [{\n    key: 'events',\n    value: function events() {\n      this.searchButton.addEventListener('click', this.activateSearch.bind(this));\n      this.searchInput.addEventListener('keyup', this.typingLogic.bind(this));\n    }\n  }, {\n    key: 'typingLogic',\n    value: function typingLogic(e) {\n      if (this.searchInput.value !== this.previousValue) {\n        clearTimeout(this.typingTimer);\n\n        if (this.searchInput.value) {\n          if (!this.spinnerVisible) {\n            this.resultsDiv.innerHTML = '<div class=\"u-spinner\"></div>';\n            this.spinnerVisible = true;\n          }\n          this.typingTimer = setTimeout(this.getResults.bind(this), 1000);\n          this.previousValue = this.searchInput.value;\n        } else {\n          this.resultsDiv.innerHTML = '';\n          this.spinnerVisible = false;\n        }\n      }\n    }\n  }, {\n    key: 'getResults',\n    value: function getResults() {\n      var _this = this;\n\n      // Make the AJAX request to WordPress API\n      var xhr = new XMLHttpRequest();\n      var url = 'http://localhost:3000/david-hide-blog/wp-json/wp/v2/posts?search=' + this.searchInput.value;\n      xhr.open('GET', url, true);\n      xhr.setRequestHeader('Content-Type', 'application/json');\n      xhr.onreadystatechange = function () {\n        if (xhr.readyState === 4 && xhr.status === 200) {\n          var results = JSON.parse(xhr.responseText);\n          console.log(results);\n          _this.resultsDiv.innerHTML = '';\n          _this.spinnerVisible = false;\n          results.forEach(function (post) {\n            _this.resultsDiv.innerHTML += '<li class=\"search__item\"><a href=\"' + post.link + '\" class=\"search__link\">' + post.title.rendered + '</a></li>';\n          });\n        }\n      };\n      xhr.send();\n    }\n  }, {\n    key: 'activateSearch',\n    value: function activateSearch(e) {\n      e.preventDefault();\n      this.searchButton.classList.toggle('nav__link--active');\n      this.search.classList.toggle('search--active');\n      if (!this.search.style.maxHeight) {\n        this.search.style.maxHeight = this.search.scrollHeight + 'px';\n        this.searchInput.setAttribute('aria-hidden', false);\n        this.searchActive = true;\n      } else {\n        this.search.style.maxHeight = null;\n        this.searchInput.setAttribute('aria-hidden', true);\n        this.searchActive = false;\n      }\n    }\n  }]);\n\n  return Search;\n}();\n\nexports.default = Search;\n\n//# sourceURL=webpack:///./scripts/modules/Search.js?");

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