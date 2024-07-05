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

/***/ "(app-pages-browser)/./app/components/Transactions.tsx":
/*!*****************************************!*\
  !*** ./app/components/Transactions.tsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_TransactionContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/TransactionContext */ \"(app-pages-browser)/./app/context/TransactionContext.jsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst Transactions = ()=>{\n    _s();\n    const { currentAccount, transactions } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_TransactionContext__WEBPACK_IMPORTED_MODULE_2__.TransactionContext);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col w-full justify-center items-center 2xl:px-20\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col md:p-12 py-12 px-4\",\n                children: currentAccount ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                    className: \"text-white text-3xl text-center my-2\",\n                    children: \"Latest Transactions\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\leapOfFaith\\\\newage\\\\client\\\\app\\\\components\\\\Transactions.tsx\",\n                    lineNumber: 14,\n                    columnNumber: 21\n                }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                    className: \"text-white text-3xl text-center my-2\",\n                    children: \"Connect your account to see the latest transactions\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\leapOfFaith\\\\newage\\\\client\\\\app\\\\components\\\\Transactions.tsx\",\n                    lineNumber: 18,\n                    columnNumber: 21\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\leapOfFaith\\\\newage\\\\client\\\\app\\\\components\\\\Transactions.tsx\",\n                lineNumber: 12,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-wrap gap-2 p-4 w-full justify-center items-center\",\n                children: transactions && transactions.map((transaction)=>{\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"#\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    className: \"rounded-t-lg\",\n                                    src: \"/docs/images/blog/image-1.jpg\",\n                                    alt: \"\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\leapOfFaith\\\\newage\\\\client\\\\app\\\\components\\\\Transactions.tsx\",\n                                    lineNumber: 28,\n                                    columnNumber: 33\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\leapOfFaith\\\\newage\\\\client\\\\app\\\\components\\\\Transactions.tsx\",\n                                lineNumber: 27,\n                                columnNumber: 29\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"p-5\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                        className: \"mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white\",\n                                        children: [\n                                            \"From: \",\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                className: \"font-light text-[#DBDBE3]\",\n                                                children: [\n                                                    transaction.sender.substr(0, 5),\n                                                    \"...\",\n                                                    transaction.sender.substr(transaction.sender.length - 5, transaction.sender.length - 1)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"D:\\\\leapOfFaith\\\\newage\\\\client\\\\app\\\\components\\\\Transactions.tsx\",\n                                                lineNumber: 32,\n                                                columnNumber: 43\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"D:\\\\leapOfFaith\\\\newage\\\\client\\\\app\\\\components\\\\Transactions.tsx\",\n                                        lineNumber: 31,\n                                        columnNumber: 33\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                        className: \"mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white\",\n                                        children: [\n                                            \"To: \",\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                className: \"font-light text-[#DBDBE3]\",\n                                                children: transaction.receiver\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\leapOfFaith\\\\newage\\\\client\\\\app\\\\components\\\\Transactions.tsx\",\n                                                lineNumber: 35,\n                                                columnNumber: 41\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"D:\\\\leapOfFaith\\\\newage\\\\client\\\\app\\\\components\\\\Transactions.tsx\",\n                                        lineNumber: 34,\n                                        columnNumber: 33\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                        className: \"mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white\",\n                                        children: [\n                                            \"Amount: \",\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                className: \"font-light text-[#DBDBE3]\",\n                                                children: [\n                                                    transaction.amount,\n                                                    \" ETH\"\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"D:\\\\leapOfFaith\\\\newage\\\\client\\\\app\\\\components\\\\Transactions.tsx\",\n                                                lineNumber: 38,\n                                                columnNumber: 45\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"D:\\\\leapOfFaith\\\\newage\\\\client\\\\app\\\\components\\\\Transactions.tsx\",\n                                        lineNumber: 37,\n                                        columnNumber: 33\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                        className: \"mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white\",\n                                        children: [\n                                            \"Message: \",\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                className: \"font-light text-[#DBDBE3]\",\n                                                children: transaction.message\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\leapOfFaith\\\\newage\\\\client\\\\app\\\\components\\\\Transactions.tsx\",\n                                                lineNumber: 41,\n                                                columnNumber: 46\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"D:\\\\leapOfFaith\\\\newage\\\\client\\\\app\\\\components\\\\Transactions.tsx\",\n                                        lineNumber: 40,\n                                        columnNumber: 33\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                        className: \"mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white\",\n                                        children: [\n                                            \"Keyword: \",\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                className: \"font-light text-[#DBDBE3]\",\n                                                children: transaction.keyword\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\leapOfFaith\\\\newage\\\\client\\\\app\\\\components\\\\Transactions.tsx\",\n                                                lineNumber: 44,\n                                                columnNumber: 46\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"D:\\\\leapOfFaith\\\\newage\\\\client\\\\app\\\\components\\\\Transactions.tsx\",\n                                        lineNumber: 43,\n                                        columnNumber: 33\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\leapOfFaith\\\\newage\\\\client\\\\app\\\\components\\\\Transactions.tsx\",\n                                lineNumber: 30,\n                                columnNumber: 29\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\leapOfFaith\\\\newage\\\\client\\\\app\\\\components\\\\Transactions.tsx\",\n                        lineNumber: 26,\n                        columnNumber: 25\n                    }, undefined);\n                })\n            }, void 0, false, {\n                fileName: \"D:\\\\leapOfFaith\\\\newage\\\\client\\\\app\\\\components\\\\Transactions.tsx\",\n                lineNumber: 23,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\leapOfFaith\\\\newage\\\\client\\\\app\\\\components\\\\Transactions.tsx\",\n        lineNumber: 11,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Transactions, \"MhdKNeTNlgfo0C7LhlnQOZjqwIM=\");\n_c = Transactions;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Transactions);\nvar _c;\n$RefreshReg$(_c, \"Transactions\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL1RyYW5zYWN0aW9ucy50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUUwQztBQUN5QjtBQUduRSxNQUFNRyxlQUFlOztJQUVqQixNQUFNLEVBQUVDLGNBQWMsRUFBRUMsWUFBWSxFQUFFLEdBQUdKLGlEQUFVQSxDQUFDQywyRUFBa0JBO0lBQ3RFLHFCQUNJLDhEQUFDSTtRQUFJQyxXQUFVOzswQkFDWCw4REFBQ0Q7Z0JBQUlDLFdBQVU7MEJBQ1ZILCtCQUNHLDhEQUFDSTtvQkFBR0QsV0FBVTs4QkFBdUM7Ozs7OzhDQUlyRCw4REFBQ0M7b0JBQUdELFdBQVU7OEJBQXVDOzs7Ozs7Ozs7OzswQkFLN0QsOERBQUNEO2dCQUFJQyxXQUFVOzBCQUNWRixnQkFBZ0JBLGFBQWFJLEdBQUcsQ0FBQyxDQUFDQztvQkFDL0IscUJBQ0ksOERBQUNKO3dCQUFJQyxXQUFVOzswQ0FDWCw4REFBQ0k7Z0NBQUVDLE1BQUs7MENBQ0osNEVBQUNDO29DQUFJTixXQUFVO29DQUFlTyxLQUFJO29DQUFnQ0MsS0FBSTs7Ozs7Ozs7Ozs7MENBRTFFLDhEQUFDVDtnQ0FBSUMsV0FBVTs7a0RBQ1gsOERBQUNTO3dDQUFHVCxXQUFVOzs0Q0FBdUU7MERBQzNFLDhEQUFDVTtnREFBS1YsV0FBVTs7b0RBQTZCRyxZQUFZUSxNQUFNLENBQUNDLE1BQU0sQ0FBQyxHQUFHO29EQUFHO29EQUFJVCxZQUFZUSxNQUFNLENBQUNDLE1BQU0sQ0FBQ1QsWUFBWVEsTUFBTSxDQUFDRSxNQUFNLEdBQUcsR0FBR1YsWUFBWVEsTUFBTSxDQUFDRSxNQUFNLEdBQUc7Ozs7Ozs7Ozs7Ozs7a0RBRWhMLDhEQUFDSjt3Q0FBR1QsV0FBVTs7NENBQXVFOzBEQUM3RSw4REFBQ1U7Z0RBQUtWLFdBQVU7MERBQTZCRyxZQUFZVyxRQUFROzs7Ozs7Ozs7Ozs7a0RBRXpFLDhEQUFDTDt3Q0FBR1QsV0FBVTs7NENBQXVFOzBEQUN6RSw4REFBQ1U7Z0RBQUtWLFdBQVU7O29EQUE2QkcsWUFBWVksTUFBTTtvREFBQzs7Ozs7Ozs7Ozs7OztrREFFNUUsOERBQUNOO3dDQUFHVCxXQUFVOzs0Q0FBdUU7MERBQ3hFLDhEQUFDVTtnREFBS1YsV0FBVTswREFBNkJHLFlBQVlhLE9BQU87Ozs7Ozs7Ozs7OztrREFFN0UsOERBQUNQO3dDQUFHVCxXQUFVOzs0Q0FBdUU7MERBQ3hFLDhEQUFDVTtnREFBS1YsV0FBVTswREFDcEJHLFlBQVljLE9BQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztnQkFRNUM7Ozs7Ozs7Ozs7OztBQUtoQjtHQW5ETXJCO0tBQUFBO0FBc0ROLCtEQUFlQSxZQUFZQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9jb21wb25lbnRzL1RyYW5zYWN0aW9ucy50c3g/ZjIxZSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IFRyYW5zYWN0aW9uQ29udGV4dCB9IGZyb20gXCIuLi9jb250ZXh0L1RyYW5zYWN0aW9uQ29udGV4dFwiO1xyXG5cclxuXHJcbmNvbnN0IFRyYW5zYWN0aW9ucyA9ICgpID0+IHtcclxuXHJcbiAgICBjb25zdCB7IGN1cnJlbnRBY2NvdW50LCB0cmFuc2FjdGlvbnMgfSA9IHVzZUNvbnRleHQoVHJhbnNhY3Rpb25Db250ZXh0KTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHctZnVsbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgMnhsOnB4LTIwXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBtZDpwLTEyIHB5LTEyIHB4LTRcIj5cclxuICAgICAgICAgICAgICAgIHtjdXJyZW50QWNjb3VudCA/IChcclxuICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSB0ZXh0LTN4bCB0ZXh0LWNlbnRlciBteS0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIExhdGVzdCBUcmFuc2FjdGlvbnNcclxuICAgICAgICAgICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSB0ZXh0LTN4bCB0ZXh0LWNlbnRlciBteS0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENvbm5lY3QgeW91ciBhY2NvdW50IHRvIHNlZSB0aGUgbGF0ZXN0IHRyYW5zYWN0aW9uc1xyXG4gICAgICAgICAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCBnYXAtMiBwLTQgdy1mdWxsIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAge3RyYW5zYWN0aW9ucyAmJiB0cmFuc2FjdGlvbnMubWFwKCh0cmFuc2FjdGlvbjogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy1zbSBiZy13aGl0ZSBib3JkZXIgYm9yZGVyLWdyYXktMjAwIHJvdW5kZWQtbGcgc2hhZG93IGRhcms6YmctZ3JheS04MDAgZGFyazpib3JkZXItZ3JheS03MDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJyb3VuZGVkLXQtbGdcIiBzcmM9XCIvZG9jcy9pbWFnZXMvYmxvZy9pbWFnZS0xLmpwZ1wiIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJtYi0yIHRleHQtMnhsIGZvbnQtYm9sZCB0cmFja2luZy10aWdodCB0ZXh0LWdyYXktOTAwIGRhcms6dGV4dC13aGl0ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGcm9tOiA8c3BhbiBjbGFzc05hbWU9XCJmb250LWxpZ2h0IHRleHQtWyNEQkRCRTNdXCI+e3RyYW5zYWN0aW9uLnNlbmRlci5zdWJzdHIoMCwgNSl9Li4ue3RyYW5zYWN0aW9uLnNlbmRlci5zdWJzdHIodHJhbnNhY3Rpb24uc2VuZGVyLmxlbmd0aCAtIDUsIHRyYW5zYWN0aW9uLnNlbmRlci5sZW5ndGggLSAxKX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwibWItMiB0ZXh0LTJ4bCBmb250LWJvbGQgdHJhY2tpbmctdGlnaHQgdGV4dC1ncmF5LTkwMCBkYXJrOnRleHQtd2hpdGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVG86IDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtbGlnaHQgdGV4dC1bI0RCREJFM11cIj57dHJhbnNhY3Rpb24ucmVjZWl2ZXJ9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cIm1iLTIgdGV4dC0yeGwgZm9udC1ib2xkIHRyYWNraW5nLXRpZ2h0IHRleHQtZ3JheS05MDAgZGFyazp0ZXh0LXdoaXRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFtb3VudDogPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1saWdodCB0ZXh0LVsjREJEQkUzXVwiPnt0cmFuc2FjdGlvbi5hbW91bnR9IEVUSDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJtYi0yIHRleHQtMnhsIGZvbnQtYm9sZCB0cmFja2luZy10aWdodCB0ZXh0LWdyYXktOTAwIGRhcms6dGV4dC13aGl0ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNZXNzYWdlOiA8c3BhbiBjbGFzc05hbWU9XCJmb250LWxpZ2h0IHRleHQtWyNEQkRCRTNdXCI+e3RyYW5zYWN0aW9uLm1lc3NhZ2V9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cIm1iLTIgdGV4dC0yeGwgZm9udC1ib2xkIHRyYWNraW5nLXRpZ2h0IHRleHQtZ3JheS05MDAgZGFyazp0ZXh0LXdoaXRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEtleXdvcmQ6IDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtbGlnaHQgdGV4dC1bI0RCREJFM11cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0cmFuc2FjdGlvbi5rZXl3b3JkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oNT5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxuXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBUcmFuc2FjdGlvbnM7ICJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUNvbnRleHQiLCJUcmFuc2FjdGlvbkNvbnRleHQiLCJUcmFuc2FjdGlvbnMiLCJjdXJyZW50QWNjb3VudCIsInRyYW5zYWN0aW9ucyIsImRpdiIsImNsYXNzTmFtZSIsImgzIiwibWFwIiwidHJhbnNhY3Rpb24iLCJhIiwiaHJlZiIsImltZyIsInNyYyIsImFsdCIsImg1Iiwic3BhbiIsInNlbmRlciIsInN1YnN0ciIsImxlbmd0aCIsInJlY2VpdmVyIiwiYW1vdW50IiwibWVzc2FnZSIsImtleXdvcmQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/Transactions.tsx\n"));

/***/ })

});