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

/***/ "./src/body.js":
/*!*********************!*\
  !*** ./src/body.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Body\": () => (/* binding */ Body)\n/* harmony export */ });\n/* harmony import */ var _vector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vector */ \"./src/vector.js\");\n\r\n\r\nclass Body {\r\n    constructor(x, y, speed = 5000, width = 14, height = 80){\r\n        this.x = x;\r\n        this.y = y;\r\n        this.speed = speed;\r\n        this.height = height;\r\n        this.width = width;\r\n        this.velocity = new _vector__WEBPACK_IMPORTED_MODULE_0__.Vector();\r\n    }\r\n\r\n    direction(direction) {\r\n        this.velocity.setDirection(direction, this.speed);\r\n    }\r\n\r\n    bodyMove() {\r\n        this.velocity.kinematic(this.dx, this.dy);\r\n    }\r\n\r\n    update() {\r\n        this.velocity.move(this);\r\n    }\r\n}\n\n//# sourceURL=webpack://pong/./src/body.js?");

/***/ }),

/***/ "./src/canvas.js":
/*!***********************!*\
  !*** ./src/canvas.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Canvas\": () => (/* binding */ Canvas)\n/* harmony export */ });\nclass Canvas {\r\n    constructor(w = 640, h = 480) {\r\n        this.element = document.createElement(\"canvas\");\r\n        this.context = this.element.getContext(\"2d\");\r\n        this.element.width = w;\r\n        this.element.height = h;\r\n        document.querySelector(\"#game\").append(this.element);\r\n    }\r\n\r\n    fill(color) {\r\n        this.context.fillStyle = color;\r\n        this.context.fillRect(0, 0, this.element.width, this.element.height);\r\n    }\r\n\r\n    drowRect(x, y, w, h, color) {\r\n        this.context.fillStyle = color;\r\n        this.context.fillRect(x, y, w, h);\r\n    }\r\n\r\n    drowRectRound(x, y, width, height, radius, fill, stroke) {\r\n        if (typeof stroke == \"undefined\") {\r\n            stroke = true;\r\n        }\r\n        if (typeof radius === \"undefined\") {\r\n            radius = 5;\r\n        }\r\n        if (typeof radius === 'number') {\r\n            radius = { tl: radius, tr: radius, br: radius, bl: radius };\r\n        } else {\r\n            const defaultRadius = { tl: 0, tr: 0, br: 0, bl: 0 };\r\n            for (let side in defaultRadius) {\r\n                radius[side] = radius[side] || defaultRadius[side];\r\n            }\r\n        }\r\n        this.context.beginPath();\r\n        this.context.moveTo(x + radius.tl, y);\r\n        this.context.lineTo(x + width - radius.tr, y);\r\n        this.context.quadraticCurveTo(x + width, y, x + width, y + radius.tr);\r\n        this.context.lineTo(x + width, y + height - radius.br);\r\n        this.context.quadraticCurveTo(x + width, y + height, x + width - radius.br, y + height);\r\n        this.context.lineTo(x + radius.bl, y + height);\r\n        this.context.quadraticCurveTo(x, y + height, x, y + height - radius.bl);\r\n        this.context.lineTo(x, y + radius.tl);\r\n        this.context.quadraticCurveTo(x, y, x + radius.tl, y);\r\n        this.context.closePath();\r\n\r\n\r\n        if (fill) {\r\n            this.context.fillStyle = fill;\r\n            this.context.fill();\r\n        }\r\n        if (stroke) {\r\n            this.context.strokeStyle = fill;\r\n            this.context.stroke();\r\n        }\r\n    }\r\n\r\n    drowCircle(x, y, r, lineWidth, color, fill = true) {\r\n        this.context.beginPath();\r\n        this.context.lineWidth = lineWidth;\r\n        this.context.arc(x, y, r, 0, Math.PI * 2, true);\r\n        this.context.strokeStyle = color;\r\n\r\n        if (fill) {\r\n            this.context.fillStyle = color;\r\n            this.context.fill();\r\n            return;\r\n        }\r\n\r\n        this.context.stroke();\r\n        this.context.closePath();\r\n    }\r\n\r\n    print(x, y, text, color) {\r\n        this.context.fillStyle = color;\r\n        this.context.font = \"bold 20px sans-serif\";\r\n        this.context.fillText(text, x, y);\r\n    }\r\n\r\n    clear() {\r\n        this.context.clearRect(0, 0, this.element.width, this.element.height);\r\n    }\r\n}\n\n//# sourceURL=webpack://pong/./src/canvas.js?");

/***/ }),

/***/ "./src/control.js":
/*!************************!*\
  !*** ./src/control.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Control\": () => (/* binding */ Control)\n/* harmony export */ });\nclass Control {\r\n    constructor(keyMap) {\r\n        this.up = false;\r\n        this.down = false;\r\n        this.idle = false;\r\n        this.keyMap = new Map(keyMap);\r\n\r\n        document.addEventListener(\"keydown\", (e) => this.update(e, true));\r\n        document.addEventListener(\"keyup\", (e) => this.update(e, false));\r\n    }\r\n\r\n    update(e, state) {\r\n        if( this.keyMap.has(e.keyCode)){\r\n            this[this.keyMap.get(e.keyCode)] = state;\r\n        }\r\n    }\r\n}\n\n//# sourceURL=webpack://pong/./src/control.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./canvas */ \"./src/canvas.js\");\n/* harmony import */ var _control__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./control */ \"./src/control.js\");\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./player */ \"./src/player.js\");\n/* harmony import */ var _renderUI__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./renderUI */ \"./src/renderUI.js\");\n\r\n\r\n\r\n\r\n\r\nclass Game {\r\n    constructor() {\r\n        this.screen = new Map([\r\n            [\"background\", new _canvas__WEBPACK_IMPORTED_MODULE_0__.Canvas],\r\n            [\"gameLayer\", new _canvas__WEBPACK_IMPORTED_MODULE_0__.Canvas],\r\n            [\"ui\", new _canvas__WEBPACK_IMPORTED_MODULE_0__.Canvas],\r\n        ]);\r\n\r\n        this.control1 = new _control__WEBPACK_IMPORTED_MODULE_1__.Control([ [38, \"up\"], [40, \"down\"] ]);\r\n        this.control2 = new _control__WEBPACK_IMPORTED_MODULE_1__.Control([ [87, \"up\"], [83, \"down\"] ]);\r\n\r\n        this.player1 = new _player__WEBPACK_IMPORTED_MODULE_2__.Player(this, 10, 200, this.control1, \"#52C5D4\");\r\n        this.player2 = new _player__WEBPACK_IMPORTED_MODULE_2__.Player(this, this.screen.get(\"gameLayer\").element.width - 20, 200, this.control2, \"#EDEDED\");\r\n\r\n        this.UI = new _renderUI__WEBPACK_IMPORTED_MODULE_3__.RenderUI(this);\r\n\r\n        this.init();\r\n    }\r\n\r\n    init() {\r\n        //фон\r\n        this.screen.get(\"background\").fill(\"#424357\");\r\n\r\n        this.screen.get(\"background\").drowRect((this.screen.get(\"background\").element.width / 2) - 3, 0, 6, this.screen.get(\"background\").element.height, \"#585874\");\r\n\r\n        this.screen.get(\"background\").drowCircle((this.screen.get(\"background\").element.width / 2), (this.screen.get(\"background\").element.height / 2), 100, 6, \"#585874\", false);\r\n\r\n        requestAnimationFrame(time => this.loop(time));\r\n    }\r\n\r\n    update(time) {\r\n        this.player1.update(time);\r\n        this.player2.update(time);\r\n    }\r\n\r\n    loop(time) {\r\n        this.screen.get(\"gameLayer\").clear();\r\n\r\n        this.update(time);\r\n\r\n        this.player1.drow();\r\n        this.player2.drow();\r\n\r\n        requestAnimationFrame(time => this.loop(time));\r\n    }\r\n}\r\n\r\nwindow.onload = () => {\r\n    const game = new Game();\r\n}\n\n//# sourceURL=webpack://pong/./src/game.js?");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Player\": () => (/* binding */ Player)\n/* harmony export */ });\n/* harmony import */ var _body__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./body */ \"./src/body.js\");\n\r\n\r\nclass Player extends _body__WEBPACK_IMPORTED_MODULE_0__.Body {\r\n    constructor(game, x, y, control, color) {\r\n        super(x,y);\r\n\r\n        this.game = game;\r\n        this.control = control;\r\n        this.score = 0;\r\n        this.color = color;\r\n    }\r\n\r\n    drow() {\r\n        this.game.screen.get(\"gameLayer\").drowRect(this.x, this.y, this.width, this.height, this.color);\r\n    }\r\n\r\n    scoreInc() {\r\n        this.score++\r\n    }\r\n\r\n    update() {\r\n        if ( this.control.up ) {\r\n            if (this.y > 0) {\r\n                this.direction(\"up\");\r\n            } else {\r\n                this.y = 0;\r\n            }\r\n        } else if ( this.control.down ) {\r\n            if ( this.y + this.height < this.game.screen.get(\"gameLayer\").element.height ) {\r\n                this.direction(\"down\");\r\n            } else {\r\n                this.y = this.game.screen.get(\"gameLayer\").element.height - this.height;\r\n            }\r\n        } else {\r\n            this.direction(\"idle\");\r\n        }\r\n\r\n        super.update();\r\n    }\r\n}\n\n//# sourceURL=webpack://pong/./src/player.js?");

/***/ }),

/***/ "./src/renderUI.js":
/*!*************************!*\
  !*** ./src/renderUI.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"RenderUI\": () => (/* binding */ RenderUI)\n/* harmony export */ });\nclass RenderUI {\r\n    constructor(game) {\r\n        this.game = game;\r\n        this.posLeftY = this.game.screen.get(\"ui\").element.width / 4;\r\n        this.posRightY = this.game.screen.get(\"ui\").element.width - this.posLeftY;\r\n\r\n        this.init();\r\n    }\r\n\r\n    init() {\r\n        this.updateUI();\r\n    }\r\n\r\n    updateUI() {\r\n        this.game.screen.get(\"ui\").clear();\r\n\r\n        this.game.screen.get(\"ui\").drowRectRound( this.posLeftY - 32, 10, 64, 40, 20, \"rgba(38,38,38,0.7)\" );\r\n        this.game.screen.get(\"ui\").print( this.posLeftY - 6, 38, this.game.player1.score, \"#52C5D4\" );\r\n\r\n        this.game.screen.get(\"ui\").drowRectRound( this.posRightY - 32, 10, 64, 40, 20, \"rgba(38,38,38,0.7)\" );\r\n        this.game.screen.get(\"ui\").print( this.posRightY - 6, 38, this.game.player2.score, \"#EDEDED\" );\r\n    }\r\n}\n\n//# sourceURL=webpack://pong/./src/renderUI.js?");

/***/ }),

/***/ "./src/vector.js":
/*!***********************!*\
  !*** ./src/vector.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Vector\": () => (/* binding */ Vector)\n/* harmony export */ });\nclass Vector {\r\n    constructor(direction= \"up\", speed = 0) {\r\n        this.direction = direction;\r\n        this.speed = speed;\r\n        this.dx = 0;\r\n        this.dy = 0;\r\n        this.setDirection(this.direction, this.speed);\r\n    }\r\n\r\n    setDirection(direction, speed) {\r\n        this.direction = direction;\r\n        this.peed = speed;\r\n        this.dy = 0;\r\n\r\n        switch(this.direction) {\r\n            case \"up\":\r\n                this.dy = -speed;\r\n                break;\r\n            case \"down\":\r\n                this.dy = speed;\r\n                break;\r\n            default:\r\n                this.dy = this.dy;\r\n        }\r\n    }\r\n\r\n    kinematic(dx, dy) {\r\n        this.dx = dx;\r\n        this.dy = dy;\r\n    }\r\n\r\n    move(obj) {\r\n        obj.x += this.dx / 1000;\r\n        obj.y += this.dy / 1000;\r\n\r\n    }\r\n}\n\n//# sourceURL=webpack://pong/./src/vector.js?");

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