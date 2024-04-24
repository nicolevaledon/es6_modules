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

/***/ "./src/car.js":
/*!********************!*\
  !*** ./src/car.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Car {\r\n  constructor(id, make, model, year) {\r\n    this.id = id;\r\n    this.make = make;\r\n    this.model = model;\r\n    this.year = year;\r\n  }\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Car);\r\n\n\n//# sourceURL=webpack://es6_modules/./src/car.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _wishlist_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wishlist.js */ \"./src/wishlist.js\");\n\r\nconsole.log(\"Hello World\");\r\n\r\n// TODO\r\nconst submitForm = document.querySelector(\"#submitForm\");\r\nconst makeInput = document.querySelector(\"#makeInput\");\r\nconst modelInput = document.querySelector(\"#modelInput\");\r\nconst yearInput = document.querySelector(\"#yearInput\");\r\nconst carMakePara = document.querySelector(\"#car-make\");\r\nconst carModelPara = document.querySelector(\"#car-model\");\r\nconst carYearPara = document.querySelector(\"#car-year\");\r\nconst removeBtn = document.querySelector(\".removeBtn\");\r\nconst wishlistUl = document.querySelector(\"#wishListContainer > ul\");\r\n\r\nconst wishlist = new _wishlist_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\r\n\r\nsubmitForm.addEventListener(\"submit\", addCar);\r\nremoveBtn.addEventListener(\"click\", removeCar);\r\n\r\nfunction showCarDetails(car) {\r\n  carMakePara.textContent = car.make;\r\n  carModelPara.textContent = car.model;\r\n  carYearPara.textContent = car.year;\r\n\r\n  removeBtn.disabled = false;\r\n  removeBtn.setAttribute(\"data-carId\", car.id);\r\n}\r\nfunction updateDomList() {\r\n  wishlistUl.innerHTML = \"\";\r\n\r\n  wishlist.list.forEach((car) => {\r\n    const tempListItem = document.createElement(\"li\");\r\n    tempListItem.textContent = `${car.make} : ${car.model}`;\r\n    tempListItem.addEventListener(\"click\", () => {\r\n      showCarDetails(car);\r\n    });\r\n    wishlistUl.append(tempListItem);\r\n  });\r\n}\r\n\r\nfunction addCar(event) {\r\n  event.preventDefault();\r\n  wishlist.add(makeInput.value, modelInput.value, yearInput.value);\r\n  updateDomList();\r\n}\r\n\r\nfunction removeCar() {\r\n  const CarId = removeBtn.getAttribute(\"data-carId\");\r\n  wishlist.remove(CarId);\r\n  updateDomList();\r\n  carMakePara.textContent = \"\";\r\n  carModelPara.textContent = \"\";\r\n  carYearPara.textContent = \"\";\r\n\r\n  removeBtn.disabled = true;\r\n}\r\n\n\n//# sourceURL=webpack://es6_modules/./src/index.js?");

/***/ }),

/***/ "./src/wishlist.js":
/*!*************************!*\
  !*** ./src/wishlist.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ WishList)\n/* harmony export */ });\n/* harmony import */ var _car_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./car.js */ \"./src/car.js\");\n\r\n\r\nclass WishList {\r\n  constructor() {\r\n    this.list = [];\r\n    this.nextId = 0;\r\n  }\r\n\r\n  add(make, model, year) {\r\n    const tempCar = new _car_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](++this.nextId, make, model, year);\r\n    this.list.push(tempCar);\r\n  }\r\n  remove(carId) {\r\n    // const matchingCarIndex = this.list.findIndex((car) => {\r\n    //   return car.id == carId;\r\n    // });\r\n    // this.list.splice(matchingCarIndex, 1);\r\n\r\n    this.list = this.list.filter((car) => {\r\n      return car.id != carId;\r\n    });\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://es6_modules/./src/wishlist.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;