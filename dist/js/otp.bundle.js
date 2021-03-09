/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/*!***********************!*\
  !*** ./src/js/otp.js ***!
  \***********************/
eval("let otpInputs = document.querySelectorAll('.otp__form input');\nArray.from(otpInputs).forEach(function (otpInput) {\n  otpInput.addEventListener('keyup', function (e) {\n    if (e.keyCode === 8 || e.keyCode === 37) {\n      let prev = otpInput.previousElementSibling;\n\n      if (prev) {\n        prev.focus();\n      }\n    } else if (e.keyCode >= 48 && e.keyCode <= 57 || e.keyCode >= 65 && e.keyCode <= 90 || e.keyCode >= 96 && e.keyCode <= 105 || e.keyCode === 39) {\n      let next = otpInput.nextElementSibling;\n\n      if (next) {\n        next.focus();\n      }\n    }\n  });\n});\n\n//# sourceURL=webpack://aiadmk-app-frontend/./src/js/otp.js?");
/******/ })()
;