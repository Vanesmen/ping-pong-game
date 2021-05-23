/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/canvas.js":
/*!***********************!*\
  !*** ./src/canvas.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Canvas\": () => (/* binding */ Canvas)\n/* harmony export */ });\nclass Canvas {\r\n    constructor(w = 640, h = 480) {\r\n        this.element = document.createElement(\"canvas\");\r\n        this.context = this.element.getContext(\"2d\");\r\n        this.element.width = w;\r\n        this.element.height = h;\r\n        document.querySelector(\"#game\").append(this.element);\r\n    }\r\n\r\n    fill(color) {\r\n        this.context.fillStyle = color;\r\n        this.context.fillRect(0, 0, this.element.width, this.element.height);\r\n    }\r\n\r\n    drowRect(x, y, w, h, color) {\r\n        this.context.fillStyle = color;\r\n        this.context.fillRect(x, y, w, h);\r\n    }\r\n\r\n    drowRectRound(x, y, width, height, radius, fill, stroke) {\r\n        if (typeof stroke == \"undefined\") {\r\n            stroke = true;\r\n        }\r\n        if (typeof radius === \"undefined\") {\r\n            radius = 5;\r\n        }\r\n        if (typeof radius === 'number') {\r\n            radius = { tl: radius, tr: radius, br: radius, bl: radius };\r\n        } else {\r\n            const defaultRadius = { tl: 0, tr: 0, br: 0, bl: 0 };\r\n            for (let side in defaultRadius) {\r\n                radius[side] = radius[side] || defaultRadius[side];\r\n            }\r\n        }\r\n        this.context.beginPath();\r\n        this.context.moveTo(x + radius.tl, y);\r\n        this.context.lineTo(x + width - radius.tr, y);\r\n        this.context.quadraticCurveTo(x + width, y, x + width, y + radius.tr);\r\n        this.context.lineTo(x + width, y + height - radius.br);\r\n        this.context.quadraticCurveTo(x + width, y + height, x + width - radius.br, y + height);\r\n        this.context.lineTo(x + radius.bl, y + height);\r\n        this.context.quadraticCurveTo(x, y + height, x, y + height - radius.bl);\r\n        this.context.lineTo(x, y + radius.tl);\r\n        this.context.quadraticCurveTo(x, y, x + radius.tl, y);\r\n        this.context.closePath();\r\n\r\n\r\n        if (fill) {\r\n            this.context.fillStyle = fill;\r\n            this.context.fill();\r\n        }\r\n        if (stroke) {\r\n            this.context.strokeStyle = fill;\r\n            this.context.stroke();\r\n        }\r\n    }\r\n\r\n    drowCircle(x, y, r, lineWidth, color, fill = true) {\r\n        this.context.beginPath();\r\n        this.context.lineWidth = lineWidth;\r\n        this.context.arc(x, y, r, 0, Math.PI * 2, true);\r\n        this.context.strokeStyle = color;\r\n\r\n        if (fill) {\r\n            this.context.fillStyle = color;\r\n            this.context.fill();\r\n            return;\r\n        }\r\n\r\n        this.context.stroke();\r\n        this.context.closePath();\r\n    }\r\n\r\n    print(x, y, text, color) {\r\n        this.context.fillStyle = color;\r\n        this.context.font = \"bold 20px sans-serif\";\r\n        this.context.fillText(text, x, y);\r\n    }\r\n\r\n    clear() {\r\n        this.context.clearRect(0, 0, this.element.width, this.element.height);\r\n    }\r\n}\n\n//# sourceURL=webpack://pong/./src/canvas.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./canvas */ \"./src/canvas.js\");\n\r\n\r\nclass Game {\r\n    constructor() {\r\n        this.screen = new Map([\r\n            [\"background\", new _canvas__WEBPACK_IMPORTED_MODULE_0__.Canvas],\r\n            [\"gameLayer\", new _canvas__WEBPACK_IMPORTED_MODULE_0__.Canvas],\r\n            [\"ui\", new _canvas__WEBPACK_IMPORTED_MODULE_0__.Canvas],\r\n        ])\r\n\r\n        this.init();\r\n    }\r\n\r\n    init() {\r\n        //фон\r\n        this.screen.get(\"background\").fill(\"#424357\");\r\n\r\n        this.screen.get(\"background\").drowRect((this.screen.get(\"background\").element.width / 2) - 3, 0, 6, this.screen.get(\"background\").element.height, \"#585874\");\r\n\r\n        this.screen.get(\"background\").drowCircle((this.screen.get(\"background\").element.width / 2), (this.screen.get(\"background\").element.height / 2), 100, 6, \"#585874\", false);\r\n\r\n        requestAnimationFrame(time => this.loop(time));\r\n    }\r\n\r\n    update(time) {\r\n\r\n    }\r\n\r\n    loop(time) {\r\n        requestAnimationFrame(time => this.loop(time));\r\n    }\r\n}\r\n\r\nwindow.onload = () => {\r\n    const game = new Game();\r\n}\n\n//# sourceURL=webpack://pong/./src/game.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/game.js");
/******/ 	
/******/ })()
;