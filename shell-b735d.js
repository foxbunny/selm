/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	var parentJsonpFunction = window["webpackJsonp"];
/******/ 	window["webpackJsonp"] = function webpackJsonpCallback(chunkIds, moreModules, executeModules) {
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [], result;
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(chunkIds, moreModules, executeModules);
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// objects to store loaded and loading chunks
/******/ 	var installedChunks = {
/******/ 		1: 0
/******/ 	};
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData === 0) {
/******/ 			return new Promise(function(resolve) { resolve(); });
/******/ 		}
/******/
/******/ 		// a Promise means "currently loading".
/******/ 		if(installedChunkData) {
/******/ 			return installedChunkData[2];
/******/ 		}
/******/
/******/ 		// setup Promise in chunk cache
/******/ 		var promise = new Promise(function(resolve, reject) {
/******/ 			installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 		});
/******/ 		installedChunkData[2] = promise;
/******/
/******/ 		// start chunk loading
/******/ 		var head = document.getElementsByTagName('head')[0];
/******/ 		var script = document.createElement('script');
/******/ 		script.type = 'text/javascript';
/******/ 		script.charset = 'utf-8';
/******/ 		script.async = true;
/******/ 		script.timeout = 120000;
/******/
/******/ 		if (__webpack_require__.nc) {
/******/ 			script.setAttribute("nonce", __webpack_require__.nc);
/******/ 		}
/******/ 		script.src = __webpack_require__.p + "" + chunkId + "-" + "b735d" + ".js";
/******/ 		var timeout = setTimeout(onScriptComplete, 120000);
/******/ 		script.onerror = script.onload = onScriptComplete;
/******/ 		function onScriptComplete() {
/******/ 			// avoid mem leaks in IE.
/******/ 			script.onerror = script.onload = null;
/******/ 			clearTimeout(timeout);
/******/ 			var chunk = installedChunks[chunkId];
/******/ 			if(chunk !== 0) {
/******/ 				if(chunk) {
/******/ 					chunk[1](new Error('Loading chunk ' + chunkId + ' failed.'));
/******/ 				}
/******/ 				installedChunks[chunkId] = undefined;
/******/ 			}
/******/ 		};
/******/ 		head.appendChild(script);
/******/
/******/ 		return promise;
/******/ 	};
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
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var vnode_1 = __webpack_require__(3);
var is = __webpack_require__(4);
function addNS(data, children, sel) {
    data.ns = 'http://www.w3.org/2000/svg';
    if (sel !== 'foreignObject' && children !== undefined) {
        for (var i = 0; i < children.length; ++i) {
            var childData = children[i].data;
            if (childData !== undefined) {
                addNS(childData, children[i].children, children[i].sel);
            }
        }
    }
}
function h(sel, b, c) {
    var data = {}, children, text, i;
    if (c !== undefined) {
        data = b;
        if (is.array(c)) {
            children = c;
        }
        else if (is.primitive(c)) {
            text = c;
        }
        else if (c && c.sel) {
            children = [c];
        }
    }
    else if (b !== undefined) {
        if (is.array(b)) {
            children = b;
        }
        else if (is.primitive(b)) {
            text = b;
        }
        else if (b && b.sel) {
            children = [b];
        }
        else {
            data = b;
        }
    }
    if (is.array(children)) {
        for (i = 0; i < children.length; ++i) {
            if (is.primitive(children[i]))
                children[i] = vnode_1.vnode(undefined, undefined, undefined, children[i]);
        }
    }
    if (sel[0] === 's' && sel[1] === 'v' && sel[2] === 'g' &&
        (sel.length === 3 || sel[3] === '.' || sel[3] === '#')) {
        addNS(data, children, sel);
    }
    return vnode_1.vnode(sel, data, children, text, undefined);
}
exports.h = h;
;
exports.default = h;
//# sourceMappingURL=h.js.map

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * (c) 2017 Hajime Yamasaki Vukelic
 * All rights reserved.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var str = function (s) {
    return typeof s === "string";
};
exports.str = str;
var input = function (target) {
    return target.tagName === "INPUT";
};
exports.input = input;
var checkbox = function (target) {
    return target.tagName === "INPUT" && target.type === "checkbox";
};
exports.checkbox = checkbox;
var event = function (ev) {
    return ev instanceof Event;
};
exports.event = event;
var changeEvent = function (ev) {
    return event(ev) && ev.type === "change";
};
exports.changeEvent = changeEvent;
var inputEvent = function (ev) {
    return event(ev) && ev.type === "input";
};
exports.inputEvent = inputEvent;
var vnode = function (vn) {
    return typeof vn === "object" && "sel" in vnode;
};
exports.vnode = vnode;
var pathData = function (data) {
    return typeof data === "object" && typeof data.pathname === "string";
};
exports.pathData = pathData;
//# sourceMappingURL=is.js.map

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * (c) 2017 Hajime Yamasaki Vukelic
 * All rights reserved.
 */
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
var snabbdom = __webpack_require__(22);
var h_1 = __webpack_require__(0);
var class_1 = __webpack_require__(25);
var eventlisteners_1 = __webpack_require__(26);
var props_1 = __webpack_require__(27);
var style_1 = __webpack_require__(28);
var docevents_1 = __webpack_require__(29);
var keyevents_1 = __webpack_require__(30);
var offevents_1 = __webpack_require__(31);
var routeevents_1 = __webpack_require__(32);
var patch = snabbdom.init([
    class_1.default,
    style_1.default,
    eventlisteners_1.default,
    props_1.default,
    docevents_1.default,
    offevents_1.default,
    keyevents_1.default,
    routeevents_1.default,
]);
exports.patch = patch;
var isInlineChild = function (obj) {
    return typeof obj === "object" && obj !== null && typeof obj.vnodes !== "undefined";
};
var prepareClasses = function (classes) {
    if (classes == null) {
        return {};
    }
    if (typeof classes === "object" && !Array.isArray(classes)) {
        return classes;
    }
    if (typeof classes === "string") {
        return _a = {}, _a[classes] = true, _a;
    }
    return classes.reduce(function (o, c) {
        o[c] = true;
        return o;
    }, {});
    var _a;
};
var prepareProps = function (props) {
    if (props == null) {
        return {};
    }
    var finalProps = {};
    Object.keys(props).forEach(function (prop) {
        var _a = __read(prop.split("-"), 2), mod = _a[0], sub = _a[1];
        if (sub) {
            finalProps[mod] = finalProps[mod] || {};
            finalProps[mod][sub] = props[prop];
        }
        else if (prop === "key") {
            finalProps.key = props[prop];
        }
        else if (prop === "on") {
            finalProps.on = props[prop];
        }
        else if (prop === "hook") {
            finalProps.hook = props[prop];
        }
        else if (prop === "class") {
            finalProps.class = prepareClasses(props[prop]);
        }
        else if (prop === "style") {
            finalProps.style = props[prop];
        }
        else if (prop === "route") {
            finalProps.route = props[prop];
        }
        else {
            finalProps.props = finalProps.props || {};
            finalProps.props[prop] = props[prop];
        }
    });
    return finalProps;
};
var renderIntrinsic = function (elm, props, children) {
    if (props === void 0) { props = {}; }
    if (children === void 0) { children = []; }
    // FIXME: We're messing with any a lot here
    children = (children.length === 1
        ? children[0]
        : children.reduce(function (arr, c) {
            if (isInlineChild(c)) {
                // Case where we have something like `{props.__inner}` somewhere in the
                // render functions.
                return arr.concat(c.__vnodes);
            }
            if (Array.isArray(c)) {
                // Case where we have something like `{arr.map(() => ...)}`
                return arr.concat(c);
            }
            return arr.concat([c]);
        }, []));
    return h_1.default(elm, prepareProps(props), children);
};
var renderFunction = function (func, props, children) {
    if (props === void 0) { props = {}; }
    if (children === void 0) { children = []; }
    var key = props && props.key;
    if (key) {
        delete props.key;
    }
    var vnode = func(props, { __vnodes: children || [] });
    vnode.key = vnode.key || key;
    return vnode;
};
var html = function (elm, props) {
    var children = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        children[_i - 2] = arguments[_i];
    }
    if (typeof elm === "string") {
        return renderIntrinsic(elm, props, children);
    }
    else {
        return renderFunction(elm, props, children);
    }
};
exports.html = html;
exports.default = html;
//# sourceMappingURL=html.js.map

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function vnode(sel, data, children, text, elm) {
    var key = data === undefined ? undefined : data.key;
    return { sel: sel, data: data, children: children,
        text: text, elm: elm, key: key };
}
exports.vnode = vnode;
exports.default = vnode;
//# sourceMappingURL=vnode.js.map

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.array = Array.isArray;
function primitive(s) {
    return typeof s === 'string' || typeof s === 'number';
}
exports.primitive = primitive;
//# sourceMappingURL=is.js.map

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * (c) 2017 Hajime Yamasaki Vukelic
 * All rights reserved.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var events = __webpack_require__(6);
exports.events = events;
var html_1 = __webpack_require__(2);
exports.html = html_1.default;
var runner_1 = __webpack_require__(36);
exports.runner = runner_1.default;
//# sourceMappingURL=index.js.map

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * (c) 2017 Hajime Yamasaki Vukelic
 * All rights reserved.
 */
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
var is = __webpack_require__(1);
/**
 * Decorates an event handler with a processor
 */
var from = function (processor, handler) { return function () {
    var eventArgs = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        eventArgs[_i] = arguments[_i];
    }
    return handler.apply(void 0, __spread(processor.apply(void 0, __spread(eventArgs))));
}; };
exports.from = from;
/**
 * Processor that handles input DOM events
 */
var inputEvent = function (event) {
    return [event.target.value];
};
exports.inputEvent = inputEvent;
/**
 * Processor that handles change DOM events on checkboxes
 */
var checkboxEvent = function (event) {
    return [event.target.checked, event.target.value];
};
exports.checkboxEvent = checkboxEvent;
/**
 * Automatic processor that handles various events and hooks
 */
var auto = function () {
    var eventCallbackArgs = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        eventCallbackArgs[_i] = arguments[_i];
    }
    var first = eventCallbackArgs[0];
    if (is.vnode(first)) {
        // This is mostly for hooks. We add the vnode objects to args.
        return eventCallbackArgs;
    }
    else if (is.changeEvent(first) && is.checkbox(first.target)) {
        return checkboxEvent(first);
    }
    else if (is.inputEvent(first) && is.input(first.target)) {
        first.preventDefault();
        return inputEvent(first);
    }
    else if (is.pathData(first)) {
        return [first];
    }
    return [];
};
exports.auto = auto;
//# sourceMappingURL=events.js.map

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var strictUriEncode = __webpack_require__(33);
var objectAssign = __webpack_require__(34);
var decodeComponent = __webpack_require__(35);

function encoderForArrayFormat(opts) {
	switch (opts.arrayFormat) {
		case 'index':
			return function (key, value, index) {
				return value === null ? [
					encode(key, opts),
					'[',
					index,
					']'
				].join('') : [
					encode(key, opts),
					'[',
					encode(index, opts),
					']=',
					encode(value, opts)
				].join('');
			};

		case 'bracket':
			return function (key, value) {
				return value === null ? encode(key, opts) : [
					encode(key, opts),
					'[]=',
					encode(value, opts)
				].join('');
			};

		default:
			return function (key, value) {
				return value === null ? encode(key, opts) : [
					encode(key, opts),
					'=',
					encode(value, opts)
				].join('');
			};
	}
}

function parserForArrayFormat(opts) {
	var result;

	switch (opts.arrayFormat) {
		case 'index':
			return function (key, value, accumulator) {
				result = /\[(\d*)\]$/.exec(key);

				key = key.replace(/\[\d*\]$/, '');

				if (!result) {
					accumulator[key] = value;
					return;
				}

				if (accumulator[key] === undefined) {
					accumulator[key] = {};
				}

				accumulator[key][result[1]] = value;
			};

		case 'bracket':
			return function (key, value, accumulator) {
				result = /(\[\])$/.exec(key);
				key = key.replace(/\[\]$/, '');

				if (!result) {
					accumulator[key] = value;
					return;
				} else if (accumulator[key] === undefined) {
					accumulator[key] = [value];
					return;
				}

				accumulator[key] = [].concat(accumulator[key], value);
			};

		default:
			return function (key, value, accumulator) {
				if (accumulator[key] === undefined) {
					accumulator[key] = value;
					return;
				}

				accumulator[key] = [].concat(accumulator[key], value);
			};
	}
}

function encode(value, opts) {
	if (opts.encode) {
		return opts.strict ? strictUriEncode(value) : encodeURIComponent(value);
	}

	return value;
}

function keysSorter(input) {
	if (Array.isArray(input)) {
		return input.sort();
	} else if (typeof input === 'object') {
		return keysSorter(Object.keys(input)).sort(function (a, b) {
			return Number(a) - Number(b);
		}).map(function (key) {
			return input[key];
		});
	}

	return input;
}

exports.extract = function (str) {
	return str.split('?')[1] || '';
};

exports.parse = function (str, opts) {
	opts = objectAssign({arrayFormat: 'none'}, opts);

	var formatter = parserForArrayFormat(opts);

	// Create an object with no prototype
	// https://github.com/sindresorhus/query-string/issues/47
	var ret = Object.create(null);

	if (typeof str !== 'string') {
		return ret;
	}

	str = str.trim().replace(/^(\?|#|&)/, '');

	if (!str) {
		return ret;
	}

	str.split('&').forEach(function (param) {
		var parts = param.replace(/\+/g, ' ').split('=');
		// Firefox (pre 40) decodes `%3D` to `=`
		// https://github.com/sindresorhus/query-string/pull/37
		var key = parts.shift();
		var val = parts.length > 0 ? parts.join('=') : undefined;

		// missing `=` should be `null`:
		// http://w3.org/TR/2012/WD-url-20120524/#collect-url-parameters
		val = val === undefined ? null : decodeComponent(val);

		formatter(decodeComponent(key), val, ret);
	});

	return Object.keys(ret).sort().reduce(function (result, key) {
		var val = ret[key];
		if (Boolean(val) && typeof val === 'object' && !Array.isArray(val)) {
			// Sort object keys, not values
			result[key] = keysSorter(val);
		} else {
			result[key] = val;
		}

		return result;
	}, Object.create(null));
};

exports.stringify = function (obj, opts) {
	var defaults = {
		encode: true,
		strict: true,
		arrayFormat: 'none'
	};

	opts = objectAssign(defaults, opts);

	var formatter = encoderForArrayFormat(opts);

	return obj ? Object.keys(obj).sort().map(function (key) {
		var val = obj[key];

		if (val === undefined) {
			return '';
		}

		if (val === null) {
			return encode(key, opts);
		}

		if (Array.isArray(val)) {
			var result = [];

			val.slice().forEach(function (val2) {
				if (val2 === undefined) {
					return;
				}

				result.push(formatter(key, val2, result.length));
			});

			return result.join('&');
		}

		return encode(key, opts) + '=' + encode(val, opts);
	}).filter(function (x) {
		return x.length > 0;
	}).join('&') : '';
};


/***/ }),
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(12);
__webpack_require__(13);
__webpack_require__(18);
__webpack_require__(20);
module.exports = __webpack_require__(21);


/***/ }),
/* 12 */
/***/ (function(module, exports) {

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
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * (c) 2017 Hajime Yamasaki Vukelic
 * All rights reserved.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var events = __webpack_require__(15);
exports.events = events;
var html_1 = __webpack_require__(5);
exports.html = html_1.default;
var runner_1 = __webpack_require__(31);
exports.runner = runner_1.default;
//# sourceMappingURL=index.js.map

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var vnode_1 = __webpack_require__(6);
var is = __webpack_require__(7);
function addNS(data, children, sel) {
    data.ns = 'http://www.w3.org/2000/svg';
    if (sel !== 'foreignObject' && children !== undefined) {
        for (var i = 0; i < children.length; ++i) {
            var childData = children[i].data;
            if (childData !== undefined) {
                addNS(childData, children[i].children, children[i].sel);
            }
        }
    }
}
function h(sel, b, c) {
    var data = {}, children, text, i;
    if (c !== undefined) {
        data = b;
        if (is.array(c)) {
            children = c;
        }
        else if (is.primitive(c)) {
            text = c;
        }
        else if (c && c.sel) {
            children = [c];
        }
    }
    else if (b !== undefined) {
        if (is.array(b)) {
            children = b;
        }
        else if (is.primitive(b)) {
            text = b;
        }
        else if (b && b.sel) {
            children = [b];
        }
        else {
            data = b;
        }
    }
    if (is.array(children)) {
        for (i = 0; i < children.length; ++i) {
            if (is.primitive(children[i]))
                children[i] = vnode_1.vnode(undefined, undefined, undefined, children[i]);
        }
    }
    if (sel[0] === 's' && sel[1] === 'v' && sel[2] === 'g' &&
        (sel.length === 3 || sel[3] === '.' || sel[3] === '#')) {
        addNS(data, children, sel);
    }
    return vnode_1.vnode(sel, data, children, text, undefined);
}
exports.h = h;
;
exports.default = h;
//# sourceMappingURL=h.js.map

/***/ }),
/* 2 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			memo[selector] = fn.call(this, selector);
		}

		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(36);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton) options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * (c) 2017 Hajime Yamasaki Vukelic
 * All rights reserved.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var str = function (s) {
    return typeof s === "string";
};
exports.str = str;
var input = function (target) {
    return target.tagName === "INPUT";
};
exports.input = input;
var checkbox = function (target) {
    return target.tagName === "INPUT" && target.type === "checkbox";
};
exports.checkbox = checkbox;
var event = function (ev) {
    return ev instanceof Event;
};
exports.event = event;
var changeEvent = function (ev) {
    return event(ev) && ev.type === "change";
};
exports.changeEvent = changeEvent;
var inputEvent = function (ev) {
    return event(ev) && ev.type === "input";
};
exports.inputEvent = inputEvent;
var vnode = function (vn) {
    return typeof vn === "object" && "sel" in vnode;
};
exports.vnode = vnode;
var pathData = function (data) {
    return typeof data === "object" && typeof data.pathname === "string";
};
exports.pathData = pathData;
//# sourceMappingURL=is.js.map

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * (c) 2017 Hajime Yamasaki Vukelic
 * All rights reserved.
 */
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
var snabbdom = __webpack_require__(16);
var h_1 = __webpack_require__(1);
var class_1 = __webpack_require__(19);
var eventlisteners_1 = __webpack_require__(20);
var props_1 = __webpack_require__(21);
var style_1 = __webpack_require__(22);
var docevents_1 = __webpack_require__(23);
var keyevents_1 = __webpack_require__(24);
var offevents_1 = __webpack_require__(25);
var routeevents_1 = __webpack_require__(26);
var patch = snabbdom.init([
    class_1.default,
    style_1.default,
    eventlisteners_1.default,
    props_1.default,
    docevents_1.default,
    offevents_1.default,
    keyevents_1.default,
    routeevents_1.default,
]);
exports.patch = patch;
var isInlineChild = function (obj) {
    return typeof obj === "object" && obj !== null && typeof obj.vnodes !== "undefined";
};
var prepareClasses = function (classes) {
    if (classes == null) {
        return {};
    }
    if (typeof classes === "object" && !Array.isArray(classes)) {
        return classes;
    }
    if (typeof classes === "string") {
        return _a = {}, _a[classes] = true, _a;
    }
    return classes.reduce(function (o, c) {
        o[c] = true;
        return o;
    }, {});
    var _a;
};
var prepareProps = function (props) {
    if (props == null) {
        return {};
    }
    var finalProps = {};
    Object.keys(props).forEach(function (prop) {
        var _a = __read(prop.split("-"), 2), mod = _a[0], sub = _a[1];
        if (sub) {
            finalProps[mod] = finalProps[mod] || {};
            finalProps[mod][sub] = props[prop];
        }
        else if (prop === "key") {
            finalProps.key = props[prop];
        }
        else if (prop === "on") {
            finalProps.on = props[prop];
        }
        else if (prop === "hook") {
            finalProps.hook = props[prop];
        }
        else if (prop === "class") {
            finalProps.class = prepareClasses(props[prop]);
        }
        else if (prop === "style") {
            finalProps.style = props[prop];
        }
        else if (prop === "route") {
            finalProps.route = props[prop];
        }
        else {
            finalProps.props = finalProps.props || {};
            finalProps.props[prop] = props[prop];
        }
    });
    return finalProps;
};
var renderIntrinsic = function (elm, props, children) {
    if (props === void 0) { props = {}; }
    if (children === void 0) { children = []; }
    // FIXME: We're messing with any a lot here
    children = (children.length === 1
        ? children[0]
        : children.reduce(function (arr, c) {
            if (isInlineChild(c)) {
                // Case where we have something like `{props.__inner}` somewhere in the
                // render functions.
                return arr.concat(c.__vnodes);
            }
            if (Array.isArray(c)) {
                // Case where we have something like `{arr.map(() => ...)}`
                return arr.concat(c);
            }
            return arr.concat([c]);
        }, []));
    return h_1.default(elm, prepareProps(props), children);
};
var renderFunction = function (func, props, children) {
    if (props === void 0) { props = {}; }
    if (children === void 0) { children = []; }
    var key = props && props.key;
    if (key) {
        delete props.key;
    }
    var vnode = func(props, { __vnodes: children || [] });
    vnode.key = vnode.key || key;
    return vnode;
};
var html = function (elm, props) {
    var children = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        children[_i - 2] = arguments[_i];
    }
    if (typeof elm === "string") {
        return renderIntrinsic(elm, props, children);
    }
    else {
        return renderFunction(elm, props, children);
    }
};
exports.html = html;
exports.default = html;
//# sourceMappingURL=html.js.map

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function vnode(sel, data, children, text, elm) {
    var key = data === undefined ? undefined : data.key;
    return { sel: sel, data: data, children: children,
        text: text, elm: elm, key: key };
}
exports.vnode = vnode;
exports.default = vnode;
//# sourceMappingURL=vnode.js.map

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.array = Array.isArray;
function primitive(s) {
    return typeof s === 'string' || typeof s === 'number';
}
exports.primitive = primitive;
//# sourceMappingURL=is.js.map

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * (c) 2017 Hajime Yamasaki Vukelic
 * All rights reserved.
 */
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var diff_1 = __webpack_require__(9);
var messaging_1 = __webpack_require__(32);
// NOTE: In this module 'client' is the devtool, and 'host' is the application
// being tested
var client2host = messaging_1.createChannel();
exports.client2host = client2host;
var host2client = messaging_1.createChannel();
exports.host2client = host2client;
var clientMiddleware = function (fn) { return function (model) {
    var before = model;
    var start = (new Date()).getTime();
    var after = fn(model);
    var duration = (new Date()).getTime() - start;
    client2host.send("modelUpdate", { start: start, duration: duration, before: before, after: after });
    return after;
}; };
exports.clientMiddleware = clientMiddleware;
var clientPlugin = {
    actions: {
        injectState: function (patch, state) {
            patch(function () { return state; });
        },
    },
    init: function (act, state) {
        host2client.addListener(act);
        client2host.send("initHistory", state.model);
    },
};
exports.clientPlugin = clientPlugin;
var hostPlugin = {
    actions: {
        initHistory: function (patch, initialModel) {
            patch(function (model) { return (__assign({}, model, { diff: {
                    diff: initialModel,
                    scope: [],
                }, history: model.history.concat({
                    after: initialModel,
                    before: undefined,
                    diff: initialModel,
                    duration: 0,
                    start: (new Date()).getTime(),
                }), scrubber: __assign({}, model.scrubber, { pos: 1 }) })); });
        },
        modelUpdate: function (patch, _a) {
            var start = _a.start, duration = _a.duration, before = _a.before, after = _a.after;
            patch(function (model) {
                if (after === model.history[model.currentIndex].after) {
                    // This is the injected state, so we're ignoring it
                    return;
                }
                var isRewound = model.currentIndex < model.history.length - 1;
                var historyBase = isRewound
                    ? model.history.slice(0, model.currentIndex + 1)
                    : model.history;
                var diffObj = diff_1.default(before, after);
                var newIndex = model.currentIndex + 1;
                return __assign({}, model, { currentIndex: newIndex, diff: {
                        diff: diffObj,
                        scope: model.diff.scope,
                    }, history: historyBase.concat({
                        after: after,
                        before: before,
                        diff: diffObj,
                        duration: duration,
                        start: start,
                    }), scrubber: __assign({}, model.scrubber, { pos: 1 }) });
            });
        },
    },
    init: function (act, state) {
        client2host.addListener(act);
    },
};
exports.hostPlugin = hostPlugin;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * (c) 2017 Hajime Yamasaki Vukelic
 * All rights reserved.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var is = __webpack_require__(10);
var Diff = /** @class */ (function () {
    function Diff(type, prev, next) {
        this.type = type;
        this.prev = prev;
        this.next = next;
    }
    Diff.update = function (prev, next) {
        return new Diff("update", prev, next);
    };
    Diff.add = function (val) {
        return new Diff("add", undefined, val);
    };
    Diff.del = function (val) {
        return new Diff("del", val, undefined);
    };
    return Diff;
}());
exports.Diff = Diff;
var includes = function (item, arr) { return arr.indexOf(item) > -1; };
var uniqueKeys = function () {
    var objs = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        objs[_i] = arguments[_i];
    }
    return objs
        .reduce(function (keys, o) { return keys.concat(Object.keys(o)); }, [])
        .reduce(function (keys, k) { return includes(k, keys) ? keys : keys.concat(k); }, []);
};
function diff(x, y) {
    if (x === y) {
        return y;
    }
    if (is.undef(x)) {
        return Diff.add(y);
    }
    if (is.undef(y)) {
        return Diff.del(x);
    }
    if (is.primitive(x) && is.primitive(y)) {
        // Both primitive, so there's nothing deeper to consider
        return Diff.update(x, y);
    }
    if (is.primitive(x) || is.primitive(y)) {
        // One of them is a primitive, so we won't go deeper
        return Diff.update(x, y);
    }
    // At this point, we've exhausted the possibility of having primitives on
    // either side. They should all be either objects or arrays.
    if (is.pojo(x) && is.array(y) || is.array(x) && is.pojo(y)) {
        return Diff.update(x, y);
    }
    if (is.pojo(x)) {
        var uniqKyes = uniqueKeys(x, y);
        return uniqKyes.reduce(function (out, k) {
            out[k] = diff(x[k], y[k]);
            return out;
        }, {});
    }
    return (function () {
        var l = Math.max(x.length, y.length);
        var out = [];
        for (var i = 0; i < l; i++) {
            out.push(diff(x[i], y[i]));
        }
        return out;
    })();
}
exports.default = diff;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * (c) 2017 Hajime Yamasaki Vukelic
 * All rights reserved.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var primitive = function (val) {
    return val === null || typeof val !== "object" && typeof val !== "function";
};
exports.primitive = primitive;
var container = function (val) {
    return typeof val === "object" && val !== null;
};
exports.container = container;
var pojo = function (val) {
    return container(val) && val.constructor === Object;
};
exports.pojo = pojo;
var array = function (val) {
    return Array.isArray(val);
};
exports.array = array;
var func = function (val) {
    return typeof val === "function";
};
exports.func = func;
var undef = function (val) {
    return typeof val === "undefined";
};
exports.undef = undef;
var NULL = function (val) {
    return val === null;
};
exports.NULL = NULL;
var nil = function (val) {
    return val == null;
};
exports.nil = nil;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(12);
module.exports = __webpack_require__(14);


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(13).polyfill();


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Code refactored from Mozilla Developer Network:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
 */



function assign(target, firstSource) {
  if (target === undefined || target === null) {
    throw new TypeError('Cannot convert first argument to object');
  }

  var to = Object(target);
  for (var i = 1; i < arguments.length; i++) {
    var nextSource = arguments[i];
    if (nextSource === undefined || nextSource === null) {
      continue;
    }

    var keysArray = Object.keys(Object(nextSource));
    for (var nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex++) {
      var nextKey = keysArray[nextIndex];
      var desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
      if (desc !== undefined && desc.enumerable) {
        to[nextKey] = nextSource[nextKey];
      }
    }
  }
  return to;
}

function polyfill() {
  if (!Object.assign) {
    Object.defineProperty(Object, 'assign', {
      enumerable: false,
      configurable: true,
      writable: true,
      value: assign
    });
  }
}

module.exports = {
  assign: assign,
  polyfill: polyfill
};


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * (c) 2017 Hajime Yamasaki Vukelic
 * All rights reserved.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var duckweed = __webpack_require__(0);
var devtool = __webpack_require__(8);
var panel = __webpack_require__(33);
window.__DUCKWEED_DEVTOOL__ = {
    middleware: devtool.clientMiddleware,
    plugin: devtool.clientPlugin,
};
var root = document.createElement("div");
document.body.appendChild(root);
duckweed.runner(panel.init(), panel.actions, panel.view, {
    plugins: [devtool.hostPlugin],
    root: root,
});


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * (c) 2017 Hajime Yamasaki Vukelic
 * All rights reserved.
 */
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
var is = __webpack_require__(4);
/**
 * Decorates an event handler with a processor
 */
var from = function (processor, handler) { return function () {
    var eventArgs = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        eventArgs[_i] = arguments[_i];
    }
    return handler.apply(void 0, __spread(processor.apply(void 0, __spread(eventArgs))));
}; };
exports.from = from;
/**
 * Processor that handles input DOM events
 */
var inputEvent = function (event) {
    return [event.target.value];
};
exports.inputEvent = inputEvent;
/**
 * Processor that handles change DOM events on checkboxes
 */
var checkboxEvent = function (event) {
    return [event.target.checked, event.target.value];
};
exports.checkboxEvent = checkboxEvent;
/**
 * Automatic processor that handles various events and hooks
 */
var auto = function () {
    var eventCallbackArgs = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        eventCallbackArgs[_i] = arguments[_i];
    }
    var first = eventCallbackArgs[0];
    if (is.vnode(first)) {
        // This is mostly for hooks. We add the vnode objects to args.
        return eventCallbackArgs;
    }
    else if (is.changeEvent(first) && is.checkbox(first.target)) {
        return checkboxEvent(first);
    }
    else if (is.inputEvent(first) && is.input(first.target)) {
        first.preventDefault();
        return inputEvent(first);
    }
    else if (is.pathData(first)) {
        return [first];
    }
    return [];
};
exports.auto = auto;
//# sourceMappingURL=events.js.map

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var vnode_1 = __webpack_require__(6);
var is = __webpack_require__(7);
var htmldomapi_1 = __webpack_require__(17);
function isUndef(s) { return s === undefined; }
function isDef(s) { return s !== undefined; }
var emptyNode = vnode_1.default('', {}, [], undefined, undefined);
function sameVnode(vnode1, vnode2) {
    return vnode1.key === vnode2.key && vnode1.sel === vnode2.sel;
}
function isVnode(vnode) {
    return vnode.sel !== undefined;
}
function createKeyToOldIdx(children, beginIdx, endIdx) {
    var i, map = {}, key, ch;
    for (i = beginIdx; i <= endIdx; ++i) {
        ch = children[i];
        if (ch != null) {
            key = ch.key;
            if (key !== undefined)
                map[key] = i;
        }
    }
    return map;
}
var hooks = ['create', 'update', 'remove', 'destroy', 'pre', 'post'];
var h_1 = __webpack_require__(1);
exports.h = h_1.h;
var thunk_1 = __webpack_require__(18);
exports.thunk = thunk_1.thunk;
function init(modules, domApi) {
    var i, j, cbs = {};
    var api = domApi !== undefined ? domApi : htmldomapi_1.default;
    for (i = 0; i < hooks.length; ++i) {
        cbs[hooks[i]] = [];
        for (j = 0; j < modules.length; ++j) {
            var hook = modules[j][hooks[i]];
            if (hook !== undefined) {
                cbs[hooks[i]].push(hook);
            }
        }
    }
    function emptyNodeAt(elm) {
        var id = elm.id ? '#' + elm.id : '';
        var c = elm.className ? '.' + elm.className.split(' ').join('.') : '';
        return vnode_1.default(api.tagName(elm).toLowerCase() + id + c, {}, [], undefined, elm);
    }
    function createRmCb(childElm, listeners) {
        return function rmCb() {
            if (--listeners === 0) {
                var parent_1 = api.parentNode(childElm);
                api.removeChild(parent_1, childElm);
            }
        };
    }
    function createElm(vnode, insertedVnodeQueue) {
        var i, data = vnode.data;
        if (data !== undefined) {
            if (isDef(i = data.hook) && isDef(i = i.init)) {
                i(vnode);
                data = vnode.data;
            }
        }
        var children = vnode.children, sel = vnode.sel;
        if (sel === '!') {
            if (isUndef(vnode.text)) {
                vnode.text = '';
            }
            vnode.elm = api.createComment(vnode.text);
        }
        else if (sel !== undefined) {
            // Parse selector
            var hashIdx = sel.indexOf('#');
            var dotIdx = sel.indexOf('.', hashIdx);
            var hash = hashIdx > 0 ? hashIdx : sel.length;
            var dot = dotIdx > 0 ? dotIdx : sel.length;
            var tag = hashIdx !== -1 || dotIdx !== -1 ? sel.slice(0, Math.min(hash, dot)) : sel;
            var elm = vnode.elm = isDef(data) && isDef(i = data.ns) ? api.createElementNS(i, tag)
                : api.createElement(tag);
            if (hash < dot)
                elm.setAttribute('id', sel.slice(hash + 1, dot));
            if (dotIdx > 0)
                elm.setAttribute('class', sel.slice(dot + 1).replace(/\./g, ' '));
            for (i = 0; i < cbs.create.length; ++i)
                cbs.create[i](emptyNode, vnode);
            if (is.array(children)) {
                for (i = 0; i < children.length; ++i) {
                    var ch = children[i];
                    if (ch != null) {
                        api.appendChild(elm, createElm(ch, insertedVnodeQueue));
                    }
                }
            }
            else if (is.primitive(vnode.text)) {
                api.appendChild(elm, api.createTextNode(vnode.text));
            }
            i = vnode.data.hook; // Reuse variable
            if (isDef(i)) {
                if (i.create)
                    i.create(emptyNode, vnode);
                if (i.insert)
                    insertedVnodeQueue.push(vnode);
            }
        }
        else {
            vnode.elm = api.createTextNode(vnode.text);
        }
        return vnode.elm;
    }
    function addVnodes(parentElm, before, vnodes, startIdx, endIdx, insertedVnodeQueue) {
        for (; startIdx <= endIdx; ++startIdx) {
            var ch = vnodes[startIdx];
            if (ch != null) {
                api.insertBefore(parentElm, createElm(ch, insertedVnodeQueue), before);
            }
        }
    }
    function invokeDestroyHook(vnode) {
        var i, j, data = vnode.data;
        if (data !== undefined) {
            if (isDef(i = data.hook) && isDef(i = i.destroy))
                i(vnode);
            for (i = 0; i < cbs.destroy.length; ++i)
                cbs.destroy[i](vnode);
            if (vnode.children !== undefined) {
                for (j = 0; j < vnode.children.length; ++j) {
                    i = vnode.children[j];
                    if (i != null && typeof i !== "string") {
                        invokeDestroyHook(i);
                    }
                }
            }
        }
    }
    function removeVnodes(parentElm, vnodes, startIdx, endIdx) {
        for (; startIdx <= endIdx; ++startIdx) {
            var i_1 = void 0, listeners = void 0, rm = void 0, ch = vnodes[startIdx];
            if (ch != null) {
                if (isDef(ch.sel)) {
                    invokeDestroyHook(ch);
                    listeners = cbs.remove.length + 1;
                    rm = createRmCb(ch.elm, listeners);
                    for (i_1 = 0; i_1 < cbs.remove.length; ++i_1)
                        cbs.remove[i_1](ch, rm);
                    if (isDef(i_1 = ch.data) && isDef(i_1 = i_1.hook) && isDef(i_1 = i_1.remove)) {
                        i_1(ch, rm);
                    }
                    else {
                        rm();
                    }
                }
                else {
                    api.removeChild(parentElm, ch.elm);
                }
            }
        }
    }
    function updateChildren(parentElm, oldCh, newCh, insertedVnodeQueue) {
        var oldStartIdx = 0, newStartIdx = 0;
        var oldEndIdx = oldCh.length - 1;
        var oldStartVnode = oldCh[0];
        var oldEndVnode = oldCh[oldEndIdx];
        var newEndIdx = newCh.length - 1;
        var newStartVnode = newCh[0];
        var newEndVnode = newCh[newEndIdx];
        var oldKeyToIdx;
        var idxInOld;
        var elmToMove;
        var before;
        while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
            if (oldStartVnode == null) {
                oldStartVnode = oldCh[++oldStartIdx]; // Vnode might have been moved left
            }
            else if (oldEndVnode == null) {
                oldEndVnode = oldCh[--oldEndIdx];
            }
            else if (newStartVnode == null) {
                newStartVnode = newCh[++newStartIdx];
            }
            else if (newEndVnode == null) {
                newEndVnode = newCh[--newEndIdx];
            }
            else if (sameVnode(oldStartVnode, newStartVnode)) {
                patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue);
                oldStartVnode = oldCh[++oldStartIdx];
                newStartVnode = newCh[++newStartIdx];
            }
            else if (sameVnode(oldEndVnode, newEndVnode)) {
                patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue);
                oldEndVnode = oldCh[--oldEndIdx];
                newEndVnode = newCh[--newEndIdx];
            }
            else if (sameVnode(oldStartVnode, newEndVnode)) {
                patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue);
                api.insertBefore(parentElm, oldStartVnode.elm, api.nextSibling(oldEndVnode.elm));
                oldStartVnode = oldCh[++oldStartIdx];
                newEndVnode = newCh[--newEndIdx];
            }
            else if (sameVnode(oldEndVnode, newStartVnode)) {
                patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue);
                api.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
                oldEndVnode = oldCh[--oldEndIdx];
                newStartVnode = newCh[++newStartIdx];
            }
            else {
                if (oldKeyToIdx === undefined) {
                    oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx);
                }
                idxInOld = oldKeyToIdx[newStartVnode.key];
                if (isUndef(idxInOld)) {
                    api.insertBefore(parentElm, createElm(newStartVnode, insertedVnodeQueue), oldStartVnode.elm);
                    newStartVnode = newCh[++newStartIdx];
                }
                else {
                    elmToMove = oldCh[idxInOld];
                    if (elmToMove.sel !== newStartVnode.sel) {
                        api.insertBefore(parentElm, createElm(newStartVnode, insertedVnodeQueue), oldStartVnode.elm);
                    }
                    else {
                        patchVnode(elmToMove, newStartVnode, insertedVnodeQueue);
                        oldCh[idxInOld] = undefined;
                        api.insertBefore(parentElm, elmToMove.elm, oldStartVnode.elm);
                    }
                    newStartVnode = newCh[++newStartIdx];
                }
            }
        }
        if (oldStartIdx > oldEndIdx) {
            before = newCh[newEndIdx + 1] == null ? null : newCh[newEndIdx + 1].elm;
            addVnodes(parentElm, before, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
        }
        else if (newStartIdx > newEndIdx) {
            removeVnodes(parentElm, oldCh, oldStartIdx, oldEndIdx);
        }
    }
    function patchVnode(oldVnode, vnode, insertedVnodeQueue) {
        var i, hook;
        if (isDef(i = vnode.data) && isDef(hook = i.hook) && isDef(i = hook.prepatch)) {
            i(oldVnode, vnode);
        }
        var elm = vnode.elm = oldVnode.elm;
        var oldCh = oldVnode.children;
        var ch = vnode.children;
        if (oldVnode === vnode)
            return;
        if (vnode.data !== undefined) {
            for (i = 0; i < cbs.update.length; ++i)
                cbs.update[i](oldVnode, vnode);
            i = vnode.data.hook;
            if (isDef(i) && isDef(i = i.update))
                i(oldVnode, vnode);
        }
        if (isUndef(vnode.text)) {
            if (isDef(oldCh) && isDef(ch)) {
                if (oldCh !== ch)
                    updateChildren(elm, oldCh, ch, insertedVnodeQueue);
            }
            else if (isDef(ch)) {
                if (isDef(oldVnode.text))
                    api.setTextContent(elm, '');
                addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
            }
            else if (isDef(oldCh)) {
                removeVnodes(elm, oldCh, 0, oldCh.length - 1);
            }
            else if (isDef(oldVnode.text)) {
                api.setTextContent(elm, '');
            }
        }
        else if (oldVnode.text !== vnode.text) {
            api.setTextContent(elm, vnode.text);
        }
        if (isDef(hook) && isDef(i = hook.postpatch)) {
            i(oldVnode, vnode);
        }
    }
    return function patch(oldVnode, vnode) {
        var i, elm, parent;
        var insertedVnodeQueue = [];
        for (i = 0; i < cbs.pre.length; ++i)
            cbs.pre[i]();
        if (!isVnode(oldVnode)) {
            oldVnode = emptyNodeAt(oldVnode);
        }
        if (sameVnode(oldVnode, vnode)) {
            patchVnode(oldVnode, vnode, insertedVnodeQueue);
        }
        else {
            elm = oldVnode.elm;
            parent = api.parentNode(elm);
            createElm(vnode, insertedVnodeQueue);
            if (parent !== null) {
                api.insertBefore(parent, vnode.elm, api.nextSibling(elm));
                removeVnodes(parent, [oldVnode], 0, 0);
            }
        }
        for (i = 0; i < insertedVnodeQueue.length; ++i) {
            insertedVnodeQueue[i].data.hook.insert(insertedVnodeQueue[i]);
        }
        for (i = 0; i < cbs.post.length; ++i)
            cbs.post[i]();
        return vnode;
    };
}
exports.init = init;
//# sourceMappingURL=snabbdom.js.map

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function createElement(tagName) {
    return document.createElement(tagName);
}
function createElementNS(namespaceURI, qualifiedName) {
    return document.createElementNS(namespaceURI, qualifiedName);
}
function createTextNode(text) {
    return document.createTextNode(text);
}
function createComment(text) {
    return document.createComment(text);
}
function insertBefore(parentNode, newNode, referenceNode) {
    parentNode.insertBefore(newNode, referenceNode);
}
function removeChild(node, child) {
    node.removeChild(child);
}
function appendChild(node, child) {
    node.appendChild(child);
}
function parentNode(node) {
    return node.parentNode;
}
function nextSibling(node) {
    return node.nextSibling;
}
function tagName(elm) {
    return elm.tagName;
}
function setTextContent(node, text) {
    node.textContent = text;
}
function getTextContent(node) {
    return node.textContent;
}
function isElement(node) {
    return node.nodeType === 1;
}
function isText(node) {
    return node.nodeType === 3;
}
function isComment(node) {
    return node.nodeType === 8;
}
exports.htmlDomApi = {
    createElement: createElement,
    createElementNS: createElementNS,
    createTextNode: createTextNode,
    createComment: createComment,
    insertBefore: insertBefore,
    removeChild: removeChild,
    appendChild: appendChild,
    parentNode: parentNode,
    nextSibling: nextSibling,
    tagName: tagName,
    setTextContent: setTextContent,
    getTextContent: getTextContent,
    isElement: isElement,
    isText: isText,
    isComment: isComment,
};
exports.default = exports.htmlDomApi;
//# sourceMappingURL=htmldomapi.js.map

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var h_1 = __webpack_require__(1);
function copyToThunk(vnode, thunk) {
    thunk.elm = vnode.elm;
    vnode.data.fn = thunk.data.fn;
    vnode.data.args = thunk.data.args;
    thunk.data = vnode.data;
    thunk.children = vnode.children;
    thunk.text = vnode.text;
    thunk.elm = vnode.elm;
}
function init(thunk) {
    var cur = thunk.data;
    var vnode = cur.fn.apply(undefined, cur.args);
    copyToThunk(vnode, thunk);
}
function prepatch(oldVnode, thunk) {
    var i, old = oldVnode.data, cur = thunk.data;
    var oldArgs = old.args, args = cur.args;
    if (old.fn !== cur.fn || oldArgs.length !== args.length) {
        copyToThunk(cur.fn.apply(undefined, args), thunk);
        return;
    }
    for (i = 0; i < args.length; ++i) {
        if (oldArgs[i] !== args[i]) {
            copyToThunk(cur.fn.apply(undefined, args), thunk);
            return;
        }
    }
    copyToThunk(oldVnode, thunk);
}
exports.thunk = function thunk(sel, key, fn, args) {
    if (args === undefined) {
        args = fn;
        fn = key;
        key = undefined;
    }
    return h_1.h(sel, {
        key: key,
        hook: { init: init, prepatch: prepatch },
        fn: fn,
        args: args
    });
};
exports.default = exports.thunk;
//# sourceMappingURL=thunk.js.map

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function updateClass(oldVnode, vnode) {
    var cur, name, elm = vnode.elm, oldClass = oldVnode.data.class, klass = vnode.data.class;
    if (!oldClass && !klass)
        return;
    if (oldClass === klass)
        return;
    oldClass = oldClass || {};
    klass = klass || {};
    for (name in oldClass) {
        if (!klass[name]) {
            elm.classList.remove(name);
        }
    }
    for (name in klass) {
        cur = klass[name];
        if (cur !== oldClass[name]) {
            elm.classList[cur ? 'add' : 'remove'](name);
        }
    }
}
exports.classModule = { create: updateClass, update: updateClass };
exports.default = exports.classModule;
//# sourceMappingURL=class.js.map

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function invokeHandler(handler, vnode, event) {
    if (typeof handler === "function") {
        // call function handler
        handler.call(vnode, event, vnode);
    }
    else if (typeof handler === "object") {
        // call handler with arguments
        if (typeof handler[0] === "function") {
            // special case for single argument for performance
            if (handler.length === 2) {
                handler[0].call(vnode, handler[1], event, vnode);
            }
            else {
                var args = handler.slice(1);
                args.push(event);
                args.push(vnode);
                handler[0].apply(vnode, args);
            }
        }
        else {
            // call multiple handlers
            for (var i = 0; i < handler.length; i++) {
                invokeHandler(handler[i]);
            }
        }
    }
}
function handleEvent(event, vnode) {
    var name = event.type, on = vnode.data.on;
    // call event handler(s) if exists
    if (on && on[name]) {
        invokeHandler(on[name], vnode, event);
    }
}
function createListener() {
    return function handler(event) {
        handleEvent(event, handler.vnode);
    };
}
function updateEventListeners(oldVnode, vnode) {
    var oldOn = oldVnode.data.on, oldListener = oldVnode.listener, oldElm = oldVnode.elm, on = vnode && vnode.data.on, elm = (vnode && vnode.elm), name;
    // optimization for reused immutable handlers
    if (oldOn === on) {
        return;
    }
    // remove existing listeners which no longer used
    if (oldOn && oldListener) {
        // if element changed or deleted we remove all existing listeners unconditionally
        if (!on) {
            for (name in oldOn) {
                // remove listener if element was changed or existing listeners removed
                oldElm.removeEventListener(name, oldListener, false);
            }
        }
        else {
            for (name in oldOn) {
                // remove listener if existing listener removed
                if (!on[name]) {
                    oldElm.removeEventListener(name, oldListener, false);
                }
            }
        }
    }
    // add new listeners which has not already attached
    if (on) {
        // reuse existing listener or create new
        var listener = vnode.listener = oldVnode.listener || createListener();
        // update vnode for listener
        listener.vnode = vnode;
        // if element changed or added we add all needed listeners unconditionally
        if (!oldOn) {
            for (name in on) {
                // add listener if element was changed or new listeners added
                elm.addEventListener(name, listener, false);
            }
        }
        else {
            for (name in on) {
                // add listener if new listener added
                if (!oldOn[name]) {
                    elm.addEventListener(name, listener, false);
                }
            }
        }
    }
}
exports.eventListenersModule = {
    create: updateEventListeners,
    update: updateEventListeners,
    destroy: updateEventListeners
};
exports.default = exports.eventListenersModule;
//# sourceMappingURL=eventlisteners.js.map

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function updateProps(oldVnode, vnode) {
    var key, cur, old, elm = vnode.elm, oldProps = oldVnode.data.props, props = vnode.data.props;
    if (!oldProps && !props)
        return;
    if (oldProps === props)
        return;
    oldProps = oldProps || {};
    props = props || {};
    for (key in oldProps) {
        if (!props[key]) {
            delete elm[key];
        }
    }
    for (key in props) {
        cur = props[key];
        old = oldProps[key];
        if (old !== cur && (key !== 'value' || elm[key] !== cur)) {
            elm[key] = cur;
        }
    }
}
exports.propsModule = { create: updateProps, update: updateProps };
exports.default = exports.propsModule;
//# sourceMappingURL=props.js.map

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var raf = (typeof window !== 'undefined' && window.requestAnimationFrame) || setTimeout;
var nextFrame = function (fn) { raf(function () { raf(fn); }); };
function setNextFrame(obj, prop, val) {
    nextFrame(function () { obj[prop] = val; });
}
function updateStyle(oldVnode, vnode) {
    var cur, name, elm = vnode.elm, oldStyle = oldVnode.data.style, style = vnode.data.style;
    if (!oldStyle && !style)
        return;
    if (oldStyle === style)
        return;
    oldStyle = oldStyle || {};
    style = style || {};
    var oldHasDel = 'delayed' in oldStyle;
    for (name in oldStyle) {
        if (!style[name]) {
            if (name[0] === '-' && name[1] === '-') {
                elm.style.removeProperty(name);
            }
            else {
                elm.style[name] = '';
            }
        }
    }
    for (name in style) {
        cur = style[name];
        if (name === 'delayed' && style.delayed) {
            for (var name2 in style.delayed) {
                cur = style.delayed[name2];
                if (!oldHasDel || cur !== oldStyle.delayed[name2]) {
                    setNextFrame(elm.style, name2, cur);
                }
            }
        }
        else if (name !== 'remove' && cur !== oldStyle[name]) {
            if (name[0] === '-' && name[1] === '-') {
                elm.style.setProperty(name, cur);
            }
            else {
                elm.style[name] = cur;
            }
        }
    }
}
function applyDestroyStyle(vnode) {
    var style, name, elm = vnode.elm, s = vnode.data.style;
    if (!s || !(style = s.destroy))
        return;
    for (name in style) {
        elm.style[name] = style[name];
    }
}
function applyRemoveStyle(vnode, rm) {
    var s = vnode.data.style;
    if (!s || !s.remove) {
        rm();
        return;
    }
    var name, elm = vnode.elm, i = 0, compStyle, style = s.remove, amount = 0, applied = [];
    for (name in style) {
        applied.push(name);
        elm.style[name] = style[name];
    }
    compStyle = getComputedStyle(elm);
    var props = compStyle['transition-property'].split(', ');
    for (; i < props.length; ++i) {
        if (applied.indexOf(props[i]) !== -1)
            amount++;
    }
    elm.addEventListener('transitionend', function (ev) {
        if (ev.target === elm)
            --amount;
        if (amount === 0)
            rm();
    });
}
exports.styleModule = {
    create: updateStyle,
    update: updateStyle,
    destroy: applyDestroyStyle,
    remove: applyRemoveStyle
};
exports.default = exports.styleModule;
//# sourceMappingURL=style.js.map

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * (c) 2017 Hajime Yamasaki Vukelic
 * All rights reserved.
 */
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
var invokeHandler = function (handler, vnode, event) {
    if (typeof handler === "function") {
        handler.call(vnode, event, vnode);
    }
    else {
        var _a = __read(handler), func = _a[0], args = _a.slice(1);
        func.call.apply(func, __spread([vnode], args, [event, vnode]));
    }
};
var handleEvent = function (event, vnode) {
    var name = event.type;
    var doc = vnode.data.doc;
    if (doc && doc[name]) {
        invokeHandler(doc[name], vnode, event);
    }
};
var createListener = function (container) {
    var handler = function (event) {
        handleEvent(event, handler.vnode);
    };
    return handler;
};
var updateListeners = function (oldVNode, vnode) {
    var oldDoc = oldVNode.data.doc;
    var doc = vnode && vnode.data.doc;
    // Optimization for reused immutable handlers
    if (oldDoc === doc) {
        return;
    }
    var oldListener = oldVNode.docListener;
    // Remove existing listeners
    if (oldDoc && oldListener) {
        Object.keys(oldDoc)
            .filter(function (name) { return !doc || !(name in doc); })
            .forEach(function (name) {
            document.removeEventListener(name, oldListener, false);
        });
    }
    var elm = (vnode && vnode.elm);
    // Add new listeners if necessary
    if (doc) {
        var listener_1 = vnode.docListener || oldVNode.docListener || createListener(elm);
        listener_1.vnode = vnode;
        vnode.docListener = listener_1;
        Object.keys(doc)
            .filter(function (name) { return !oldDoc || !(name in oldDoc); })
            .forEach(function (name) {
            document.addEventListener(name, listener_1, false);
        });
    }
};
var module = {
    create: updateListeners,
    destroy: updateListeners,
    update: updateListeners,
};
exports.module = module;
exports.default = module;
//# sourceMappingURL=docevents.js.map

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * (c) 2017 Hajime Yamasaki Vukelic
 * All rights reserved.
 *
 * Loosely based on snabbdom/src/modules/eventlisteners.ts
 *
 */
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
var keyCodeMap = {
    8: "backspace",
    9: "tab",
    13: "enter",
    27: "escape",
    33: "pageup",
    34: "pagedown",
    37: "left",
    38: "up",
    39: "right",
    40: "down",
    46: "delete",
};
var invokeHandler = function (handler, vnode, event) {
    if (typeof handler === "function") {
        handler.call(vnode, event, vnode);
    }
    else {
        var _a = __read(handler), func = _a[0], args = _a.slice(1);
        func.call.apply(func, __spread([vnode], args, [event, vnode]));
    }
};
var handleEvent = function (event, vnode) {
    var name = keyCodeMap[event.keyCode];
    if (!name) {
        return;
    }
    var keys = vnode.data.keys;
    if (keys && keys[name]) {
        invokeHandler(keys[name], vnode, event);
    }
};
var createListener = function (container) {
    var handler = function (event) {
        handleEvent(event, handler.vnode);
    };
    return handler;
};
var updateListeners = function (oldVNode, vnode) {
    var oldKeys = oldVNode.data.keys;
    var keys = vnode && vnode.data.keys;
    // Optimization for reused immutable handlers
    if (oldKeys === keys) {
        return;
    }
    var oldListener = oldVNode.keysListener;
    var elm = (vnode && vnode.elm);
    // Remove existing listeners
    if (oldKeys && oldListener) {
        var remainingKeys = Object.keys(oldKeys).filter(function (key) { return !keys || !(key in keys); });
        if (!remainingKeys.length) {
            elm.removeEventListener("keyup", oldListener, false);
        }
    }
    // Add new listeners if necessary
    if (keys && Object.keys(keys).length) {
        var listener = vnode.keysListener || oldVNode.keysListener || createListener(elm);
        listener.vnode = vnode;
        vnode.keysListener = listener;
        elm.addEventListener("keyup", listener, false);
    }
};
var module = {
    create: updateListeners,
    destroy: updateListeners,
    update: updateListeners,
};
exports.module = module;
exports.default = module;
//# sourceMappingURL=keyevents.js.map

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * (c) 2017 Hajime Yamasaki Vukelic
 * All rights reserved.
 *
 * Loosely based on snabbdom/src/modules/eventlisteners.ts
 *
 */
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
var invokeHandler = function (handler, vnode, event) {
    if (typeof handler === "function") {
        handler.call(vnode, event, vnode);
    }
    else {
        var _a = __read(handler), func = _a[0], args = _a.slice(1);
        func.call.apply(func, __spread([vnode], args, [event, vnode]));
    }
};
var handleEvent = function (event, vnode) {
    var name = event.type;
    var off = vnode.data.off;
    if (off && off[name]) {
        invokeHandler(off[name], vnode, event);
    }
};
var createListener = function (container) {
    var handler = function (event) {
        if (container.contains(event.target)) {
            // Event target it inside the container so we're not interested.
            return;
        }
        // We will only handle events that are triggered outside the container.
        handleEvent(event, handler.vnode);
    };
    return handler;
};
var updateListeners = function (oldVNode, vnode) {
    var oldOff = oldVNode.data.off;
    var off = vnode && vnode.data.off;
    // Optimization for reused immutable handlers
    if (oldOff === off) {
        return;
    }
    var oldListener = oldVNode.offListener;
    // Remove existing listeners
    if (oldOff && oldListener) {
        Object.keys(oldOff)
            .filter(function (name) { return !off || !(name in off); })
            .forEach(function (name) {
            document.removeEventListener(name, oldListener, false);
        });
    }
    var elm = (vnode && vnode.elm);
    // Add new listeners if necessary
    if (off) {
        var listener_1 = vnode.offListener || oldVNode.offListener || createListener(elm);
        listener_1.vnode = vnode;
        vnode.offListener = listener_1;
        Object.keys(off)
            .filter(function (name) { return !oldOff || !(name in oldOff); })
            .forEach(function (name) {
            document.addEventListener(name, listener_1, false);
        });
    }
};
var module = {
    create: updateListeners,
    destroy: updateListeners,
    update: updateListeners,
};
exports.module = module;
exports.default = module;
//# sourceMappingURL=offevents.js.map

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * (c) 2017 Hajime Yamasaki Vukelic
 * All rights reserved.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var qs = __webpack_require__(27);
var handleEvent = function (data, vnode) {
    var route = vnode.data.route;
    if (typeof route === "function") {
        route(data);
    }
};
var createListener = function () {
    var handler = function (event) {
        var pathData = {
            hash: location.hash,
            params: qs.parse(location.search),
            pathname: location.pathname,
            query: location.search,
            type: "popstate",
        };
        handleEvent(pathData, handler.vnode);
    };
    return handler;
};
var updateListener = function (oldVNode, vnode) {
    var oldRoute = oldVNode.data.route;
    var route = vnode && vnode.data.route;
    if (oldRoute === route) {
        return;
    }
    var oldListener = oldVNode.routeListener;
    // Remove existing listener
    if (oldRoute && oldListener) {
        window.removeEventListener("popstate", oldListener, false);
    }
    if (route) {
        var listener = createListener();
        listener.vnode = vnode;
        vnode.routeListener = listener;
        window.addEventListener("popstate", listener, false);
    }
};
var module = {
    create: updateListener,
    destroy: updateListener,
    update: updateListener,
};
exports.module = module;
exports.default = module;
//# sourceMappingURL=routeevents.js.map

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var strictUriEncode = __webpack_require__(28);
var objectAssign = __webpack_require__(29);
var decodeComponent = __webpack_require__(30);

function encoderForArrayFormat(opts) {
	switch (opts.arrayFormat) {
		case 'index':
			return function (key, value, index) {
				return value === null ? [
					encode(key, opts),
					'[',
					index,
					']'
				].join('') : [
					encode(key, opts),
					'[',
					encode(index, opts),
					']=',
					encode(value, opts)
				].join('');
			};

		case 'bracket':
			return function (key, value) {
				return value === null ? encode(key, opts) : [
					encode(key, opts),
					'[]=',
					encode(value, opts)
				].join('');
			};

		default:
			return function (key, value) {
				return value === null ? encode(key, opts) : [
					encode(key, opts),
					'=',
					encode(value, opts)
				].join('');
			};
	}
}

function parserForArrayFormat(opts) {
	var result;

	switch (opts.arrayFormat) {
		case 'index':
			return function (key, value, accumulator) {
				result = /\[(\d*)\]$/.exec(key);

				key = key.replace(/\[\d*\]$/, '');

				if (!result) {
					accumulator[key] = value;
					return;
				}

				if (accumulator[key] === undefined) {
					accumulator[key] = {};
				}

				accumulator[key][result[1]] = value;
			};

		case 'bracket':
			return function (key, value, accumulator) {
				result = /(\[\])$/.exec(key);
				key = key.replace(/\[\]$/, '');

				if (!result) {
					accumulator[key] = value;
					return;
				} else if (accumulator[key] === undefined) {
					accumulator[key] = [value];
					return;
				}

				accumulator[key] = [].concat(accumulator[key], value);
			};

		default:
			return function (key, value, accumulator) {
				if (accumulator[key] === undefined) {
					accumulator[key] = value;
					return;
				}

				accumulator[key] = [].concat(accumulator[key], value);
			};
	}
}

function encode(value, opts) {
	if (opts.encode) {
		return opts.strict ? strictUriEncode(value) : encodeURIComponent(value);
	}

	return value;
}

function keysSorter(input) {
	if (Array.isArray(input)) {
		return input.sort();
	} else if (typeof input === 'object') {
		return keysSorter(Object.keys(input)).sort(function (a, b) {
			return Number(a) - Number(b);
		}).map(function (key) {
			return input[key];
		});
	}

	return input;
}

exports.extract = function (str) {
	return str.split('?')[1] || '';
};

exports.parse = function (str, opts) {
	opts = objectAssign({arrayFormat: 'none'}, opts);

	var formatter = parserForArrayFormat(opts);

	// Create an object with no prototype
	// https://github.com/sindresorhus/query-string/issues/47
	var ret = Object.create(null);

	if (typeof str !== 'string') {
		return ret;
	}

	str = str.trim().replace(/^(\?|#|&)/, '');

	if (!str) {
		return ret;
	}

	str.split('&').forEach(function (param) {
		var parts = param.replace(/\+/g, ' ').split('=');
		// Firefox (pre 40) decodes `%3D` to `=`
		// https://github.com/sindresorhus/query-string/pull/37
		var key = parts.shift();
		var val = parts.length > 0 ? parts.join('=') : undefined;

		// missing `=` should be `null`:
		// http://w3.org/TR/2012/WD-url-20120524/#collect-url-parameters
		val = val === undefined ? null : decodeComponent(val);

		formatter(decodeComponent(key), val, ret);
	});

	return Object.keys(ret).sort().reduce(function (result, key) {
		var val = ret[key];
		if (Boolean(val) && typeof val === 'object' && !Array.isArray(val)) {
			// Sort object keys, not values
			result[key] = keysSorter(val);
		} else {
			result[key] = val;
		}

		return result;
	}, Object.create(null));
};

exports.stringify = function (obj, opts) {
	var defaults = {
		encode: true,
		strict: true,
		arrayFormat: 'none'
	};

	opts = objectAssign(defaults, opts);

	var formatter = encoderForArrayFormat(opts);

	return obj ? Object.keys(obj).sort().map(function (key) {
		var val = obj[key];

		if (val === undefined) {
			return '';
		}

		if (val === null) {
			return encode(key, opts);
		}

		if (Array.isArray(val)) {
			var result = [];

			val.slice().forEach(function (val2) {
				if (val2 === undefined) {
					return;
				}

				result.push(formatter(key, val2, result.length));
			});

			return result.join('&');
		}

		return encode(key, opts) + '=' + encode(val, opts);
	}).filter(function (x) {
		return x.length > 0;
	}).join('&') : '';
};


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = function (str) {
	return encodeURIComponent(str).replace(/[!'()*]/g, function (c) {
		return '%' + c.charCodeAt(0).toString(16).toUpperCase();
	});
};


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var token = '%[a-f0-9]{2}';
var singleMatcher = new RegExp(token, 'gi');
var multiMatcher = new RegExp('(' + token + ')+', 'gi');

function decodeComponents(components, split) {
	try {
		// Try to decode the entire string first
		return decodeURIComponent(components.join(''));
	} catch (err) {
		// Do nothing
	}

	if (components.length === 1) {
		return components;
	}

	split = split || 1;

	// Split the array in 2 parts
	var left = components.slice(0, split);
	var right = components.slice(split);

	return Array.prototype.concat.call([], decodeComponents(left), decodeComponents(right));
}

function decode(input) {
	try {
		return decodeURIComponent(input);
	} catch (err) {
		var tokens = input.match(singleMatcher);

		for (var i = 1; i < tokens.length; i++) {
			input = decodeComponents(tokens, i).join('');

			tokens = input.match(singleMatcher);
		}

		return input;
	}
}

function customDecodeURIComponent(input) {
	// Keep track of all the replacements and prefill the map with the `BOM`
	var replaceMap = {
		'%FE%FF': '\uFFFD\uFFFD',
		'%FF%FE': '\uFFFD\uFFFD'
	};

	var match = multiMatcher.exec(input);
	while (match) {
		try {
			// Decode as big chunks as possible
			replaceMap[match[0]] = decodeURIComponent(match[0]);
		} catch (err) {
			var result = decode(match[0]);

			if (result !== match[0]) {
				replaceMap[match[0]] = result;
			}
		}

		match = multiMatcher.exec(input);
	}

	// Add `%C2` at the end of the map to make sure it does not replace the combinator before everything else
	replaceMap['%C2'] = '\uFFFD';

	var entries = Object.keys(replaceMap);

	for (var i = 0; i < entries.length; i++) {
		// Replace all decoded components
		var key = entries[i];
		input = input.replace(new RegExp(key, 'g'), replaceMap[key]);
	}

	return input;
}

module.exports = function (encodedURI) {
	if (typeof encodedURI !== 'string') {
		throw new TypeError('Expected `encodedURI` to be of type `string`, got `' + typeof encodedURI + '`');
	}

	try {
		encodedURI = encodedURI.replace(/\+/g, ' ');

		// Try the built in decoder first
		return decodeURIComponent(encodedURI);
	} catch (err) {
		// Fallback to a more advanced decoder
		return customDecodeURIComponent(encodedURI);
	}
};


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * (c) 2017 Hajime Yamasaki Vukelic
 * All rights reserved.
 */
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
var html_1 = __webpack_require__(5);
var is = __webpack_require__(4);
/**
 * Clears the timer if one was set by the patch function.
 */
var cancelNextRender = function (state) {
    if (state.nextRenderId) {
        clearTimeout(state.nextRenderId);
        state.nextRenderId = null;
    }
};
/**
 * Cancel the next-scheduled render, and reschedule another render
 */
var setNextRender = function (state, render) {
    cancelNextRender(state);
    state.nextRenderId = setTimeout(render);
};
/**
 * Create a renderer function
 *
 * The renderer function will keep updating the vnodes stored in the runner
 * state using a specified view function.
 */
var createRenderer = function (state, patch, view) {
    return function (actionHandler) {
        state.vnodes = patch(state.vnodes, view({ model: state.model, act: actionHandler }));
        state.nextRenderId = null;
    };
};
/**
 * Retrieves the value within an object, at given scope.
 */
var scopeGet = function (scope, object) {
    return scope.length
        ? scopeGet(scope.slice(1), object[scope[0]])
        : object;
};
/**
 * Returns a copy of the object with the value assigned to the property at specified scope
 */
var scopeSet = function (scope, val, object) {
    if (scope.length === 0) {
        return val;
    }
    var _a = __read(scope), first = _a[0], rest = _a.slice(1);
    return Array.isArray(object)
        ? (function () {
            var copy = object.concat([]);
            copy[first] = scopeSet(rest, val, copy[first]);
            return copy;
        })()
        : __assign({}, object, (_b = {}, _b[first] = scopeSet(rest, val, object[first]), _b));
    var _b;
};
var scopePatch = function (scope, fn, object) {
    return scopeSet(scope, fn(scopeGet(scope, object)), object);
};
var createPatcher = function (state, middleware, patchCallback, scope, parentScope, scopeCallback) {
    if (scope === void 0) { scope = []; }
    if (parentScope === void 0) { parentScope = []; }
    if (scopeCallback === void 0) { scopeCallback = function (model) { return model; }; }
    var mutate = function (fn) { return function (model) {
        var updated = scope
            ? scopePatch(scope, fn, model)
            : fn(model);
        return scopePatch(parentScope, scopeCallback, updated);
    }; };
    var patcher = function (fn) {
        state.model = middleware(mutate(fn))(state.model);
        patchCallback();
    };
    patcher.as = function (childScope, parentCallback) {
        var patcherScope = scope ? scope.concat(childScope) : childScope;
        return createPatcher(state, middleware, patchCallback, patcherScope, scope, parentCallback);
    };
    return patcher;
};
var actionHandlerFactory = function (patcher, actions, prefix) {
    if (prefix === void 0) { prefix = []; }
    var handler = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return function () {
            var eventArgs = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                eventArgs[_i] = arguments[_i];
            }
            var _a = __read(prefix.concat(args, eventArgs)), action = _a[0], actionArgs = _a.slice(1);
            if (action == null) {
                return;
            }
            var actionFn = actions[action];
            if (!actionFn) {
                throw Error("No action found for message [" + action + ", " + actionArgs.join(", ") + "]");
            }
            actionFn.apply(void 0, __spread([patcher], actionArgs));
        };
    };
    handler.as = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return actionHandlerFactory(patcher, actions, prefix.concat(args));
    };
    handler.prefix = prefix;
    return handler;
};
/**
 * Create an action handler
 *
 * Action handler is a proxy event/hook handler factory which allows the user to
 * specify messages which will then be tied to action handlers when the events
 * trigger.
 *
 * A message constists of an action identifier, and zero or more arbitrary
 * user-specified arguments. The message is specified in the prop, and it is
 * passsed to the action handler, which returns an event handler that is used by
 * Snabbdom to handle the events. When an event is triggered, the control is
 * returned to the action handler which uses the original message to determine
 * which action handler will be invoked.
 */
var createActionHandler = function (state, actions, render, middleware) {
    var patcher = createPatcher(state, middleware, function () { return setNextRender(state, function () { return render(handler); }); });
    var handler = actionHandlerFactory(patcher, actions);
    return handler;
};
var DEFAULT_OPTIONS = {
    middleware: [],
    patch: html_1.patch,
    plugins: [],
    root: "#app",
};
/**
 * Create and start a new application runtime
 *
 * The runner function takes a model, actions mapping, view function, and an
 * an object containing runner options, and kickstarts the app.
 */
var runner = function (model, actions, view, options) {
    if (options === void 0) { options = {}; }
    var opt = __assign({}, DEFAULT_OPTIONS, options);
    var state = {
        model: model,
        nextRenderId: null,
        vnodes: is.str(opt.root) ? document.querySelector(opt.root) : opt.root,
    };
    // Collect plugin actions
    opt.plugins.forEach(function (_a) {
        var pluginActions = _a.actions;
        actions = __assign({}, pluginActions, actions);
    });
    // Prepare the engine
    var middlewareStack = opt.middleware.reduce(function (m1, m2) {
        return function (fn) { return m1(m2(fn)); };
    }, function (fn) { return fn; });
    var render = createRenderer(state, opt.patch, view);
    var actionHandler = createActionHandler(state, actions, render, middlewareStack);
    var pluginActionHandler = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return actionHandler.apply(void 0, __spread(args))();
    };
    // Init plugins
    opt.plugins.forEach(function (_a) {
        var init = _a.init;
        init(pluginActionHandler, state);
    });
    // Start rendering
    render(actionHandler);
};
exports.runner = runner;
exports.default = runner;
//# sourceMappingURL=runner.js.map

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * (c) 2017 Hajime Yamasaki Vukelic
 * All rights reserved.
 */
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
var createChannel = function () {
    return (function () {
        var listeners = [];
        return {
            addListener: function (fn) {
                listeners.push(fn);
            },
            removeListener: function (fn) {
                listeners = listeners.filter(function (f) { return f !== fn; });
            },
            send: function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                listeners.forEach(function (fn) { return fn.apply(void 0, __spread(args)); });
            },
        };
    })();
};
exports.createChannel = createChannel;


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * (c) 2017 Hajime Yamasaki Vukelic
 * All rights reserved.
 */
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
var css = __webpack_require__(34);
var icon = __webpack_require__(37);
var duckweed = __webpack_require__(0);
var devtool_1 = __webpack_require__(8);
var diff = __webpack_require__(38);
var scrubber = __webpack_require__(41);
var init = function () { return ({
    currentIndex: 0,
    diff: diff.init(),
    history: [],
    open: false,
    scrubber: scrubber.init(),
}); };
exports.init = init;
// Actions
var Action;
(function (Action) {
    Action["TogglePanel"] = "TogglePanel";
    Action["JumpToHistoryItem"] = "JumpToHistoryItem";
    Action["ClearHistory"] = "ClearHistory";
    Action["DiffAction"] = "DiffAction";
    Action["ScrubberAction"] = "ScrubberAction";
})(Action || (Action = {}));
exports.Action = Action;
var jumpTo = function (model, index, setPos) {
    if (setPos === void 0) { setPos = false; }
    if (index === model.currentIndex) {
        return model;
    }
    devtool_1.host2client.send("injectState", model.history[index].after);
    return __assign({}, model, { currentIndex: index, diff: {
            diff: model.history[index].diff,
            scope: model.diff.scope,
        }, scrubber: setPos
            ? __assign({}, model.scrubber, { pos: index / (model.history.length - 1) }) : model.scrubber });
};
var actions = (_a = {},
    _a[Action.TogglePanel] = function (patch) {
        patch(function (model) { return (__assign({}, model, { open: !model.open })); });
    },
    _a[Action.JumpToHistoryItem] = function (patch, index) {
        patch(function (model) { return jumpTo(model, index, true); });
    },
    _a[Action.ClearHistory] = function (patch) {
        patch(function (model) {
            var currentState = model.history[model.currentIndex];
            return __assign({}, model, { currentIndex: 0, diff: {
                    diff: currentState.after,
                    scope: [],
                }, history: [currentState], scrubber: __assign({}, model.scrubber, { pos: 1 }) });
        });
    },
    _a[Action.DiffAction] = function (patch, action) {
        var args = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            args[_i - 2] = arguments[_i];
        }
        (_a = diff.actions)[action].apply(_a, __spread([patch.as(["diff"])], args));
        var _a;
    },
    _a[Action.ScrubberAction] = function (patch, action) {
        var args = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            args[_i - 2] = arguments[_i];
        }
        var scoped = patch.as(["scrubber"], function (model) {
            if (action !== scrubber.Action.Move) {
                return model;
            }
            var pos = model.scrubber.pos;
            var length = model.history.length;
            var index = Math.round(pos * (length - 1));
            return jumpTo(model, index);
        });
        (_a = scrubber.actions)[action].apply(_a, __spread([scoped], args));
        var _a;
    },
    _a);
exports.actions = actions;
var view = function (_a) {
    var model = _a.model, act = _a.act;
    return (duckweed.html("div", { class: css.__DUCKWEED_DEVTOOL__ },
        duckweed.html("div", { class: css.toolbar },
            duckweed.html("button", { class: css.panelButton, "on-click": act([Action.TogglePanel]) },
                duckweed.html("img", { src: icon, alt: model.open ? "close" : "open" }))),
        model.open
            ? (duckweed.html("div", { class: css.panelContents, style: {
                    delayed: {
                        transform: "translateY(0)",
                    },
                    remove: {
                        transform: "translateY(30vh)",
                    },
                    transform: "translateY(30vh)",
                    transition: "transform 0.2s",
                } },
                duckweed.html(scrubber.view, { model: model.scrubber, act: act.as(Action.ScrubberAction), jumpTo: act.as(Action.JumpToHistoryItem), clear: act.as(Action.ClearHistory), current: model.currentIndex, length: model.history.length }),
                duckweed.html(diff.view, { model: model.diff, act: act.as(Action.DiffAction) })))
            : null));
};
exports.view = view;
var _a;


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(35);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"sourceMap":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(3)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/css-loader/index.js??ref--1-1!../../node_modules/postcss-loader/lib/index.js??ref--1-2!../../node_modules/stylus-loader/index.js!./index.styl", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js??ref--1-1!../../node_modules/postcss-loader/lib/index.js??ref--1-2!../../node_modules/stylus-loader/index.js!./index.styl");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(true);
// imports


// module
exports.push([module.i, "/**\n * (c) 2017 Hajime Yamasaki Vukelic\n * All rights reserved.\n */\n.__DUCKWEED_DEVTOOL__-AIqBV {\n  font-family: Arial, Helvetica, sans-serif;\n  font-size: 16px;\n  line-height: 120%;\n}\n.__DUCKWEED_DEVTOOL__-AIqBV * {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  font-size: 100%;\n  font-style: normal;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  text-decoration: none;\n}\n.toolbar-13rPB {\n  background: #555;\n  border-bottom-left-radius: 4px;\n  border-top-left-radius: 4px;\n  bottom: 4px;\n  opacity: 0.3;\n  padding: 2px 4px;\n  position: fixed;\n  right: 0;\n  z-index: 5001;\n}\n.toolbar-13rPB:hover {\n  opacity: 1;\n}\n.panelButton-3KBNZ {\n  background: transparent;\n  border: none;\n  color: #fff;\n  cursor: pointer;\n}\n.panelContents-1I8al {\n  background: rgba(255,255,255,0.8);\n  bottom: 0;\n  -webkit-box-shadow: 0 0 10px rgba(0,0,0,0.3);\n          box-shadow: 0 0 10px rgba(0,0,0,0.3);\n  height: 30vh;\n  left: 0;\n  overflow: hidden;\n  padding: 0.2rem 0.2rem 0.5rem;\n  position: fixed;\n  right: 0;\n  -webkit-transition: all;\n  transition: all;\n  z-index: 5000;\n}\n", "", {"version":3,"sources":["C:/Code/duckweed-devtool/src/panel/C:/Code/duckweed-devtool/src/panel/index.styl","C:/Code/duckweed-devtool/src/panel/C:/Code/duckweed-devtool/index.styl"],"names":[],"mappings":"AAAA;;;GCGG;ADEH;EACE,0CAAA;EACA,gBAAA;EACA,kBAAA;CCAD;ADED;EACE,+BAAA;UAAA,uBAAA;EACA,gBAAA;EACA,mBAAA;EACA,iBAAA;EACA,UAAA;EACA,WAAA;EACA,sBAAA;CCAD;ADED;EACE,iBAAA;EACA,+BAAA;EACA,4BAAA;EACA,YAAA;EACA,aAAA;EACA,iBAAA;EACA,gBAAA;EACA,SAAA;EACA,cAAA;CCAD;ADEC;EACE,WAAA;CCAH;ADED;EACE,wBAAA;EACA,aAAA;EACA,YAAA;EACA,gBAAA;CCAD;ADED;EACE,kCAAA;EACA,UAAA;EACA,6CAAA;UAAA,qCAAA;EACA,aAAA;EACA,QAAA;EACA,iBAAA;EACA,8BAAA;EACA,gBAAA;EACA,SAAA;EACA,wBAAA;EAAA,gBAAA;EACA,cAAA;CCAD","file":"index.styl","sourcesContent":["/**\n * (c) 2017 Hajime Yamasaki Vukelic\n * All rights reserved.\n */\n\n.__DUCKWEED_DEVTOOL__\n  font-family Arial, Helvetica, sans-serif\n  font-size 16px\n  line-height 120%\n\n.__DUCKWEED_DEVTOOL__ *\n  box-sizing border-box\n  font-size 100%\n  font-style normal\n  list-style none\n  margin 0\n  padding 0\n  text-decoration none\n\n.toolbar\n  background #555555\n  border-bottom-left-radius 4px\n  border-top-left-radius 4px\n  bottom 4px\n  opacity 0.3\n  padding 2px 4px\n  position fixed\n  right 0\n  z-index 5001\n\n  &:hover\n    opacity 1\n\n.panelButton\n  background transparent\n  border none\n  color white\n  cursor pointer\n\n.panelContents\n  background transparentify(white, 0.8)\n  bottom 0\n  box-shadow 0 0 10px transparentify(black, 0.3)\n  height 30vh\n  left 0\n  overflow hidden\n  padding 0.2rem 0.2rem 0.5rem\n  position fixed\n  right 0\n  transition all\n  z-index 5000\n","/**\n * (c) 2017 Hajime Yamasaki Vukelic\n * All rights reserved.\n */\n.__DUCKWEED_DEVTOOL__ {\n  font-family: Arial, Helvetica, sans-serif;\n  font-size: 16px;\n  line-height: 120%;\n}\n.__DUCKWEED_DEVTOOL__ * {\n  box-sizing: border-box;\n  font-size: 100%;\n  font-style: normal;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  text-decoration: none;\n}\n.toolbar {\n  background: #555;\n  border-bottom-left-radius: 4px;\n  border-top-left-radius: 4px;\n  bottom: 4px;\n  opacity: 0.3;\n  padding: 2px 4px;\n  position: fixed;\n  right: 0;\n  z-index: 5001;\n}\n.toolbar:hover {\n  opacity: 1;\n}\n.panelButton {\n  background: transparent;\n  border: none;\n  color: #fff;\n  cursor: pointer;\n}\n.panelContents {\n  background: rgba(255,255,255,0.8);\n  bottom: 0;\n  box-shadow: 0 0 10px rgba(0,0,0,0.3);\n  height: 30vh;\n  left: 0;\n  overflow: hidden;\n  padding: 0.2rem 0.2rem 0.5rem;\n  position: fixed;\n  right: 0;\n  transition: all;\n  z-index: 5000;\n}\n"],"sourceRoot":""}]);

// exports
exports.locals = {
	"__DUCKWEED_DEVTOOL__": "__DUCKWEED_DEVTOOL__-AIqBV",
	"toolbar": "toolbar-13rPB",
	"panelButton": "panelButton-3KBNZ",
	"panelContents": "panelContents-1I8al"
};

/***/ }),
/* 36 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiCiAgIGlkPSJzdmc1MTM5IgogICB2ZXJzaW9uPSIxLjEiCiAgIHZpZXdCb3g9IjAgMCAzLjQ4MTQ1NiAzLjAzNzQ5MjgiCiAgIGhlaWdodD0iMy4wMzc0OTI4bW0iCiAgIHdpZHRoPSIzLjQ4MTQ1Nm1tIj4KICA8ZGVmcwogICAgIGlkPSJkZWZzNTEzMyI+CiAgICA8cmFkaWFsR3JhZGllbnQKICAgICAgIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIgogICAgICAgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCgwLjAyNTY1ODQzLDAuMDM1MDQ3ODEsLTAuMDQ3NDIxOTksMC4wMzQ3MTc0NSw2LjU3MjMwMDksMTQ4LjU5OTY1KSIKICAgICAgIHI9IjUxLjE2NzkxMiIKICAgICAgIGZ5PSI4NC44NDA0ODUiCiAgICAgICBmeD0iLTE1OC4zNTY5MiIKICAgICAgIGN5PSI4NC44NDA0ODUiCiAgICAgICBjeD0iLTE1OC4zNTY5MiIKICAgICAgIGlkPSJyYWRpYWxHcmFkaWVudDQ0OTMiCiAgICAgICB4bGluazpocmVmPSIjbGluZWFyR3JhZGllbnQ0NTIyIiAvPgogICAgPGxpbmVhckdyYWRpZW50CiAgICAgICBpZD0ibGluZWFyR3JhZGllbnQ0NTIyIj4KICAgICAgPHN0b3AKICAgICAgICAgc3R5bGU9InN0b3AtY29sb3I6IzhjYzMzYTtzdG9wLW9wYWNpdHk6MSIKICAgICAgICAgb2Zmc2V0PSIwIgogICAgICAgICBpZD0ic3RvcDQ1MTgiIC8+CiAgICAgIDxzdG9wCiAgICAgICAgIHN0eWxlPSJzdG9wLWNvbG9yOiMzZjdjMDQ7c3RvcC1vcGFjaXR5OjEiCiAgICAgICAgIG9mZnNldD0iMSIKICAgICAgICAgaWQ9InN0b3A0NTIwIiAvPgogICAgPC9saW5lYXJHcmFkaWVudD4KICA8L2RlZnM+CiAgPG1ldGFkYXRhCiAgICAgaWQ9Im1ldGFkYXRhNTEzNiI+CiAgICA8cmRmOlJERj4KICAgICAgPGNjOldvcmsKICAgICAgICAgcmRmOmFib3V0PSIiPgogICAgICAgIDxkYzpmb3JtYXQ+aW1hZ2Uvc3ZnK3htbDwvZGM6Zm9ybWF0PgogICAgICAgIDxkYzp0eXBlCiAgICAgICAgICAgcmRmOnJlc291cmNlPSJodHRwOi8vcHVybC5vcmcvZGMvZGNtaXR5cGUvU3RpbGxJbWFnZSIgLz4KICAgICAgICA8ZGM6dGl0bGU+PC9kYzp0aXRsZT4KICAgICAgPC9jYzpXb3JrPgogICAgPC9yZGY6UkRGPgogIDwvbWV0YWRhdGE+CiAgPGcKICAgICB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0LjAwODU4NTEsLTE0NS4wNDY3MykiCiAgICAgaWQ9ImxheWVyMSI+CiAgICA8cGF0aAogICAgICAgaWQ9InBhdGg0NDg1IgogICAgICAgZD0ibSAtMy42NjE3ODAxLDE0Ny4zODIxNCBjIDAuNzU5NTAyLDEuMTc4NTQgMi42NTM3MjQsMC43OTEwOCAzLjAxMTgxMzk4LC0wLjU0OTk5IDAuNDMwMzA5MSwtMS42MTE1MiAtMC4zMjAzMzIxLC0xLjg5MjM2IC0xLjQ2NjYyMTk4LC0xLjc1NDcxIC0wLjg5NzQ3NiwwLjEwNzc4IC0yLjYzMjA2NCwwLjY4MDk0IC0xLjU0NTE5MiwyLjMwNDcgeiIKICAgICAgIHN0eWxlPSJvcGFjaXR5OjE7ZmlsbDp1cmwoI3JhZGlhbEdyYWRpZW50NDQ5Myk7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjAuMjY0NTgzMzI7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLWRhc2hvZmZzZXQ6MDtzdHJva2Utb3BhY2l0eToxIiAvPgogIDwvZz4KPC9zdmc+Cg=="

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * (c) 2017 Hajime Yamasaki Vukelic
 * All rights reserved.
 */
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
var css = __webpack_require__(39);
var duckweed = __webpack_require__(0);
var diff_1 = __webpack_require__(9);
var is = __webpack_require__(10);
var init = function () { return ({
    diff: null,
    scope: [],
}); };
exports.init = init;
// Actions
var Action;
(function (Action) {
    Action["PushScope"] = "PushScope";
    Action["SetScope"] = "SetScope";
})(Action || (Action = {}));
exports.Action = Action;
var actions = (_a = {},
    _a[Action.PushScope] = function (patch, key) {
        patch(function (model) { return (__assign({}, model, { scope: model.scope.concat(key) })); });
    },
    _a[Action.SetScope] = function (patch, index) {
        patch(function (model) { return (__assign({}, model, { scope: index === null ? [] : model.scope.slice(0, index + 1) })); });
    },
    _a);
exports.actions = actions;
var diffValue = function (d) {
    switch (d.type) {
        case "del":
            return d.prev;
        default:
            return d.next;
    }
};
var scoped = function (scope, obj) {
    return typeof obj === "undefined" || scope.length === 0
        ? obj
        : scoped(scope.slice(1), isDiff(obj) ? diffValue(obj)[scope[0]] : obj[scope[0]]);
};
var isDiff = function (diff) {
    return diff instanceof diff_1.Diff;
};
var diffView = function (act, diff) { return (duckweed.html("span", { class: css[diff.type] }, diff.type === "del"
    ? JSON.stringify(diff.prev)
    : valueView(act, diff.next))); };
var renderValue = function (act, v, k, extraClass) {
    if (extraClass === void 0) { extraClass = []; }
    if (is.container(v)) {
        return [
            duckweed.html("span", { class: [css.expandObject].concat(extraClass), "on-click": k ? act(Action.PushScope, k) : undefined }, is.pojo(v) ? "{}" : "[]"),
            duckweed.html("span", { class: css.preview }, JSON.stringify(v)),
        ];
    }
    return duckweed.html("span", { class: extraClass }, "" + v);
};
var objDiff = function (act, obj) { return (duckweed.html("div", { class: css.obj }, Object.keys(obj).map(function (k) { return [k, obj[k]]; }).map(function (_a) {
    var _b = __read(_a, 2), k = _b[0], v = _b[1];
    return duckweed.html("div", { class: css.keyVal },
        duckweed.html("span", { class: css.key },
            k,
            ":"),
        duckweed.html("span", { class: css.val }, (function () {
            if (isDiff(v)) {
                return renderValue(act, v.next, k, [css[v.type]]);
            }
            return renderValue(act, v, k);
        })()));
}))); };
var valueView = function (act, v) {
    if (isDiff(v)) {
        return diffView(act, v);
    }
    if (is.container(v)) {
        return objDiff(act, v);
    }
    return "" + v;
};
var view = function (_a) {
    var model = _a.model, act = _a.act;
    return (duckweed.html("div", { class: css.diffPane },
        duckweed.html("div", { class: css.breadcrumbs },
            model.scope.length
                ? [
                    duckweed.html("button", { class: [css.crumbButton, css.toRoot], "on-click": act(Action.SetScope, null) }, "go to root"),
                    duckweed.html("button", { class: [css.crumbButton, css.upOne], "on-click": act(Action.SetScope, model.scope.length - 2) }, "up one level"),
                ]
                : "Model",
            model.scope.map(function (key, index) {
                return duckweed.html("span", { class: css.crumb, "on-click": act(Action.SetScope, index) }, key);
            })),
        duckweed.html("div", { class: css.inspector }, valueView(act, scoped(model.scope, model.diff)))));
};
exports.view = view;
var _a;


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(40);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"sourceMap":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(3)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/css-loader/index.js??ref--1-1!../../node_modules/postcss-loader/lib/index.js??ref--1-2!../../node_modules/stylus-loader/index.js!./diff.styl", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js??ref--1-1!../../node_modules/postcss-loader/lib/index.js??ref--1-2!../../node_modules/stylus-loader/index.js!./diff.styl");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(true);
// imports


// module
exports.push([module.i, "/**\n * (c) 2017 Hajime Yamasaki Vukelic\n * All rights reserved.\n */\n.diffPane-3c7Xp {\n  max-height: calc(30vh - 32px);\n  overflow-y: auto;\n  padding: 1rem 0.5rem;\n}\n.breadcrumbs-1qPwy {\n  border-bottom: 1px solid #ddd;\n  margin-bottom: 0.2rem;\n  padding-bottom: 0.2rem;\n}\n.crumbButton-3_Dik {\n  background-color: transparent;\n  background-size: cover;\n  cursor: pointer;\n  height: 18px;\n  margin-right: 0.5rem;\n  overflow: hidden;\n  text-indent: -100vw;\n  width: 18px;\n}\n.toRoot-1y7LC {\n  background-image: url(" + __webpack_require__(48) + ");\n}\n.upOne-3IbEx {\n  background-image: url(" + __webpack_require__(47) + ");\n}\n.crumb-3MmUj {\n  cursor: pointer;\n  display: inline-block;\n  font-family: monospace;\n  padding: 0.1rem 0.4rem;\n}\n.crumb-3MmUj:hover {\n  text-decoration: underline;\n}\n.crumb-3MmUj::before {\n  content: \".\";\n}\n.keyVal-3Mi7o {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  font-family: monospace;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  margin: 0.25rem 0;\n}\n.key-1pLcm {\n  display: inline-block;\n  width: 10rem;\n}\n.val-GtOkb {\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  overflow: hidden;\n  width: 100%;\n}\n.expandObject-299w6 {\n  background: rgba(0,0,0,0.6);\n  border-radius: 3px;\n  color: #890;\n  cursor: pointer;\n  display: inline-block;\n  margin-right: 0.3rem;\n  padding: 0.1rem 0.2rem;\n}\n.expandObjecthover-3nQHt {\n  color: #fff;\n}\n.preview-2Vk7a {\n  display: inline-block;\n  opacity: 0.5;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  width: 100%;\n}\n.ident-10V3I {\n  color: inherit;\n}\n.update-1H5I0 {\n  color: #5a26a8;\n}\n.add-2uWUU {\n  color: #83a826;\n}\n.del-3gc2h {\n  color: #a82626;\n  text-decoration: line-through;\n}\n", "", {"version":3,"sources":["C:/Code/duckweed-devtool/src/panel/C:/Code/duckweed-devtool/src/panel/diff.styl","C:/Code/duckweed-devtool/src/panel/C:/Code/duckweed-devtool/diff.styl"],"names":[],"mappings":"AAAA;;;GCGG;ADEH;EACE,8BAAA;EACA,iBAAA;EACA,qBAAA;CCAD;ADED;EACE,8BAAA;EACA,sBAAA;EACA,uBAAA;CCAD;ADED;EACE,8BAAA;EACA,uBAAA;EACA,gBAAA;EACA,aAAA;EACA,qBAAA;EACA,iBAAA;EACA,oBAAA;EACA,YAAA;CCAD;ADED;EACE,gDAAA;CCAD;ADED;EACE,gDAAA;CCAD;ADED;EACE,gBAAA;EACA,sBAAA;EACA,uBAAA;EACA,uBAAA;CCAD;ADEC;EACE,2BAAA;CCAH;ADEC;EACE,aAAA;CCAH;ADED;EACE,qBAAA;EAAA,qBAAA;EAAA,cAAA;EACA,uBAAA;EACA,0BAAA;MAAA,uBAAA;UAAA,+BAAA;EACA,kBAAA;CCAD;ADED;EACE,sBAAA;EACA,aAAA;CCAD;ADED;EACE,4BAAA;EAAA,4BAAA;EAAA,qBAAA;EACA,0BAAA;MAAA,uBAAA;UAAA,+BAAA;EACA,iBAAA;EACA,YAAA;CCAD;ADED;EACE,4BAAA;EACA,mBAAA;EACA,YAAA;EACA,gBAAA;EACA,sBAAA;EACA,qBAAA;EACA,uBAAA;CCAD;ADEC;EACE,YAAA;CCAH;ADED;EACE,sBAAA;EACA,aAAA;EACA,iBAAA;EACA,wBAAA;EACA,oBAAA;EACA,YAAA;CCAD;ADED;EACE,eAAA;CCAD;ADED;EACE,eAAA;CCAD;ADED;EACE,eAAA;CCAD;ADED;EACE,eAAA;EACA,8BAAA;CCAD","file":"diff.styl","sourcesContent":["/**\n * (c) 2017 Hajime Yamasaki Vukelic\n * All rights reserved.\n */\n\n.diffPane\n  max-height calc(30vh - 32px)\n  overflow-y auto\n  padding 1rem 0.5rem;\n\n.breadcrumbs\n  border-bottom 1px solid #ddd\n  margin-bottom 0.2rem\n  padding-bottom 0.2rem\n\n.crumbButton\n  background-color: transparent\n  background-size cover\n  cursor pointer\n  height 18px\n  margin-right 0.5rem\n  overflow hidden\n  text-indent -100vw\n  width 18px\n\n.toRoot\n  background-image url(\"icons/up-fast.svg\")\n\n.upOne\n  background-image url(\"icons/up.svg\")\n\n.crumb\n  cursor pointer\n  display inline-block\n  font-family monospace\n  padding 0.1rem 0.4rem\n\n  &:hover\n    text-decoration underline\n\n  &::before\n    content \".\"\n\n.keyVal\n  display flex\n  font-family monospace\n  justify-content space-between\n  margin: 0.25rem 0\n\n.key\n  display inline-block\n  width 10rem\n\n.val\n  display inline-flex\n  justify-content space-between\n  overflow hidden\n  width 100%\n\n.expandObject\n  background transparentify(black, 0.6)\n  border-radius 3px\n  color #889900\n  cursor pointer\n  display inline-block\n  margin-right 0.3rem\n  padding 0.1rem 0.2rem\n\n  &hover\n    color white\n\n.preview\n  display inline-block\n  opacity 0.5\n  overflow hidden\n  text-overflow ellipsis\n  white-space nowrap\n  width 100%\n\n.ident\n  color inherit\n\n.update\n  color #5a26a8\n\n.add\n  color #83a826\n\n.del\n  color #a82626\n  text-decoration line-through\n","/**\n * (c) 2017 Hajime Yamasaki Vukelic\n * All rights reserved.\n */\n.diffPane {\n  max-height: calc(30vh - 32px);\n  overflow-y: auto;\n  padding: 1rem 0.5rem;\n}\n.breadcrumbs {\n  border-bottom: 1px solid #ddd;\n  margin-bottom: 0.2rem;\n  padding-bottom: 0.2rem;\n}\n.crumbButton {\n  background-color: transparent;\n  background-size: cover;\n  cursor: pointer;\n  height: 18px;\n  margin-right: 0.5rem;\n  overflow: hidden;\n  text-indent: -100vw;\n  width: 18px;\n}\n.toRoot {\n  background-image: url(\"icons/up-fast.svg\");\n}\n.upOne {\n  background-image: url(\"icons/up.svg\");\n}\n.crumb {\n  cursor: pointer;\n  display: inline-block;\n  font-family: monospace;\n  padding: 0.1rem 0.4rem;\n}\n.crumb:hover {\n  text-decoration: underline;\n}\n.crumb::before {\n  content: \".\";\n}\n.keyVal {\n  display: flex;\n  font-family: monospace;\n  justify-content: space-between;\n  margin: 0.25rem 0;\n}\n.key {\n  display: inline-block;\n  width: 10rem;\n}\n.val {\n  display: inline-flex;\n  justify-content: space-between;\n  overflow: hidden;\n  width: 100%;\n}\n.expandObject {\n  background: rgba(0,0,0,0.6);\n  border-radius: 3px;\n  color: #890;\n  cursor: pointer;\n  display: inline-block;\n  margin-right: 0.3rem;\n  padding: 0.1rem 0.2rem;\n}\n.expandObjecthover {\n  color: #fff;\n}\n.preview {\n  display: inline-block;\n  opacity: 0.5;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  width: 100%;\n}\n.ident {\n  color: inherit;\n}\n.update {\n  color: #5a26a8;\n}\n.add {\n  color: #83a826;\n}\n.del {\n  color: #a82626;\n  text-decoration: line-through;\n}\n"],"sourceRoot":""}]);

// exports
exports.locals = {
	"diffPane": "diffPane-3c7Xp",
	"breadcrumbs": "breadcrumbs-1qPwy",
	"crumbButton": "crumbButton-3_Dik",
	"toRoot": "toRoot-1y7LC",
	"upOne": "upOne-3IbEx",
	"crumb": "crumb-3MmUj",
	"keyVal": "keyVal-3Mi7o",
	"key": "key-1pLcm",
	"val": "val-GtOkb",
	"expandObject": "expandObject-299w6",
	"expandObjecthover": "expandObjecthover-3nQHt",
	"preview": "preview-2Vk7a",
	"ident": "ident-10V3I",
	"update": "update-1H5I0",
	"add": "add-2uWUU",
	"del": "del-3gc2h"
};

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * (c) 2017 Hajime Yamasaki Vukelic
 * All rights reserved.
 */
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var css = __webpack_require__(42);
var duckweed = __webpack_require__(0);
var from = duckweed.events.from;
var init = function () { return ({
    barWidth: 0,
    dragging: false,
    initialMouse: 0,
    initialPos: 0,
    pos: 1,
}); };
exports.init = init;
// Actions
var Action;
(function (Action) {
    Action["Start"] = "Start";
    Action["End"] = "End";
    Action["Move"] = "Move";
})(Action || (Action = {}));
exports.Action = Action;
var restrict = function (min, max, val) {
    return Math.max(min, Math.min(max, val));
};
var actions = (_a = {},
    _a[Action.Start] = function (patch, x, w) {
        patch(function (model) { return (__assign({}, model, { barWidth: w, dragging: true, initialMouse: x, initialPos: model.pos })); });
    },
    _a[Action.Move] = function (patch, jumpTo, length, x) {
        patch(function (model) {
            if (!model.dragging) {
                return model;
            }
            var newPos = restrict(0, 1, model.initialPos + (x - model.initialMouse) / model.barWidth);
            var tick = 1 / (length - 1);
            var realPos = Math.round(newPos / tick) * tick;
            return __assign({}, model, { pos: realPos });
        });
    },
    _a[Action.End] = function (patch) {
        patch(function (model) { return (__assign({}, model, { dragging: false, initialMouse: 0, initialPos: 0 })); });
    },
    _a);
exports.actions = actions;
var cls = function (c, disabled) {
    return (_a = {},
        _a[css.button] = true,
        _a[c] = true,
        _a[css.disabled] = disabled,
        _a);
    var _a;
};
var mouseEvent = function (event) {
    return event.preventDefault() || [event.clientX];
};
var mouseEventW = function (event) {
    return event.preventDefault() || [
        event.clientX,
        event.target.parentNode.offsetWidth,
    ];
};
var view = function (_a) {
    var model = _a.model, act = _a.act, jumpTo = _a.jumpTo, clear = _a.clear, current = _a.current, length = _a.length;
    var hasPrev = current > 0;
    var hasNext = current < length - 1;
    var canClear = length > 1;
    var jumpBack = hasPrev ? jumpTo(current - 1) : undefined;
    var jumpNext = hasNext ? jumpTo(current + 1) : undefined;
    return (duckweed.html("div", { class: css.scrubber },
        duckweed.html("div", { class: css.buttons },
            duckweed.html("button", { class: cls(css.prev, !hasPrev), "on-click": jumpBack }, "previous state"),
            duckweed.html("button", { class: cls(css.clear, !canClear), "on-click": canClear ? clear() : undefined }, "clear history"),
            duckweed.html("button", { class: cls(css.next, !hasNext), "on-click": jumpNext }, "next state")),
        duckweed.html("div", { class: css.progress },
            duckweed.html("div", { class: css.bar },
                duckweed.html("div", { class: (_b = {}, _b[css.handle] = true, _b[css.activeHandle] = model.dragging, _b), style: { left: model.pos * 100 + "%" }, "on-mousedown": length > 1 && !model.dragging ? from(mouseEventW, act(Action.Start)) : undefined, "doc-mousemove": model.dragging ? from(mouseEvent, act(Action.Move, jumpTo, length)) : undefined, "doc-mouseup": model.dragging ? from(mouseEvent, act(Action.End)) : undefined }))),
        duckweed.html("div", { class: css.position },
            current + 1,
            duckweed.html("span", { class: css.total },
                " / ",
                length))));
    var _b;
};
exports.view = view;
var _a;


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(43);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"sourceMap":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(3)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/css-loader/index.js??ref--1-1!../../node_modules/postcss-loader/lib/index.js??ref--1-2!../../node_modules/stylus-loader/index.js!./scrubber.styl", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js??ref--1-1!../../node_modules/postcss-loader/lib/index.js??ref--1-2!../../node_modules/stylus-loader/index.js!./scrubber.styl");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(true);
// imports


// module
exports.push([module.i, "/**\n * (c) 2017 Hajime Yamasaki Vukelic\n * All rights reserved.\n */\n.scrubber-2r-U7 {\n  -ms-flex-line-pack: center;\n      align-content: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  height: 2rem;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n.buttons-2B9Xe {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  display: inline-block;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  height: 2rem;\n  text-align: center;\n  vertical-align: middle;\n  white-space: nowrap;\n  margin-right: 0.5rem;\n}\n.button-3vhP7 {\n  background: transparent;\n  background-size: cover;\n  border: 0;\n  cursor: pointer;\n  height: 24px;\n  margin-left: 0.5rem;\n  overflow: hidden;\n  padding: 0.2rem;\n  text-indent: -100vw;\n  width: 24px;\n}\n.next-39MoX {\n  background-image: url(" + __webpack_require__(44) + ");\n}\n.prev-1P4hz {\n  background-image: url(" + __webpack_require__(45) + ");\n}\n.clear-gjHvr {\n  background-image: url(" + __webpack_require__(46) + ");\n}\n.disabled-PsXyv {\n  cursor: pointer;\n  opacity: 0.2;\n}\n.progress-1HUr4 {\n  display: inline-block;\n  height: 31px;\n  position: relative;\n  vertical-align: middle;\n  width: 100%;\n}\n.bar-25eEA {\n  background: #444;\n  border-radius: 1px;\n  height: 3px;\n  left: 15px;\n  position: absolute;\n  right: 15px;\n  top: 15px;\n}\n.handle-31lRL {\n  background: #777;\n  border: 1px solid #ddd;\n  border-radius: 16px;\n  -webkit-box-shadow: 0 2px 5px rgba(0,0,0,0.3);\n          box-shadow: 0 2px 5px rgba(0,0,0,0.3);\n  height: 31px;\n  position: absolute;\n  top: -15px;\n  margin-left: -16px;\n  -webkit-transform: scale(0.5);\n          transform: scale(0.5);\n  -webkit-transition: all 0.2s;\n  transition: all 0.2s;\n  width: 31px;\n}\n.handle-31lRL:hover,\n.activeHandle-1aAbR {\n  background: #7ac623;\n  -webkit-transform: scale(1);\n          transform: scale(1);\n}\n.position-FXvCR {\n  color: #777;\n  display: inline-block;\n  font-family: monospace;\n  font-size: 90%;\n  line-height: 2rem;\n  padding: 0 0.5rem;\n  text-align: center;\n  vertical-align: middle;\n  white-space: nowrap;\n  width: 5rem;\n}\n.total-1Q7sG {\n  color: #999;\n  font-size: 80%;\n}\n", "", {"version":3,"sources":["C:/Code/duckweed-devtool/src/panel/C:/Code/duckweed-devtool/src/panel/scrubber.styl","C:/Code/duckweed-devtool/src/panel/C:/Code/duckweed-devtool/scrubber.styl"],"names":[],"mappings":"AAAA;;;GCGG;ADEH;EACE,2BAAA;MAAA,sBAAA;EACA,qBAAA;EAAA,qBAAA;EAAA,cAAA;EACA,aAAA;EACA,0BAAA;MAAA,uBAAA;UAAA,+BAAA;CCAD;ADED;EACE,0BAAA;MAAA,uBAAA;UAAA,oBAAA;EACA,sBAAA;EACA,4BAAA;EAAA,4BAAA;EAAA,qBAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,oBAAA;EACA,qBAAA;CCAD;ADED;EACE,wBAAA;EACA,uBAAA;EACA,UAAA;EACA,gBAAA;EACA,aAAA;EACA,oBAAA;EACA,iBAAA;EACA,gBAAA;EACA,oBAAA;EACA,YAAA;CCAD;ADED;EACE,gDAAA;CCAD;ADED;EACE,gDAAA;CCAD;ADED;EACE,gDAAA;CCAD;ADED;EACE,gBAAA;EACA,aAAA;CCAD;ADED;EACE,sBAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,YAAA;CCAD;ADED;EACE,iBAAA;EACA,mBAAA;EACA,YAAA;EACA,WAAA;EACA,mBAAA;EACA,YAAA;EACA,UAAA;CCAD;ADED;EACE,iBAAA;EACA,uBAAA;EACA,oBAAA;EACA,8CAAA;UAAA,sCAAA;EACA,aAAA;EACA,mBAAA;EACA,WAAA;EACA,mBAAA;EACA,8BAAA;UAAA,sBAAA;EACA,6BAAA;EAAA,qBAAA;EACA,YAAA;CCAD;ADED;;EAEI,oBAAA;EACA,4BAAA;UAAA,oBAAA;CCAH;ADED;EACE,YAAA;EACA,sBAAA;EACA,uBAAA;EACA,eAAA;EACA,kBAAA;EACA,kBAAA;EACA,mBAAA;EACA,uBAAA;EACA,oBAAA;EACA,YAAA;CCAD;ADED;EACE,YAAA;EACA,eAAA;CCAD","file":"scrubber.styl","sourcesContent":["/**\n * (c) 2017 Hajime Yamasaki Vukelic\n * All rights reserved.\n */\n\n.scrubber\n  align-content center\n  display flex\n  height 2rem\n  justify-content space-between\n\n.buttons\n  align-items center\n  display inline-block\n  display inline-flex\n  height 2rem\n  text-align center\n  vertical-align middle\n  white-space nowrap\n  margin-right 0.5rem\n\n.button\n  background transparent\n  background-size cover\n  border 0\n  cursor pointer\n  height 24px\n  margin-left 0.5rem\n  overflow hidden\n  padding 0.2rem\n  text-indent -100vw\n  width 24px\n\n.next\n  background-image url(\"icons/forward.svg\")\n\n.prev\n  background-image url(\"icons/backward.svg\")\n\n.clear\n  background-image url(\"icons/stop.svg\")\n\n.disabled\n  cursor pointer\n  opacity 0.2\n\n.progress\n  display inline-block\n  height 31px\n  position relative\n  vertical-align middle\n  width 100%\n\n.bar\n  background #444444\n  border-radius 1px\n  height 3px\n  left 15px\n  position absolute\n  right 15px\n  top 15px\n\n.handle\n  background #777777\n  border 1px solid #dddddd\n  border-radius 16px\n  box-shadow 0 2px 5px transparentify(black, 0.3)\n  height 31px\n  position absolute\n  top -15px\n  margin-left: -16px\n  transform scale(0.5)\n  transition all 0.2s\n  width 31px\n\n.handle:hover\n.activeHandle\n    background: #7ac623\n    transform scale(1)\n\n.position\n  color #777\n  display inline-block\n  font-family monospace\n  font-size 90%\n  line-height 2rem\n  padding 0 0.5rem\n  text-align center\n  vertical-align middle\n  white-space nowrap\n  width 5rem\n\n.total\n  color #999\n  font-size 80%\n","/**\n * (c) 2017 Hajime Yamasaki Vukelic\n * All rights reserved.\n */\n.scrubber {\n  align-content: center;\n  display: flex;\n  height: 2rem;\n  justify-content: space-between;\n}\n.buttons {\n  align-items: center;\n  display: inline-block;\n  display: inline-flex;\n  height: 2rem;\n  text-align: center;\n  vertical-align: middle;\n  white-space: nowrap;\n  margin-right: 0.5rem;\n}\n.button {\n  background: transparent;\n  background-size: cover;\n  border: 0;\n  cursor: pointer;\n  height: 24px;\n  margin-left: 0.5rem;\n  overflow: hidden;\n  padding: 0.2rem;\n  text-indent: -100vw;\n  width: 24px;\n}\n.next {\n  background-image: url(\"icons/forward.svg\");\n}\n.prev {\n  background-image: url(\"icons/backward.svg\");\n}\n.clear {\n  background-image: url(\"icons/stop.svg\");\n}\n.disabled {\n  cursor: pointer;\n  opacity: 0.2;\n}\n.progress {\n  display: inline-block;\n  height: 31px;\n  position: relative;\n  vertical-align: middle;\n  width: 100%;\n}\n.bar {\n  background: #444;\n  border-radius: 1px;\n  height: 3px;\n  left: 15px;\n  position: absolute;\n  right: 15px;\n  top: 15px;\n}\n.handle {\n  background: #777;\n  border: 1px solid #ddd;\n  border-radius: 16px;\n  box-shadow: 0 2px 5px rgba(0,0,0,0.3);\n  height: 31px;\n  position: absolute;\n  top: -15px;\n  margin-left: -16px;\n  transform: scale(0.5);\n  transition: all 0.2s;\n  width: 31px;\n}\n.handle:hover,\n.activeHandle {\n  background: #7ac623;\n  transform: scale(1);\n}\n.position {\n  color: #777;\n  display: inline-block;\n  font-family: monospace;\n  font-size: 90%;\n  line-height: 2rem;\n  padding: 0 0.5rem;\n  text-align: center;\n  vertical-align: middle;\n  white-space: nowrap;\n  width: 5rem;\n}\n.total {\n  color: #999;\n  font-size: 80%;\n}\n"],"sourceRoot":""}]);

// exports
exports.locals = {
	"scrubber": "scrubber-2r-U7",
	"buttons": "buttons-2B9Xe",
	"button": "button-3vhP7",
	"next": "next-39MoX",
	"prev": "prev-1P4hz",
	"clear": "clear-gjHvr",
	"disabled": "disabled-PsXyv",
	"progress": "progress-1HUr4",
	"bar": "bar-25eEA",
	"handle": "handle-31lRL",
	"activeHandle": "activeHandle-1aAbR",
	"position": "position-FXvCR",
	"total": "total-1Q7sG"
};

/***/ }),
/* 44 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiCiAgIGlkPSJzdmc1NzM2IgogICB2ZXJzaW9uPSIxLjEiCiAgIHZpZXdCb3g9IjAgMCA0LjIzMzMzMzEgNC4yMzMzMzMxIgogICBoZWlnaHQ9IjQuMjMzMzMzMW1tIgogICB3aWR0aD0iNC4yMzMzMzMxbW0iPgogIDxkZWZzCiAgICAgaWQ9ImRlZnM1NzMwIj4KICAgIDxsaW5lYXJHcmFkaWVudAogICAgICAgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCgxLjM5Njc2MDgsMCwwLDEuMzk2NzYwOCwtMzkuOTM3LC0zNzguMzY5MykiCiAgICAgICBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIKICAgICAgIHkyPSIyODYuMjU4ODIiCiAgICAgICB4Mj0iNy41MDk1MjM0IgogICAgICAgeTE9IjI4NC4wOTA0MiIKICAgICAgIHgxPSI3LjUwOTUyMzQiCiAgICAgICBpZD0ibGluZWFyR3JhZGllbnQ1NzA2IgogICAgICAgeGxpbms6aHJlZj0iI2xpbmVhckdyYWRpZW50NDUyMiIgLz4KICAgIDxsaW5lYXJHcmFkaWVudAogICAgICAgaWQ9ImxpbmVhckdyYWRpZW50NDUyMiI+CiAgICAgIDxzdG9wCiAgICAgICAgIHN0eWxlPSJzdG9wLWNvbG9yOiM4Y2MzM2E7c3RvcC1vcGFjaXR5OjEiCiAgICAgICAgIG9mZnNldD0iMCIKICAgICAgICAgaWQ9InN0b3A0NTE4IiAvPgogICAgICA8c3RvcAogICAgICAgICBzdHlsZT0ic3RvcC1jb2xvcjojM2Y3YzA0O3N0b3Atb3BhY2l0eToxIgogICAgICAgICBvZmZzZXQ9IjEiCiAgICAgICAgIGlkPSJzdG9wNDUyMCIgLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgPC9kZWZzPgogIDxtZXRhZGF0YQogICAgIGlkPSJtZXRhZGF0YTU3MzMiPgogICAgPHJkZjpSREY+CiAgICAgIDxjYzpXb3JrCiAgICAgICAgIHJkZjphYm91dD0iIj4KICAgICAgICA8ZGM6Zm9ybWF0PmltYWdlL3N2Zyt4bWw8L2RjOmZvcm1hdD4KICAgICAgICA8ZGM6dHlwZQogICAgICAgICAgIHJkZjpyZXNvdXJjZT0iaHR0cDovL3B1cmwub3JnL2RjL2RjbWl0eXBlL1N0aWxsSW1hZ2UiIC8+CiAgICAgICAgPGRjOnRpdGxlPjwvZGM6dGl0bGU+CiAgICAgIDwvY2M6V29yaz4KICAgIDwvcmRmOlJERj4KICA8L21ldGFkYXRhPgogIDxnCiAgICAgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMzAuOTk3NTU1LC0xOC4zNTk0NikiCiAgICAgaWQ9ImxheWVyMSI+CiAgICA8cGF0aAogICAgICAgaWQ9InBhdGg1Njk4IgogICAgICAgZD0ibSAtMjguODgxMjQ5LDE4LjM1OTQ2IGEgMi4xMTY1MjYsMi4xMTY1MjU1IDAgMCAwIC0yLjExNjMwNiwyLjExNzAyNyAyLjExNjUyNiwyLjExNjUyNTUgMCAwIDAgMi4xMTYzMDYsMi4xMTYzMDYgMi4xMTY1MjYsMi4xMTY1MjU1IDAgMCAwIDIuMTE3MDI3LC0yLjExNjMwNiAyLjExNjUyNiwyLjExNjUyNTUgMCAwIDAgLTIuMTE3MDI3LC0yLjExNzAyNyB6IG0gLTAuNTA4ODY3LDAuOTA4NzQxIGEgMC4xODUwODkzLDAuMTg1MDg5MyAwIDAgMSAwLjExNjkzNywwLjA0NDAzIGwgMS40NDA3MDUsMS4xNjQyNTYgLTEuNDQwNzA1LDEuMTY0OTc5IGEgMC4xODUzMzY0NiwwLjE4NTMzNjQ2IDAgMSAxIC0wLjIzMTY5NiwtMC4yODg3MTkgbCAxLjA4MjY5NCwtMC44NzYyNiAtMS4wODI2OTQsLTAuODc4NDI2IGEgMC4xODUwODkzLDAuMTg1MDg5MyAwIDAgMSAwLjExNDc1OCwtMC4zMjk4NiB6IgogICAgICAgc3R5bGU9Im9wYWNpdHk6MTtmaWxsOnVybCgjbGluZWFyR3JhZGllbnQ1NzA2KTtmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6MC4yNjQ1ODMzNTtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2UtZGFzaG9mZnNldDowO3N0cm9rZS1vcGFjaXR5OjEiIC8+CiAgPC9nPgo8L3N2Zz4K"

/***/ }),
/* 45 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiCiAgIGlkPSJzdmc1NzM2IgogICB2ZXJzaW9uPSIxLjEiCiAgIHZpZXdCb3g9IjAgMCA0LjIzMzMzMzEgNC4yMzMzMzMxIgogICBoZWlnaHQ9IjQuMjMzMzMzMW1tIgogICB3aWR0aD0iNC4yMzMzMzMxbW0iPgogIDxkZWZzCiAgICAgaWQ9ImRlZnM1NzMwIj4KICAgIDxsaW5lYXJHcmFkaWVudAogICAgICAgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCgtMS4zOTY3NjA4LDAsMCwxLjM5Njc2MDgsLTE3LjgyNDc3NywtMzc4LjM2OTMpIgogICAgICAgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiCiAgICAgICB5Mj0iMjg2LjI1ODgyIgogICAgICAgeDI9IjcuNTA5NTIzNCIKICAgICAgIHkxPSIyODQuMDkwNDIiCiAgICAgICB4MT0iNy41MDk1MjM0IgogICAgICAgaWQ9ImxpbmVhckdyYWRpZW50NTcwNiIKICAgICAgIHhsaW5rOmhyZWY9IiNsaW5lYXJHcmFkaWVudDQ1MjIiIC8+CiAgICA8bGluZWFyR3JhZGllbnQKICAgICAgIGlkPSJsaW5lYXJHcmFkaWVudDQ1MjIiPgogICAgICA8c3RvcAogICAgICAgICBzdHlsZT0ic3RvcC1jb2xvcjojOGNjMzNhO3N0b3Atb3BhY2l0eToxIgogICAgICAgICBvZmZzZXQ9IjAiCiAgICAgICAgIGlkPSJzdG9wNDUxOCIgLz4KICAgICAgPHN0b3AKICAgICAgICAgc3R5bGU9InN0b3AtY29sb3I6IzNmN2MwNDtzdG9wLW9wYWNpdHk6MSIKICAgICAgICAgb2Zmc2V0PSIxIgogICAgICAgICBpZD0ic3RvcDQ1MjAiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8bWV0YWRhdGEKICAgICBpZD0ibWV0YWRhdGE1NzMzIj4KICAgIDxyZGY6UkRGPgogICAgICA8Y2M6V29yawogICAgICAgICByZGY6YWJvdXQ9IiI+CiAgICAgICAgPGRjOmZvcm1hdD5pbWFnZS9zdmcreG1sPC9kYzpmb3JtYXQ+CiAgICAgICAgPGRjOnR5cGUKICAgICAgICAgICByZGY6cmVzb3VyY2U9Imh0dHA6Ly9wdXJsLm9yZy9kYy9kY21pdHlwZS9TdGlsbEltYWdlIiAvPgogICAgICAgIDxkYzp0aXRsZT48L2RjOnRpdGxlPgogICAgICA8L2NjOldvcms+CiAgICA8L3JkZjpSREY+CiAgPC9tZXRhZGF0YT4KICA8ZwogICAgIHRyYW5zZm9ybT0idHJhbnNsYXRlKDMwLjk5NzU1NSwtMTguMzU5NDYpIgogICAgIGlkPSJsYXllcjEiPgogICAgPHBhdGgKICAgICAgIGlkPSJwYXRoNTY5OCIKICAgICAgIGQ9Im0gLTI4Ljg4MDUyOCwxOC4zNTk0NiBhIDIuMTE2NTI2LDIuMTE2NTI1NSAwIDAgMSAyLjExNjMwNiwyLjExNzAyNyAyLjExNjUyNiwyLjExNjUyNTUgMCAwIDEgLTIuMTE2MzA2LDIuMTE2MzA2IDIuMTE2NTI2LDIuMTE2NTI1NSAwIDAgMSAtMi4xMTcwMjcsLTIuMTE2MzA2IDIuMTE2NTI2LDIuMTE2NTI1NSAwIDAgMSAyLjExNzAyNywtMi4xMTcwMjcgeiBtIDAuNTA4ODY3LDAuOTA4NzQxIGEgMC4xODUwODkzLDAuMTg1MDg5MyAwIDAgMCAtMC4xMTY5MzcsMC4wNDQwMyBsIC0xLjQ0MDcwNSwxLjE2NDI1NiAxLjQ0MDcwNSwxLjE2NDk3OSBhIDAuMTg1MzM2NDYsMC4xODUzMzY0NiAwIDEgMCAwLjIzMTY5NiwtMC4yODg3MTkgbCAtMS4wODI2OTQsLTAuODc2MjYgMS4wODI2OTQsLTAuODc4NDI2IGEgMC4xODUwODkzLDAuMTg1MDg5MyAwIDAgMCAtMC4xMTQ3NTgsLTAuMzI5ODYgeiIKICAgICAgIHN0eWxlPSJvcGFjaXR5OjE7ZmlsbDp1cmwoI2xpbmVhckdyYWRpZW50NTcwNik7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjAuMjY0NTgzMzU7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLWRhc2hvZmZzZXQ6MDtzdHJva2Utb3BhY2l0eToxIiAvPgogIDwvZz4KPC9zdmc+Cg=="

/***/ }),
/* 46 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiCiAgIGlkPSJzdmc2ODk5IgogICB2ZXJzaW9uPSIxLjEiCiAgIHZpZXdCb3g9IjAgMCA0LjIzMzMzMDIgNC4yMzMzMzY5IgogICBoZWlnaHQ9IjQuMjMzMzM2OW1tIgogICB3aWR0aD0iNC4yMzMzMzAybW0iPgogIDxkZWZzCiAgICAgaWQ9ImRlZnM2ODkzIj4KICAgIDxsaW5lYXJHcmFkaWVudAogICAgICAgeTI9IjI4Ni4yNTg4MiIKICAgICAgIHgyPSI3LjUwOTUyMzQiCiAgICAgICB5MT0iMjg0LjA5MDQyIgogICAgICAgeDE9IjcuNTA5NTIzNCIKICAgICAgIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoLTEuMzk2NzYxNywwLDAsMS4zOTY3NjE3LDIyOC42MTU1MywtNDIwLjcwMjg5KSIKICAgICAgIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIgogICAgICAgaWQ9ImxpbmVhckdyYWRpZW50Njg1MCIKICAgICAgIHhsaW5rOmhyZWY9IiNsaW5lYXJHcmFkaWVudDQ1MjIiIC8+CiAgICA8bGluZWFyR3JhZGllbnQKICAgICAgIGlkPSJsaW5lYXJHcmFkaWVudDQ1MjIiPgogICAgICA8c3RvcAogICAgICAgICBzdHlsZT0ic3RvcC1jb2xvcjojOGNjMzNhO3N0b3Atb3BhY2l0eToxIgogICAgICAgICBvZmZzZXQ9IjAiCiAgICAgICAgIGlkPSJzdG9wNDUxOCIgLz4KICAgICAgPHN0b3AKICAgICAgICAgc3R5bGU9InN0b3AtY29sb3I6IzNmN2MwNDtzdG9wLW9wYWNpdHk6MSIKICAgICAgICAgb2Zmc2V0PSIxIgogICAgICAgICBpZD0ic3RvcDQ1MjAiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8bWV0YWRhdGEKICAgICBpZD0ibWV0YWRhdGE2ODk2Ij4KICAgIDxyZGY6UkRGPgogICAgICA8Y2M6V29yawogICAgICAgICByZGY6YWJvdXQ9IiI+CiAgICAgICAgPGRjOmZvcm1hdD5pbWFnZS9zdmcreG1sPC9kYzpmb3JtYXQ+CiAgICAgICAgPGRjOnR5cGUKICAgICAgICAgICByZGY6cmVzb3VyY2U9Imh0dHA6Ly9wdXJsLm9yZy9kYy9kY21pdHlwZS9TdGlsbEltYWdlIiAvPgogICAgICAgIDxkYzp0aXRsZT48L2RjOnRpdGxlPgogICAgICA8L2NjOldvcms+CiAgICA8L3JkZjpSREY+CiAgPC9tZXRhZGF0YT4KICA8ZwogICAgIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yMTUuNDQyOTMsMjMuOTczODc5KSIKICAgICBpZD0ibGF5ZXIxIj4KICAgIDxwYXRoCiAgICAgICBpZD0icGF0aDY4NDgiCiAgICAgICBkPSJtIDIxNy41NTk5NiwtMjMuOTczODc5IGMgLTEuMTY5MzIsLTIuNzllLTQgLTIuMTE3MzEsMC45NDc3MTcgLTIuMTE3MDMsMi4xMTcwMyAxLjFlLTQsMS4xNjkwMzMgMC45NDc5OSwyLjExNjU4NyAyLjExNzAzLDIuMTE2MzA3IDEuMTY4NzUsLTEuMjVlLTQgMi4xMTYxOSwtMC45NDc1NTMgMi4xMTYzLC0yLjExNjMwNyAyLjhlLTQsLTEuMTY5MDM0IC0wLjk0NzI3LC0yLjExNjkwNCAtMi4xMTYzLC0yLjExNzAzIHogbSAtMC42NDk2MiwxLjAwMjU3NiBoIDEuMjk4NTEgYyAwLjI1NDE4LDAgMC40NjYyOCwwLjIwOTIyNSAwLjQ2NjI4LDAuNDYzMzk0IHYgMS4zMDEzOTkgYyAwLDAuMjU0MTgzIC0wLjIxMjEsMC40NjMzOTIgLTAuNDY2MjgsMC40NjMzOTIgaCAtMS4yOTg1MSBjIC0wLjI1NDE3LDAgLTAuNDY3LC0wLjIwOTIwOSAtMC40NjcsLTAuNDYzMzkyIHYgLTEuMzAxMzk5IGMgMCwtMC4yNTQxNjkgMC4yMTI4MywtMC40NjMzOTQgMC40NjcsLTAuNDYzMzk0IHogbSAwLDAuMzcxMDA0IGMgLTAuMDU1NSwwIC0wLjA5NiwwLjAzNjkzIC0wLjA5NiwwLjA5MjM5IHYgMS4zMDE0IGMgMCwwLjA1NTU5IDAuMDQwNSwwLjA5NTI3IDAuMDk2LDAuMDk1MjcgaCAxLjI5ODUxIGMgMC4wNTU0LDAgMC4wOTUzLC0wLjAzOTgyIDAuMDk1MywtMC4wOTUyNyB2IC0xLjMwMTQgYyAwLC0wLjA1NTQ1IC0wLjAzOTgsLTAuMDkyMzkgLTAuMDk1MywtMC4wOTIzOSB6IgogICAgICAgc3R5bGU9Im9wYWNpdHk6MTtmaWxsOnVybCgjbGluZWFyR3JhZGllbnQ2ODUwKTtmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6MC4yNjQ1ODMzMjtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2UtZGFzaG9mZnNldDowO3N0cm9rZS1vcGFjaXR5OjEiIC8+CiAgPC9nPgo8L3N2Zz4K"

/***/ }),
/* 47 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiCiAgIGlkPSJzdmc0NTUyIgogICB2ZXJzaW9uPSIxLjEiCiAgIHZpZXdCb3g9IjAgMCA0LjIzMzMzNDEgNC4yMzMzMzAyIgogICBoZWlnaHQ9IjQuMjMzMzMwMm1tIgogICB3aWR0aD0iNC4yMzMzMzQxbW0iPgogIDxkZWZzCiAgICAgaWQ9ImRlZnM0NTQ2Ij4KICAgIDxsaW5lYXJHcmFkaWVudAogICAgICAgeTI9IjI4Ni4yNTg4MiIKICAgICAgIHgyPSI3LjUwOTUyMzQiCiAgICAgICB5MT0iMjg0LjA5MDQyIgogICAgICAgeDE9IjcuNTA5NTIzNCIKICAgICAgIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoLTEuMzk2NzYwOCwwLDAsMS4zOTY3NjA4LC01Ny44OTAwNzYsLTI0My4wNTM4MSkiCiAgICAgICBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIKICAgICAgIGlkPSJsaW5lYXJHcmFkaWVudDQ1MTAiCiAgICAgICB4bGluazpocmVmPSIjbGluZWFyR3JhZGllbnQ0NTIyIiAvPgogICAgPGxpbmVhckdyYWRpZW50CiAgICAgICBpZD0ibGluZWFyR3JhZGllbnQ0NTIyIj4KICAgICAgPHN0b3AKICAgICAgICAgaWQ9InN0b3A0NTE4IgogICAgICAgICBvZmZzZXQ9IjAiCiAgICAgICAgIHN0eWxlPSJzdG9wLWNvbG9yOiM4Y2MzM2E7c3RvcC1vcGFjaXR5OjEiIC8+CiAgICAgIDxzdG9wCiAgICAgICAgIGlkPSJzdG9wNDUyMCIKICAgICAgICAgb2Zmc2V0PSIxIgogICAgICAgICBzdHlsZT0ic3RvcC1jb2xvcjojM2Y3YzA0O3N0b3Atb3BhY2l0eToxIiAvPgogICAgPC9saW5lYXJHcmFkaWVudD4KICA8L2RlZnM+CiAgPG1ldGFkYXRhCiAgICAgaWQ9Im1ldGFkYXRhNDU0OSI+CiAgICA8cmRmOlJERj4KICAgICAgPGNjOldvcmsKICAgICAgICAgcmRmOmFib3V0PSIiPgogICAgICAgIDxkYzpmb3JtYXQ+aW1hZ2Uvc3ZnK3htbDwvZGM6Zm9ybWF0PgogICAgICAgIDxkYzp0eXBlCiAgICAgICAgICAgcmRmOnJlc291cmNlPSJodHRwOi8vcHVybC5vcmcvZGMvZGNtaXR5cGUvU3RpbGxJbWFnZSIgLz4KICAgICAgICA8ZGM6dGl0bGU+PC9kYzp0aXRsZT4KICAgICAgPC9jYzpXb3JrPgogICAgPC9yZGY6UkRGPgogIDwvbWV0YWRhdGE+CiAgPGcKICAgICB0cmFuc2Zvcm09InRyYW5zbGF0ZSg3MS4wNjMwMzQsLTE1My42NzQ5NSkiCiAgICAgaWQ9ImxheWVyMSI+CiAgICA8cGF0aAogICAgICAgaWQ9InBhdGg0NTI4IgogICAgICAgZD0ibSAtNjguOTQ2MDA3LDE1My42NzQ5NSBhIDIuMTE2NTI2LDIuMTE2NTI1NiAwIDAgMCAtMi4xMTcwMjcsMi4xMTcwMyAyLjExNjUyNiwyLjExNjUyNTYgMCAwIDAgMi4xMTcwMjcsMi4xMTYzIDIuMTE2NTI2LDIuMTE2NTI1NiAwIDAgMCAyLjExNjMwNywtMi4xMTYzIDIuMTE2NTI2LDIuMTE2NTI1NiAwIDAgMCAtMi4xMTYzMDcsLTIuMTE3MDMgeiBtIC03LjM4ZS00LDEuMDY4MjUgMS4xNjQyNTcsMS40NDA3MSBhIDAuMTg1MDg5MywwLjE4NTA4OTMgMCAwIDEgMC4wNDQwMywwLjExNjkxIDAuMTg1MDg5MywwLjE4NTA4OTMgMCAwIDEgLTAuMzI5ODYxLDAuMTE0ODEgbCAtMC44Nzg0MjcsLTEuMDgyNyAtMC44NzYyNiwxLjA4MjcgYSAwLjE4NTMzNjQ2LDAuMTg1MzM2NDYgMCAxIDEgLTAuMjg4NzE4LC0wLjIzMTcgeiIKICAgICAgIHN0eWxlPSJvcGFjaXR5OjE7ZmlsbDp1cmwoI2xpbmVhckdyYWRpZW50NDUxMCk7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjAuMjY0NTgzMzU7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLWRhc2hvZmZzZXQ6MDtzdHJva2Utb3BhY2l0eToxIiAvPgogIDwvZz4KPC9zdmc+Cg=="

/***/ }),
/* 48 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiCiAgIGlkPSJzdmc1MTQ2IgogICB2ZXJzaW9uPSIxLjEiCiAgIHZpZXdCb3g9IjAgMCA0LjIzMzMzMzEgNC4yMzMzMzQxIgogICBoZWlnaHQ9IjQuMjMzMzM0MW1tIgogICB3aWR0aD0iNC4yMzMzMzMxbW0iPgogIDxkZWZzCiAgICAgaWQ9ImRlZnM1MTQwIj4KICAgIDxsaW5lYXJHcmFkaWVudAogICAgICAgeTI9IjI4Ni4yNTg4MiIKICAgICAgIHgyPSI3LjUwOTUyMzQiCiAgICAgICB5MT0iMjg0LjA5MDQyIgogICAgICAgeDE9IjcuNTA5NTIzNCIKICAgICAgIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoLTEuMzk2NzYwMywwLDAsMS4zOTY3NjAzLC0zNy40Nzk0MjYsLTMzMi4yNTYwNykiCiAgICAgICBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIKICAgICAgIGlkPSJsaW5lYXJHcmFkaWVudDUxMTciCiAgICAgICB4bGluazpocmVmPSIjbGluZWFyR3JhZGllbnQ0NTIyIiAvPgogICAgPGxpbmVhckdyYWRpZW50CiAgICAgICBpZD0ibGluZWFyR3JhZGllbnQ0NTIyIj4KICAgICAgPHN0b3AKICAgICAgICAgaWQ9InN0b3A0NTE4IgogICAgICAgICBvZmZzZXQ9IjAiCiAgICAgICAgIHN0eWxlPSJzdG9wLWNvbG9yOiM4Y2MzM2E7c3RvcC1vcGFjaXR5OjEiIC8+CiAgICAgIDxzdG9wCiAgICAgICAgIGlkPSJzdG9wNDUyMCIKICAgICAgICAgb2Zmc2V0PSIxIgogICAgICAgICBzdHlsZT0ic3RvcC1jb2xvcjojM2Y3YzA0O3N0b3Atb3BhY2l0eToxIiAvPgogICAgPC9saW5lYXJHcmFkaWVudD4KICA8L2RlZnM+CiAgPG1ldGFkYXRhCiAgICAgaWQ9Im1ldGFkYXRhNTE0MyI+CiAgICA8cmRmOlJERj4KICAgICAgPGNjOldvcmsKICAgICAgICAgcmRmOmFib3V0PSIiPgogICAgICAgIDxkYzpmb3JtYXQ+aW1hZ2Uvc3ZnK3htbDwvZGM6Zm9ybWF0PgogICAgICAgIDxkYzp0eXBlCiAgICAgICAgICAgcmRmOnJlc291cmNlPSJodHRwOi8vcHVybC5vcmcvZGMvZGNtaXR5cGUvU3RpbGxJbWFnZSIgLz4KICAgICAgICA8ZGM6dGl0bGU+PC9kYzp0aXRsZT4KICAgICAgPC9jYzpXb3JrPgogICAgPC9yZGY6UkRGPgogIDwvbWV0YWRhdGE+CiAgPGcKICAgICB0cmFuc2Zvcm09InRyYW5zbGF0ZSg1MC42NTIzMTYsLTY0LjQ3MjU1NSkiCiAgICAgaWQ9ImxheWVyMSI+CiAgICA8cGF0aAogICAgICAgaWQ9InBhdGg1MTIxIgogICAgICAgZD0ibSAtNDguNTM1Mjg4LDY0LjQ3MjU1NSBhIDIuMTE2NTI1MywyLjExNjUyNDkgMCAwIDAgLTIuMTE3MDI4LDIuMTE3MDI3IDIuMTE2NTI1MywyLjExNjUyNDkgMCAwIDAgMi4xMTcwMjgsMi4xMTYzMDcgMi4xMTY1MjUzLDIuMTE2NTI0OSAwIDAgMCAyLjExNjMwNSwtMi4xMTYzMDcgMi4xMTY1MjUzLDIuMTE2NTI0OSAwIDAgMCAtMi4xMTYzMDUsLTIuMTE3MDI3IHogbSAtNy4zOWUtNCwwLjQ3ODU1MiAxLjE2NDI1NywxLjQ0MDcwMyBhIDAuMTg1MDg5MjMsMC4xODUwODkyMyAwIDAgMSAwLjA0NDAzLDAuMTE2OTM3IDAuMTg1MDg5MjMsMC4xODUwODkyMyAwIDAgMSAtMC4zMjk4NjIsMC4xMTQ3NzIgbCAtMC44Nzg0MjUsLTEuMDgyNjk1IC0wLjg3NjI2MSwxLjA4MjY5MyBhIDAuMTg1MzM2MzksMC4xODUzMzYzOSAwIDEgMSAtMC4yODg3MTksLTAuMjMxNjk2IHogbSAwLDEuMTM1Mzg0IDEuMTY0MjU3LDEuNDQwNzA1IGEgMC4xODUwODkyMywwLjE4NTA4OTIzIDAgMCAxIDAuMDQ0MDMsMC4xMTY5MzcgMC4xODUwODkyMywwLjE4NTA4OTIzIDAgMCAxIC0wLjMyOTg2MiwwLjExNDc3MiBsIC0wLjg3ODQyNSwtMS4wODI2OTYgLTAuODc2MjYxLDEuMDgyNjk0IGEgMC4xODUzMzYzOSwwLjE4NTMzNjM5IDAgMSAxIC0wLjI4ODcxOSwtMC4yMzE2OTYgeiIKICAgICAgIHN0eWxlPSJvcGFjaXR5OjE7ZmlsbDp1cmwoI2xpbmVhckdyYWRpZW50NTExNyk7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjAuMjY0NTgzMzI7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLWRhc2hvZmZzZXQ6MDtzdHJva2Utb3BhY2l0eToxIiAvPgogIDwvZz4KPC9zdmc+Cg=="

/***/ })
/******/ ]);
//# sourceMappingURL=index.js.map

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// This file can be required in Browserify and Node.js for automatic polyfill
// To use it:  require('es6-promise/auto');

module.exports = __webpack_require__(14).polyfill();


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process, global) {var require;/*!
 * @overview es6-promise - a tiny implementation of Promises/A+.
 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
 * @license   Licensed under MIT license
 *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
 * @version   4.1.1
 */

(function (global, factory) {
	 true ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.ES6Promise = factory());
}(this, (function () { 'use strict';

function objectOrFunction(x) {
  var type = typeof x;
  return x !== null && (type === 'object' || type === 'function');
}

function isFunction(x) {
  return typeof x === 'function';
}

var _isArray = undefined;
if (Array.isArray) {
  _isArray = Array.isArray;
} else {
  _isArray = function (x) {
    return Object.prototype.toString.call(x) === '[object Array]';
  };
}

var isArray = _isArray;

var len = 0;
var vertxNext = undefined;
var customSchedulerFn = undefined;

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
var isNode = typeof self === 'undefined' && typeof process !== 'undefined' && ({}).toString.call(process) === '[object process]';

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
    var r = require;
    var vertx = __webpack_require__(17);
    vertxNext = vertx.runOnLoop || vertx.runOnContext;
    return useVertxTimer();
  } catch (e) {
    return useSetTimeout();
  }
}

var scheduleFlush = undefined;
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
  var _arguments = arguments;

  var parent = this;

  var child = new this.constructor(noop);

  if (child[PROMISE_ID] === undefined) {
    makePromise(child);
  }

  var _state = parent._state;

  if (_state) {
    (function () {
      var callback = _arguments[_state - 1];
      asap(function () {
        return invokeCallback(_state, child, callback, parent._result);
      });
    })();
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

var PROMISE_ID = Math.random().toString(36).substring(16);

function noop() {}

var PENDING = void 0;
var FULFILLED = 1;
var REJECTED = 2;

var GET_THEN_ERROR = new ErrorObject();

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
    GET_THEN_ERROR.error = error;
    return GET_THEN_ERROR;
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
    if (then$$1 === GET_THEN_ERROR) {
      reject(promise, GET_THEN_ERROR.error);
      GET_THEN_ERROR.error = null;
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

  var child = undefined,
      callback = undefined,
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

function ErrorObject() {
  this.error = null;
}

var TRY_CATCH_ERROR = new ErrorObject();

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
      value = undefined,
      error = undefined,
      succeeded = undefined,
      failed = undefined;

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

function Enumerator$1(Constructor, input) {
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

function validationError() {
  return new Error('Array Methods must be provided an Array');
}

Enumerator$1.prototype._enumerate = function (input) {
  for (var i = 0; this._state === PENDING && i < input.length; i++) {
    this._eachEntry(input[i], i);
  }
};

Enumerator$1.prototype._eachEntry = function (entry, i) {
  var c = this._instanceConstructor;
  var resolve$$1 = c.resolve;

  if (resolve$$1 === resolve$1) {
    var _then = getThen(entry);

    if (_then === then && entry._state !== PENDING) {
      this._settledAt(entry._state, i, entry._result);
    } else if (typeof _then !== 'function') {
      this._remaining--;
      this._result[i] = entry;
    } else if (c === Promise$2) {
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

Enumerator$1.prototype._settledAt = function (state, i, value) {
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

Enumerator$1.prototype._willSettleAt = function (promise, i) {
  var enumerator = this;

  subscribe(promise, undefined, function (value) {
    return enumerator._settledAt(FULFILLED, i, value);
  }, function (reason) {
    return enumerator._settledAt(REJECTED, i, reason);
  });
};

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
function all$1(entries) {
  return new Enumerator$1(this, entries).promise;
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
function race$1(entries) {
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
  @param {function} resolver
  Useful for tooling.
  @constructor
*/
function Promise$2(resolver) {
  this[PROMISE_ID] = nextId();
  this._result = this._state = undefined;
  this._subscribers = [];

  if (noop !== resolver) {
    typeof resolver !== 'function' && needsResolver();
    this instanceof Promise$2 ? initializePromise(this, resolver) : needsNew();
  }
}

Promise$2.all = all$1;
Promise$2.race = race$1;
Promise$2.resolve = resolve$1;
Promise$2.reject = reject$1;
Promise$2._setScheduler = setScheduler;
Promise$2._setAsap = setAsap;
Promise$2._asap = asap;

Promise$2.prototype = {
  constructor: Promise$2,

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
  then: then,

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
  'catch': function _catch(onRejection) {
    return this.then(null, onRejection);
  }
};

/*global self*/
function polyfill$1() {
    var local = undefined;

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

    local.Promise = Promise$2;
}

// Strange compat..
Promise$2.polyfill = polyfill$1;
Promise$2.Promise = Promise$2;

return Promise$2;

})));

//# sourceMappingURL=es6-promise.map

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(15), __webpack_require__(16)))

/***/ }),
/* 15 */
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
/* 16 */
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
/* 17 */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(19).polyfill();


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Code refactored from Mozilla Developer Network:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
 */



function assign(target, firstSource) {
  if (target === undefined || target === null) {
    throw new TypeError('Cannot convert first argument to object');
  }

  var to = Object(target);
  for (var i = 1; i < arguments.length; i++) {
    var nextSource = arguments[i];
    if (nextSource === undefined || nextSource === null) {
      continue;
    }

    var keysArray = Object.keys(Object(nextSource));
    for (var nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex++) {
      var nextKey = keysArray[nextIndex];
      var desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
      if (desc !== undefined && desc.enumerable) {
        to[nextKey] = nextSource[nextKey];
      }
    }
  }
  return to;
}

function polyfill() {
  if (!Object.assign) {
    Object.defineProperty(Object, 'assign', {
      enumerable: false,
      configurable: true,
      writable: true,
      value: assign
    });
  }
}

module.exports = {
  assign: assign,
  polyfill: polyfill
};


/***/ }),
/* 20 */
/***/ (function(module, exports) {

(function(self) {
  'use strict';

  if (self.fetch) {
    return
  }

  var support = {
    searchParams: 'URLSearchParams' in self,
    iterable: 'Symbol' in self && 'iterator' in Symbol,
    blob: 'FileReader' in self && 'Blob' in self && (function() {
      try {
        new Blob()
        return true
      } catch(e) {
        return false
      }
    })(),
    formData: 'FormData' in self,
    arrayBuffer: 'ArrayBuffer' in self
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

    var isDataView = function(obj) {
      return obj && DataView.prototype.isPrototypeOf(obj)
    }

    var isArrayBufferView = ArrayBuffer.isView || function(obj) {
      return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1
    }
  }

  function normalizeName(name) {
    if (typeof name !== 'string') {
      name = String(name)
    }
    if (/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(name)) {
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
    this.map[name] = oldValue ? oldValue+','+value : value
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
    this.forEach(function(value, name) { items.push(name) })
    return iteratorFor(items)
  }

  Headers.prototype.values = function() {
    var items = []
    this.forEach(function(value) { items.push(value) })
    return iteratorFor(items)
  }

  Headers.prototype.entries = function() {
    var items = []
    this.forEach(function(value, name) { items.push([name, value]) })
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
        throw new Error('unsupported BodyInit type')
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
    return (methods.indexOf(upcased) > -1) ? upcased : method
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
      if (!body && input._bodyInit != null) {
        body = input._bodyInit
        input.bodyUsed = true
      }
    } else {
      this.url = String(input)
    }

    this.credentials = options.credentials || this.credentials || 'omit'
    if (options.headers || !this.headers) {
      this.headers = new Headers(options.headers)
    }
    this.method = normalizeMethod(options.method || this.method || 'GET')
    this.mode = options.mode || this.mode || null
    this.referrer = null

    if ((this.method === 'GET' || this.method === 'HEAD') && body) {
      throw new TypeError('Body not allowed for GET or HEAD requests')
    }
    this._initBody(body)
  }

  Request.prototype.clone = function() {
    return new Request(this, { body: this._bodyInit })
  }

  function decode(body) {
    var form = new FormData()
    body.trim().split('&').forEach(function(bytes) {
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
    rawHeaders.split(/\r?\n/).forEach(function(line) {
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
    this.status = 'status' in options ? options.status : 200
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

  self.Headers = Headers
  self.Request = Request
  self.Response = Response

  self.fetch = function(input, init) {
    return new Promise(function(resolve, reject) {
      var request = new Request(input, init)
      var xhr = new XMLHttpRequest()

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

      xhr.open(request.method, request.url, true)

      if (request.credentials === 'include') {
        xhr.withCredentials = true
      }

      if ('responseType' in xhr && support.blob) {
        xhr.responseType = 'blob'
      }

      request.headers.forEach(function(value, name) {
        xhr.setRequestHeader(name, value)
      })

      xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit)
    })
  }
  self.fetch.polyfill = true
})(typeof self !== 'undefined' ? self : this);


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * (c) 2017 Hajime Yamasaki Vukelic
 * All rights reserved.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var duckweed = __webpack_require__(5);
__webpack_require__.e/* require.ensure */(0).then((function (require) {
    var ROUTES = [
        { re: /\/about$/, mod: __webpack_require__(8) },
        { re: /^\/$/, mod: __webpack_require__(9) },
    ];
    var LINKS = [
        ["/", "Tasks"],
        ["/about", "About"],
    ];
    var _a = __webpack_require__(10), init = _a.init, actions = _a.actions, view = _a.view;
    duckweed.runner(init(LINKS, ROUTES), actions, view, {
        middleware: window.__DUCKWEED_DEVTOOL__ ? [window.__DUCKWEED_DEVTOOL__.middleware] : [],
        plugins: window.__DUCKWEED_DEVTOOL__ ? [window.__DUCKWEED_DEVTOOL__.plugin] : [],
    });
}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var vnode_1 = __webpack_require__(3);
var is = __webpack_require__(4);
var htmldomapi_1 = __webpack_require__(23);
function isUndef(s) { return s === undefined; }
function isDef(s) { return s !== undefined; }
var emptyNode = vnode_1.default('', {}, [], undefined, undefined);
function sameVnode(vnode1, vnode2) {
    return vnode1.key === vnode2.key && vnode1.sel === vnode2.sel;
}
function isVnode(vnode) {
    return vnode.sel !== undefined;
}
function createKeyToOldIdx(children, beginIdx, endIdx) {
    var i, map = {}, key, ch;
    for (i = beginIdx; i <= endIdx; ++i) {
        ch = children[i];
        if (ch != null) {
            key = ch.key;
            if (key !== undefined)
                map[key] = i;
        }
    }
    return map;
}
var hooks = ['create', 'update', 'remove', 'destroy', 'pre', 'post'];
var h_1 = __webpack_require__(0);
exports.h = h_1.h;
var thunk_1 = __webpack_require__(24);
exports.thunk = thunk_1.thunk;
function init(modules, domApi) {
    var i, j, cbs = {};
    var api = domApi !== undefined ? domApi : htmldomapi_1.default;
    for (i = 0; i < hooks.length; ++i) {
        cbs[hooks[i]] = [];
        for (j = 0; j < modules.length; ++j) {
            var hook = modules[j][hooks[i]];
            if (hook !== undefined) {
                cbs[hooks[i]].push(hook);
            }
        }
    }
    function emptyNodeAt(elm) {
        var id = elm.id ? '#' + elm.id : '';
        var c = elm.className ? '.' + elm.className.split(' ').join('.') : '';
        return vnode_1.default(api.tagName(elm).toLowerCase() + id + c, {}, [], undefined, elm);
    }
    function createRmCb(childElm, listeners) {
        return function rmCb() {
            if (--listeners === 0) {
                var parent_1 = api.parentNode(childElm);
                api.removeChild(parent_1, childElm);
            }
        };
    }
    function createElm(vnode, insertedVnodeQueue) {
        var i, data = vnode.data;
        if (data !== undefined) {
            if (isDef(i = data.hook) && isDef(i = i.init)) {
                i(vnode);
                data = vnode.data;
            }
        }
        var children = vnode.children, sel = vnode.sel;
        if (sel === '!') {
            if (isUndef(vnode.text)) {
                vnode.text = '';
            }
            vnode.elm = api.createComment(vnode.text);
        }
        else if (sel !== undefined) {
            // Parse selector
            var hashIdx = sel.indexOf('#');
            var dotIdx = sel.indexOf('.', hashIdx);
            var hash = hashIdx > 0 ? hashIdx : sel.length;
            var dot = dotIdx > 0 ? dotIdx : sel.length;
            var tag = hashIdx !== -1 || dotIdx !== -1 ? sel.slice(0, Math.min(hash, dot)) : sel;
            var elm = vnode.elm = isDef(data) && isDef(i = data.ns) ? api.createElementNS(i, tag)
                : api.createElement(tag);
            if (hash < dot)
                elm.setAttribute('id', sel.slice(hash + 1, dot));
            if (dotIdx > 0)
                elm.setAttribute('class', sel.slice(dot + 1).replace(/\./g, ' '));
            for (i = 0; i < cbs.create.length; ++i)
                cbs.create[i](emptyNode, vnode);
            if (is.array(children)) {
                for (i = 0; i < children.length; ++i) {
                    var ch = children[i];
                    if (ch != null) {
                        api.appendChild(elm, createElm(ch, insertedVnodeQueue));
                    }
                }
            }
            else if (is.primitive(vnode.text)) {
                api.appendChild(elm, api.createTextNode(vnode.text));
            }
            i = vnode.data.hook; // Reuse variable
            if (isDef(i)) {
                if (i.create)
                    i.create(emptyNode, vnode);
                if (i.insert)
                    insertedVnodeQueue.push(vnode);
            }
        }
        else {
            vnode.elm = api.createTextNode(vnode.text);
        }
        return vnode.elm;
    }
    function addVnodes(parentElm, before, vnodes, startIdx, endIdx, insertedVnodeQueue) {
        for (; startIdx <= endIdx; ++startIdx) {
            var ch = vnodes[startIdx];
            if (ch != null) {
                api.insertBefore(parentElm, createElm(ch, insertedVnodeQueue), before);
            }
        }
    }
    function invokeDestroyHook(vnode) {
        var i, j, data = vnode.data;
        if (data !== undefined) {
            if (isDef(i = data.hook) && isDef(i = i.destroy))
                i(vnode);
            for (i = 0; i < cbs.destroy.length; ++i)
                cbs.destroy[i](vnode);
            if (vnode.children !== undefined) {
                for (j = 0; j < vnode.children.length; ++j) {
                    i = vnode.children[j];
                    if (i != null && typeof i !== "string") {
                        invokeDestroyHook(i);
                    }
                }
            }
        }
    }
    function removeVnodes(parentElm, vnodes, startIdx, endIdx) {
        for (; startIdx <= endIdx; ++startIdx) {
            var i_1 = void 0, listeners = void 0, rm = void 0, ch = vnodes[startIdx];
            if (ch != null) {
                if (isDef(ch.sel)) {
                    invokeDestroyHook(ch);
                    listeners = cbs.remove.length + 1;
                    rm = createRmCb(ch.elm, listeners);
                    for (i_1 = 0; i_1 < cbs.remove.length; ++i_1)
                        cbs.remove[i_1](ch, rm);
                    if (isDef(i_1 = ch.data) && isDef(i_1 = i_1.hook) && isDef(i_1 = i_1.remove)) {
                        i_1(ch, rm);
                    }
                    else {
                        rm();
                    }
                }
                else {
                    api.removeChild(parentElm, ch.elm);
                }
            }
        }
    }
    function updateChildren(parentElm, oldCh, newCh, insertedVnodeQueue) {
        var oldStartIdx = 0, newStartIdx = 0;
        var oldEndIdx = oldCh.length - 1;
        var oldStartVnode = oldCh[0];
        var oldEndVnode = oldCh[oldEndIdx];
        var newEndIdx = newCh.length - 1;
        var newStartVnode = newCh[0];
        var newEndVnode = newCh[newEndIdx];
        var oldKeyToIdx;
        var idxInOld;
        var elmToMove;
        var before;
        while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
            if (oldStartVnode == null) {
                oldStartVnode = oldCh[++oldStartIdx]; // Vnode might have been moved left
            }
            else if (oldEndVnode == null) {
                oldEndVnode = oldCh[--oldEndIdx];
            }
            else if (newStartVnode == null) {
                newStartVnode = newCh[++newStartIdx];
            }
            else if (newEndVnode == null) {
                newEndVnode = newCh[--newEndIdx];
            }
            else if (sameVnode(oldStartVnode, newStartVnode)) {
                patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue);
                oldStartVnode = oldCh[++oldStartIdx];
                newStartVnode = newCh[++newStartIdx];
            }
            else if (sameVnode(oldEndVnode, newEndVnode)) {
                patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue);
                oldEndVnode = oldCh[--oldEndIdx];
                newEndVnode = newCh[--newEndIdx];
            }
            else if (sameVnode(oldStartVnode, newEndVnode)) {
                patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue);
                api.insertBefore(parentElm, oldStartVnode.elm, api.nextSibling(oldEndVnode.elm));
                oldStartVnode = oldCh[++oldStartIdx];
                newEndVnode = newCh[--newEndIdx];
            }
            else if (sameVnode(oldEndVnode, newStartVnode)) {
                patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue);
                api.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
                oldEndVnode = oldCh[--oldEndIdx];
                newStartVnode = newCh[++newStartIdx];
            }
            else {
                if (oldKeyToIdx === undefined) {
                    oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx);
                }
                idxInOld = oldKeyToIdx[newStartVnode.key];
                if (isUndef(idxInOld)) {
                    api.insertBefore(parentElm, createElm(newStartVnode, insertedVnodeQueue), oldStartVnode.elm);
                    newStartVnode = newCh[++newStartIdx];
                }
                else {
                    elmToMove = oldCh[idxInOld];
                    if (elmToMove.sel !== newStartVnode.sel) {
                        api.insertBefore(parentElm, createElm(newStartVnode, insertedVnodeQueue), oldStartVnode.elm);
                    }
                    else {
                        patchVnode(elmToMove, newStartVnode, insertedVnodeQueue);
                        oldCh[idxInOld] = undefined;
                        api.insertBefore(parentElm, elmToMove.elm, oldStartVnode.elm);
                    }
                    newStartVnode = newCh[++newStartIdx];
                }
            }
        }
        if (oldStartIdx > oldEndIdx) {
            before = newCh[newEndIdx + 1] == null ? null : newCh[newEndIdx + 1].elm;
            addVnodes(parentElm, before, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
        }
        else if (newStartIdx > newEndIdx) {
            removeVnodes(parentElm, oldCh, oldStartIdx, oldEndIdx);
        }
    }
    function patchVnode(oldVnode, vnode, insertedVnodeQueue) {
        var i, hook;
        if (isDef(i = vnode.data) && isDef(hook = i.hook) && isDef(i = hook.prepatch)) {
            i(oldVnode, vnode);
        }
        var elm = vnode.elm = oldVnode.elm;
        var oldCh = oldVnode.children;
        var ch = vnode.children;
        if (oldVnode === vnode)
            return;
        if (vnode.data !== undefined) {
            for (i = 0; i < cbs.update.length; ++i)
                cbs.update[i](oldVnode, vnode);
            i = vnode.data.hook;
            if (isDef(i) && isDef(i = i.update))
                i(oldVnode, vnode);
        }
        if (isUndef(vnode.text)) {
            if (isDef(oldCh) && isDef(ch)) {
                if (oldCh !== ch)
                    updateChildren(elm, oldCh, ch, insertedVnodeQueue);
            }
            else if (isDef(ch)) {
                if (isDef(oldVnode.text))
                    api.setTextContent(elm, '');
                addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
            }
            else if (isDef(oldCh)) {
                removeVnodes(elm, oldCh, 0, oldCh.length - 1);
            }
            else if (isDef(oldVnode.text)) {
                api.setTextContent(elm, '');
            }
        }
        else if (oldVnode.text !== vnode.text) {
            api.setTextContent(elm, vnode.text);
        }
        if (isDef(hook) && isDef(i = hook.postpatch)) {
            i(oldVnode, vnode);
        }
    }
    return function patch(oldVnode, vnode) {
        var i, elm, parent;
        var insertedVnodeQueue = [];
        for (i = 0; i < cbs.pre.length; ++i)
            cbs.pre[i]();
        if (!isVnode(oldVnode)) {
            oldVnode = emptyNodeAt(oldVnode);
        }
        if (sameVnode(oldVnode, vnode)) {
            patchVnode(oldVnode, vnode, insertedVnodeQueue);
        }
        else {
            elm = oldVnode.elm;
            parent = api.parentNode(elm);
            createElm(vnode, insertedVnodeQueue);
            if (parent !== null) {
                api.insertBefore(parent, vnode.elm, api.nextSibling(elm));
                removeVnodes(parent, [oldVnode], 0, 0);
            }
        }
        for (i = 0; i < insertedVnodeQueue.length; ++i) {
            insertedVnodeQueue[i].data.hook.insert(insertedVnodeQueue[i]);
        }
        for (i = 0; i < cbs.post.length; ++i)
            cbs.post[i]();
        return vnode;
    };
}
exports.init = init;
//# sourceMappingURL=snabbdom.js.map

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function createElement(tagName) {
    return document.createElement(tagName);
}
function createElementNS(namespaceURI, qualifiedName) {
    return document.createElementNS(namespaceURI, qualifiedName);
}
function createTextNode(text) {
    return document.createTextNode(text);
}
function createComment(text) {
    return document.createComment(text);
}
function insertBefore(parentNode, newNode, referenceNode) {
    parentNode.insertBefore(newNode, referenceNode);
}
function removeChild(node, child) {
    node.removeChild(child);
}
function appendChild(node, child) {
    node.appendChild(child);
}
function parentNode(node) {
    return node.parentNode;
}
function nextSibling(node) {
    return node.nextSibling;
}
function tagName(elm) {
    return elm.tagName;
}
function setTextContent(node, text) {
    node.textContent = text;
}
function getTextContent(node) {
    return node.textContent;
}
function isElement(node) {
    return node.nodeType === 1;
}
function isText(node) {
    return node.nodeType === 3;
}
function isComment(node) {
    return node.nodeType === 8;
}
exports.htmlDomApi = {
    createElement: createElement,
    createElementNS: createElementNS,
    createTextNode: createTextNode,
    createComment: createComment,
    insertBefore: insertBefore,
    removeChild: removeChild,
    appendChild: appendChild,
    parentNode: parentNode,
    nextSibling: nextSibling,
    tagName: tagName,
    setTextContent: setTextContent,
    getTextContent: getTextContent,
    isElement: isElement,
    isText: isText,
    isComment: isComment,
};
exports.default = exports.htmlDomApi;
//# sourceMappingURL=htmldomapi.js.map

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var h_1 = __webpack_require__(0);
function copyToThunk(vnode, thunk) {
    thunk.elm = vnode.elm;
    vnode.data.fn = thunk.data.fn;
    vnode.data.args = thunk.data.args;
    thunk.data = vnode.data;
    thunk.children = vnode.children;
    thunk.text = vnode.text;
    thunk.elm = vnode.elm;
}
function init(thunk) {
    var cur = thunk.data;
    var vnode = cur.fn.apply(undefined, cur.args);
    copyToThunk(vnode, thunk);
}
function prepatch(oldVnode, thunk) {
    var i, old = oldVnode.data, cur = thunk.data;
    var oldArgs = old.args, args = cur.args;
    if (old.fn !== cur.fn || oldArgs.length !== args.length) {
        copyToThunk(cur.fn.apply(undefined, args), thunk);
        return;
    }
    for (i = 0; i < args.length; ++i) {
        if (oldArgs[i] !== args[i]) {
            copyToThunk(cur.fn.apply(undefined, args), thunk);
            return;
        }
    }
    copyToThunk(oldVnode, thunk);
}
exports.thunk = function thunk(sel, key, fn, args) {
    if (args === undefined) {
        args = fn;
        fn = key;
        key = undefined;
    }
    return h_1.h(sel, {
        key: key,
        hook: { init: init, prepatch: prepatch },
        fn: fn,
        args: args
    });
};
exports.default = exports.thunk;
//# sourceMappingURL=thunk.js.map

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function updateClass(oldVnode, vnode) {
    var cur, name, elm = vnode.elm, oldClass = oldVnode.data.class, klass = vnode.data.class;
    if (!oldClass && !klass)
        return;
    if (oldClass === klass)
        return;
    oldClass = oldClass || {};
    klass = klass || {};
    for (name in oldClass) {
        if (!klass[name]) {
            elm.classList.remove(name);
        }
    }
    for (name in klass) {
        cur = klass[name];
        if (cur !== oldClass[name]) {
            elm.classList[cur ? 'add' : 'remove'](name);
        }
    }
}
exports.classModule = { create: updateClass, update: updateClass };
exports.default = exports.classModule;
//# sourceMappingURL=class.js.map

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function invokeHandler(handler, vnode, event) {
    if (typeof handler === "function") {
        // call function handler
        handler.call(vnode, event, vnode);
    }
    else if (typeof handler === "object") {
        // call handler with arguments
        if (typeof handler[0] === "function") {
            // special case for single argument for performance
            if (handler.length === 2) {
                handler[0].call(vnode, handler[1], event, vnode);
            }
            else {
                var args = handler.slice(1);
                args.push(event);
                args.push(vnode);
                handler[0].apply(vnode, args);
            }
        }
        else {
            // call multiple handlers
            for (var i = 0; i < handler.length; i++) {
                invokeHandler(handler[i]);
            }
        }
    }
}
function handleEvent(event, vnode) {
    var name = event.type, on = vnode.data.on;
    // call event handler(s) if exists
    if (on && on[name]) {
        invokeHandler(on[name], vnode, event);
    }
}
function createListener() {
    return function handler(event) {
        handleEvent(event, handler.vnode);
    };
}
function updateEventListeners(oldVnode, vnode) {
    var oldOn = oldVnode.data.on, oldListener = oldVnode.listener, oldElm = oldVnode.elm, on = vnode && vnode.data.on, elm = (vnode && vnode.elm), name;
    // optimization for reused immutable handlers
    if (oldOn === on) {
        return;
    }
    // remove existing listeners which no longer used
    if (oldOn && oldListener) {
        // if element changed or deleted we remove all existing listeners unconditionally
        if (!on) {
            for (name in oldOn) {
                // remove listener if element was changed or existing listeners removed
                oldElm.removeEventListener(name, oldListener, false);
            }
        }
        else {
            for (name in oldOn) {
                // remove listener if existing listener removed
                if (!on[name]) {
                    oldElm.removeEventListener(name, oldListener, false);
                }
            }
        }
    }
    // add new listeners which has not already attached
    if (on) {
        // reuse existing listener or create new
        var listener = vnode.listener = oldVnode.listener || createListener();
        // update vnode for listener
        listener.vnode = vnode;
        // if element changed or added we add all needed listeners unconditionally
        if (!oldOn) {
            for (name in on) {
                // add listener if element was changed or new listeners added
                elm.addEventListener(name, listener, false);
            }
        }
        else {
            for (name in on) {
                // add listener if new listener added
                if (!oldOn[name]) {
                    elm.addEventListener(name, listener, false);
                }
            }
        }
    }
}
exports.eventListenersModule = {
    create: updateEventListeners,
    update: updateEventListeners,
    destroy: updateEventListeners
};
exports.default = exports.eventListenersModule;
//# sourceMappingURL=eventlisteners.js.map

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function updateProps(oldVnode, vnode) {
    var key, cur, old, elm = vnode.elm, oldProps = oldVnode.data.props, props = vnode.data.props;
    if (!oldProps && !props)
        return;
    if (oldProps === props)
        return;
    oldProps = oldProps || {};
    props = props || {};
    for (key in oldProps) {
        if (!props[key]) {
            delete elm[key];
        }
    }
    for (key in props) {
        cur = props[key];
        old = oldProps[key];
        if (old !== cur && (key !== 'value' || elm[key] !== cur)) {
            elm[key] = cur;
        }
    }
}
exports.propsModule = { create: updateProps, update: updateProps };
exports.default = exports.propsModule;
//# sourceMappingURL=props.js.map

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var raf = (typeof window !== 'undefined' && window.requestAnimationFrame) || setTimeout;
var nextFrame = function (fn) { raf(function () { raf(fn); }); };
function setNextFrame(obj, prop, val) {
    nextFrame(function () { obj[prop] = val; });
}
function updateStyle(oldVnode, vnode) {
    var cur, name, elm = vnode.elm, oldStyle = oldVnode.data.style, style = vnode.data.style;
    if (!oldStyle && !style)
        return;
    if (oldStyle === style)
        return;
    oldStyle = oldStyle || {};
    style = style || {};
    var oldHasDel = 'delayed' in oldStyle;
    for (name in oldStyle) {
        if (!style[name]) {
            if (name[0] === '-' && name[1] === '-') {
                elm.style.removeProperty(name);
            }
            else {
                elm.style[name] = '';
            }
        }
    }
    for (name in style) {
        cur = style[name];
        if (name === 'delayed' && style.delayed) {
            for (var name2 in style.delayed) {
                cur = style.delayed[name2];
                if (!oldHasDel || cur !== oldStyle.delayed[name2]) {
                    setNextFrame(elm.style, name2, cur);
                }
            }
        }
        else if (name !== 'remove' && cur !== oldStyle[name]) {
            if (name[0] === '-' && name[1] === '-') {
                elm.style.setProperty(name, cur);
            }
            else {
                elm.style[name] = cur;
            }
        }
    }
}
function applyDestroyStyle(vnode) {
    var style, name, elm = vnode.elm, s = vnode.data.style;
    if (!s || !(style = s.destroy))
        return;
    for (name in style) {
        elm.style[name] = style[name];
    }
}
function applyRemoveStyle(vnode, rm) {
    var s = vnode.data.style;
    if (!s || !s.remove) {
        rm();
        return;
    }
    var name, elm = vnode.elm, i = 0, compStyle, style = s.remove, amount = 0, applied = [];
    for (name in style) {
        applied.push(name);
        elm.style[name] = style[name];
    }
    compStyle = getComputedStyle(elm);
    var props = compStyle['transition-property'].split(', ');
    for (; i < props.length; ++i) {
        if (applied.indexOf(props[i]) !== -1)
            amount++;
    }
    elm.addEventListener('transitionend', function (ev) {
        if (ev.target === elm)
            --amount;
        if (amount === 0)
            rm();
    });
}
exports.styleModule = {
    create: updateStyle,
    update: updateStyle,
    destroy: applyDestroyStyle,
    remove: applyRemoveStyle
};
exports.default = exports.styleModule;
//# sourceMappingURL=style.js.map

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * (c) 2017 Hajime Yamasaki Vukelic
 * All rights reserved.
 */
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
var invokeHandler = function (handler, vnode, event) {
    if (typeof handler === "function") {
        handler.call(vnode, event, vnode);
    }
    else {
        var _a = __read(handler), func = _a[0], args = _a.slice(1);
        func.call.apply(func, __spread([vnode], args, [event, vnode]));
    }
};
var handleEvent = function (event, vnode) {
    var name = event.type;
    var doc = vnode.data.doc;
    if (doc && doc[name]) {
        invokeHandler(doc[name], vnode, event);
    }
};
var createListener = function (container) {
    var handler = function (event) {
        handleEvent(event, handler.vnode);
    };
    return handler;
};
var updateListeners = function (oldVNode, vnode) {
    var oldDoc = oldVNode.data.doc;
    var doc = vnode && vnode.data.doc;
    // Optimization for reused immutable handlers
    if (oldDoc === doc) {
        return;
    }
    var oldListener = oldVNode.docListener;
    // Remove existing listeners
    if (oldDoc && oldListener) {
        Object.keys(oldDoc)
            .filter(function (name) { return !doc || !(name in doc); })
            .forEach(function (name) {
            document.removeEventListener(name, oldListener, false);
        });
    }
    var elm = (vnode && vnode.elm);
    // Add new listeners if necessary
    if (doc) {
        var listener_1 = vnode.docListener || oldVNode.docListener || createListener(elm);
        listener_1.vnode = vnode;
        vnode.docListener = listener_1;
        Object.keys(doc)
            .filter(function (name) { return !oldDoc || !(name in oldDoc); })
            .forEach(function (name) {
            document.addEventListener(name, listener_1, false);
        });
    }
};
var module = {
    create: updateListeners,
    destroy: updateListeners,
    update: updateListeners,
};
exports.module = module;
exports.default = module;
//# sourceMappingURL=docevents.js.map

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * (c) 2017 Hajime Yamasaki Vukelic
 * All rights reserved.
 *
 * Loosely based on snabbdom/src/modules/eventlisteners.ts
 *
 */
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
var keyCodeMap = {
    8: "backspace",
    9: "tab",
    13: "enter",
    27: "escape",
    33: "pageup",
    34: "pagedown",
    37: "left",
    38: "up",
    39: "right",
    40: "down",
    46: "delete",
};
var invokeHandler = function (handler, vnode, event) {
    if (typeof handler === "function") {
        handler.call(vnode, event, vnode);
    }
    else {
        var _a = __read(handler), func = _a[0], args = _a.slice(1);
        func.call.apply(func, __spread([vnode], args, [event, vnode]));
    }
};
var handleEvent = function (event, vnode) {
    var name = keyCodeMap[event.keyCode];
    if (!name) {
        return;
    }
    var keys = vnode.data.keys;
    if (keys && keys[name]) {
        invokeHandler(keys[name], vnode, event);
    }
};
var createListener = function (container) {
    var handler = function (event) {
        handleEvent(event, handler.vnode);
    };
    return handler;
};
var updateListeners = function (oldVNode, vnode) {
    var oldKeys = oldVNode.data.keys;
    var keys = vnode && vnode.data.keys;
    // Optimization for reused immutable handlers
    if (oldKeys === keys) {
        return;
    }
    var oldListener = oldVNode.keysListener;
    var elm = (vnode && vnode.elm);
    // Remove existing listeners
    if (oldKeys && oldListener) {
        var remainingKeys = Object.keys(oldKeys).filter(function (key) { return !keys || !(key in keys); });
        if (!remainingKeys.length) {
            elm.removeEventListener("keyup", oldListener, false);
        }
    }
    // Add new listeners if necessary
    if (keys && Object.keys(keys).length) {
        var listener = vnode.keysListener || oldVNode.keysListener || createListener(elm);
        listener.vnode = vnode;
        vnode.keysListener = listener;
        elm.addEventListener("keyup", listener, false);
    }
};
var module = {
    create: updateListeners,
    destroy: updateListeners,
    update: updateListeners,
};
exports.module = module;
exports.default = module;
//# sourceMappingURL=keyevents.js.map

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * (c) 2017 Hajime Yamasaki Vukelic
 * All rights reserved.
 *
 * Loosely based on snabbdom/src/modules/eventlisteners.ts
 *
 */
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
var invokeHandler = function (handler, vnode, event) {
    if (typeof handler === "function") {
        handler.call(vnode, event, vnode);
    }
    else {
        var _a = __read(handler), func = _a[0], args = _a.slice(1);
        func.call.apply(func, __spread([vnode], args, [event, vnode]));
    }
};
var handleEvent = function (event, vnode) {
    var name = event.type;
    var off = vnode.data.off;
    if (off && off[name]) {
        invokeHandler(off[name], vnode, event);
    }
};
var createListener = function (container) {
    var handler = function (event) {
        if (container.contains(event.target)) {
            // Event target it inside the container so we're not interested.
            return;
        }
        // We will only handle events that are triggered outside the container.
        handleEvent(event, handler.vnode);
    };
    return handler;
};
var updateListeners = function (oldVNode, vnode) {
    var oldOff = oldVNode.data.off;
    var off = vnode && vnode.data.off;
    // Optimization for reused immutable handlers
    if (oldOff === off) {
        return;
    }
    var oldListener = oldVNode.offListener;
    // Remove existing listeners
    if (oldOff && oldListener) {
        Object.keys(oldOff)
            .filter(function (name) { return !off || !(name in off); })
            .forEach(function (name) {
            document.removeEventListener(name, oldListener, false);
        });
    }
    var elm = (vnode && vnode.elm);
    // Add new listeners if necessary
    if (off) {
        var listener_1 = vnode.offListener || oldVNode.offListener || createListener(elm);
        listener_1.vnode = vnode;
        vnode.offListener = listener_1;
        Object.keys(off)
            .filter(function (name) { return !oldOff || !(name in oldOff); })
            .forEach(function (name) {
            document.addEventListener(name, listener_1, false);
        });
    }
};
var module = {
    create: updateListeners,
    destroy: updateListeners,
    update: updateListeners,
};
exports.module = module;
exports.default = module;
//# sourceMappingURL=offevents.js.map

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * (c) 2017 Hajime Yamasaki Vukelic
 * All rights reserved.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var qs = __webpack_require__(7);
var handleEvent = function (data, vnode) {
    var route = vnode.data.route;
    if (typeof route === "function") {
        route(data);
    }
};
var createListener = function () {
    var handler = function (event) {
        var pathData = {
            hash: location.hash,
            params: qs.parse(location.search),
            pathname: location.pathname,
            query: location.search,
            type: "popstate",
        };
        handleEvent(pathData, handler.vnode);
    };
    return handler;
};
var updateListener = function (oldVNode, vnode) {
    var oldRoute = oldVNode.data.route;
    var route = vnode && vnode.data.route;
    if (oldRoute === route) {
        return;
    }
    var oldListener = oldVNode.routeListener;
    // Remove existing listener
    if (oldRoute && oldListener) {
        window.removeEventListener("popstate", oldListener, false);
    }
    if (route) {
        var listener = createListener();
        listener.vnode = vnode;
        vnode.routeListener = listener;
        window.addEventListener("popstate", listener, false);
    }
};
var module = {
    create: updateListener,
    destroy: updateListener,
    update: updateListener,
};
exports.module = module;
exports.default = module;
//# sourceMappingURL=routeevents.js.map

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = function (str) {
	return encodeURIComponent(str).replace(/[!'()*]/g, function (c) {
		return '%' + c.charCodeAt(0).toString(16).toUpperCase();
	});
};


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var token = '%[a-f0-9]{2}';
var singleMatcher = new RegExp(token, 'gi');
var multiMatcher = new RegExp('(' + token + ')+', 'gi');

function decodeComponents(components, split) {
	try {
		// Try to decode the entire string first
		return decodeURIComponent(components.join(''));
	} catch (err) {
		// Do nothing
	}

	if (components.length === 1) {
		return components;
	}

	split = split || 1;

	// Split the array in 2 parts
	var left = components.slice(0, split);
	var right = components.slice(split);

	return Array.prototype.concat.call([], decodeComponents(left), decodeComponents(right));
}

function decode(input) {
	try {
		return decodeURIComponent(input);
	} catch (err) {
		var tokens = input.match(singleMatcher);

		for (var i = 1; i < tokens.length; i++) {
			input = decodeComponents(tokens, i).join('');

			tokens = input.match(singleMatcher);
		}

		return input;
	}
}

function customDecodeURIComponent(input) {
	// Keep track of all the replacements and prefill the map with the `BOM`
	var replaceMap = {
		'%FE%FF': '\uFFFD\uFFFD',
		'%FF%FE': '\uFFFD\uFFFD'
	};

	var match = multiMatcher.exec(input);
	while (match) {
		try {
			// Decode as big chunks as possible
			replaceMap[match[0]] = decodeURIComponent(match[0]);
		} catch (err) {
			var result = decode(match[0]);

			if (result !== match[0]) {
				replaceMap[match[0]] = result;
			}
		}

		match = multiMatcher.exec(input);
	}

	// Add `%C2` at the end of the map to make sure it does not replace the combinator before everything else
	replaceMap['%C2'] = '\uFFFD';

	var entries = Object.keys(replaceMap);

	for (var i = 0; i < entries.length; i++) {
		// Replace all decoded components
		var key = entries[i];
		input = input.replace(new RegExp(key, 'g'), replaceMap[key]);
	}

	return input;
}

module.exports = function (encodedURI) {
	if (typeof encodedURI !== 'string') {
		throw new TypeError('Expected `encodedURI` to be of type `string`, got `' + typeof encodedURI + '`');
	}

	try {
		encodedURI = encodedURI.replace(/\+/g, ' ');

		// Try the built in decoder first
		return decodeURIComponent(encodedURI);
	} catch (err) {
		// Fallback to a more advanced decoder
		return customDecodeURIComponent(encodedURI);
	}
};


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * (c) 2017 Hajime Yamasaki Vukelic
 * All rights reserved.
 */
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
var html_1 = __webpack_require__(2);
var is = __webpack_require__(1);
/**
 * Clears the timer if one was set by the patch function.
 */
var cancelNextRender = function (state) {
    if (state.nextRenderId) {
        clearTimeout(state.nextRenderId);
        state.nextRenderId = null;
    }
};
/**
 * Cancel the next-scheduled render, and reschedule another render
 */
var setNextRender = function (state, render) {
    cancelNextRender(state);
    state.nextRenderId = setTimeout(render);
};
/**
 * Create a renderer function
 *
 * The renderer function will keep updating the vnodes stored in the runner
 * state using a specified view function.
 */
var createRenderer = function (state, patch, view) {
    return function (actionHandler) {
        state.vnodes = patch(state.vnodes, view({ model: state.model, act: actionHandler }));
        state.nextRenderId = null;
    };
};
/**
 * Retrieves the value within an object, at given scope.
 */
var scopeGet = function (scope, object) {
    return scope.length
        ? scopeGet(scope.slice(1), object[scope[0]])
        : object;
};
/**
 * Returns a copy of the object with the value assigned to the property at specified scope
 */
var scopeSet = function (scope, val, object) {
    if (scope.length === 0) {
        return val;
    }
    var _a = __read(scope), first = _a[0], rest = _a.slice(1);
    return Array.isArray(object)
        ? (function () {
            var copy = object.concat([]);
            copy[first] = scopeSet(rest, val, copy[first]);
            return copy;
        })()
        : __assign({}, object, (_b = {}, _b[first] = scopeSet(rest, val, object[first]), _b));
    var _b;
};
var scopePatch = function (scope, fn, object) {
    return scopeSet(scope, fn(scopeGet(scope, object)), object);
};
var createPatcher = function (state, middleware, patchCallback, scope, parentScope, scopeCallback) {
    if (scope === void 0) { scope = []; }
    if (parentScope === void 0) { parentScope = []; }
    if (scopeCallback === void 0) { scopeCallback = function (model) { return model; }; }
    var mutate = function (fn) { return function (model) {
        var updated = scope
            ? scopePatch(scope, fn, model)
            : fn(model);
        return scopePatch(parentScope, scopeCallback, updated);
    }; };
    var patcher = function (fn) {
        state.model = middleware(mutate(fn))(state.model);
        patchCallback();
    };
    patcher.as = function (childScope, parentCallback) {
        var patcherScope = scope ? scope.concat(childScope) : childScope;
        return createPatcher(state, middleware, patchCallback, patcherScope, scope, parentCallback);
    };
    return patcher;
};
var actionHandlerFactory = function (patcher, actions, prefix) {
    if (prefix === void 0) { prefix = []; }
    var handler = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return function () {
            var eventArgs = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                eventArgs[_i] = arguments[_i];
            }
            var _a = __read(prefix.concat(args, eventArgs)), action = _a[0], actionArgs = _a.slice(1);
            if (action == null) {
                return;
            }
            var actionFn = actions[action];
            if (!actionFn) {
                throw Error("No action found for message [" + action + ", " + actionArgs.join(", ") + "]");
            }
            actionFn.apply(void 0, __spread([patcher], actionArgs));
        };
    };
    handler.as = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return actionHandlerFactory(patcher, actions, prefix.concat(args));
    };
    handler.prefix = prefix;
    return handler;
};
/**
 * Create an action handler
 *
 * Action handler is a proxy event/hook handler factory which allows the user to
 * specify messages which will then be tied to action handlers when the events
 * trigger.
 *
 * A message constists of an action identifier, and zero or more arbitrary
 * user-specified arguments. The message is specified in the prop, and it is
 * passsed to the action handler, which returns an event handler that is used by
 * Snabbdom to handle the events. When an event is triggered, the control is
 * returned to the action handler which uses the original message to determine
 * which action handler will be invoked.
 */
var createActionHandler = function (state, actions, render, middleware) {
    var patcher = createPatcher(state, middleware, function () { return setNextRender(state, function () { return render(handler); }); });
    var handler = actionHandlerFactory(patcher, actions);
    return handler;
};
var DEFAULT_OPTIONS = {
    middleware: [],
    patch: html_1.patch,
    plugins: [],
    root: "#app",
};
/**
 * Create and start a new application runtime
 *
 * The runner function takes a model, actions mapping, view function, and an
 * an object containing runner options, and kickstarts the app.
 */
var runner = function (model, actions, view, options) {
    if (options === void 0) { options = {}; }
    var opt = __assign({}, DEFAULT_OPTIONS, options);
    var state = {
        model: model,
        nextRenderId: null,
        vnodes: is.str(opt.root) ? document.querySelector(opt.root) : opt.root,
    };
    // Collect plugin actions
    opt.plugins.forEach(function (_a) {
        var pluginActions = _a.actions;
        actions = __assign({}, pluginActions, actions);
    });
    // Prepare the engine
    var middlewareStack = opt.middleware.reduce(function (m1, m2) {
        return function (fn) { return m1(m2(fn)); };
    }, function (fn) { return fn; });
    var render = createRenderer(state, opt.patch, view);
    var actionHandler = createActionHandler(state, actions, render, middlewareStack);
    var pluginActionHandler = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return actionHandler.apply(void 0, __spread(args))();
    };
    // Init plugins
    opt.plugins.forEach(function (_a) {
        var init = _a.init;
        init(pluginActionHandler, state);
    });
    // Start rendering
    render(actionHandler);
};
exports.runner = runner;
exports.default = runner;
//# sourceMappingURL=runner.js.map

/***/ })
/******/ ]);
//# sourceMappingURL=shell-b735d.js.map