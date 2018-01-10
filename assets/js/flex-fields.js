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

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(2);
__webpack_require__(11);
__webpack_require__(12);
module.exports = __webpack_require__(13);


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(3);

__webpack_require__(6);

__webpack_require__(9);

__webpack_require__(10);

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _choices = __webpack_require__(4);

var _choices2 = _interopRequireDefault(_choices);

var _lodash = __webpack_require__(0);

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Array.from(document.querySelectorAll('.flex-field [data-choices]')).forEach(function (input) {

    input.addEventListener('click', function (e) {
        e.stopPropagation();
    });

    var config = JSON.parse((0, _lodash2.default)(input.getAttribute('data-choices')));

    input.data = {
        'Choices': new _choices2.default(input, config)
    };
});

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

/*! choices.js v3.0.2 | (c) 2017 Josh Johnson | https://github.com/jshjohnson/Choices#readme */ 
!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.Choices=t():e.Choices=t()}(this,function(){return function(e){function t(n){if(i[n])return i[n].exports;var s=i[n]={exports:{},id:n,loaded:!1};return e[n].call(s.exports,s,s.exports,t),s.loaded=!0,s.exports}var i={};return t.m=e,t.c=i,t.p="/assets/scripts/dist/",t(0)}([function(e,t,i){e.exports=i(1)},function(e,t,i){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function s(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e){if(Array.isArray(e)){for(var t=0,i=Array(e.length);t<e.length;t++)i[t]=e[t];return i}return Array.from(e)}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var a=function(){function e(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}}(),c=i(2),l=n(c),h=i(3),u=n(h),d=i(4),f=n(d),p=i(30),v=i(31);i(32);var m=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"[data-choice]",i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(r(this,e),(0,v.isType)("String",t)){var n=document.querySelectorAll(t);if(n.length>1)for(var s=1;s<n.length;s++){var o=n[s];new e(o,i)}}var a={silent:!1,items:[],choices:[],renderChoiceLimit:-1,maxItemCount:-1,addItems:!0,removeItems:!0,removeItemButton:!1,editItems:!1,duplicateItems:!0,delimiter:",",paste:!0,searchEnabled:!0,searchChoices:!0,searchFloor:1,searchResultLimit:4,searchFields:["label","value"],position:"auto",resetScrollPosition:!0,regexFilter:null,shouldSort:!0,shouldSortItems:!1,sortFilter:v.sortByAlpha,placeholder:!0,placeholderValue:null,searchPlaceholderValue:null,prependValue:null,appendValue:null,renderSelectedChoices:"auto",loadingText:"Loading...",noResultsText:"No results found",noChoicesText:"No choices to choose from",itemSelectText:"Press to select",addItemText:function(e){return'Press Enter to add <b>"'+e+'"</b>'},maxItemText:function(e){return"Only "+e+" values can be added."},uniqueItemText:"Only unique values can be added.",classNames:{containerOuter:"choices",containerInner:"choices__inner",input:"choices__input",inputCloned:"choices__input--cloned",list:"choices__list",listItems:"choices__list--multiple",listSingle:"choices__list--single",listDropdown:"choices__list--dropdown",item:"choices__item",itemSelectable:"choices__item--selectable",itemDisabled:"choices__item--disabled",itemChoice:"choices__item--choice",placeholder:"choices__placeholder",group:"choices__group",groupHeading:"choices__heading",button:"choices__button",activeState:"is-active",focusState:"is-focused",openState:"is-open",disabledState:"is-disabled",highlightedState:"is-highlighted",hiddenState:"is-hidden",flippedState:"is-flipped",loadingState:"is-loading",noResults:"has-no-results",noChoices:"has-no-choices"},fuseOptions:{include:"score"},callbackOnInit:null,callbackOnCreateTemplates:null};if(this.idNames={itemChoice:"item-choice"},this.config=(0,v.extend)(a,i),"auto"!==this.config.renderSelectedChoices&&"always"!==this.config.renderSelectedChoices&&(this.config.silent||console.warn("renderSelectedChoices: Possible values are 'auto' and 'always'. Falling back to 'auto'."),this.config.renderSelectedChoices="auto"),this.store=new f.default(this.render),this.initialised=!1,this.currentState={},this.prevState={},this.currentValue="",this.element=t,this.passedElement=(0,v.isType)("String",t)?document.querySelector(t):t,!this.passedElement)return void(this.config.silent||console.error("Passed element not found"));this.isTextElement="text"===this.passedElement.type,this.isSelectOneElement="select-one"===this.passedElement.type,this.isSelectMultipleElement="select-multiple"===this.passedElement.type,this.isSelectElement=this.isSelectOneElement||this.isSelectMultipleElement,this.isValidElementType=this.isTextElement||this.isSelectElement,this.isIe11=!(!navigator.userAgent.match(/Trident/)||!navigator.userAgent.match(/rv[ :]11/)),this.isScrollingOnIe=!1,this.config.shouldSortItems===!0&&this.isSelectOneElement&&(this.config.silent||console.warn("shouldSortElements: Type of passed element is 'select-one', falling back to false.")),this.highlightPosition=0,this.canSearch=this.config.searchEnabled,this.placeholder=!1,this.isSelectOneElement||(this.placeholder=!!this.config.placeholder&&(this.config.placeholderValue||this.passedElement.getAttribute("placeholder"))),this.presetChoices=this.config.choices,this.presetItems=this.config.items,this.passedElement.value&&(this.presetItems=this.presetItems.concat(this.passedElement.value.split(this.config.delimiter))),this.baseId=(0,v.generateId)(this.passedElement,"choices-"),this.render=this.render.bind(this),this._onFocus=this._onFocus.bind(this),this._onBlur=this._onBlur.bind(this),this._onKeyUp=this._onKeyUp.bind(this),this._onKeyDown=this._onKeyDown.bind(this),this._onClick=this._onClick.bind(this),this._onTouchMove=this._onTouchMove.bind(this),this._onTouchEnd=this._onTouchEnd.bind(this),this._onMouseDown=this._onMouseDown.bind(this),this._onMouseOver=this._onMouseOver.bind(this),this._onPaste=this._onPaste.bind(this),this._onInput=this._onInput.bind(this),this.wasTap=!0;var c="classList"in document.documentElement;c||this.config.silent||console.error("Choices: Your browser doesn't support Choices");var l=(0,v.isElement)(this.passedElement)&&this.isValidElementType;if(l){if("active"===this.passedElement.getAttribute("data-choice"))return;this.init()}else this.config.silent||console.error("Incompatible input passed")}return a(e,[{key:"init",value:function(){if(this.initialised!==!0){var e=this.config.callbackOnInit;this.initialised=!0,this._createTemplates(),this._createInput(),this.store.subscribe(this.render),this.render(),this._addEventListeners(),e&&(0,v.isType)("Function",e)&&e.call(this)}}},{key:"destroy",value:function(){if(this.initialised!==!1){this._removeEventListeners(),this.passedElement.classList.remove(this.config.classNames.input,this.config.classNames.hiddenState),this.passedElement.removeAttribute("tabindex");var e=this.passedElement.getAttribute("data-choice-orig-style");Boolean(e)?(this.passedElement.removeAttribute("data-choice-orig-style"),this.passedElement.setAttribute("style",e)):this.passedElement.removeAttribute("style"),this.passedElement.removeAttribute("aria-hidden"),this.passedElement.removeAttribute("data-choice"),this.passedElement.value=this.passedElement.value,this.containerOuter.parentNode.insertBefore(this.passedElement,this.containerOuter),this.containerOuter.parentNode.removeChild(this.containerOuter),this.clearStore(),this.config.templates=null,this.initialised=!1}}},{key:"renderGroups",value:function(e,t,i){var n=this,s=i||document.createDocumentFragment(),o=this.config.sortFilter;return this.config.shouldSort&&e.sort(o),e.forEach(function(e){var i=t.filter(function(t){return n.isSelectOneElement?t.groupId===e.id:t.groupId===e.id&&!t.selected});if(i.length>=1){var o=n._getTemplate("choiceGroup",e);s.appendChild(o),n.renderChoices(i,s,!0)}}),s}},{key:"renderChoices",value:function(e,t){var i=this,n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],s=t||document.createDocumentFragment(),r=this.config,a=r.renderSelectedChoices,c=r.searchResultLimit,l=r.renderChoiceLimit,h=this.isSearching?v.sortByScore:this.config.sortFilter,u=function(e){var t="auto"!==a||(i.isSelectOneElement||!e.selected);if(t){var n=i._getTemplate("choice",e);s.appendChild(n)}},d=e;"auto"!==a||this.isSelectOneElement||(d=e.filter(function(e){return!e.selected}));var f=d.reduce(function(e,t){return t.placeholder?e.placeholderChoices.push(t):e.normalChoices.push(t),e},{placeholderChoices:[],normalChoices:[]}),p=f.placeholderChoices,m=f.normalChoices;(this.config.shouldSort||this.isSearching)&&m.sort(h);var g=d.length,y=[].concat(o(p),o(m));this.isSearching?g=c:l>0&&!n&&(g=l);for(var b=0;b<g;b++)y[b]&&u(y[b]);return s}},{key:"renderItems",value:function(e){var t=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=i||document.createDocumentFragment();if(this.config.shouldSortItems&&!this.isSelectOneElement&&e.sort(this.config.sortFilter),this.isTextElement){var s=this.store.getItemsReducedToValues(e),o=s.join(this.config.delimiter);this.passedElement.setAttribute("value",o),this.passedElement.value=o}else{var r=document.createDocumentFragment();e.forEach(function(e){var i=t._getTemplate("option",e);r.appendChild(i)}),this.passedElement.innerHTML="",this.passedElement.appendChild(r)}return e.forEach(function(e){var i=t._getTemplate("item",e);n.appendChild(i)}),n}},{key:"render",value:function(){if(this.currentState=this.store.getState(),this.currentState!==this.prevState){if((this.currentState.choices!==this.prevState.choices||this.currentState.groups!==this.prevState.groups||this.currentState.items!==this.prevState.items)&&this.isSelectElement){var e=this.store.getGroupsFilteredByActive(),t=this.store.getChoicesFilteredByActive(),i=document.createDocumentFragment();this.choiceList.innerHTML="",this.config.resetScrollPosition&&(this.choiceList.scrollTop=0),e.length>=1&&this.isSearching!==!0?i=this.renderGroups(e,t,i):t.length>=1&&(i=this.renderChoices(t,i));var n=this.store.getItemsFilteredByActive(),s=this._canAddItem(n,this.input.value);if(i.childNodes&&i.childNodes.length>0)s.response?(this.choiceList.appendChild(i),this._highlightChoice()):this.choiceList.appendChild(this._getTemplate("notice",s.notice));else{var o=void 0,r=void 0;this.isSearching?(r=(0,v.isType)("Function",this.config.noResultsText)?this.config.noResultsText():this.config.noResultsText,o=this._getTemplate("notice",r,"no-results")):(r=(0,v.isType)("Function",this.config.noChoicesText)?this.config.noChoicesText():this.config.noChoicesText,o=this._getTemplate("notice",r,"no-choices")),this.choiceList.appendChild(o)}}if(this.currentState.items!==this.prevState.items){var a=this.store.getItemsFilteredByActive();if(this.itemList.innerHTML="",a&&a){var c=this.renderItems(a);c.childNodes&&this.itemList.appendChild(c)}}this.prevState=this.currentState}}},{key:"highlightItem",value:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(!e)return this;var i=e.id,n=e.groupId,s=n>=0?this.store.getGroupById(n):null;return this.store.dispatch((0,p.highlightItem)(i,!0)),t&&(s&&s.value?(0,v.triggerEvent)(this.passedElement,"highlightItem",{id:i,value:e.value,label:e.label,groupValue:s.value}):(0,v.triggerEvent)(this.passedElement,"highlightItem",{id:i,value:e.value,label:e.label})),this}},{key:"unhighlightItem",value:function(e){if(!e)return this;var t=e.id,i=e.groupId,n=i>=0?this.store.getGroupById(i):null;return this.store.dispatch((0,p.highlightItem)(t,!1)),n&&n.value?(0,v.triggerEvent)(this.passedElement,"unhighlightItem",{id:t,value:e.value,label:e.label,groupValue:n.value}):(0,v.triggerEvent)(this.passedElement,"unhighlightItem",{id:t,value:e.value,label:e.label}),this}},{key:"highlightAll",value:function(){var e=this,t=this.store.getItems();return t.forEach(function(t){e.highlightItem(t)}),this}},{key:"unhighlightAll",value:function(){var e=this,t=this.store.getItems();return t.forEach(function(t){e.unhighlightItem(t)}),this}},{key:"removeItemsByValue",value:function(e){var t=this;if(!e||!(0,v.isType)("String",e))return this;var i=this.store.getItemsFilteredByActive();return i.forEach(function(i){i.value===e&&t._removeItem(i)}),this}},{key:"removeActiveItems",value:function(e){var t=this,i=this.store.getItemsFilteredByActive();return i.forEach(function(i){i.active&&e!==i.id&&t._removeItem(i)}),this}},{key:"removeHighlightedItems",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],i=this.store.getItemsFilteredByActive();return i.forEach(function(i){i.highlighted&&i.active&&(e._removeItem(i),t&&e._triggerChange(i.value))}),this}},{key:"showDropdown",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=document.body,i=document.documentElement,n=Math.max(t.scrollHeight,t.offsetHeight,i.clientHeight,i.scrollHeight,i.offsetHeight);this.containerOuter.classList.add(this.config.classNames.openState),this.containerOuter.setAttribute("aria-expanded","true"),this.dropdown.classList.add(this.config.classNames.activeState),this.dropdown.setAttribute("aria-expanded","true");var s=this.dropdown.getBoundingClientRect(),o=Math.ceil(s.top+window.scrollY+this.dropdown.offsetHeight),r=!1;return"auto"===this.config.position?r=o>=n:"top"===this.config.position&&(r=!0),r&&this.containerOuter.classList.add(this.config.classNames.flippedState),e&&this.canSearch&&document.activeElement!==this.input&&this.input.focus(),(0,v.triggerEvent)(this.passedElement,"showDropdown",{}),this}},{key:"hideDropdown",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=this.containerOuter.classList.contains(this.config.classNames.flippedState);return this.containerOuter.classList.remove(this.config.classNames.openState),this.containerOuter.setAttribute("aria-expanded","false"),this.dropdown.classList.remove(this.config.classNames.activeState),this.dropdown.setAttribute("aria-expanded","false"),t&&this.containerOuter.classList.remove(this.config.classNames.flippedState),e&&this.canSearch&&document.activeElement===this.input&&this.input.blur(),(0,v.triggerEvent)(this.passedElement,"hideDropdown",{}),this}},{key:"toggleDropdown",value:function(){var e=this.dropdown.classList.contains(this.config.classNames.activeState);return e?this.hideDropdown():this.showDropdown(!0),this}},{key:"getValue",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],i=this.store.getItemsFilteredByActive(),n=[];return i.forEach(function(i){e.isTextElement?n.push(t?i.value:i):i.active&&n.push(t?i.value:i)}),this.isSelectOneElement?n[0]:n}},{key:"setValue",value:function(e){var t=this;if(this.initialised===!0){var i=[].concat(o(e)),n=function(e){var i=(0,v.getType)(e);if("Object"===i){if(!e.value)return;t.isTextElement?t._addItem(e.value,e.label,e.id,void 0,e.customProperties,e.placeholder):t._addChoice(e.value,e.label,!0,!1,-1,e.customProperties,e.placeholder)}else"String"===i&&(t.isTextElement?t._addItem(e):t._addChoice(e,e,!0,!1,-1,null))};i.length>1?i.forEach(function(e){n(e)}):n(i[0])}return this}},{key:"setValueByChoice",value:function(e){var t=this;if(!this.isTextElement){var i=this.store.getChoices(),n=(0,v.isType)("Array",e)?e:[e];n.forEach(function(e){var n=i.find(function(t){return t.value===e});n?n.selected?t.config.silent||console.warn("Attempting to select choice already selected"):t._addItem(n.value,n.label,n.id,n.groupId,n.customProperties,n.placeholder,n.keyCode):t.config.silent||console.warn("Attempting to select choice that does not exist")})}return this}},{key:"setChoices",value:function(e,t,i){var n=this,s=arguments.length>3&&void 0!==arguments[3]&&arguments[3];if(this.initialised===!0&&this.isSelectElement){if(!(0,v.isType)("Array",e)||!t)return this;s&&this._clearChoices(),e&&e.length&&(this.containerOuter.classList.remove(this.config.classNames.loadingState),e.forEach(function(e){e.choices?n._addGroup(e,e.id||null,t,i):n._addChoice(e[t],e[i],e.selected,e.disabled,void 0,e.customProperties,e.placeholder)}))}return this}},{key:"clearStore",value:function(){return this.store.dispatch((0,p.clearAll)()),this}},{key:"clearInput",value:function(){return this.input.value&&(this.input.value=""),this.isSelectOneElement||this._setInputWidth(),!this.isTextElement&&this.config.searchEnabled&&(this.isSearching=!1,this.store.dispatch((0,p.activateChoices)(!0))),this}},{key:"enable",value:function(){if(this.initialised){this.passedElement.disabled=!1;var e=this.containerOuter.classList.contains(this.config.classNames.disabledState);e&&(this._addEventListeners(),this.passedElement.removeAttribute("disabled"),this.input.removeAttribute("disabled"),this.containerOuter.classList.remove(this.config.classNames.disabledState),this.containerOuter.removeAttribute("aria-disabled"),this.isSelectOneElement&&this.containerOuter.setAttribute("tabindex","0"))}return this}},{key:"disable",value:function(){if(this.initialised){this.passedElement.disabled=!0;var e=!this.containerOuter.classList.contains(this.config.classNames.disabledState);e&&(this._removeEventListeners(),this.passedElement.setAttribute("disabled",""),this.input.setAttribute("disabled",""),this.containerOuter.classList.add(this.config.classNames.disabledState),this.containerOuter.setAttribute("aria-disabled","true"),this.isSelectOneElement&&this.containerOuter.setAttribute("tabindex","-1"))}return this}},{key:"ajax",value:function(e){var t=this;return this.initialised===!0&&this.isSelectElement&&(requestAnimationFrame(function(){t._handleLoadingState(!0)}),e(this._ajaxCallback())),this}},{key:"_triggerChange",value:function(e){e&&(0,v.triggerEvent)(this.passedElement,"change",{value:e})}},{key:"_handleButtonAction",value:function(e,t){if(e&&t&&this.config.removeItems&&this.config.removeItemButton){var i=t.parentNode.getAttribute("data-id"),n=e.find(function(e){return e.id===parseInt(i,10)});this._removeItem(n),this._triggerChange(n.value),this.isSelectOneElement&&this._selectPlaceholderChoice()}}},{key:"_selectPlaceholderChoice",value:function(){var e=this.store.getPlaceholderChoice();e&&(this._addItem(e.value,e.label,e.id,e.groupId,null,e.placeholder),this._triggerChange(e.value))}},{key:"_handleItemAction",value:function(e,t){var i=this,n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(e&&t&&this.config.removeItems&&!this.isSelectOneElement){var s=t.getAttribute("data-id");e.forEach(function(e){e.id!==parseInt(s,10)||e.highlighted?n||e.highlighted&&i.unhighlightItem(e):i.highlightItem(e)}),document.activeElement!==this.input&&this.input.focus()}}},{key:"_handleChoiceAction",value:function(e,t){if(e&&t){var i=t.getAttribute("data-id"),n=this.store.getChoiceById(i),s=e[0]&&e[0].keyCode?e[0].keyCode:null,o=this.dropdown.classList.contains(this.config.classNames.activeState);if(n.keyCode=s,(0,v.triggerEvent)(this.passedElement,"choice",{choice:n}),n&&!n.selected&&!n.disabled){var r=this._canAddItem(e,n.value);r.response&&(this._addItem(n.value,n.label,n.id,n.groupId,n.customProperties,n.placeholder,n.keyCode),this._triggerChange(n.value))}this.clearInput(),o&&this.isSelectOneElement&&(this.hideDropdown(),this.containerOuter.focus())}}},{key:"_handleBackspace",value:function(e){if(this.config.removeItems&&e){var t=e[e.length-1],i=e.some(function(e){return e.highlighted});this.config.editItems&&!i&&t?(this.input.value=t.value,this._setInputWidth(),this._removeItem(t),this._triggerChange(t.value)):(i||this.highlightItem(t,!1),this.removeHighlightedItems(!0))}}},{key:"_canAddItem",value:function(e,t){var i=!0,n=(0,v.isType)("Function",this.config.addItemText)?this.config.addItemText(t):this.config.addItemText;(this.isSelectMultipleElement||this.isTextElement)&&this.config.maxItemCount>0&&this.config.maxItemCount<=e.length&&(i=!1,n=(0,v.isType)("Function",this.config.maxItemText)?this.config.maxItemText(this.config.maxItemCount):this.config.maxItemText),this.isTextElement&&this.config.addItems&&i&&this.config.regexFilter&&(i=this._regexFilter(t));var s=!e.some(function(e){return(0,v.isType)("String",t)?e.value===t.trim():e.value===t});return s||this.config.duplicateItems||this.isSelectOneElement||!i||(i=!1,n=(0,v.isType)("Function",this.config.uniqueItemText)?this.config.uniqueItemText(t):this.config.uniqueItemText),{response:i,notice:n}}},{key:"_handleLoadingState",value:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],t=this.itemList.querySelector("."+this.config.classNames.placeholder);e?(this.containerOuter.classList.add(this.config.classNames.loadingState),this.containerOuter.setAttribute("aria-busy","true"),this.isSelectOneElement?t?t.innerHTML=this.config.loadingText:(t=this._getTemplate("placeholder",this.config.loadingText),this.itemList.appendChild(t)):this.input.placeholder=this.config.loadingText):(this.containerOuter.classList.remove(this.config.classNames.loadingState),this.isSelectOneElement?t.innerHTML=this.placeholder||"":this.input.placeholder=this.placeholder||"")}},{key:"_ajaxCallback",value:function(){var e=this;return function(t,i,n){if(t&&i){var s=(0,v.isType)("Object",t)?[t]:t;s&&(0,v.isType)("Array",s)&&s.length?(e._handleLoadingState(!1),s.forEach(function(t){if(t.choices){var s=t.id||null;e._addGroup(t,s,i,n)}else e._addChoice(t[i],t[n],t.selected,t.disabled,void 0,t.customProperties,t.placeholder)}),e.isSelectOneElement&&e._selectPlaceholderChoice()):e._handleLoadingState(!1),e.containerOuter.removeAttribute("aria-busy")}}}},{key:"_searchChoices",value:function(e){var t=(0,v.isType)("String",e)?e.trim():e,i=(0,v.isType)("String",this.currentValue)?this.currentValue.trim():this.currentValue;if(t.length>=1&&t!==i+" "){var n=this.store.getSearchableChoices(),s=t,o=(0,v.isType)("Array",this.config.searchFields)?this.config.searchFields:[this.config.searchFields],r=Object.assign(this.config.fuseOptions,{keys:o}),a=new l.default(n,r),c=a.search(s);return this.currentValue=t,this.highlightPosition=0,this.isSearching=!0,this.store.dispatch((0,p.filterChoices)(c)),c.length}return 0}},{key:"_handleSearch",value:function(e){if(e){var t=this.store.getChoices(),i=t.some(function(e){return!e.active});if(this.input===document.activeElement)if(e&&e.length>=this.config.searchFloor){var n=0;this.config.searchChoices&&(n=this._searchChoices(e)),(0,v.triggerEvent)(this.passedElement,"search",{value:e,resultCount:n})}else i&&(this.isSearching=!1,this.store.dispatch((0,p.activateChoices)(!0)))}}},{key:"_addEventListeners",value:function(){document.addEventListener("keyup",this._onKeyUp),document.addEventListener("keydown",this._onKeyDown),document.addEventListener("click",this._onClick),document.addEventListener("touchmove",this._onTouchMove),document.addEventListener("touchend",this._onTouchEnd),document.addEventListener("mousedown",this._onMouseDown),document.addEventListener("mouseover",this._onMouseOver),this.isSelectOneElement&&(this.containerOuter.addEventListener("focus",this._onFocus),this.containerOuter.addEventListener("blur",this._onBlur)),this.input.addEventListener("input",this._onInput),this.input.addEventListener("paste",this._onPaste),this.input.addEventListener("focus",this._onFocus),this.input.addEventListener("blur",this._onBlur)}},{key:"_removeEventListeners",value:function(){document.removeEventListener("keyup",this._onKeyUp),document.removeEventListener("keydown",this._onKeyDown),document.removeEventListener("click",this._onClick),document.removeEventListener("touchmove",this._onTouchMove),document.removeEventListener("touchend",this._onTouchEnd),document.removeEventListener("mousedown",this._onMouseDown),document.removeEventListener("mouseover",this._onMouseOver),this.isSelectOneElement&&(this.containerOuter.removeEventListener("focus",this._onFocus),this.containerOuter.removeEventListener("blur",this._onBlur)),this.input.removeEventListener("input",this._onInput),this.input.removeEventListener("paste",this._onPaste),this.input.removeEventListener("focus",this._onFocus),this.input.removeEventListener("blur",this._onBlur)}},{key:"_setInputWidth",value:function(){this.placeholder?this.input.value&&this.input.value.length>=this.placeholder.length/1.25&&(this.input.style.width=(0,v.getWidthOfInput)(this.input)):this.input.style.width=(0,v.getWidthOfInput)(this.input)}},{key:"_onKeyDown",value:function(e){var t,i=this;if(e.target===this.input||this.containerOuter.contains(e.target)){var n=e.target,o=this.store.getItemsFilteredByActive(),r=this.input===document.activeElement,a=this.dropdown.classList.contains(this.config.classNames.activeState),c=this.itemList&&this.itemList.children,l=String.fromCharCode(e.keyCode),h=46,u=8,d=13,f=65,p=27,m=38,g=40,y=33,b=34,E=e.ctrlKey||e.metaKey;this.isTextElement||!/[a-zA-Z0-9-_ ]/.test(l)||a||this.showDropdown(!0),this.canSearch=this.config.searchEnabled;var _=function(){E&&c&&(i.canSearch=!1,i.config.removeItems&&!i.input.value&&i.input===document.activeElement&&i.highlightAll())},S=function(){if(i.isTextElement&&n.value){var t=i.input.value,s=i._canAddItem(o,t);s.response&&(a&&i.hideDropdown(),i._addItem(t),i._triggerChange(t),i.clearInput())}if(n.hasAttribute("data-button")&&(i._handleButtonAction(o,n),e.preventDefault()),a){e.preventDefault();var r=i.dropdown.querySelector("."+i.config.classNames.highlightedState);r&&(o[0]&&(o[0].keyCode=d),i._handleChoiceAction(o,r))}else i.isSelectOneElement&&(a||(i.showDropdown(!0),e.preventDefault()))},I=function(){a&&(i.toggleDropdown(),i.containerOuter.focus())},w=function(){if(a||i.isSelectOneElement){a||i.showDropdown(!0),i.canSearch=!1;var t=e.keyCode===g||e.keyCode===b?1:-1,n=e.metaKey||e.keyCode===b||e.keyCode===y,s=void 0;if(n)s=t>0?Array.from(i.dropdown.querySelectorAll("[data-choice-selectable]")).pop():i.dropdown.querySelector("[data-choice-selectable]");else{var o=i.dropdown.querySelector("."+i.config.classNames.highlightedState);s=o?(0,v.getAdjacentEl)(o,"[data-choice-selectable]",t):i.dropdown.querySelector("[data-choice-selectable]")}s&&((0,v.isScrolledIntoView)(s,i.choiceList,t)||i._scrollToChoice(s,t),i._highlightChoice(s)),e.preventDefault()}},T=function(){!r||e.target.value||i.isSelectOneElement||(i._handleBackspace(o),e.preventDefault())},C=(t={},s(t,f,_),s(t,d,S),s(t,p,I),s(t,m,w),s(t,y,w),s(t,g,w),s(t,b,w),s(t,u,T),s(t,h,T),t);C[e.keyCode]&&C[e.keyCode]()}}},{key:"_onKeyUp",value:function(e){if(e.target===this.input){var t=this.input.value,i=this.store.getItemsFilteredByActive(),n=this._canAddItem(i,t);if(this.isTextElement){var s=this.dropdown.classList.contains(this.config.classNames.activeState);if(t){if(n.notice){var o=this._getTemplate("notice",n.notice);this.dropdown.innerHTML=o.outerHTML}n.response===!0?s||this.showDropdown():!n.notice&&s&&this.hideDropdown()}else s&&this.hideDropdown()}else{var r=46,a=8;e.keyCode!==r&&e.keyCode!==a||e.target.value?this.canSearch&&n.response&&this._handleSearch(this.input.value):!this.isTextElement&&this.isSearching&&(this.isSearching=!1,this.store.dispatch((0,p.activateChoices)(!0)))}this.canSearch=this.config.searchEnabled}}},{key:"_onInput",value:function(){this.isSelectOneElement||this._setInputWidth()}},{key:"_onTouchMove",value:function(){this.wasTap===!0&&(this.wasTap=!1)}},{key:"_onTouchEnd",value:function(e){var t=e.target||e.touches[0].target,i=this.dropdown.classList.contains(this.config.classNames.activeState);this.wasTap===!0&&this.containerOuter.contains(t)&&(t!==this.containerOuter&&t!==this.containerInner||this.isSelectOneElement||(this.isTextElement?document.activeElement!==this.input&&this.input.focus():i||this.showDropdown(!0)),e.stopPropagation()),this.wasTap=!0}},{key:"_onMouseDown",value:function(e){var t=e.target;if(t===this.choiceList&&this.isIe11&&(this.isScrollingOnIe=!0),this.containerOuter.contains(t)&&t!==this.input){var i=void 0,n=this.store.getItemsFilteredByActive(),s=e.shiftKey;(i=(0,v.findAncestorByAttrName)(t,"data-button"))?this._handleButtonAction(n,i):(i=(0,v.findAncestorByAttrName)(t,"data-item"))?this._handleItemAction(n,i,s):(i=(0,v.findAncestorByAttrName)(t,"data-choice"))&&this._handleChoiceAction(n,i),e.preventDefault()}}},{key:"_onClick",value:function(e){var t=e.target,i=this.dropdown.classList.contains(this.config.classNames.activeState),n=this.store.getItemsFilteredByActive();if(this.containerOuter.contains(t))t.hasAttribute("data-button")&&this._handleButtonAction(n,t),i?this.isSelectOneElement&&t!==this.input&&!this.dropdown.contains(t)&&this.hideDropdown(!0):this.isTextElement?document.activeElement!==this.input&&this.input.focus():this.canSearch?this.showDropdown(!0):(this.showDropdown(),this.containerOuter.focus());else{var s=n.some(function(e){return e.highlighted});s&&this.unhighlightAll(),this.containerOuter.classList.remove(this.config.classNames.focusState),i&&this.hideDropdown()}}},{key:"_onMouseOver",value:function(e){(e.target===this.dropdown||this.dropdown.contains(e.target))&&e.target.hasAttribute("data-choice")&&this._highlightChoice(e.target)}},{key:"_onPaste",value:function(e){e.target!==this.input||this.config.paste||e.preventDefault()}},{key:"_onFocus",value:function(e){var t=this,i=e.target;if(this.containerOuter.contains(i)){var n=this.dropdown.classList.contains(this.config.classNames.activeState),s={text:function(){i===t.input&&t.containerOuter.classList.add(t.config.classNames.focusState)},"select-one":function(){t.containerOuter.classList.add(t.config.classNames.focusState),i===t.input&&(n||t.showDropdown())},"select-multiple":function(){i===t.input&&(t.containerOuter.classList.add(t.config.classNames.focusState),n||t.showDropdown(!0))}};s[this.passedElement.type]()}}},{key:"_onBlur",value:function(e){var t=this,i=e.target;if(this.containerOuter.contains(i)&&!this.isScrollingOnIe){var n=this.store.getItemsFilteredByActive(),s=this.dropdown.classList.contains(this.config.classNames.activeState),o=n.some(function(e){return e.highlighted}),r={text:function(){i===t.input&&(t.containerOuter.classList.remove(t.config.classNames.focusState),o&&t.unhighlightAll(),s&&t.hideDropdown())},"select-one":function(){t.containerOuter.classList.remove(t.config.classNames.focusState),i===t.containerOuter&&s&&!t.canSearch&&t.hideDropdown(),i===t.input&&s&&t.hideDropdown()},"select-multiple":function(){i===t.input&&(t.containerOuter.classList.remove(t.config.classNames.focusState),s&&t.hideDropdown(),o&&t.unhighlightAll())}};r[this.passedElement.type]()}else this.isScrollingOnIe=!1,this.input.focus()}},{key:"_regexFilter",value:function(e){if(!e)return!1;var t=this.config.regexFilter,i=new RegExp(t.source,"i");return i.test(e)}},{key:"_scrollToChoice",value:function(e,t){var i=this;if(e){var n=this.choiceList.offsetHeight,s=e.offsetHeight,o=e.offsetTop+s,r=this.choiceList.scrollTop+n,a=t>0?this.choiceList.scrollTop+o-r:e.offsetTop,c=function e(){var n=4,s=i.choiceList.scrollTop,o=!1,r=void 0,c=void 0;t>0?(r=(a-s)/n,c=r>1?r:1,i.choiceList.scrollTop=s+c,s<a&&(o=!0)):(r=(s-a)/n,c=r>1?r:1,i.choiceList.scrollTop=s-c,s>a&&(o=!0)),o&&requestAnimationFrame(function(i){e(i,a,t)})};requestAnimationFrame(function(e){c(e,a,t)})}}},{key:"_highlightChoice",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,i=Array.from(this.dropdown.querySelectorAll("[data-choice-selectable]")),n=t;if(i&&i.length){var s=Array.from(this.dropdown.querySelectorAll("."+this.config.classNames.highlightedState));s.forEach(function(t){t.classList.remove(e.config.classNames.highlightedState),t.setAttribute("aria-selected","false")}),n?this.highlightPosition=i.indexOf(n):(n=i.length>this.highlightPosition?i[this.highlightPosition]:i[i.length-1],n||(n=i[0])),n.classList.add(this.config.classNames.highlightedState),n.setAttribute("aria-selected","true"),this.containerOuter.setAttribute("aria-activedescendant",n.id)}}},{key:"_addItem",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:-1,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:-1,s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null,o=arguments.length>5&&void 0!==arguments[5]&&arguments[5],r=arguments.length>6&&void 0!==arguments[6]?arguments[6]:null,a=(0,v.isType)("String",e)?e.trim():e,c=r,l=this.store.getItems(),h=t||a,u=parseInt(i,10)||-1,d=n>=0?this.store.getGroupById(n):null,f=l?l.length+1:1;return this.config.prependValue&&(a=this.config.prependValue+a.toString()),this.config.appendValue&&(a+=this.config.appendValue.toString()),this.store.dispatch((0,p.addItem)(a,h,f,u,n,s,o,c)),this.isSelectOneElement&&this.removeActiveItems(f),d&&d.value?(0,v.triggerEvent)(this.passedElement,"addItem",{
id:f,value:a,label:h,groupValue:d.value,keyCode:c}):(0,v.triggerEvent)(this.passedElement,"addItem",{id:f,value:a,label:h,keyCode:c}),this}},{key:"_removeItem",value:function(e){if(!e||!(0,v.isType)("Object",e))return this;var t=e.id,i=e.value,n=e.label,s=e.choiceId,o=e.groupId,r=o>=0?this.store.getGroupById(o):null;return this.store.dispatch((0,p.removeItem)(t,s)),r&&r.value?(0,v.triggerEvent)(this.passedElement,"removeItem",{id:t,value:i,label:n,groupValue:r.value}):(0,v.triggerEvent)(this.passedElement,"removeItem",{id:t,value:i,label:n}),this}},{key:"_addChoice",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,i=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=arguments.length>3&&void 0!==arguments[3]&&arguments[3],s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:-1,o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:null,r=arguments.length>6&&void 0!==arguments[6]&&arguments[6],a=arguments.length>7&&void 0!==arguments[7]?arguments[7]:null;if("undefined"!=typeof e&&null!==e){var c=this.store.getChoices(),l=t||e,h=c?c.length+1:1,u=this.baseId+"-"+this.idNames.itemChoice+"-"+h;this.store.dispatch((0,p.addChoice)(e,l,h,s,n,u,o,r,a)),i&&this._addItem(e,l,h,void 0,o,r,a)}}},{key:"_clearChoices",value:function(){this.store.dispatch((0,p.clearChoices)())}},{key:"_addGroup",value:function(e,t){var i=this,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"value",s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"label",o=(0,v.isType)("Object",e)?e.choices:Array.from(e.getElementsByTagName("OPTION")),r=t?t:Math.floor((new Date).valueOf()*Math.random()),a=!!e.disabled&&e.disabled;o?(this.store.dispatch((0,p.addGroup)(e.label,r,!0,a)),o.forEach(function(e){var t=e.disabled||e.parentNode&&e.parentNode.disabled;i._addChoice(e[n],(0,v.isType)("Object",e)?e[s]:e.innerHTML,e.selected,t,r,e.customProperties,e.placeholder)})):this.store.dispatch((0,p.addGroup)(e.label,e.id,!1,e.disabled))}},{key:"_getTemplate",value:function(e){if(!e)return null;for(var t=this.config.templates,i=arguments.length,n=Array(i>1?i-1:0),s=1;s<i;s++)n[s-1]=arguments[s];return t[e].apply(t,n)}},{key:"_createTemplates",value:function(){var e=this,t=this.config.classNames,i={containerOuter:function(i){return(0,v.strToEl)('\n          <div\n            class="'+t.containerOuter+'"\n            '+(e.isSelectElement?e.config.searchEnabled?'role="combobox" aria-autocomplete="list"':'role="listbox"':"")+'\n            data-type="'+e.passedElement.type+'"\n            '+(e.isSelectOneElement?'tabindex="0"':"")+'\n            aria-haspopup="true"\n            aria-expanded="false"\n            dir="'+i+'"\n            >\n          </div>\n        ')},containerInner:function(){return(0,v.strToEl)('\n          <div class="'+t.containerInner+'"></div>\n        ')},itemList:function(){var i,n=(0,u.default)(t.list,(i={},s(i,t.listSingle,e.isSelectOneElement),s(i,t.listItems,!e.isSelectOneElement),i));return(0,v.strToEl)('\n          <div class="'+n+'"></div>\n        ')},placeholder:function(e){return(0,v.strToEl)('\n          <div class="'+t.placeholder+'">\n            '+e+"\n          </div>\n        ")},item:function(i){var n,o=(0,u.default)(t.item,(n={},s(n,t.highlightedState,i.highlighted),s(n,t.itemSelectable,!i.highlighted),s(n,t.placeholder,i.placeholder),n));if(e.config.removeItemButton){var r;return o=(0,u.default)(t.item,(r={},s(r,t.highlightedState,i.highlighted),s(r,t.itemSelectable,!i.disabled),s(r,t.placeholder,i.placeholder),r)),(0,v.strToEl)('\n            <div\n              class="'+o+'"\n              data-item\n              data-id="'+i.id+'"\n              data-value="'+i.value+'"\n              data-deletable\n              '+(i.active?'aria-selected="true"':"")+"\n              "+(i.disabled?'aria-disabled="true"':"")+"\n              >\n              "+i.label+'<!--\n           --><button\n                type="button"\n                class="'+t.button+'"\n                data-button\n                aria-label="Remove item: \''+i.value+"'\"\n                >\n                Remove item\n              </button>\n            </div>\n          ")}return(0,v.strToEl)('\n          <div\n            class="'+o+'"\n            data-item\n            data-id="'+i.id+'"\n            data-value="'+i.value+'"\n            '+(i.active?'aria-selected="true"':"")+"\n            "+(i.disabled?'aria-disabled="true"':"")+"\n            >\n            "+i.label+"\n          </div>\n        ")},choiceList:function(){return(0,v.strToEl)('\n          <div\n            class="'+t.list+'"\n            dir="ltr"\n            role="listbox"\n            '+(e.isSelectOneElement?"":'aria-multiselectable="true"')+"\n            >\n          </div>\n        ")},choiceGroup:function(e){var i=(0,u.default)(t.group,s({},t.itemDisabled,e.disabled));return(0,v.strToEl)('\n          <div\n            class="'+i+'"\n            data-group\n            data-id="'+e.id+'"\n            data-value="'+e.value+'"\n            role="group"\n            '+(e.disabled?'aria-disabled="true"':"")+'\n            >\n            <div class="'+t.groupHeading+'">'+e.value+"</div>\n          </div>\n        ")},choice:function(i){var n,o=(0,u.default)(t.item,t.itemChoice,(n={},s(n,t.itemDisabled,i.disabled),s(n,t.itemSelectable,!i.disabled),s(n,t.placeholder,i.placeholder),n));return(0,v.strToEl)('\n          <div\n            class="'+o+'"\n            data-select-text="'+e.config.itemSelectText+'"\n            data-choice\n            data-id="'+i.id+'"\n            data-value="'+i.value+'"\n            '+(i.disabled?'data-choice-disabled aria-disabled="true"':"data-choice-selectable")+'\n            id="'+i.elementId+'"\n            '+(i.groupId>0?'role="treeitem"':'role="option"')+"\n            >\n            "+i.label+"\n          </div>\n        ")},input:function(){var e=(0,u.default)(t.input,t.inputCloned);return(0,v.strToEl)('\n          <input\n            type="text"\n            class="'+e+'"\n            autocomplete="off"\n            autocapitalize="off"\n            spellcheck="false"\n            role="textbox"\n            aria-autocomplete="list"\n            >\n        ')},dropdown:function(){var e=(0,u.default)(t.list,t.listDropdown);return(0,v.strToEl)('\n          <div\n            class="'+e+'"\n            aria-expanded="false"\n            >\n          </div>\n        ')},notice:function(e){var i,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",o=(0,u.default)(t.item,t.itemChoice,(i={},s(i,t.noResults,"no-results"===n),s(i,t.noChoices,"no-choices"===n),i));return(0,v.strToEl)('\n          <div class="'+o+'">\n            '+e+"\n          </div>\n        ")},option:function(e){return(0,v.strToEl)('\n          <option value="'+e.value+'" selected>'+e.label+"</option>\n        ")}},n=this.config.callbackOnCreateTemplates,o={};n&&(0,v.isType)("Function",n)&&(o=n.call(this,v.strToEl)),this.config.templates=(0,v.extend)(i,o)}},{key:"_createInput",value:function(){var e=this,t=this.passedElement.getAttribute("dir")||"ltr",i=this._getTemplate("containerOuter",t),n=this._getTemplate("containerInner"),s=this._getTemplate("itemList"),o=this._getTemplate("choiceList"),r=this._getTemplate("input"),a=this._getTemplate("dropdown");this.containerOuter=i,this.containerInner=n,this.input=r,this.choiceList=o,this.itemList=s,this.dropdown=a,this.passedElement.classList.add(this.config.classNames.input,this.config.classNames.hiddenState),this.passedElement.tabIndex="-1";var c=this.passedElement.getAttribute("style");if(Boolean(c)&&this.passedElement.setAttribute("data-choice-orig-style",c),this.passedElement.setAttribute("style","display:none;"),this.passedElement.setAttribute("aria-hidden","true"),this.passedElement.setAttribute("data-choice","active"),(0,v.wrap)(this.passedElement,n),(0,v.wrap)(n,i),this.isSelectOneElement?r.placeholder=this.config.searchPlaceholderValue||"":this.placeholder&&(r.placeholder=this.placeholder,r.style.width=(0,v.getWidthOfInput)(r)),this.config.addItems||this.disable(),i.appendChild(n),i.appendChild(a),n.appendChild(s),this.isTextElement||a.appendChild(o),this.isSelectMultipleElement||this.isTextElement?n.appendChild(r):this.canSearch&&a.insertBefore(r,a.firstChild),this.isSelectElement){var l=Array.from(this.passedElement.getElementsByTagName("OPTGROUP"));if(this.highlightPosition=0,this.isSearching=!1,l&&l.length)l.forEach(function(t){e._addGroup(t,t.id||null)});else{var h=Array.from(this.passedElement.options),u=this.config.sortFilter,d=this.presetChoices;h.forEach(function(e){d.push({value:e.value,label:e.innerHTML,selected:e.selected,disabled:e.disabled||e.parentNode.disabled,placeholder:e.hasAttribute("placeholder")})}),this.config.shouldSort&&d.sort(u);var f=d.some(function(e){return e.selected});d.forEach(function(t,i){if(e.isSelectOneElement){var n=f||!f&&i>0;e._addChoice(t.value,t.label,!n||t.selected,!!n&&t.disabled,void 0,t.customProperties,t.placeholder)}else e._addChoice(t.value,t.label,t.selected,t.disabled,void 0,t.customProperties,t.placeholder)})}}else this.isTextElement&&this.presetItems.forEach(function(t){var i=(0,v.getType)(t);if("Object"===i){if(!t.value)return;e._addItem(t.value,t.label,t.id,void 0,t.customProperties,t.placeholder)}else"String"===i&&e._addItem(t)})}}]),e}();e.exports=m},function(e,t,i){!function(t){"use strict";function i(){console.log.apply(console,arguments)}function n(e,t){var i;this.list=e,this.options=t=t||{};for(i in a)a.hasOwnProperty(i)&&("boolean"==typeof a[i]?this.options[i]=i in t?t[i]:a[i]:this.options[i]=t[i]||a[i])}function s(e,t,i){var n,r,a,c,l,h;if(t){if(a=t.indexOf("."),a!==-1?(n=t.slice(0,a),r=t.slice(a+1)):n=t,c=e[n],null!==c&&void 0!==c)if(r||"string"!=typeof c&&"number"!=typeof c)if(o(c))for(l=0,h=c.length;l<h;l++)s(c[l],r,i);else r&&s(c,r,i);else i.push(c)}else i.push(e);return i}function o(e){return"[object Array]"===Object.prototype.toString.call(e)}function r(e,t){t=t||{},this.options=t,this.options.location=t.location||r.defaultOptions.location,this.options.distance="distance"in t?t.distance:r.defaultOptions.distance,this.options.threshold="threshold"in t?t.threshold:r.defaultOptions.threshold,this.options.maxPatternLength=t.maxPatternLength||r.defaultOptions.maxPatternLength,this.pattern=t.caseSensitive?e:e.toLowerCase(),this.patternLen=e.length,this.patternLen<=this.options.maxPatternLength&&(this.matchmask=1<<this.patternLen-1,this.patternAlphabet=this._calculatePatternAlphabet())}var a={id:null,caseSensitive:!1,include:[],shouldSort:!0,searchFn:r,sortFn:function(e,t){return e.score-t.score},getFn:s,keys:[],verbose:!1,tokenize:!1,matchAllTokens:!1,tokenSeparator:/ +/g,minMatchCharLength:1,findAllMatches:!1};n.VERSION="2.7.3",n.prototype.set=function(e){return this.list=e,e},n.prototype.search=function(e){this.options.verbose&&i("\nSearch term:",e,"\n"),this.pattern=e,this.results=[],this.resultMap={},this._keyMap=null,this._prepareSearchers(),this._startSearch(),this._computeScore(),this._sort();var t=this._format();return t},n.prototype._prepareSearchers=function(){var e=this.options,t=this.pattern,i=e.searchFn,n=t.split(e.tokenSeparator),s=0,o=n.length;if(this.options.tokenize)for(this.tokenSearchers=[];s<o;s++)this.tokenSearchers.push(new i(n[s],e));this.fullSeacher=new i(t,e)},n.prototype._startSearch=function(){var e,t,i,n,s=this.options,o=s.getFn,r=this.list,a=r.length,c=this.options.keys,l=c.length,h=null;if("string"==typeof r[0])for(i=0;i<a;i++)this._analyze("",r[i],i,i);else for(this._keyMap={},i=0;i<a;i++)for(h=r[i],n=0;n<l;n++){if(e=c[n],"string"!=typeof e){if(t=1-e.weight||1,this._keyMap[e.name]={weight:t},e.weight<=0||e.weight>1)throw new Error("Key weight has to be > 0 and <= 1");e=e.name}else this._keyMap[e]={weight:1};this._analyze(e,o(h,e,[]),h,i)}},n.prototype._analyze=function(e,t,n,s){var r,a,c,l,h,u,d,f,p,v,m,g,y,b,E,_=this.options,S=!1;if(void 0!==t&&null!==t){a=[];var I=0;if("string"==typeof t){if(r=t.split(_.tokenSeparator),_.verbose&&i("---------\nKey:",e),this.options.tokenize){for(b=0;b<this.tokenSearchers.length;b++){for(f=this.tokenSearchers[b],_.verbose&&i("Pattern:",f.pattern),p=[],g=!1,E=0;E<r.length;E++){v=r[E],m=f.search(v);var w={};m.isMatch?(w[v]=m.score,S=!0,g=!0,a.push(m.score)):(w[v]=1,this.options.matchAllTokens||a.push(1)),p.push(w)}g&&I++,_.verbose&&i("Token scores:",p)}for(l=a[0],u=a.length,b=1;b<u;b++)l+=a[b];l/=u,_.verbose&&i("Token score average:",l)}d=this.fullSeacher.search(t),_.verbose&&i("Full text score:",d.score),h=d.score,void 0!==l&&(h=(h+l)/2),_.verbose&&i("Score average:",h),y=!this.options.tokenize||!this.options.matchAllTokens||I>=this.tokenSearchers.length,_.verbose&&i("Check Matches",y),(S||d.isMatch)&&y&&(c=this.resultMap[s],c?c.output.push({key:e,score:h,matchedIndices:d.matchedIndices}):(this.resultMap[s]={item:n,output:[{key:e,score:h,matchedIndices:d.matchedIndices}]},this.results.push(this.resultMap[s])))}else if(o(t))for(b=0;b<t.length;b++)this._analyze(e,t[b],n,s)}},n.prototype._computeScore=function(){var e,t,n,s,o,r,a,c,l,h=this._keyMap,u=this.results;for(this.options.verbose&&i("\n\nComputing score:\n"),e=0;e<u.length;e++){for(n=0,s=u[e].output,o=s.length,c=1,t=0;t<o;t++)r=s[t].score,a=h?h[s[t].key].weight:1,l=r*a,1!==a?c=Math.min(c,l):(n+=l,s[t].nScore=l);1===c?u[e].score=n/o:u[e].score=c,this.options.verbose&&i(u[e])}},n.prototype._sort=function(){var e=this.options;e.shouldSort&&(e.verbose&&i("\n\nSorting...."),this.results.sort(e.sortFn))},n.prototype._format=function(){var e,t,n,s,o=this.options,r=o.getFn,a=[],c=this.results,l=o.include;for(o.verbose&&i("\n\nOutput:\n\n",c),n=o.id?function(e){c[e].item=r(c[e].item,o.id,[])[0]}:function(){},s=function(e){var t,i,n,s,o,r=c[e];if(l.length>0){if(t={item:r.item},l.indexOf("matches")!==-1)for(n=r.output,t.matches=[],i=0;i<n.length;i++)s=n[i],o={indices:s.matchedIndices},s.key&&(o.key=s.key),t.matches.push(o);l.indexOf("score")!==-1&&(t.score=c[e].score)}else t=r.item;return t},e=0,t=c.length;e<t;e++)n(e),a.push(s(e));return a},r.defaultOptions={location:0,distance:100,threshold:.6,maxPatternLength:32},r.prototype._calculatePatternAlphabet=function(){var e={},t=0;for(t=0;t<this.patternLen;t++)e[this.pattern.charAt(t)]=0;for(t=0;t<this.patternLen;t++)e[this.pattern.charAt(t)]|=1<<this.pattern.length-t-1;return e},r.prototype._bitapScore=function(e,t){var i=e/this.patternLen,n=Math.abs(this.options.location-t);return this.options.distance?i+n/this.options.distance:n?1:i},r.prototype.search=function(e){var t,i,n,s,o,r,a,c,l,h,u,d,f,p,v,m,g,y,b,E,_,S,I,w=this.options;if(e=w.caseSensitive?e:e.toLowerCase(),this.pattern===e)return{isMatch:!0,score:0,matchedIndices:[[0,e.length-1]]};if(this.patternLen>w.maxPatternLength){if(y=e.match(new RegExp(this.pattern.replace(w.tokenSeparator,"|"))),b=!!y)for(_=[],t=0,S=y.length;t<S;t++)I=y[t],_.push([e.indexOf(I),I.length-1]);return{isMatch:b,score:b?.5:1,matchedIndices:_}}for(s=w.findAllMatches,o=w.location,n=e.length,r=w.threshold,a=e.indexOf(this.pattern,o),E=[],t=0;t<n;t++)E[t]=0;for(a!=-1&&(r=Math.min(this._bitapScore(0,a),r),a=e.lastIndexOf(this.pattern,o+this.patternLen),a!=-1&&(r=Math.min(this._bitapScore(0,a),r))),a=-1,m=1,g=[],h=this.patternLen+n,t=0;t<this.patternLen;t++){for(c=0,l=h;c<l;)this._bitapScore(t,o+l)<=r?c=l:h=l,l=Math.floor((h-c)/2+c);for(h=l,u=Math.max(1,o-l+1),d=s?n:Math.min(o+l,n)+this.patternLen,f=Array(d+2),f[d+1]=(1<<t)-1,i=d;i>=u;i--)if(v=this.patternAlphabet[e.charAt(i-1)],v&&(E[i-1]=1),f[i]=(f[i+1]<<1|1)&v,0!==t&&(f[i]|=(p[i+1]|p[i])<<1|1|p[i+1]),f[i]&this.matchmask&&(m=this._bitapScore(t,i-1),m<=r)){if(r=m,a=i-1,g.push(a),a<=o)break;u=Math.max(1,2*o-a)}if(this._bitapScore(t+1,o)>r)break;p=f}return _=this._getMatchedIndices(E),{isMatch:a>=0,score:0===m?.001:m,matchedIndices:_}},r.prototype._getMatchedIndices=function(e){for(var t,i=[],n=-1,s=-1,o=0,r=e.length;o<r;o++)t=e[o],t&&n===-1?n=o:t||n===-1||(s=o-1,s-n+1>=this.options.minMatchCharLength&&i.push([n,s]),n=-1);return e[o-1]&&o-1-n+1>=this.options.minMatchCharLength&&i.push([n,o-1]),i},e.exports=n}(this)},function(e,t,i){var n,s;!function(){"use strict";function i(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var s=typeof n;if("string"===s||"number"===s)e.push(n);else if(Array.isArray(n))e.push(i.apply(null,n));else if("object"===s)for(var r in n)o.call(n,r)&&n[r]&&e.push(r)}}return e.join(" ")}var o={}.hasOwnProperty;"undefined"!=typeof e&&e.exports?e.exports=i:(n=[],s=function(){return i}.apply(t,n),!(void 0!==s&&(e.exports=s)))}()},function(e,t,i){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function s(e){if(Array.isArray(e)){for(var t=0,i=Array(e.length);t<e.length;t++)i[t]=e[t];return i}return Array.from(e)}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}}(),a=i(5),c=i(26),l=n(c),h=function(){function e(){o(this,e),this.store=(0,a.createStore)(l.default,window.devToolsExtension?window.devToolsExtension():void 0)}return r(e,[{key:"getState",value:function(){return this.store.getState()}},{key:"dispatch",value:function(e){this.store.dispatch(e)}},{key:"subscribe",value:function(e){this.store.subscribe(e)}},{key:"getItems",value:function(){var e=this.store.getState();return e.items}},{key:"getItemsFilteredByActive",value:function(){var e=this.getItems(),t=e.filter(function(e){return e.active===!0},[]);return t}},{key:"getItemsReducedToValues",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.getItems(),t=e.reduce(function(e,t){return e.push(t.value),e},[]);return t}},{key:"getChoices",value:function(){var e=this.store.getState();return e.choices}},{key:"getChoicesFilteredByActive",value:function(){var e=this.getChoices(),t=e.filter(function(e){return e.active===!0});return t}},{key:"getChoicesFilteredBySelectable",value:function(){var e=this.getChoices(),t=e.filter(function(e){return e.disabled!==!0});return t}},{key:"getSearchableChoices",value:function(){var e=this.getChoicesFilteredBySelectable();return e.filter(function(e){return e.placeholder!==!0})}},{key:"getChoiceById",value:function(e){if(e){var t=this.getChoicesFilteredByActive(),i=t.find(function(t){return t.id===parseInt(e,10)});return i}return!1}},{key:"getGroups",value:function(){var e=this.store.getState();return e.groups}},{key:"getGroupsFilteredByActive",value:function(){var e=this.getGroups(),t=this.getChoices(),i=e.filter(function(e){var i=e.active===!0&&e.disabled===!1,n=t.some(function(e){return e.active===!0&&e.disabled===!1});return i&&n},[]);return i}},{key:"getGroupById",value:function(e){var t=this.getGroups(),i=t.find(function(t){return t.id===e});return i}},{key:"getPlaceholderChoice",value:function(){var e=this.getChoices(),t=[].concat(s(e)).reverse().find(function(e){return e.placeholder===!0});return t}}]),e}();t.default=h,e.exports=h},function(e,t,i){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.compose=t.applyMiddleware=t.bindActionCreators=t.combineReducers=t.createStore=void 0;var s=i(6),o=n(s),r=i(21),a=n(r),c=i(23),l=n(c),h=i(24),u=n(h),d=i(25),f=n(d),p=i(22);n(p);t.createStore=o.default,t.combineReducers=a.default,t.bindActionCreators=l.default,t.applyMiddleware=u.default,t.compose=f.default},function(e,t,i){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function s(e,t,i){function n(){g===m&&(g=m.slice())}function o(){return v}function a(e){if("function"!=typeof e)throw new Error("Expected listener to be a function.");var t=!0;return n(),g.push(e),function(){if(t){t=!1,n();var i=g.indexOf(e);g.splice(i,1)}}}function h(e){if(!(0,r.default)(e))throw new Error("Actions must be plain objects. Use custom middleware for async actions.");if("undefined"==typeof e.type)throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');if(y)throw new Error("Reducers may not dispatch actions.");try{y=!0,v=p(v,e)}finally{y=!1}for(var t=m=g,i=0;i<t.length;i++)t[i]();return e}function u(e){if("function"!=typeof e)throw new Error("Expected the nextReducer to be a function.");p=e,h({type:l.INIT})}function d(){var e,t=a;return e={subscribe:function(e){function i(){e.next&&e.next(o())}if("object"!=typeof e)throw new TypeError("Expected the observer to be an object.");i();var n=t(i);return{unsubscribe:n}}},e[c.default]=function(){return this},e}var f;if("function"==typeof t&&"undefined"==typeof i&&(i=t,t=void 0),"undefined"!=typeof i){if("function"!=typeof i)throw new Error("Expected the enhancer to be a function.");return i(s)(e,t)}if("function"!=typeof e)throw new Error("Expected the reducer to be a function.");var p=e,v=t,m=[],g=m,y=!1;return h({type:l.INIT}),f={dispatch:h,subscribe:a,getState:o,replaceReducer:u},f[c.default]=d,f}t.__esModule=!0,t.ActionTypes=void 0,t.default=s;var o=i(7),r=n(o),a=i(17),c=n(a),l=t.ActionTypes={INIT:"@@redux/INIT"}},function(e,t,i){function n(e){if(!r(e)||s(e)!=a)return!1;var t=o(e);if(null===t)return!0;var i=u.call(t,"constructor")&&t.constructor;return"function"==typeof i&&i instanceof i&&h.call(i)==d}var s=i(8),o=i(14),r=i(16),a="[object Object]",c=Function.prototype,l=Object.prototype,h=c.toString,u=l.hasOwnProperty,d=h.call(Object);e.exports=n},function(e,t,i){function n(e){return null==e?void 0===e?c:a:l&&l in Object(e)?o(e):r(e)}var s=i(9),o=i(12),r=i(13),a="[object Null]",c="[object Undefined]",l=s?s.toStringTag:void 0;e.exports=n},function(e,t,i){var n=i(10),s=n.Symbol;e.exports=s},function(e,t,i){var n=i(11),s="object"==typeof self&&self&&self.Object===Object&&self,o=n||s||Function("return this")();e.exports=o},function(e,t){(function(t){var i="object"==typeof t&&t&&t.Object===Object&&t;e.exports=i}).call(t,function(){return this}())},function(e,t,i){function n(e){var t=r.call(e,c),i=e[c];try{e[c]=void 0;var n=!0}catch(e){}var s=a.call(e);return n&&(t?e[c]=i:delete e[c]),s}var s=i(9),o=Object.prototype,r=o.hasOwnProperty,a=o.toString,c=s?s.toStringTag:void 0;e.exports=n},function(e,t){function i(e){return s.call(e)}var n=Object.prototype,s=n.toString;e.exports=i},function(e,t,i){var n=i(15),s=n(Object.getPrototypeOf,Object);e.exports=s},function(e,t){function i(e,t){return function(i){return e(t(i))}}e.exports=i},function(e,t){function i(e){return null!=e&&"object"==typeof e}e.exports=i},function(e,t,i){e.exports=i(18)},function(e,t,i){(function(e,n){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o,r=i(20),a=s(r);o="undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof e?e:n;var c=(0,a.default)(o);t.default=c}).call(t,function(){return this}(),i(19)(e))},function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children=[],e.webpackPolyfill=1),e}},function(e,t){"use strict";function i(e){var t,i=e.Symbol;return"function"==typeof i?i.observable?t=i.observable:(t=i("observable"),i.observable=t):t="@@observable",t}Object.defineProperty(t,"__esModule",{value:!0}),t.default=i},function(e,t,i){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function s(e,t){var i=t&&t.type,n=i&&'"'+i.toString()+'"'||"an action";return"Given action "+n+', reducer "'+e+'" returned undefined. To ignore an action, you must explicitly return the previous state.'}function o(e){Object.keys(e).forEach(function(t){var i=e[t],n=i(void 0,{type:a.ActionTypes.INIT});if("undefined"==typeof n)throw new Error('Reducer "'+t+'" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.');var s="@@redux/PROBE_UNKNOWN_ACTION_"+Math.random().toString(36).substring(7).split("").join(".");if("undefined"==typeof i(void 0,{type:s}))throw new Error('Reducer "'+t+'" returned undefined when probed with a random type. '+("Don't try to handle "+a.ActionTypes.INIT+' or other actions in "redux/*" ')+"namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined.")})}function r(e){for(var t=Object.keys(e),i={},n=0;n<t.length;n++){var r=t[n];"function"==typeof e[r]&&(i[r]=e[r])}var a,c=Object.keys(i);try{o(i)}catch(e){a=e}return function(){var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],t=arguments[1];if(a)throw a;for(var n=!1,o={},r=0;r<c.length;r++){var l=c[r],h=i[l],u=e[l],d=h(u,t);if("undefined"==typeof d){var f=s(l,t);throw new Error(f)}o[l]=d,n=n||d!==u}return n?o:e}}t.__esModule=!0,t.default=r;var a=i(6),c=i(7),l=(n(c),i(22));n(l)},function(e,t){"use strict";function i(e){"undefined"!=typeof console&&"function"==typeof console.error&&console.error(e);try{throw new Error(e)}catch(e){}}t.__esModule=!0,t.default=i},function(e,t){"use strict";function i(e,t){return function(){return t(e.apply(void 0,arguments))}}function n(e,t){if("function"==typeof e)return i(e,t);if("object"!=typeof e||null===e)throw new Error("bindActionCreators expected an object or a function, instead received "+(null===e?"null":typeof e)+'. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');for(var n=Object.keys(e),s={},o=0;o<n.length;o++){var r=n[o],a=e[r];"function"==typeof a&&(s[r]=i(a,t))}return s}t.__esModule=!0,t.default=n},function(e,t,i){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function s(){for(var e=arguments.length,t=Array(e),i=0;i<e;i++)t[i]=arguments[i];return function(e){return function(i,n,s){var r=e(i,n,s),c=r.dispatch,l=[],h={getState:r.getState,dispatch:function(e){return c(e)}};return l=t.map(function(e){return e(h)}),c=a.default.apply(void 0,l)(r.dispatch),o({},r,{dispatch:c})}}}t.__esModule=!0;var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e};t.default=s;var r=i(25),a=n(r)},function(e,t){"use strict";function i(){for(var e=arguments.length,t=Array(e),i=0;i<e;i++)t[i]=arguments[i];if(0===t.length)return function(e){return e};if(1===t.length)return t[0];var n=t[t.length-1],s=t.slice(0,-1);return function(){return s.reduceRight(function(e,t){return t(e)},n.apply(void 0,arguments))}}t.__esModule=!0,t.default=i},function(e,t,i){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var s=i(5),o=i(27),r=n(o),a=i(28),c=n(a),l=i(29),h=n(l),u=(0,s.combineReducers)({items:r.default,groups:c.default,choices:h.default}),d=function(e,t){var i=e;return"CLEAR_ALL"===t.type&&(i=void 0),u(i,t)};t.default=d},function(e,t){"use strict";function i(e){if(Array.isArray(e)){for(var t=0,i=Array(e.length);t<e.length;t++)i[t]=e[t];return i}return Array.from(e)}Object.defineProperty(t,"__esModule",{value:!0});var n=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments[1];switch(t.type){case"ADD_ITEM":var n=[].concat(i(e),[{id:t.id,choiceId:t.choiceId,groupId:t.groupId,value:t.value,label:t.label,active:!0,highlighted:!1,customProperties:t.customProperties,placeholder:t.placeholder||!1,keyCode:null}]);return n.map(function(e){return e.highlighted&&(e.highlighted=!1),e});case"REMOVE_ITEM":return e.map(function(e){return e.id===t.id&&(e.active=!1),e});case"HIGHLIGHT_ITEM":return e.map(function(e){return e.id===t.id&&(e.highlighted=t.highlighted),e});default:return e}};t.default=n},function(e,t){"use strict";function i(e){if(Array.isArray(e)){for(var t=0,i=Array(e.length);t<e.length;t++)i[t]=e[t];return i}return Array.from(e)}Object.defineProperty(t,"__esModule",{value:!0});var n=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments[1];switch(t.type){case"ADD_GROUP":return[].concat(i(e),[{id:t.id,value:t.value,active:t.active,disabled:t.disabled}]);case"CLEAR_CHOICES":return e.groups=[];default:return e}};t.default=n},function(e,t){"use strict";function i(e){if(Array.isArray(e)){for(var t=0,i=Array(e.length);t<e.length;t++)i[t]=e[t];return i}return Array.from(e)}Object.defineProperty(t,"__esModule",{value:!0});var n=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments[1];switch(t.type){case"ADD_CHOICE":return[].concat(i(e),[{id:t.id,elementId:t.elementId,groupId:t.groupId,value:t.value,label:t.label||t.value,disabled:t.disabled||!1,selected:!1,active:!0,score:9999,customProperties:t.customProperties,placeholder:t.placeholder||!1,keyCode:null}]);case"ADD_ITEM":var n=e;return t.activateOptions&&(n=e.map(function(e){return e.active=t.active,e})),t.choiceId>-1&&(n=e.map(function(e){return e.id===parseInt(t.choiceId,10)&&(e.selected=!0),e})),n;case"REMOVE_ITEM":return t.choiceId>-1?e.map(function(e){return e.id===parseInt(t.choiceId,10)&&(e.selected=!1),e}):e;case"FILTER_CHOICES":var s=t.results,o=e.map(function(e){return e.active=s.some(function(t){return t.item.id===e.id&&(e.score=t.score,!0)}),e});return o;case"ACTIVATE_CHOICES":return e.map(function(e){return e.active=t.active,e});case"CLEAR_CHOICES":return e.choices=[];default:return e}};t.default=n},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.addItem=function(e,t,i,n,s,o,r,a){return{type:"ADD_ITEM",value:e,label:t,id:i,choiceId:n,groupId:s,customProperties:o,placeholder:r,keyCode:a}},t.removeItem=function(e,t){return{type:"REMOVE_ITEM",id:e,choiceId:t}},t.highlightItem=function(e,t){return{type:"HIGHLIGHT_ITEM",id:e,highlighted:t}},t.addChoice=function(e,t,i,n,s,o,r,a,c){return{type:"ADD_CHOICE",value:e,label:t,id:i,groupId:n,disabled:s,elementId:o,customProperties:r,placeholder:a,keyCode:c}},t.filterChoices=function(e){return{type:"FILTER_CHOICES",results:e}},t.activateChoices=function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];return{type:"ACTIVATE_CHOICES",active:e}},t.clearChoices=function(){return{type:"CLEAR_CHOICES"}},t.addGroup=function(e,t,i,n){return{type:"ADD_GROUP",value:e,id:t,active:i,disabled:n}},t.clearAll=function(){return{type:"CLEAR_ALL"}}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n=(t.capitalise=function(e){return e.replace(/\w\S*/g,function(e){return e.charAt(0).toUpperCase()+e.substr(1).toLowerCase()})},t.generateChars=function(e){for(var t="",i=0;i<e;i++){var n=a(0,36);t+=n.toString(36)}return t}),s=(t.generateId=function(e,t){var i=e.id||e.name&&e.name+"-"+n(2)||n(4);return i=i.replace(/(:|\.|\[|\]|,)/g,""),i=t+i},t.getType=function(e){return Object.prototype.toString.call(e).slice(8,-1)}),o=t.isType=function(e,t){var i=s(t);return void 0!==t&&null!==t&&i===e},r=(t.isNode=function(e){return"object"===("undefined"==typeof Node?"undefined":i(Node))?e instanceof Node:e&&"object"===("undefined"==typeof e?"undefined":i(e))&&"number"==typeof e.nodeType&&"string"==typeof e.nodeName},t.isElement=function(e){return"object"===("undefined"==typeof HTMLElement?"undefined":i(HTMLElement))?e instanceof HTMLElement:e&&"object"===("undefined"==typeof e?"undefined":i(e))&&null!==e&&1===e.nodeType&&"string"==typeof e.nodeName},t.extend=function e(){for(var t={},i=arguments.length,n=function(i){for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(o("Object",i[n])?t[n]=e(!0,t[n],i[n]):t[n]=i[n])},s=0;s<i;s++){var r=arguments[s];o("Object",r)&&n(r)}return t},t.whichTransitionEvent=function(){var e,t=document.createElement("fakeelement"),i={transition:"transitionend",
OTransition:"oTransitionEnd",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"};for(e in i)if(void 0!==t.style[e])return i[e]},t.whichAnimationEvent=function(){var e,t=document.createElement("fakeelement"),i={animation:"animationend",OAnimation:"oAnimationEnd",MozAnimation:"animationend",WebkitAnimation:"webkitAnimationEnd"};for(e in i)if(void 0!==t.style[e])return i[e]}),a=(t.getParentsUntil=function(e,t,i){for(var n=[];e&&e!==document;e=e.parentNode){if(t){var s=t.charAt(0);if("."===s&&e.classList.contains(t.substr(1)))break;if("#"===s&&e.id===t.substr(1))break;if("["===s&&e.hasAttribute(t.substr(1,t.length-1)))break;if(e.tagName.toLowerCase()===t)break}if(i){var o=i.charAt(0);"."===o&&e.classList.contains(i.substr(1))&&n.push(e),"#"===o&&e.id===i.substr(1)&&n.push(e),"["===o&&e.hasAttribute(i.substr(1,i.length-1))&&n.push(e),e.tagName.toLowerCase()===i&&n.push(e)}else n.push(e)}return 0===n.length?null:n},t.wrap=function(e,t){return t=t||document.createElement("div"),e.nextSibling?e.parentNode.insertBefore(t,e.nextSibling):e.parentNode.appendChild(t),t.appendChild(e)},t.getSiblings=function(e){for(var t=[],i=e.parentNode.firstChild;i;i=i.nextSibling)1===i.nodeType&&i!==e&&t.push(i);return t},t.findAncestor=function(e,t){for(;(e=e.parentElement)&&!e.classList.contains(t););return e},t.findAncestorByAttrName=function(e,t){for(var i=e;i;){if(i.hasAttribute(t))return i;i=i.parentElement}return null},t.debounce=function(e,t,i){var n;return function(){var s=this,o=arguments,r=function(){n=null,i||e.apply(s,o)},a=i&&!n;clearTimeout(n),n=setTimeout(r,t),a&&e.apply(s,o)}},t.getElemDistance=function(e){var t=0;if(e.offsetParent)do t+=e.offsetTop,e=e.offsetParent;while(e);return t>=0?t:0},t.getElementOffset=function(e,t){var i=t;return i>1&&(i=1),i>0&&(i=0),Math.max(e.offsetHeight*i)},t.getAdjacentEl=function(e,t){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;if(e&&t){var n=e.parentNode.parentNode,s=Array.from(n.querySelectorAll(t)),o=s.indexOf(e),r=i>0?1:-1;return s[o+r]}},t.getScrollPosition=function(e){return"bottom"===e?Math.max((window.scrollY||window.pageYOffset)+(window.innerHeight||document.documentElement.clientHeight)):window.scrollY||window.pageYOffset},t.isInView=function(e,t,i){return this.getScrollPosition(t)>this.getElemDistance(e)+this.getElementOffset(e,i)},t.isScrolledIntoView=function(e,t){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;if(e){var n=void 0;return n=i>0?t.scrollTop+t.offsetHeight>=e.offsetTop+e.offsetHeight:e.offsetTop>=t.scrollTop}},t.stripHTML=function(e){var t=document.createElement("DIV");return t.innerHTML=e,t.textContent||t.innerText||""},t.addAnimation=function(e,t){var i=r(),n=function n(){e.classList.remove(t),e.removeEventListener(i,n,!1)};e.classList.add(t),e.addEventListener(i,n,!1)},t.getRandomNumber=function(e,t){return Math.floor(Math.random()*(t-e)+e)}),c=t.strToEl=function(){var e=document.createElement("div");return function(t){var i=t.trim(),n=void 0;for(e.innerHTML=i,n=e.children[0];e.firstChild;)e.removeChild(e.firstChild);return n}}();t.getWidthOfInput=function(e){var t=e.value||e.placeholder,i=e.offsetWidth;if(t){var n=c("<span>"+t+"</span>");if(n.style.position="absolute",n.style.padding="0",n.style.top="-9999px",n.style.left="-9999px",n.style.width="auto",n.style.whiteSpace="pre",document.body.contains(e)&&window.getComputedStyle){var s=window.getComputedStyle(e);s&&(n.style.fontSize=s.fontSize,n.style.fontFamily=s.fontFamily,n.style.fontWeight=s.fontWeight,n.style.fontStyle=s.fontStyle,n.style.letterSpacing=s.letterSpacing,n.style.textTransform=s.textTransform,n.style.padding=s.padding)}document.body.appendChild(n),t&&n.offsetWidth!==e.offsetWidth&&(i=n.offsetWidth+4),document.body.removeChild(n)}return i+"px"},t.sortByAlpha=function(e,t){var i=(e.label||e.value).toLowerCase(),n=(t.label||t.value).toLowerCase();return i<n?-1:i>n?1:0},t.sortByScore=function(e,t){return e.score-t.score},t.triggerEvent=function(e,t){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,n=new CustomEvent(t,{detail:i,bubbles:!0,cancelable:!0});return e.dispatchEvent(n)}},function(e,t){"use strict";!function(){function e(e,t){t=t||{bubbles:!1,cancelable:!1,detail:void 0};var i=document.createEvent("CustomEvent");return i.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),i}Array.from||(Array.from=function(){var e=Object.prototype.toString,t=function(t){return"function"==typeof t||"[object Function]"===e.call(t)},i=function(e){var t=Number(e);return isNaN(t)?0:0!==t&&isFinite(t)?(t>0?1:-1)*Math.floor(Math.abs(t)):t},n=Math.pow(2,53)-1,s=function(e){var t=i(e);return Math.min(Math.max(t,0),n)};return function(e){var i=this,n=Object(e);if(null==e)throw new TypeError("Array.from requires an array-like object - not null or undefined");var o,r=arguments.length>1?arguments[1]:void 0;if("undefined"!=typeof r){if(!t(r))throw new TypeError("Array.from: when provided, the second argument must be a function");arguments.length>2&&(o=arguments[2])}for(var a,c=s(n.length),l=t(i)?Object(new i(c)):new Array(c),h=0;h<c;)a=n[h],r?l[h]="undefined"==typeof o?r(a,h):r.call(o,a,h):l[h]=a,h+=1;return l.length=c,l}}()),Array.prototype.find||(Array.prototype.find=function(e){if(null==this)throw new TypeError("Array.prototype.find called on null or undefined");if("function"!=typeof e)throw new TypeError("predicate must be a function");for(var t,i=Object(this),n=i.length>>>0,s=arguments[1],o=0;o<n;o++)if(t=i[o],e.call(s,t,o,i))return t}),e.prototype=window.Event.prototype,window.CustomEvent=e}()}])});
//# sourceMappingURL=choices.min.js.map

/***/ }),
/* 5 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _flatpickr = __webpack_require__(7);

var _flatpickr2 = _interopRequireDefault(_flatpickr);

var _confirmDate = __webpack_require__(8);

var _confirmDate2 = _interopRequireDefault(_confirmDate);

var _lodash = __webpack_require__(0);

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Array.from(document.querySelectorAll('.flex-field-flatpickr')).forEach(function (field) {

    var input = field.querySelector('[data-flatpickr]');
    var config = JSON.parse((0, _lodash2.default)(input.getAttribute('data-flatpickr')));

    config.onReady = function (dateObj, dateStr, instance) {

        var clearBtn = field.querySelector('.flatpickr-reset');

        clearBtn.addEventListener('click', function (e) {
            e.preventDefault();
            instance.clear();
            instance.close();
        });
    };

    config.plugins = [new _confirmDate2.default({})];

    (0, _flatpickr2.default)(input, config);
});

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*! flatpickr v3.0.6, @license MIT */
function FlatpickrInstance(element, config) {
	var self = this;

	self._ = {};
	self._.afterDayAnim = afterDayAnim;
	self._bind = bind;
	self._compareDates = compareDates;
	self._setHoursFromDate = setHoursFromDate;
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

	function init() {
		self.element = self.input = element;
		self.instanceConfig = config || {};
		self.parseDate = FlatpickrInstance.prototype.parseDate.bind(self);
		self.formatDate = FlatpickrInstance.prototype.formatDate.bind(self);

		setupFormats();
		parseConfig();
		setupLocale();
		setupInputs();
		setupDates();
		setupHelperFunctions();

		self.isOpen = false;

		self.isMobile = !self.config.disableMobile && !self.config.inline && self.config.mode === "single" && !self.config.disable.length && !self.config.enable.length && !self.config.weekNumbers && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

		if (!self.isMobile) build();

		bindEvents();

		if (self.selectedDates.length || self.config.noCalendar) {
			if (self.config.enableTime) {
				setHoursFromDate(self.config.noCalendar ? self.latestSelectedDateObj || self.config.minDate : null);
			}
			updateValue(false);
		}

		self.showTimeInput = self.selectedDates.length > 0 || self.config.noCalendar;

		if (self.config.weekNumbers) {
			self.calendarContainer.style.width = self.daysContainer.offsetWidth + self.weekWrapper.offsetWidth + "px";
		}

		if (!self.isMobile) positionCalendar();

		triggerEvent("Ready");
	}

	/**
  * Binds a function to the current flatpickr instance
  * @param {Function} fn the function
  * @return {Function} the function bound to the instance
  */
	function bindToInstance(fn) {
		return fn.bind(self);
	}

	/**
  * The handler for all events targeting the time inputs
  * @param {Event} e the event - "input", "wheel", "increment", etc
  */
	function updateTime(e) {
		if (self.config.noCalendar && !self.selectedDates.length)
			// picking time only
			self.selectedDates = [self.now];

		timeWrapper(e);

		if (!self.selectedDates.length) return;

		if (!self.minDateHasTime || e.type !== "input" || e.target.value.length >= 2) {
			setHoursFromInputs();
			updateValue();
		} else {
			setTimeout(function () {
				setHoursFromInputs();
				updateValue();
			}, 1000);
		}
	}

	/**
  * Syncs the selected date object time with user's time input
  */
	function setHoursFromInputs() {
		if (!self.config.enableTime) return;

		var hours = (parseInt(self.hourElement.value, 10) || 0) % (self.amPM ? 12 : 24),
		    minutes = (parseInt(self.minuteElement.value, 10) || 0) % 60,
		    seconds = self.config.enableSeconds ? (parseInt(self.secondElement.value, 10) || 0) % 60 : 0;

		if (self.amPM !== undefined) hours = hours % 12 + 12 * (self.amPM.textContent === "PM");

		if (self.minDateHasTime && compareDates(self.latestSelectedDateObj, self.config.minDate) === 0) {

			hours = Math.max(hours, self.config.minDate.getHours());
			if (hours === self.config.minDate.getHours()) minutes = Math.max(minutes, self.config.minDate.getMinutes());
		}

		if (self.maxDateHasTime && compareDates(self.latestSelectedDateObj, self.config.maxDate) === 0) {
			hours = Math.min(hours, self.config.maxDate.getHours());
			if (hours === self.config.maxDate.getHours()) minutes = Math.min(minutes, self.config.maxDate.getMinutes());
		}

		setHours(hours, minutes, seconds);
	}

	/**
  * Syncs time input values with a date
  * @param {Date} dateObj the date to sync with
  */
	function setHoursFromDate(dateObj) {
		var date = dateObj || self.latestSelectedDateObj;

		if (date) setHours(date.getHours(), date.getMinutes(), date.getSeconds());
	}

	/**
  * Sets the hours, minutes, and optionally seconds
  * of the latest selected date object and the
  * corresponding time inputs
  * @param {Number} hours the hour. whether its military
  *                 or am-pm gets inferred from config
  * @param {Number} minutes the minutes
  * @param {Number} seconds the seconds (optional)
  */
	function setHours(hours, minutes, seconds) {
		if (self.selectedDates.length) {
			self.latestSelectedDateObj.setHours(hours % 24, minutes, seconds || 0, 0);
		}

		if (!self.config.enableTime || self.isMobile) return;

		self.hourElement.value = self.pad(!self.config.time_24hr ? (12 + hours) % 12 + 12 * (hours % 12 === 0) : hours);

		self.minuteElement.value = self.pad(minutes);

		if (!self.config.time_24hr) self.amPM.textContent = hours >= 12 ? "PM" : "AM";

		if (self.config.enableSeconds === true) self.secondElement.value = self.pad(seconds);
	}

	/**
  * Handles the year input and incrementing events
  * @param {Event} event the keyup or increment event
  */
	function onYearInput(event) {
		var year = event.target.value;
		if (event.delta) year = (parseInt(year) + event.delta).toString();

		if (year.length === 4 || event.key === "Enter") {
			self.currentYearElement.blur();
			if (!/[^\d]/.test(year)) changeYear(year);
		}
	}

	/**
  * Essentially addEventListener + tracking
  * @param {Element} element the element to addEventListener to
  * @param {String} event the event name
  * @param {Function} handler the event handler
  */
	function bind(element, event, handler) {
		if (event instanceof Array) return event.forEach(function (ev) {
			return bind(element, ev, handler);
		});

		if (element instanceof Array) return element.forEach(function (el) {
			return bind(el, event, handler);
		});

		element.addEventListener(event, handler);
		self._handlers.push({ element: element, event: event, handler: handler });
	}

	/**
  * A mousedown handler which mimics click.
  * Minimizes latency, since we don't need to wait for mouseup in most cases.
  * Also, avoids handling right clicks.
  *
  * @param {Function} handler the event handler
  */
	function onClick(handler) {
		return function (evt) {
			return evt.which === 1 && handler(evt);
		};
	}

	/**
  * Adds all the necessary event listeners
  */
	function bindEvents() {
		self._handlers = [];
		self._animationLoop = [];
		if (self.config.wrap) {
			["open", "close", "toggle", "clear"].forEach(function (evt) {
				Array.prototype.forEach.call(self.element.querySelectorAll("[data-" + evt + "]"), function (el) {
					return bind(el, "mousedown", onClick(self[evt]));
				});
			});
		}

		if (self.isMobile) return setupMobile();

		self.debouncedResize = debounce(onResize, 50);
		self.triggerChange = function () {
			triggerEvent("Change");
		};
		self.debouncedChange = debounce(self.triggerChange, 300);

		if (self.config.mode === "range" && self.daysContainer) bind(self.daysContainer, "mouseover", function (e) {
			return onMouseOver(e.target);
		});

		bind(window.document.body, "keydown", onKeyDown);

		if (!self.config.static) bind(self._input, "keydown", onKeyDown);

		if (!self.config.inline && !self.config.static) bind(window, "resize", self.debouncedResize);

		if (window.ontouchstart !== undefined) bind(window.document, "touchstart", documentClick);

		bind(window.document, "mousedown", onClick(documentClick));
		bind(self._input, "blur", documentClick);

		if (self.config.clickOpens === true) {
			bind(self._input, "focus", self.open);
			bind(self._input, "mousedown", onClick(self.open));
		}

		if (!self.config.noCalendar) {
			self.monthNav.addEventListener("wheel", function (e) {
				return e.preventDefault();
			});
			bind(self.monthNav, "wheel", debounce(onMonthNavScroll, 10));
			bind(self.monthNav, "mousedown", onClick(onMonthNavClick));

			bind(self.monthNav, ["keyup", "increment"], onYearInput);
			bind(self.daysContainer, "mousedown", onClick(selectDate));

			if (self.config.animate) {
				bind(self.daysContainer, ["webkitAnimationEnd", "animationend"], animateDays);
				bind(self.monthNav, ["webkitAnimationEnd", "animationend"], animateMonths);
			}
		}

		if (self.config.enableTime) {
			var selText = function selText(e) {
				return e.target.select();
			};
			bind(self.timeContainer, ["wheel", "input", "increment"], updateTime);
			bind(self.timeContainer, "mousedown", onClick(timeIncrement));

			bind(self.timeContainer, ["wheel", "increment"], self.debouncedChange);
			bind(self.timeContainer, "input", self.triggerChange);

			bind([self.hourElement, self.minuteElement], "focus", selText);

			if (self.secondElement !== undefined) bind(self.secondElement, "focus", function () {
				return self.secondElement.select();
			});

			if (self.amPM !== undefined) {
				bind(self.amPM, "mousedown", onClick(function (e) {
					updateTime(e);
					self.triggerChange(e);
				}));
			}
		}
	}

	function processPostDayAnimation() {
		for (var i = self._animationLoop.length; i--;) {
			self._animationLoop[i]();
			self._animationLoop.splice(i, 1);
		}
	}

	/**
  * Removes the day container that slided out of view
  * @param {Event} e the animation event
  */
	function animateDays(e) {
		if (self.daysContainer.childNodes.length > 1) {
			switch (e.animationName) {
				case "fpSlideLeft":
					self.daysContainer.lastChild.classList.remove("slideLeftNew");
					self.daysContainer.removeChild(self.daysContainer.firstChild);
					self.days = self.daysContainer.firstChild;
					processPostDayAnimation();

					break;

				case "fpSlideRight":
					self.daysContainer.firstChild.classList.remove("slideRightNew");
					self.daysContainer.removeChild(self.daysContainer.lastChild);
					self.days = self.daysContainer.firstChild;
					processPostDayAnimation();

					break;

				default:
					break;
			}
		}
	}

	/**
  * Removes the month element that animated out of view
  * @param {Event} e the animation event
  */
	function animateMonths(e) {
		switch (e.animationName) {
			case "fpSlideLeftNew":
			case "fpSlideRightNew":
				self.navigationCurrentMonth.classList.remove("slideLeftNew");
				self.navigationCurrentMonth.classList.remove("slideRightNew");
				var nav = self.navigationCurrentMonth;

				while (nav.nextSibling && /curr/.test(nav.nextSibling.className)) {
					self.monthNav.removeChild(nav.nextSibling);
				}while (nav.previousSibling && /curr/.test(nav.previousSibling.className)) {
					self.monthNav.removeChild(nav.previousSibling);
				}self.oldCurMonth = null;
				break;
		}
	}

	/**
  * Set the calendar view to a particular date.
  * @param {Date} jumpDate the date to set the view to
  */
	function jumpToDate(jumpDate) {
		jumpDate = jumpDate ? self.parseDate(jumpDate) : self.latestSelectedDateObj || (self.config.minDate > self.now ? self.config.minDate : self.config.maxDate && self.config.maxDate < self.now ? self.config.maxDate : self.now);

		try {
			self.currentYear = jumpDate.getFullYear();
			self.currentMonth = jumpDate.getMonth();
		} catch (e) {
			/* istanbul ignore next */
			console.error(e.stack);
			/* istanbul ignore next */
			console.warn("Invalid date supplied: " + jumpDate);
		}

		self.redraw();
	}

	/**
  * The up/down arrow handler for time inputs
  * @param {Event} e the click event
  */
	function timeIncrement(e) {
		if (~e.target.className.indexOf("arrow")) incrementNumInput(e, e.target.classList.contains("arrowUp") ? 1 : -1);
	}

	/**
  * Increments/decrements the value of input associ-
  * ated with the up/down arrow by dispatching an
  * "increment" event on the input.
  *
  * @param {Event} e the click event
  * @param {Number} delta the diff (usually 1 or -1)
  * @param {Element} inputElem the input element
  */
	function incrementNumInput(e, delta, inputElem) {
		var input = inputElem || e.target.parentNode.childNodes[0];
		var event = createEvent("increment");
		event.delta = delta;
		input.dispatchEvent(event);
	}

	function createNumberInput(inputClassName) {
		var wrapper = createElement("div", "numInputWrapper"),
		    numInput = createElement("input", "numInput " + inputClassName),
		    arrowUp = createElement("span", "arrowUp"),
		    arrowDown = createElement("span", "arrowDown");

		numInput.type = "text";
		numInput.pattern = "\\d*";

		wrapper.appendChild(numInput);
		wrapper.appendChild(arrowUp);
		wrapper.appendChild(arrowDown);

		return wrapper;
	}

	function build() {
		var fragment = window.document.createDocumentFragment();
		self.calendarContainer = createElement("div", "flatpickr-calendar");
		self.calendarContainer.tabIndex = -1;

		if (!self.config.noCalendar) {
			fragment.appendChild(buildMonthNav());
			self.innerContainer = createElement("div", "flatpickr-innerContainer");

			if (self.config.weekNumbers) self.innerContainer.appendChild(buildWeeks());

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

		if (self.config.enableTime) fragment.appendChild(buildTime());

		toggleClass(self.calendarContainer, "rangeMode", self.config.mode === "range");
		toggleClass(self.calendarContainer, "animate", self.config.animate);

		self.calendarContainer.appendChild(fragment);

		var customAppend = self.config.appendTo && self.config.appendTo.nodeType;

		if (self.config.inline || self.config.static) {
			self.calendarContainer.classList.add(self.config.inline ? "inline" : "static");

			if (self.config.inline && !customAppend) {
				return self.element.parentNode.insertBefore(self.calendarContainer, self._input.nextSibling);
			}

			if (self.config.static) {
				var wrapper = createElement("div", "flatpickr-wrapper");
				self.element.parentNode.insertBefore(wrapper, self.element);
				wrapper.appendChild(self.element);

				if (self.altInput) wrapper.appendChild(self.altInput);

				wrapper.appendChild(self.calendarContainer);
				return;
			}
		}

		(customAppend ? self.config.appendTo : window.document.body).appendChild(self.calendarContainer);
	}

	function createDay(className, date, dayNumber, i) {
		var dateIsEnabled = isEnabled(date, true),
		    dayElement = createElement("span", "flatpickr-day " + className, date.getDate());

		dayElement.dateObj = date;
		dayElement.$i = i;
		dayElement.setAttribute("aria-label", self.formatDate(date, self.config.ariaDateFormat));

		if (compareDates(date, self.now) === 0) {
			self.todayDateElem = dayElement;
			dayElement.classList.add("today");
		}

		if (dateIsEnabled) {
			dayElement.tabIndex = -1;
			if (isDateSelected(date)) {
				dayElement.classList.add("selected");
				self.selectedDateElem = dayElement;
				if (self.config.mode === "range") {
					toggleClass(dayElement, "startRange", compareDates(date, self.selectedDates[0]) === 0);

					toggleClass(dayElement, "endRange", compareDates(date, self.selectedDates[1]) === 0);
				}
			}
		} else {
			dayElement.classList.add("disabled");
			if (self.selectedDates[0] && date > self.minRangeDate && date < self.selectedDates[0]) self.minRangeDate = date;else if (self.selectedDates[0] && date < self.maxRangeDate && date > self.selectedDates[0]) self.maxRangeDate = date;
		}

		if (self.config.mode === "range") {
			if (isDateInRange(date) && !isDateSelected(date)) dayElement.classList.add("inRange");

			if (self.selectedDates.length === 1 && (date < self.minRangeDate || date > self.maxRangeDate)) dayElement.classList.add("notAllowed");
		}

		if (self.config.weekNumbers && className !== "prevMonthDay" && dayNumber % 7 === 1) {
			self.weekNumbers.insertAdjacentHTML("beforeend", "<span class='disabled flatpickr-day'>" + self.config.getWeek(date) + "</span>");
		}

		triggerEvent("DayCreate", dayElement);

		return dayElement;
	}

	function focusOnDay(currentIndex, offset) {
		var newIndex = currentIndex + offset || 0,
		    targetNode = currentIndex !== undefined ? self.days.childNodes[newIndex] : self.selectedDateElem || self.todayDateElem || self.days.childNodes[0],
		    focus = function focus() {
			targetNode = targetNode || self.days.childNodes[newIndex];
			targetNode.focus();

			if (self.config.mode === "range") onMouseOver(targetNode);
		};

		if (targetNode === undefined && offset !== 0) {
			if (offset > 0) {
				self.changeMonth(1);
				newIndex = newIndex % 42;
			} else if (offset < 0) {
				self.changeMonth(-1);
				newIndex += 42;
			}

			return afterDayAnim(focus);
		}

		focus();
	}

	function afterDayAnim(fn) {
		if (self.config.animate === true) return self._animationLoop.push(fn);
		fn();
	}

	function buildDays(delta) {
		var firstOfMonth = (new Date(self.currentYear, self.currentMonth, 1).getDay() - self.l10n.firstDayOfWeek + 7) % 7,
		    isRangeMode = self.config.mode === "range";

		self.prevMonthDays = self.utils.getDaysinMonth((self.currentMonth - 1 + 12) % 12);
		self.selectedDateElem = undefined;
		self.todayDateElem = undefined;

		var daysInMonth = self.utils.getDaysinMonth(),
		    days = window.document.createDocumentFragment();

		var dayNumber = self.prevMonthDays + 1 - firstOfMonth,
		    dayIndex = 0;

		if (self.config.weekNumbers && self.weekNumbers.firstChild) self.weekNumbers.textContent = "";

		if (isRangeMode) {
			// const dateLimits = self.config.enable.length || self.config.disable.length || self.config.mixDate || self.config.maxDate;
			self.minRangeDate = new Date(self.currentYear, self.currentMonth - 1, dayNumber);
			self.maxRangeDate = new Date(self.currentYear, self.currentMonth + 1, (42 - firstOfMonth) % daysInMonth);
		}

		// prepend days from the ending of previous month
		for (; dayNumber <= self.prevMonthDays; dayNumber++, dayIndex++) {
			days.appendChild(createDay("prevMonthDay", new Date(self.currentYear, self.currentMonth - 1, dayNumber), dayNumber, dayIndex));
		}

		// Start at 1 since there is no 0th day
		for (dayNumber = 1; dayNumber <= daysInMonth; dayNumber++, dayIndex++) {
			days.appendChild(createDay("", new Date(self.currentYear, self.currentMonth, dayNumber), dayNumber, dayIndex));
		}

		// append days from the next month
		for (var dayNum = daysInMonth + 1; dayNum <= 42 - firstOfMonth; dayNum++, dayIndex++) {
			days.appendChild(createDay("nextMonthDay", new Date(self.currentYear, self.currentMonth + 1, dayNum % daysInMonth), dayNum, dayIndex));
		}

		if (isRangeMode && self.selectedDates.length === 1 && days.childNodes[0]) {
			self._hidePrevMonthArrow = self._hidePrevMonthArrow || self.minRangeDate > days.childNodes[0].dateObj;

			self._hideNextMonthArrow = self._hideNextMonthArrow || self.maxRangeDate < new Date(self.currentYear, self.currentMonth + 1, 1);
		} else updateNavigationCurrentMonth();

		var dayContainer = createElement("div", "dayContainer");
		dayContainer.appendChild(days);

		if (!self.config.animate || delta === undefined) clearNode(self.daysContainer);else {
			while (self.daysContainer.childNodes.length > 1) {
				self.daysContainer.removeChild(self.daysContainer.firstChild);
			}
		}

		if (delta >= 0) self.daysContainer.appendChild(dayContainer);else self.daysContainer.insertBefore(dayContainer, self.daysContainer.firstChild);

		self.days = self.daysContainer.firstChild;
		return self.daysContainer;
	}

	function clearNode(node) {
		while (node.firstChild) {
			node.removeChild(node.firstChild);
		}
	}

	function buildMonthNav() {
		var monthNavFragment = window.document.createDocumentFragment();
		self.monthNav = createElement("div", "flatpickr-month");

		self.prevMonthNav = createElement("span", "flatpickr-prev-month");
		self.prevMonthNav.innerHTML = self.config.prevArrow;

		self.currentMonthElement = createElement("span", "cur-month");
		self.currentMonthElement.title = self.l10n.scrollTitle;

		var yearInput = createNumberInput("cur-year");
		self.currentYearElement = yearInput.childNodes[0];
		self.currentYearElement.title = self.l10n.scrollTitle;

		if (self.config.minDate) self.currentYearElement.min = self.config.minDate.getFullYear();

		if (self.config.maxDate) {
			self.currentYearElement.max = self.config.maxDate.getFullYear();

			self.currentYearElement.disabled = self.config.minDate && self.config.minDate.getFullYear() === self.config.maxDate.getFullYear();
		}

		self.nextMonthNav = createElement("span", "flatpickr-next-month");
		self.nextMonthNav.innerHTML = self.config.nextArrow;

		self.navigationCurrentMonth = createElement("span", "flatpickr-current-month");
		self.navigationCurrentMonth.appendChild(self.currentMonthElement);
		self.navigationCurrentMonth.appendChild(yearInput);

		monthNavFragment.appendChild(self.prevMonthNav);
		monthNavFragment.appendChild(self.navigationCurrentMonth);
		monthNavFragment.appendChild(self.nextMonthNav);
		self.monthNav.appendChild(monthNavFragment);

		Object.defineProperty(self, "_hidePrevMonthArrow", {
			get: function get() {
				return this.__hidePrevMonthArrow;
			},
			set: function set(bool) {
				if (this.__hidePrevMonthArrow !== bool) self.prevMonthNav.style.display = bool ? "none" : "block";
				this.__hidePrevMonthArrow = bool;
			}
		});

		Object.defineProperty(self, "_hideNextMonthArrow", {
			get: function get() {
				return this.__hideNextMonthArrow;
			},
			set: function set(bool) {
				if (this.__hideNextMonthArrow !== bool) self.nextMonthNav.style.display = bool ? "none" : "block";
				this.__hideNextMonthArrow = bool;
			}
		});

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
		self.hourElement = hourInput.childNodes[0];

		var minuteInput = createNumberInput("flatpickr-minute");
		self.minuteElement = minuteInput.childNodes[0];

		self.hourElement.tabIndex = self.minuteElement.tabIndex = -1;

		self.hourElement.value = self.pad(self.latestSelectedDateObj ? self.latestSelectedDateObj.getHours() : self.config.defaultHour % (self.time_24hr ? 24 : 12));

		self.minuteElement.value = self.pad(self.latestSelectedDateObj ? self.latestSelectedDateObj.getMinutes() : self.config.defaultMinute);

		self.hourElement.step = self.config.hourIncrement;
		self.minuteElement.step = self.config.minuteIncrement;

		self.hourElement.min = self.config.time_24hr ? 0 : 1;
		self.hourElement.max = self.config.time_24hr ? 23 : 12;

		self.minuteElement.min = 0;
		self.minuteElement.max = 59;

		self.hourElement.title = self.minuteElement.title = self.l10n.scrollTitle;

		self.timeContainer.appendChild(hourInput);
		self.timeContainer.appendChild(separator);
		self.timeContainer.appendChild(minuteInput);

		if (self.config.time_24hr) self.timeContainer.classList.add("time24hr");

		if (self.config.enableSeconds) {
			self.timeContainer.classList.add("hasSeconds");

			var secondInput = createNumberInput("flatpickr-second");
			self.secondElement = secondInput.childNodes[0];

			self.secondElement.value = self.pad(self.latestSelectedDateObj ? self.latestSelectedDateObj.getSeconds() : self.config.defaultSeconds);

			self.secondElement.step = self.minuteElement.step;
			self.secondElement.min = self.minuteElement.min;
			self.secondElement.max = self.minuteElement.max;

			self.timeContainer.appendChild(createElement("span", "flatpickr-time-separator", ":"));
			self.timeContainer.appendChild(secondInput);
		}

		if (!self.config.time_24hr) {
			// add self.amPM if appropriate
			self.amPM = createElement("span", "flatpickr-am-pm", ["AM", "PM"][(self.latestSelectedDateObj ? self.hourElement.value : self.config.defaultHour) > 11 | 0]);
			self.amPM.title = self.l10n.toggleTitle;
			self.amPM.tabIndex = -1;
			self.timeContainer.appendChild(self.amPM);
		}

		return self.timeContainer;
	}

	function buildWeekdays() {
		if (!self.weekdayContainer) self.weekdayContainer = createElement("div", "flatpickr-weekdays");

		var firstDayOfWeek = self.l10n.firstDayOfWeek;
		var weekdays = self.l10n.weekdays.shorthand.slice();

		if (firstDayOfWeek > 0 && firstDayOfWeek < weekdays.length) {
			weekdays = [].concat(weekdays.splice(firstDayOfWeek, weekdays.length), weekdays.splice(0, firstDayOfWeek));
		}

		self.weekdayContainer.innerHTML = "\n\t\t<span class=flatpickr-weekday>\n\t\t\t" + weekdays.join("</span><span class=flatpickr-weekday>") + "\n\t\t</span>\n\t\t";

		return self.weekdayContainer;
	}

	/* istanbul ignore next */
	function buildWeeks() {
		self.calendarContainer.classList.add("hasWeeks");
		self.weekWrapper = createElement("div", "flatpickr-weekwrapper");
		self.weekWrapper.appendChild(createElement("span", "flatpickr-weekday", self.l10n.weekAbbreviation));
		self.weekNumbers = createElement("div", "flatpickr-weeks");
		self.weekWrapper.appendChild(self.weekNumbers);

		return self.weekWrapper;
	}

	function changeMonth(value, is_offset, animate) {
		is_offset = is_offset === undefined || is_offset;
		var delta = is_offset ? value : value - self.currentMonth;
		var skipAnimations = !self.config.animate || animate === false;

		if (delta < 0 && self._hidePrevMonthArrow || delta > 0 && self._hideNextMonthArrow) return;

		self.currentMonth += delta;

		if (self.currentMonth < 0 || self.currentMonth > 11) {
			self.currentYear += self.currentMonth > 11 ? 1 : -1;
			self.currentMonth = (self.currentMonth + 12) % 12;

			triggerEvent("YearChange");
		}

		buildDays(!skipAnimations ? delta : undefined);

		if (skipAnimations) {
			triggerEvent("MonthChange");
			return updateNavigationCurrentMonth();
		}

		// remove possible remnants from clicking too fast
		var nav = self.navigationCurrentMonth;
		if (delta < 0) {
			while (nav.nextSibling && /curr/.test(nav.nextSibling.className)) {
				self.monthNav.removeChild(nav.nextSibling);
			}
		} else if (delta > 0) {
			while (nav.previousSibling && /curr/.test(nav.previousSibling.className)) {
				self.monthNav.removeChild(nav.previousSibling);
			}
		}

		self.oldCurMonth = self.navigationCurrentMonth;

		self.navigationCurrentMonth = self.monthNav.insertBefore(self.oldCurMonth.cloneNode(true), delta > 0 ? self.oldCurMonth.nextSibling : self.oldCurMonth);

		if (delta > 0) {
			self.daysContainer.firstChild.classList.add("slideLeft");
			self.daysContainer.lastChild.classList.add("slideLeftNew");

			self.oldCurMonth.classList.add("slideLeft");
			self.navigationCurrentMonth.classList.add("slideLeftNew");
		} else if (delta < 0) {
			self.daysContainer.firstChild.classList.add("slideRightNew");
			self.daysContainer.lastChild.classList.add("slideRight");

			self.oldCurMonth.classList.add("slideRight");
			self.navigationCurrentMonth.classList.add("slideRightNew");
		}

		self.currentMonthElement = self.navigationCurrentMonth.firstChild;
		self.currentYearElement = self.navigationCurrentMonth.lastChild.childNodes[0];

		updateNavigationCurrentMonth();
		self.oldCurMonth.firstChild.textContent = self.utils.monthToStr(self.currentMonth - delta);

		triggerEvent("MonthChange");

		if (document.activeElement && document.activeElement.$i) {
			var index = document.activeElement.$i;
			afterDayAnim(function () {
				focusOnDay(index, 0);
			});
		}
	}

	function clear(triggerChangeEvent) {
		self.input.value = "";

		if (self.altInput) self.altInput.value = "";

		if (self.mobileInput) self.mobileInput.value = "";

		self.selectedDates = [];
		self.latestSelectedDateObj = undefined;
		self.showTimeInput = false;

		self.redraw();

		if (triggerChangeEvent !== false)
			// triggerChangeEvent is true (default) or an Event
			triggerEvent("Change");
	}

	function close() {
		self.isOpen = false;

		if (!self.isMobile) {
			self.calendarContainer.classList.remove("open");
			self._input.classList.remove("active");
		}

		triggerEvent("Close");
	}

	function destroy() {
		if (self.config !== undefined) triggerEvent("Destroy");

		for (var i = self._handlers.length; i--;) {
			var h = self._handlers[i];
			h.element.removeEventListener(h.event, h.handler);
		}

		self._handlers = [];

		if (self.mobileInput) {
			if (self.mobileInput.parentNode) self.mobileInput.parentNode.removeChild(self.mobileInput);
			self.mobileInput = null;
		} else if (self.calendarContainer && self.calendarContainer.parentNode) self.calendarContainer.parentNode.removeChild(self.calendarContainer);

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
			} catch (e) {}
		});
	}

	function isCalendarElem(elem) {
		if (self.config.appendTo && self.config.appendTo.contains(elem)) return true;

		return self.calendarContainer.contains(elem);
	}

	function documentClick(e) {
		if (self.isOpen && !self.config.inline) {
			var isCalendarElement = isCalendarElem(e.target);
			var isInput = e.target === self.input || e.target === self.altInput || self.element.contains(e.target) ||
			// web components
			e.path && e.path.indexOf && (~e.path.indexOf(self.input) || ~e.path.indexOf(self.altInput));

			var lostFocus = e.type === "blur" ? isInput && e.relatedTarget && !isCalendarElem(e.relatedTarget) : !isInput && !isCalendarElement;

			if (lostFocus && self.config.ignoredFocusElements.indexOf(e.target) === -1) {
				self.close();

				if (self.config.mode === "range" && self.selectedDates.length === 1) {
					self.clear(false);
					self.redraw();
				}
			}
		}
	}

	function changeYear(newYear) {
		if (!newYear || self.currentYearElement.min && newYear < self.currentYearElement.min || self.currentYearElement.max && newYear > self.currentYearElement.max) return;

		var newYearNum = parseInt(newYear, 10),
		    isNewYear = self.currentYear !== newYearNum;

		self.currentYear = newYearNum || self.currentYear;

		if (self.config.maxDate && self.currentYear === self.config.maxDate.getFullYear()) {
			self.currentMonth = Math.min(self.config.maxDate.getMonth(), self.currentMonth);
		} else if (self.config.minDate && self.currentYear === self.config.minDate.getFullYear()) {
			self.currentMonth = Math.max(self.config.minDate.getMonth(), self.currentMonth);
		}

		if (isNewYear) {
			self.redraw();
			triggerEvent("YearChange");
		}
	}

	function isEnabled(date, timeless) {
		if (self.config.minDate && compareDates(date, self.config.minDate, timeless !== undefined ? timeless : !self.minDateHasTime) < 0 || self.config.maxDate && compareDates(date, self.config.maxDate, timeless !== undefined ? timeless : !self.maxDateHasTime) > 0) return false;

		if (!self.config.enable.length && !self.config.disable.length) return true;

		var dateToCheck = self.parseDate(date, null, true); // timeless

		var bool = self.config.enable.length > 0,
		    array = bool ? self.config.enable : self.config.disable;

		for (var i = 0, d; i < array.length; i++) {
			d = array[i];

			if (d instanceof Function && d(dateToCheck)) // disabled by function
				return bool;else if (d instanceof Date && d.getTime() === dateToCheck.getTime())
				// disabled by date
				return bool;else if (typeof d === "string" && self.parseDate(d, null, true).getTime() === dateToCheck.getTime())
				// disabled by date string
				return bool;else if ( // disabled by range
			(typeof d === "undefined" ? "undefined" : _typeof(d)) === "object" && d.from && d.to && dateToCheck >= d.from && dateToCheck <= d.to) return bool;
		}

		return !bool;
	}

	function onKeyDown(e) {
		var isInput = e.target === self._input;
		var calendarElem = isCalendarElem(e.target);
		var allowInput = self.config.allowInput;
		var allowKeydown = self.isOpen && (!allowInput || !isInput);
		var allowInlineKeydown = self.config.inline && isInput && !allowInput;

		if (e.key === "Enter" && allowInput && isInput) {
			self.setDate(self._input.value, true, e.target === self.altInput ? self.config.altFormat : self.config.dateFormat);
			return e.target.blur();
		} else if (calendarElem || allowKeydown || allowInlineKeydown) {
			var isTimeObj = self.timeContainer && self.timeContainer.contains(e.target);
			switch (e.key) {
				case "Enter":
					if (isTimeObj) updateValue();else selectDate(e);

					break;

				case "Escape":
					// escape
					e.preventDefault();
					self.close();
					break;

				case "Backspace":
				case "Delete":
					if (!self.config.allowInput) self.clear();
					break;

				case "ArrowLeft":
				case "ArrowRight":
					if (!isTimeObj) {
						e.preventDefault();

						if (self.daysContainer) {
							var _delta = e.key === "ArrowRight" ? 1 : -1;

							if (!e.ctrlKey) focusOnDay(e.target.$i, _delta);else changeMonth(_delta, true);
						} else if (self.config.enableTime && !isTimeObj) self.hourElement.focus();
					}

					break;

				case "ArrowUp":
				case "ArrowDown":
					e.preventDefault();
					var delta = e.key === "ArrowDown" ? 1 : -1;

					if (self.daysContainer) {
						if (e.ctrlKey) {
							changeYear(self.currentYear - delta);
							focusOnDay(e.target.$i, 0);
						} else if (!isTimeObj) focusOnDay(e.target.$i, delta * 7);
					} else if (self.config.enableTime) {
						if (!isTimeObj) self.hourElement.focus();
						updateTime(e);
						self.debouncedChange();
					}

					break;

				case "Tab":
					if (e.target === self.hourElement) {
						e.preventDefault();
						self.minuteElement.select();
					} else if (e.target === self.minuteElement && (self.secondElement || self.amPM)) {
						e.preventDefault();
						(self.secondElement || self.amPM).focus();
					} else if (e.target === self.secondElement) {
						e.preventDefault();
						self.amPM.focus();
					}

					break;

				case "a":
					if (e.target === self.amPM) {
						self.amPM.textContent = "AM";
						setHoursFromInputs();
						updateValue();
					}
					break;

				case "p":
					if (e.target === self.amPM) {
						self.amPM.textContent = "PM";
						setHoursFromInputs();
						updateValue();
					}
					break;

				default:
					break;

			}

			triggerEvent("KeyDown", e);
		}
	}

	function onMouseOver(elem) {
		if (self.selectedDates.length !== 1 || !elem.classList.contains("flatpickr-day")) return;

		var hoverDate = elem.dateObj,
		    initialDate = self.parseDate(self.selectedDates[0], null, true),
		    rangeStartDate = Math.min(hoverDate.getTime(), self.selectedDates[0].getTime()),
		    rangeEndDate = Math.max(hoverDate.getTime(), self.selectedDates[0].getTime()),
		    containsDisabled = false;

		for (var t = rangeStartDate; t < rangeEndDate; t += self.utils.duration.DAY) {
			if (!isEnabled(new Date(t))) {
				containsDisabled = true;
				break;
			}
		}

		var _loop = function _loop(timestamp, i) {
			var outOfRange = timestamp < self.minRangeDate.getTime() || timestamp > self.maxRangeDate.getTime(),
			    dayElem = self.days.childNodes[i];

			if (outOfRange) {
				self.days.childNodes[i].classList.add("notAllowed");
				["inRange", "startRange", "endRange"].forEach(function (c) {
					dayElem.classList.remove(c);
				});
				return "continue";
			} else if (containsDisabled && !outOfRange) return "continue";

			["startRange", "inRange", "endRange", "notAllowed"].forEach(function (c) {
				dayElem.classList.remove(c);
			});

			var minRangeDate = Math.max(self.minRangeDate.getTime(), rangeStartDate),
			    maxRangeDate = Math.min(self.maxRangeDate.getTime(), rangeEndDate);

			elem.classList.add(hoverDate < self.selectedDates[0] ? "startRange" : "endRange");

			if (initialDate < hoverDate && timestamp === initialDate.getTime()) dayElem.classList.add("startRange");else if (initialDate > hoverDate && timestamp === initialDate.getTime()) dayElem.classList.add("endRange");

			if (timestamp >= minRangeDate && timestamp <= maxRangeDate) dayElem.classList.add("inRange");
		};

		for (var timestamp = self.days.childNodes[0].dateObj.getTime(), i = 0; i < 42; i++, timestamp += self.utils.duration.DAY) {
			var _ret = _loop(timestamp, i);

			if (_ret === "continue") continue;
		}
	}

	function onResize() {
		if (self.isOpen && !self.config.static && !self.config.inline) positionCalendar();
	}

	function open(e, positionElement) {
		if (self.isMobile) {
			if (e) {
				e.preventDefault();
				e.target.blur();
			}

			setTimeout(function () {
				self.mobileInput.click();
			}, 0);

			triggerEvent("Open");
			return;
		}

		if (self.isOpen || self._input.disabled || self.config.inline) return;

		self.isOpen = true;
		self.calendarContainer.classList.add("open");
		positionCalendar(positionElement);
		self._input.classList.add("active");

		triggerEvent("Open");
	}

	function minMaxDateSetter(type) {
		return function (date) {
			var dateObj = self.config["_" + type + "Date"] = self.parseDate(date);

			var inverseDateObj = self.config["_" + (type === "min" ? "max" : "min") + "Date"];
			var isValidDate = date && dateObj instanceof Date;

			if (isValidDate) {
				self[type + "DateHasTime"] = dateObj.getHours() || dateObj.getMinutes() || dateObj.getSeconds();
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

				if (isValidDate) self.currentYearElement[type] = dateObj.getFullYear();else self.currentYearElement.removeAttribute(type);

				self.currentYearElement.disabled = inverseDateObj && dateObj && inverseDateObj.getFullYear() === dateObj.getFullYear();
			}
		};
	}

	function parseConfig() {
		var boolOpts = ["wrap", "weekNumbers", "allowInput", "clickOpens", "time_24hr", "enableTime", "noCalendar", "altInput", "shorthandCurrentMonth", "inline", "static", "enableSeconds", "disableMobile"];

		var hooks = ["onChange", "onClose", "onDayCreate", "onDestroy", "onKeyDown", "onMonthChange", "onOpen", "onParseConfig", "onReady", "onValueUpdate", "onYearChange"];

		self.config = Object.create(flatpickr.defaultConfig);

		var userConfig = _extends({}, self.instanceConfig, JSON.parse(JSON.stringify(self.element.dataset || {})));

		self.config.parseDate = userConfig.parseDate;
		self.config.formatDate = userConfig.formatDate;

		Object.defineProperty(self.config, "enable", {
			get: function get() {
				return self.config._enable || [];
			},
			set: function set(dates) {
				return self.config._enable = parseDateRules(dates);
			}
		});

		Object.defineProperty(self.config, "disable", {
			get: function get() {
				return self.config._disable || [];
			},
			set: function set(dates) {
				return self.config._disable = parseDateRules(dates);
			}
		});

		_extends(self.config, userConfig);

		if (!userConfig.dateFormat && userConfig.enableTime) {
			self.config.dateFormat = self.config.noCalendar ? "H:i" + (self.config.enableSeconds ? ":S" : "") : flatpickr.defaultConfig.dateFormat + " H:i" + (self.config.enableSeconds ? ":S" : "");
		}

		if (userConfig.altInput && userConfig.enableTime && !userConfig.altFormat) {
			self.config.altFormat = self.config.noCalendar ? "h:i" + (self.config.enableSeconds ? ":S K" : " K") : flatpickr.defaultConfig.altFormat + (" h:i" + (self.config.enableSeconds ? ":S" : "") + " K");
		}

		Object.defineProperty(self.config, "minDate", {
			get: function get() {
				return this._minDate;
			},
			set: minMaxDateSetter("min")
		});

		Object.defineProperty(self.config, "maxDate", {
			get: function get() {
				return this._maxDate;
			},
			set: minMaxDateSetter("max")
		});

		self.config.minDate = userConfig.minDate;
		self.config.maxDate = userConfig.maxDate;

		for (var i = 0; i < boolOpts.length; i++) {
			self.config[boolOpts[i]] = self.config[boolOpts[i]] === true || self.config[boolOpts[i]] === "true";
		}for (var _i = hooks.length; _i--;) {
			if (self.config[hooks[_i]] !== undefined) {
				self.config[hooks[_i]] = arrayify(self.config[hooks[_i]] || []).map(bindToInstance);
			}
		}

		for (var _i2 = 0; _i2 < self.config.plugins.length; _i2++) {
			var pluginConf = self.config.plugins[_i2](self) || {};
			for (var key in pluginConf) {

				if (self.config[key] instanceof Array || ~hooks.indexOf(key)) {
					self.config[key] = arrayify(pluginConf[key]).map(bindToInstance).concat(self.config[key]);
				} else if (typeof userConfig[key] === "undefined") self.config[key] = pluginConf[key];
			}
		}

		triggerEvent("ParseConfig");
	}

	function setupLocale() {
		if (_typeof(self.config.locale) !== "object" && typeof flatpickr.l10ns[self.config.locale] === "undefined") console.warn("flatpickr: invalid locale " + self.config.locale);

		self.l10n = _extends(Object.create(flatpickr.l10ns.default), _typeof(self.config.locale) === "object" ? self.config.locale : self.config.locale !== "default" ? flatpickr.l10ns[self.config.locale] || {} : {});
	}

	function positionCalendar() {
		var positionElement = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : self._positionElement;

		if (self.calendarContainer === undefined) return;

		var calendarHeight = self.calendarContainer.offsetHeight,
		    calendarWidth = self.calendarContainer.offsetWidth,
		    configPos = self.config.position,
		    inputBounds = positionElement.getBoundingClientRect(),
		    distanceFromBottom = window.innerHeight - inputBounds.bottom,
		    showOnTop = configPos === "above" || configPos !== "below" && distanceFromBottom < calendarHeight && inputBounds.top > calendarHeight;

		var top = window.pageYOffset + inputBounds.top + (!showOnTop ? positionElement.offsetHeight + 2 : -calendarHeight - 2);

		toggleClass(self.calendarContainer, "arrowTop", !showOnTop);
		toggleClass(self.calendarContainer, "arrowBottom", showOnTop);

		if (self.config.inline) return;

		var left = window.pageXOffset + inputBounds.left;
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

		buildWeekdays();
		updateNavigationCurrentMonth();
		buildDays();
	}

	function selectDate(e) {
		e.preventDefault();
		e.stopPropagation();

		if (!e.target.classList.contains("flatpickr-day") || e.target.classList.contains("disabled") || e.target.classList.contains("notAllowed")) return;

		var selectedDate = self.latestSelectedDateObj = new Date(e.target.dateObj.getTime());

		var shouldChangeMonth = selectedDate.getMonth() !== self.currentMonth && self.config.mode !== "range";

		self.selectedDateElem = e.target;

		if (self.config.mode === "single") self.selectedDates = [selectedDate];else if (self.config.mode === "multiple") {
			var selectedIndex = isDateSelected(selectedDate);
			if (selectedIndex) self.selectedDates.splice(selectedIndex, 1);else self.selectedDates.push(selectedDate);
		} else if (self.config.mode === "range") {
			if (self.selectedDates.length === 2) self.clear();

			self.selectedDates.push(selectedDate);

			// unless selecting same date twice, sort ascendingly
			if (compareDates(selectedDate, self.selectedDates[0], true) !== 0) self.selectedDates.sort(function (a, b) {
				return a.getTime() - b.getTime();
			});
		}

		setHoursFromInputs();

		if (shouldChangeMonth) {
			var isNewYear = self.currentYear !== selectedDate.getFullYear();
			self.currentYear = selectedDate.getFullYear();
			self.currentMonth = selectedDate.getMonth();

			if (isNewYear) triggerEvent("YearChange");

			triggerEvent("MonthChange");
		}

		buildDays();

		if (self.minDateHasTime && self.config.enableTime && compareDates(selectedDate, self.config.minDate) === 0) setHoursFromDate(self.config.minDate);

		updateValue();

		if (self.config.enableTime) setTimeout(function () {
			return self.showTimeInput = true;
		}, 50);

		if (self.config.mode === "range") {
			if (self.selectedDates.length === 1) {
				onMouseOver(e.target);

				self._hidePrevMonthArrow = self._hidePrevMonthArrow || self.minRangeDate > self.days.childNodes[0].dateObj;

				self._hideNextMonthArrow = self._hideNextMonthArrow || self.maxRangeDate < new Date(self.currentYear, self.currentMonth + 1, 1);
			} else updateNavigationCurrentMonth();
		}

		triggerEvent("Change");

		// maintain focus
		if (!shouldChangeMonth) focusOnDay(e.target.$i, 0);else afterDayAnim(function () {
			return self.selectedDateElem && self.selectedDateElem.focus();
		});

		if (self.config.enableTime) setTimeout(function () {
			return self.hourElement.select();
		}, 451);

		if (self.config.closeOnSelect) {
			var single = self.config.mode === "single" && !self.config.enableTime;
			var range = self.config.mode === "range" && self.selectedDates.length === 2 && !self.config.enableTime;

			if (single || range) self.close();
		}
	}

	function set(option, value) {
		if (option !== null && (typeof option === "undefined" ? "undefined" : _typeof(option)) === "object") _extends(self.config, option);else self.config[option] = value;

		self.redraw();
		jumpToDate();
	}

	function setSelectedDate(inputDate, format) {
		if (inputDate instanceof Array) self.selectedDates = inputDate.map(function (d) {
			return self.parseDate(d, format);
		});else if (inputDate instanceof Date || !isNaN(inputDate)) self.selectedDates = [self.parseDate(inputDate, format)];else if (inputDate && inputDate.substring) {
			switch (self.config.mode) {
				case "single":
					self.selectedDates = [self.parseDate(inputDate, format)];
					break;

				case "multiple":
					self.selectedDates = inputDate.split("; ").map(function (date) {
						return self.parseDate(date, format);
					});
					break;

				case "range":
					self.selectedDates = inputDate.split(self.l10n.rangeSeparator).map(function (date) {
						return self.parseDate(date, format);
					});

					break;

				default:
					break;
			}
		}

		self.selectedDates = self.selectedDates.filter(function (d) {
			return d instanceof Date && isEnabled(d, false);
		});

		self.selectedDates.sort(function (a, b) {
			return a.getTime() - b.getTime();
		});
	}

	function setDate(date, triggerChange, format) {
		if (date !== 0 && !date) return self.clear(triggerChange);

		setSelectedDate(date, format);

		self.showTimeInput = self.selectedDates.length > 0;
		self.latestSelectedDateObj = self.selectedDates[0];

		self.redraw();
		jumpToDate();

		setHoursFromDate();
		updateValue(triggerChange);

		if (triggerChange) triggerEvent("Change");
	}

	function parseDateRules(arr) {
		for (var i = arr.length; i--;) {
			if (typeof arr[i] === "string" || +arr[i]) arr[i] = self.parseDate(arr[i], null, true);else if (arr[i] && arr[i].from && arr[i].to) {
				arr[i].from = self.parseDate(arr[i].from);
				arr[i].to = self.parseDate(arr[i].to);
			}
		}

		return arr.filter(function (x) {
			return x;
		}); // remove falsy values
	}

	function setupDates() {
		self.selectedDates = [];
		self.now = new Date();

		var preloadedDate = self.config.defaultDate || self.input.value;
		if (preloadedDate) setSelectedDate(preloadedDate, self.config.dateFormat);

		var initialDate = self.selectedDates.length ? self.selectedDates[0] : self.config.minDate && self.config.minDate.getTime() > self.now ? self.config.minDate : self.config.maxDate && self.config.maxDate.getTime() < self.now ? self.config.maxDate : self.now;

		self.currentYear = initialDate.getFullYear();
		self.currentMonth = initialDate.getMonth();

		if (self.selectedDates.length) self.latestSelectedDateObj = self.selectedDates[0];

		self.minDateHasTime = self.config.minDate && (self.config.minDate.getHours() || self.config.minDate.getMinutes() || self.config.minDate.getSeconds());

		self.maxDateHasTime = self.config.maxDate && (self.config.maxDate.getHours() || self.config.maxDate.getMinutes() || self.config.maxDate.getSeconds());

		Object.defineProperty(self, "latestSelectedDateObj", {
			get: function get() {
				return self._selectedDateObj || self.selectedDates[self.selectedDates.length - 1];
			},
			set: function set(date) {
				self._selectedDateObj = date;
			}
		});

		if (!self.isMobile) {
			Object.defineProperty(self, "showTimeInput", {
				get: function get() {
					return self._showTimeInput;
				},
				set: function set(bool) {
					self._showTimeInput = bool;
					if (self.calendarContainer) toggleClass(self.calendarContainer, "showTimeInput", bool);
					positionCalendar();
				}
			});
		}
	}

	function setupHelperFunctions() {
		self.utils = {
			duration: {
				DAY: 86400000
			},
			getDaysinMonth: function getDaysinMonth(month, yr) {
				month = typeof month === "undefined" ? self.currentMonth : month;

				yr = typeof yr === "undefined" ? self.currentYear : yr;

				if (month === 1 && (yr % 4 === 0 && yr % 100 !== 0 || yr % 400 === 0)) return 29;

				return self.l10n.daysInMonth[month];
			},
			monthToStr: function monthToStr(monthNumber, shorthand) {
				shorthand = typeof shorthand === "undefined" ? self.config.shorthandCurrentMonth : shorthand;

				return self.l10n.months[(shorthand ? "short" : "long") + "hand"][monthNumber];
			}
		};
	}

	/* istanbul ignore next */
	function setupFormats() {
		self.formats = Object.create(FlatpickrInstance.prototype.formats);
		["D", "F", "J", "M", "W", "l"].forEach(function (f) {
			self.formats[f] = FlatpickrInstance.prototype.formats[f].bind(self);
		});

		self.revFormat.F = FlatpickrInstance.prototype.revFormat.F.bind(self);
		self.revFormat.M = FlatpickrInstance.prototype.revFormat.M.bind(self);
	}

	function setupInputs() {
		self.input = self.config.wrap ? self.element.querySelector("[data-input]") : self.element;

		/* istanbul ignore next */
		if (!self.input) return console.warn("Error: invalid input element specified", self.input);

		self.input._type = self.input.type;
		self.input.type = "text";

		self.input.classList.add("flatpickr-input");
		self._input = self.input;

		if (self.config.altInput) {
			// replicate self.element
			self.altInput = createElement(self.input.nodeName, self.input.className + " " + self.config.altInputClass);
			self._input = self.altInput;
			self.altInput.placeholder = self.input.placeholder;
			self.altInput.disabled = self.input.disabled;
			self.altInput.required = self.input.required;
			self.altInput.type = "text";
			self.input.type = "hidden";

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
		self.mobileInput.placeholder = self.input.placeholder;

		self.mobileFormatStr = inputType === "datetime-local" ? "Y-m-d\\TH:i:S" : inputType === "date" ? "Y-m-d" : "H:i:S";

		if (self.selectedDates.length) {
			self.mobileInput.defaultValue = self.mobileInput.value = self.formatDate(self.selectedDates[0], self.mobileFormatStr);
		}

		if (self.config.minDate) self.mobileInput.min = self.formatDate(self.config.minDate, "Y-m-d");

		if (self.config.maxDate) self.mobileInput.max = self.formatDate(self.config.maxDate, "Y-m-d");

		self.input.type = "hidden";
		if (self.config.altInput) self.altInput.type = "hidden";

		try {
			self.input.parentNode.insertBefore(self.mobileInput, self.input.nextSibling);
		} catch (e) {
			//
		}

		self.mobileInput.addEventListener("change", function (e) {
			self.setDate(e.target.value, false, self.mobileFormatStr);
			triggerEvent("Change");
			triggerEvent("Close");
		});
	}

	function toggle() {
		if (self.isOpen) return self.close();
		self.open();
	}

	function triggerEvent(event, data) {
		var hooks = self.config["on" + event];

		if (hooks !== undefined && hooks.length > 0) {
			for (var i = 0; hooks[i] && i < hooks.length; i++) {
				hooks[i](self.selectedDates, self.input.value, self, data);
			}
		}

		if (event === "Change") {
			self.input.dispatchEvent(createEvent("change"));

			// many front-end frameworks bind to the input event
			self.input.dispatchEvent(createEvent("input"));
		}
	}

	/**
  * Creates an Event, normalized across browsers
  * @param {String} name the event name, e.g. "click"
  * @return {Event} the created event
  */
	function createEvent(name) {
		if (self._supportsEvents) return new Event(name, { bubbles: true });

		self._[name + "Event"] = document.createEvent("Event");
		self._[name + "Event"].initEvent(name, true, true);
		return self._[name + "Event"];
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

		self.currentMonthElement.textContent = self.utils.monthToStr(self.currentMonth) + " ";
		self.currentYearElement.value = self.currentYear;

		self._hidePrevMonthArrow = self.config.minDate && (self.currentYear === self.config.minDate.getFullYear() ? self.currentMonth <= self.config.minDate.getMonth() : self.currentYear < self.config.minDate.getFullYear());

		self._hideNextMonthArrow = self.config.maxDate && (self.currentYear === self.config.maxDate.getFullYear() ? self.currentMonth + 1 > self.config.maxDate.getMonth() : self.currentYear > self.config.maxDate.getFullYear());
	}

	/**
  * Updates the values of inputs associated with the calendar
  * @return {void}
  */
	function updateValue(triggerChange) {
		if (!self.selectedDates.length) return self.clear(triggerChange);

		if (self.isMobile) {
			self.mobileInput.value = self.selectedDates.length ? self.formatDate(self.latestSelectedDateObj, self.mobileFormatStr) : "";
		}

		var joinChar = self.config.mode !== "range" ? "; " : self.l10n.rangeSeparator;

		self.input.value = self.selectedDates.map(function (dObj) {
			return self.formatDate(dObj, self.config.dateFormat);
		}).join(joinChar);

		if (self.config.altInput) {
			self.altInput.value = self.selectedDates.map(function (dObj) {
				return self.formatDate(dObj, self.config.altFormat);
			}).join(joinChar);
		}

		if (triggerChange !== false) triggerEvent("ValueUpdate");
	}

	function mouseDelta(e) {
		return Math.max(-1, Math.min(1, e.wheelDelta || -e.deltaY));
	}

	function onMonthNavScroll(e) {
		e.preventDefault();
		var isYear = self.currentYearElement.parentNode.contains(e.target);

		if (e.target === self.currentMonthElement || isYear) {

			var delta = mouseDelta(e);

			if (isYear) {
				changeYear(self.currentYear + delta);
				e.target.value = self.currentYear;
			} else self.changeMonth(delta, true, false);
		}
	}

	function onMonthNavClick(e) {
		var isPrevMonth = self.prevMonthNav.contains(e.target);
		var isNextMonth = self.nextMonthNav.contains(e.target);

		if (isPrevMonth || isNextMonth) changeMonth(isPrevMonth ? -1 : 1);else if (e.target === self.currentYearElement) {
			e.preventDefault();
			self.currentYearElement.select();
		} else if (e.target.className === "arrowUp") self.changeYear(self.currentYear + 1);else if (e.target.className === "arrowDown") self.changeYear(self.currentYear - 1);
	}

	/**
  * Creates an HTMLElement with given tag, class, and textual content
  * @param {String} tag the HTML tag
  * @param {String} className the new element's class name
  * @param {String} content The new element's text content
  * @return {HTMLElement} the created HTML element
  */
	function createElement(tag, className, content) {
		var e = window.document.createElement(tag);
		className = className || "";
		content = content || "";

		e.className = className;

		if (content !== undefined) e.textContent = content;

		return e;
	}

	function arrayify(obj) {
		if (obj instanceof Array) return obj;
		return [obj];
	}

	function toggleClass(elem, className, bool) {
		if (bool) return elem.classList.add(className);
		elem.classList.remove(className);
	}

	/* istanbul ignore next */
	function debounce(func, wait, immediate) {
		var timeout = void 0;
		return function () {
			var context = this,
			    args = arguments;
			clearTimeout(timeout);
			timeout = setTimeout(function () {
				timeout = null;
				if (!immediate) func.apply(context, args);
			}, wait);
			if (immediate && !timeout) func.apply(context, args);
		};
	}

	/**
  * Compute the difference in dates, measured in ms
  * @param {Date} date1
  * @param {Date} date2
  * @param {Boolean} timeless whether to reset times of both dates to 00:00
  * @return {Number} the difference in ms
  */
	function compareDates(date1, date2, timeless) {
		if (!(date1 instanceof Date) || !(date2 instanceof Date)) return false;

		if (timeless !== false) {
			return new Date(date1.getTime()).setHours(0, 0, 0, 0) - new Date(date2.getTime()).setHours(0, 0, 0, 0);
		}

		return date1.getTime() - date2.getTime();
	}

	function timeWrapper(e) {
		e.preventDefault();

		var isKeyDown = e.type === "keydown",
		    isWheel = e.type === "wheel",
		    isIncrement = e.type === "increment",
		    input = e.target;

		if (self.amPM && e.target === self.amPM) return e.target.textContent = ["AM", "PM"][e.target.textContent === "AM" | 0];

		var min = Number(input.min),
		    max = Number(input.max),
		    step = Number(input.step),
		    curValue = parseInt(input.value, 10),
		    delta = e.delta || (!isKeyDown ? Math.max(-1, Math.min(1, e.wheelDelta || -e.deltaY)) || 0 : e.which === 38 ? 1 : -1);

		var newValue = curValue + step * delta;

		if (typeof input.value !== "undefined" && input.value.length === 2) {
			var isHourElem = input === self.hourElement,
			    isMinuteElem = input === self.minuteElement;

			if (newValue < min) {
				newValue = max + newValue + !isHourElem + (isHourElem && !self.amPM);

				if (isMinuteElem) incrementNumInput(null, -1, self.hourElement);
			} else if (newValue > max) {
				newValue = input === self.hourElement ? newValue - max - !self.amPM : min;

				if (isMinuteElem) incrementNumInput(null, 1, self.hourElement);
			}

			if (self.amPM && isHourElem && (step === 1 ? newValue + curValue === 23 : Math.abs(newValue - curValue) > step)) self.amPM.textContent = self.amPM.textContent === "PM" ? "AM" : "PM";

			input.value = self.pad(newValue);
		}
	}

	init();
	return self;
}

FlatpickrInstance.prototype = {
	formats: {
		// get the date in UTC
		Z: function Z(date) {
			return date.toISOString();
		},

		// weekday name, short, e.g. Thu
		D: function D(date) {
			return this.l10n.weekdays.shorthand[this.formats.w(date)];
		},

		// full month name e.g. January
		F: function F(date) {
			return this.utils.monthToStr(this.formats.n(date) - 1, false);
		},

		// padded hour 1-12
		G: function G(date) {
			return FlatpickrInstance.prototype.pad(FlatpickrInstance.prototype.formats.h(date));
		},

		// hours with leading zero e.g. 03
		H: function H(date) {
			return FlatpickrInstance.prototype.pad(date.getHours());
		},

		// day (1-30) with ordinal suffix e.g. 1st, 2nd
		J: function J(date) {
			return date.getDate() + this.l10n.ordinal(date.getDate());
		},

		// AM/PM
		K: function K(date) {
			return date.getHours() > 11 ? "PM" : "AM";
		},

		// shorthand month e.g. Jan, Sep, Oct, etc
		M: function M(date) {
			return this.utils.monthToStr(date.getMonth(), true);
		},

		// seconds 00-59
		S: function S(date) {
			return FlatpickrInstance.prototype.pad(date.getSeconds());
		},

		// unix timestamp
		U: function U(date) {
			return date.getTime() / 1000;
		},

		W: function W(date) {
			return this.config.getWeek(date);
		},

		// full year e.g. 2016
		Y: function Y(date) {
			return date.getFullYear();
		},

		// day in month, padded (01-30)
		d: function d(date) {
			return FlatpickrInstance.prototype.pad(date.getDate());
		},

		// hour from 1-12 (am/pm)
		h: function h(date) {
			return date.getHours() % 12 ? date.getHours() % 12 : 12;
		},

		// minutes, padded with leading zero e.g. 09
		i: function i(date) {
			return FlatpickrInstance.prototype.pad(date.getMinutes());
		},

		// day in month (1-30)
		j: function j(date) {
			return date.getDate();
		},

		// weekday name, full, e.g. Thursday
		l: function l(date) {
			return this.l10n.weekdays.longhand[date.getDay()];
		},

		// padded month number (01-12)
		m: function m(date) {
			return FlatpickrInstance.prototype.pad(date.getMonth() + 1);
		},

		// the month number (1-12)
		n: function n(date) {
			return date.getMonth() + 1;
		},

		// seconds 0-59
		s: function s(date) {
			return date.getSeconds();
		},

		// number of the day of the week
		w: function w(date) {
			return date.getDay();
		},

		// last two digits of year e.g. 16 for 2016
		y: function y(date) {
			return String(date.getFullYear()).substring(2);
		}
	},

	/**
  * Formats a given Date object into a string based on supplied format
  * @param {Date} dateObj the date object
  * @param {String} frmt a string composed of formatting tokens e.g. "Y-m-d"
  * @return {String} The textual representation of the date e.g. 2017-02-03
  */
	formatDate: function formatDate(dateObj, frmt) {
		var _this = this;

		if (this.config !== undefined && this.config.formatDate !== undefined) return this.config.formatDate(dateObj, frmt);

		return frmt.split("").map(function (c, i, arr) {
			return _this.formats[c] && arr[i - 1] !== "\\" ? _this.formats[c](dateObj) : c !== "\\" ? c : "";
		}).join("");
	},


	revFormat: {
		D: function D() {},
		F: function F(dateObj, monthName) {
			dateObj.setMonth(this.l10n.months.longhand.indexOf(monthName));
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
		K: function K(dateObj, amPM) {
			var hours = dateObj.getHours();

			if (hours !== 12) dateObj.setHours(hours % 12 + 12 * /pm/i.test(amPM));
		},
		M: function M(dateObj, shortMonth) {
			dateObj.setMonth(this.l10n.months.shorthand.indexOf(shortMonth));
		},
		S: function S(dateObj, seconds) {
			dateObj.setSeconds(seconds);
		},
		U: function U(dateObj, unixSeconds) {
			return new Date(parseFloat(unixSeconds) * 1000);
		},

		W: function W(dateObj, weekNumber) {
			weekNumber = parseInt(weekNumber);
			return new Date(dateObj.getFullYear(), 0, 2 + (weekNumber - 1) * 7, 0, 0, 0, 0, 0);
		},
		Y: function Y(dateObj, year) {
			dateObj.setFullYear(year);
		},
		Z: function Z(dateObj, ISODate) {
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
		l: function l() {},
		m: function m(dateObj, month) {
			dateObj.setMonth(parseFloat(month) - 1);
		},
		n: function n(dateObj, month) {
			dateObj.setMonth(parseFloat(month) - 1);
		},
		s: function s(dateObj, seconds) {
			dateObj.setSeconds(parseFloat(seconds));
		},
		w: function w() {},
		y: function y(dateObj, year) {
			dateObj.setFullYear(2000 + parseFloat(year));
		}
	},

	tokenRegex: {
		D: "(\\w+)",
		F: "(\\w+)",
		G: "(\\d\\d|\\d)",
		H: "(\\d\\d|\\d)",
		J: "(\\d\\d|\\d)\\w+",
		K: "(am|AM|Am|aM|pm|PM|Pm|pM)",
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
	},

	pad: function pad(number) {
		return ("0" + number).slice(-2);
	},

	/**
  * Parses a date(+time) string into a Date object
  * @param {String} date the date string, e.g. 2017-02-03 14:45
  * @param {String} givenFormat the date format, e.g. Y-m-d H:i
  * @param {Boolean} timeless whether to reset the time of Date object
  * @return {Date} the parsed Date object
  */
	parseDate: function parseDate(date, givenFormat, timeless) {
		var _this2 = this;

		if (date !== 0 && !date) return null;

		var date_orig = date;

		if (date instanceof Date) date = new Date(date.getTime()); // create a copy

		else if (date.toFixed !== undefined) // timestamp
				date = new Date(date);else {
				// date string
				var format = givenFormat || (this.config || flatpickr.defaultConfig).dateFormat;
				date = String(date).trim();

				if (date === "today") {
					date = new Date();
					timeless = true;
				} else if (/Z$/.test(date) || /GMT$/.test(date)) // datestrings w/ timezone
					date = new Date(date);else if (this.config && this.config.parseDate) date = this.config.parseDate(date, format);else {
					(function () {
						var parsedDate = !_this2.config || !_this2.config.noCalendar ? new Date(new Date().getFullYear(), 0, 1, 0, 0, 0, 0) : new Date(new Date().setHours(0, 0, 0, 0));

						var matched = void 0,
						    ops = [];

						for (var i = 0, matchIndex = 0, regexStr = ""; i < format.length; i++) {
							var token = format[i];
							var isBackSlash = token === "\\";
							var escaped = format[i - 1] === "\\" || isBackSlash;

							if (_this2.tokenRegex[token] && !escaped) {
								regexStr += _this2.tokenRegex[token];
								var match = new RegExp(regexStr).exec(date);
								if (match && (matched = true)) {
									ops[token !== "Y" ? "push" : "unshift"]({
										fn: _this2.revFormat[token],
										val: match[++matchIndex]
									});
								}
							} else if (!isBackSlash) regexStr += "."; // don't really care

							ops.forEach(function (_ref) {
								var fn = _ref.fn,
								    val = _ref.val;
								return parsedDate = fn(parsedDate, val) || parsedDate;
							});
						}

						date = matched ? parsedDate : null;
					})();
				}
			}

		/* istanbul ignore next */
		if (!(date instanceof Date)) {
			console.warn("flatpickr: invalid date " + date_orig);
			console.info(this.element);
			return null;
		}

		if (timeless === true) date.setHours(0, 0, 0, 0);

		return date;
	}
};

/* istanbul ignore next */
function _flatpickr(nodeList, config) {
	var nodes = Array.prototype.slice.call(nodeList); // static list
	var instances = [];
	for (var i = 0; i < nodes.length; i++) {
		try {
			if (nodes[i].getAttribute("data-fp-omit") !== null) continue;

			if (nodes[i]._flatpickr) {
				nodes[i]._flatpickr.destroy();
				nodes[i]._flatpickr = null;
			}

			nodes[i]._flatpickr = new FlatpickrInstance(nodes[i], config || {});
			instances.push(nodes[i]._flatpickr);
		} catch (e) {
			console.warn(e, e.stack);
		}
	}

	return instances.length === 1 ? instances[0] : instances;
}

/* istanbul ignore next */
if (typeof HTMLElement !== "undefined") {
	// browser env
	HTMLCollection.prototype.flatpickr = NodeList.prototype.flatpickr = function (config) {
		return _flatpickr(this, config);
	};

	HTMLElement.prototype.flatpickr = function (config) {
		return _flatpickr([this], config);
	};
}

/* istanbul ignore next */
function flatpickr(selector, config) {
	if (selector instanceof NodeList) return _flatpickr(selector, config);else if (!(selector instanceof HTMLElement)) return _flatpickr(window.document.querySelectorAll(selector), config);

	return _flatpickr([selector], config);
}

/* istanbul ignore next */
flatpickr.defaultConfig = FlatpickrInstance.defaultConfig = {
	mode: "single",

	position: "auto",

	animate: typeof window !== "undefined" && window.navigator.userAgent.indexOf("MSIE") === -1,

	// wrap: see https://chmln.github.io/flatpickr/examples/#flatpickr-external-elements
	wrap: false,

	// enables week numbers
	weekNumbers: false,

	// allow manual datetime input
	allowInput: false,

	/*
 	clicking on input opens the date(time)picker.
 	disable if you wish to open the calendar manually with .open()
 */
	clickOpens: true,

	/*
 	closes calendar after date selection,
 	unless 'mode' is 'multiple' or enableTime is true
 */
	closeOnSelect: true,

	// display time picker in 24 hour mode
	time_24hr: false,

	// enables the time picker functionality
	enableTime: false,

	// noCalendar: true will hide the calendar. use for a time picker along w/ enableTime
	noCalendar: false,

	// more date format chars at https://chmln.github.io/flatpickr/#dateformat
	dateFormat: "Y-m-d",

	// date format used in aria-label for days
	ariaDateFormat: "F j, Y",

	// altInput - see https://chmln.github.io/flatpickr/#altinput
	altInput: false,

	// the created altInput element will have this class.
	altInputClass: "form-control input",

	// same as dateFormat, but for altInput
	altFormat: "F j, Y", // defaults to e.g. June 10, 2016

	// defaultDate - either a datestring or a date object. used for datetimepicker"s initial value
	defaultDate: null,

	// the minimum date that user can pick (inclusive)
	minDate: null,

	// the maximum date that user can pick (inclusive)
	maxDate: null,

	// dateparser that transforms a given string to a date object
	parseDate: null,

	// dateformatter that transforms a given date object to a string, according to passed format
	formatDate: null,

	getWeek: function getWeek(givenDate) {
		var date = new Date(givenDate.getTime());
		var onejan = new Date(date.getFullYear(), 0, 1);
		return Math.ceil(((date - onejan) / 86400000 + onejan.getDay() + 1) / 7);
	},


	// see https://chmln.github.io/flatpickr/#disable
	enable: [],

	// see https://chmln.github.io/flatpickr/#disable
	disable: [],

	// display the short version of month names - e.g. Sep instead of September
	shorthandCurrentMonth: false,

	// displays calendar inline. see https://chmln.github.io/flatpickr/#inline-calendar
	inline: false,

	// position calendar inside wrapper and next to the input element
	// leave at false unless you know what you"re doing
	"static": false,

	// DOM node to append the calendar to in *static* mode
	appendTo: null,

	// code for previous/next icons. this is where you put your custom icon code e.g. fontawesome
	prevArrow: "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M5.207 8.471l7.146 7.147-0.707 0.707-7.853-7.854 7.854-7.853 0.707 0.707-7.147 7.146z' /></svg>",
	nextArrow: "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M13.207 8.472l-7.854 7.854-0.707-0.707 7.146-7.146-7.146-7.148 0.707-0.707 7.854 7.854z' /></svg>",

	// enables seconds in the time picker
	enableSeconds: false,

	// step size used when scrolling/incrementing the hour element
	hourIncrement: 1,

	// step size used when scrolling/incrementing the minute element
	minuteIncrement: 5,

	// initial value in the hour element
	defaultHour: 12,

	// initial value in the minute element
	defaultMinute: 0,

	// initial value in the seconds element
	defaultSeconds: 0,

	// disable native mobile datetime input support
	disableMobile: false,

	// default locale
	locale: "default",

	plugins: [],

	ignoredFocusElements: [],

	// called every time calendar is closed
	onClose: undefined, // function (dateObj, dateStr) {}

	// onChange callback when user selects a date or time
	onChange: undefined, // function (dateObj, dateStr) {}

	// called for every day element
	onDayCreate: undefined,

	// called every time the month is changed
	onMonthChange: undefined,

	// called every time calendar is opened
	onOpen: undefined, // function (dateObj, dateStr) {}

	// called after the configuration has been parsed
	onParseConfig: undefined,

	// called after calendar is ready
	onReady: undefined, // function (dateObj, dateStr) {}

	// called after input value updated
	onValueUpdate: undefined,

	// called every time the year is changed
	onYearChange: undefined,

	onKeyDown: undefined,

	onDestroy: undefined
};

/* istanbul ignore next */
flatpickr.l10ns = {
	en: {
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
		toggleTitle: "Click to toggle"
	}
};

flatpickr.l10ns.default = Object.create(flatpickr.l10ns.en);
flatpickr.localize = function (l10n) {
	return _extends(flatpickr.l10ns.default, l10n || {});
};
flatpickr.setDefaults = function (config) {
	return _extends(flatpickr.defaultConfig, config || {});
};

/* istanbul ignore next */
if (typeof jQuery !== "undefined") {
	jQuery.fn.flatpickr = function (config) {
		return _flatpickr(this, config);
	};
}

Date.prototype.fp_incr = function (days) {
	return new Date(this.getFullYear(), this.getMonth(), this.getDate() + parseInt(days, 10));
};

if (true) module.exports = flatpickr;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

function confirmDatePlugin(pluginConfig) {
	var defaultConfig = {
		confirmIcon: "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='17' height='17' viewBox='0 0 17 17'> <g> </g> <path d='M15.418 1.774l-8.833 13.485-4.918-4.386 0.666-0.746 4.051 3.614 8.198-12.515 0.836 0.548z' fill='#000000' /> </svg>",
		confirmText: "OK ",
		showAlways: false,
		theme: "light"
	};

	var config = {};
	for (var key in defaultConfig) {
		config[key] = pluginConfig && pluginConfig[key] !== undefined ? pluginConfig[key] : defaultConfig[key];
	}

	return function (fp) {
		var hooks = {
			onKeyDown: function onKeyDown(_, __, ___, e) {
				if (fp.config.enableTime && e.key === "Tab" && e.target === fp.amPM) {
					e.preventDefault();
					fp.confirmContainer.focus();
				} else if (e.key === "Enter" && e.target === fp.confirmContainer) fp.close();
			},
			onReady: function onReady() {
				if (fp.calendarContainer === undefined) return;

				fp.confirmContainer = fp._createElement("div", "flatpickr-confirm " + (config.showAlways ? "visible" : "") + " " + config.theme + "Theme", config.confirmText);

				fp.confirmContainer.tabIndex = -1;
				fp.confirmContainer.innerHTML += config.confirmIcon;

				fp.confirmContainer.addEventListener("click", fp.close);
				fp.calendarContainer.appendChild(fp.confirmContainer);
			}
		};

		if (!config.showAlways) {
			hooks.onChange = function (dateObj, dateStr) {
				var showCondition = fp.config.enableTime || fp.config.mode === "multiple";
				if (dateStr && !fp.config.inline && showCondition) return fp.confirmContainer.classList.add("visible");
				fp.confirmContainer.classList.remove("visible");
			};
		}

		return hooks;
	};
}

if (true) module.exports = confirmDatePlugin;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Array.from(document.querySelectorAll('.flex-field-repeating')).forEach(function (field) {

    var index = void 0;

    var container = field.querySelector('.flex-field-collection');
    var templateWrapper = field.querySelector('.flex-field-template');
    var template = templateWrapper.firstElementChild.cloneNode(true);
    var addButton = field.querySelector('[data-action="add"]');
    var deleteButtons = field.querySelectorAll('[data-action="delete"]');
    var fieldName = templateWrapper.getAttribute('data-action');

    var deleteEventHandler = function deleteEventHandler() {
        this.parentNode.parentNode.removeChild(this.parentNode);
    };

    index = container.childElementCount;

    templateWrapper.parentNode.removeChild(templateWrapper);

    addButton.addEventListener('click', function () {
        var node = template.cloneNode(true);
        node.querySelector('button').addEventListener('click', deleteEventHandler);
        Array.from(node.querySelectorAll('[name*="' + fieldName + '[x]"]')).forEach(function (el) {
            var name = el.getAttribute('name');
            el.setAttribute('name', name.replace(fieldName + '[x]', fieldName + '[' + index + ']'));
        });
        container.appendChild(node);
        index++;
    });

    Array.from(deleteButtons).forEach(function (deleteButton) {
        deleteButton.addEventListener('click', deleteEventHandler);
    });
});

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function initialize(field) {

    var container = field.querySelector('.flex-field-collection');
    var template = field.querySelector('.flex-field-collection').lastElementChild.cloneNode(true);
    var addButton = field.querySelector('[data-action="add"]');
    var deleteButtons = field.querySelectorAll('[data-action="delete"]');

    var deleteEventHandler = function deleteEventHandler() {
        this.parentNode.parentNode.removeChild(this.parentNode);
    };

    addButton.addEventListener('click', function () {
        var node = template.cloneNode(true);
        node.querySelector('button').addEventListener('click', deleteEventHandler);
        container.appendChild(node);
    });

    Array.from(deleteButtons).forEach(function (deleteButton) {
        deleteButton.addEventListener('click', deleteEventHandler);
    });
}

Array.from(document.querySelectorAll('.flex-field-repeating-text')).map(initialize);

window.flexfields = window.flexfields || {};

window.flexfields.repeatingText = {
    initialize: initialize
};

/***/ }),
/* 11 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 12 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 13 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);
//# sourceMappingURL=flex-fields.js.map