(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["tinyToast"] = factory();
	else
		root["tinyToast"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	var tinyToast

	function createDom () {
	  if (tinyToast) {
	    return tinyToast
	  }

	  tinyToast = document.createElement('h3')
	  var style = tinyToast.style
	  style.color = '#333'
	  style.position = 'fixed'
	  style.bottom = '0em'
	  style.right = '1em'
	  style.backgroundColor = '#7FFFD4'
	  style.borderRadius = '5px'
	  style.borderWidth = '1px'
	  style.borderColor = '#73E1BC'
	  style.borderStyle = 'solid'
	  style.padding = '1em 2em'
	  style.zIndex = 1000
	  document.body.appendChild(tinyToast)
	  return tinyToast
	}

	function createMessage (text) {
	  createDom().textContent = text
	}

	function closeMessage () {
	  if (tinyToast) {
	    document.body.removeChild(tinyToast)
	    tinyToast = null
	  }
	}

	function maybeDefer (fn, timeoutMs) {
	  if (timeoutMs) {
	    setTimeout(fn, timeoutMs)
	  } else {
	    fn()
	  }
	}

	var tinyToastApi = {
	  show: function show (text) {
	    createMessage(text)
	  },
	  hide: function (timeoutMs) {
	    maybeDefer(closeMessage, timeoutMs)
	  }
	}

	module.exports = tinyToastApi


/***/ }
/******/ ])
});
;