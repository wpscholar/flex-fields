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

/***/ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/getPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/inherits.js":
/*!*********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inherits.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableRest.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

module.exports = _nonIterableRest;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/objectSpread.js":
/*!*************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectSpread.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__(/*! ./defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      defineProperty(target, key, source[key]);
    });
  }

  return target;
}

module.exports = _objectSpread;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/slicedToArray.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js");

var iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit */ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js");

var nonIterableRest = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/@babel/runtime/helpers/nonIterableRest.js");

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/choices.js/public/assets/scripts/choices.min.js":
/*!**********************************************************************!*\
  !*** ./node_modules/choices.js/public/assets/scripts/choices.min.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*! choices.js v4.1.3 | (c) 2018 Josh Johnson | https://github.com/jshjohnson/Choices#readme */ 
!function(e,t){ true?module.exports=t():undefined}("undefined"!=typeof self?self:this,function(){return function(e){function t(i){if(n[i])return n[i].exports;var r=n[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,i){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:i})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/public/assets/scripts/",t(t.s=37)}([function(e,t,n){var i=n(26)("wks"),r=n(13),o=n(3).Symbol,s="function"==typeof o;(e.exports=function(e){return i[e]||(i[e]=s&&o[e]||(s?o:r)("Symbol."+e))}).store=i},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=t.getRandomNumber=function(e,t){return Math.floor(Math.random()*(t-e)+e)},r=t.generateChars=function(e){for(var t="",n=0;n<e;n++){t+=i(0,36).toString(36)}return t},o=(t.generateId=function(e,t){var n=e.id||e.name&&e.name+"-"+r(2)||r(4);return n=n.replace(/(:|\.|\[|\]|,)/g,""),n=t+"-"+n},t.getType=function(e){return Object.prototype.toString.call(e).slice(8,-1)}),s=t.isType=function(e,t){var n=o(t);return void 0!==t&&null!==t&&n===e},a=(t.isElement=function(e){return e instanceof Element},t.extend=function e(){for(var t={},n=arguments.length,i=0;i<n;i++){var r=arguments[i];s("Object",r)&&function(n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(s("Object",n[i])?t[i]=e(!0,t[i],n[i]):t[i]=n[i])}(r)}return t},t.wrap=function(e,t){return t=t||document.createElement("div"),e.nextSibling?e.parentNode.insertBefore(t,e.nextSibling):e.parentNode.appendChild(t),t.appendChild(e)},t.findAncestor=function(e,t){for(;(e=e.parentElement)&&!e.classList.contains(t););return e},t.findAncestorByAttrName=function(e,t){for(var n=e;n;){if(n.hasAttribute(t))return n;n=n.parentElement}return null},t.getAdjacentEl=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;if(e&&t){var i=e.parentNode.parentNode,r=Array.from(i.querySelectorAll(t));return r[r.indexOf(e)+(n>0?1:-1)]}},t.isScrolledIntoView=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;if(e){return n>0?t.scrollTop+t.offsetHeight>=e.offsetTop+e.offsetHeight:e.offsetTop>=t.scrollTop}},t.stripHTML=function(e){return e.replace(/&/g,"&amp;").replace(/>/g,"&rt;").replace(/</g,"&lt;").replace(/"/g,"&quot;")}),c=t.strToEl=function(){var e=document.createElement("div");return function(t){var n=t.trim(),i=void 0;for(e.innerHTML=n,i=e.children[0];e.firstChild;)e.removeChild(e.firstChild);return i}}();t.calcWidthOfInput=function(e,t){var n=e.value||e.placeholder,i=e.offsetWidth;if(n){var r=c("<span>"+a(n)+"</span>");if(r.style.position="absolute",r.style.padding="0",r.style.top="-9999px",r.style.left="-9999px",r.style.width="auto",r.style.whiteSpace="pre",document.body.contains(e)&&window.getComputedStyle){var o=window.getComputedStyle(e);o&&(r.style.fontSize=o.fontSize,r.style.fontFamily=o.fontFamily,r.style.fontWeight=o.fontWeight,r.style.fontStyle=o.fontStyle,r.style.letterSpacing=o.letterSpacing,r.style.textTransform=o.textTransform,r.style.padding=o.padding)}document.body.appendChild(r),requestAnimationFrame(function(){n&&r.offsetWidth!==e.offsetWidth&&(i=r.offsetWidth+4),document.body.removeChild(r),t.call(void 0,i+"px")})}else t.call(void 0,i+"px")},t.sortByAlpha=function(e,t){var n=(e.label||e.value).toLowerCase(),i=(t.label||t.value).toLowerCase();return n<i?-1:n>i?1:0},t.sortByScore=function(e,t){return e.score-t.score},t.dispatchEvent=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,i=new CustomEvent(t,{detail:n,bubbles:!0,cancelable:!0});return e.dispatchEvent(i)},t.regexFilter=function(e,t){return!(!e||!t)&&new RegExp(t.source,"i").test(e)},t.getWindowHeight=function(){var e=document.body,t=document.documentElement;return Math.max(e.scrollHeight,e.offsetHeight,t.clientHeight,t.scrollHeight,t.offsetHeight)},t.reduceToValues=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"value";return e.reduce(function(e,n){return e.push(n[t]),e},[])},t.fetchFromObject=function e(t,n){var i=n.indexOf(".");return i>-1?e(t[n.substring(0,i)],n.substr(i+1)):t[n]},t.isIE11=function(){return!(!navigator.userAgent.match(/Trident/)||!navigator.userAgent.match(/rv[ :]11/))},t.existsInArray=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"value";return e.some(function(e){return s("String",t)?e[n]===t.trim():e[n]===t})},t.cloneObject=function(e){return JSON.parse(JSON.stringify(e))},t.doKeysMatch=function(e,t){var n=Object.keys(e).sort(),i=Object.keys(t).sort();return JSON.stringify(n)===JSON.stringify(i)}},function(e,t){var n=e.exports={version:"2.5.7"};"number"==typeof __e&&(__e=n)},function(e,t){var n=e.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(e,t,n){var i=n(7),r=n(12);e.exports=n(10)?function(e,t,n){return i.f(e,t,r(1,n))}:function(e,t,n){return e[t]=n,e}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.SCROLLING_SPEED=t.KEY_CODES=t.ACTION_TYPES=t.EVENTS=t.DEFAULT_CONFIG=t.DEFAULT_CLASSNAMES=void 0;var i=n(1),r=t.DEFAULT_CLASSNAMES={containerOuter:"choices",containerInner:"choices__inner",input:"choices__input",inputCloned:"choices__input--cloned",list:"choices__list",listItems:"choices__list--multiple",listSingle:"choices__list--single",listDropdown:"choices__list--dropdown",item:"choices__item",itemSelectable:"choices__item--selectable",itemDisabled:"choices__item--disabled",itemChoice:"choices__item--choice",placeholder:"choices__placeholder",group:"choices__group",groupHeading:"choices__heading",button:"choices__button",activeState:"is-active",focusState:"is-focused",openState:"is-open",disabledState:"is-disabled",highlightedState:"is-highlighted",hiddenState:"is-hidden",flippedState:"is-flipped",loadingState:"is-loading",noResults:"has-no-results",noChoices:"has-no-choices"};t.DEFAULT_CONFIG={items:[],choices:[],silent:!1,renderChoiceLimit:-1,maxItemCount:-1,addItems:!0,removeItems:!0,removeItemButton:!1,editItems:!1,duplicateItemsAllowed:!0,delimiter:",",paste:!0,searchEnabled:!0,searchChoices:!0,searchFloor:1,searchResultLimit:4,searchFields:["label","value"],position:"auto",resetScrollPosition:!0,regexFilter:null,shouldSort:!0,shouldSortItems:!1,sortFn:i.sortByAlpha,placeholder:!0,placeholderValue:null,searchPlaceholderValue:null,prependValue:null,appendValue:null,renderSelectedChoices:"auto",loadingText:"Loading...",noResultsText:"No results found",noChoicesText:"No choices to choose from",itemSelectText:"Press to select",uniqueItemText:"Only unique values can be added",addItemText:function(e){return'Press Enter to add <b>"'+(0,i.stripHTML)(e)+'"</b>'},maxItemText:function(e){return"Only "+e+" values can be added"},itemComparer:function(e,t){return e===t},fuseOptions:{includeScore:!0},callbackOnInit:null,callbackOnCreateTemplates:null,classNames:r},t.EVENTS={showDropdown:"showDropdown",hideDropdown:"hideDropdown",change:"change",choice:"choice",search:"search",addItem:"addItem",removeItem:"removeItem",highlightItem:"highlightItem",highlightChoice:"highlightChoice"},t.ACTION_TYPES={ADD_CHOICE:"ADD_CHOICE",FILTER_CHOICES:"FILTER_CHOICES",ACTIVATE_CHOICES:"ACTIVATE_CHOICES",CLEAR_CHOICES:"CLEAR_CHOICES",ADD_GROUP:"ADD_GROUP",ADD_ITEM:"ADD_ITEM",REMOVE_ITEM:"REMOVE_ITEM",HIGHLIGHT_ITEM:"HIGHLIGHT_ITEM",CLEAR_ALL:"CLEAR_ALL"},t.KEY_CODES={BACK_KEY:46,DELETE_KEY:8,ENTER_KEY:13,A_KEY:65,ESC_KEY:27,UP_KEY:38,DOWN_KEY:40,PAGE_UP_KEY:33,PAGE_DOWN_KEY:34},t.SCROLLING_SPEED=4},function(e,t,n){var i=n(3),r=n(2),o=n(4),s=n(24),a=n(14),c=function(e,t,n){var l,u,h,d,f=e&c.F,p=e&c.G,v=e&c.S,m=e&c.P,g=e&c.B,y=p?i:v?i[t]||(i[t]={}):(i[t]||{}).prototype,_=p?r:r[t]||(r[t]={}),b=_.prototype||(_.prototype={});p&&(n=t);for(l in n)u=!f&&y&&void 0!==y[l],h=(u?y:n)[l],d=g&&u?a(h,i):m&&"function"==typeof h?a(Function.call,h):h,y&&s(y,l,h,e&c.U),_[l]!=h&&o(_,l,d),m&&b[l]!=h&&(b[l]=h)};i.core=r,c.F=1,c.G=2,c.S=4,c.P=8,c.B=16,c.W=32,c.U=64,c.R=128,e.exports=c},function(e,t,n){var i=n(8),r=n(44),o=n(45),s=Object.defineProperty;t.f=n(10)?Object.defineProperty:function(e,t,n){if(i(e),t=o(t,!0),i(n),r)try{return s(e,t,n)}catch(e){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(e[t]=n.value),e}},function(e,t,n){var i=n(9);e.exports=function(e){if(!i(e))throw TypeError(e+" is not an object!");return e}},function(e,t){e.exports=function(e){return"object"==typeof e?null!==e:"function"==typeof e}},function(e,t,n){e.exports=!n(22)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(e,t){var n={}.hasOwnProperty;e.exports=function(e,t){return n.call(e,t)}},function(e,t){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},function(e,t){var n=0,i=Math.random();e.exports=function(e){return"Symbol(".concat(void 0===e?"":e,")_",(++n+i).toString(36))}},function(e,t,n){var i=n(46);e.exports=function(e,t,n){if(i(e),void 0===t)return e;switch(n){case 1:return function(n){return e.call(t,n)};case 2:return function(n,i){return e.call(t,n,i)};case 3:return function(n,i,r){return e.call(t,n,i,r)}}return function(){return e.apply(t,arguments)}}},function(e,t){var n={}.toString;e.exports=function(e){return n.call(e).slice(8,-1)}},function(e,t,n){var i=n(17);e.exports=function(e){return Object(i(e))}},function(e,t){e.exports=function(e){if(void 0==e)throw TypeError("Can't call method on  "+e);return e}},function(e,t,n){var i=n(19),r=Math.min;e.exports=function(e){return e>0?r(i(e),9007199254740991):0}},function(e,t){var n=Math.ceil,i=Math.floor;e.exports=function(e){return isNaN(e=+e)?0:(e>0?i:n)(e)}},function(e,t){e.exports={}},function(e,t,n){var i=n(26)("keys"),r=n(13);e.exports=function(e){return i[e]||(i[e]=r(e))}},function(e,t){e.exports=function(e){try{return!!e()}catch(e){return!0}}},function(e,t,n){var i=n(9),r=n(3).document,o=i(r)&&i(r.createElement);e.exports=function(e){return o?r.createElement(e):{}}},function(e,t,n){var i=n(3),r=n(4),o=n(11),s=n(13)("src"),a=Function.toString,c=(""+a).split("toString");n(2).inspectSource=function(e){return a.call(e)},(e.exports=function(e,t,n,a){var l="function"==typeof n;l&&(o(n,"name")||r(n,"name",t)),e[t]!==n&&(l&&(o(n,s)||r(n,s,e[t]?""+e[t]:c.join(String(t)))),e===i?e[t]=n:a?e[t]?e[t]=n:r(e,t,n):(delete e[t],r(e,t,n)))})(Function.prototype,"toString",function(){return"function"==typeof this&&this[s]||a.call(this)})},function(e,t,n){var i=n(15);e.exports=Object("z").propertyIsEnumerable(0)?Object:function(e){return"String"==i(e)?e.split(""):Object(e)}},function(e,t,n){var i=n(2),r=n(3),o=r["__core-js_shared__"]||(r["__core-js_shared__"]={});(e.exports=function(e,t){return o[e]||(o[e]=void 0!==t?t:{})})("versions",[]).push({version:i.version,mode:n(27)?"pure":"global",copyright:"© 2018 Denis Pushkarev (zloirock.ru)"})},function(e,t){e.exports=!1},function(e,t,n){var i=n(0)("unscopables"),r=Array.prototype;void 0==r[i]&&n(4)(r,i,{}),e.exports=function(e){r[i][e]=!0}},function(e,t,n){var i=n(25),r=n(17);e.exports=function(e){return i(r(e))}},function(e,t,n){var i=n(29),r=n(18),o=n(60);e.exports=function(e){return function(t,n,s){var a,c=i(t),l=r(c.length),u=o(s,l);if(e&&n!=n){for(;l>u;)if((a=c[u++])!=a)return!0}else for(;l>u;u++)if((e||u in c)&&c[u]===n)return e||u||0;return!e&&-1}}},function(e,t){e.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(e,t,n){var i=n(7).f,r=n(11),o=n(0)("toStringTag");e.exports=function(e,t,n){e&&!r(e=n?e:e.prototype,o)&&i(e,o,{configurable:!0,value:t})}},function(e,t,n){"use strict";function i(e){var t=I.call(e,w),n=e[w];try{e[w]=void 0;var i=!0}catch(e){}var r=C.call(e);return i&&(t?e[w]=n:delete e[w]),r}function r(e){return k.call(e)}function o(e){return null==e?void 0===e?P:L:D&&D in Object(e)?A(e):x(e)}function s(e,t){return function(n){return e(t(n))}}function a(e){return null!=e&&"object"==typeof e}function c(e){if(!K(e)||j(e)!=R)return!1;var t=N(e);if(null===t)return!0;var n=Y.call(t,"constructor")&&t.constructor;return"function"==typeof n&&n instanceof n&&B.call(n)==G}function l(e,t,n){function i(){p===f&&(p=f.slice())}function r(){return d}function o(e){if("function"!=typeof e)throw new Error("Expected listener to be a function.");var t=!0;return i(),p.push(e),function(){if(t){t=!1,i();var n=p.indexOf(e);p.splice(n,1)}}}function s(e){if(!W(e))throw new Error("Actions must be plain objects. Use custom middleware for async actions.");if(void 0===e.type)throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');if(v)throw new Error("Reducers may not dispatch actions.");try{v=!0,d=h(d,e)}finally{v=!1}for(var t=f=p,n=0;n<t.length;n++){(0,t[n])()}return e}function a(e){if("function"!=typeof e)throw new Error("Expected the nextReducer to be a function.");h=e,s({type:q.INIT})}function c(){var e,t=o;return e={subscribe:function(e){function n(){e.next&&e.next(r())}if("object"!=typeof e)throw new TypeError("Expected the observer to be an object.");return n(),{unsubscribe:t(n)}}},e[U.a]=function(){return this},e}var u;if("function"==typeof t&&void 0===n&&(n=t,t=void 0),void 0!==n){if("function"!=typeof n)throw new Error("Expected the enhancer to be a function.");return n(l)(e,t)}if("function"!=typeof e)throw new Error("Expected the reducer to be a function.");var h=e,d=t,f=[],p=f,v=!1;return s({type:q.INIT}),u={dispatch:s,subscribe:o,getState:r,replaceReducer:a},u[U.a]=c,u}function u(e,t){var n=t&&t.type;return"Given action "+(n&&'"'+n.toString()+'"'||"an action")+', reducer "'+e+'" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.'}function h(e){Object.keys(e).forEach(function(t){var n=e[t];if(void 0===n(void 0,{type:q.INIT}))throw new Error('Reducer "'+t+"\" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.");if(void 0===n(void 0,{type:"@@redux/PROBE_UNKNOWN_ACTION_"+Math.random().toString(36).substring(7).split("").join(".")}))throw new Error('Reducer "'+t+"\" returned undefined when probed with a random type. Don't try to handle "+q.INIT+' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.')})}function d(e){for(var t=Object.keys(e),n={},i=0;i<t.length;i++){var r=t[i];"function"==typeof e[r]&&(n[r]=e[r])}var o=Object.keys(n),s=void 0;try{h(n)}catch(e){s=e}return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments[1];if(s)throw s;for(var i=!1,r={},a=0;a<o.length;a++){var c=o[a],l=n[c],h=e[c],d=l(h,t);if(void 0===d){var f=u(c,t);throw new Error(f)}r[c]=d,i=i||d!==h}return i?r:e}}function f(e,t){return function(){return t(e.apply(void 0,arguments))}}function p(e,t){if("function"==typeof e)return f(e,t);if("object"!=typeof e||null===e)throw new Error("bindActionCreators expected an object or a function, instead received "+(null===e?"null":typeof e)+'. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');for(var n=Object.keys(e),i={},r=0;r<n.length;r++){var o=n[r],s=e[o];"function"==typeof s&&(i[o]=f(s,t))}return i}function v(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return 0===t.length?function(e){return e}:1===t.length?t[0]:t.reduce(function(e,t){return function(){return e(t.apply(void 0,arguments))}})}function m(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return function(n,i,r){var o=e(n,i,r),s=o.dispatch,a=[],c={getState:o.getState,dispatch:function(e){return s(e)}};return a=t.map(function(e){return e(c)}),s=v.apply(void 0,a)(o.dispatch),z({},o,{dispatch:s})}}}Object.defineProperty(t,"__esModule",{value:!0});var g=n(74),y="object"==typeof self&&self&&self.Object===Object&&self,_=g.a||y||Function("return this")(),b=_,E=b.Symbol,S=E,O=Object.prototype,I=O.hasOwnProperty,C=O.toString,w=S?S.toStringTag:void 0,A=i,T=Object.prototype,k=T.toString,x=r,L="[object Null]",P="[object Undefined]",D=S?S.toStringTag:void 0,j=o,M=s,F=M(Object.getPrototypeOf,Object),N=F,K=a,R="[object Object]",V=Function.prototype,H=Object.prototype,B=V.toString,Y=H.hasOwnProperty,G=B.call(Object),W=c,U=n(75),q={INIT:"@@redux/INIT"},z=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e};n.d(t,"createStore",function(){return l}),n.d(t,"combineReducers",function(){return d}),n.d(t,"bindActionCreators",function(){return p}),n.d(t,"applyMiddleware",function(){return m}),n.d(t,"compose",function(){return v})},function(e,t){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t,n){"use strict";function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),o=n(1),s=function(){function e(t){var n=t.element,r=t.classNames;if(i(this,e),Object.assign(this,{element:n,classNames:r}),!(0,o.isElement)(n))throw new TypeError("Invalid element passed");this.isDisabled=!1}return r(e,[{key:"conceal",value:function(){this.element.classList.add(this.classNames.input),this.element.classList.add(this.classNames.hiddenState),this.element.tabIndex="-1";var e=this.element.getAttribute("style");e&&this.element.setAttribute("data-choice-orig-style",e),this.element.setAttribute("aria-hidden","true"),this.element.setAttribute("data-choice","active")}},{key:"reveal",value:function(){this.element.classList.remove(this.classNames.input),this.element.classList.remove(this.classNames.hiddenState),this.element.removeAttribute("tabindex");var e=this.element.getAttribute("data-choice-orig-style");e?(this.element.removeAttribute("data-choice-orig-style"),this.element.setAttribute("style",e)):this.element.removeAttribute("style"),this.element.removeAttribute("aria-hidden"),this.element.removeAttribute("data-choice"),this.element.value=this.element.value}},{key:"enable",value:function(){this.element.removeAttribute("disabled"),this.element.disabled=!1,this.isDisabled=!1}},{key:"disable",value:function(){this.element.setAttribute("disabled",""),this.element.disabled=!0,this.isDisabled=!0}},{key:"triggerEvent",value:function(e,t){(0,o.dispatchEvent)(this.element,e,t)}},{key:"value",get:function(){return this.element.value}}]),e}();t.default=s},function(e,t,n){"use strict";function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}Object.defineProperty(t,"__esModule",{value:!0}),t.TEMPLATES=void 0;var r=n(89),o=function(e){return e&&e.__esModule?e:{default:e}}(r),s=n(1),a=t.TEMPLATES={containerOuter:function(e,t,n,i,r,o){var a=i?'tabindex="0"':"",c=n?'role="listbox"':"",l="";return n&&r&&(c='role="combobox"',l='aria-autocomplete="list"'),(0,s.strToEl)('\n      <div\n        class="'+e.containerOuter+'"\n        data-type="'+o+'"\n        '+c+"\n        "+a+"\n        "+l+'\n        aria-haspopup="true"\n        aria-expanded="false"\n        dir="'+t+'"\n        >\n      </div>\n    ')},containerInner:function(e){return(0,s.strToEl)('\n      <div class="'+e.containerInner+'"></div>\n    ')},itemList:function(e,t){var n,r=(0,o.default)(e.list,(n={},i(n,e.listSingle,t),i(n,e.listItems,!t),n));return(0,s.strToEl)('\n      <div class="'+r+'"></div>\n    ')},placeholder:function(e,t){return(0,s.strToEl)('\n      <div class="'+e.placeholder+'">\n        '+t+"\n      </div>\n    ")},item:function(e,t,n){var r,a=t.active?'aria-selected="true"':"",c=t.disabled?'aria-disabled="true"':"",l=(0,o.default)(e.item,(r={},i(r,e.highlightedState,t.highlighted),i(r,e.itemSelectable,!t.highlighted),i(r,e.placeholder,t.placeholder),r));if(n){var u;return l=(0,o.default)(e.item,(u={},i(u,e.highlightedState,t.highlighted),i(u,e.itemSelectable,!t.disabled),i(u,e.placeholder,t.placeholder),u)),(0,s.strToEl)('\n        <div\n          class="'+l+'"\n          data-item\n          data-id="'+t.id+'"\n          data-value="'+t.value+'"\n          data-deletable\n          '+a+"\n          "+c+"\n          >\n          "+t.label+'\x3c!--\n       --\x3e<button\n            type="button"\n            class="'+e.button+'"\n            data-button\n            aria-label="Remove item: \''+t.value+"'\"\n            >\n            Remove item\n          </button>\n        </div>\n      ")}return(0,s.strToEl)('\n      <div\n        class="'+l+'"\n        data-item\n        data-id="'+t.id+'"\n        data-value="'+t.value+'"\n        '+a+"\n        "+c+"\n        >\n        "+t.label+"\n      </div>\n    ")},choiceList:function(e,t){var n=t?"":'aria-multiselectable="true"';return(0,s.strToEl)('\n      <div\n        class="'+e.list+'"\n        dir="ltr"\n        role="listbox"\n        '+n+"\n        >\n      </div>\n    ")},choiceGroup:function(e,t){var n=t.disabled?'aria-disabled="true"':"",r=(0,o.default)(e.group,i({},e.itemDisabled,t.disabled));return(0,s.strToEl)('\n      <div\n        class="'+r+'"\n        data-group\n        data-id="'+t.id+'"\n        data-value="'+t.value+'"\n        role="group"\n        '+n+'\n        >\n        <div class="'+e.groupHeading+'">'+t.value+"</div>\n      </div>\n    ")},choice:function(e,t,n){var r,a=t.groupId>0?'role="treeitem"':'role="option"',c=(0,o.default)(e.item,e.itemChoice,(r={},i(r,e.itemDisabled,t.disabled),i(r,e.itemSelectable,!t.disabled),i(r,e.placeholder,t.placeholder),r));return(0,s.strToEl)('\n      <div\n        class="'+c+'"\n        data-select-text="'+n+'"\n        data-choice\n        data-id="'+t.id+'"\n        data-value="'+t.value+'"\n        '+(t.disabled?'data-choice-disabled aria-disabled="true"':"data-choice-selectable")+'\n        id="'+t.elementId+'"\n        '+a+"\n        >\n        "+t.label+"\n      </div>\n    ")},input:function(e){var t=(0,o.default)(e.input,e.inputCloned);return(0,s.strToEl)('\n      <input\n        type="text"\n        class="'+t+'"\n        autocomplete="off"\n        autocapitalize="off"\n        spellcheck="false"\n        role="textbox"\n        aria-autocomplete="list"\n        >\n    ')},dropdown:function(e){var t=(0,o.default)(e.list,e.listDropdown);return(0,s.strToEl)('\n      <div\n        class="'+t+'"\n        aria-expanded="false"\n        >\n      </div>\n    ')},notice:function(e,t){var n,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",a=(0,o.default)(e.item,e.itemChoice,(n={},i(n,e.noResults,"no-results"===r),i(n,e.noChoices,"no-choices"===r),n));return(0,s.strToEl)('\n      <div class="'+a+'">\n        '+t+"\n      </div>\n    ")},option:function(e){return(0,s.strToEl)('\n      <option value="'+e.value+'" '+(e.active?"selected":"")+" "+(e.disabled?"disabled":"")+">"+e.label+"</option>\n    ")}};t.default=a},function(e,t,n){e.exports=n(38)},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),c=n(39),l=i(c),u=n(40),h=i(u);n(41);var d=n(73),f=i(d),p=n(82),v=n(5),m=n(36),g=n(90),y=n(91),_=n(92),b=n(93),E=n(1),S=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"[data-choice]",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(s(this,e),(0,E.isType)("String",t)){var i=Array.from(document.querySelectorAll(t));if(i.length>1)return this._generateInstances(i,n)}this.config=h.default.all([v.DEFAULT_CONFIG,e.userDefaults,n]),(0,E.doKeysMatch)(this.config,v.DEFAULT_CONFIG)||console.warn("Unknown config option(s) passed"),["auto","always"].includes(this.config.renderSelectedChoices)||(this.config.renderSelectedChoices="auto");var r=(0,E.isType)("String",t)?document.querySelector(t):t;return r?(this._isTextElement="text"===r.type,this._isSelectOneElement="select-one"===r.type,this._isSelectMultipleElement="select-multiple"===r.type,this._isSelectElement=this._isSelectOneElement||this._isSelectMultipleElement,this._isTextElement?this.passedElement=new p.WrappedInput({element:r,classNames:this.config.classNames,delimiter:this.config.delimiter}):this._isSelectElement&&(this.passedElement=new p.WrappedSelect({element:r,classNames:this.config.classNames})),r?(!0===this.config.shouldSortItems&&this._isSelectOneElement&&!this.config.silent&&console.warn("shouldSortElements: Type of passed element is 'select-one', falling back to false."),this.initialised=!1,this._store=new f.default(this.render),this._initialState={},this._currentState={},this._prevState={},this._currentValue="",this._canSearch=this.config.searchEnabled,this._isScrollingOnIe=!1,this._highlightPosition=0,this._wasTap=!0,this._placeholderValue=this._generatePlaceholderValue(),this._baseId=(0,E.generateId)(this.passedElement.element,"choices-"),this._direction=this.passedElement.element.getAttribute("dir")||"ltr",this._idNames={itemChoice:"item-choice"},this._presetChoices=this.config.choices,this._presetItems=this.config.items,this.passedElement.value&&(this._presetItems=this._presetItems.concat(this.passedElement.value.split(this.config.delimiter))),this._render=this._render.bind(this),this._onFocus=this._onFocus.bind(this),this._onBlur=this._onBlur.bind(this),this._onKeyUp=this._onKeyUp.bind(this),this._onKeyDown=this._onKeyDown.bind(this),this._onClick=this._onClick.bind(this),this._onTouchMove=this._onTouchMove.bind(this),this._onTouchEnd=this._onTouchEnd.bind(this),this._onMouseDown=this._onMouseDown.bind(this),this._onMouseOver=this._onMouseOver.bind(this),this._onFormReset=this._onFormReset.bind(this),this._onAKey=this._onAKey.bind(this),this._onEnterKey=this._onEnterKey.bind(this),this._onEscapeKey=this._onEscapeKey.bind(this),this._onDirectionKey=this._onDirectionKey.bind(this),this._onDeleteKey=this._onDeleteKey.bind(this),"active"===this.passedElement.element.getAttribute("data-choice")&&console.warn("Trying to initialise Choices on element already initialised"),void this.init()):console.error("Passed element was of an invalid type")):console.error("Could not find passed element or passed element was of an invalid type")}return a(e,[{key:"init",value:function(){if(!this.initialised){this._createTemplates(),this._createElements(),this._createStructure(),this._initialState=(0,E.cloneObject)(this._store.state),this._store.subscribe(this._render),this._render(),this._addEventListeners();(!this.config.addItems||this.passedElement.element.hasAttribute("disabled"))&&this.disable(),this.initialised=!0;var e=this.config.callbackOnInit;e&&(0,E.isType)("Function",e)&&e.call(this)}}},{key:"destroy",value:function(){this.initialised&&(this._removeEventListeners(),this.passedElement.reveal(),this.containerOuter.unwrap(this.passedElement.element),this._isSelectElement&&(this.passedElement.options=this._presetChoices),this.clearStore(),this.config.templates=null,this.initialised=!1)}},{key:"enable",value:function(){return this.passedElement.isDisabled&&this.passedElement.enable(),this.containerOuter.isDisabled&&(this._addEventListeners(),this.input.enable(),this.containerOuter.enable()),this}},{key:"disable",value:function(){return this.passedElement.isDisabled||this.passedElement.disable(),this.containerOuter.isDisabled||(this._removeEventListeners(),this.input.disable(),this.containerOuter.disable()),this}},{key:"highlightItem",value:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(!e)return this;var n=e.id,i=e.groupId,r=void 0===i?-1:i,o=e.value,s=void 0===o?"":o,a=e.label,c=void 0===a?"":a,l=r>=0?this._store.getGroupById(r):null;return this._store.dispatch((0,y.highlightItem)(n,!0)),t&&this.passedElement.triggerEvent(v.EVENTS.highlightItem,{id:n,value:s,label:c,groupValue:l&&l.value?l.value:null}),this}},{key:"unhighlightItem",value:function(e){if(!e)return this;var t=e.id,n=e.groupId,i=void 0===n?-1:n,r=e.value,o=void 0===r?"":r,s=e.label,a=void 0===s?"":s,c=i>=0?this._store.getGroupById(i):null;return this._store.dispatch((0,y.highlightItem)(t,!1)),this.passedElement.triggerEvent(v.EVENTS.highlightItem,{id:t,value:o,label:a,groupValue:c&&c.value?c.value:null}),this}},{key:"highlightAll",value:function(){var e=this;return this._store.items.forEach(function(t){return e.highlightItem(t)}),this}},{key:"unhighlightAll",value:function(){var e=this;return this._store.items.forEach(function(t){return e.unhighlightItem(t)}),this}},{key:"removeActiveItemsByValue",value:function(e){var t=this;return this._store.activeItems.filter(function(t){return t.value===e}).forEach(function(e){return t._removeItem(e)}),this}},{key:"removeActiveItems",value:function(e){var t=this;return this._store.activeItems.filter(function(t){return t.id!==e}).forEach(function(e){return t._removeItem(e)}),this}},{key:"removeHighlightedItems",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return this._store.highlightedActiveItems.forEach(function(n){e._removeItem(n),t&&e._triggerChange(n.value)}),this}},{key:"showDropdown",value:function(e){var t=this;return this.dropdown.isActive?this:(requestAnimationFrame(function(){t.dropdown.show(),t.containerOuter.open(t.dropdown.distanceFromTopWindow()),!e&&t._canSearch&&t.input.focus(),t.passedElement.triggerEvent(v.EVENTS.showDropdown,{})}),this)}},{key:"hideDropdown",value:function(e){var t=this;return this.dropdown.isActive?(requestAnimationFrame(function(){t.dropdown.hide(),t.containerOuter.close(),!e&&t._canSearch&&(t.input.removeActiveDescendant(),t.input.blur()),t.passedElement.triggerEvent(v.EVENTS.hideDropdown,{})}),this):this}},{key:"toggleDropdown",value:function(){return this.dropdown.isActive?this.hideDropdown():this.showDropdown(),this}},{key:"getValue",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=this._store.activeItems.reduce(function(t,n){var i=e?n.value:n;return t.push(i),t},[]);return this._isSelectOneElement?t[0]:t}},{key:"setValue",value:function(e){var t=this;return this.initialised?([].concat(o(e)).forEach(function(e){return t._setChoiceOrItem(e)}),this):this}},{key:"setChoiceByValue",value:function(e){var t=this;return!this.initialised||this._isTextElement?this:(((0,E.isType)("Array",e)?e:[e]).forEach(function(e){return t._findAndSelectChoiceByValue(e)}),this)}},{key:"setChoices",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=this,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];if(!this._isSelectElement||!e.length||!t)return this;r&&this._clearChoices(),this.containerOuter.removeLoadingState();var o=function(e){e.choices?n._addGroup({group:e,id:e.id||null,valueKey:t,labelKey:i}):n._addChoice({value:e[t],label:e[i],isSelected:e.selected,isDisabled:e.disabled,customProperties:e.customProperties,placeholder:e.placeholder})};return e.forEach(o),this}},{key:"clearStore",value:function(){return this._store.dispatch((0,b.clearAll)()),this}},{key:"clearInput",value:function(){var e=!this._isSelectOneElement;return this.input.clear(e),!this._isTextElement&&this._canSearch&&(this._isSearching=!1,this._store.dispatch((0,g.activateChoices)(!0))),this}},{key:"ajax",value:function(e){var t=this;return this.initialised&&this._isSelectElement&&e?(requestAnimationFrame(function(){return t._handleLoadingState(!0)}),e(this._ajaxCallback()),this):this}},{key:"_render",value:function(){this._currentState=this._store.state;var e=this._currentState.choices!==this._prevState.choices||this._currentState.groups!==this._prevState.groups||this._currentState.items!==this._prevState.items,t=this._isSelectElement,n=this._currentState.items!==this._prevState.items;e&&(t&&this._renderChoices(),n&&this._renderItems(),this._prevState=this._currentState)}},{key:"_renderChoices",value:function(){var e=this,t=this._store,n=t.activeGroups,i=t.activeChoices,r=document.createDocumentFragment();if(this.choiceList.clear(),this.config.resetScrollPosition&&requestAnimationFrame(function(){return e.choiceList.scrollToTop()}),n.length>=1&&!this._isSearching){var o=i.filter(function(e){return!0===e.placeholder&&-1===e.groupId});o.length>=1&&(r=this._createChoicesFragment(o,r)),r=this._createGroupsFragment(n,i,r)}else i.length>=1&&(r=this._createChoicesFragment(i,r));if(r.childNodes&&r.childNodes.length>0){var s=this._store.activeItems,a=this._canAddItem(s,this.input.value);a.response?(this.choiceList.append(r),this._highlightChoice()):this.choiceList.append(this._getTemplate("notice",a.notice))}else{var c=void 0,l=void 0;this._isSearching?(l=(0,E.isType)("Function",this.config.noResultsText)?this.config.noResultsText():this.config.noResultsText,c=this._getTemplate("notice",l,"no-results")):(l=(0,E.isType)("Function",this.config.noChoicesText)?this.config.noChoicesText():this.config.noChoicesText,c=this._getTemplate("notice",l,"no-choices")),this.choiceList.append(c)}}},{key:"_renderItems",value:function(){var e=this._store.activeItems||[];this.itemList.clear();var t=this._createItemsFragment(e);t.childNodes&&this.itemList.append(t)}},{key:"_createGroupsFragment",value:function(e,t,n){var i=this,r=n||document.createDocumentFragment(),o=function(e){return t.filter(function(t){return i._isSelectOneElement?t.groupId===e.id:t.groupId===e.id&&("always"===i.config.renderSelectedChoices||!t.selected)})};return this.config.shouldSort&&e.sort(this.config.sortFn),e.forEach(function(e){var t=o(e);if(t.length>=1){var n=i._getTemplate("choiceGroup",e);r.appendChild(n),i._createChoicesFragment(t,r,!0)}}),r}},{key:"_createChoicesFragment",value:function(e,t){var n=this,i=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=t||document.createDocumentFragment(),s=this.config,a=s.renderSelectedChoices,c=s.searchResultLimit,l=s.renderChoiceLimit,u=this._isSearching?E.sortByScore:this.config.sortFn,h=e;"auto"!==a||this._isSelectOneElement||(h=e.filter(function(e){return!e.selected}));var d=h.reduce(function(e,t){return t.placeholder?e.placeholderChoices.push(t):e.normalChoices.push(t),e},{placeholderChoices:[],normalChoices:[]}),f=d.placeholderChoices,p=d.normalChoices;(this.config.shouldSort||this._isSearching)&&p.sort(u);var v=h.length,m=[].concat(o(f),o(p));this._isSearching?v=c:l>0&&!i&&(v=l);for(var g=0;g<v;g+=1)m[g]&&function(e){if("auto"!==a||(n._isSelectOneElement||!e.selected)){var t=n._getTemplate("choice",e,n.config.itemSelectText);r.appendChild(t)}}(m[g]);return r}},{key:"_createItemsFragment",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,i=this.config,r=i.shouldSortItems,o=i.sortFn,s=i.removeItemButton,a=n||document.createDocumentFragment();r&&!this._isSelectOneElement&&e.sort(o),this._isTextElement?this.passedElement.value=e:this.passedElement.options=e;var c=function(e){var n=t._getTemplate("item",e,s);a.appendChild(n)};return e.forEach(function(e){return c(e)}),a}},{key:"_triggerChange",value:function(e){void 0!==e&&null!==e&&this.passedElement.triggerEvent(v.EVENTS.change,{value:e})}},{key:"_selectPlaceholderChoice",value:function(){var e=this._store.placeholderChoice;e&&(this._addItem({value:e.value,label:e.label,choiceId:e.id,groupId:e.groupId,placeholder:e.placeholder}),this._triggerChange(e.value))}},{key:"_handleButtonAction",value:function(e,t){if(e&&t&&this.config.removeItems&&this.config.removeItemButton){var n=t.parentNode.getAttribute("data-id"),i=e.find(function(e){return e.id===parseInt(n,10)});this._removeItem(i),this._triggerChange(i.value),this._isSelectOneElement&&this._selectPlaceholderChoice()}}},{key:"_handleItemAction",value:function(e,t){var n=this,i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(e&&t&&this.config.removeItems&&!this._isSelectOneElement){var r=t.getAttribute("data-id");e.forEach(function(e){e.id!==parseInt(r,10)||e.highlighted?!i&&e.highlighted&&n.unhighlightItem(e):n.highlightItem(e)}),this.input.focus()}}},{key:"_handleChoiceAction",value:function(e,t){if(e&&t){var n=t.getAttribute("data-id"),i=this._store.getChoiceById(n),r=e[0]&&e[0].keyCode?e[0].keyCode:null,o=this.dropdown.isActive;if(i.keyCode=r,this.passedElement.triggerEvent(v.EVENTS.choice,{choice:i}),i&&!i.selected&&!i.disabled){this._canAddItem(e,i.value).response&&(this._addItem({value:i.value,label:i.label,choiceId:i.id,groupId:i.groupId,customProperties:i.customProperties,placeholder:i.placeholder,keyCode:i.keyCode}),this._triggerChange(i.value))}this.clearInput(),o&&this._isSelectOneElement&&(this.hideDropdown(!0),this.containerOuter.focus())}}},{key:"_handleBackspace",value:function(e){if(this.config.removeItems&&e){var t=e[e.length-1],n=e.some(function(e){return e.highlighted});this.config.editItems&&!n&&t?(this.input.value=t.value,this.input.setWidth(),this._removeItem(t),this._triggerChange(t.value)):(n||this.highlightItem(t,!1),this.removeHighlightedItems(!0))}}},{key:"_handleLoadingState",value:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],t=this.itemList.getChild("."+this.config.classNames.placeholder);e?(this.disable(),this.containerOuter.addLoadingState(),this._isSelectOneElement?t?t.innerHTML=this.config.loadingText:(t=this._getTemplate("placeholder",this.config.loadingText),this.itemList.append(t)):this.input.placeholder=this.config.loadingText):(this.enable(),this.containerOuter.removeLoadingState(),this._isSelectOneElement?t.innerHTML=this._placeholderValue||"":this.input.placeholder=this._placeholderValue||"")}},{key:"_handleSearch",value:function(e){if(e&&this.input.isFocussed){var t=this._store.choices,n=this.config,i=n.searchFloor,r=n.searchChoices,o=t.some(function(e){return!e.active});if(e&&e.length>=i){var s=r?this._searchChoices(e):0;this.passedElement.triggerEvent(v.EVENTS.search,{value:e,resultCount:s})}else o&&(this._isSearching=!1,this._store.dispatch((0,g.activateChoices)(!0)))}}},{key:"_canAddItem",value:function(e,t){var n=!0,i=(0,E.isType)("Function",this.config.addItemText)?this.config.addItemText(t):this.config.addItemText;if(!this._isSelectOneElement){var r=(0,E.existsInArray)(e,t);this.config.maxItemCount>0&&this.config.maxItemCount<=e.length&&(n=!1,i=(0,E.isType)("Function",this.config.maxItemText)?this.config.maxItemText(this.config.maxItemCount):this.config.maxItemText),this.config.regexFilter&&this._isTextElement&&this.config.addItems&&n&&(n=(0,E.regexFilter)(t,this.config.regexFilter)),!this.config.duplicateItemsAllowed&&r&&n&&(n=!1,i=(0,E.isType)("Function",this.config.uniqueItemText)?this.config.uniqueItemText(t):this.config.uniqueItemText)}return{response:n,notice:i}}},{key:"_ajaxCallback",value:function(){var e=this;return function(t,n,i){if(t&&n){var r=(0,E.isType)("Object",t)?[t]:t;r&&(0,E.isType)("Array",r)&&r.length?(e._handleLoadingState(!1),r.forEach(function(t){t.choices?e._addGroup({group:t,id:t.id||null,valueKey:n,labelKey:i}):e._addChoice({value:(0,E.fetchFromObject)(t,n),label:(0,E.fetchFromObject)(t,i),isSelected:t.selected,isDisabled:t.disabled,customProperties:t.customProperties,placeholder:t.placeholder})}),e._isSelectOneElement&&e._selectPlaceholderChoice()):e._handleLoadingState(!1)}}}},{key:"_searchChoices",value:function(e){var t=(0,E.isType)("String",e)?e.trim():e,n=(0,E.isType)("String",this._currentValue)?this._currentValue.trim():this._currentValue;if(t.length<1&&t===n+" ")return 0;var i=this._store.searchableChoices,r=t,s=[].concat(o(this.config.searchFields)),a=Object.assign(this.config.fuseOptions,{keys:s}),c=new l.default(i,a),u=c.search(r);return this._currentValue=t,this._highlightPosition=0,this._isSearching=!0,this._store.dispatch((0,g.filterChoices)(u)),u.length}},{key:"_addEventListeners",value:function(){document.addEventListener("keyup",this._onKeyUp),document.addEventListener("keydown",this._onKeyDown),document.addEventListener("click",this._onClick),document.addEventListener("touchmove",this._onTouchMove),document.addEventListener("touchend",this._onTouchEnd),document.addEventListener("mousedown",this._onMouseDown),document.addEventListener("mouseover",this._onMouseOver),this._isSelectOneElement&&(this.containerOuter.element.addEventListener("focus",this._onFocus),this.containerOuter.element.addEventListener("blur",this._onBlur)),this.input.element.addEventListener("focus",this._onFocus),this.input.element.addEventListener("blur",this._onBlur),this.input.element.form&&this.input.element.form.addEventListener("reset",this._onFormReset),this.input.addEventListeners()}},{key:"_removeEventListeners",value:function(){document.removeEventListener("keyup",this._onKeyUp),document.removeEventListener("keydown",this._onKeyDown),document.removeEventListener("click",this._onClick),document.removeEventListener("touchmove",this._onTouchMove),document.removeEventListener("touchend",this._onTouchEnd),document.removeEventListener("mousedown",this._onMouseDown),document.removeEventListener("mouseover",this._onMouseOver),this._isSelectOneElement&&(this.containerOuter.element.removeEventListener("focus",this._onFocus),this.containerOuter.element.removeEventListener("blur",this._onBlur)),this.input.element.removeEventListener("focus",this._onFocus),this.input.element.removeEventListener("blur",this._onBlur),this.input.element.form&&this.input.element.form.removeEventListener("reset",this._onFormReset),this.input.removeEventListeners()}},{key:"_onKeyDown",value:function(e){var t,n=e.target,i=e.keyCode,o=e.ctrlKey,s=e.metaKey;if(n===this.input.element||this.containerOuter.element.contains(n)){var a=this._store.activeItems,c=this.input.isFocussed,l=this.dropdown.isActive,u=this.itemList.hasChildren,h=String.fromCharCode(i),d=v.KEY_CODES.BACK_KEY,f=v.KEY_CODES.DELETE_KEY,p=v.KEY_CODES.ENTER_KEY,m=v.KEY_CODES.A_KEY,g=v.KEY_CODES.ESC_KEY,y=v.KEY_CODES.UP_KEY,_=v.KEY_CODES.DOWN_KEY,b=v.KEY_CODES.PAGE_UP_KEY,E=v.KEY_CODES.PAGE_DOWN_KEY,S=o||s;!this._isTextElement&&/[a-zA-Z0-9-_ ]/.test(h)&&this.showDropdown();var O=(t={},r(t,m,this._onAKey),r(t,p,this._onEnterKey),r(t,g,this._onEscapeKey),r(t,y,this._onDirectionKey),r(t,b,this._onDirectionKey),r(t,_,this._onDirectionKey),r(t,E,this._onDirectionKey),r(t,f,this._onDeleteKey),r(t,d,this._onDeleteKey),t);O[i]&&O[i]({event:e,target:n,keyCode:i,metaKey:s,activeItems:a,hasFocusedInput:c,hasActiveDropdown:l,hasItems:u,hasCtrlDownKeyPressed:S})}}},{key:"_onKeyUp",value:function(e){var t=e.target,n=e.keyCode;if(t===this.input.element){var i=this.input.value,r=this._store.activeItems,o=this._canAddItem(r,i);if(this._isTextElement)if(i){if(o.notice){var s=this._getTemplate("notice",o.notice);this.dropdown.element.innerHTML=s.outerHTML}!0===o.response?this.showDropdown(!0):o.notice||this.hideDropdown(!0)}else this.hideDropdown(!0);else{var a=v.KEY_CODES.BACK_KEY,c=v.KEY_CODES.DELETE_KEY;n!==a&&n!==c||t.value?this._canSearch&&o.response&&this._handleSearch(this.input.value):!this._isTextElement&&this._isSearching&&(this._isSearching=!1,this._store.dispatch((0,g.activateChoices)(!0)))}this._canSearch=this.config.searchEnabled}}},{key:"_onAKey",value:function(e){var t=e.hasItems;e.hasCtrlDownKeyPressed&&t&&(this._canSearch=!1,this.config.removeItems&&!this.input.value&&this.input.element===document.activeElement&&this.highlightAll())}},{key:"_onEnterKey",value:function(e){var t=e.event,n=e.target,i=e.activeItems,r=e.hasActiveDropdown,o=v.KEY_CODES.ENTER_KEY;if(this._isTextElement&&n.value){var s=this.input.value;this._canAddItem(i,s).response&&(this.hideDropdown(!0),this._addItem({value:s}),this._triggerChange(s),this.clearInput())}if(n.hasAttribute("data-button")&&(this._handleButtonAction(i,n),t.preventDefault()),r){var a=this.dropdown.getChild("."+this.config.classNames.highlightedState);a&&(i[0]&&(i[0].keyCode=o),this._handleChoiceAction(i,a)),t.preventDefault()}else this._isSelectOneElement&&(this.showDropdown(),t.preventDefault())}},{key:"_onEscapeKey",value:function(e){e.hasActiveDropdown&&(this.hideDropdown(!0),this.containerOuter.focus())}},{key:"_onDirectionKey",value:function(e){var t=e.event,n=e.hasActiveDropdown,i=e.keyCode,r=e.metaKey,o=v.KEY_CODES.DOWN_KEY,s=v.KEY_CODES.PAGE_UP_KEY,a=v.KEY_CODES.PAGE_DOWN_KEY;if(n||this._isSelectOneElement){this.showDropdown(),this._canSearch=!1;var c=i===o||i===a?1:-1,l=r||i===a||i===s,u=void 0;if(l)u=c>0?Array.from(this.dropdown.element.querySelectorAll("[data-choice-selectable]")).pop():this.dropdown.element.querySelector("[data-choice-selectable]");else{var h=this.dropdown.element.querySelector("."+this.config.classNames.highlightedState);u=h?(0,E.getAdjacentEl)(h,"[data-choice-selectable]",c):this.dropdown.element.querySelector("[data-choice-selectable]")}u&&((0,E.isScrolledIntoView)(u,this.choiceList.element,c)||this.choiceList.scrollToChoice(u,c),this._highlightChoice(u)),t.preventDefault()}}},{key:"_onDeleteKey",value:function(e){var t=e.event,n=e.target,i=e.hasFocusedInput,r=e.activeItems;!i||n.value||this._isSelectOneElement||(this._handleBackspace(r),t.preventDefault())}},{key:"_onTouchMove",value:function(){!0===this._wasTap&&(this._wasTap=!1)}},{key:"_onTouchEnd",value:function(e){var t=e.target||e.touches[0].target;if(!0===this._wasTap&&this.containerOuter.element.contains(t)){(t===this.containerOuter.element||t===this.containerInner.element)&&!this._isSelectOneElement&&(this._isTextElement?this.input.focus():this.showDropdown()),e.stopPropagation()}this._wasTap=!0}},{key:"_onMouseDown",value:function(e){var t=e.target,n=e.shiftKey;if(t===this.choiceList&&(0,E.isIE11)()&&(this._isScrollingOnIe=!0),this.containerOuter.element.contains(t)&&t!==this.input.element){var i=this._store.activeItems,r=n,o=(0,E.findAncestorByAttrName)(t,"data-button"),s=(0,E.findAncestorByAttrName)(t,"data-item"),a=(0,E.findAncestorByAttrName)(t,"data-choice");o?this._handleButtonAction(i,o):s?this._handleItemAction(i,s,r):a&&this._handleChoiceAction(i,a),e.preventDefault()}}},{key:"_onMouseOver",value:function(e){var t=e.target;(t===this.dropdown||this.dropdown.element.contains(t))&&t.hasAttribute("data-choice")&&this._highlightChoice(t)}},{key:"_onClick",value:function(e){var t=e.target;if(this.containerOuter.element.contains(t))this.dropdown.isActive||this.containerOuter.isDisabled?this._isSelectOneElement&&t!==this.input.element&&!this.dropdown.element.contains(t)&&this.hideDropdown():this._isTextElement?document.activeElement!==this.input.element&&this.input.focus():(this.showDropdown(),this.containerOuter.focus());else{this._store.highlightedActiveItems&&this.unhighlightAll(),this.containerOuter.removeFocusState(),this.hideDropdown(!0)}}},{key:"_onFocus",value:function(e){var t=this,n=e.target;if(this.containerOuter.element.contains(n)){({text:function(){n===t.input.element&&t.containerOuter.addFocusState()},"select-one":function(){t.containerOuter.addFocusState(),n===t.input.element&&t.showDropdown(!0)},"select-multiple":function(){n===t.input.element&&(t.showDropdown(!0),t.containerOuter.addFocusState())}})[this.passedElement.element.type]()}}},{key:"_onBlur",value:function(e){var t=this,n=e.target;if(this.containerOuter.element.contains(n)&&!this._isScrollingOnIe){var i=this._store.activeItems,r=i.some(function(e){return e.highlighted});({text:function(){n===t.input.element&&(t.containerOuter.removeFocusState(),r&&t.unhighlightAll(),t.hideDropdown(!0))},"select-one":function(){t.containerOuter.removeFocusState(),(n===t.input.element||n===t.containerOuter.element&&!t._canSearch)&&t.hideDropdown(!0)},"select-multiple":function(){n===t.input.element&&(t.containerOuter.removeFocusState(),t.hideDropdown(!0),r&&t.unhighlightAll())}})[this.passedElement.element.type]()}else this._isScrollingOnIe=!1,this.input.element.focus()}},{key:"_onFormReset",value:function(){this._store.dispatch((0,b.resetTo)(this._initialState))}},{key:"_highlightChoice",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,n=Array.from(this.dropdown.element.querySelectorAll("[data-choice-selectable]"));if(n.length){var i=t;Array.from(this.dropdown.element.querySelectorAll("."+this.config.classNames.highlightedState)).forEach(function(t){t.classList.remove(e.config.classNames.highlightedState),t.setAttribute("aria-selected","false")}),i?this._highlightPosition=n.indexOf(i):(i=n.length>this._highlightPosition?n[this._highlightPosition]:n[n.length-1])||(i=n[0]),i.classList.add(this.config.classNames.highlightedState),i.setAttribute("aria-selected","true"),this.passedElement.triggerEvent(v.EVENTS.highlightChoice,{el:i}),this.dropdown.isActive&&(this.input.setActiveDescendant(i.id),this.containerOuter.setActiveDescendant(i.id))}}},{key:"_addItem",value:function(e){var t=e.value,n=e.label,i=void 0===n?null:n,r=e.choiceId,o=void 0===r?-1:r,s=e.groupId,a=void 0===s?-1:s,c=e.customProperties,l=void 0===c?null:c,u=e.placeholder,h=void 0!==u&&u,d=e.keyCode,f=void 0===d?null:d,p=(0,E.isType)("String",t)?t.trim():t,m=f,g=l,_=this._store.items,b=i||p,S=parseInt(o,10)||-1,O=a>=0?this._store.getGroupById(a):null,I=_?_.length+1:1;return this.config.prependValue&&(p=this.config.prependValue+p.toString()),this.config.appendValue&&(p+=this.config.appendValue.toString()),this._store.dispatch((0,y.addItem)({value:p,label:b,id:I,choiceId:S,groupId:a,customProperties:l,placeholder:h,keyCode:m})),this._isSelectOneElement&&this.removeActiveItems(I),this.passedElement.triggerEvent(v.EVENTS.addItem,{id:I,value:p,label:b,customProperties:g,groupValue:O&&O.value?O.value:void 0,keyCode:m}),this}},{key:"_removeItem",value:function(e){if(!e||!(0,E.isType)("Object",e))return this;var t=e.id,n=e.value,i=e.label,r=e.choiceId,o=e.groupId,s=o>=0?this._store.getGroupById(o):null;return this._store.dispatch((0,y.removeItem)(t,r)),s&&s.value?this.passedElement.triggerEvent(v.EVENTS.removeItem,{id:t,value:n,label:i,groupValue:s.value}):this.passedElement.triggerEvent(v.EVENTS.removeItem,{id:t,value:n,label:i}),this}},{key:"_addChoice",value:function(e){var t=e.value,n=e.label,i=void 0===n?null:n,r=e.isSelected,o=void 0!==r&&r,s=e.isDisabled,a=void 0!==s&&s,c=e.groupId,l=void 0===c?-1:c,u=e.customProperties,h=void 0===u?null:u,d=e.placeholder,f=void 0!==d&&d,p=e.keyCode,v=void 0===p?null:p;if(void 0!==t&&null!==t){var m=this._store.choices,y=i||t,_=m?m.length+1:1,b=this._baseId+"-"+this._idNames.itemChoice+"-"+_;this._store.dispatch((0,g.addChoice)({value:t,label:y,id:_,groupId:l,disabled:a,elementId:b,customProperties:h,placeholder:f,keyCode:v})),o&&this._addItem({value:t,label:y,choiceId:_,customProperties:h,placeholder:f,keyCode:v})}}},{key:"_clearChoices",value:function(){this._store.dispatch((0,g.clearChoices)())}},{key:"_addGroup",value:function(e){var t=this,n=e.group,i=e.id,r=e.valueKey,o=void 0===r?"value":r,s=e.labelKey,a=void 0===s?"label":s,c=(0,E.isType)("Object",n)?n.choices:Array.from(n.getElementsByTagName("OPTION")),l=i||Math.floor((new Date).valueOf()*Math.random()),u=!!n.disabled&&n.disabled;if(c){this._store.dispatch((0,_.addGroup)(n.label,l,!0,u));var h=function(e){var n=e.disabled||e.parentNode&&e.parentNode.disabled;t._addChoice({value:e[o],label:(0,E.isType)("Object",e)?e[a]:e.innerHTML,isSelected:e.selected,isDisabled:n,groupId:l,customProperties:e.customProperties,placeholder:e.placeholder})};c.forEach(h)}else this._store.dispatch((0,_.addGroup)(n.label,n.id,!1,n.disabled))}},{key:"_getTemplate",value:function(e){var t;if(!e)return null;for(var n=this.config,i=n.templates,r=n.classNames,o=arguments.length,s=Array(o>1?o-1:0),a=1;a<o;a++)s[a-1]=arguments[a];return(t=i[e]).call.apply(t,[this,r].concat(s))}},{key:"_createTemplates",value:function(){var e=this.config.callbackOnCreateTemplates,t={};e&&(0,E.isType)("Function",e)&&(t=e.call(this,E.strToEl)),this.config.templates=(0,E.extend)(m.TEMPLATES,t)}},{key:"_createElements",value:function(){this.containerOuter=new p.Container({element:this._getTemplate("containerOuter",this._direction,this._isSelectElement,this._isSelectOneElement,this.config.searchEnabled,this.passedElement.element.type),classNames:this.config.classNames,type:this.passedElement.element.type,position:this.config.position}),this.containerInner=new p.Container({element:this._getTemplate("containerInner"),classNames:this.config.classNames,type:this.passedElement.element.type,position:this.config.position}),this.input=new p.Input({element:this._getTemplate("input"),classNames:this.config.classNames,type:this.passedElement.element.type}),this.choiceList=new p.List({element:this._getTemplate("choiceList",this._isSelectOneElement)}),this.itemList=new p.List({element:this._getTemplate("itemList",this._isSelectOneElement)}),this.dropdown=new p.Dropdown({element:this._getTemplate("dropdown"),classNames:this.config.classNames,type:this.passedElement.element.type})}},{key:"_createStructure",value:function(){this.passedElement.conceal(),this.containerInner.wrap(this.passedElement.element),this.containerOuter.wrap(this.containerInner.element),this._isSelectOneElement?this.input.placeholder=this.config.searchPlaceholderValue||"":this._placeholderValue&&(this.input.placeholder=this._placeholderValue,this.input.setWidth(!0)),this.containerOuter.element.appendChild(this.containerInner.element),this.containerOuter.element.appendChild(this.dropdown.element),this.containerInner.element.appendChild(this.itemList.element),this._isTextElement||this.dropdown.element.appendChild(this.choiceList.element),this._isSelectOneElement?this.config.searchEnabled&&this.dropdown.element.insertBefore(this.input.element,this.dropdown.element.firstChild):this.containerInner.element.appendChild(this.input.element),this._isSelectElement?this._addPredefinedChoices():this._isTextElement&&this._addPredefinedItems()}},{key:"_addPredefinedChoices",value:function(){var e=this,t=this.passedElement.optionGroups;if(this._highlightPosition=0,this._isSearching=!1,t&&t.length){var n=this.passedElement.placeholderOption;n&&"SELECT"===n.parentNode.tagName&&this._addChoice({value:n.value,label:n.innerHTML,isSelected:n.selected,isDisabled:n.disabled,placeholder:!0}),t.forEach(function(t){return e._addGroup({group:t,id:t.id||null})})}else{var i=this.passedElement.options,r=this.config.sortFn,o=this._presetChoices;i.forEach(function(e){o.push({value:e.value,label:e.innerHTML,selected:e.selected,disabled:e.disabled||e.parentNode.disabled,placeholder:e.hasAttribute("placeholder")})}),this.config.shouldSort&&o.sort(r);var s=o.some(function(e){return e.selected}),a=function(t,n){var i=t.value,r=t.label,o=t.customProperties,a=t.placeholder;if(e._isSelectElement)if(t.choices)e._addGroup({group:t,id:t.id||null});else{var c=e._isSelectOneElement&&!s&&0===n,l=!!c||t.selected,u=!c&&t.disabled;e._addChoice({value:i,label:r,isSelected:l,isDisabled:u,customProperties:o,placeholder:a})}else e._addChoice({value:i,label:r,isSelected:t.selected,isDisabled:t.disabled,customProperties:o,placeholder:a})};o.forEach(function(e,t){return a(e,t)})}}},{key:"_addPredefinedItems",value:function(){var e=this,t=function(t){var n=(0,E.getType)(t);"Object"===n&&t.value?e._addItem({value:t.value,label:t.label,choiceId:t.id,customProperties:t.customProperties,placeholder:t.placeholder}):"String"===n&&e._addItem({value:t})};this._presetItems.forEach(function(e){return t(e)})}},{key:"_setChoiceOrItem",value:function(e){var t=this,n=(0,E.getType)(e).toLowerCase();({object:function(){e.value&&(t._isTextElement?t._addItem({value:e.value,label:e.label,choiceId:e.id,customProperties:e.customProperties,placeholder:e.placeholder}):t._addChoice({value:e.value,label:e.label,isSelected:!0,isDisabled:!1,customProperties:e.customProperties,placeholder:e.placeholder}))},string:function(){t._isTextElement?t._addItem({value:e}):t._addChoice({value:e,label:e,isSelected:!0,isDisabled:!1})}})[n]()}},{key:"_findAndSelectChoiceByValue",value:function(e){var t=this,n=this._store.choices,i=n.find(function(n){return t.config.itemComparer(n.value,e)});i&&!i.selected&&this._addItem({value:i.value,label:i.label,choiceId:i.id,groupId:i.groupId,customProperties:i.customProperties,placeholder:i.placeholder,keyCode:i.keyCode})}},{key:"_generateInstances",value:function(t,n){return t.reduce(function(t,i){return t.push(new e(i,n)),t},[this])}},{key:"_generatePlaceholderValue",value:function(){return!this._isSelectOneElement&&(!!this.config.placeholder&&(this.config.placeholderValue||this.passedElement.element.getAttribute("placeholder")))}}]),e}();S.userDefaults={},e.exports=S},function(e,t,n){!function(t,n){e.exports=n()}(0,function(){return function(e){function t(i){if(n[i])return n[i].exports;var r=n[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,i){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:i})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=8)}([function(e,t,n){"use strict";e.exports=function(e){return"[object Array]"===Object.prototype.toString.call(e)}},function(e,t,n){"use strict";function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),o=n(5),s=n(7),a=n(4),c=function(){function e(t,n){var r=n.location,o=void 0===r?0:r,s=n.distance,c=void 0===s?100:s,l=n.threshold,u=void 0===l?.6:l,h=n.maxPatternLength,d=void 0===h?32:h,f=n.isCaseSensitive,p=void 0!==f&&f,v=n.tokenSeparator,m=void 0===v?/ +/g:v,g=n.findAllMatches,y=void 0!==g&&g,_=n.minMatchCharLength,b=void 0===_?1:_;i(this,e),this.options={location:o,distance:c,threshold:u,maxPatternLength:d,isCaseSensitive:p,tokenSeparator:m,findAllMatches:y,minMatchCharLength:b},this.pattern=this.options.isCaseSensitive?t:t.toLowerCase(),this.pattern.length<=d&&(this.patternAlphabet=a(this.pattern))}return r(e,[{key:"search",value:function(e){if(this.options.isCaseSensitive||(e=e.toLowerCase()),this.pattern===e)return{isMatch:!0,score:0,matchedIndices:[[0,e.length-1]]};var t=this.options,n=t.maxPatternLength,i=t.tokenSeparator;if(this.pattern.length>n)return o(e,this.pattern,i);var r=this.options,a=r.location,c=r.distance,l=r.threshold,u=r.findAllMatches,h=r.minMatchCharLength;return s(e,this.pattern,this.patternAlphabet,{location:a,distance:c,threshold:l,findAllMatches:u,minMatchCharLength:h})}}]),e}();e.exports=c},function(e,t,n){"use strict";var i=n(0),r=function e(t,n,r){if(n){var o=n.indexOf("."),s=n,a=null;-1!==o&&(s=n.slice(0,o),a=n.slice(o+1));var c=t[s];if(null!==c&&void 0!==c)if(a||"string"!=typeof c&&"number"!=typeof c)if(i(c))for(var l=0,u=c.length;l<u;l+=1)e(c[l],a,r);else a&&e(c,a,r);else r.push(c.toString())}else r.push(t);return r};e.exports=function(e,t){return r(e,t,[])}},function(e,t,n){"use strict";e.exports=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=[],i=-1,r=-1,o=0,s=e.length;o<s;o+=1){var a=e[o];a&&-1===i?i=o:a||-1===i||(r=o-1,r-i+1>=t&&n.push([i,r]),i=-1)}return e[o-1]&&o-i>=t&&n.push([i,o-1]),n}},function(e,t,n){"use strict";e.exports=function(e){for(var t={},n=e.length,i=0;i<n;i+=1)t[e.charAt(i)]=0;for(var r=0;r<n;r+=1)t[e.charAt(r)]|=1<<n-r-1;return t}},function(e,t,n){"use strict";var i=/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g;e.exports=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:/ +/g,r=new RegExp(t.replace(i,"\\$&").replace(n,"|")),o=e.match(r),s=!!o,a=[];if(s)for(var c=0,l=o.length;c<l;c+=1){var u=o[c];a.push([e.indexOf(u),u.length-1])}return{score:s?.5:1,isMatch:s,matchedIndices:a}}},function(e,t,n){"use strict";e.exports=function(e,t){var n=t.errors,i=void 0===n?0:n,r=t.currentLocation,o=void 0===r?0:r,s=t.expectedLocation,a=void 0===s?0:s,c=t.distance,l=void 0===c?100:c,u=i/e.length,h=Math.abs(a-o);return l?u+h/l:h?1:u}},function(e,t,n){"use strict";var i=n(6),r=n(3);e.exports=function(e,t,n,o){for(var s=o.location,a=void 0===s?0:s,c=o.distance,l=void 0===c?100:c,u=o.threshold,h=void 0===u?.6:u,d=o.findAllMatches,f=void 0!==d&&d,p=o.minMatchCharLength,v=void 0===p?1:p,m=a,g=e.length,y=h,_=e.indexOf(t,m),b=t.length,E=[],S=0;S<g;S+=1)E[S]=0;if(-1!==_){var O=i(t,{errors:0,currentLocation:_,expectedLocation:m,distance:l});if(y=Math.min(O,y),-1!==(_=e.lastIndexOf(t,m+b))){var I=i(t,{errors:0,currentLocation:_,expectedLocation:m,distance:l});y=Math.min(I,y)}}_=-1;for(var C=[],w=1,A=b+g,T=1<<b-1,k=0;k<b;k+=1){for(var x=0,L=A;x<L;){i(t,{errors:k,currentLocation:m+L,expectedLocation:m,distance:l})<=y?x=L:A=L,L=Math.floor((A-x)/2+x)}A=L;var P=Math.max(1,m-L+1),D=f?g:Math.min(m+L,g)+b,j=Array(D+2);j[D+1]=(1<<k)-1;for(var M=D;M>=P;M-=1){var F=M-1,N=n[e.charAt(F)];if(N&&(E[F]=1),j[M]=(j[M+1]<<1|1)&N,0!==k&&(j[M]|=(C[M+1]|C[M])<<1|1|C[M+1]),j[M]&T&&(w=i(t,{errors:k,currentLocation:F,expectedLocation:m,distance:l}))<=y){if(y=w,(_=F)<=m)break;P=Math.max(1,2*m-_)}}if(i(t,{errors:k+1,currentLocation:m,expectedLocation:m,distance:l})>y)break;C=j}return{isMatch:_>=0,score:0===w?.001:w,matchedIndices:r(E,v)}}},function(e,t,n){"use strict";function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),o=n(1),s=n(2),a=n(0),c=function(){function e(t,n){var r=n.location,o=void 0===r?0:r,a=n.distance,c=void 0===a?100:a,l=n.threshold,u=void 0===l?.6:l,h=n.maxPatternLength,d=void 0===h?32:h,f=n.caseSensitive,p=void 0!==f&&f,v=n.tokenSeparator,m=void 0===v?/ +/g:v,g=n.findAllMatches,y=void 0!==g&&g,_=n.minMatchCharLength,b=void 0===_?1:_,E=n.id,S=void 0===E?null:E,O=n.keys,I=void 0===O?[]:O,C=n.shouldSort,w=void 0===C||C,A=n.getFn,T=void 0===A?s:A,k=n.sortFn,x=void 0===k?function(e,t){return e.score-t.score}:k,L=n.tokenize,P=void 0!==L&&L,D=n.matchAllTokens,j=void 0!==D&&D,M=n.includeMatches,F=void 0!==M&&M,N=n.includeScore,K=void 0!==N&&N,R=n.verbose,V=void 0!==R&&R;i(this,e),this.options={location:o,distance:c,threshold:u,maxPatternLength:d,isCaseSensitive:p,tokenSeparator:m,findAllMatches:y,minMatchCharLength:b,id:S,keys:I,includeMatches:F,includeScore:K,shouldSort:w,getFn:T,sortFn:x,verbose:V,tokenize:P,matchAllTokens:j},this.setCollection(t)}return r(e,[{key:"setCollection",value:function(e){return this.list=e,e}},{key:"search",value:function(e){this._log('---------\nSearch pattern: "'+e+'"');var t=this._prepareSearchers(e),n=t.tokenSearchers,i=t.fullSearcher,r=this._search(n,i),o=r.weights,s=r.results;return this._computeScore(o,s),this.options.shouldSort&&this._sort(s),this._format(s)}},{key:"_prepareSearchers",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=[];if(this.options.tokenize)for(var n=e.split(this.options.tokenSeparator),i=0,r=n.length;i<r;i+=1)t.push(new o(n[i],this.options));return{tokenSearchers:t,fullSearcher:new o(e,this.options)}}},{key:"_search",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments[1],n=this.list,i={},r=[];if("string"==typeof n[0]){for(var o=0,s=n.length;o<s;o+=1)this._analyze({key:"",value:n[o],record:o,index:o},{resultMap:i,results:r,tokenSearchers:e,fullSearcher:t});return{weights:null,results:r}}for(var a={},c=0,l=n.length;c<l;c+=1)for(var u=n[c],h=0,d=this.options.keys.length;h<d;h+=1){var f=this.options.keys[h];if("string"!=typeof f){if(a[f.name]={weight:1-f.weight||1},f.weight<=0||f.weight>1)throw new Error("Key weight has to be > 0 and <= 1");f=f.name}else a[f]={weight:1};this._analyze({key:f,value:this.options.getFn(u,f),record:u,index:c},{resultMap:i,results:r,tokenSearchers:e,fullSearcher:t})}return{weights:a,results:r}}},{key:"_analyze",value:function(e,t){var n=e.key,i=e.arrayIndex,r=void 0===i?-1:i,o=e.value,s=e.record,c=e.index,l=t.tokenSearchers,u=void 0===l?[]:l,h=t.fullSearcher,d=void 0===h?[]:h,f=t.resultMap,p=void 0===f?{}:f,v=t.results,m=void 0===v?[]:v;if(void 0!==o&&null!==o){var g=!1,y=-1,_=0;if("string"==typeof o){this._log("\nKey: "+(""===n?"-":n));var b=d.search(o);if(this._log('Full text: "'+o+'", score: '+b.score),this.options.tokenize){for(var E=o.split(this.options.tokenSeparator),S=[],O=0;O<u.length;O+=1){var I=u[O];this._log('\nPattern: "'+I.pattern+'"');for(var C=!1,w=0;w<E.length;w+=1){var A=E[w],T=I.search(A),k={};T.isMatch?(k[A]=T.score,g=!0,C=!0,S.push(T.score)):(k[A]=1,this.options.matchAllTokens||S.push(1)),this._log('Token: "'+A+'", score: '+k[A])}C&&(_+=1)}y=S[0];for(var x=S.length,L=1;L<x;L+=1)y+=S[L];y/=x,this._log("Token score average:",y)}var P=b.score;y>-1&&(P=(P+y)/2),this._log("Score average:",P);var D=!this.options.tokenize||!this.options.matchAllTokens||_>=u.length;if(this._log("\nCheck Matches: "+D),(g||b.isMatch)&&D){var j=p[c];j?j.output.push({key:n,arrayIndex:r,value:o,score:P,matchedIndices:b.matchedIndices}):(p[c]={item:s,output:[{key:n,arrayIndex:r,value:o,score:P,matchedIndices:b.matchedIndices}]},m.push(p[c]))}}else if(a(o))for(var M=0,F=o.length;M<F;M+=1)this._analyze({key:n,arrayIndex:M,value:o[M],record:s,index:c},{resultMap:p,results:m,tokenSearchers:u,fullSearcher:d})}}},{key:"_computeScore",value:function(e,t){this._log("\n\nComputing score:\n");for(var n=0,i=t.length;n<i;n+=1){for(var r=t[n].output,o=r.length,s=0,a=1,c=0;c<o;c+=1){var l=e?e[r[c].key].weight:1,u=1===l?r[c].score:r[c].score||.001,h=u*l;1!==l?a=Math.min(a,h):(r[c].nScore=h,s+=h)}t[n].score=1===a?s/o:a,this._log(t[n])}}},{key:"_sort",value:function(e){this._log("\n\nSorting...."),e.sort(this.options.sortFn)}},{key:"_format",value:function(e){var t=[];this._log("\n\nOutput:\n\n",JSON.stringify(e));var n=[];this.options.includeMatches&&n.push(function(e,t){var n=e.output;t.matches=[];for(var i=0,r=n.length;i<r;i+=1){var o=n[i];if(0!==o.matchedIndices.length){var s={indices:o.matchedIndices,value:o.value};o.key&&(s.key=o.key),o.hasOwnProperty("arrayIndex")&&o.arrayIndex>-1&&(s.arrayIndex=o.arrayIndex),t.matches.push(s)}}}),this.options.includeScore&&n.push(function(e,t){t.score=e.score});for(var i=0,r=e.length;i<r;i+=1){var o=e[i];if(this.options.id&&(o.item=this.options.getFn(o.item,this.options.id)[0]),n.length){for(var s={item:o.item},a=0,c=n.length;a<c;a+=1)n[a](o,s);t.push(s)}else t.push(o.item)}return t}},{key:"_log",value:function(){if(this.options.verbose){var e;(e=console).log.apply(e,arguments)}}}]),e}();e.exports=c}])})},function(e,t,n){"use strict";function i(e){return!!e&&"object"==typeof e}function r(e){var t=Object.prototype.toString.call(e);return"[object RegExp]"===t||"[object Date]"===t||o(e)}function o(e){return e.$$typeof===f}function s(e){return Array.isArray(e)?[]:{}}function a(e,t){return!1!==t.clone&&t.isMergeableObject(e)?u(s(e),e,t):e}function c(e,t,n){return e.concat(t).map(function(e){return a(e,n)})}function l(e,t,n){var i={};return n.isMergeableObject(e)&&Object.keys(e).forEach(function(t){i[t]=a(e[t],n)}),Object.keys(t).forEach(function(r){n.isMergeableObject(t[r])&&e[r]?i[r]=u(e[r],t[r],n):i[r]=a(t[r],n)}),i}function u(e,t,n){n=n||{},n.arrayMerge=n.arrayMerge||c,n.isMergeableObject=n.isMergeableObject||h;var i=Array.isArray(t);return i===Array.isArray(e)?i?n.arrayMerge(e,t,n):l(e,t,n):a(t,n)}Object.defineProperty(t,"__esModule",{value:!0});var h=function(e){return i(e)&&!r(e)},d="function"==typeof Symbol&&Symbol.for,f=d?Symbol.for("react.element"):60103;u.all=function(e,t){if(!Array.isArray(e))throw new Error("first argument should be an array");return e.reduce(function(e,n){return u(e,n,t)},{})};var p=u;t.default=p},function(e,t,n){"use strict";n(42),n(51),n(70),n(72)},function(e,t,n){n(43),e.exports=n(2).Array.find},function(e,t,n){"use strict";var i=n(6),r=n(47)(5),o=!0;"find"in[]&&Array(1).find(function(){o=!1}),i(i.P+i.F*o,"Array",{find:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}}),n(28)("find")},function(e,t,n){e.exports=!n(10)&&!n(22)(function(){return 7!=Object.defineProperty(n(23)("div"),"a",{get:function(){return 7}}).a})},function(e,t,n){var i=n(9);e.exports=function(e,t){if(!i(e))return e;var n,r;if(t&&"function"==typeof(n=e.toString)&&!i(r=n.call(e)))return r;if("function"==typeof(n=e.valueOf)&&!i(r=n.call(e)))return r;if(!t&&"function"==typeof(n=e.toString)&&!i(r=n.call(e)))return r;throw TypeError("Can't convert object to primitive value")}},function(e,t){e.exports=function(e){if("function"!=typeof e)throw TypeError(e+" is not a function!");return e}},function(e,t,n){var i=n(14),r=n(25),o=n(16),s=n(18),a=n(48);e.exports=function(e,t){var n=1==e,c=2==e,l=3==e,u=4==e,h=6==e,d=5==e||h,f=t||a;return function(t,a,p){for(var v,m,g=o(t),y=r(g),_=i(a,p,3),b=s(y.length),E=0,S=n?f(t,b):c?f(t,0):void 0;b>E;E++)if((d||E in y)&&(v=y[E],m=_(v,E,g),e))if(n)S[E]=m;else if(m)switch(e){case 3:return!0;case 5:return v;case 6:return E;case 2:S.push(v)}else if(u)return!1;return h?-1:l||u?u:S}}},function(e,t,n){var i=n(49);e.exports=function(e,t){return new(i(e))(t)}},function(e,t,n){var i=n(9),r=n(50),o=n(0)("species");e.exports=function(e){var t;return r(e)&&(t=e.constructor,"function"!=typeof t||t!==Array&&!r(t.prototype)||(t=void 0),i(t)&&null===(t=t[o])&&(t=void 0)),void 0===t?Array:t}},function(e,t,n){var i=n(15);e.exports=Array.isArray||function(e){return"Array"==i(e)}},function(e,t,n){n(52),n(63),e.exports=n(2).Array.from},function(e,t,n){"use strict";var i=n(53)(!0);n(54)(String,"String",function(e){this._t=String(e),this._i=0},function(){var e,t=this._t,n=this._i;return n>=t.length?{value:void 0,done:!0}:(e=i(t,n),this._i+=e.length,{value:e,done:!1})})},function(e,t,n){var i=n(19),r=n(17);e.exports=function(e){return function(t,n){var o,s,a=String(r(t)),c=i(n),l=a.length;return c<0||c>=l?e?"":void 0:(o=a.charCodeAt(c),o<55296||o>56319||c+1===l||(s=a.charCodeAt(c+1))<56320||s>57343?e?a.charAt(c):o:e?a.slice(c,c+2):s-56320+(o-55296<<10)+65536)}}},function(e,t,n){"use strict";var i=n(27),r=n(6),o=n(24),s=n(4),a=n(20),c=n(55),l=n(32),u=n(62),h=n(0)("iterator"),d=!([].keys&&"next"in[].keys()),f=function(){return this};e.exports=function(e,t,n,p,v,m,g){c(n,t,p);var y,_,b,E=function(e){if(!d&&e in C)return C[e];switch(e){case"keys":case"values":return function(){return new n(this,e)}}return function(){return new n(this,e)}},S=t+" Iterator",O="values"==v,I=!1,C=e.prototype,w=C[h]||C["@@iterator"]||v&&C[v],A=w||E(v),T=v?O?E("entries"):A:void 0,k="Array"==t?C.entries||w:w;if(k&&(b=u(k.call(new e)))!==Object.prototype&&b.next&&(l(b,S,!0),i||"function"==typeof b[h]||s(b,h,f)),O&&w&&"values"!==w.name&&(I=!0,A=function(){return w.call(this)}),i&&!g||!d&&!I&&C[h]||s(C,h,A),a[t]=A,a[S]=f,v)if(y={values:O?A:E("values"),keys:m?A:E("keys"),entries:T},g)for(_ in y)_ in C||o(C,_,y[_]);else r(r.P+r.F*(d||I),t,y);return y}},function(e,t,n){"use strict";var i=n(56),r=n(12),o=n(32),s={};n(4)(s,n(0)("iterator"),function(){return this}),e.exports=function(e,t,n){e.prototype=i(s,{next:r(1,n)}),o(e,t+" Iterator")}},function(e,t,n){var i=n(8),r=n(57),o=n(31),s=n(21)("IE_PROTO"),a=function(){},c=function(){var e,t=n(23)("iframe"),i=o.length;for(t.style.display="none",n(61).appendChild(t),t.src="javascript:",e=t.contentWindow.document,e.open(),e.write("<script>document.F=Object<\/script>"),e.close(),c=e.F;i--;)delete c.prototype[o[i]];return c()};e.exports=Object.create||function(e,t){var n;return null!==e?(a.prototype=i(e),n=new a,a.prototype=null,n[s]=e):n=c(),void 0===t?n:r(n,t)}},function(e,t,n){var i=n(7),r=n(8),o=n(58);e.exports=n(10)?Object.defineProperties:function(e,t){r(e);for(var n,s=o(t),a=s.length,c=0;a>c;)i.f(e,n=s[c++],t[n]);return e}},function(e,t,n){var i=n(59),r=n(31);e.exports=Object.keys||function(e){return i(e,r)}},function(e,t,n){var i=n(11),r=n(29),o=n(30)(!1),s=n(21)("IE_PROTO");e.exports=function(e,t){var n,a=r(e),c=0,l=[];for(n in a)n!=s&&i(a,n)&&l.push(n);for(;t.length>c;)i(a,n=t[c++])&&(~o(l,n)||l.push(n));return l}},function(e,t,n){var i=n(19),r=Math.max,o=Math.min;e.exports=function(e,t){return e=i(e),e<0?r(e+t,0):o(e,t)}},function(e,t,n){var i=n(3).document;e.exports=i&&i.documentElement},function(e,t,n){var i=n(11),r=n(16),o=n(21)("IE_PROTO"),s=Object.prototype;e.exports=Object.getPrototypeOf||function(e){return e=r(e),i(e,o)?e[o]:"function"==typeof e.constructor&&e instanceof e.constructor?e.constructor.prototype:e instanceof Object?s:null}},function(e,t,n){"use strict";var i=n(14),r=n(6),o=n(16),s=n(64),a=n(65),c=n(18),l=n(66),u=n(67);r(r.S+r.F*!n(69)(function(e){Array.from(e)}),"Array",{from:function(e){var t,n,r,h,d=o(e),f="function"==typeof this?this:Array,p=arguments.length,v=p>1?arguments[1]:void 0,m=void 0!==v,g=0,y=u(d);if(m&&(v=i(v,p>2?arguments[2]:void 0,2)),void 0==y||f==Array&&a(y))for(t=c(d.length),n=new f(t);t>g;g++)l(n,g,m?v(d[g],g):d[g]);else for(h=y.call(d),n=new f;!(r=h.next()).done;g++)l(n,g,m?s(h,v,[r.value,g],!0):r.value);return n.length=g,n}})},function(e,t,n){var i=n(8);e.exports=function(e,t,n,r){try{return r?t(i(n)[0],n[1]):t(n)}catch(t){var o=e.return;throw void 0!==o&&i(o.call(e)),t}}},function(e,t,n){var i=n(20),r=n(0)("iterator"),o=Array.prototype;e.exports=function(e){return void 0!==e&&(i.Array===e||o[r]===e)}},function(e,t,n){"use strict";var i=n(7),r=n(12);e.exports=function(e,t,n){t in e?i.f(e,t,r(0,n)):e[t]=n}},function(e,t,n){var i=n(68),r=n(0)("iterator"),o=n(20);e.exports=n(2).getIteratorMethod=function(e){if(void 0!=e)return e[r]||e["@@iterator"]||o[i(e)]}},function(e,t,n){var i=n(15),r=n(0)("toStringTag"),o="Arguments"==i(function(){return arguments}()),s=function(e,t){try{return e[t]}catch(e){}};e.exports=function(e){var t,n,a;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(n=s(t=Object(e),r))?n:o?i(t):"Object"==(a=i(t))&&"function"==typeof t.callee?"Arguments":a}},function(e,t,n){var i=n(0)("iterator"),r=!1;try{var o=[7][i]();o.return=function(){r=!0},Array.from(o,function(){throw 2})}catch(e){}e.exports=function(e,t){if(!t&&!r)return!1;var n=!1;try{var o=[7],s=o[i]();s.next=function(){return{done:n=!0}},o[i]=function(){return s},e(o)}catch(e){}return n}},function(e,t,n){n(71),e.exports=n(2).Array.includes},function(e,t,n){"use strict";var i=n(6),r=n(30)(!0);i(i.P,"Array",{includes:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}}),n(28)("includes")},function(e,t){try{var n=new window.CustomEvent("test");if(n.preventDefault(),!0!==n.defaultPrevented)throw new Error("Could not prevent default")}catch(e){var i=function(e,t){var n,i;return t=t||{bubbles:!1,cancelable:!1,detail:void 0},n=document.createEvent("CustomEvent"),n.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),i=n.preventDefault,n.preventDefault=function(){i.call(this);try{Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})}catch(e){this.defaultPrevented=!0}},n};i.prototype=window.Event.prototype,window.CustomEvent=i}},function(e,t,n){"use strict";function i(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),s=n(33),a=n(78),c=function(e){return e&&e.__esModule?e:{default:e}}(a),l=function(){function e(){r(this,e),this._store=(0,s.createStore)(c.default,window.devToolsExtension?window.devToolsExtension():void 0)}return o(e,[{key:"subscribe",value:function(e){this._store.subscribe(e)}},{key:"dispatch",value:function(e){this._store.dispatch(e)}},{key:"getChoiceById",value:function(e){if(e){return this.activeChoices.find(function(t){return t.id===parseInt(e,10)})}return!1}},{key:"getGroupById",value:function(e){return this.groups.find(function(t){return t.id===parseInt(e,10)})}},{key:"state",get:function(){return this._store.getState()}},{key:"items",get:function(){return this.state.items}},{key:"activeItems",get:function(){return this.items.filter(function(e){return!0===e.active})}},{key:"highlightedActiveItems",get:function(){return this.items.filter(function(e){return e.active&&e.highlighted})}},{key:"choices",get:function(){return this.state.choices}},{key:"activeChoices",get:function(){return this.choices.filter(function(e){return!0===e.active})}},{key:"selectableChoices",get:function(){return this.choices.filter(function(e){return!0!==e.disabled})}},{key:"searchableChoices",get:function(){return this.selectableChoices.filter(function(e){return!0!==e.placeholder})}},{key:"placeholderChoice",get:function(){return[].concat(i(this.choices)).reverse().find(function(e){return!0===e.placeholder})}},{key:"groups",get:function(){return this.state.groups}},{key:"activeGroups",get:function(){var e=this.groups,t=this.choices;return e.filter(function(e){var n=!0===e.active&&!1===e.disabled,i=t.some(function(e){return!0===e.active&&!1===e.disabled});return n&&i},[])}}]),e}();t.default=l},function(e,t,n){"use strict";(function(e){var n="object"==typeof e&&e&&e.Object===Object&&e;t.a=n}).call(t,n(34))},function(e,t,n){"use strict";(function(e,i){var r,o=n(77);r="undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==e?e:i;var s=Object(o.a)(r);t.a=s}).call(t,n(34),n(76)(e))},function(e,t){e.exports=function(e){if(!e.webpackPolyfill){var t=Object.create(e);t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),Object.defineProperty(t,"exports",{enumerable:!0}),t.webpackPolyfill=1}return t}},function(e,t,n){"use strict";function i(e){var t,n=e.Symbol;return"function"==typeof n?n.observable?t=n.observable:(t=n("observable"),n.observable=t):t="@@observable",t}t.a=i},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(33),o=n(79),s=i(o),a=n(80),c=i(a),l=n(81),u=i(l),h=n(1),d=(0,r.combineReducers)({items:s.default,groups:c.default,choices:u.default}),f=function(e,t){var n=e;if("CLEAR_ALL"===t.type)n=void 0;else if("RESET_TO"===t.type)return(0,h.cloneObject)(t.state);return d(n,t)};t.default=f},function(e,t,n){"use strict";function i(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function r(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments[1];switch(t.type){case"ADD_ITEM":return[].concat(i(e),[{id:t.id,choiceId:t.choiceId,groupId:t.groupId,value:t.value,label:t.label,active:!0,highlighted:!1,customProperties:t.customProperties,placeholder:t.placeholder||!1,keyCode:null}]).map(function(e){var t=e;return t.highlighted=!1,t});case"REMOVE_ITEM":return e.map(function(e){var n=e;return n.id===t.id&&(n.active=!1),n});case"HIGHLIGHT_ITEM":return e.map(function(e){var n=e;return n.id===t.id&&(n.highlighted=t.highlighted),n});default:return e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=r;var o=t.defaultState=[]},function(e,t,n){"use strict";function i(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function r(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments[1];switch(t.type){case"ADD_GROUP":return[].concat(i(e),[{id:t.id,value:t.value,active:t.active,disabled:t.disabled}]);case"CLEAR_CHOICES":return[];default:return e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=r;var o=t.defaultState=[]},function(e,t,n){"use strict";function i(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function r(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments[1];switch(t.type){case"ADD_CHOICE":return[].concat(i(e),[{id:t.id,elementId:t.elementId,groupId:t.groupId,value:t.value,label:t.label||t.value,disabled:t.disabled||!1,selected:!1,active:!0,score:9999,customProperties:t.customProperties,placeholder:t.placeholder||!1,keyCode:null}]);case"ADD_ITEM":return t.activateOptions?e.map(function(e){var n=e;return n.active=t.active,n}):t.choiceId>-1?e.map(function(e){var n=e;return n.id===parseInt(t.choiceId,10)&&(n.selected=!0),n}):e;case"REMOVE_ITEM":return t.choiceId>-1?e.map(function(e){var n=e;return n.id===parseInt(t.choiceId,10)&&(n.selected=!1),n}):e;case"FILTER_CHOICES":return e.map(function(e){var n=e;return n.active=t.results.some(function(e){var t=e.item,i=e.score;return t.id===n.id&&(n.score=i,!0)}),n});case"ACTIVATE_CHOICES":return e.map(function(e){var n=e;return n.active=t.active,n});case"CLEAR_CHOICES":return o;default:return e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=r;var o=t.defaultState=[]},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.WrappedSelect=t.WrappedInput=t.List=t.Input=t.Container=t.Dropdown=void 0;var r=n(83),o=i(r),s=n(84),a=i(s),c=n(85),l=i(c),u=n(86),h=i(u),d=n(87),f=i(d),p=n(88),v=i(p);t.Dropdown=o.default,t.Container=a.default,t.Input=l.default,t.List=h.default,t.WrappedInput=f.default,t.WrappedSelect=v.default},function(e,t,n){"use strict";function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),o=function(){function e(t){var n=t.element,r=t.type,o=t.classNames;i(this,e),Object.assign(this,{element:n,type:r,classNames:o}),this.isActive=!1}return r(e,[{key:"distanceFromTopWindow",value:function(){return this.dimensions=this.element.getBoundingClientRect(),this.position=Math.ceil(this.dimensions.top+window.pageYOffset+this.element.offsetHeight),this.position}},{key:"getChild",value:function(e){return this.element.querySelector(e)}},{key:"show",value:function(){return this.element.classList.add(this.classNames.activeState),this.element.setAttribute("aria-expanded","true"),this.isActive=!0,this}},{key:"hide",value:function(){return this.element.classList.remove(this.classNames.activeState),this.element.setAttribute("aria-expanded","false"),this.isActive=!1,this}}]),e}();t.default=o},function(e,t,n){"use strict";function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),o=n(1),s=function(){function e(t){var n=t.element,r=t.type,o=t.classNames,s=t.position;i(this,e),Object.assign(this,{element:n,classNames:o,type:r,position:s}),this.isOpen=!1,this.isFlipped=!1,this.isFocussed=!1,this.isDisabled=!1,this.isLoading=!1,this._onFocus=this._onFocus.bind(this),this._onBlur=this._onBlur.bind(this)}return r(e,[{key:"addEventListeners",value:function(){this.element.addEventListener("focus",this._onFocus),this.element.addEventListener("blur",this._onBlur)}},{key:"removeEventListeners",value:function(){this.element.removeEventListener("focus",this._onFocus),this.element.removeEventListener("blur",this._onBlur)}},{key:"shouldFlip",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:(0,o.getWindowHeight)();if(void 0===e)return!1;var n=!1;return"auto"===this.position?n=e>=t:"top"===this.position&&(n=!0),n}},{key:"setActiveDescendant",value:function(e){this.element.setAttribute("aria-activedescendant",e)}},{key:"removeActiveDescendant",value:function(){this.element.removeAttribute("aria-activedescendant")}},{key:"open",value:function(e){this.element.classList.add(this.classNames.openState),this.element.setAttribute("aria-expanded","true"),this.isOpen=!0,this.shouldFlip(e)&&(this.element.classList.add(this.classNames.flippedState),this.isFlipped=!0)}},{key:"close",value:function(){this.element.classList.remove(this.classNames.openState),this.element.setAttribute("aria-expanded","false"),this.removeActiveDescendant(),this.isOpen=!1,this.isFlipped&&(this.element.classList.remove(this.classNames.flippedState),this.isFlipped=!1)}},{key:"focus",value:function(){this.isFocussed||this.element.focus()}},{key:"addFocusState",value:function(){this.element.classList.add(this.classNames.focusState)}},{key:"removeFocusState",value:function(){this.element.classList.remove(this.classNames.focusState)}},{key:"enable",value:function(){this.element.classList.remove(this.classNames.disabledState),this.element.removeAttribute("aria-disabled"),"select-one"===this.type&&this.element.setAttribute("tabindex","0"),this.isDisabled=!1}},{key:"disable",value:function(){this.element.classList.add(this.classNames.disabledState),this.element.setAttribute("aria-disabled","true"),"select-one"===this.type&&this.element.setAttribute("tabindex","-1"),this.isDisabled=!0}},{key:"wrap",value:function(e){(0,o.wrap)(e,this.element)}},{key:"unwrap",value:function(e){this.element.parentNode.insertBefore(e,this.element),this.element.parentNode.removeChild(this.element)}},{key:"addLoadingState",value:function(){this.element.classList.add(this.classNames.loadingState),this.element.setAttribute("aria-busy","true"),this.isLoading=!0}},{key:"removeLoadingState",value:function(){this.element.classList.remove(this.classNames.loadingState),this.element.removeAttribute("aria-busy"),this.isLoading=!1}},{key:"_onFocus",value:function(){this.isFocussed=!0}},{key:"_onBlur",value:function(){this.isFocussed=!1}}]),e}();t.default=s},function(e,t,n){"use strict";function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),o=n(1),s=function(){function e(t){var n=t.element,r=t.type,o=t.classNames,s=t.placeholderValue;i(this,e),Object.assign(this,{element:n,type:r,classNames:o,placeholderValue:s}),this.element=n,this.classNames=o,this.isFocussed=this.element===document.activeElement,this.isDisabled=!1,this._onPaste=this._onPaste.bind(this),this._onInput=this._onInput.bind(this),this._onFocus=this._onFocus.bind(this),this._onBlur=this._onBlur.bind(this)}return r(e,[{key:"addEventListeners",value:function(){this.element.addEventListener("input",this._onInput),this.element.addEventListener("paste",this._onPaste),this.element.addEventListener("focus",this._onFocus),this.element.addEventListener("blur",this._onBlur),this.element.form&&this.element.form.addEventListener("reset",this._onFormReset)}},{key:"removeEventListeners",value:function(){this.element.removeEventListener("input",this._onInput),this.element.removeEventListener("paste",this._onPaste),this.element.removeEventListener("focus",this._onFocus),this.element.removeEventListener("blur",this._onBlur),this.element.form&&this.element.form.removeEventListener("reset",this._onFormReset)}},{key:"enable",value:function(){this.element.removeAttribute("disabled"),this.isDisabled=!1}},{key:"disable",value:function(){this.element.setAttribute("disabled",""),this.isDisabled=!0}},{key:"focus",value:function(){this.isFocussed||this.element.focus()}},{key:"blur",value:function(){this.isFocussed&&this.element.blur()}},{key:"clear",value:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];return this.element.value&&(this.element.value=""),e&&this.setWidth(),this}},{key:"setWidth",value:function(e){var t=this,n=function(e){t.element.style.width=e};if(this._placeholderValue){var i=this.element.value.length>=this._placeholderValue.length/1.25;(this.element.value&&i||e)&&this.calcWidth(n)}else this.calcWidth(n)}},{key:"calcWidth",value:function(e){return(0,o.calcWidthOfInput)(this.element,e)}},{key:"setActiveDescendant",value:function(e){this.element.setAttribute("aria-activedescendant",e)}},{key:"removeActiveDescendant",value:function(){this.element.removeAttribute("aria-activedescendant")}},{key:"_onInput",value:function(){"select-one"!==this.type&&this.setWidth()}},{key:"_onPaste",value:function(e){e.target===this.element&&this.preventPaste&&e.preventDefault()}},{key:"_onFocus",value:function(){this.isFocussed=!0}},{key:"_onBlur",value:function(){this.isFocussed=!1}},{key:"placeholder",set:function(e){this.element.placeholder=e}},{key:"value",set:function(e){this.element.value=""+e},get:function(){return(0,o.stripHTML)(this.element.value)}}]),e}();t.default=s},function(e,t,n){"use strict";function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),o=n(5),s=function(){function e(t){var n=t.element;i(this,e),Object.assign(this,{element:n}),this.scrollPos=this.element.scrollTop,this.height=this.element.offsetHeight,this.hasChildren=!!this.element.children}return r(e,[{key:"clear",value:function(){this.element.innerHTML=""}},{key:"append",value:function(e){this.element.appendChild(e)}},{key:"getChild",value:function(e){return this.element.querySelector(e)}},{key:"scrollToTop",value:function(){this.element.scrollTop=0}},{key:"scrollToChoice",value:function(e,t){var n=this;if(e){var i=this.element.offsetHeight,r=e.offsetHeight,o=e.offsetTop+r,s=this.element.scrollTop+i,a=t>0?this.element.scrollTop+o-s:e.offsetTop;requestAnimationFrame(function(e){n._animateScroll(e,a,t)})}}},{key:"_scrollDown",value:function(e,t,n){var i=(n-e)/t,r=i>1?i:1;this.element.scrollTop=e+r}},{key:"_scrollUp",value:function(e,t,n){var i=(e-n)/t,r=i>1?i:1;this.element.scrollTop=e-r}},{key:"_animateScroll",value:function(e,t,n){var i=this,r=o.SCROLLING_SPEED,s=this.element.scrollTop,a=!1;n>0?(this._scrollDown(s,r,t),s<t&&(a=!0)):(this._scrollUp(s,r,t),s>t&&(a=!0)),a&&requestAnimationFrame(function(){i._animateScroll(e,t,n)})}}]),e}();t.default=s},function(e,t,n){"use strict";function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),a=function e(t,n,i){null===t&&(t=Function.prototype);var r=Object.getOwnPropertyDescriptor(t,n);if(void 0===r){var o=Object.getPrototypeOf(t);return null===o?void 0:e(o,n,i)}if("value"in r)return r.value;var s=r.get;if(void 0!==s)return s.call(i)},c=n(35),l=function(e){return e&&e.__esModule?e:{default:e}}(c),u=n(1),h=function(e){function t(e){var n=e.element,o=e.classNames,s=e.delimiter;i(this,t);var a=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,{element:n,classNames:o}));return a.delimiter=s,a}return o(t,e),s(t,[{key:"value",set:function(e){var t=(0,u.reduceToValues)(e),n=t.join(this.delimiter);this.element.setAttribute("value",n),this.element.value=n},get:function(){return a(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"value",this)}}]),t}(l.default);t.default=h},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),c=n(35),l=i(c),u=n(36),h=i(u),d=function(e){function t(e){var n=e.element,i=e.classNames;return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,{element:n,classNames:i}))}return s(t,e),a(t,[{key:"appendDocFragment",value:function(e){this.element.innerHTML="",this.element.appendChild(e)}},{key:"placeholderOption",get:function(){return this.element.querySelector("option[placeholder]")}},{key:"optionGroups",get:function(){return Array.from(this.element.getElementsByTagName("OPTGROUP"))}},{key:"options",get:function(){return Array.from(this.element.options)},set:function(e){var t=document.createDocumentFragment(),n=function(e){var n=h.default.option(e);t.appendChild(n)};e.forEach(function(e){return n(e)}),this.appendDocFragment(t)}}]),t}(l.default);t.default=d},function(e,t,n){var i,r;!function(){"use strict";function n(){for(var e=[],t=0;t<arguments.length;t++){var i=arguments[t];if(i){var r=typeof i;if("string"===r||"number"===r)e.push(i);else if(Array.isArray(i))e.push(n.apply(null,i));else if("object"===r)for(var s in i)o.call(i,s)&&i[s]&&e.push(s)}}return e.join(" ")}var o={}.hasOwnProperty;void 0!==e&&e.exports?e.exports=n:(i=[],void 0!==(r=function(){return n}.apply(t,i))&&(e.exports=r))}()},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.clearChoices=t.activateChoices=t.filterChoices=t.addChoice=void 0;var i=n(5);t.addChoice=function(e){var t=e.value,n=e.label,r=e.id,o=e.groupId,s=e.disabled,a=e.elementId,c=e.customProperties,l=e.placeholder,u=e.keyCode;return{type:i.ACTION_TYPES.ADD_CHOICE,value:t,label:n,id:r,groupId:o,disabled:s,elementId:a,customProperties:c,placeholder:l,keyCode:u}},t.filterChoices=function(e){return{type:i.ACTION_TYPES.FILTER_CHOICES,results:e}},t.activateChoices=function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];return{type:i.ACTION_TYPES.ACTIVATE_CHOICES,active:e}},t.clearChoices=function(){return{type:i.ACTION_TYPES.CLEAR_CHOICES}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.highlightItem=t.removeItem=t.addItem=void 0;var i=n(5);t.addItem=function(e){var t=e.value,n=e.label,r=e.id,o=e.choiceId,s=e.groupId,a=e.customProperties,c=e.placeholder,l=e.keyCode;return{type:i.ACTION_TYPES.ADD_ITEM,value:t,label:n,id:r,choiceId:o,groupId:s,customProperties:a,placeholder:c,keyCode:l}},t.removeItem=function(e,t){return{type:i.ACTION_TYPES.REMOVE_ITEM,id:e,choiceId:t}},t.highlightItem=function(e,t){return{type:i.ACTION_TYPES.HIGHLIGHT_ITEM,id:e,highlighted:t}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.addGroup=void 0;var i=n(5);t.addGroup=function(e,t,n,r){return{type:i.ACTION_TYPES.ADD_GROUP,value:e,id:t,active:n,disabled:r}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.clearAll=function(){return{type:"CLEAR_ALL"}},t.resetTo=function(e){return{type:"RESET_TO",state:e}}}])});

/***/ }),

/***/ "./node_modules/d/index.js":
/*!*********************************!*\
  !*** ./node_modules/d/index.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var assign        = __webpack_require__(/*! es5-ext/object/assign */ "./node_modules/es5-ext/object/assign/index.js")
  , normalizeOpts = __webpack_require__(/*! es5-ext/object/normalize-options */ "./node_modules/es5-ext/object/normalize-options.js")
  , isCallable    = __webpack_require__(/*! es5-ext/object/is-callable */ "./node_modules/es5-ext/object/is-callable.js")
  , contains      = __webpack_require__(/*! es5-ext/string/#/contains */ "./node_modules/es5-ext/string/#/contains/index.js")

  , d;

d = module.exports = function (dscr, value/*, options*/) {
	var c, e, w, options, desc;
	if ((arguments.length < 2) || (typeof dscr !== 'string')) {
		options = value;
		value = dscr;
		dscr = null;
	} else {
		options = arguments[2];
	}
	if (dscr == null) {
		c = w = true;
		e = false;
	} else {
		c = contains.call(dscr, 'c');
		e = contains.call(dscr, 'e');
		w = contains.call(dscr, 'w');
	}

	desc = { value: value, configurable: c, enumerable: e, writable: w };
	return !options ? desc : assign(normalizeOpts(options), desc);
};

d.gs = function (dscr, get, set/*, options*/) {
	var c, e, options, desc;
	if (typeof dscr !== 'string') {
		options = set;
		set = get;
		get = dscr;
		dscr = null;
	} else {
		options = arguments[3];
	}
	if (get == null) {
		get = undefined;
	} else if (!isCallable(get)) {
		options = get;
		get = set = undefined;
	} else if (set == null) {
		set = undefined;
	} else if (!isCallable(set)) {
		options = set;
		set = undefined;
	}
	if (dscr == null) {
		c = true;
		e = false;
	} else {
		c = contains.call(dscr, 'c');
		e = contains.call(dscr, 'e');
	}

	desc = { get: get, set: set, configurable: c, enumerable: e };
	return !options ? desc : assign(normalizeOpts(options), desc);
};


/***/ }),

/***/ "./node_modules/es5-ext/function/noop.js":
/*!***********************************************!*\
  !*** ./node_modules/es5-ext/function/noop.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// eslint-disable-next-line no-empty-function
module.exports = function () {};


/***/ }),

/***/ "./node_modules/es5-ext/global.js":
/*!****************************************!*\
  !*** ./node_modules/es5-ext/global.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* eslint strict: "off" */

module.exports = (function () {
	return this;
}());


/***/ }),

/***/ "./node_modules/es5-ext/object/assign/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/es5-ext/object/assign/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(/*! ./is-implemented */ "./node_modules/es5-ext/object/assign/is-implemented.js")()
	? Object.assign
	: __webpack_require__(/*! ./shim */ "./node_modules/es5-ext/object/assign/shim.js");


/***/ }),

/***/ "./node_modules/es5-ext/object/assign/is-implemented.js":
/*!**************************************************************!*\
  !*** ./node_modules/es5-ext/object/assign/is-implemented.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function () {
	var assign = Object.assign, obj;
	if (typeof assign !== "function") return false;
	obj = { foo: "raz" };
	assign(obj, { bar: "dwa" }, { trzy: "trzy" });
	return (obj.foo + obj.bar + obj.trzy) === "razdwatrzy";
};


/***/ }),

/***/ "./node_modules/es5-ext/object/assign/shim.js":
/*!****************************************************!*\
  !*** ./node_modules/es5-ext/object/assign/shim.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var keys  = __webpack_require__(/*! ../keys */ "./node_modules/es5-ext/object/keys/index.js")
  , value = __webpack_require__(/*! ../valid-value */ "./node_modules/es5-ext/object/valid-value.js")
  , max   = Math.max;

module.exports = function (dest, src /*, …srcn*/) {
	var error, i, length = max(arguments.length, 2), assign;
	dest = Object(value(dest));
	assign = function (key) {
		try {
			dest[key] = src[key];
		} catch (e) {
			if (!error) error = e;
		}
	};
	for (i = 1; i < length; ++i) {
		src = arguments[i];
		keys(src).forEach(assign);
	}
	if (error !== undefined) throw error;
	return dest;
};


/***/ }),

/***/ "./node_modules/es5-ext/object/is-callable.js":
/*!****************************************************!*\
  !*** ./node_modules/es5-ext/object/is-callable.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Deprecated



module.exports = function (obj) {
 return typeof obj === "function";
};


/***/ }),

/***/ "./node_modules/es5-ext/object/is-value.js":
/*!*************************************************!*\
  !*** ./node_modules/es5-ext/object/is-value.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _undefined = __webpack_require__(/*! ../function/noop */ "./node_modules/es5-ext/function/noop.js")(); // Support ES3 engines

module.exports = function (val) {
 return (val !== _undefined) && (val !== null);
};


/***/ }),

/***/ "./node_modules/es5-ext/object/keys/index.js":
/*!***************************************************!*\
  !*** ./node_modules/es5-ext/object/keys/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(/*! ./is-implemented */ "./node_modules/es5-ext/object/keys/is-implemented.js")() ? Object.keys : __webpack_require__(/*! ./shim */ "./node_modules/es5-ext/object/keys/shim.js");


/***/ }),

/***/ "./node_modules/es5-ext/object/keys/is-implemented.js":
/*!************************************************************!*\
  !*** ./node_modules/es5-ext/object/keys/is-implemented.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function () {
	try {
		Object.keys("primitive");
		return true;
	} catch (e) {
		return false;
	}
};


/***/ }),

/***/ "./node_modules/es5-ext/object/keys/shim.js":
/*!**************************************************!*\
  !*** ./node_modules/es5-ext/object/keys/shim.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isValue = __webpack_require__(/*! ../is-value */ "./node_modules/es5-ext/object/is-value.js");

var keys = Object.keys;

module.exports = function (object) { return keys(isValue(object) ? Object(object) : object); };


/***/ }),

/***/ "./node_modules/es5-ext/object/normalize-options.js":
/*!**********************************************************!*\
  !*** ./node_modules/es5-ext/object/normalize-options.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isValue = __webpack_require__(/*! ./is-value */ "./node_modules/es5-ext/object/is-value.js");

var forEach = Array.prototype.forEach, create = Object.create;

var process = function (src, obj) {
	var key;
	for (key in src) obj[key] = src[key];
};

// eslint-disable-next-line no-unused-vars
module.exports = function (opts1 /*, …options*/) {
	var result = create(null);
	forEach.call(arguments, function (options) {
		if (!isValue(options)) return;
		process(Object(options), result);
	});
	return result;
};


/***/ }),

/***/ "./node_modules/es5-ext/object/valid-value.js":
/*!****************************************************!*\
  !*** ./node_modules/es5-ext/object/valid-value.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isValue = __webpack_require__(/*! ./is-value */ "./node_modules/es5-ext/object/is-value.js");

module.exports = function (value) {
	if (!isValue(value)) throw new TypeError("Cannot use null or undefined");
	return value;
};


/***/ }),

/***/ "./node_modules/es5-ext/string/#/contains/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/es5-ext/string/#/contains/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(/*! ./is-implemented */ "./node_modules/es5-ext/string/#/contains/is-implemented.js")()
	? String.prototype.contains
	: __webpack_require__(/*! ./shim */ "./node_modules/es5-ext/string/#/contains/shim.js");


/***/ }),

/***/ "./node_modules/es5-ext/string/#/contains/is-implemented.js":
/*!******************************************************************!*\
  !*** ./node_modules/es5-ext/string/#/contains/is-implemented.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var str = "razdwatrzy";

module.exports = function () {
	if (typeof str.contains !== "function") return false;
	return (str.contains("dwa") === true) && (str.contains("foo") === false);
};


/***/ }),

/***/ "./node_modules/es5-ext/string/#/contains/shim.js":
/*!********************************************************!*\
  !*** ./node_modules/es5-ext/string/#/contains/shim.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var indexOf = String.prototype.indexOf;

module.exports = function (searchString/*, position*/) {
	return indexOf.call(this, searchString, arguments[1]) > -1;
};


/***/ }),

/***/ "./node_modules/es6-promise/auto.js":
/*!******************************************!*\
  !*** ./node_modules/es6-promise/auto.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// This file can be required in Browserify and Node.js for automatic polyfill
// To use it:  require('es6-promise/auto');

module.exports = __webpack_require__(/*! ./ */ "./node_modules/es6-promise/dist/es6-promise.js").polyfill();


/***/ }),

/***/ "./node_modules/es6-promise/dist/es6-promise.js":
/*!******************************************************!*\
  !*** ./node_modules/es6-promise/dist/es6-promise.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process, global) {/*!
 * @overview es6-promise - a tiny implementation of Promises/A+.
 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
 * @license   Licensed under MIT license
 *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
 * @version   v4.2.5+7f2b526d
 */

(function (global, factory) {
	 true ? module.exports = factory() :
	undefined;
}(this, (function () { 'use strict';

function objectOrFunction(x) {
  var type = typeof x;
  return x !== null && (type === 'object' || type === 'function');
}

function isFunction(x) {
  return typeof x === 'function';
}



var _isArray = void 0;
if (Array.isArray) {
  _isArray = Array.isArray;
} else {
  _isArray = function (x) {
    return Object.prototype.toString.call(x) === '[object Array]';
  };
}

var isArray = _isArray;

var len = 0;
var vertxNext = void 0;
var customSchedulerFn = void 0;

var asap = function asap(callback, arg) {
  queue[len] = callback;
  queue[len + 1] = arg;
  len += 2;
  if (len === 2) {
    // If len is 2, that means that we need to schedule an async flush.
    // If additional callbacks are queued before the queue is flushed, they
    // will be processed by this flush that we are scheduling.
    if (customSchedulerFn) {
      customSchedulerFn(flush);
    } else {
      scheduleFlush();
    }
  }
};

function setScheduler(scheduleFn) {
  customSchedulerFn = scheduleFn;
}

function setAsap(asapFn) {
  asap = asapFn;
}

var browserWindow = typeof window !== 'undefined' ? window : undefined;
var browserGlobal = browserWindow || {};
var BrowserMutationObserver = browserGlobal.MutationObserver || browserGlobal.WebKitMutationObserver;
var isNode = typeof self === 'undefined' && typeof process !== 'undefined' && {}.toString.call(process) === '[object process]';

// test for web worker but not in IE10
var isWorker = typeof Uint8ClampedArray !== 'undefined' && typeof importScripts !== 'undefined' && typeof MessageChannel !== 'undefined';

// node
function useNextTick() {
  // node version 0.10.x displays a deprecation warning when nextTick is used recursively
  // see https://github.com/cujojs/when/issues/410 for details
  return function () {
    return process.nextTick(flush);
  };
}

// vertx
function useVertxTimer() {
  if (typeof vertxNext !== 'undefined') {
    return function () {
      vertxNext(flush);
    };
  }

  return useSetTimeout();
}

function useMutationObserver() {
  var iterations = 0;
  var observer = new BrowserMutationObserver(flush);
  var node = document.createTextNode('');
  observer.observe(node, { characterData: true });

  return function () {
    node.data = iterations = ++iterations % 2;
  };
}

// web worker
function useMessageChannel() {
  var channel = new MessageChannel();
  channel.port1.onmessage = flush;
  return function () {
    return channel.port2.postMessage(0);
  };
}

function useSetTimeout() {
  // Store setTimeout reference so es6-promise will be unaffected by
  // other code modifying setTimeout (like sinon.useFakeTimers())
  var globalSetTimeout = setTimeout;
  return function () {
    return globalSetTimeout(flush, 1);
  };
}

var queue = new Array(1000);
function flush() {
  for (var i = 0; i < len; i += 2) {
    var callback = queue[i];
    var arg = queue[i + 1];

    callback(arg);

    queue[i] = undefined;
    queue[i + 1] = undefined;
  }

  len = 0;
}

function attemptVertx() {
  try {
    var vertx = Function('return this')().require('vertx');
    vertxNext = vertx.runOnLoop || vertx.runOnContext;
    return useVertxTimer();
  } catch (e) {
    return useSetTimeout();
  }
}

var scheduleFlush = void 0;
// Decide what async method to use to triggering processing of queued callbacks:
if (isNode) {
  scheduleFlush = useNextTick();
} else if (BrowserMutationObserver) {
  scheduleFlush = useMutationObserver();
} else if (isWorker) {
  scheduleFlush = useMessageChannel();
} else if (browserWindow === undefined && "function" === 'function') {
  scheduleFlush = attemptVertx();
} else {
  scheduleFlush = useSetTimeout();
}

function then(onFulfillment, onRejection) {
  var parent = this;

  var child = new this.constructor(noop);

  if (child[PROMISE_ID] === undefined) {
    makePromise(child);
  }

  var _state = parent._state;


  if (_state) {
    var callback = arguments[_state - 1];
    asap(function () {
      return invokeCallback(_state, child, callback, parent._result);
    });
  } else {
    subscribe(parent, child, onFulfillment, onRejection);
  }

  return child;
}

/**
  `Promise.resolve` returns a promise that will become resolved with the
  passed `value`. It is shorthand for the following:

  ```javascript
  let promise = new Promise(function(resolve, reject){
    resolve(1);
  });

  promise.then(function(value){
    // value === 1
  });
  ```

  Instead of writing the above, your code now simply becomes the following:

  ```javascript
  let promise = Promise.resolve(1);

  promise.then(function(value){
    // value === 1
  });
  ```

  @method resolve
  @static
  @param {Any} value value that the returned promise will be resolved with
  Useful for tooling.
  @return {Promise} a promise that will become fulfilled with the given
  `value`
*/
function resolve$1(object) {
  /*jshint validthis:true */
  var Constructor = this;

  if (object && typeof object === 'object' && object.constructor === Constructor) {
    return object;
  }

  var promise = new Constructor(noop);
  resolve(promise, object);
  return promise;
}

var PROMISE_ID = Math.random().toString(36).substring(2);

function noop() {}

var PENDING = void 0;
var FULFILLED = 1;
var REJECTED = 2;

var TRY_CATCH_ERROR = { error: null };

function selfFulfillment() {
  return new TypeError("You cannot resolve a promise with itself");
}

function cannotReturnOwn() {
  return new TypeError('A promises callback cannot return that same promise.');
}

function getThen(promise) {
  try {
    return promise.then;
  } catch (error) {
    TRY_CATCH_ERROR.error = error;
    return TRY_CATCH_ERROR;
  }
}

function tryThen(then$$1, value, fulfillmentHandler, rejectionHandler) {
  try {
    then$$1.call(value, fulfillmentHandler, rejectionHandler);
  } catch (e) {
    return e;
  }
}

function handleForeignThenable(promise, thenable, then$$1) {
  asap(function (promise) {
    var sealed = false;
    var error = tryThen(then$$1, thenable, function (value) {
      if (sealed) {
        return;
      }
      sealed = true;
      if (thenable !== value) {
        resolve(promise, value);
      } else {
        fulfill(promise, value);
      }
    }, function (reason) {
      if (sealed) {
        return;
      }
      sealed = true;

      reject(promise, reason);
    }, 'Settle: ' + (promise._label || ' unknown promise'));

    if (!sealed && error) {
      sealed = true;
      reject(promise, error);
    }
  }, promise);
}

function handleOwnThenable(promise, thenable) {
  if (thenable._state === FULFILLED) {
    fulfill(promise, thenable._result);
  } else if (thenable._state === REJECTED) {
    reject(promise, thenable._result);
  } else {
    subscribe(thenable, undefined, function (value) {
      return resolve(promise, value);
    }, function (reason) {
      return reject(promise, reason);
    });
  }
}

function handleMaybeThenable(promise, maybeThenable, then$$1) {
  if (maybeThenable.constructor === promise.constructor && then$$1 === then && maybeThenable.constructor.resolve === resolve$1) {
    handleOwnThenable(promise, maybeThenable);
  } else {
    if (then$$1 === TRY_CATCH_ERROR) {
      reject(promise, TRY_CATCH_ERROR.error);
      TRY_CATCH_ERROR.error = null;
    } else if (then$$1 === undefined) {
      fulfill(promise, maybeThenable);
    } else if (isFunction(then$$1)) {
      handleForeignThenable(promise, maybeThenable, then$$1);
    } else {
      fulfill(promise, maybeThenable);
    }
  }
}

function resolve(promise, value) {
  if (promise === value) {
    reject(promise, selfFulfillment());
  } else if (objectOrFunction(value)) {
    handleMaybeThenable(promise, value, getThen(value));
  } else {
    fulfill(promise, value);
  }
}

function publishRejection(promise) {
  if (promise._onerror) {
    promise._onerror(promise._result);
  }

  publish(promise);
}

function fulfill(promise, value) {
  if (promise._state !== PENDING) {
    return;
  }

  promise._result = value;
  promise._state = FULFILLED;

  if (promise._subscribers.length !== 0) {
    asap(publish, promise);
  }
}

function reject(promise, reason) {
  if (promise._state !== PENDING) {
    return;
  }
  promise._state = REJECTED;
  promise._result = reason;

  asap(publishRejection, promise);
}

function subscribe(parent, child, onFulfillment, onRejection) {
  var _subscribers = parent._subscribers;
  var length = _subscribers.length;


  parent._onerror = null;

  _subscribers[length] = child;
  _subscribers[length + FULFILLED] = onFulfillment;
  _subscribers[length + REJECTED] = onRejection;

  if (length === 0 && parent._state) {
    asap(publish, parent);
  }
}

function publish(promise) {
  var subscribers = promise._subscribers;
  var settled = promise._state;

  if (subscribers.length === 0) {
    return;
  }

  var child = void 0,
      callback = void 0,
      detail = promise._result;

  for (var i = 0; i < subscribers.length; i += 3) {
    child = subscribers[i];
    callback = subscribers[i + settled];

    if (child) {
      invokeCallback(settled, child, callback, detail);
    } else {
      callback(detail);
    }
  }

  promise._subscribers.length = 0;
}

function tryCatch(callback, detail) {
  try {
    return callback(detail);
  } catch (e) {
    TRY_CATCH_ERROR.error = e;
    return TRY_CATCH_ERROR;
  }
}

function invokeCallback(settled, promise, callback, detail) {
  var hasCallback = isFunction(callback),
      value = void 0,
      error = void 0,
      succeeded = void 0,
      failed = void 0;

  if (hasCallback) {
    value = tryCatch(callback, detail);

    if (value === TRY_CATCH_ERROR) {
      failed = true;
      error = value.error;
      value.error = null;
    } else {
      succeeded = true;
    }

    if (promise === value) {
      reject(promise, cannotReturnOwn());
      return;
    }
  } else {
    value = detail;
    succeeded = true;
  }

  if (promise._state !== PENDING) {
    // noop
  } else if (hasCallback && succeeded) {
    resolve(promise, value);
  } else if (failed) {
    reject(promise, error);
  } else if (settled === FULFILLED) {
    fulfill(promise, value);
  } else if (settled === REJECTED) {
    reject(promise, value);
  }
}

function initializePromise(promise, resolver) {
  try {
    resolver(function resolvePromise(value) {
      resolve(promise, value);
    }, function rejectPromise(reason) {
      reject(promise, reason);
    });
  } catch (e) {
    reject(promise, e);
  }
}

var id = 0;
function nextId() {
  return id++;
}

function makePromise(promise) {
  promise[PROMISE_ID] = id++;
  promise._state = undefined;
  promise._result = undefined;
  promise._subscribers = [];
}

function validationError() {
  return new Error('Array Methods must be provided an Array');
}

var Enumerator = function () {
  function Enumerator(Constructor, input) {
    this._instanceConstructor = Constructor;
    this.promise = new Constructor(noop);

    if (!this.promise[PROMISE_ID]) {
      makePromise(this.promise);
    }

    if (isArray(input)) {
      this.length = input.length;
      this._remaining = input.length;

      this._result = new Array(this.length);

      if (this.length === 0) {
        fulfill(this.promise, this._result);
      } else {
        this.length = this.length || 0;
        this._enumerate(input);
        if (this._remaining === 0) {
          fulfill(this.promise, this._result);
        }
      }
    } else {
      reject(this.promise, validationError());
    }
  }

  Enumerator.prototype._enumerate = function _enumerate(input) {
    for (var i = 0; this._state === PENDING && i < input.length; i++) {
      this._eachEntry(input[i], i);
    }
  };

  Enumerator.prototype._eachEntry = function _eachEntry(entry, i) {
    var c = this._instanceConstructor;
    var resolve$$1 = c.resolve;


    if (resolve$$1 === resolve$1) {
      var _then = getThen(entry);

      if (_then === then && entry._state !== PENDING) {
        this._settledAt(entry._state, i, entry._result);
      } else if (typeof _then !== 'function') {
        this._remaining--;
        this._result[i] = entry;
      } else if (c === Promise$1) {
        var promise = new c(noop);
        handleMaybeThenable(promise, entry, _then);
        this._willSettleAt(promise, i);
      } else {
        this._willSettleAt(new c(function (resolve$$1) {
          return resolve$$1(entry);
        }), i);
      }
    } else {
      this._willSettleAt(resolve$$1(entry), i);
    }
  };

  Enumerator.prototype._settledAt = function _settledAt(state, i, value) {
    var promise = this.promise;


    if (promise._state === PENDING) {
      this._remaining--;

      if (state === REJECTED) {
        reject(promise, value);
      } else {
        this._result[i] = value;
      }
    }

    if (this._remaining === 0) {
      fulfill(promise, this._result);
    }
  };

  Enumerator.prototype._willSettleAt = function _willSettleAt(promise, i) {
    var enumerator = this;

    subscribe(promise, undefined, function (value) {
      return enumerator._settledAt(FULFILLED, i, value);
    }, function (reason) {
      return enumerator._settledAt(REJECTED, i, reason);
    });
  };

  return Enumerator;
}();

/**
  `Promise.all` accepts an array of promises, and returns a new promise which
  is fulfilled with an array of fulfillment values for the passed promises, or
  rejected with the reason of the first passed promise to be rejected. It casts all
  elements of the passed iterable to promises as it runs this algorithm.

  Example:

  ```javascript
  let promise1 = resolve(1);
  let promise2 = resolve(2);
  let promise3 = resolve(3);
  let promises = [ promise1, promise2, promise3 ];

  Promise.all(promises).then(function(array){
    // The array here would be [ 1, 2, 3 ];
  });
  ```

  If any of the `promises` given to `all` are rejected, the first promise
  that is rejected will be given as an argument to the returned promises's
  rejection handler. For example:

  Example:

  ```javascript
  let promise1 = resolve(1);
  let promise2 = reject(new Error("2"));
  let promise3 = reject(new Error("3"));
  let promises = [ promise1, promise2, promise3 ];

  Promise.all(promises).then(function(array){
    // Code here never runs because there are rejected promises!
  }, function(error) {
    // error.message === "2"
  });
  ```

  @method all
  @static
  @param {Array} entries array of promises
  @param {String} label optional string for labeling the promise.
  Useful for tooling.
  @return {Promise} promise that is fulfilled when all `promises` have been
  fulfilled, or rejected if any of them become rejected.
  @static
*/
function all(entries) {
  return new Enumerator(this, entries).promise;
}

/**
  `Promise.race` returns a new promise which is settled in the same way as the
  first passed promise to settle.

  Example:

  ```javascript
  let promise1 = new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve('promise 1');
    }, 200);
  });

  let promise2 = new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve('promise 2');
    }, 100);
  });

  Promise.race([promise1, promise2]).then(function(result){
    // result === 'promise 2' because it was resolved before promise1
    // was resolved.
  });
  ```

  `Promise.race` is deterministic in that only the state of the first
  settled promise matters. For example, even if other promises given to the
  `promises` array argument are resolved, but the first settled promise has
  become rejected before the other promises became fulfilled, the returned
  promise will become rejected:

  ```javascript
  let promise1 = new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve('promise 1');
    }, 200);
  });

  let promise2 = new Promise(function(resolve, reject){
    setTimeout(function(){
      reject(new Error('promise 2'));
    }, 100);
  });

  Promise.race([promise1, promise2]).then(function(result){
    // Code here never runs
  }, function(reason){
    // reason.message === 'promise 2' because promise 2 became rejected before
    // promise 1 became fulfilled
  });
  ```

  An example real-world use case is implementing timeouts:

  ```javascript
  Promise.race([ajax('foo.json'), timeout(5000)])
  ```

  @method race
  @static
  @param {Array} promises array of promises to observe
  Useful for tooling.
  @return {Promise} a promise which settles in the same way as the first passed
  promise to settle.
*/
function race(entries) {
  /*jshint validthis:true */
  var Constructor = this;

  if (!isArray(entries)) {
    return new Constructor(function (_, reject) {
      return reject(new TypeError('You must pass an array to race.'));
    });
  } else {
    return new Constructor(function (resolve, reject) {
      var length = entries.length;
      for (var i = 0; i < length; i++) {
        Constructor.resolve(entries[i]).then(resolve, reject);
      }
    });
  }
}

/**
  `Promise.reject` returns a promise rejected with the passed `reason`.
  It is shorthand for the following:

  ```javascript
  let promise = new Promise(function(resolve, reject){
    reject(new Error('WHOOPS'));
  });

  promise.then(function(value){
    // Code here doesn't run because the promise is rejected!
  }, function(reason){
    // reason.message === 'WHOOPS'
  });
  ```

  Instead of writing the above, your code now simply becomes the following:

  ```javascript
  let promise = Promise.reject(new Error('WHOOPS'));

  promise.then(function(value){
    // Code here doesn't run because the promise is rejected!
  }, function(reason){
    // reason.message === 'WHOOPS'
  });
  ```

  @method reject
  @static
  @param {Any} reason value that the returned promise will be rejected with.
  Useful for tooling.
  @return {Promise} a promise rejected with the given `reason`.
*/
function reject$1(reason) {
  /*jshint validthis:true */
  var Constructor = this;
  var promise = new Constructor(noop);
  reject(promise, reason);
  return promise;
}

function needsResolver() {
  throw new TypeError('You must pass a resolver function as the first argument to the promise constructor');
}

function needsNew() {
  throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
}

/**
  Promise objects represent the eventual result of an asynchronous operation. The
  primary way of interacting with a promise is through its `then` method, which
  registers callbacks to receive either a promise's eventual value or the reason
  why the promise cannot be fulfilled.

  Terminology
  -----------

  - `promise` is an object or function with a `then` method whose behavior conforms to this specification.
  - `thenable` is an object or function that defines a `then` method.
  - `value` is any legal JavaScript value (including undefined, a thenable, or a promise).
  - `exception` is a value that is thrown using the throw statement.
  - `reason` is a value that indicates why a promise was rejected.
  - `settled` the final resting state of a promise, fulfilled or rejected.

  A promise can be in one of three states: pending, fulfilled, or rejected.

  Promises that are fulfilled have a fulfillment value and are in the fulfilled
  state.  Promises that are rejected have a rejection reason and are in the
  rejected state.  A fulfillment value is never a thenable.

  Promises can also be said to *resolve* a value.  If this value is also a
  promise, then the original promise's settled state will match the value's
  settled state.  So a promise that *resolves* a promise that rejects will
  itself reject, and a promise that *resolves* a promise that fulfills will
  itself fulfill.


  Basic Usage:
  ------------

  ```js
  let promise = new Promise(function(resolve, reject) {
    // on success
    resolve(value);

    // on failure
    reject(reason);
  });

  promise.then(function(value) {
    // on fulfillment
  }, function(reason) {
    // on rejection
  });
  ```

  Advanced Usage:
  ---------------

  Promises shine when abstracting away asynchronous interactions such as
  `XMLHttpRequest`s.

  ```js
  function getJSON(url) {
    return new Promise(function(resolve, reject){
      let xhr = new XMLHttpRequest();

      xhr.open('GET', url);
      xhr.onreadystatechange = handler;
      xhr.responseType = 'json';
      xhr.setRequestHeader('Accept', 'application/json');
      xhr.send();

      function handler() {
        if (this.readyState === this.DONE) {
          if (this.status === 200) {
            resolve(this.response);
          } else {
            reject(new Error('getJSON: `' + url + '` failed with status: [' + this.status + ']'));
          }
        }
      };
    });
  }

  getJSON('/posts.json').then(function(json) {
    // on fulfillment
  }, function(reason) {
    // on rejection
  });
  ```

  Unlike callbacks, promises are great composable primitives.

  ```js
  Promise.all([
    getJSON('/posts'),
    getJSON('/comments')
  ]).then(function(values){
    values[0] // => postsJSON
    values[1] // => commentsJSON

    return values;
  });
  ```

  @class Promise
  @param {Function} resolver
  Useful for tooling.
  @constructor
*/

var Promise$1 = function () {
  function Promise(resolver) {
    this[PROMISE_ID] = nextId();
    this._result = this._state = undefined;
    this._subscribers = [];

    if (noop !== resolver) {
      typeof resolver !== 'function' && needsResolver();
      this instanceof Promise ? initializePromise(this, resolver) : needsNew();
    }
  }

  /**
  The primary way of interacting with a promise is through its `then` method,
  which registers callbacks to receive either a promise's eventual value or the
  reason why the promise cannot be fulfilled.
   ```js
  findUser().then(function(user){
    // user is available
  }, function(reason){
    // user is unavailable, and you are given the reason why
  });
  ```
   Chaining
  --------
   The return value of `then` is itself a promise.  This second, 'downstream'
  promise is resolved with the return value of the first promise's fulfillment
  or rejection handler, or rejected if the handler throws an exception.
   ```js
  findUser().then(function (user) {
    return user.name;
  }, function (reason) {
    return 'default name';
  }).then(function (userName) {
    // If `findUser` fulfilled, `userName` will be the user's name, otherwise it
    // will be `'default name'`
  });
   findUser().then(function (user) {
    throw new Error('Found user, but still unhappy');
  }, function (reason) {
    throw new Error('`findUser` rejected and we're unhappy');
  }).then(function (value) {
    // never reached
  }, function (reason) {
    // if `findUser` fulfilled, `reason` will be 'Found user, but still unhappy'.
    // If `findUser` rejected, `reason` will be '`findUser` rejected and we're unhappy'.
  });
  ```
  If the downstream promise does not specify a rejection handler, rejection reasons will be propagated further downstream.
   ```js
  findUser().then(function (user) {
    throw new PedagogicalException('Upstream error');
  }).then(function (value) {
    // never reached
  }).then(function (value) {
    // never reached
  }, function (reason) {
    // The `PedgagocialException` is propagated all the way down to here
  });
  ```
   Assimilation
  ------------
   Sometimes the value you want to propagate to a downstream promise can only be
  retrieved asynchronously. This can be achieved by returning a promise in the
  fulfillment or rejection handler. The downstream promise will then be pending
  until the returned promise is settled. This is called *assimilation*.
   ```js
  findUser().then(function (user) {
    return findCommentsByAuthor(user);
  }).then(function (comments) {
    // The user's comments are now available
  });
  ```
   If the assimliated promise rejects, then the downstream promise will also reject.
   ```js
  findUser().then(function (user) {
    return findCommentsByAuthor(user);
  }).then(function (comments) {
    // If `findCommentsByAuthor` fulfills, we'll have the value here
  }, function (reason) {
    // If `findCommentsByAuthor` rejects, we'll have the reason here
  });
  ```
   Simple Example
  --------------
   Synchronous Example
   ```javascript
  let result;
   try {
    result = findResult();
    // success
  } catch(reason) {
    // failure
  }
  ```
   Errback Example
   ```js
  findResult(function(result, err){
    if (err) {
      // failure
    } else {
      // success
    }
  });
  ```
   Promise Example;
   ```javascript
  findResult().then(function(result){
    // success
  }, function(reason){
    // failure
  });
  ```
   Advanced Example
  --------------
   Synchronous Example
   ```javascript
  let author, books;
   try {
    author = findAuthor();
    books  = findBooksByAuthor(author);
    // success
  } catch(reason) {
    // failure
  }
  ```
   Errback Example
   ```js
   function foundBooks(books) {
   }
   function failure(reason) {
   }
   findAuthor(function(author, err){
    if (err) {
      failure(err);
      // failure
    } else {
      try {
        findBoooksByAuthor(author, function(books, err) {
          if (err) {
            failure(err);
          } else {
            try {
              foundBooks(books);
            } catch(reason) {
              failure(reason);
            }
          }
        });
      } catch(error) {
        failure(err);
      }
      // success
    }
  });
  ```
   Promise Example;
   ```javascript
  findAuthor().
    then(findBooksByAuthor).
    then(function(books){
      // found books
  }).catch(function(reason){
    // something went wrong
  });
  ```
   @method then
  @param {Function} onFulfilled
  @param {Function} onRejected
  Useful for tooling.
  @return {Promise}
  */

  /**
  `catch` is simply sugar for `then(undefined, onRejection)` which makes it the same
  as the catch block of a try/catch statement.
  ```js
  function findAuthor(){
  throw new Error('couldn't find that author');
  }
  // synchronous
  try {
  findAuthor();
  } catch(reason) {
  // something went wrong
  }
  // async with promises
  findAuthor().catch(function(reason){
  // something went wrong
  });
  ```
  @method catch
  @param {Function} onRejection
  Useful for tooling.
  @return {Promise}
  */


  Promise.prototype.catch = function _catch(onRejection) {
    return this.then(null, onRejection);
  };

  /**
    `finally` will be invoked regardless of the promise's fate just as native
    try/catch/finally behaves
  
    Synchronous example:
  
    ```js
    findAuthor() {
      if (Math.random() > 0.5) {
        throw new Error();
      }
      return new Author();
    }
  
    try {
      return findAuthor(); // succeed or fail
    } catch(error) {
      return findOtherAuther();
    } finally {
      // always runs
      // doesn't affect the return value
    }
    ```
  
    Asynchronous example:
  
    ```js
    findAuthor().catch(function(reason){
      return findOtherAuther();
    }).finally(function(){
      // author was either found, or not
    });
    ```
  
    @method finally
    @param {Function} callback
    @return {Promise}
  */


  Promise.prototype.finally = function _finally(callback) {
    var promise = this;
    var constructor = promise.constructor;

    if (isFunction(callback)) {
      return promise.then(function (value) {
        return constructor.resolve(callback()).then(function () {
          return value;
        });
      }, function (reason) {
        return constructor.resolve(callback()).then(function () {
          throw reason;
        });
      });
    }

    return promise.then(callback, callback);
  };

  return Promise;
}();

Promise$1.prototype.then = then;
Promise$1.all = all;
Promise$1.race = race;
Promise$1.resolve = resolve$1;
Promise$1.reject = reject$1;
Promise$1._setScheduler = setScheduler;
Promise$1._setAsap = setAsap;
Promise$1._asap = asap;

/*global self*/
function polyfill() {
  var local = void 0;

  if (typeof global !== 'undefined') {
    local = global;
  } else if (typeof self !== 'undefined') {
    local = self;
  } else {
    try {
      local = Function('return this')();
    } catch (e) {
      throw new Error('polyfill failed because global object is unavailable in this environment');
    }
  }

  var P = local.Promise;

  if (P) {
    var promiseToString = null;
    try {
      promiseToString = Object.prototype.toString.call(P.resolve());
    } catch (e) {
      // silently ignored
    }

    if (promiseToString === '[object Promise]' && !P.cast) {
      return;
    }
  }

  local.Promise = Promise$1;
}

// Strange compat..
Promise$1.polyfill = polyfill;
Promise$1.Promise = Promise$1;

return Promise$1;

})));



//# sourceMappingURL=es6-promise.map

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../process/browser.js */ "./node_modules/process/browser.js"), __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/es6-symbol/implement.js":
/*!**********************************************!*\
  !*** ./node_modules/es6-symbol/implement.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (!__webpack_require__(/*! ./is-implemented */ "./node_modules/es6-symbol/is-implemented.js")()) {
	Object.defineProperty(__webpack_require__(/*! es5-ext/global */ "./node_modules/es5-ext/global.js"), 'Symbol',
		{ value: __webpack_require__(/*! ./polyfill */ "./node_modules/es6-symbol/polyfill.js"), configurable: true, enumerable: false,
			writable: true });
}


/***/ }),

/***/ "./node_modules/es6-symbol/is-implemented.js":
/*!***************************************************!*\
  !*** ./node_modules/es6-symbol/is-implemented.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var validTypes = { object: true, symbol: true };

module.exports = function () {
	var symbol;
	if (typeof Symbol !== 'function') return false;
	symbol = Symbol('test symbol');
	try { String(symbol); } catch (e) { return false; }

	// Return 'true' also for polyfills
	if (!validTypes[typeof Symbol.iterator]) return false;
	if (!validTypes[typeof Symbol.toPrimitive]) return false;
	if (!validTypes[typeof Symbol.toStringTag]) return false;

	return true;
};


/***/ }),

/***/ "./node_modules/es6-symbol/is-symbol.js":
/*!**********************************************!*\
  !*** ./node_modules/es6-symbol/is-symbol.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (x) {
	if (!x) return false;
	if (typeof x === 'symbol') return true;
	if (!x.constructor) return false;
	if (x.constructor.name !== 'Symbol') return false;
	return (x[x.constructor.toStringTag] === 'Symbol');
};


/***/ }),

/***/ "./node_modules/es6-symbol/polyfill.js":
/*!*********************************************!*\
  !*** ./node_modules/es6-symbol/polyfill.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// ES2015 Symbol polyfill for environments that do not (or partially) support it



var d              = __webpack_require__(/*! d */ "./node_modules/d/index.js")
  , validateSymbol = __webpack_require__(/*! ./validate-symbol */ "./node_modules/es6-symbol/validate-symbol.js")

  , create = Object.create, defineProperties = Object.defineProperties
  , defineProperty = Object.defineProperty, objPrototype = Object.prototype
  , NativeSymbol, SymbolPolyfill, HiddenSymbol, globalSymbols = create(null)
  , isNativeSafe;

if (typeof Symbol === 'function') {
	NativeSymbol = Symbol;
	try {
		String(NativeSymbol());
		isNativeSafe = true;
	} catch (ignore) {}
}

var generateName = (function () {
	var created = create(null);
	return function (desc) {
		var postfix = 0, name, ie11BugWorkaround;
		while (created[desc + (postfix || '')]) ++postfix;
		desc += (postfix || '');
		created[desc] = true;
		name = '@@' + desc;
		defineProperty(objPrototype, name, d.gs(null, function (value) {
			// For IE11 issue see:
			// https://connect.microsoft.com/IE/feedbackdetail/view/1928508/
			//    ie11-broken-getters-on-dom-objects
			// https://github.com/medikoo/es6-symbol/issues/12
			if (ie11BugWorkaround) return;
			ie11BugWorkaround = true;
			defineProperty(this, name, d(value));
			ie11BugWorkaround = false;
		}));
		return name;
	};
}());

// Internal constructor (not one exposed) for creating Symbol instances.
// This one is used to ensure that `someSymbol instanceof Symbol` always return false
HiddenSymbol = function Symbol(description) {
	if (this instanceof HiddenSymbol) throw new TypeError('Symbol is not a constructor');
	return SymbolPolyfill(description);
};

// Exposed `Symbol` constructor
// (returns instances of HiddenSymbol)
module.exports = SymbolPolyfill = function Symbol(description) {
	var symbol;
	if (this instanceof Symbol) throw new TypeError('Symbol is not a constructor');
	if (isNativeSafe) return NativeSymbol(description);
	symbol = create(HiddenSymbol.prototype);
	description = (description === undefined ? '' : String(description));
	return defineProperties(symbol, {
		__description__: d('', description),
		__name__: d('', generateName(description))
	});
};
defineProperties(SymbolPolyfill, {
	for: d(function (key) {
		if (globalSymbols[key]) return globalSymbols[key];
		return (globalSymbols[key] = SymbolPolyfill(String(key)));
	}),
	keyFor: d(function (s) {
		var key;
		validateSymbol(s);
		for (key in globalSymbols) if (globalSymbols[key] === s) return key;
	}),

	// To ensure proper interoperability with other native functions (e.g. Array.from)
	// fallback to eventual native implementation of given symbol
	hasInstance: d('', (NativeSymbol && NativeSymbol.hasInstance) || SymbolPolyfill('hasInstance')),
	isConcatSpreadable: d('', (NativeSymbol && NativeSymbol.isConcatSpreadable) ||
		SymbolPolyfill('isConcatSpreadable')),
	iterator: d('', (NativeSymbol && NativeSymbol.iterator) || SymbolPolyfill('iterator')),
	match: d('', (NativeSymbol && NativeSymbol.match) || SymbolPolyfill('match')),
	replace: d('', (NativeSymbol && NativeSymbol.replace) || SymbolPolyfill('replace')),
	search: d('', (NativeSymbol && NativeSymbol.search) || SymbolPolyfill('search')),
	species: d('', (NativeSymbol && NativeSymbol.species) || SymbolPolyfill('species')),
	split: d('', (NativeSymbol && NativeSymbol.split) || SymbolPolyfill('split')),
	toPrimitive: d('', (NativeSymbol && NativeSymbol.toPrimitive) || SymbolPolyfill('toPrimitive')),
	toStringTag: d('', (NativeSymbol && NativeSymbol.toStringTag) || SymbolPolyfill('toStringTag')),
	unscopables: d('', (NativeSymbol && NativeSymbol.unscopables) || SymbolPolyfill('unscopables'))
});

// Internal tweaks for real symbol producer
defineProperties(HiddenSymbol.prototype, {
	constructor: d(SymbolPolyfill),
	toString: d('', function () { return this.__name__; })
});

// Proper implementation of methods exposed on Symbol.prototype
// They won't be accessible on produced symbol instances as they derive from HiddenSymbol.prototype
defineProperties(SymbolPolyfill.prototype, {
	toString: d(function () { return 'Symbol (' + validateSymbol(this).__description__ + ')'; }),
	valueOf: d(function () { return validateSymbol(this); })
});
defineProperty(SymbolPolyfill.prototype, SymbolPolyfill.toPrimitive, d('', function () {
	var symbol = validateSymbol(this);
	if (typeof symbol === 'symbol') return symbol;
	return symbol.toString();
}));
defineProperty(SymbolPolyfill.prototype, SymbolPolyfill.toStringTag, d('c', 'Symbol'));

// Proper implementaton of toPrimitive and toStringTag for returned symbol instances
defineProperty(HiddenSymbol.prototype, SymbolPolyfill.toStringTag,
	d('c', SymbolPolyfill.prototype[SymbolPolyfill.toStringTag]));

// Note: It's important to define `toPrimitive` as last one, as some implementations
// implement `toPrimitive` natively without implementing `toStringTag` (or other specified symbols)
// And that may invoke error in definition flow:
// See: https://github.com/medikoo/es6-symbol/issues/13#issuecomment-164146149
defineProperty(HiddenSymbol.prototype, SymbolPolyfill.toPrimitive,
	d('c', SymbolPolyfill.prototype[SymbolPolyfill.toPrimitive]));


/***/ }),

/***/ "./node_modules/es6-symbol/validate-symbol.js":
/*!****************************************************!*\
  !*** ./node_modules/es6-symbol/validate-symbol.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isSymbol = __webpack_require__(/*! ./is-symbol */ "./node_modules/es6-symbol/is-symbol.js");

module.exports = function (value) {
	if (!isSymbol(value)) throw new TypeError(value + " is not a symbol");
	return value;
};


/***/ }),

/***/ "./node_modules/flatpickr/dist/flatpickr.css":
/*!***************************************************!*\
  !*** ./node_modules/flatpickr/dist/flatpickr.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/flatpickr/dist/flatpickr.js":
/*!**************************************************!*\
  !*** ./node_modules/flatpickr/dist/flatpickr.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* flatpickr v4.5.2, @license MIT */
(function (global, factory) {
     true ? module.exports = factory() :
    undefined;
}(this, (function () { 'use strict';

    var pad = function pad(number) {
      return ("0" + number).slice(-2);
    };
    var int = function int(bool) {
      return bool === true ? 1 : 0;
    };
    function debounce(func, wait, immediate) {
      if (immediate === void 0) {
        immediate = false;
      }

      var timeout;
      return function () {
        var context = this,
            args = arguments;
        timeout !== null && clearTimeout(timeout);
        timeout = window.setTimeout(function () {
          timeout = null;
          if (!immediate) func.apply(context, args);
        }, wait);
        if (immediate && !timeout) func.apply(context, args);
      };
    }
    var arrayify = function arrayify(obj) {
      return obj instanceof Array ? obj : [obj];
    };

    var do_nothing = function do_nothing() {
      return undefined;
    };

    var monthToStr = function monthToStr(monthNumber, shorthand, locale) {
      return locale.months[shorthand ? "shorthand" : "longhand"][monthNumber];
    };
    var revFormat = {
      D: do_nothing,
      F: function F(dateObj, monthName, locale) {
        dateObj.setMonth(locale.months.longhand.indexOf(monthName));
      },
      G: function G(dateObj, hour) {
        dateObj.setHours(parseFloat(hour));
      },
      H: function H(dateObj, hour) {
        dateObj.setHours(parseFloat(hour));
      },
      J: function J(dateObj, day) {
        dateObj.setDate(parseFloat(day));
      },
      K: function K(dateObj, amPM, locale) {
        dateObj.setHours(dateObj.getHours() % 12 + 12 * int(new RegExp(locale.amPM[1], "i").test(amPM)));
      },
      M: function M(dateObj, shortMonth, locale) {
        dateObj.setMonth(locale.months.shorthand.indexOf(shortMonth));
      },
      S: function S(dateObj, seconds) {
        dateObj.setSeconds(parseFloat(seconds));
      },
      U: function U(_, unixSeconds) {
        return new Date(parseFloat(unixSeconds) * 1000);
      },
      W: function W(dateObj, weekNum) {
        var weekNumber = parseInt(weekNum);
        return new Date(dateObj.getFullYear(), 0, 2 + (weekNumber - 1) * 7, 0, 0, 0, 0);
      },
      Y: function Y(dateObj, year) {
        dateObj.setFullYear(parseFloat(year));
      },
      Z: function Z(_, ISODate) {
        return new Date(ISODate);
      },
      d: function d(dateObj, day) {
        dateObj.setDate(parseFloat(day));
      },
      h: function h(dateObj, hour) {
        dateObj.setHours(parseFloat(hour));
      },
      i: function i(dateObj, minutes) {
        dateObj.setMinutes(parseFloat(minutes));
      },
      j: function j(dateObj, day) {
        dateObj.setDate(parseFloat(day));
      },
      l: do_nothing,
      m: function m(dateObj, month) {
        dateObj.setMonth(parseFloat(month) - 1);
      },
      n: function n(dateObj, month) {
        dateObj.setMonth(parseFloat(month) - 1);
      },
      s: function s(dateObj, seconds) {
        dateObj.setSeconds(parseFloat(seconds));
      },
      w: do_nothing,
      y: function y(dateObj, year) {
        dateObj.setFullYear(2000 + parseFloat(year));
      }
    };
    var tokenRegex = {
      D: "(\\w+)",
      F: "(\\w+)",
      G: "(\\d\\d|\\d)",
      H: "(\\d\\d|\\d)",
      J: "(\\d\\d|\\d)\\w+",
      K: "",
      M: "(\\w+)",
      S: "(\\d\\d|\\d)",
      U: "(.+)",
      W: "(\\d\\d|\\d)",
      Y: "(\\d{4})",
      Z: "(.+)",
      d: "(\\d\\d|\\d)",
      h: "(\\d\\d|\\d)",
      i: "(\\d\\d|\\d)",
      j: "(\\d\\d|\\d)",
      l: "(\\w+)",
      m: "(\\d\\d|\\d)",
      n: "(\\d\\d|\\d)",
      s: "(\\d\\d|\\d)",
      w: "(\\d\\d|\\d)",
      y: "(\\d{2})"
    };
    var formats = {
      Z: function Z(date) {
        return date.toISOString();
      },
      D: function D(date, locale, options) {
        return locale.weekdays.shorthand[formats.w(date, locale, options)];
      },
      F: function F(date, locale, options) {
        return monthToStr(formats.n(date, locale, options) - 1, false, locale);
      },
      G: function G(date, locale, options) {
        return pad(formats.h(date, locale, options));
      },
      H: function H(date) {
        return pad(date.getHours());
      },
      J: function J(date, locale) {
        return locale.ordinal !== undefined ? date.getDate() + locale.ordinal(date.getDate()) : date.getDate();
      },
      K: function K(date, locale) {
        return locale.amPM[int(date.getHours() > 11)];
      },
      M: function M(date, locale) {
        return monthToStr(date.getMonth(), true, locale);
      },
      S: function S(date) {
        return pad(date.getSeconds());
      },
      U: function U(date) {
        return date.getTime() / 1000;
      },
      W: function W(date, _, options) {
        return options.getWeek(date);
      },
      Y: function Y(date) {
        return date.getFullYear();
      },
      d: function d(date) {
        return pad(date.getDate());
      },
      h: function h(date) {
        return date.getHours() % 12 ? date.getHours() % 12 : 12;
      },
      i: function i(date) {
        return pad(date.getMinutes());
      },
      j: function j(date) {
        return date.getDate();
      },
      l: function l(date, locale) {
        return locale.weekdays.longhand[date.getDay()];
      },
      m: function m(date) {
        return pad(date.getMonth() + 1);
      },
      n: function n(date) {
        return date.getMonth() + 1;
      },
      s: function s(date) {
        return date.getSeconds();
      },
      w: function w(date) {
        return date.getDay();
      },
      y: function y(date) {
        return String(date.getFullYear()).substring(2);
      }
    };

    var english = {
      weekdays: {
        shorthand: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        longhand: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
      },
      months: {
        shorthand: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        longhand: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
      },
      daysInMonth: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
      firstDayOfWeek: 0,
      ordinal: function ordinal(nth) {
        var s = nth % 100;
        if (s > 3 && s < 21) return "th";

        switch (s % 10) {
          case 1:
            return "st";

          case 2:
            return "nd";

          case 3:
            return "rd";

          default:
            return "th";
        }
      },
      rangeSeparator: " to ",
      weekAbbreviation: "Wk",
      scrollTitle: "Scroll to increment",
      toggleTitle: "Click to toggle",
      amPM: ["AM", "PM"],
      yearAriaLabel: "Year"
    };

    var createDateFormatter = function createDateFormatter(_ref) {
      var _ref$config = _ref.config,
          config = _ref$config === void 0 ? defaults : _ref$config,
          _ref$l10n = _ref.l10n,
          l10n = _ref$l10n === void 0 ? english : _ref$l10n;
      return function (dateObj, frmt, overrideLocale) {
        var locale = overrideLocale || l10n;

        if (config.formatDate !== undefined) {
          return config.formatDate(dateObj, frmt, locale);
        }

        return frmt.split("").map(function (c, i, arr) {
          return formats[c] && arr[i - 1] !== "\\" ? formats[c](dateObj, locale, config) : c !== "\\" ? c : "";
        }).join("");
      };
    };
    var createDateParser = function createDateParser(_ref2) {
      var _ref2$config = _ref2.config,
          config = _ref2$config === void 0 ? defaults : _ref2$config,
          _ref2$l10n = _ref2.l10n,
          l10n = _ref2$l10n === void 0 ? english : _ref2$l10n;
      return function (date, givenFormat, timeless, customLocale) {
        if (date !== 0 && !date) return undefined;
        var locale = customLocale || l10n;
        var parsedDate;
        var date_orig = date;
        if (date instanceof Date) parsedDate = new Date(date.getTime());else if (typeof date !== "string" && date.toFixed !== undefined) parsedDate = new Date(date);else if (typeof date === "string") {
          var format = givenFormat || (config || defaults).dateFormat;
          var datestr = String(date).trim();

          if (datestr === "today") {
            parsedDate = new Date();
            timeless = true;
          } else if (/Z$/.test(datestr) || /GMT$/.test(datestr)) parsedDate = new Date(date);else if (config && config.parseDate) parsedDate = config.parseDate(date, format);else {
            parsedDate = !config || !config.noCalendar ? new Date(new Date().getFullYear(), 0, 1, 0, 0, 0, 0) : new Date(new Date().setHours(0, 0, 0, 0));
            var matched,
                ops = [];

            for (var i = 0, matchIndex = 0, regexStr = ""; i < format.length; i++) {
              var token = format[i];
              var isBackSlash = token === "\\";
              var escaped = format[i - 1] === "\\" || isBackSlash;

              if (tokenRegex[token] && !escaped) {
                regexStr += tokenRegex[token];
                var match = new RegExp(regexStr).exec(date);

                if (match && (matched = true)) {
                  ops[token !== "Y" ? "push" : "unshift"]({
                    fn: revFormat[token],
                    val: match[++matchIndex]
                  });
                }
              } else if (!isBackSlash) regexStr += ".";

              ops.forEach(function (_ref3) {
                var fn = _ref3.fn,
                    val = _ref3.val;
                return parsedDate = fn(parsedDate, val, locale) || parsedDate;
              });
            }

            parsedDate = matched ? parsedDate : undefined;
          }
        }

        if (!(parsedDate instanceof Date && !isNaN(parsedDate.getTime()))) {
          config.errorHandler(new Error("Invalid date provided: " + date_orig));
          return undefined;
        }

        if (timeless === true) parsedDate.setHours(0, 0, 0, 0);
        return parsedDate;
      };
    };
    function compareDates(date1, date2, timeless) {
      if (timeless === void 0) {
        timeless = true;
      }

      if (timeless !== false) {
        return new Date(date1.getTime()).setHours(0, 0, 0, 0) - new Date(date2.getTime()).setHours(0, 0, 0, 0);
      }

      return date1.getTime() - date2.getTime();
    }
    var getWeek = function getWeek(givenDate) {
      var date = new Date(givenDate.getTime());
      date.setHours(0, 0, 0, 0);
      date.setDate(date.getDate() + 3 - (date.getDay() + 6) % 7);
      var week1 = new Date(date.getFullYear(), 0, 4);
      return 1 + Math.round(((date.getTime() - week1.getTime()) / 86400000 - 3 + (week1.getDay() + 6) % 7) / 7);
    };
    var isBetween = function isBetween(ts, ts1, ts2) {
      return ts > Math.min(ts1, ts2) && ts < Math.max(ts1, ts2);
    };
    var duration = {
      DAY: 86400000
    };

    var HOOKS = ["onChange", "onClose", "onDayCreate", "onDestroy", "onKeyDown", "onMonthChange", "onOpen", "onParseConfig", "onReady", "onValueUpdate", "onYearChange", "onPreCalendarPosition"];
    var defaults = {
      _disable: [],
      _enable: [],
      allowInput: false,
      altFormat: "F j, Y",
      altInput: false,
      altInputClass: "form-control input",
      animate: typeof window === "object" && window.navigator.userAgent.indexOf("MSIE") === -1,
      ariaDateFormat: "F j, Y",
      clickOpens: true,
      closeOnSelect: true,
      conjunction: ", ",
      dateFormat: "Y-m-d",
      defaultHour: 12,
      defaultMinute: 0,
      defaultSeconds: 0,
      disable: [],
      disableMobile: false,
      enable: [],
      enableSeconds: false,
      enableTime: false,
      errorHandler: function errorHandler(err) {
        return typeof console !== "undefined" && console.warn(err);
      },
      getWeek: getWeek,
      hourIncrement: 1,
      ignoredFocusElements: [],
      inline: false,
      locale: "default",
      minuteIncrement: 5,
      mode: "single",
      nextArrow: "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M13.207 8.472l-7.854 7.854-0.707-0.707 7.146-7.146-7.146-7.148 0.707-0.707 7.854 7.854z' /></svg>",
      noCalendar: false,
      now: new Date(),
      onChange: [],
      onClose: [],
      onDayCreate: [],
      onDestroy: [],
      onKeyDown: [],
      onMonthChange: [],
      onOpen: [],
      onParseConfig: [],
      onReady: [],
      onValueUpdate: [],
      onYearChange: [],
      onPreCalendarPosition: [],
      plugins: [],
      position: "auto",
      positionElement: undefined,
      prevArrow: "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M5.207 8.471l7.146 7.147-0.707 0.707-7.853-7.854 7.854-7.853 0.707 0.707-7.147 7.146z' /></svg>",
      shorthandCurrentMonth: false,
      showMonths: 1,
      static: false,
      time_24hr: false,
      weekNumbers: false,
      wrap: false
    };

    function toggleClass(elem, className, bool) {
      if (bool === true) return elem.classList.add(className);
      elem.classList.remove(className);
    }
    function createElement(tag, className, content) {
      var e = window.document.createElement(tag);
      className = className || "";
      content = content || "";
      e.className = className;
      if (content !== undefined) e.textContent = content;
      return e;
    }
    function clearNode(node) {
      while (node.firstChild) {
        node.removeChild(node.firstChild);
      }
    }
    function findParent(node, condition) {
      if (condition(node)) return node;else if (node.parentNode) return findParent(node.parentNode, condition);
      return undefined;
    }
    function createNumberInput(inputClassName, opts) {
      var wrapper = createElement("div", "numInputWrapper"),
          numInput = createElement("input", "numInput " + inputClassName),
          arrowUp = createElement("span", "arrowUp"),
          arrowDown = createElement("span", "arrowDown");
      numInput.type = "text";
      numInput.pattern = "\\d*";
      if (opts !== undefined) for (var key in opts) {
        numInput.setAttribute(key, opts[key]);
      }
      wrapper.appendChild(numInput);
      wrapper.appendChild(arrowUp);
      wrapper.appendChild(arrowDown);
      return wrapper;
    }

    if (typeof Object.assign !== "function") {
      Object.assign = function (target) {
        if (!target) {
          throw TypeError("Cannot convert undefined or null to object");
        }

        for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }

        var _loop = function _loop() {
          var source = args[_i];

          if (source) {
            Object.keys(source).forEach(function (key) {
              return target[key] = source[key];
            });
          }
        };

        for (var _i = 0; _i < args.length; _i++) {
          _loop();
        }

        return target;
      };
    }

    var DEBOUNCED_CHANGE_MS = 300;

    function FlatpickrInstance(element, instanceConfig) {
      var self = {
        config: Object.assign({}, flatpickr.defaultConfig),
        l10n: english
      };
      self.parseDate = createDateParser({
        config: self.config,
        l10n: self.l10n
      });
      self._handlers = [];
      self._bind = bind;
      self._setHoursFromDate = setHoursFromDate;
      self._positionCalendar = positionCalendar;
      self.changeMonth = changeMonth;
      self.changeYear = changeYear;
      self.clear = clear;
      self.close = close;
      self._createElement = createElement;
      self.destroy = destroy;
      self.isEnabled = isEnabled;
      self.jumpToDate = jumpToDate;
      self.open = open;
      self.redraw = redraw;
      self.set = set;
      self.setDate = setDate;
      self.toggle = toggle;

      function setupHelperFunctions() {
        self.utils = {
          getDaysInMonth: function getDaysInMonth(month, yr) {
            if (month === void 0) {
              month = self.currentMonth;
            }

            if (yr === void 0) {
              yr = self.currentYear;
            }

            if (month === 1 && (yr % 4 === 0 && yr % 100 !== 0 || yr % 400 === 0)) return 29;
            return self.l10n.daysInMonth[month];
          }
        };
      }

      function init() {
        self.element = self.input = element;
        self.isOpen = false;
        parseConfig();
        setupLocale();
        setupInputs();
        setupDates();
        setupHelperFunctions();
        if (!self.isMobile) build();
        bindEvents();

        if (self.selectedDates.length || self.config.noCalendar) {
          if (self.config.enableTime) {
            setHoursFromDate(self.config.noCalendar ? self.latestSelectedDateObj || self.config.minDate : undefined);
          }

          updateValue(false);
        }

        setCalendarWidth();
        self.showTimeInput = self.selectedDates.length > 0 || self.config.noCalendar;
        var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

        if (!self.isMobile && isSafari) {
          positionCalendar();
        }

        triggerEvent("onReady");
      }

      function bindToInstance(fn) {
        return fn.bind(self);
      }

      function setCalendarWidth() {
        var config = self.config;
        if (config.weekNumbers === false && config.showMonths === 1) return;else if (config.noCalendar !== true) {
          window.requestAnimationFrame(function () {
            self.calendarContainer.style.visibility = "hidden";
            self.calendarContainer.style.display = "block";

            if (self.daysContainer !== undefined) {
              var daysWidth = (self.days.offsetWidth + 1) * config.showMonths;
              self.daysContainer.style.width = daysWidth + "px";
              self.calendarContainer.style.width = daysWidth + (self.weekWrapper !== undefined ? self.weekWrapper.offsetWidth : 0) + "px";
              self.calendarContainer.style.removeProperty("visibility");
              self.calendarContainer.style.removeProperty("display");
            }
          });
        }
      }

      function updateTime(e) {
        if (self.selectedDates.length === 0) return;

        if (e !== undefined && e.type !== "blur") {
          timeWrapper(e);
        }

        var prevValue = self._input.value;
        setHoursFromInputs();
        updateValue();

        if (self._input.value !== prevValue) {
          self._debouncedChange();
        }
      }

      function ampm2military(hour, amPM) {
        return hour % 12 + 12 * int(amPM === self.l10n.amPM[1]);
      }

      function military2ampm(hour) {
        switch (hour % 24) {
          case 0:
          case 12:
            return 12;

          default:
            return hour % 12;
        }
      }

      function setHoursFromInputs() {
        if (self.hourElement === undefined || self.minuteElement === undefined) return;
        var hours = (parseInt(self.hourElement.value.slice(-2), 10) || 0) % 24,
            minutes = (parseInt(self.minuteElement.value, 10) || 0) % 60,
            seconds = self.secondElement !== undefined ? (parseInt(self.secondElement.value, 10) || 0) % 60 : 0;

        if (self.amPM !== undefined) {
          hours = ampm2military(hours, self.amPM.textContent);
        }

        var limitMinHours = self.config.minTime !== undefined || self.config.minDate && self.minDateHasTime && self.latestSelectedDateObj && compareDates(self.latestSelectedDateObj, self.config.minDate, true) === 0;
        var limitMaxHours = self.config.maxTime !== undefined || self.config.maxDate && self.maxDateHasTime && self.latestSelectedDateObj && compareDates(self.latestSelectedDateObj, self.config.maxDate, true) === 0;

        if (limitMaxHours) {
          var maxTime = self.config.maxTime !== undefined ? self.config.maxTime : self.config.maxDate;
          hours = Math.min(hours, maxTime.getHours());
          if (hours === maxTime.getHours()) minutes = Math.min(minutes, maxTime.getMinutes());
          if (minutes === maxTime.getMinutes()) seconds = Math.min(seconds, maxTime.getSeconds());
        }

        if (limitMinHours) {
          var minTime = self.config.minTime !== undefined ? self.config.minTime : self.config.minDate;
          hours = Math.max(hours, minTime.getHours());
          if (hours === minTime.getHours()) minutes = Math.max(minutes, minTime.getMinutes());
          if (minutes === minTime.getMinutes()) seconds = Math.max(seconds, minTime.getSeconds());
        }

        setHours(hours, minutes, seconds);
      }

      function setHoursFromDate(dateObj) {
        var date = dateObj || self.latestSelectedDateObj;
        if (date) setHours(date.getHours(), date.getMinutes(), date.getSeconds());
      }

      function setDefaultHours() {
        var hours = self.config.defaultHour;
        var minutes = self.config.defaultMinute;
        var seconds = self.config.defaultSeconds;

        if (self.config.minDate !== undefined) {
          var min_hr = self.config.minDate.getHours();
          var min_minutes = self.config.minDate.getMinutes();
          hours = Math.max(hours, min_hr);
          if (hours === min_hr) minutes = Math.max(min_minutes, minutes);
          if (hours === min_hr && minutes === min_minutes) seconds = self.config.minDate.getSeconds();
        }

        if (self.config.maxDate !== undefined) {
          var max_hr = self.config.maxDate.getHours();
          var max_minutes = self.config.maxDate.getMinutes();
          hours = Math.min(hours, max_hr);
          if (hours === max_hr) minutes = Math.min(max_minutes, minutes);
          if (hours === max_hr && minutes === max_minutes) seconds = self.config.maxDate.getSeconds();
        }

        setHours(hours, minutes, seconds);
      }

      function setHours(hours, minutes, seconds) {
        if (self.latestSelectedDateObj !== undefined) {
          self.latestSelectedDateObj.setHours(hours % 24, minutes, seconds || 0, 0);
        }

        if (!self.hourElement || !self.minuteElement || self.isMobile) return;
        self.hourElement.value = pad(!self.config.time_24hr ? (12 + hours) % 12 + 12 * int(hours % 12 === 0) : hours);
        self.minuteElement.value = pad(minutes);
        if (self.amPM !== undefined) self.amPM.textContent = self.l10n.amPM[int(hours >= 12)];
        if (self.secondElement !== undefined) self.secondElement.value = pad(seconds);
      }

      function onYearInput(event) {
        var year = parseInt(event.target.value) + (event.delta || 0);

        if (year / 1000 > 1 || event.key === "Enter" && !/[^\d]/.test(year.toString())) {
          changeYear(year);
        }
      }

      function bind(element, event, handler, options) {
        if (event instanceof Array) return event.forEach(function (ev) {
          return bind(element, ev, handler, options);
        });
        if (element instanceof Array) return element.forEach(function (el) {
          return bind(el, event, handler, options);
        });
        element.addEventListener(event, handler, options);

        self._handlers.push({
          element: element,
          event: event,
          handler: handler,
          options: options
        });
      }

      function onClick(handler) {
        return function (evt) {
          evt.which === 1 && handler(evt);
        };
      }

      function triggerChange() {
        triggerEvent("onChange");
      }

      function bindEvents() {
        if (self.config.wrap) {
          ["open", "close", "toggle", "clear"].forEach(function (evt) {
            Array.prototype.forEach.call(self.element.querySelectorAll("[data-" + evt + "]"), function (el) {
              return bind(el, "click", self[evt]);
            });
          });
        }

        if (self.isMobile) {
          setupMobile();
          return;
        }

        var debouncedResize = debounce(onResize, 50);
        self._debouncedChange = debounce(triggerChange, DEBOUNCED_CHANGE_MS);
        if (self.daysContainer && !/iPhone|iPad|iPod/i.test(navigator.userAgent)) bind(self.daysContainer, "mouseover", function (e) {
          if (self.config.mode === "range") onMouseOver(e.target);
        });
        bind(window.document.body, "keydown", onKeyDown);
        if (!self.config.static) bind(self._input, "keydown", onKeyDown);
        if (!self.config.inline && !self.config.static) bind(window, "resize", debouncedResize);
        if (window.ontouchstart !== undefined) bind(window.document, "click", documentClick);else bind(window.document, "mousedown", onClick(documentClick));
        bind(window.document, "focus", documentClick, {
          capture: true
        });

        if (self.config.clickOpens === true) {
          bind(self._input, "focus", self.open);
          bind(self._input, "mousedown", onClick(self.open));
        }

        if (self.daysContainer !== undefined) {
          bind(self.monthNav, "mousedown", onClick(onMonthNavClick));
          bind(self.monthNav, ["keyup", "increment"], onYearInput);
          bind(self.daysContainer, "mousedown", onClick(selectDate));
        }

        if (self.timeContainer !== undefined && self.minuteElement !== undefined && self.hourElement !== undefined) {
          var selText = function selText(e) {
            return e.target.select();
          };

          bind(self.timeContainer, ["increment"], updateTime);
          bind(self.timeContainer, "blur", updateTime, {
            capture: true
          });
          bind(self.timeContainer, "mousedown", onClick(timeIncrement));
          bind([self.hourElement, self.minuteElement], ["focus", "click"], selText);
          if (self.secondElement !== undefined) bind(self.secondElement, "focus", function () {
            return self.secondElement && self.secondElement.select();
          });

          if (self.amPM !== undefined) {
            bind(self.amPM, "mousedown", onClick(function (e) {
              updateTime(e);
              triggerChange();
            }));
          }
        }
      }

      function jumpToDate(jumpDate) {
        var jumpTo = jumpDate !== undefined ? self.parseDate(jumpDate) : self.latestSelectedDateObj || (self.config.minDate && self.config.minDate > self.now ? self.config.minDate : self.config.maxDate && self.config.maxDate < self.now ? self.config.maxDate : self.now);

        try {
          if (jumpTo !== undefined) {
            self.currentYear = jumpTo.getFullYear();
            self.currentMonth = jumpTo.getMonth();
          }
        } catch (e) {
          e.message = "Invalid date supplied: " + jumpTo;
          self.config.errorHandler(e);
        }

        self.redraw();
      }

      function timeIncrement(e) {
        if (~e.target.className.indexOf("arrow")) incrementNumInput(e, e.target.classList.contains("arrowUp") ? 1 : -1);
      }

      function incrementNumInput(e, delta, inputElem) {
        var target = e && e.target;
        var input = inputElem || target && target.parentNode && target.parentNode.firstChild;
        var event = createEvent("increment");
        event.delta = delta;
        input && input.dispatchEvent(event);
      }

      function build() {
        var fragment = window.document.createDocumentFragment();
        self.calendarContainer = createElement("div", "flatpickr-calendar");
        self.calendarContainer.tabIndex = -1;

        if (!self.config.noCalendar) {
          fragment.appendChild(buildMonthNav());
          self.innerContainer = createElement("div", "flatpickr-innerContainer");

          if (self.config.weekNumbers) {
            var _buildWeeks = buildWeeks(),
                weekWrapper = _buildWeeks.weekWrapper,
                weekNumbers = _buildWeeks.weekNumbers;

            self.innerContainer.appendChild(weekWrapper);
            self.weekNumbers = weekNumbers;
            self.weekWrapper = weekWrapper;
          }

          self.rContainer = createElement("div", "flatpickr-rContainer");
          self.rContainer.appendChild(buildWeekdays());

          if (!self.daysContainer) {
            self.daysContainer = createElement("div", "flatpickr-days");
            self.daysContainer.tabIndex = -1;
          }

          buildDays();
          self.rContainer.appendChild(self.daysContainer);
          self.innerContainer.appendChild(self.rContainer);
          fragment.appendChild(self.innerContainer);
        }

        if (self.config.enableTime) {
          fragment.appendChild(buildTime());
        }

        toggleClass(self.calendarContainer, "rangeMode", self.config.mode === "range");
        toggleClass(self.calendarContainer, "animate", self.config.animate === true);
        toggleClass(self.calendarContainer, "multiMonth", self.config.showMonths > 1);
        self.calendarContainer.appendChild(fragment);
        var customAppend = self.config.appendTo !== undefined && self.config.appendTo.nodeType !== undefined;

        if (self.config.inline || self.config.static) {
          self.calendarContainer.classList.add(self.config.inline ? "inline" : "static");

          if (self.config.inline) {
            if (!customAppend && self.element.parentNode) self.element.parentNode.insertBefore(self.calendarContainer, self._input.nextSibling);else if (self.config.appendTo !== undefined) self.config.appendTo.appendChild(self.calendarContainer);
          }

          if (self.config.static) {
            var wrapper = createElement("div", "flatpickr-wrapper");
            if (self.element.parentNode) self.element.parentNode.insertBefore(wrapper, self.element);
            wrapper.appendChild(self.element);
            if (self.altInput) wrapper.appendChild(self.altInput);
            wrapper.appendChild(self.calendarContainer);
          }
        }

        if (!self.config.static && !self.config.inline) (self.config.appendTo !== undefined ? self.config.appendTo : window.document.body).appendChild(self.calendarContainer);
      }

      function createDay(className, date, dayNumber, i) {
        var dateIsEnabled = isEnabled(date, true),
            dayElement = createElement("span", "flatpickr-day " + className, date.getDate().toString());
        dayElement.dateObj = date;
        dayElement.$i = i;
        dayElement.setAttribute("aria-label", self.formatDate(date, self.config.ariaDateFormat));

        if (className.indexOf("hidden") === -1 && compareDates(date, self.now) === 0) {
          self.todayDateElem = dayElement;
          dayElement.classList.add("today");
          dayElement.setAttribute("aria-current", "date");
        }

        if (dateIsEnabled) {
          dayElement.tabIndex = -1;

          if (isDateSelected(date)) {
            dayElement.classList.add("selected");
            self.selectedDateElem = dayElement;

            if (self.config.mode === "range") {
              toggleClass(dayElement, "startRange", self.selectedDates[0] && compareDates(date, self.selectedDates[0], true) === 0);
              toggleClass(dayElement, "endRange", self.selectedDates[1] && compareDates(date, self.selectedDates[1], true) === 0);
              if (className === "nextMonthDay") dayElement.classList.add("inRange");
            }
          }
        } else {
          dayElement.classList.add("disabled");
        }

        if (self.config.mode === "range") {
          if (isDateInRange(date) && !isDateSelected(date)) dayElement.classList.add("inRange");
        }

        if (self.weekNumbers && self.config.showMonths === 1 && className !== "prevMonthDay" && dayNumber % 7 === 1) {
          self.weekNumbers.insertAdjacentHTML("beforeend", "<span class='flatpickr-day'>" + self.config.getWeek(date) + "</span>");
        }

        triggerEvent("onDayCreate", dayElement);
        return dayElement;
      }

      function focusOnDayElem(targetNode) {
        targetNode.focus();
        if (self.config.mode === "range") onMouseOver(targetNode);
      }

      function getFirstAvailableDay(delta) {
        var startMonth = delta > 0 ? 0 : self.config.showMonths - 1;
        var endMonth = delta > 0 ? self.config.showMonths : -1;

        for (var m = startMonth; m != endMonth; m += delta) {
          var month = self.daysContainer.children[m];
          var startIndex = delta > 0 ? 0 : month.children.length - 1;
          var endIndex = delta > 0 ? month.children.length : -1;

          for (var i = startIndex; i != endIndex; i += delta) {
            var c = month.children[i];
            if (c.className.indexOf("hidden") === -1 && isEnabled(c.dateObj)) return c;
          }
        }

        return undefined;
      }

      function getNextAvailableDay(current, delta) {
        var givenMonth = current.className.indexOf("Month") === -1 ? current.dateObj.getMonth() : self.currentMonth;
        var endMonth = delta > 0 ? self.config.showMonths : -1;
        var loopDelta = delta > 0 ? 1 : -1;

        for (var m = givenMonth - self.currentMonth; m != endMonth; m += loopDelta) {
          var month = self.daysContainer.children[m];
          var startIndex = givenMonth - self.currentMonth === m ? current.$i + delta : delta < 0 ? month.children.length - 1 : 0;
          var numMonthDays = month.children.length;

          for (var i = startIndex; i >= 0 && i < numMonthDays && i != (delta > 0 ? numMonthDays : -1); i += loopDelta) {
            var c = month.children[i];
            if (c.className.indexOf("hidden") === -1 && isEnabled(c.dateObj) && Math.abs(current.$i - i) >= Math.abs(delta)) return focusOnDayElem(c);
          }
        }

        self.changeMonth(loopDelta);
        focusOnDay(getFirstAvailableDay(loopDelta), 0);
        return undefined;
      }

      function focusOnDay(current, offset) {
        var dayFocused = isInView(document.activeElement || document.body);
        var startElem = current !== undefined ? current : dayFocused ? document.activeElement : self.selectedDateElem !== undefined && isInView(self.selectedDateElem) ? self.selectedDateElem : self.todayDateElem !== undefined && isInView(self.todayDateElem) ? self.todayDateElem : getFirstAvailableDay(offset > 0 ? 1 : -1);
        if (startElem === undefined) return self._input.focus();
        if (!dayFocused) return focusOnDayElem(startElem);
        getNextAvailableDay(startElem, offset);
      }

      function buildMonthDays(year, month) {
        var firstOfMonth = (new Date(year, month, 1).getDay() - self.l10n.firstDayOfWeek + 7) % 7;
        var prevMonthDays = self.utils.getDaysInMonth((month - 1 + 12) % 12);
        var daysInMonth = self.utils.getDaysInMonth(month),
            days = window.document.createDocumentFragment(),
            isMultiMonth = self.config.showMonths > 1,
            prevMonthDayClass = isMultiMonth ? "prevMonthDay hidden" : "prevMonthDay",
            nextMonthDayClass = isMultiMonth ? "nextMonthDay hidden" : "nextMonthDay";
        var dayNumber = prevMonthDays + 1 - firstOfMonth,
            dayIndex = 0;

        for (; dayNumber <= prevMonthDays; dayNumber++, dayIndex++) {
          days.appendChild(createDay(prevMonthDayClass, new Date(year, month - 1, dayNumber), dayNumber, dayIndex));
        }

        for (dayNumber = 1; dayNumber <= daysInMonth; dayNumber++, dayIndex++) {
          days.appendChild(createDay("", new Date(year, month, dayNumber), dayNumber, dayIndex));
        }

        for (var dayNum = daysInMonth + 1; dayNum <= 42 - firstOfMonth && (self.config.showMonths === 1 || dayIndex % 7 !== 0); dayNum++, dayIndex++) {
          days.appendChild(createDay(nextMonthDayClass, new Date(year, month + 1, dayNum % daysInMonth), dayNum, dayIndex));
        }

        var dayContainer = createElement("div", "dayContainer");
        dayContainer.appendChild(days);
        return dayContainer;
      }

      function buildDays() {
        if (self.daysContainer === undefined) {
          return;
        }

        clearNode(self.daysContainer);
        if (self.weekNumbers) clearNode(self.weekNumbers);
        var frag = document.createDocumentFragment();

        for (var i = 0; i < self.config.showMonths; i++) {
          var d = new Date(self.currentYear, self.currentMonth, 1);
          d.setMonth(self.currentMonth + i);
          frag.appendChild(buildMonthDays(d.getFullYear(), d.getMonth()));
        }

        self.daysContainer.appendChild(frag);
        self.days = self.daysContainer.firstChild;

        if (self.config.mode === "range" && self.selectedDates.length === 1) {
          onMouseOver();
        }
      }

      function buildMonth() {
        var container = createElement("div", "flatpickr-month");
        var monthNavFragment = window.document.createDocumentFragment();
        var monthElement = createElement("span", "cur-month");
        var yearInput = createNumberInput("cur-year", {
          tabindex: "-1"
        });
        var yearElement = yearInput.getElementsByTagName("input")[0];
        yearElement.setAttribute("aria-label", self.l10n.yearAriaLabel);
        if (self.config.minDate) yearElement.setAttribute("data-min", self.config.minDate.getFullYear().toString());

        if (self.config.maxDate) {
          yearElement.setAttribute("data-max", self.config.maxDate.getFullYear().toString());
          yearElement.disabled = !!self.config.minDate && self.config.minDate.getFullYear() === self.config.maxDate.getFullYear();
        }

        var currentMonth = createElement("div", "flatpickr-current-month");
        currentMonth.appendChild(monthElement);
        currentMonth.appendChild(yearInput);
        monthNavFragment.appendChild(currentMonth);
        container.appendChild(monthNavFragment);
        return {
          container: container,
          yearElement: yearElement,
          monthElement: monthElement
        };
      }

      function buildMonths() {
        clearNode(self.monthNav);
        self.monthNav.appendChild(self.prevMonthNav);

        for (var m = self.config.showMonths; m--;) {
          var month = buildMonth();
          self.yearElements.push(month.yearElement);
          self.monthElements.push(month.monthElement);
          self.monthNav.appendChild(month.container);
        }

        self.monthNav.appendChild(self.nextMonthNav);
      }

      function buildMonthNav() {
        self.monthNav = createElement("div", "flatpickr-months");
        self.yearElements = [];
        self.monthElements = [];
        self.prevMonthNav = createElement("span", "flatpickr-prev-month");
        self.prevMonthNav.innerHTML = self.config.prevArrow;
        self.nextMonthNav = createElement("span", "flatpickr-next-month");
        self.nextMonthNav.innerHTML = self.config.nextArrow;
        buildMonths();
        Object.defineProperty(self, "_hidePrevMonthArrow", {
          get: function get() {
            return self.__hidePrevMonthArrow;
          },
          set: function set(bool) {
            if (self.__hidePrevMonthArrow !== bool) {
              toggleClass(self.prevMonthNav, "disabled", bool);
              self.__hidePrevMonthArrow = bool;
            }
          }
        });
        Object.defineProperty(self, "_hideNextMonthArrow", {
          get: function get() {
            return self.__hideNextMonthArrow;
          },
          set: function set(bool) {
            if (self.__hideNextMonthArrow !== bool) {
              toggleClass(self.nextMonthNav, "disabled", bool);
              self.__hideNextMonthArrow = bool;
            }
          }
        });
        self.currentYearElement = self.yearElements[0];
        updateNavigationCurrentMonth();
        return self.monthNav;
      }

      function buildTime() {
        self.calendarContainer.classList.add("hasTime");
        if (self.config.noCalendar) self.calendarContainer.classList.add("noCalendar");
        self.timeContainer = createElement("div", "flatpickr-time");
        self.timeContainer.tabIndex = -1;
        var separator = createElement("span", "flatpickr-time-separator", ":");
        var hourInput = createNumberInput("flatpickr-hour");
        self.hourElement = hourInput.getElementsByTagName("input")[0];
        var minuteInput = createNumberInput("flatpickr-minute");
        self.minuteElement = minuteInput.getElementsByTagName("input")[0];
        self.hourElement.tabIndex = self.minuteElement.tabIndex = -1;
        self.hourElement.value = pad(self.latestSelectedDateObj ? self.latestSelectedDateObj.getHours() : self.config.time_24hr ? self.config.defaultHour : military2ampm(self.config.defaultHour));
        self.minuteElement.value = pad(self.latestSelectedDateObj ? self.latestSelectedDateObj.getMinutes() : self.config.defaultMinute);
        self.hourElement.setAttribute("data-step", self.config.hourIncrement.toString());
        self.minuteElement.setAttribute("data-step", self.config.minuteIncrement.toString());
        self.hourElement.setAttribute("data-min", self.config.time_24hr ? "0" : "1");
        self.hourElement.setAttribute("data-max", self.config.time_24hr ? "23" : "12");
        self.minuteElement.setAttribute("data-min", "0");
        self.minuteElement.setAttribute("data-max", "59");
        self.timeContainer.appendChild(hourInput);
        self.timeContainer.appendChild(separator);
        self.timeContainer.appendChild(minuteInput);
        if (self.config.time_24hr) self.timeContainer.classList.add("time24hr");

        if (self.config.enableSeconds) {
          self.timeContainer.classList.add("hasSeconds");
          var secondInput = createNumberInput("flatpickr-second");
          self.secondElement = secondInput.getElementsByTagName("input")[0];
          self.secondElement.value = pad(self.latestSelectedDateObj ? self.latestSelectedDateObj.getSeconds() : self.config.defaultSeconds);
          self.secondElement.setAttribute("data-step", self.minuteElement.getAttribute("data-step"));
          self.secondElement.setAttribute("data-min", self.minuteElement.getAttribute("data-min"));
          self.secondElement.setAttribute("data-max", self.minuteElement.getAttribute("data-max"));
          self.timeContainer.appendChild(createElement("span", "flatpickr-time-separator", ":"));
          self.timeContainer.appendChild(secondInput);
        }

        if (!self.config.time_24hr) {
          self.amPM = createElement("span", "flatpickr-am-pm", self.l10n.amPM[int((self.latestSelectedDateObj ? self.hourElement.value : self.config.defaultHour) > 11)]);
          self.amPM.title = self.l10n.toggleTitle;
          self.amPM.tabIndex = -1;
          self.timeContainer.appendChild(self.amPM);
        }

        return self.timeContainer;
      }

      function buildWeekdays() {
        if (!self.weekdayContainer) self.weekdayContainer = createElement("div", "flatpickr-weekdays");else clearNode(self.weekdayContainer);

        for (var i = self.config.showMonths; i--;) {
          var container = createElement("div", "flatpickr-weekdaycontainer");
          self.weekdayContainer.appendChild(container);
        }

        updateWeekdays();
        return self.weekdayContainer;
      }

      function updateWeekdays() {
        var firstDayOfWeek = self.l10n.firstDayOfWeek;
        var weekdays = self.l10n.weekdays.shorthand.concat();

        if (firstDayOfWeek > 0 && firstDayOfWeek < weekdays.length) {
          weekdays = weekdays.splice(firstDayOfWeek, weekdays.length).concat(weekdays.splice(0, firstDayOfWeek));
        }

        for (var i = self.config.showMonths; i--;) {
          self.weekdayContainer.children[i].innerHTML = "\n      <span class=flatpickr-weekday>\n        " + weekdays.join("</span><span class=flatpickr-weekday>") + "\n      </span>\n      ";
        }
      }

      function buildWeeks() {
        self.calendarContainer.classList.add("hasWeeks");
        var weekWrapper = createElement("div", "flatpickr-weekwrapper");
        weekWrapper.appendChild(createElement("span", "flatpickr-weekday", self.l10n.weekAbbreviation));
        var weekNumbers = createElement("div", "flatpickr-weeks");
        weekWrapper.appendChild(weekNumbers);
        return {
          weekWrapper: weekWrapper,
          weekNumbers: weekNumbers
        };
      }

      function changeMonth(value, is_offset) {
        if (is_offset === void 0) {
          is_offset = true;
        }

        var delta = is_offset ? value : value - self.currentMonth;
        if (delta < 0 && self._hidePrevMonthArrow === true || delta > 0 && self._hideNextMonthArrow === true) return;
        self.currentMonth += delta;

        if (self.currentMonth < 0 || self.currentMonth > 11) {
          self.currentYear += self.currentMonth > 11 ? 1 : -1;
          self.currentMonth = (self.currentMonth + 12) % 12;
          triggerEvent("onYearChange");
        }

        buildDays();
        triggerEvent("onMonthChange");
        updateNavigationCurrentMonth();
      }

      function clear(triggerChangeEvent) {
        if (triggerChangeEvent === void 0) {
          triggerChangeEvent = true;
        }

        self.input.value = "";
        if (self.altInput !== undefined) self.altInput.value = "";
        if (self.mobileInput !== undefined) self.mobileInput.value = "";
        self.selectedDates = [];
        self.latestSelectedDateObj = undefined;
        self.showTimeInput = false;

        if (self.config.enableTime === true) {
          setDefaultHours();
        }

        self.redraw();
        if (triggerChangeEvent) triggerEvent("onChange");
      }

      function close() {
        self.isOpen = false;

        if (!self.isMobile) {
          self.calendarContainer.classList.remove("open");

          self._input.classList.remove("active");
        }

        triggerEvent("onClose");
      }

      function destroy() {
        if (self.config !== undefined) triggerEvent("onDestroy");

        for (var i = self._handlers.length; i--;) {
          var h = self._handlers[i];
          h.element.removeEventListener(h.event, h.handler, h.options);
        }

        self._handlers = [];

        if (self.mobileInput) {
          if (self.mobileInput.parentNode) self.mobileInput.parentNode.removeChild(self.mobileInput);
          self.mobileInput = undefined;
        } else if (self.calendarContainer && self.calendarContainer.parentNode) {
          if (self.config.static && self.calendarContainer.parentNode) {
            var wrapper = self.calendarContainer.parentNode;
            wrapper.lastChild && wrapper.removeChild(wrapper.lastChild);

            if (wrapper.parentNode) {
              while (wrapper.firstChild) {
                wrapper.parentNode.insertBefore(wrapper.firstChild, wrapper);
              }

              wrapper.parentNode.removeChild(wrapper);
            }
          } else self.calendarContainer.parentNode.removeChild(self.calendarContainer);
        }

        if (self.altInput) {
          self.input.type = "text";
          if (self.altInput.parentNode) self.altInput.parentNode.removeChild(self.altInput);
          delete self.altInput;
        }

        if (self.input) {
          self.input.type = self.input._type;
          self.input.classList.remove("flatpickr-input");
          self.input.removeAttribute("readonly");
          self.input.value = "";
        }

        ["_showTimeInput", "latestSelectedDateObj", "_hideNextMonthArrow", "_hidePrevMonthArrow", "__hideNextMonthArrow", "__hidePrevMonthArrow", "isMobile", "isOpen", "selectedDateElem", "minDateHasTime", "maxDateHasTime", "days", "daysContainer", "_input", "_positionElement", "innerContainer", "rContainer", "monthNav", "todayDateElem", "calendarContainer", "weekdayContainer", "prevMonthNav", "nextMonthNav", "currentMonthElement", "currentYearElement", "navigationCurrentMonth", "selectedDateElem", "config"].forEach(function (k) {
          try {
            delete self[k];
          } catch (_) {}
        });
      }

      function isCalendarElem(elem) {
        if (self.config.appendTo && self.config.appendTo.contains(elem)) return true;
        return self.calendarContainer.contains(elem);
      }

      function documentClick(e) {
        if (self.isOpen && !self.config.inline) {
          var isCalendarElement = isCalendarElem(e.target);
          var isInput = e.target === self.input || e.target === self.altInput || self.element.contains(e.target) || e.path && e.path.indexOf && (~e.path.indexOf(self.input) || ~e.path.indexOf(self.altInput));
          var lostFocus = e.type === "blur" ? isInput && e.relatedTarget && !isCalendarElem(e.relatedTarget) : !isInput && !isCalendarElement;
          var isIgnored = !self.config.ignoredFocusElements.some(function (elem) {
            return elem.contains(e.target);
          });

          if (lostFocus && isIgnored) {
            self.close();

            if (self.config.mode === "range" && self.selectedDates.length === 1) {
              self.clear(false);
              self.redraw();
            }
          }
        }
      }

      function changeYear(newYear) {
        if (!newYear || self.config.minDate && newYear < self.config.minDate.getFullYear() || self.config.maxDate && newYear > self.config.maxDate.getFullYear()) return;
        var newYearNum = newYear,
            isNewYear = self.currentYear !== newYearNum;
        self.currentYear = newYearNum || self.currentYear;

        if (self.config.maxDate && self.currentYear === self.config.maxDate.getFullYear()) {
          self.currentMonth = Math.min(self.config.maxDate.getMonth(), self.currentMonth);
        } else if (self.config.minDate && self.currentYear === self.config.minDate.getFullYear()) {
          self.currentMonth = Math.max(self.config.minDate.getMonth(), self.currentMonth);
        }

        if (isNewYear) {
          self.redraw();
          triggerEvent("onYearChange");
        }
      }

      function isEnabled(date, timeless) {
        if (timeless === void 0) {
          timeless = true;
        }

        var dateToCheck = self.parseDate(date, undefined, timeless);
        if (self.config.minDate && dateToCheck && compareDates(dateToCheck, self.config.minDate, timeless !== undefined ? timeless : !self.minDateHasTime) < 0 || self.config.maxDate && dateToCheck && compareDates(dateToCheck, self.config.maxDate, timeless !== undefined ? timeless : !self.maxDateHasTime) > 0) return false;
        if (self.config.enable.length === 0 && self.config.disable.length === 0) return true;
        if (dateToCheck === undefined) return false;
        var bool = self.config.enable.length > 0,
            array = bool ? self.config.enable : self.config.disable;

        for (var i = 0, d; i < array.length; i++) {
          d = array[i];
          if (typeof d === "function" && d(dateToCheck)) return bool;else if (d instanceof Date && dateToCheck !== undefined && d.getTime() === dateToCheck.getTime()) return bool;else if (typeof d === "string" && dateToCheck !== undefined) {
            var parsed = self.parseDate(d, undefined, true);
            return parsed && parsed.getTime() === dateToCheck.getTime() ? bool : !bool;
          } else if (typeof d === "object" && dateToCheck !== undefined && d.from && d.to && dateToCheck.getTime() >= d.from.getTime() && dateToCheck.getTime() <= d.to.getTime()) return bool;
        }

        return !bool;
      }

      function isInView(elem) {
        if (self.daysContainer !== undefined) return elem.className.indexOf("hidden") === -1 && self.daysContainer.contains(elem);
        return false;
      }

      function onKeyDown(e) {
        var isInput = e.target === self._input;
        var allowInput = self.config.allowInput;
        var allowKeydown = self.isOpen && (!allowInput || !isInput);
        var allowInlineKeydown = self.config.inline && isInput && !allowInput;

        if (e.keyCode === 13 && isInput) {
          if (allowInput) {
            self.setDate(self._input.value, true, e.target === self.altInput ? self.config.altFormat : self.config.dateFormat);
            return e.target.blur();
          } else self.open();
        } else if (isCalendarElem(e.target) || allowKeydown || allowInlineKeydown) {
          var isTimeObj = !!self.timeContainer && self.timeContainer.contains(e.target);

          switch (e.keyCode) {
            case 13:
              if (isTimeObj) updateTime();else selectDate(e);
              break;

            case 27:
              e.preventDefault();
              focusAndClose();
              break;

            case 8:
            case 46:
              if (isInput && !self.config.allowInput) {
                e.preventDefault();
                self.clear();
              }

              break;

            case 37:
            case 39:
              if (!isTimeObj) {
                e.preventDefault();

                if (self.daysContainer !== undefined && (allowInput === false || isInView(document.activeElement))) {
                  var _delta = e.keyCode === 39 ? 1 : -1;

                  if (!e.ctrlKey) focusOnDay(undefined, _delta);else {
                    changeMonth(_delta);
                    focusOnDay(getFirstAvailableDay(1), 0);
                  }
                }
              } else if (self.hourElement) self.hourElement.focus();

              break;

            case 38:
            case 40:
              e.preventDefault();
              var delta = e.keyCode === 40 ? 1 : -1;

              if (self.daysContainer && e.target.$i !== undefined) {
                if (e.ctrlKey) {
                  changeYear(self.currentYear - delta);
                  focusOnDay(getFirstAvailableDay(1), 0);
                } else if (!isTimeObj) focusOnDay(undefined, delta * 7);
              } else if (self.config.enableTime) {
                if (!isTimeObj && self.hourElement) self.hourElement.focus();
                updateTime(e);

                self._debouncedChange();
              }

              break;

            case 9:
              if (!isTimeObj) {
                self.element.focus();
                break;
              }

              var elems = [self.hourElement, self.minuteElement, self.secondElement, self.amPM].filter(function (x) {
                return x;
              });
              var i = elems.indexOf(e.target);

              if (i !== -1) {
                var target = elems[i + (e.shiftKey ? -1 : 1)];

                if (target !== undefined) {
                  e.preventDefault();
                  target.focus();
                } else {
                  self.element.focus();
                }
              }

              break;

            default:
              break;
          }
        }

        if (self.amPM !== undefined && e.target === self.amPM) {
          switch (e.key) {
            case self.l10n.amPM[0].charAt(0):
            case self.l10n.amPM[0].charAt(0).toLowerCase():
              self.amPM.textContent = self.l10n.amPM[0];
              setHoursFromInputs();
              updateValue();
              break;

            case self.l10n.amPM[1].charAt(0):
            case self.l10n.amPM[1].charAt(0).toLowerCase():
              self.amPM.textContent = self.l10n.amPM[1];
              setHoursFromInputs();
              updateValue();
              break;
          }
        }

        triggerEvent("onKeyDown", e);
      }

      function onMouseOver(elem) {
        if (self.selectedDates.length !== 1 || elem && (!elem.classList.contains("flatpickr-day") || elem.classList.contains("disabled"))) return;
        var hoverDate = elem ? elem.dateObj.getTime() : self.days.firstElementChild.dateObj.getTime(),
            initialDate = self.parseDate(self.selectedDates[0], undefined, true).getTime(),
            rangeStartDate = Math.min(hoverDate, self.selectedDates[0].getTime()),
            rangeEndDate = Math.max(hoverDate, self.selectedDates[0].getTime()),
            lastDate = self.daysContainer.lastChild.lastChild.dateObj.getTime();
        var containsDisabled = false;
        var minRange = 0,
            maxRange = 0;

        for (var t = rangeStartDate; t < lastDate; t += duration.DAY) {
          if (!isEnabled(new Date(t), true)) {
            containsDisabled = containsDisabled || t > rangeStartDate && t < rangeEndDate;
            if (t < initialDate && (!minRange || t > minRange)) minRange = t;else if (t > initialDate && (!maxRange || t < maxRange)) maxRange = t;
          }
        }

        for (var m = 0; m < self.config.showMonths; m++) {
          var month = self.daysContainer.children[m];
          var prevMonth = self.daysContainer.children[m - 1];

          var _loop = function _loop(i, l) {
            var dayElem = month.children[i],
                date = dayElem.dateObj;
            var timestamp = date.getTime();
            var outOfRange = minRange > 0 && timestamp < minRange || maxRange > 0 && timestamp > maxRange;

            if (outOfRange) {
              dayElem.classList.add("notAllowed");
              ["inRange", "startRange", "endRange"].forEach(function (c) {
                dayElem.classList.remove(c);
              });
              return "continue";
            } else if (containsDisabled && !outOfRange) return "continue";

            ["startRange", "inRange", "endRange", "notAllowed"].forEach(function (c) {
              dayElem.classList.remove(c);
            });

            if (elem !== undefined) {
              elem.classList.add(hoverDate < self.selectedDates[0].getTime() ? "startRange" : "endRange");

              if (month.contains(elem) || !(m > 0 && prevMonth && prevMonth.lastChild.dateObj.getTime() >= timestamp)) {
                if (initialDate < hoverDate && timestamp === initialDate) dayElem.classList.add("startRange");else if (initialDate > hoverDate && timestamp === initialDate) dayElem.classList.add("endRange");
                if (timestamp >= minRange && (maxRange === 0 || timestamp <= maxRange) && isBetween(timestamp, initialDate, hoverDate)) dayElem.classList.add("inRange");
              }
            }
          };

          for (var i = 0, l = month.children.length; i < l; i++) {
            var _ret = _loop(i, l);

            if (_ret === "continue") continue;
          }
        }
      }

      function onResize() {
        if (self.isOpen && !self.config.static && !self.config.inline) positionCalendar();
      }

      function open(e, positionElement) {
        if (positionElement === void 0) {
          positionElement = self._positionElement;
        }

        if (self.isMobile === true) {
          if (e) {
            e.preventDefault();
            e.target && e.target.blur();
          }

          if (self.mobileInput !== undefined) {
            self.mobileInput.focus();
            self.mobileInput.click();
          }

          triggerEvent("onOpen");
          return;
        }

        if (self._input.disabled || self.config.inline) return;
        var wasOpen = self.isOpen;
        self.isOpen = true;

        if (!wasOpen) {
          self.calendarContainer.classList.add("open");

          self._input.classList.add("active");

          triggerEvent("onOpen");
          positionCalendar(positionElement);
        }

        if (self.config.enableTime === true && self.config.noCalendar === true) {
          if (self.selectedDates.length === 0) {
            self.setDate(self.config.minDate !== undefined ? new Date(self.config.minDate.getTime()) : new Date(), false);
            setDefaultHours();
            updateValue();
          }

          if (self.config.allowInput === false && (e === undefined || !self.timeContainer.contains(e.relatedTarget))) {
            setTimeout(function () {
              return self.hourElement.select();
            }, 50);
          }
        }
      }

      function minMaxDateSetter(type) {
        return function (date) {
          var dateObj = self.config["_" + type + "Date"] = self.parseDate(date, self.config.dateFormat);
          var inverseDateObj = self.config["_" + (type === "min" ? "max" : "min") + "Date"];

          if (dateObj !== undefined) {
            self[type === "min" ? "minDateHasTime" : "maxDateHasTime"] = dateObj.getHours() > 0 || dateObj.getMinutes() > 0 || dateObj.getSeconds() > 0;
          }

          if (self.selectedDates) {
            self.selectedDates = self.selectedDates.filter(function (d) {
              return isEnabled(d);
            });
            if (!self.selectedDates.length && type === "min") setHoursFromDate(dateObj);
            updateValue();
          }

          if (self.daysContainer) {
            redraw();
            if (dateObj !== undefined) self.currentYearElement[type] = dateObj.getFullYear().toString();else self.currentYearElement.removeAttribute(type);
            self.currentYearElement.disabled = !!inverseDateObj && dateObj !== undefined && inverseDateObj.getFullYear() === dateObj.getFullYear();
          }
        };
      }

      function parseConfig() {
        var boolOpts = ["wrap", "weekNumbers", "allowInput", "clickOpens", "time_24hr", "enableTime", "noCalendar", "altInput", "shorthandCurrentMonth", "inline", "static", "enableSeconds", "disableMobile"];
        var userConfig = Object.assign({}, instanceConfig, JSON.parse(JSON.stringify(element.dataset || {})));
        var formats$$1 = {};
        self.config.parseDate = userConfig.parseDate;
        self.config.formatDate = userConfig.formatDate;
        Object.defineProperty(self.config, "enable", {
          get: function get() {
            return self.config._enable;
          },
          set: function set(dates) {
            self.config._enable = parseDateRules(dates);
          }
        });
        Object.defineProperty(self.config, "disable", {
          get: function get() {
            return self.config._disable;
          },
          set: function set(dates) {
            self.config._disable = parseDateRules(dates);
          }
        });
        var timeMode = userConfig.mode === "time";

        if (!userConfig.dateFormat && (userConfig.enableTime || timeMode)) {
          formats$$1.dateFormat = userConfig.noCalendar || timeMode ? "H:i" + (userConfig.enableSeconds ? ":S" : "") : flatpickr.defaultConfig.dateFormat + " H:i" + (userConfig.enableSeconds ? ":S" : "");
        }

        if (userConfig.altInput && (userConfig.enableTime || timeMode) && !userConfig.altFormat) {
          formats$$1.altFormat = userConfig.noCalendar || timeMode ? "h:i" + (userConfig.enableSeconds ? ":S K" : " K") : flatpickr.defaultConfig.altFormat + (" h:i" + (userConfig.enableSeconds ? ":S" : "") + " K");
        }

        Object.defineProperty(self.config, "minDate", {
          get: function get() {
            return self.config._minDate;
          },
          set: minMaxDateSetter("min")
        });
        Object.defineProperty(self.config, "maxDate", {
          get: function get() {
            return self.config._maxDate;
          },
          set: minMaxDateSetter("max")
        });

        var minMaxTimeSetter = function minMaxTimeSetter(type) {
          return function (val) {
            self.config[type === "min" ? "_minTime" : "_maxTime"] = self.parseDate(val, "H:i");
          };
        };

        Object.defineProperty(self.config, "minTime", {
          get: function get() {
            return self.config._minTime;
          },
          set: minMaxTimeSetter("min")
        });
        Object.defineProperty(self.config, "maxTime", {
          get: function get() {
            return self.config._maxTime;
          },
          set: minMaxTimeSetter("max")
        });

        if (userConfig.mode === "time") {
          self.config.noCalendar = true;
          self.config.enableTime = true;
        }

        Object.assign(self.config, formats$$1, userConfig);

        for (var i = 0; i < boolOpts.length; i++) {
          self.config[boolOpts[i]] = self.config[boolOpts[i]] === true || self.config[boolOpts[i]] === "true";
        }

        HOOKS.filter(function (hook) {
          return self.config[hook] !== undefined;
        }).forEach(function (hook) {
          self.config[hook] = arrayify(self.config[hook] || []).map(bindToInstance);
        });
        self.isMobile = !self.config.disableMobile && !self.config.inline && self.config.mode === "single" && !self.config.disable.length && !self.config.enable.length && !self.config.weekNumbers && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

        for (var _i = 0; _i < self.config.plugins.length; _i++) {
          var pluginConf = self.config.plugins[_i](self) || {};

          for (var key in pluginConf) {
            if (HOOKS.indexOf(key) > -1) {
              self.config[key] = arrayify(pluginConf[key]).map(bindToInstance).concat(self.config[key]);
            } else if (typeof userConfig[key] === "undefined") self.config[key] = pluginConf[key];
          }
        }

        triggerEvent("onParseConfig");
      }

      function setupLocale() {
        if (typeof self.config.locale !== "object" && typeof flatpickr.l10ns[self.config.locale] === "undefined") self.config.errorHandler(new Error("flatpickr: invalid locale " + self.config.locale));
        self.l10n = Object.assign({}, flatpickr.l10ns.default, typeof self.config.locale === "object" ? self.config.locale : self.config.locale !== "default" ? flatpickr.l10ns[self.config.locale] : undefined);
        tokenRegex.K = "(" + self.l10n.amPM[0] + "|" + self.l10n.amPM[1] + "|" + self.l10n.amPM[0].toLowerCase() + "|" + self.l10n.amPM[1].toLowerCase() + ")";
        self.formatDate = createDateFormatter(self);
        self.parseDate = createDateParser({
          config: self.config,
          l10n: self.l10n
        });
      }

      function positionCalendar(customPositionElement) {
        if (self.calendarContainer === undefined) return;
        triggerEvent("onPreCalendarPosition");
        var positionElement = customPositionElement || self._positionElement;
        var calendarHeight = Array.prototype.reduce.call(self.calendarContainer.children, function (acc, child) {
          return acc + child.offsetHeight;
        }, 0),
            calendarWidth = self.calendarContainer.offsetWidth,
            configPos = self.config.position.split(" "),
            configPosVertical = configPos[0],
            configPosHorizontal = configPos.length > 1 ? configPos[1] : null,
            inputBounds = positionElement.getBoundingClientRect(),
            distanceFromBottom = window.innerHeight - inputBounds.bottom,
            showOnTop = configPosVertical === "above" || configPosVertical !== "below" && distanceFromBottom < calendarHeight && inputBounds.top > calendarHeight;
        var top = window.pageYOffset + inputBounds.top + (!showOnTop ? positionElement.offsetHeight + 2 : -calendarHeight - 2);
        toggleClass(self.calendarContainer, "arrowTop", !showOnTop);
        toggleClass(self.calendarContainer, "arrowBottom", showOnTop);
        if (self.config.inline) return;
        var left = window.pageXOffset + inputBounds.left - (configPosHorizontal != null && configPosHorizontal === "center" ? (calendarWidth - inputBounds.width) / 2 : 0);
        var right = window.document.body.offsetWidth - inputBounds.right;
        var rightMost = left + calendarWidth > window.document.body.offsetWidth;
        toggleClass(self.calendarContainer, "rightMost", rightMost);
        if (self.config.static) return;
        self.calendarContainer.style.top = top + "px";

        if (!rightMost) {
          self.calendarContainer.style.left = left + "px";
          self.calendarContainer.style.right = "auto";
        } else {
          self.calendarContainer.style.left = "auto";
          self.calendarContainer.style.right = right + "px";
        }
      }

      function redraw() {
        if (self.config.noCalendar || self.isMobile) return;
        updateNavigationCurrentMonth();
        buildDays();
      }

      function focusAndClose() {
        self._input.focus();

        if (window.navigator.userAgent.indexOf("MSIE") !== -1 || navigator.msMaxTouchPoints !== undefined) {
          setTimeout(self.close, 0);
        } else {
          self.close();
        }
      }

      function selectDate(e) {
        e.preventDefault();
        e.stopPropagation();

        var isSelectable = function isSelectable(day) {
          return day.classList && day.classList.contains("flatpickr-day") && !day.classList.contains("disabled") && !day.classList.contains("notAllowed");
        };

        var t = findParent(e.target, isSelectable);
        if (t === undefined) return;
        var target = t;
        var selectedDate = self.latestSelectedDateObj = new Date(target.dateObj.getTime());
        var shouldChangeMonth = (selectedDate.getMonth() < self.currentMonth || selectedDate.getMonth() > self.currentMonth + self.config.showMonths - 1) && self.config.mode !== "range";
        self.selectedDateElem = target;
        if (self.config.mode === "single") self.selectedDates = [selectedDate];else if (self.config.mode === "multiple") {
          var selectedIndex = isDateSelected(selectedDate);
          if (selectedIndex) self.selectedDates.splice(parseInt(selectedIndex), 1);else self.selectedDates.push(selectedDate);
        } else if (self.config.mode === "range") {
          if (self.selectedDates.length === 2) self.clear(false);
          self.selectedDates.push(selectedDate);
          if (compareDates(selectedDate, self.selectedDates[0], true) !== 0) self.selectedDates.sort(function (a, b) {
            return a.getTime() - b.getTime();
          });
        }
        setHoursFromInputs();

        if (shouldChangeMonth) {
          var isNewYear = self.currentYear !== selectedDate.getFullYear();
          self.currentYear = selectedDate.getFullYear();
          self.currentMonth = selectedDate.getMonth();
          if (isNewYear) triggerEvent("onYearChange");
          triggerEvent("onMonthChange");
        }

        updateNavigationCurrentMonth();
        buildDays();
        updateValue();
        if (self.config.enableTime) setTimeout(function () {
          return self.showTimeInput = true;
        }, 50);
        if (!shouldChangeMonth && self.config.mode !== "range" && self.config.showMonths === 1) focusOnDayElem(target);else self.selectedDateElem && self.selectedDateElem.focus();
        if (self.hourElement !== undefined) setTimeout(function () {
          return self.hourElement !== undefined && self.hourElement.select();
        }, 451);

        if (self.config.closeOnSelect) {
          var single = self.config.mode === "single" && !self.config.enableTime;
          var range = self.config.mode === "range" && self.selectedDates.length === 2 && !self.config.enableTime;

          if (single || range) {
            focusAndClose();
          }
        }

        triggerChange();
      }

      var CALLBACKS = {
        locale: [setupLocale, updateWeekdays],
        showMonths: [buildMonths, setCalendarWidth, buildWeekdays]
      };

      function set(option, value) {
        if (option !== null && typeof option === "object") Object.assign(self.config, option);else {
          self.config[option] = value;
          if (CALLBACKS[option] !== undefined) CALLBACKS[option].forEach(function (x) {
            return x();
          });else if (HOOKS.indexOf(option) > -1) self.config[option] = arrayify(value);
        }
        self.redraw();
        jumpToDate();
        updateValue(false);
      }

      function setSelectedDate(inputDate, format) {
        var dates = [];
        if (inputDate instanceof Array) dates = inputDate.map(function (d) {
          return self.parseDate(d, format);
        });else if (inputDate instanceof Date || typeof inputDate === "number") dates = [self.parseDate(inputDate, format)];else if (typeof inputDate === "string") {
          switch (self.config.mode) {
            case "single":
            case "time":
              dates = [self.parseDate(inputDate, format)];
              break;

            case "multiple":
              dates = inputDate.split(self.config.conjunction).map(function (date) {
                return self.parseDate(date, format);
              });
              break;

            case "range":
              dates = inputDate.split(self.l10n.rangeSeparator).map(function (date) {
                return self.parseDate(date, format);
              });
              break;

            default:
              break;
          }
        } else self.config.errorHandler(new Error("Invalid date supplied: " + JSON.stringify(inputDate)));
        self.selectedDates = dates.filter(function (d) {
          return d instanceof Date && isEnabled(d, false);
        });
        if (self.config.mode === "range") self.selectedDates.sort(function (a, b) {
          return a.getTime() - b.getTime();
        });
      }

      function setDate(date, triggerChange, format) {
        if (triggerChange === void 0) {
          triggerChange = false;
        }

        if (format === void 0) {
          format = self.config.dateFormat;
        }

        if (date !== 0 && !date || date instanceof Array && date.length === 0) return self.clear(triggerChange);
        setSelectedDate(date, format);
        self.showTimeInput = self.selectedDates.length > 0;
        self.latestSelectedDateObj = self.selectedDates[0];
        self.redraw();
        jumpToDate();
        setHoursFromDate();
        updateValue(triggerChange);
        if (triggerChange) triggerEvent("onChange");
      }

      function parseDateRules(arr) {
        return arr.slice().map(function (rule) {
          if (typeof rule === "string" || typeof rule === "number" || rule instanceof Date) {
            return self.parseDate(rule, undefined, true);
          } else if (rule && typeof rule === "object" && rule.from && rule.to) return {
            from: self.parseDate(rule.from, undefined),
            to: self.parseDate(rule.to, undefined)
          };

          return rule;
        }).filter(function (x) {
          return x;
        });
      }

      function setupDates() {
        self.selectedDates = [];
        self.now = self.parseDate(self.config.now) || new Date();
        var preloadedDate = self.config.defaultDate || ((self.input.nodeName === "INPUT" || self.input.nodeName === "TEXTAREA") && self.input.placeholder && self.input.value === self.input.placeholder ? null : self.input.value);
        if (preloadedDate) setSelectedDate(preloadedDate, self.config.dateFormat);
        var initialDate = self.selectedDates.length > 0 ? self.selectedDates[0] : self.config.minDate && self.config.minDate.getTime() > self.now.getTime() ? self.config.minDate : self.config.maxDate && self.config.maxDate.getTime() < self.now.getTime() ? self.config.maxDate : self.now;
        self.currentYear = initialDate.getFullYear();
        self.currentMonth = initialDate.getMonth();
        if (self.selectedDates.length > 0) self.latestSelectedDateObj = self.selectedDates[0];
        if (self.config.minTime !== undefined) self.config.minTime = self.parseDate(self.config.minTime, "H:i");
        if (self.config.maxTime !== undefined) self.config.maxTime = self.parseDate(self.config.maxTime, "H:i");
        self.minDateHasTime = !!self.config.minDate && (self.config.minDate.getHours() > 0 || self.config.minDate.getMinutes() > 0 || self.config.minDate.getSeconds() > 0);
        self.maxDateHasTime = !!self.config.maxDate && (self.config.maxDate.getHours() > 0 || self.config.maxDate.getMinutes() > 0 || self.config.maxDate.getSeconds() > 0);
        Object.defineProperty(self, "showTimeInput", {
          get: function get() {
            return self._showTimeInput;
          },
          set: function set(bool) {
            self._showTimeInput = bool;
            if (self.calendarContainer) toggleClass(self.calendarContainer, "showTimeInput", bool);
            self.isOpen && positionCalendar();
          }
        });
      }

      function setupInputs() {
        self.input = self.config.wrap ? element.querySelector("[data-input]") : element;

        if (!self.input) {
          self.config.errorHandler(new Error("Invalid input element specified"));
          return;
        }

        self.input._type = self.input.type;
        self.input.type = "text";
        self.input.classList.add("flatpickr-input");
        self._input = self.input;

        if (self.config.altInput) {
          self.altInput = createElement(self.input.nodeName, self.input.className + " " + self.config.altInputClass);
          self._input = self.altInput;
          self.altInput.placeholder = self.input.placeholder;
          self.altInput.disabled = self.input.disabled;
          self.altInput.required = self.input.required;
          self.altInput.tabIndex = self.input.tabIndex;
          self.altInput.type = "text";
          self.input.setAttribute("type", "hidden");
          if (!self.config.static && self.input.parentNode) self.input.parentNode.insertBefore(self.altInput, self.input.nextSibling);
        }

        if (!self.config.allowInput) self._input.setAttribute("readonly", "readonly");
        self._positionElement = self.config.positionElement || self._input;
      }

      function setupMobile() {
        var inputType = self.config.enableTime ? self.config.noCalendar ? "time" : "datetime-local" : "date";
        self.mobileInput = createElement("input", self.input.className + " flatpickr-mobile");
        self.mobileInput.step = self.input.getAttribute("step") || "any";
        self.mobileInput.tabIndex = 1;
        self.mobileInput.type = inputType;
        self.mobileInput.disabled = self.input.disabled;
        self.mobileInput.required = self.input.required;
        self.mobileInput.placeholder = self.input.placeholder;
        self.mobileFormatStr = inputType === "datetime-local" ? "Y-m-d\\TH:i:S" : inputType === "date" ? "Y-m-d" : "H:i:S";

        if (self.selectedDates.length > 0) {
          self.mobileInput.defaultValue = self.mobileInput.value = self.formatDate(self.selectedDates[0], self.mobileFormatStr);
        }

        if (self.config.minDate) self.mobileInput.min = self.formatDate(self.config.minDate, "Y-m-d");
        if (self.config.maxDate) self.mobileInput.max = self.formatDate(self.config.maxDate, "Y-m-d");
        self.input.type = "hidden";
        if (self.altInput !== undefined) self.altInput.type = "hidden";

        try {
          if (self.input.parentNode) self.input.parentNode.insertBefore(self.mobileInput, self.input.nextSibling);
        } catch (_a) {}

        bind(self.mobileInput, "change", function (e) {
          self.setDate(e.target.value, false, self.mobileFormatStr);
          triggerEvent("onChange");
          triggerEvent("onClose");
        });
      }

      function toggle(e) {
        if (self.isOpen === true) return self.close();
        self.open(e);
      }

      function triggerEvent(event, data) {
        if (self.config === undefined) return;
        var hooks = self.config[event];

        if (hooks !== undefined && hooks.length > 0) {
          for (var i = 0; hooks[i] && i < hooks.length; i++) {
            hooks[i](self.selectedDates, self.input.value, self, data);
          }
        }

        if (event === "onChange") {
          self.input.dispatchEvent(createEvent("change"));
          self.input.dispatchEvent(createEvent("input"));
        }
      }

      function createEvent(name) {
        var e = document.createEvent("Event");
        e.initEvent(name, true, true);
        return e;
      }

      function isDateSelected(date) {
        for (var i = 0; i < self.selectedDates.length; i++) {
          if (compareDates(self.selectedDates[i], date) === 0) return "" + i;
        }

        return false;
      }

      function isDateInRange(date) {
        if (self.config.mode !== "range" || self.selectedDates.length < 2) return false;
        return compareDates(date, self.selectedDates[0]) >= 0 && compareDates(date, self.selectedDates[1]) <= 0;
      }

      function updateNavigationCurrentMonth() {
        if (self.config.noCalendar || self.isMobile || !self.monthNav) return;
        self.yearElements.forEach(function (yearElement, i) {
          var d = new Date(self.currentYear, self.currentMonth, 1);
          d.setMonth(self.currentMonth + i);
          self.monthElements[i].textContent = monthToStr(d.getMonth(), self.config.shorthandCurrentMonth, self.l10n) + " ";
          yearElement.value = d.getFullYear().toString();
        });
        self._hidePrevMonthArrow = self.config.minDate !== undefined && (self.currentYear === self.config.minDate.getFullYear() ? self.currentMonth <= self.config.minDate.getMonth() : self.currentYear < self.config.minDate.getFullYear());
        self._hideNextMonthArrow = self.config.maxDate !== undefined && (self.currentYear === self.config.maxDate.getFullYear() ? self.currentMonth + 1 > self.config.maxDate.getMonth() : self.currentYear > self.config.maxDate.getFullYear());
      }

      function getDateStr(format) {
        return self.selectedDates.map(function (dObj) {
          return self.formatDate(dObj, format);
        }).filter(function (d, i, arr) {
          return self.config.mode !== "range" || self.config.enableTime || arr.indexOf(d) === i;
        }).join(self.config.mode !== "range" ? self.config.conjunction : self.l10n.rangeSeparator);
      }

      function updateValue(triggerChange) {
        if (triggerChange === void 0) {
          triggerChange = true;
        }

        if (self.selectedDates.length === 0) return self.clear(triggerChange);

        if (self.mobileInput !== undefined && self.mobileFormatStr) {
          self.mobileInput.value = self.latestSelectedDateObj !== undefined ? self.formatDate(self.latestSelectedDateObj, self.mobileFormatStr) : "";
        }

        self.input.value = getDateStr(self.config.dateFormat);

        if (self.altInput !== undefined) {
          self.altInput.value = getDateStr(self.config.altFormat);
        }

        if (triggerChange !== false) triggerEvent("onValueUpdate");
      }

      function onMonthNavClick(e) {
        e.preventDefault();
        var isPrevMonth = self.prevMonthNav.contains(e.target);
        var isNextMonth = self.nextMonthNav.contains(e.target);

        if (isPrevMonth || isNextMonth) {
          changeMonth(isPrevMonth ? -1 : 1);
        } else if (self.yearElements.indexOf(e.target) >= 0) {
          e.target.select();
        } else if (e.target.classList.contains("arrowUp")) {
          self.changeYear(self.currentYear + 1);
        } else if (e.target.classList.contains("arrowDown")) {
          self.changeYear(self.currentYear - 1);
        }
      }

      function timeWrapper(e) {
        e.preventDefault();
        var isKeyDown = e.type === "keydown",
            input = e.target;

        if (self.amPM !== undefined && e.target === self.amPM) {
          self.amPM.textContent = self.l10n.amPM[int(self.amPM.textContent === self.l10n.amPM[0])];
        }

        var min = parseFloat(input.getAttribute("data-min")),
            max = parseFloat(input.getAttribute("data-max")),
            step = parseFloat(input.getAttribute("data-step")),
            curValue = parseInt(input.value, 10),
            delta = e.delta || (isKeyDown ? e.which === 38 ? 1 : -1 : 0);
        var newValue = curValue + step * delta;

        if (typeof input.value !== "undefined" && input.value.length === 2) {
          var isHourElem = input === self.hourElement,
              isMinuteElem = input === self.minuteElement;

          if (newValue < min) {
            newValue = max + newValue + int(!isHourElem) + (int(isHourElem) && int(!self.amPM));
            if (isMinuteElem) incrementNumInput(undefined, -1, self.hourElement);
          } else if (newValue > max) {
            newValue = input === self.hourElement ? newValue - max - int(!self.amPM) : min;
            if (isMinuteElem) incrementNumInput(undefined, 1, self.hourElement);
          }

          if (self.amPM && isHourElem && (step === 1 ? newValue + curValue === 23 : Math.abs(newValue - curValue) > step)) {
            self.amPM.textContent = self.l10n.amPM[int(self.amPM.textContent === self.l10n.amPM[0])];
          }

          input.value = pad(newValue);
        }
      }

      init();
      return self;
    }

    function _flatpickr(nodeList, config) {
      var nodes = Array.prototype.slice.call(nodeList);
      var instances = [];

      for (var i = 0; i < nodes.length; i++) {
        var node = nodes[i];

        try {
          if (node.getAttribute("data-fp-omit") !== null) continue;

          if (node._flatpickr !== undefined) {
            node._flatpickr.destroy();

            node._flatpickr = undefined;
          }

          node._flatpickr = FlatpickrInstance(node, config || {});
          instances.push(node._flatpickr);
        } catch (e) {
          console.error(e);
        }
      }

      return instances.length === 1 ? instances[0] : instances;
    }

    if (typeof HTMLElement !== "undefined") {
      HTMLCollection.prototype.flatpickr = NodeList.prototype.flatpickr = function (config) {
        return _flatpickr(this, config);
      };

      HTMLElement.prototype.flatpickr = function (config) {
        return _flatpickr([this], config);
      };
    }

    var flatpickr = function flatpickr(selector, config) {
      if (selector instanceof NodeList) return _flatpickr(selector, config);else if (typeof selector === "string") return _flatpickr(window.document.querySelectorAll(selector), config);
      return _flatpickr([selector], config);
    };

    flatpickr.defaultConfig = defaults;
    flatpickr.l10ns = {
      en: Object.assign({}, english),
      default: Object.assign({}, english)
    };

    flatpickr.localize = function (l10n) {
      flatpickr.l10ns.default = Object.assign({}, flatpickr.l10ns.default, l10n);
    };

    flatpickr.setDefaults = function (config) {
      flatpickr.defaultConfig = Object.assign({}, flatpickr.defaultConfig, config);
    };

    flatpickr.parseDate = createDateParser({});
    flatpickr.formatDate = createDateFormatter({});
    flatpickr.compareDates = compareDates;

    if (typeof jQuery !== "undefined") {
      jQuery.fn.flatpickr = function (config) {
        return _flatpickr(this, config);
      };
    }

    Date.prototype.fp_incr = function (days) {
      return new Date(this.getFullYear(), this.getMonth(), this.getDate() + (typeof days === "string" ? parseInt(days, 10) : days));
    };

    if (typeof window !== "undefined") {
      window.flatpickr = flatpickr;
    }

    return flatpickr;

})));


/***/ }),

/***/ "./node_modules/flatpickr/dist/plugins/confirmDate/confirmDate.css":
/*!*************************************************************************!*\
  !*** ./node_modules/flatpickr/dist/plugins/confirmDate/confirmDate.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/flatpickr/dist/plugins/confirmDate/confirmDate.js":
/*!************************************************************************!*\
  !*** ./node_modules/flatpickr/dist/plugins/confirmDate/confirmDate.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* flatpickr v4.5.2, @license MIT */
(function (global, factory) {
     true ? module.exports = factory() :
    undefined;
}(this, (function () { 'use strict';

    var defaultConfig = {
      confirmIcon: "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='17' height='17' viewBox='0 0 17 17'> <g> </g> <path d='M15.418 1.774l-8.833 13.485-4.918-4.386 0.666-0.746 4.051 3.614 8.198-12.515 0.836 0.548z' fill='#000000' /> </svg>",
      confirmText: "OK ",
      showAlways: false,
      theme: "light"
    };

    function confirmDatePlugin(pluginConfig) {
      var config = Object.assign({}, defaultConfig, pluginConfig);
      var confirmContainer;
      return function (fp) {
        if (fp.config.noCalendar || fp.isMobile) return {};
        return Object.assign({
          onKeyDown: function onKeyDown(_, __, ___, e) {
            if (fp.config.enableTime && e.key === "Tab" && e.target === fp.amPM) {
              e.preventDefault();
              confirmContainer.focus();
            } else if (e.key === "Enter" && e.target === confirmContainer) fp.close();
          },
          onReady: function onReady() {
            confirmContainer = fp._createElement("div", "flatpickr-confirm " + (config.showAlways ? "visible" : "") + " " + config.theme + "Theme", config.confirmText);
            confirmContainer.tabIndex = -1;
            confirmContainer.innerHTML += config.confirmIcon;
            confirmContainer.addEventListener("click", fp.close);
            fp.calendarContainer.appendChild(confirmContainer);
          }
        }, !config.showAlways ? {
          onChange: function onChange(_, dateStr) {
            var showCondition = fp.config.enableTime || fp.config.mode === "multiple";
            if (dateStr && !fp.config.inline && showCondition) return confirmContainer.classList.add("visible");
            confirmContainer.classList.remove("visible");
          }
        } : {});
      };
    }

    return confirmDatePlugin;

})));


/***/ }),

/***/ "./node_modules/iterators-polyfill/polyfill.min.js":
/*!*********************************************************!*\
  !*** ./node_modules/iterators-polyfill/polyfill.min.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {!function(){"use strict";function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function r(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var u=void 0;try{u=self}catch(t){try{u=global}catch(t){u=window}}var c=function(){function e(o,r){t(this,e),this.cursor=0,this.collection=o,this.kind=r}return e.prototype.next=function(){this.done=this.cursor===this.collection.length;var t={done:this.done,value:this.done?void 0:"value"===this.kind||"key"===this.kind?this.collection[this.cursor]:[this.cursor,this.collection[this.cursor]]};return this.cursor++,t},e}(),a=function(t){function n(r,i){e(this,n);var s=o(this,t.call(this,r,i));return s}return r(n,t),n.prototype.toString=function(){return"[object String Iterator]"},n}(c),p=function(t){function e(o,r){n(this,e);var s=i(this,t.call(this,o,r));return s}return s(e,t),e.prototype.toString=function(){return"[object Array Iterator]"},e}(c);if("function"!=typeof Array.prototype[Symbol.iterator]){var y="values"in Array.prototype,f="entries"in Array.prototype,l="keys"in Array.prototype;y||(Array.prototype.values=function(){return new p(this,"value")}),f||(Array.prototype.entries=function(){return new p(this,"key+value")}),l||(Array.prototype.keys=function(){return new p(this,"key")}),Array.prototype[Symbol.iterator]=Array.prototype.values}if("function"!=typeof String.prototype[Symbol.iterator]&&(String.prototype[Symbol.iterator]=function(){return new a(this,"value")}),"function"!=typeof NodeList.prototype[Symbol.iterator]){var h="values"in NodeList.prototype,b="entries"in NodeList.prototype,w="keys"in NodeList.prototype;h||(NodeList.prototype.values=function(){return new p(this,"value")}),b||(NodeList.prototype.entries=function(){return new p(this,"key+value")}),w||(NodeList.prototype.keys=function(){return new p(this,"key")}),NodeList.prototype[Symbol.iterator]=Array.prototype.values}}();

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/lodash.unescape/index.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash.unescape/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/** Used to match HTML entities and HTML characters. */
var reEscapedHtml = /&(?:amp|lt|gt|quot|#39|#96);/g,
    reHasEscapedHtml = RegExp(reEscapedHtml.source);

/** Used to map HTML entities to characters. */
var htmlUnescapes = {
  '&amp;': '&',
  '&lt;': '<',
  '&gt;': '>',
  '&quot;': '"',
  '&#39;': "'",
  '&#96;': '`'
};

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/**
 * The base implementation of `_.propertyOf` without support for deep paths.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Function} Returns the new accessor function.
 */
function basePropertyOf(object) {
  return function(key) {
    return object == null ? undefined : object[key];
  };
}

/**
 * Used by `_.unescape` to convert HTML entities to characters.
 *
 * @private
 * @param {string} chr The matched character to unescape.
 * @returns {string} Returns the unescaped character.
 */
var unescapeHtmlChar = basePropertyOf(htmlUnescapes);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Built-in value references. */
var Symbol = root.Symbol;

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

/**
 * The inverse of `_.escape`; this method converts the HTML entities
 * `&amp;`, `&lt;`, `&gt;`, `&quot;`, `&#39;`, and `&#96;` in `string` to
 * their corresponding characters.
 *
 * **Note:** No other HTML entities are unescaped. To unescape additional
 * HTML entities use a third-party library like [_he_](https://mths.be/he).
 *
 * @static
 * @memberOf _
 * @since 0.6.0
 * @category String
 * @param {string} [string=''] The string to unescape.
 * @returns {string} Returns the unescaped string.
 * @example
 *
 * _.unescape('fred, barney, &amp; pebbles');
 * // => 'fred, barney, & pebbles'
 */
function unescape(string) {
  string = toString(string);
  return (string && reHasEscapedHtml.test(string))
    ? string.replace(reEscapedHtml, unescapeHtmlChar)
    : string;
}

module.exports = unescape;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./node_modules/whatwg-fetch/fetch.js":
/*!********************************************!*\
  !*** ./node_modules/whatwg-fetch/fetch.js ***!
  \********************************************/
/*! exports provided: Headers, Request, Response, DOMException, fetch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Headers", function() { return Headers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Request", function() { return Request; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Response", function() { return Response; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOMException", function() { return DOMException; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetch", function() { return fetch; });
var support = {
  searchParams: 'URLSearchParams' in self,
  iterable: 'Symbol' in self && 'iterator' in Symbol,
  blob:
    'FileReader' in self &&
    'Blob' in self &&
    (function() {
      try {
        new Blob()
        return true
      } catch (e) {
        return false
      }
    })(),
  formData: 'FormData' in self,
  arrayBuffer: 'ArrayBuffer' in self
}

function isDataView(obj) {
  return obj && DataView.prototype.isPrototypeOf(obj)
}

if (support.arrayBuffer) {
  var viewClasses = [
    '[object Int8Array]',
    '[object Uint8Array]',
    '[object Uint8ClampedArray]',
    '[object Int16Array]',
    '[object Uint16Array]',
    '[object Int32Array]',
    '[object Uint32Array]',
    '[object Float32Array]',
    '[object Float64Array]'
  ]

  var isArrayBufferView =
    ArrayBuffer.isView ||
    function(obj) {
      return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1
    }
}

function normalizeName(name) {
  if (typeof name !== 'string') {
    name = String(name)
  }
  if (/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(name)) {
    throw new TypeError('Invalid character in header field name')
  }
  return name.toLowerCase()
}

function normalizeValue(value) {
  if (typeof value !== 'string') {
    value = String(value)
  }
  return value
}

// Build a destructive iterator for the value list
function iteratorFor(items) {
  var iterator = {
    next: function() {
      var value = items.shift()
      return {done: value === undefined, value: value}
    }
  }

  if (support.iterable) {
    iterator[Symbol.iterator] = function() {
      return iterator
    }
  }

  return iterator
}

function Headers(headers) {
  this.map = {}

  if (headers instanceof Headers) {
    headers.forEach(function(value, name) {
      this.append(name, value)
    }, this)
  } else if (Array.isArray(headers)) {
    headers.forEach(function(header) {
      this.append(header[0], header[1])
    }, this)
  } else if (headers) {
    Object.getOwnPropertyNames(headers).forEach(function(name) {
      this.append(name, headers[name])
    }, this)
  }
}

Headers.prototype.append = function(name, value) {
  name = normalizeName(name)
  value = normalizeValue(value)
  var oldValue = this.map[name]
  this.map[name] = oldValue ? oldValue + ', ' + value : value
}

Headers.prototype['delete'] = function(name) {
  delete this.map[normalizeName(name)]
}

Headers.prototype.get = function(name) {
  name = normalizeName(name)
  return this.has(name) ? this.map[name] : null
}

Headers.prototype.has = function(name) {
  return this.map.hasOwnProperty(normalizeName(name))
}

Headers.prototype.set = function(name, value) {
  this.map[normalizeName(name)] = normalizeValue(value)
}

Headers.prototype.forEach = function(callback, thisArg) {
  for (var name in this.map) {
    if (this.map.hasOwnProperty(name)) {
      callback.call(thisArg, this.map[name], name, this)
    }
  }
}

Headers.prototype.keys = function() {
  var items = []
  this.forEach(function(value, name) {
    items.push(name)
  })
  return iteratorFor(items)
}

Headers.prototype.values = function() {
  var items = []
  this.forEach(function(value) {
    items.push(value)
  })
  return iteratorFor(items)
}

Headers.prototype.entries = function() {
  var items = []
  this.forEach(function(value, name) {
    items.push([name, value])
  })
  return iteratorFor(items)
}

if (support.iterable) {
  Headers.prototype[Symbol.iterator] = Headers.prototype.entries
}

function consumed(body) {
  if (body.bodyUsed) {
    return Promise.reject(new TypeError('Already read'))
  }
  body.bodyUsed = true
}

function fileReaderReady(reader) {
  return new Promise(function(resolve, reject) {
    reader.onload = function() {
      resolve(reader.result)
    }
    reader.onerror = function() {
      reject(reader.error)
    }
  })
}

function readBlobAsArrayBuffer(blob) {
  var reader = new FileReader()
  var promise = fileReaderReady(reader)
  reader.readAsArrayBuffer(blob)
  return promise
}

function readBlobAsText(blob) {
  var reader = new FileReader()
  var promise = fileReaderReady(reader)
  reader.readAsText(blob)
  return promise
}

function readArrayBufferAsText(buf) {
  var view = new Uint8Array(buf)
  var chars = new Array(view.length)

  for (var i = 0; i < view.length; i++) {
    chars[i] = String.fromCharCode(view[i])
  }
  return chars.join('')
}

function bufferClone(buf) {
  if (buf.slice) {
    return buf.slice(0)
  } else {
    var view = new Uint8Array(buf.byteLength)
    view.set(new Uint8Array(buf))
    return view.buffer
  }
}

function Body() {
  this.bodyUsed = false

  this._initBody = function(body) {
    this._bodyInit = body
    if (!body) {
      this._bodyText = ''
    } else if (typeof body === 'string') {
      this._bodyText = body
    } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
      this._bodyBlob = body
    } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
      this._bodyFormData = body
    } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
      this._bodyText = body.toString()
    } else if (support.arrayBuffer && support.blob && isDataView(body)) {
      this._bodyArrayBuffer = bufferClone(body.buffer)
      // IE 10-11 can't handle a DataView body.
      this._bodyInit = new Blob([this._bodyArrayBuffer])
    } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
      this._bodyArrayBuffer = bufferClone(body)
    } else {
      this._bodyText = body = Object.prototype.toString.call(body)
    }

    if (!this.headers.get('content-type')) {
      if (typeof body === 'string') {
        this.headers.set('content-type', 'text/plain;charset=UTF-8')
      } else if (this._bodyBlob && this._bodyBlob.type) {
        this.headers.set('content-type', this._bodyBlob.type)
      } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
        this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8')
      }
    }
  }

  if (support.blob) {
    this.blob = function() {
      var rejected = consumed(this)
      if (rejected) {
        return rejected
      }

      if (this._bodyBlob) {
        return Promise.resolve(this._bodyBlob)
      } else if (this._bodyArrayBuffer) {
        return Promise.resolve(new Blob([this._bodyArrayBuffer]))
      } else if (this._bodyFormData) {
        throw new Error('could not read FormData body as blob')
      } else {
        return Promise.resolve(new Blob([this._bodyText]))
      }
    }

    this.arrayBuffer = function() {
      if (this._bodyArrayBuffer) {
        return consumed(this) || Promise.resolve(this._bodyArrayBuffer)
      } else {
        return this.blob().then(readBlobAsArrayBuffer)
      }
    }
  }

  this.text = function() {
    var rejected = consumed(this)
    if (rejected) {
      return rejected
    }

    if (this._bodyBlob) {
      return readBlobAsText(this._bodyBlob)
    } else if (this._bodyArrayBuffer) {
      return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer))
    } else if (this._bodyFormData) {
      throw new Error('could not read FormData body as text')
    } else {
      return Promise.resolve(this._bodyText)
    }
  }

  if (support.formData) {
    this.formData = function() {
      return this.text().then(decode)
    }
  }

  this.json = function() {
    return this.text().then(JSON.parse)
  }

  return this
}

// HTTP methods whose capitalization should be normalized
var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT']

function normalizeMethod(method) {
  var upcased = method.toUpperCase()
  return methods.indexOf(upcased) > -1 ? upcased : method
}

function Request(input, options) {
  options = options || {}
  var body = options.body

  if (input instanceof Request) {
    if (input.bodyUsed) {
      throw new TypeError('Already read')
    }
    this.url = input.url
    this.credentials = input.credentials
    if (!options.headers) {
      this.headers = new Headers(input.headers)
    }
    this.method = input.method
    this.mode = input.mode
    this.signal = input.signal
    if (!body && input._bodyInit != null) {
      body = input._bodyInit
      input.bodyUsed = true
    }
  } else {
    this.url = String(input)
  }

  this.credentials = options.credentials || this.credentials || 'same-origin'
  if (options.headers || !this.headers) {
    this.headers = new Headers(options.headers)
  }
  this.method = normalizeMethod(options.method || this.method || 'GET')
  this.mode = options.mode || this.mode || null
  this.signal = options.signal || this.signal
  this.referrer = null

  if ((this.method === 'GET' || this.method === 'HEAD') && body) {
    throw new TypeError('Body not allowed for GET or HEAD requests')
  }
  this._initBody(body)
}

Request.prototype.clone = function() {
  return new Request(this, {body: this._bodyInit})
}

function decode(body) {
  var form = new FormData()
  body
    .trim()
    .split('&')
    .forEach(function(bytes) {
      if (bytes) {
        var split = bytes.split('=')
        var name = split.shift().replace(/\+/g, ' ')
        var value = split.join('=').replace(/\+/g, ' ')
        form.append(decodeURIComponent(name), decodeURIComponent(value))
      }
    })
  return form
}

function parseHeaders(rawHeaders) {
  var headers = new Headers()
  // Replace instances of \r\n and \n followed by at least one space or horizontal tab with a space
  // https://tools.ietf.org/html/rfc7230#section-3.2
  var preProcessedHeaders = rawHeaders.replace(/\r?\n[\t ]+/g, ' ')
  preProcessedHeaders.split(/\r?\n/).forEach(function(line) {
    var parts = line.split(':')
    var key = parts.shift().trim()
    if (key) {
      var value = parts.join(':').trim()
      headers.append(key, value)
    }
  })
  return headers
}

Body.call(Request.prototype)

function Response(bodyInit, options) {
  if (!options) {
    options = {}
  }

  this.type = 'default'
  this.status = options.status === undefined ? 200 : options.status
  this.ok = this.status >= 200 && this.status < 300
  this.statusText = 'statusText' in options ? options.statusText : 'OK'
  this.headers = new Headers(options.headers)
  this.url = options.url || ''
  this._initBody(bodyInit)
}

Body.call(Response.prototype)

Response.prototype.clone = function() {
  return new Response(this._bodyInit, {
    status: this.status,
    statusText: this.statusText,
    headers: new Headers(this.headers),
    url: this.url
  })
}

Response.error = function() {
  var response = new Response(null, {status: 0, statusText: ''})
  response.type = 'error'
  return response
}

var redirectStatuses = [301, 302, 303, 307, 308]

Response.redirect = function(url, status) {
  if (redirectStatuses.indexOf(status) === -1) {
    throw new RangeError('Invalid status code')
  }

  return new Response(null, {status: status, headers: {location: url}})
}

var DOMException = self.DOMException
try {
  new DOMException()
} catch (err) {
  DOMException = function(message, name) {
    this.message = message
    this.name = name
    var error = Error(message)
    this.stack = error.stack
  }
  DOMException.prototype = Object.create(Error.prototype)
  DOMException.prototype.constructor = DOMException
}

function fetch(input, init) {
  return new Promise(function(resolve, reject) {
    var request = new Request(input, init)

    if (request.signal && request.signal.aborted) {
      return reject(new DOMException('Aborted', 'AbortError'))
    }

    var xhr = new XMLHttpRequest()

    function abortXhr() {
      xhr.abort()
    }

    xhr.onload = function() {
      var options = {
        status: xhr.status,
        statusText: xhr.statusText,
        headers: parseHeaders(xhr.getAllResponseHeaders() || '')
      }
      options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL')
      var body = 'response' in xhr ? xhr.response : xhr.responseText
      resolve(new Response(body, options))
    }

    xhr.onerror = function() {
      reject(new TypeError('Network request failed'))
    }

    xhr.ontimeout = function() {
      reject(new TypeError('Network request failed'))
    }

    xhr.onabort = function() {
      reject(new DOMException('Aborted', 'AbortError'))
    }

    xhr.open(request.method, request.url, true)

    if (request.credentials === 'include') {
      xhr.withCredentials = true
    } else if (request.credentials === 'omit') {
      xhr.withCredentials = false
    }

    if ('responseType' in xhr && support.blob) {
      xhr.responseType = 'blob'
    }

    request.headers.forEach(function(value, name) {
      xhr.setRequestHeader(name, value)
    })

    if (request.signal) {
      request.signal.addEventListener('abort', abortXhr)

      xhr.onreadystatechange = function() {
        // DONE (success or failure)
        if (xhr.readyState === 4) {
          request.signal.removeEventListener('abort', abortXhr)
        }
      }
    }

    xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit)
  })
}

fetch.polyfill = true

if (!self.fetch) {
  self.fetch = fetch
  self.Headers = Headers
  self.Request = Request
  self.Response = Response
}


/***/ }),

/***/ "./source/js/classes/AjaxUploadField.js":
/*!**********************************************!*\
  !*** ./source/js/classes/AjaxUploadField.js ***!
  \**********************************************/
/*! exports provided: AjaxUploadField */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AjaxUploadField", function() { return AjaxUploadField; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var lodash_unescape__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash.unescape */ "./node_modules/lodash.unescape/index.js");
/* harmony import */ var lodash_unescape__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash_unescape__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Field */ "./source/js/classes/Field.js");
/* harmony import */ var _FlexFields__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./FlexFields */ "./source/js/classes/FlexFields.js");









var AjaxUploadField =
/*#__PURE__*/
function (_Field) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(AjaxUploadField, _Field);

  function AjaxUploadField(el) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, AjaxUploadField);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(AjaxUploadField).call(this, el));
    var template = el.querySelector('.flex-template'); // Remove template from DOM (to avoid submitting invalid data with form)

    template.parentNode.removeChild(template); // Make some adjustments to template

    template.removeAttribute('hidden');
    template.classList.remove('flex-template');
    _this._config = JSON.parse(lodash_unescape__WEBPACK_IMPORTED_MODULE_6___default()(el.getAttribute('data-config')));
    _this._template = template.cloneNode(true);

    if (_this.isAdvancedUpload) {
      // Disable field if the max upload count has already been met.
      if (_this.count >= _this.maxUploads) {
        _this.disable();
      } // Setup file handler for input field


      _this.input.addEventListener('change', _this.fileSelectHandler.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this)))); // Setup drag and drop events


      ['drag', 'dragstart', 'dragend', 'dragover', 'dragenter', 'dragleave', 'drop'].forEach(function (event) {
        return _this.dropZone.addEventListener(event, function (e) {
          e.stopPropagation();
          e.preventDefault();
        });
      });
      ['dragover', 'dragenter'].forEach(function (event) {
        return _this.dropZone.addEventListener(event, function () {
          _this.dropZone.classList.add('--is-active');
        });
      });
      ['dragleave', 'dragend', 'drop'].forEach(function (event) {
        return _this.dropZone.addEventListener(event, function () {
          _this.dropZone.classList.remove('--is-active');
        });
      });

      _this.dropZone.addEventListener('drop', _this.fileSelectHandler.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this)))); // Add class to trigger display of advanced features


      _this.el.classList.add('--has-advanced-upload');
    } // Setup click handlers for any pre-existing images in gallery


    _this.items.forEach(function (el) {
      el.addEventListener('click', _this.onClickRemoveHandler.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this))));
    });

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(AjaxUploadField, [{
    key: "add",
    value: function add(json, file) {
      var template = this.template;
      var span = template.querySelector('span');
      var id = json.id;

      if (this.fileTypeMatches(file, 'image')) {
        var img = document.createElement('img');
        var src = json.source_url;

        if (json.media_details.sizes[this.imageSize]) {
          src = json.media_details.sizes[this.imageSize].source_url;
        }

        img.setAttribute('src', src);
        span.appendChild(img);
      } else {
        span.textContent = file.name;
        template.classList.add('--document');
      }

      template.querySelector('input').value = id;
      this.gallery.appendChild(template);
      template.addEventListener('click', this.onClickRemoveHandler.bind(this));
      this.dispatch('add', {
        target: template
      });
    }
  }, {
    key: "disable",
    value: function disable() {
      if (!this.isDisabled) {
        this.input.setAttribute('disabled', 'disabled');
        this.dropZone.classList.add('--is-disabled');
      }
    }
  }, {
    key: "enable",
    value: function enable() {
      if (this.isDisabled) {
        this.input.removeAttribute('disabled');
        this.dropZone.classList.remove('--is-disabled');
      }
    }
  }, {
    key: "fileExtensionMatches",
    value: function fileExtensionMatches(file, ext) {
      return this.getFileExtension(file) === ext.toLowerCase();
    }
  }, {
    key: "fileSelectHandler",
    value: function fileSelectHandler(e) {
      var _this2 = this;

      this.dropZone.classList.add('--is-uploading');
      var files = Array.from(e.target.files || e.dataTransfer.files);
      var totalFileCount = files.length + this.count;

      if (totalFileCount <= this.maxUploads) {
        files.forEach(function (file) {
          var reader = new FileReader();

          if (_this2.fileTypeMatches(file, 'image')) {
            reader.onload = function (e) {
              reader.readAsDataURL(file);
            };
          }

          if (_this2.fileTypeMatches(file, 'text')) {
            reader.onload = function (e) {
              reader.readAsText(file);
            };
          }

          var xhr = new XMLHttpRequest();

          if (xhr.upload) {
            xhr.open('POST', _FlexFields__WEBPACK_IMPORTED_MODULE_8__["flexFields"].restUrl + 'wp/v2/media', true);
            xhr.responseType = 'json';

            xhr.onload = function (e) {
              if (xhr.status >= 200 && xhr.status < 400) {
                _this2.dropZone.classList.remove('--is-uploading');

                _this2.dropZone.classList.add('--is-success');

                setTimeout(function () {
                  _this2.dropZone.classList.remove('--is-success');
                }, 2000);

                _this2.add(xhr.response, file); // Disable field if the max upload count has already been met.


                if (_this2.count >= _this2.maxUploads) {
                  _this2.disable();
                }
              } else {
                _this2.dropZone.classList.remove('--is-uploading');

                _this2.dropZone.classList.add('--is-error');

                setTimeout(function () {
                  _this2.dropZone.classList.remove('--is-error');
                }, 2000);
              }
            };

            xhr.onerror = function (e) {
              _this2.dropZone.classList.remove('--is-uploading');

              _this2.dropZone.classList.add('--is-error');

              setTimeout(function () {
                _this2.dropZone.classList.remove('--is-error');
              }, 2000);
            };

            xhr.setRequestHeader('X-WP-Nonce', _FlexFields__WEBPACK_IMPORTED_MODULE_8__["flexFields"].restNonce);
            xhr.setRequestHeader('Content-Disposition', 'attachment; filename="' + file.name + '"');
            xhr.send(file);
          }
        });
      } else {
        this.dropZone.classList.remove('--is-uploading');
        this.dropZone.classList.add('--is-max-upload');
        this.dropZone.classList.add('--is-error');
        setTimeout(function () {
          _this2.dropZone.classList.remove('--is-max-upload');

          _this2.dropZone.classList.remove('--is-error');
        }, 3000);
      }
    }
  }, {
    key: "fileTypeMatches",
    value: function fileTypeMatches(file, type) {
      return file.type.indexOf(type) === 0;
    }
  }, {
    key: "fileMimeTypeMatches",
    value: function fileMimeTypeMatches(file, mimetype) {
      return file.type === mimetype;
    }
  }, {
    key: "getFileExtension",
    value: function getFileExtension(file) {
      return file.name.split('.').pop().toLowerCase();
    }
  }, {
    key: "onClickRemoveHandler",
    value: function onClickRemoveHandler(e) {
      e.preventDefault();
      var target = e.currentTarget;
      this.dispatch('remove', {
        id: target.querySelector('input').value,
        target: target
      });
      target.parentNode.removeChild(target); // Enable field if the max upload count has already been met.

      if (this.count < this.maxUploads) {
        this.enable();
      }
    }
  }, {
    key: "count",
    get: function get() {
      return this.gallery.querySelectorAll('a').length;
    }
  }, {
    key: "dropZone",
    get: function get() {
      return this.el.querySelector('.flex-field-ajax-upload__drop-zone');
    }
  }, {
    key: "gallery",
    get: function get() {
      return this.el.querySelector('.flex-field-ajax-upload__gallery');
    }
  }, {
    key: "imageSize",
    get: function get() {
      return this._config.imageSize;
    }
  }, {
    key: "input",
    get: function get() {
      return this.el.querySelector('input[type="file"]');
    }
  }, {
    key: "isAdvancedUpload",
    get: function get() {
      var el = this.el;
      return ('draggable' in el || 'ondragstart' in el && 'ondrop' in el) && 'FormData' in window && 'FileReader' in window;
    }
  }, {
    key: "isDisabled",
    get: function get() {
      return this.input.hasAttribute('disabled');
    }
  }, {
    key: "items",
    get: function get() {
      return Array.from(this.gallery.children);
    }
  }, {
    key: "maxUploads",
    get: function get() {
      return parseInt(this._config.maxUploads || 1, 10);
    }
  }, {
    key: "template",
    get: function get() {
      return this._template.cloneNode(true);
    }
  }]);

  return AjaxUploadField;
}(_Field__WEBPACK_IMPORTED_MODULE_7__["Field"]);
_FlexFields__WEBPACK_IMPORTED_MODULE_8__["flexFields"].addFieldClass(AjaxUploadField);

/***/ }),

/***/ "./source/js/classes/ChoicesField.js":
/*!*******************************************!*\
  !*** ./source/js/classes/ChoicesField.js ***!
  \*******************************************/
/*! exports provided: ChoicesField */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChoicesField", function() { return ChoicesField; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var choices_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! choices.js */ "./node_modules/choices.js/public/assets/scripts/choices.min.js");
/* harmony import */ var choices_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(choices_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var lodash_unescape__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash.unescape */ "./node_modules/lodash.unescape/index.js");
/* harmony import */ var lodash_unescape__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash_unescape__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Field */ "./source/js/classes/Field.js");
/* harmony import */ var _FlexFields__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./FlexFields */ "./source/js/classes/FlexFields.js");










var ChoicesField =
/*#__PURE__*/
function (_Field) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(ChoicesField, _Field);

  function ChoicesField(el) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, ChoicesField);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(ChoicesField).call(this, el));

    _this.select.addEventListener('click', function (e) {
      return e.stopPropagation();
    });

    _this.select.addEventListener('change', _this.onChange.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this))));

    _this._choices = new choices_js__WEBPACK_IMPORTED_MODULE_6___default.a(_this.select, _this.config);
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(ChoicesField, [{
    key: "onChange",
    value: function onChange(e) {
      this.dispatch('change', {
        target: e.target
      });
    }
  }, {
    key: "choices",
    get: function get() {
      return this._choices;
    }
  }, {
    key: "config",
    get: function get() {
      var select = this.el.querySelector('[data-choices]');
      return JSON.parse(lodash_unescape__WEBPACK_IMPORTED_MODULE_7___default()(select.getAttribute('data-choices')));
    }
  }, {
    key: "select",
    get: function get() {
      return this.el.querySelector('[data-choices]');
    }
  }, {
    key: "value",
    get: function get() {
      return this.choices.getValue();
    }
  }]);

  return ChoicesField;
}(_Field__WEBPACK_IMPORTED_MODULE_8__["Field"]);
_FlexFields__WEBPACK_IMPORTED_MODULE_9__["flexFields"].addFieldClass(ChoicesField);

/***/ }),

/***/ "./source/js/classes/Field.js":
/*!************************************!*\
  !*** ./source/js/classes/Field.js ***!
  \************************************/
/*! exports provided: Field */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Field", function() { return Field; });
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/@babel/runtime/helpers/objectSpread.js");
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);



var Field =
/*#__PURE__*/
function () {
  function Field(el) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Field);

    this.listeners = {}; // Make field instance accessible from element

    el.flexField = this; // Make element accessible from field instance

    this.el = el; // Set field name

    this._name = el.getAttribute('data-name'); // Set field type (defaults to input, subclasses should override)

    this._type = el.getAttribute('data-type'); // Set default value (subclasses should override)

    this._value = '';
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Field, [{
    key: "addEventListener",
    value: function addEventListener(type, callback) {
      var listener = {
        type: type,
        callback: callback
      };

      if (this.listeners[type]) {
        this.listeners[type].push(listener);
      } else {
        this.listeners[type] = [listener];
      }

      return listener;
    }
  }, {
    key: "removeEventListener",
    value: function removeEventListener(listener) {
      var listeners = this.listeners[listener.type];

      if (listeners) {
        var index = listeners.indexOf(listener);

        if (index > -1) {
          this.listeners[listener.type] = listeners.splice(index, 1);
        }
      }
    }
  }, {
    key: "dispatch",
    value: function dispatch(type) {
      var _this = this;

      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      if (this.listeners[type]) {
        this.listeners[type].forEach(function (listener) {
          listener.callback.apply(_this, [_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, data, {
            type: type
          })]);
        });
      }
    }
  }, {
    key: "show",
    value: function show() {
      this.el.removeAttribute('hidden');
    }
  }, {
    key: "hide",
    value: function hide() {
      this.el.setAttribute('hidden', 'hidden');
    }
  }, {
    key: "type",
    get: function get() {
      return this._type;
    }
  }, {
    key: "name",
    get: function get() {
      return this._name;
    }
  }, {
    key: "value",
    get: function get() {
      return this._value;
    },
    set: function set(value) {
      this._value = value;
    }
  }]);

  return Field;
}();

/***/ }),

/***/ "./source/js/classes/FlatpickrField.js":
/*!*********************************************!*\
  !*** ./source/js/classes/FlatpickrField.js ***!
  \*********************************************/
/*! exports provided: FlatpickrField */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlatpickrField", function() { return FlatpickrField; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flatpickr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flatpickr */ "./node_modules/flatpickr/dist/flatpickr.js");
/* harmony import */ var flatpickr__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flatpickr__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var flatpickr_dist_plugins_confirmDate_confirmDate__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! flatpickr/dist/plugins/confirmDate/confirmDate */ "./node_modules/flatpickr/dist/plugins/confirmDate/confirmDate.js");
/* harmony import */ var flatpickr_dist_plugins_confirmDate_confirmDate__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(flatpickr_dist_plugins_confirmDate_confirmDate__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var lodash_unescape__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash.unescape */ "./node_modules/lodash.unescape/index.js");
/* harmony import */ var lodash_unescape__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash_unescape__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Field */ "./source/js/classes/Field.js");
/* harmony import */ var _FlexFields__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./FlexFields */ "./source/js/classes/FlexFields.js");










var FlatpickrField =
/*#__PURE__*/
function (_Field) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(FlatpickrField, _Field);

  function FlatpickrField(el) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, FlatpickrField);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(FlatpickrField).call(this, el));
    _this._flatpickr = flatpickr__WEBPACK_IMPORTED_MODULE_5___default()(_this.input, _this.config);
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(FlatpickrField, [{
    key: "clearButton",
    get: function get() {
      return this.el.querySelector('.flatpickr-reset');
    }
  }, {
    key: "config",
    get: function get() {
      var _this2 = this;

      var config = JSON.parse(lodash_unescape__WEBPACK_IMPORTED_MODULE_7___default()(this.input.getAttribute('data-flatpickr')));

      config.onReady = function (dateObj, dateStr, instance) {
        _this2.clearButton.addEventListener('click', function (e) {
          e.preventDefault();
          instance.clear();
          instance.close();
        });
      };

      config.plugins = [new flatpickr_dist_plugins_confirmDate_confirmDate__WEBPACK_IMPORTED_MODULE_6___default.a({})];
      return config;
    }
  }, {
    key: "flatpickr",
    get: function get() {
      return this._flatpickr;
    }
  }, {
    key: "input",
    get: function get() {
      return this.el.querySelector('[data-flatpickr]');
    }
  }]);

  return FlatpickrField;
}(_Field__WEBPACK_IMPORTED_MODULE_8__["Field"]);
_FlexFields__WEBPACK_IMPORTED_MODULE_9__["flexFields"].addFieldClass(FlatpickrField);

/***/ }),

/***/ "./source/js/classes/FlexFields.js":
/*!*****************************************!*\
  !*** ./source/js/classes/FlexFields.js ***!
  \*****************************************/
/*! exports provided: flexFields */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flexFields", function() { return flexFields; });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/@babel/runtime/helpers/objectSpread.js");
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);





var FlexFields =
/*#__PURE__*/
function () {
  function FlexFields() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, FlexFields);

    this.classes = {};
    this.listeners = {};
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(FlexFields, [{
    key: "addEventListener",
    value: function addEventListener(type, callback) {
      var listener = {
        type: type,
        callback: callback
      };

      if (this.listeners[type]) {
        this.listeners[type].push(listener);
      } else {
        this.listeners[type] = [listener];
      }

      return listener;
    }
  }, {
    key: "removeEventListener",
    value: function removeEventListener(listener) {
      var listeners = this.listeners[listener.type];

      if (listeners) {
        var index = listeners.indexOf(listener);

        if (index > -1) {
          this.listeners[listener.type] = listeners.splice(index, 1);
        }
      }
    }
  }, {
    key: "dispatch",
    value: function dispatch(type) {
      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var scope = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

      if (this.listeners[type]) {
        this.listeners[type].forEach(function (listener) {
          listener.callback.apply(scope, [_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({}, data, {
            type: type
          })]);
        });
      }
    }
  }, {
    key: "addFieldClass",
    value: function addFieldClass(classFunction) {
      this.classes[classFunction.name] = classFunction;
    }
  }, {
    key: "getFieldClass",
    value: function getFieldClass(className) {
      return this.classes[className];
    }
  }, {
    key: "hasFieldClass",
    value: function hasFieldClass(className) {
      return typeof this.classes[className] !== 'undefined';
    }
  }]);

  return FlexFields;
}();

var flexFields = new FlexFields();

if (window.flexFields) {
  var _arr = Object.entries(window.flexFields);

  for (var _i = 0; _i < _arr.length; _i++) {
    var _arr$_i = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_arr[_i], 2),
        key = _arr$_i[0],
        value = _arr$_i[1];

    if (!flexFields.hasOwnProperty(key)) {
      flexFields[key] = value;
    }
  }
}

window.flexFields = flexFields;


/***/ }),

/***/ "./source/js/classes/MediaUploadField.js":
/*!***********************************************!*\
  !*** ./source/js/classes/MediaUploadField.js ***!
  \***********************************************/
/*! exports provided: MediaUploadField */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaUploadField", function() { return MediaUploadField; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Field */ "./source/js/classes/Field.js");
/* harmony import */ var _FlexFields__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./FlexFields */ "./source/js/classes/FlexFields.js");







var MediaUploadField =
/*#__PURE__*/
function (_Field) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(MediaUploadField, _Field);

  function MediaUploadField(el) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, MediaUploadField);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(MediaUploadField).call(this, el)); // Setup our custom media upload modal

    _this.frame = wp.media({
      title: 'Set Featured Image',
      button: {
        text: 'Select'
      },
      multiple: false
    });

    _this.frame.on('select', function () {
      // Get media attachment details from the frame state
      var attachment = _this.frame.state().get('selection').first().toJSON(); // Set field value


      _this.value = attachment.id || ''; // Set image source

      _this.setImageSource((attachment.sizes.thumbnail ? attachment.sizes.thumbnail.url : attachment.url) || '');
    }); // Add click handler for the "Add Image" button.


    _this.addButton.addEventListener('click', function (e) {
      e.preventDefault();

      _this.frame.open();
    }); // Add click handler for the "Remove Image" button.


    _this.removeButton.addEventListener('click', function (e) {
      e.preventDefault();
      _this.value = '';
    }); // Toggle display of Add/Remove buttons


    _this.toggleAddButton();

    _this.toggleRemoveButton();

    _this.toggleGallery();

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(MediaUploadField, [{
    key: "toggleAddButton",
    value: function toggleAddButton() {
      this.addButton.hidden = Boolean(this.input.value);
    }
  }, {
    key: "toggleRemoveButton",
    value: function toggleRemoveButton() {
      this.removeButton.hidden = Boolean(!this.input.value);
    }
  }, {
    key: "toggleGallery",
    value: function toggleGallery() {
      this.gallery.hidden = Boolean(!this.input.value);
    }
  }, {
    key: "setImageSource",
    value: function setImageSource(src) {
      this.image.setAttribute('src', src);
    }
  }, {
    key: "gallery",
    get: function get() {
      return this.el.querySelector('.flex-field-gallery');
    }
  }, {
    key: "image",
    get: function get() {
      return this.el.querySelector('img');
    }
  }, {
    key: "input",
    get: function get() {
      return this.el.querySelector('input[type="hidden"]');
    }
  }, {
    key: "addButton",
    get: function get() {
      return this.el.querySelector('[data-action="add"]');
    }
  }, {
    key: "removeButton",
    get: function get() {
      return this.el.querySelector('[data-action="remove"]');
    }
  }, {
    key: "value",
    get: function get() {
      return this.input.value;
    },
    set: function set(value) {
      if (!value) {
        this.setImageSource('');
      }

      this.input.value = value;
      this.toggleAddButton();
      this.toggleRemoveButton();
      this.toggleGallery();
    }
  }]);

  return MediaUploadField;
}(_Field__WEBPACK_IMPORTED_MODULE_5__["Field"]);
_FlexFields__WEBPACK_IMPORTED_MODULE_6__["flexFields"].addFieldClass(MediaUploadField);

/***/ }),

/***/ "./source/js/classes/RepeatingField.js":
/*!*********************************************!*\
  !*** ./source/js/classes/RepeatingField.js ***!
  \*********************************************/
/*! exports provided: RepeatingField */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RepeatingField", function() { return RepeatingField; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Field */ "./source/js/classes/Field.js");
/* harmony import */ var _FlexFields__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./FlexFields */ "./source/js/classes/FlexFields.js");








var RepeatingField =
/*#__PURE__*/
function (_Field) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(RepeatingField, _Field);

  function RepeatingField(el) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, RepeatingField);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(RepeatingField).call(this, el));
    _this._name = _this._name.replace('[x]', '');
    var addButton = el.querySelector('[data-action="add"][data-action-type="repeating"]');
    var deleteButtons = el.querySelectorAll('[data-action="delete"][data-action-type="repeating"]');
    var templateWrapper = el.querySelector('.flex-field-template'); // Remove template wrapper and contents from DOM (don't want to submit with form)

    templateWrapper.parentNode.removeChild(templateWrapper); // Set index

    _this._index = _this.count; // Set field type

    _this._type = 'repeating'; // Set template to be used for child fields

    _this._template = templateWrapper.firstElementChild.cloneNode(true); // Setup click handler for add button

    addButton.addEventListener('click', _this.onClickAddButton.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this)))); // Setup click handler for delete buttons

    Array.from(deleteButtons).forEach(function (deleteButton) {
      deleteButton.addEventListener('click', _this.onClickDeleteButton.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this))));
    });
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(RepeatingField, [{
    key: "onClickAddButton",
    value: function onClickAddButton() {
      var _this2 = this;

      var target = this.template; // Setup click handler for delete button

      target.lastElementChild.addEventListener('click', this.onClickDeleteButton.bind(this)); // Replace field names as needed

      Array.from(target.querySelectorAll("[name*=\"".concat(this.name, "[x]\"]"))).forEach(function (el) {
        var name = el.getAttribute('name');
        el.setAttribute('name', name.replace("".concat(_this2.name, "[x]"), "".concat(_this2.name, "[").concat(_this2._index, "]")));
      }); // Append new element to DOM

      this.container.appendChild(target); // Dispatch our custom addChild event

      this.dispatch('addChild', {
        target: target
      }); // Globally dispatch

      _FlexFields__WEBPACK_IMPORTED_MODULE_7__["flexFields"].dispatch('addChild', {
        target: target
      }, this);
      this._index++;
    }
  }, {
    key: "onClickDeleteButton",
    value: function onClickDeleteButton(e) {
      this.container.removeChild(e.target.parentNode);
    }
  }, {
    key: "children",
    get: function get() {
      return Array.from(this.container.children);
    }
  }, {
    key: "container",
    get: function get() {
      return this.el.querySelector('.flex-field-collection');
    }
  }, {
    key: "count",
    get: function get() {
      return this.children.length;
    }
  }, {
    key: "template",
    get: function get() {
      return this._template.cloneNode(true);
    }
  }]);

  return RepeatingField;
}(_Field__WEBPACK_IMPORTED_MODULE_6__["Field"]);
_FlexFields__WEBPACK_IMPORTED_MODULE_7__["flexFields"].addFieldClass(RepeatingField);

/***/ }),

/***/ "./source/js/classes/RepeatingTextField.js":
/*!*************************************************!*\
  !*** ./source/js/classes/RepeatingTextField.js ***!
  \*************************************************/
/*! exports provided: RepeatingTextField */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RepeatingTextField", function() { return RepeatingTextField; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Field */ "./source/js/classes/Field.js");
/* harmony import */ var _FlexFields__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./FlexFields */ "./source/js/classes/FlexFields.js");








var RepeatingTextField =
/*#__PURE__*/
function (_Field) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(RepeatingTextField, _Field);

  function RepeatingTextField(el) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, RepeatingTextField);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(RepeatingTextField).call(this, el)); // Setup template

    _this._template = _this.container.lastElementChild.cloneNode(true);

    var addButton = _this.el.querySelector('[data-action="add"]');

    var deleteButtons = _this.el.querySelectorAll('[data-action="delete"]');

    _this.el.setAttribute('data-flex-initialized', ''); // Add click handler for add button


    addButton.addEventListener('click', _this.onClickAddButton.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this))));
    Array.from(deleteButtons).forEach(function (el) {
      return el.addEventListener('click', _this.onClickDeleteButton.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this))));
    });
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(RepeatingTextField, [{
    key: "onClickAddButton",
    value: function onClickAddButton() {
      var target = this.template;
      var deleteButton = target.querySelector('button'); // Add handler for delete button

      deleteButton.addEventListener('click', this.onClickDeleteButton.bind(this));
      this.container.appendChild(target);
      this.dispatch('addChild', {
        target: target
      });
    }
  }, {
    key: "onClickDeleteButton",
    value: function onClickDeleteButton(e) {
      this.container.removeChild(e.target.parentNode);
    }
  }, {
    key: "container",
    get: function get() {
      return this.el.querySelector('.flex-field-collection');
    }
  }, {
    key: "template",
    get: function get() {
      return this._template.cloneNode(true);
    }
  }]);

  return RepeatingTextField;
}(_Field__WEBPACK_IMPORTED_MODULE_6__["Field"]);
_FlexFields__WEBPACK_IMPORTED_MODULE_7__["flexFields"].addFieldClass(RepeatingTextField);

/***/ }),

/***/ "./source/js/classes/TinyMceField.js":
/*!*******************************************!*\
  !*** ./source/js/classes/TinyMceField.js ***!
  \*******************************************/
/*! exports provided: TinyMceField */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TinyMceField", function() { return TinyMceField; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var lodash_unescape__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash.unescape */ "./node_modules/lodash.unescape/index.js");
/* harmony import */ var lodash_unescape__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash_unescape__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Field */ "./source/js/classes/Field.js");
/* harmony import */ var _FlexFields__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./FlexFields */ "./source/js/classes/FlexFields.js");









var TinyMceField =
/*#__PURE__*/
function (_Field) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(TinyMceField, _Field);

  function TinyMceField(el) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, TinyMceField);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(TinyMceField).call(this, el));
    window.addEventListener('load', _this.setup.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this))));
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(TinyMceField, [{
    key: "setup",
    value: function setup() {
      wp.editor.initialize(this.textarea.id, this.config);
      this._editor = window.tinymce.get(this.name);
    }
  }, {
    key: "appendContent",
    value: function appendContent(content) {
      this.setContent(this.content + content);
    }
  }, {
    key: "setContent",
    value: function setContent(content) {
      this._editor.setContent(content);
    }
  }, {
    key: "focus",
    value: function focus() {
      this.editor.focus();
      this.editor.selection.select(this.editor.getBody(), true);
      this.editor.selection.collapse(false);
    }
  }, {
    key: "config",
    get: function get() {
      return JSON.parse(lodash_unescape__WEBPACK_IMPORTED_MODULE_6___default()(this.textarea.getAttribute('data-config')));
    }
  }, {
    key: "content",
    get: function get() {
      return this._editor.getContent();
    }
  }, {
    key: "editor",
    get: function get() {
      return this._editor;
    }
  }, {
    key: "textarea",
    get: function get() {
      return this.el.querySelector('textarea');
    }
  }]);

  return TinyMceField;
}(_Field__WEBPACK_IMPORTED_MODULE_7__["Field"]);
_FlexFields__WEBPACK_IMPORTED_MODULE_8__["flexFields"].addFieldClass(TinyMceField);

/***/ }),

/***/ "./source/js/fields/ajax-upload.js":
/*!*****************************************!*\
  !*** ./source/js/fields/ajax-upload.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _classes_AjaxUploadField__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../classes/AjaxUploadField */ "./source/js/classes/AjaxUploadField.js");

Array.from(document.querySelectorAll('.flex-field-ajax-upload')).map(function (el) {
  return new _classes_AjaxUploadField__WEBPACK_IMPORTED_MODULE_0__["AjaxUploadField"](el);
});

/***/ }),

/***/ "./source/js/fields/choices.js":
/*!*************************************!*\
  !*** ./source/js/fields/choices.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _classes_ChoicesField__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../classes/ChoicesField */ "./source/js/classes/ChoicesField.js");

Array.from(document.querySelectorAll('.flex-field-autocomplete, .flex-field-choices, .flex-field-choices-input')).map(function (el) {
  return new _classes_ChoicesField__WEBPACK_IMPORTED_MODULE_0__["ChoicesField"](el);
});

/***/ }),

/***/ "./source/js/fields/flatpickr.js":
/*!***************************************!*\
  !*** ./source/js/fields/flatpickr.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _classes_FlatpickrField__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../classes/FlatpickrField */ "./source/js/classes/FlatpickrField.js");

Array.from(document.querySelectorAll('.flex-field-flatpickr')).map(function (el) {
  return new _classes_FlatpickrField__WEBPACK_IMPORTED_MODULE_0__["FlatpickrField"](el);
});

/***/ }),

/***/ "./source/js/fields/media-upload.js":
/*!******************************************!*\
  !*** ./source/js/fields/media-upload.js ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _classes_MediaUploadField__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../classes/MediaUploadField */ "./source/js/classes/MediaUploadField.js");

Array.from(document.querySelectorAll('.flex-field-media-upload')).map(function (el) {
  return new _classes_MediaUploadField__WEBPACK_IMPORTED_MODULE_0__["MediaUploadField"](el);
});

/***/ }),

/***/ "./source/js/fields/repeating-text.js":
/*!********************************************!*\
  !*** ./source/js/fields/repeating-text.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _classes_RepeatingTextField__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../classes/RepeatingTextField */ "./source/js/classes/RepeatingTextField.js");
/* harmony import */ var _classes_FlexFields__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../classes/FlexFields */ "./source/js/classes/FlexFields.js");


Array.from(document.querySelectorAll('.flex-field-repeating-text')).map(function (el) {
  return new _classes_RepeatingTextField__WEBPACK_IMPORTED_MODULE_0__["RepeatingTextField"](el);
}); // Ensure field works in repeating field.

_classes_FlexFields__WEBPACK_IMPORTED_MODULE_1__["flexFields"].addEventListener('addChild', function () {
  if ('repeating' === this.type) {
    Array.from(this.el.querySelectorAll('.flex-field-repeating-text:not([data-flex-initialized])')).map(function (el) {
      new _classes_RepeatingTextField__WEBPACK_IMPORTED_MODULE_0__["RepeatingTextField"](el);
    });
  }
});

/***/ }),

/***/ "./source/js/fields/repeating.js":
/*!***************************************!*\
  !*** ./source/js/fields/repeating.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _classes_RepeatingField__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../classes/RepeatingField */ "./source/js/classes/RepeatingField.js");

Array.from(document.querySelectorAll('.flex-field-repeating')).map(function (el) {
  return new _classes_RepeatingField__WEBPACK_IMPORTED_MODULE_0__["RepeatingField"](el);
});

/***/ }),

/***/ "./source/js/fields/tiny-mce.js":
/*!**************************************!*\
  !*** ./source/js/fields/tiny-mce.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _classes_TinyMceField__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../classes/TinyMceField */ "./source/js/classes/TinyMceField.js");
/* harmony import */ var _classes_FlexFields__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../classes/FlexFields */ "./source/js/classes/FlexFields.js");


Array.from(document.querySelectorAll('.flex-field-tinymce')).map(function (el) {
  return new _classes_TinyMceField__WEBPACK_IMPORTED_MODULE_0__["TinyMceField"](el);
}); // Ensure TinyMCE field works when in a repeating field.

_classes_FlexFields__WEBPACK_IMPORTED_MODULE_1__["flexFields"].addEventListener('addChild', function () {
  var _this = this;

  if ('repeating' === this.type) {
    Array.from(this.el.querySelectorAll('.flex-field-tinymce')).map(function (el) {
      var textarea = el.querySelector('textarea');
      textarea.setAttribute('id', textarea.getAttribute('id').replace('x', _this._index));
      var tinyMce = new _classes_TinyMceField__WEBPACK_IMPORTED_MODULE_0__["TinyMceField"](el);
      tinyMce.setup();
    });
  }
});

/***/ }),

/***/ "./source/js/flex-fields.js":
/*!**********************************!*\
  !*** ./source/js/flex-fields.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var es6_promise_auto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! es6-promise/auto */ "./node_modules/es6-promise/auto.js");
/* harmony import */ var es6_promise_auto__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(es6_promise_auto__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var es6_symbol_implement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! es6-symbol/implement */ "./node_modules/es6-symbol/implement.js");
/* harmony import */ var es6_symbol_implement__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(es6_symbol_implement__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var iterators_polyfill__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! iterators-polyfill */ "./node_modules/iterators-polyfill/polyfill.min.js");
/* harmony import */ var iterators_polyfill__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(iterators_polyfill__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var whatwg_fetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! whatwg-fetch */ "./node_modules/whatwg-fetch/fetch.js");
/* harmony import */ var _polyfills_closest__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./polyfills/closest */ "./source/js/polyfills/closest.js");
/* harmony import */ var _polyfills_closest__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_polyfills_closest__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _polyfills_object__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./polyfills/object */ "./source/js/polyfills/object.js");
/* harmony import */ var _polyfills_object__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_polyfills_object__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _fields_ajax_upload__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./fields/ajax-upload */ "./source/js/fields/ajax-upload.js");
/* harmony import */ var _fields_choices__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./fields/choices */ "./source/js/fields/choices.js");
/* harmony import */ var _fields_flatpickr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./fields/flatpickr */ "./source/js/fields/flatpickr.js");
/* harmony import */ var _fields_media_upload__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./fields/media-upload */ "./source/js/fields/media-upload.js");
/* harmony import */ var _fields_repeating__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./fields/repeating */ "./source/js/fields/repeating.js");
/* harmony import */ var _fields_repeating_text__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./fields/repeating-text */ "./source/js/fields/repeating-text.js");
/* harmony import */ var _fields_tiny_mce__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./fields/tiny-mce */ "./source/js/fields/tiny-mce.js");














/***/ }),

/***/ "./source/js/polyfills/closest.js":
/*!****************************************!*\
  !*** ./source/js/polyfills/closest.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

if (!Element.prototype.matches) {
  Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
}

if (!Element.prototype.closest) {
  Element.prototype.closest = function (s) {
    var el = this;

    if (!document.documentElement.contains(el)) {
      return null;
    }

    do {
      if (el.matches(s)) return el;
      el = el.parentElement || el.parentNode;
    } while (el !== null && el.nodeType === 1);

    return null;
  };
}

/***/ }),

/***/ "./source/js/polyfills/object.js":
/*!***************************************!*\
  !*** ./source/js/polyfills/object.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

if (!Object.entries) {
  Object.entries = function (obj) {
    var ownProps = Object.keys(obj),
        i = ownProps.length,
        resArray = new Array(i); // preallocate the Array

    while (i--) {
      resArray[i] = [ownProps[i], obj[ownProps[i]]];
    }

    return resArray;
  };
}

/***/ }),

/***/ "./source/scss/flex-fields.scss":
/*!**************************************!*\
  !*** ./source/scss/flex-fields.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 0:
/*!*************************************************************************************************************************************************************************************!*\
  !*** multi ./source/js/flex-fields.js ./source/scss/flex-fields.scss ./node_modules/flatpickr/dist/flatpickr.css ./node_modules/flatpickr/dist/plugins/confirmDate/confirmDate.css ***!
  \*************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./source/js/flex-fields.js */"./source/js/flex-fields.js");
__webpack_require__(/*! ./source/scss/flex-fields.scss */"./source/scss/flex-fields.scss");
__webpack_require__(/*! ./node_modules/flatpickr/dist/flatpickr.css */"./node_modules/flatpickr/dist/flatpickr.css");
module.exports = __webpack_require__(/*! ./node_modules/flatpickr/dist/plugins/confirmDate/confirmDate.css */"./node_modules/flatpickr/dist/plugins/confirmDate/confirmDate.css");


/***/ })

/******/ });
//# sourceMappingURL=flex-fields.js.map