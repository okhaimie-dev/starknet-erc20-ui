"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/components/Balance.tsx":
/*!************************************!*\
  !*** ./src/components/Balance.tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/.pnpm/next@14.0.2_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _starknet_react_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @starknet-react/core */ \"(app-pages-browser)/./node_modules/.pnpm/@starknet-react+core@2.1.0_get-starknet-core@3.2.0_react-dom@18.2.0_react@18.2.0_starknet@5.24.3/node_modules/@starknet-react/core/dist/index.js\");\n/* harmony import */ var _utils_abi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/utils/abi */ \"(app-pages-browser)/./src/utils/abi.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst testAddress = \"0x05d061a9bf7e4707f39d35bf038fcb754ce62e7e6daf8b486ecffa430a599919s\";\nconst Balance = ()=>{\n    _s();\n    const { address } = (0,_starknet_react_core__WEBPACK_IMPORTED_MODULE_1__.useAccount)();\n    const { data, isLoading, isError } = (0,_starknet_react_core__WEBPACK_IMPORTED_MODULE_1__.useContractRead)({\n        functionName: \"balanceOf\",\n        args: [\n            address\n        ],\n        abi: _utils_abi__WEBPACK_IMPORTED_MODULE_2__.abi,\n        address: testAddress,\n        watch: true\n    });\n    if (isLoading) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"Loading...\"\n    }, void 0, false, {\n        fileName: \"/Users/okhaimie/Desktop/Open-Source/Starknet/tutorial/erc20_web/src/components/Balance.tsx\",\n        lineNumber: 19,\n        columnNumber: 24\n    }, undefined);\n    if (isError) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"Error...\"\n    }, void 0, false, {\n        fileName: \"/Users/okhaimie/Desktop/Open-Source/Starknet/tutorial/erc20_web/src/components/Balance.tsx\",\n        lineNumber: 20,\n        columnNumber: 22\n    }, undefined);\n    //@ts-ignore\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"Balance:\"\n            }, void 0, false, {\n                fileName: \"/Users/okhaimie/Desktop/Open-Source/Starknet/tutorial/erc20_web/src/components/Balance.tsx\",\n                lineNumber: 25,\n                columnNumber: 4\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"$\",\n                    parseFloat(data.balance.low),\n                    \"n\"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/okhaimie/Desktop/Open-Source/Starknet/tutorial/erc20_web/src/components/Balance.tsx\",\n                lineNumber: 26,\n                columnNumber: 4\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n                fileName: \"/Users/okhaimie/Desktop/Open-Source/Starknet/tutorial/erc20_web/src/components/Balance.tsx\",\n                lineNumber: 27,\n                columnNumber: 4\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/okhaimie/Desktop/Open-Source/Starknet/tutorial/erc20_web/src/components/Balance.tsx\",\n        lineNumber: 24,\n        columnNumber: 3\n    }, undefined);\n};\n_s(Balance, \"BcBx1VfWSrzTnJraOQ5QTUvYE50=\", false, function() {\n    return [\n        _starknet_react_core__WEBPACK_IMPORTED_MODULE_1__.useAccount,\n        _starknet_react_core__WEBPACK_IMPORTED_MODULE_1__.useContractRead\n    ];\n});\n_c = Balance;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Balance);\nvar _c;\n$RefreshReg$(_c, \"Balance\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0JhbGFuY2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7OztBQUVtRTtBQUNqQztBQUVsQyxNQUFNRyxjQUNMO0FBRUQsTUFBTUMsVUFBVTs7SUFDZixNQUFNLEVBQUVDLE9BQU8sRUFBRSxHQUFHTCxnRUFBVUE7SUFDOUIsTUFBTSxFQUFFTSxJQUFJLEVBQUVDLFNBQVMsRUFBRUMsT0FBTyxFQUFFLEdBQUdQLHFFQUFlQSxDQUFDO1FBQ3BEUSxjQUFjO1FBQ2RDLE1BQU07WUFBQ0w7U0FBa0I7UUFDekJILEdBQUdBLDZDQUFBQTtRQUNIRyxTQUFTRjtRQUNUUSxPQUFPO0lBQ1I7SUFFQSxJQUFJSixXQUFXLHFCQUFPLDhEQUFDSztrQkFBSTs7Ozs7O0lBQzNCLElBQUlKLFNBQVMscUJBQU8sOERBQUNJO2tCQUFJOzs7Ozs7SUFFekIsWUFBWTtJQUNaLHFCQUNDLDhEQUFDQTs7MEJBQ0EsOERBQUNDOzBCQUFFOzs7Ozs7MEJBQ0gsOERBQUNBOztvQkFBRTtvQkFBRUMsV0FBV1IsS0FBS1MsT0FBTyxDQUFDQyxHQUFHO29CQUFFOzs7Ozs7OzBCQUNsQyw4REFBQ0M7Ozs7Ozs7Ozs7O0FBR0o7R0FyQk1iOztRQUNlSiw0REFBVUE7UUFDT0MsaUVBQWVBOzs7S0FGL0NHO0FBdUJOLCtEQUFlQSxPQUFPQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0JhbGFuY2UudHN4PzQyZGEiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCB7IHVzZUFjY291bnQsIHVzZUNvbnRyYWN0UmVhZCB9IGZyb20gXCJAc3RhcmtuZXQtcmVhY3QvY29yZVwiO1xuaW1wb3J0IHsgYWJpIH0gZnJvbSBcIkAvdXRpbHMvYWJpXCI7XG5cbmNvbnN0IHRlc3RBZGRyZXNzID1cblx0XCIweDA1ZDA2MWE5YmY3ZTQ3MDdmMzlkMzViZjAzOGZjYjc1NGNlNjJlN2U2ZGFmOGI0ODZlY2ZmYTQzMGE1OTk5MTlzXCI7XG5cbmNvbnN0IEJhbGFuY2UgPSAoKSA9PiB7XG5cdGNvbnN0IHsgYWRkcmVzcyB9ID0gdXNlQWNjb3VudCgpO1xuXHRjb25zdCB7IGRhdGEsIGlzTG9hZGluZywgaXNFcnJvciB9ID0gdXNlQ29udHJhY3RSZWFkKHtcblx0XHRmdW5jdGlvbk5hbWU6IFwiYmFsYW5jZU9mXCIsXG5cdFx0YXJnczogW2FkZHJlc3MgYXMgc3RyaW5nXSxcblx0XHRhYmksXG5cdFx0YWRkcmVzczogdGVzdEFkZHJlc3MsXG5cdFx0d2F0Y2g6IHRydWUsXG5cdH0pO1xuXG5cdGlmIChpc0xvYWRpbmcpIHJldHVybiA8ZGl2PkxvYWRpbmcuLi48L2Rpdj47XG5cdGlmIChpc0Vycm9yKSByZXR1cm4gPGRpdj5FcnJvci4uLjwvZGl2PjtcblxuXHQvL0B0cy1pZ25vcmVcblx0cmV0dXJuIChcblx0XHQ8ZGl2PlxuXHRcdFx0PHA+QmFsYW5jZTo8L3A+XG5cdFx0XHQ8cD4ke3BhcnNlRmxvYXQoZGF0YS5iYWxhbmNlLmxvdyl9bjwvcD5cblx0XHRcdDxociAvPlxuXHRcdDwvZGl2PlxuXHQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBCYWxhbmNlIl0sIm5hbWVzIjpbInVzZUFjY291bnQiLCJ1c2VDb250cmFjdFJlYWQiLCJhYmkiLCJ0ZXN0QWRkcmVzcyIsIkJhbGFuY2UiLCJhZGRyZXNzIiwiZGF0YSIsImlzTG9hZGluZyIsImlzRXJyb3IiLCJmdW5jdGlvbk5hbWUiLCJhcmdzIiwid2F0Y2giLCJkaXYiLCJwIiwicGFyc2VGbG9hdCIsImJhbGFuY2UiLCJsb3ciLCJociJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Balance.tsx\n"));

/***/ })

});