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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: F:\\Laravel 2020\\Laravel Lanjutan\\LaravelVue\\resources\\js\\app.js: Identifier 'app' has already been declared (48:6)\n\n  46 | });\n  47 | \n> 48 | const app = new Vue({\n     |       ^\n  49 |     el: '#app',\n  50 |     router: router,\n  51 |     render: h => h(App),\n    at Parser._raise (F:\\Laravel 2020\\Laravel Lanjutan\\LaravelVue\\node_modules\\@babel\\parser\\lib\\index.js:766:17)\n    at Parser.raiseWithData (F:\\Laravel 2020\\Laravel Lanjutan\\LaravelVue\\node_modules\\@babel\\parser\\lib\\index.js:759:17)\n    at Parser.raise (F:\\Laravel 2020\\Laravel Lanjutan\\LaravelVue\\node_modules\\@babel\\parser\\lib\\index.js:753:17)\n    at ScopeHandler.checkRedeclarationInScope (F:\\Laravel 2020\\Laravel Lanjutan\\LaravelVue\\node_modules\\@babel\\parser\\lib\\index.js:4873:12)\n    at ScopeHandler.declareName (F:\\Laravel 2020\\Laravel Lanjutan\\LaravelVue\\node_modules\\@babel\\parser\\lib\\index.js:4839:12)\n    at Parser.checkLVal (F:\\Laravel 2020\\Laravel Lanjutan\\LaravelVue\\node_modules\\@babel\\parser\\lib\\index.js:9422:22)\n    at Parser.parseVarId (F:\\Laravel 2020\\Laravel Lanjutan\\LaravelVue\\node_modules\\@babel\\parser\\lib\\index.js:12119:10)\n    at Parser.parseVar (F:\\Laravel 2020\\Laravel Lanjutan\\LaravelVue\\node_modules\\@babel\\parser\\lib\\index.js:12094:12)\n    at Parser.parseVarStatement (F:\\Laravel 2020\\Laravel Lanjutan\\LaravelVue\\node_modules\\@babel\\parser\\lib\\index.js:11906:10)\n    at Parser.parseStatementContent (F:\\Laravel 2020\\Laravel Lanjutan\\LaravelVue\\node_modules\\@babel\\parser\\lib\\index.js:11498:21)\n    at Parser.parseStatement (F:\\Laravel 2020\\Laravel Lanjutan\\LaravelVue\\node_modules\\@babel\\parser\\lib\\index.js:11431:17)\n    at Parser.parseBlockOrModuleBlockBody (F:\\Laravel 2020\\Laravel Lanjutan\\LaravelVue\\node_modules\\@babel\\parser\\lib\\index.js:12013:25)\n    at Parser.parseBlockBody (F:\\Laravel 2020\\Laravel Lanjutan\\LaravelVue\\node_modules\\@babel\\parser\\lib\\index.js:11999:10)\n    at Parser.parseTopLevel (F:\\Laravel 2020\\Laravel Lanjutan\\LaravelVue\\node_modules\\@babel\\parser\\lib\\index.js:11362:10)\n    at Parser.parse (F:\\Laravel 2020\\Laravel Lanjutan\\LaravelVue\\node_modules\\@babel\\parser\\lib\\index.js:13045:10)\n    at parse (F:\\Laravel 2020\\Laravel Lanjutan\\LaravelVue\\node_modules\\@babel\\parser\\lib\\index.js:13098:38)\n    at parser (F:\\Laravel 2020\\Laravel Lanjutan\\LaravelVue\\node_modules\\@babel\\core\\lib\\parser\\index.js:54:34)\n    at parser.next (<anonymous>)\n    at normalizeFile (F:\\Laravel 2020\\Laravel Lanjutan\\LaravelVue\\node_modules\\@babel\\core\\lib\\transformation\\normalize-file.js:99:38)\n    at normalizeFile.next (<anonymous>)\n    at run (F:\\Laravel 2020\\Laravel Lanjutan\\LaravelVue\\node_modules\\@babel\\core\\lib\\transformation\\index.js:31:50)\n    at run.next (<anonymous>)\n    at Function.transform (F:\\Laravel 2020\\Laravel Lanjutan\\LaravelVue\\node_modules\\@babel\\core\\lib\\transform.js:27:41)\n    at transform.next (<anonymous>)\n    at step (F:\\Laravel 2020\\Laravel Lanjutan\\LaravelVue\\node_modules\\gensync\\index.js:254:32)\n    at F:\\Laravel 2020\\Laravel Lanjutan\\LaravelVue\\node_modules\\gensync\\index.js:266:13\n    at async.call.result.err.err (F:\\Laravel 2020\\Laravel Lanjutan\\LaravelVue\\node_modules\\gensync\\index.js:216:11)");

/***/ }),

/***/ "./resources/sass/app.scss":
/*!*********************************!*\
  !*** ./resources/sass/app.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!*************************************************************!*\
  !*** multi ./resources/js/app.js ./resources/sass/app.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! F:\Laravel 2020\Laravel Lanjutan\LaravelVue\resources\js\app.js */"./resources/js/app.js");
module.exports = __webpack_require__(/*! F:\Laravel 2020\Laravel Lanjutan\LaravelVue\resources\sass\app.scss */"./resources/sass/app.scss");


/***/ })

/******/ });