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

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// shim for using process in browser\nvar process = module.exports = {};\n\n// cached from whatever global is present so that test runners that stub it\n// don't break things.  But we need to wrap it in a try catch in case it is\n// wrapped in strict mode code which doesn't define any globals.  It's inside a\n// function because try/catches deoptimize in certain engines.\n\nvar cachedSetTimeout;\nvar cachedClearTimeout;\n\nfunction defaultSetTimout() {\n    throw new Error('setTimeout has not been defined');\n}\nfunction defaultClearTimeout () {\n    throw new Error('clearTimeout has not been defined');\n}\n(function () {\n    try {\n        if (typeof setTimeout === 'function') {\n            cachedSetTimeout = setTimeout;\n        } else {\n            cachedSetTimeout = defaultSetTimout;\n        }\n    } catch (e) {\n        cachedSetTimeout = defaultSetTimout;\n    }\n    try {\n        if (typeof clearTimeout === 'function') {\n            cachedClearTimeout = clearTimeout;\n        } else {\n            cachedClearTimeout = defaultClearTimeout;\n        }\n    } catch (e) {\n        cachedClearTimeout = defaultClearTimeout;\n    }\n} ())\nfunction runTimeout(fun) {\n    if (cachedSetTimeout === setTimeout) {\n        //normal enviroments in sane situations\n        return setTimeout(fun, 0);\n    }\n    // if setTimeout wasn't available but was latter defined\n    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {\n        cachedSetTimeout = setTimeout;\n        return setTimeout(fun, 0);\n    }\n    try {\n        // when when somebody has screwed with setTimeout but no I.E. maddness\n        return cachedSetTimeout(fun, 0);\n    } catch(e){\n        try {\n            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally\n            return cachedSetTimeout.call(null, fun, 0);\n        } catch(e){\n            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error\n            return cachedSetTimeout.call(this, fun, 0);\n        }\n    }\n\n\n}\nfunction runClearTimeout(marker) {\n    if (cachedClearTimeout === clearTimeout) {\n        //normal enviroments in sane situations\n        return clearTimeout(marker);\n    }\n    // if clearTimeout wasn't available but was latter defined\n    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {\n        cachedClearTimeout = clearTimeout;\n        return clearTimeout(marker);\n    }\n    try {\n        // when when somebody has screwed with setTimeout but no I.E. maddness\n        return cachedClearTimeout(marker);\n    } catch (e){\n        try {\n            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally\n            return cachedClearTimeout.call(null, marker);\n        } catch (e){\n            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.\n            // Some versions of I.E. have different rules for clearTimeout vs setTimeout\n            return cachedClearTimeout.call(this, marker);\n        }\n    }\n\n\n\n}\nvar queue = [];\nvar draining = false;\nvar currentQueue;\nvar queueIndex = -1;\n\nfunction cleanUpNextTick() {\n    if (!draining || !currentQueue) {\n        return;\n    }\n    draining = false;\n    if (currentQueue.length) {\n        queue = currentQueue.concat(queue);\n    } else {\n        queueIndex = -1;\n    }\n    if (queue.length) {\n        drainQueue();\n    }\n}\n\nfunction drainQueue() {\n    if (draining) {\n        return;\n    }\n    var timeout = runTimeout(cleanUpNextTick);\n    draining = true;\n\n    var len = queue.length;\n    while(len) {\n        currentQueue = queue;\n        queue = [];\n        while (++queueIndex < len) {\n            if (currentQueue) {\n                currentQueue[queueIndex].run();\n            }\n        }\n        queueIndex = -1;\n        len = queue.length;\n    }\n    currentQueue = null;\n    draining = false;\n    runClearTimeout(timeout);\n}\n\nprocess.nextTick = function (fun) {\n    var args = new Array(arguments.length - 1);\n    if (arguments.length > 1) {\n        for (var i = 1; i < arguments.length; i++) {\n            args[i - 1] = arguments[i];\n        }\n    }\n    queue.push(new Item(fun, args));\n    if (queue.length === 1 && !draining) {\n        runTimeout(drainQueue);\n    }\n};\n\n// v8 likes predictible objects\nfunction Item(fun, array) {\n    this.fun = fun;\n    this.array = array;\n}\nItem.prototype.run = function () {\n    this.fun.apply(null, this.array);\n};\nprocess.title = 'browser';\nprocess.browser = true;\nprocess.env = {};\nprocess.argv = [];\nprocess.version = ''; // empty string to avoid regexp issues\nprocess.versions = {};\n\nfunction noop() {}\n\nprocess.on = noop;\nprocess.addListener = noop;\nprocess.once = noop;\nprocess.off = noop;\nprocess.removeListener = noop;\nprocess.removeAllListeners = noop;\nprocess.emit = noop;\nprocess.prependListener = noop;\nprocess.prependOnceListener = noop;\n\nprocess.listeners = function (name) { return [] }\n\nprocess.binding = function (name) {\n    throw new Error('process.binding is not supported');\n};\n\nprocess.cwd = function () { return '/' };\nprocess.chdir = function (dir) {\n    throw new Error('process.chdir is not supported');\n};\nprocess.umask = function() { return 0; };\n\n\n//# sourceURL=webpack:///./node_modules/process/browser.js?");

/***/ }),

/***/ "./node_modules/promise-polyfill/src/finally.js":
/*!******************************************************!*\
  !*** ./node_modules/promise-polyfill/src/finally.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function(callback) {\n  var constructor = this.constructor;\n  return this.then(\n    function(value) {\n      return constructor.resolve(callback()).then(function() {\n        return value;\n      });\n    },\n    function(reason) {\n      return constructor.resolve(callback()).then(function() {\n        return constructor.reject(reason);\n      });\n    }\n  );\n});\n\n\n//# sourceURL=webpack:///./node_modules/promise-polyfill/src/finally.js?");

/***/ }),

/***/ "./node_modules/promise-polyfill/src/index.js":
/*!****************************************************!*\
  !*** ./node_modules/promise-polyfill/src/index.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(setImmediate) {/* harmony import */ var _finally__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./finally */ \"./node_modules/promise-polyfill/src/finally.js\");\n\n\n// Store setTimeout reference so promise-polyfill will be unaffected by\n// other code modifying setTimeout (like sinon.useFakeTimers())\nvar setTimeoutFunc = setTimeout;\n\nfunction noop() {}\n\n// Polyfill for Function.prototype.bind\nfunction bind(fn, thisArg) {\n  return function() {\n    fn.apply(thisArg, arguments);\n  };\n}\n\nfunction Promise(fn) {\n  if (!(this instanceof Promise))\n    throw new TypeError('Promises must be constructed via new');\n  if (typeof fn !== 'function') throw new TypeError('not a function');\n  this._state = 0;\n  this._handled = false;\n  this._value = undefined;\n  this._deferreds = [];\n\n  doResolve(fn, this);\n}\n\nfunction handle(self, deferred) {\n  while (self._state === 3) {\n    self = self._value;\n  }\n  if (self._state === 0) {\n    self._deferreds.push(deferred);\n    return;\n  }\n  self._handled = true;\n  Promise._immediateFn(function() {\n    var cb = self._state === 1 ? deferred.onFulfilled : deferred.onRejected;\n    if (cb === null) {\n      (self._state === 1 ? resolve : reject)(deferred.promise, self._value);\n      return;\n    }\n    var ret;\n    try {\n      ret = cb(self._value);\n    } catch (e) {\n      reject(deferred.promise, e);\n      return;\n    }\n    resolve(deferred.promise, ret);\n  });\n}\n\nfunction resolve(self, newValue) {\n  try {\n    // Promise Resolution Procedure: https://github.com/promises-aplus/promises-spec#the-promise-resolution-procedure\n    if (newValue === self)\n      throw new TypeError('A promise cannot be resolved with itself.');\n    if (\n      newValue &&\n      (typeof newValue === 'object' || typeof newValue === 'function')\n    ) {\n      var then = newValue.then;\n      if (newValue instanceof Promise) {\n        self._state = 3;\n        self._value = newValue;\n        finale(self);\n        return;\n      } else if (typeof then === 'function') {\n        doResolve(bind(then, newValue), self);\n        return;\n      }\n    }\n    self._state = 1;\n    self._value = newValue;\n    finale(self);\n  } catch (e) {\n    reject(self, e);\n  }\n}\n\nfunction reject(self, newValue) {\n  self._state = 2;\n  self._value = newValue;\n  finale(self);\n}\n\nfunction finale(self) {\n  if (self._state === 2 && self._deferreds.length === 0) {\n    Promise._immediateFn(function() {\n      if (!self._handled) {\n        Promise._unhandledRejectionFn(self._value);\n      }\n    });\n  }\n\n  for (var i = 0, len = self._deferreds.length; i < len; i++) {\n    handle(self, self._deferreds[i]);\n  }\n  self._deferreds = null;\n}\n\nfunction Handler(onFulfilled, onRejected, promise) {\n  this.onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : null;\n  this.onRejected = typeof onRejected === 'function' ? onRejected : null;\n  this.promise = promise;\n}\n\n/**\n * Take a potentially misbehaving resolver function and make sure\n * onFulfilled and onRejected are only called once.\n *\n * Makes no guarantees about asynchrony.\n */\nfunction doResolve(fn, self) {\n  var done = false;\n  try {\n    fn(\n      function(value) {\n        if (done) return;\n        done = true;\n        resolve(self, value);\n      },\n      function(reason) {\n        if (done) return;\n        done = true;\n        reject(self, reason);\n      }\n    );\n  } catch (ex) {\n    if (done) return;\n    done = true;\n    reject(self, ex);\n  }\n}\n\nPromise.prototype['catch'] = function(onRejected) {\n  return this.then(null, onRejected);\n};\n\nPromise.prototype.then = function(onFulfilled, onRejected) {\n  var prom = new this.constructor(noop);\n\n  handle(this, new Handler(onFulfilled, onRejected, prom));\n  return prom;\n};\n\nPromise.prototype['finally'] = _finally__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n\nPromise.all = function(arr) {\n  return new Promise(function(resolve, reject) {\n    if (!arr || typeof arr.length === 'undefined')\n      throw new TypeError('Promise.all accepts an array');\n    var args = Array.prototype.slice.call(arr);\n    if (args.length === 0) return resolve([]);\n    var remaining = args.length;\n\n    function res(i, val) {\n      try {\n        if (val && (typeof val === 'object' || typeof val === 'function')) {\n          var then = val.then;\n          if (typeof then === 'function') {\n            then.call(\n              val,\n              function(val) {\n                res(i, val);\n              },\n              reject\n            );\n            return;\n          }\n        }\n        args[i] = val;\n        if (--remaining === 0) {\n          resolve(args);\n        }\n      } catch (ex) {\n        reject(ex);\n      }\n    }\n\n    for (var i = 0; i < args.length; i++) {\n      res(i, args[i]);\n    }\n  });\n};\n\nPromise.resolve = function(value) {\n  if (value && typeof value === 'object' && value.constructor === Promise) {\n    return value;\n  }\n\n  return new Promise(function(resolve) {\n    resolve(value);\n  });\n};\n\nPromise.reject = function(value) {\n  return new Promise(function(resolve, reject) {\n    reject(value);\n  });\n};\n\nPromise.race = function(values) {\n  return new Promise(function(resolve, reject) {\n    for (var i = 0, len = values.length; i < len; i++) {\n      values[i].then(resolve, reject);\n    }\n  });\n};\n\n// Use polyfill for setImmediate for performance gains\nPromise._immediateFn =\n  (typeof setImmediate === 'function' &&\n    function(fn) {\n      setImmediate(fn);\n    }) ||\n  function(fn) {\n    setTimeoutFunc(fn, 0);\n  };\n\nPromise._unhandledRejectionFn = function _unhandledRejectionFn(err) {\n  if (typeof console !== 'undefined' && console) {\n    console.warn('Possible Unhandled Promise Rejection:', err); // eslint-disable-line no-console\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Promise);\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../timers-browserify/main.js */ \"./node_modules/timers-browserify/main.js\").setImmediate))\n\n//# sourceURL=webpack:///./node_modules/promise-polyfill/src/index.js?");

/***/ }),

/***/ "./node_modules/promise-polyfill/src/polyfill.js":
/*!*******************************************************!*\
  !*** ./node_modules/promise-polyfill/src/polyfill.js ***!
  \*******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ \"./node_modules/promise-polyfill/src/index.js\");\n/* harmony import */ var _finally__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./finally */ \"./node_modules/promise-polyfill/src/finally.js\");\n\n\n\nvar globalNS = (function() {\n  // the only reliable means to get the global object is\n  // `Function('return this')()`\n  // However, this causes CSP violations in Chrome apps.\n  if (typeof self !== 'undefined') {\n    return self;\n  }\n  if (typeof window !== 'undefined') {\n    return window;\n  }\n  if (typeof global !== 'undefined') {\n    return global;\n  }\n  throw new Error('unable to locate global object');\n})();\n\nif (!globalNS.Promise) {\n  globalNS.Promise = _index__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n} else if (!globalNS.Promise.prototype['finally']) {\n  globalNS.Promise.prototype['finally'] = _finally__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\n}\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js\")))\n\n//# sourceURL=webpack:///./node_modules/promise-polyfill/src/polyfill.js?");

/***/ }),

/***/ "./node_modules/setimmediate/setImmediate.js":
/*!***************************************************!*\
  !*** ./node_modules/setimmediate/setImmediate.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {\n    \"use strict\";\n\n    if (global.setImmediate) {\n        return;\n    }\n\n    var nextHandle = 1; // Spec says greater than zero\n    var tasksByHandle = {};\n    var currentlyRunningATask = false;\n    var doc = global.document;\n    var registerImmediate;\n\n    function setImmediate(callback) {\n      // Callback can either be a function or a string\n      if (typeof callback !== \"function\") {\n        callback = new Function(\"\" + callback);\n      }\n      // Copy function arguments\n      var args = new Array(arguments.length - 1);\n      for (var i = 0; i < args.length; i++) {\n          args[i] = arguments[i + 1];\n      }\n      // Store and register the task\n      var task = { callback: callback, args: args };\n      tasksByHandle[nextHandle] = task;\n      registerImmediate(nextHandle);\n      return nextHandle++;\n    }\n\n    function clearImmediate(handle) {\n        delete tasksByHandle[handle];\n    }\n\n    function run(task) {\n        var callback = task.callback;\n        var args = task.args;\n        switch (args.length) {\n        case 0:\n            callback();\n            break;\n        case 1:\n            callback(args[0]);\n            break;\n        case 2:\n            callback(args[0], args[1]);\n            break;\n        case 3:\n            callback(args[0], args[1], args[2]);\n            break;\n        default:\n            callback.apply(undefined, args);\n            break;\n        }\n    }\n\n    function runIfPresent(handle) {\n        // From the spec: \"Wait until any invocations of this algorithm started before this one have completed.\"\n        // So if we're currently running a task, we'll need to delay this invocation.\n        if (currentlyRunningATask) {\n            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a\n            // \"too much recursion\" error.\n            setTimeout(runIfPresent, 0, handle);\n        } else {\n            var task = tasksByHandle[handle];\n            if (task) {\n                currentlyRunningATask = true;\n                try {\n                    run(task);\n                } finally {\n                    clearImmediate(handle);\n                    currentlyRunningATask = false;\n                }\n            }\n        }\n    }\n\n    function installNextTickImplementation() {\n        registerImmediate = function(handle) {\n            process.nextTick(function () { runIfPresent(handle); });\n        };\n    }\n\n    function canUsePostMessage() {\n        // The test against `importScripts` prevents this implementation from being installed inside a web worker,\n        // where `global.postMessage` means something completely different and can't be used for this purpose.\n        if (global.postMessage && !global.importScripts) {\n            var postMessageIsAsynchronous = true;\n            var oldOnMessage = global.onmessage;\n            global.onmessage = function() {\n                postMessageIsAsynchronous = false;\n            };\n            global.postMessage(\"\", \"*\");\n            global.onmessage = oldOnMessage;\n            return postMessageIsAsynchronous;\n        }\n    }\n\n    function installPostMessageImplementation() {\n        // Installs an event handler on `global` for the `message` event: see\n        // * https://developer.mozilla.org/en/DOM/window.postMessage\n        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages\n\n        var messagePrefix = \"setImmediate$\" + Math.random() + \"$\";\n        var onGlobalMessage = function(event) {\n            if (event.source === global &&\n                typeof event.data === \"string\" &&\n                event.data.indexOf(messagePrefix) === 0) {\n                runIfPresent(+event.data.slice(messagePrefix.length));\n            }\n        };\n\n        if (global.addEventListener) {\n            global.addEventListener(\"message\", onGlobalMessage, false);\n        } else {\n            global.attachEvent(\"onmessage\", onGlobalMessage);\n        }\n\n        registerImmediate = function(handle) {\n            global.postMessage(messagePrefix + handle, \"*\");\n        };\n    }\n\n    function installMessageChannelImplementation() {\n        var channel = new MessageChannel();\n        channel.port1.onmessage = function(event) {\n            var handle = event.data;\n            runIfPresent(handle);\n        };\n\n        registerImmediate = function(handle) {\n            channel.port2.postMessage(handle);\n        };\n    }\n\n    function installReadyStateChangeImplementation() {\n        var html = doc.documentElement;\n        registerImmediate = function(handle) {\n            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted\n            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.\n            var script = doc.createElement(\"script\");\n            script.onreadystatechange = function () {\n                runIfPresent(handle);\n                script.onreadystatechange = null;\n                html.removeChild(script);\n                script = null;\n            };\n            html.appendChild(script);\n        };\n    }\n\n    function installSetTimeoutImplementation() {\n        registerImmediate = function(handle) {\n            setTimeout(runIfPresent, 0, handle);\n        };\n    }\n\n    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.\n    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);\n    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;\n\n    // Don't get fooled by e.g. browserify environments.\n    if ({}.toString.call(global.process) === \"[object process]\") {\n        // For Node.js before 0.9\n        installNextTickImplementation();\n\n    } else if (canUsePostMessage()) {\n        // For non-IE10 modern browsers\n        installPostMessageImplementation();\n\n    } else if (global.MessageChannel) {\n        // For web workers, where supported\n        installMessageChannelImplementation();\n\n    } else if (doc && \"onreadystatechange\" in doc.createElement(\"script\")) {\n        // For IE 6–8\n        installReadyStateChangeImplementation();\n\n    } else {\n        // For older browsers\n        installSetTimeoutImplementation();\n    }\n\n    attachTo.setImmediate = setImmediate;\n    attachTo.clearImmediate = clearImmediate;\n}(typeof self === \"undefined\" ? typeof global === \"undefined\" ? this : global : self));\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js\"), __webpack_require__(/*! ./../process/browser.js */ \"./node_modules/process/browser.js\")))\n\n//# sourceURL=webpack:///./node_modules/setimmediate/setImmediate.js?");

/***/ }),

/***/ "./node_modules/timers-browserify/main.js":
/*!************************************************!*\
  !*** ./node_modules/timers-browserify/main.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(global) {var scope = (typeof global !== \"undefined\" && global) ||\n            (typeof self !== \"undefined\" && self) ||\n            window;\nvar apply = Function.prototype.apply;\n\n// DOM APIs, for completeness\n\nexports.setTimeout = function() {\n  return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);\n};\nexports.setInterval = function() {\n  return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);\n};\nexports.clearTimeout =\nexports.clearInterval = function(timeout) {\n  if (timeout) {\n    timeout.close();\n  }\n};\n\nfunction Timeout(id, clearFn) {\n  this._id = id;\n  this._clearFn = clearFn;\n}\nTimeout.prototype.unref = Timeout.prototype.ref = function() {};\nTimeout.prototype.close = function() {\n  this._clearFn.call(scope, this._id);\n};\n\n// Does not start the time, just sets up the members needed.\nexports.enroll = function(item, msecs) {\n  clearTimeout(item._idleTimeoutId);\n  item._idleTimeout = msecs;\n};\n\nexports.unenroll = function(item) {\n  clearTimeout(item._idleTimeoutId);\n  item._idleTimeout = -1;\n};\n\nexports._unrefActive = exports.active = function(item) {\n  clearTimeout(item._idleTimeoutId);\n\n  var msecs = item._idleTimeout;\n  if (msecs >= 0) {\n    item._idleTimeoutId = setTimeout(function onTimeout() {\n      if (item._onTimeout)\n        item._onTimeout();\n    }, msecs);\n  }\n};\n\n// setimmediate attaches itself to the global object\n__webpack_require__(/*! setimmediate */ \"./node_modules/setimmediate/setImmediate.js\");\n// On some exotic environments, it's not clear which object `setimmediate` was\n// able to install onto.  Search each possibility in the same order as the\n// `setimmediate` library.\nexports.setImmediate = (typeof self !== \"undefined\" && self.setImmediate) ||\n                       (typeof global !== \"undefined\" && global.setImmediate) ||\n                       (this && this.setImmediate);\nexports.clearImmediate = (typeof self !== \"undefined\" && self.clearImmediate) ||\n                         (typeof global !== \"undefined\" && global.clearImmediate) ||\n                         (this && this.clearImmediate);\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js\")))\n\n//# sourceURL=webpack:///./node_modules/timers-browserify/main.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var g;\n\n// This works in non-strict mode\ng = (function() {\n\treturn this;\n})();\n\ntry {\n\t// This works if eval is allowed (see CSP)\n\tg = g || Function(\"return this\")() || (1, eval)(\"this\");\n} catch (e) {\n\t// This works if the window reference is available\n\tif (typeof window === \"object\") g = window;\n}\n\n// g can still be undefined, but nothing to do about it...\n// We return undefined, instead of nothing here, so it's\n// easier to handle this case. if(!global) { ...}\n\nmodule.exports = g;\n\n\n//# sourceURL=webpack:///(webpack)/buildin/global.js?");

/***/ }),

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
eval("\n\n__webpack_require__(/*! promise-polyfill/src/polyfill */ \"./node_modules/promise-polyfill/src/polyfill.js\");\n\nvar _Navigation = __webpack_require__(/*! ./modules/Navigation */ \"./scripts/modules/Navigation.js\");\n\nvar _Navigation2 = _interopRequireDefault(_Navigation);\n\nvar _Search = __webpack_require__(/*! ./modules/Search */ \"./scripts/modules/Search.js\");\n\nvar _Search2 = _interopRequireDefault(_Search);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar navigation = new _Navigation2.default();\nvar search = new _Search2.default();\n\n//# sourceURL=webpack:///./scripts/app.js?");

/***/ }),

/***/ "./scripts/modules/Navigation.js":
/*!***************************************!*\
  !*** ./scripts/modules/Navigation.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Navigation = function () {\n  function Navigation() {\n    _classCallCheck(this, Navigation);\n\n    this.toggleBtn = document.querySelector('.nav__toggle-button');\n    this.burger = document.querySelector('.nav__burger');\n    this.navList = document.querySelector('.nav__list');\n    this.events();\n  }\n\n  _createClass(Navigation, [{\n    key: 'events',\n    value: function events() {\n      this.toggleBtn.addEventListener('click', this.toggleNav.bind(this));\n    }\n  }, {\n    key: 'toggleNav',\n    value: function toggleNav() {\n      this.burger.classList.toggle('nav__burger--active');\n      this.toggleBtn.classList.toggle('nav__toggle-button--active');\n\n      if (!this.navList.style.maxHeight) {\n        this.navList.style.maxHeight = this.navList.scrollHeight + 'px';\n      } else {\n        this.navList.style.maxHeight = null;\n      }\n    }\n  }]);\n\n  return Navigation;\n}();\n\nexports.default = Navigation;\n\n//# sourceURL=webpack:///./scripts/modules/Navigation.js?");

/***/ }),

/***/ "./scripts/modules/Search.js":
/*!***********************************!*\
  !*** ./scripts/modules/Search.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Search = function () {\n  function Search() {\n    _classCallCheck(this, Search);\n\n    this.searchButton = document.querySelector('#searchButton');\n    this.searchInput = document.querySelector('.search__input');\n    this.search = document.querySelector('.search');\n    this.searchActive = false;\n    this.typingTimer;\n    this.resultsDiv = document.querySelector('.search__results');\n    this.spinnerVisible = false;\n    this.previousValue;\n    this.events();\n  }\n\n  _createClass(Search, [{\n    key: 'events',\n    value: function events() {\n      this.searchButton.addEventListener('click', this.activateSearch.bind(this));\n      this.searchInput.addEventListener('keyup', this.typingLogic.bind(this));\n    }\n  }, {\n    key: 'typingLogic',\n    value: function typingLogic(e) {\n      if (this.searchInput.value !== this.previousValue) {\n        clearTimeout(this.typingTimer);\n\n        if (this.searchInput.value) {\n          if (!this.spinnerVisible) {\n            this.resultsDiv.innerHTML = '<div class=\"u-spinner\"></div>';\n            this.spinnerVisible = true;\n          }\n          this.typingTimer = setTimeout(this.getResults.bind(this), 1000);\n          this.previousValue = this.searchInput.value;\n        } else {\n          this.resultsDiv.innerHTML = '';\n          this.spinnerVisible = false;\n        }\n      }\n      // close search if esc pressed\n      if (e.keyCode === 27) {\n        this.closeSearch();\n      }\n    }\n  }, {\n    key: 'getResults',\n    value: function getResults() {\n      var _this = this;\n\n      return new Promise(function (resolve, reject) {\n        // Make the AJAX request to WordPress API\n        var xhr = new XMLHttpRequest();\n        var url = blogData.root_url + '/wp-json/dh/v1/search?term=' + _this.searchInput.value;\n        xhr.open('GET', url, true);\n        xhr.setRequestHeader('Content-Type', 'application/json');\n        xhr.onreadystatechange = function () {\n          if (xhr.readyState === 4) {\n            if (xhr.status === 200) {\n              var results = JSON.parse(xhr.responseText);\n              _this.resultsDiv.innerHTML = '';\n              _this.spinnerVisible = false;\n              resolve(results);\n            } else {\n              reject();\n            }\n          }\n        };\n        xhr.send();\n      }).then(this.updateResultsDivSuccess.bind(this), this.updateResultsDivFailure.bind(this));\n    }\n  }, {\n    key: 'updateResultsDivSuccess',\n    value: function updateResultsDivSuccess(results) {\n      if (this.searchInput.value) {\n        if (results.length) {\n          this.resultsDiv.innerHTML = '\\n        <ul>\\n          ' + results.map(function (post) {\n            return '<a href=\"' + post.link + '\" class=\"search__link\"><li class=\"search__item\"><span>' + post.title + ' <span class=\"search__category\">' + post.type + '</span></li></a>';\n          }).join('') + '\\n        </ul>';\n        } else {\n          this.resultsDiv.innerHTML = '<li class=\"search__item\">No results found</li>';\n        }\n      }\n    }\n  }, {\n    key: 'updateResultsDivFailure',\n    value: function updateResultsDivFailure() {\n      this.resultsDiv.innerHTML = '<li class=\"search__item\">There was an error retrieving search data.</li>';\n    }\n  }, {\n    key: 'activateSearch',\n    value: function activateSearch(e) {\n      e.preventDefault();\n      this.searchButton.classList.toggle('nav__search-button--active');\n      this.search.classList.toggle('search--active');\n      if (!this.search.style.maxHeight) {\n        this.search.style.maxHeight = this.search.scrollHeight + 'px';\n        this.searchInput.setAttribute('aria-hidden', false);\n        this.searchInput.focus();\n        this.searchActive = true;\n      } else {\n        this.closeSearch();\n      }\n    }\n  }, {\n    key: 'closeSearch',\n    value: function closeSearch() {\n      this.searchActive = false;\n      this.search.style.maxHeight = null;\n      this.searchInput.setAttribute('aria-hidden', true);\n      this.resultsDiv.innerHTML = '';\n      this.searchInput.value = '';\n      this.searchButton.classList.remove('nav__search-button--active');\n      this.search.classList.remove('search--active');\n    }\n  }]);\n\n  return Search;\n}();\n\nexports.default = Search;\n\n//# sourceURL=webpack:///./scripts/modules/Search.js?");

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