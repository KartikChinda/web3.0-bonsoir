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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_TransactionContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/TransactionContext */ \"(app-pages-browser)/./app/context/TransactionContext.jsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst Transactions = ()=>{\n    _s();\n    const { currentAccount, transactions } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_TransactionContext__WEBPACK_IMPORTED_MODULE_2__.TransactionContext);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col w-full justify-center items-center 2xl:px-20\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col md:p-12 py-12 px-4\",\n                children: currentAccount ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                    className: \"text-white text-3xl text-center my-2\",\n                    children: \"Latest Transactions\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\leapOfFaith\\\\newage\\\\client\\\\app\\\\components\\\\Transactions.tsx\",\n                    lineNumber: 14,\n                    columnNumber: 21\n                }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                    className: \"text-white text-3xl text-center my-2\",\n                    children: \"Connect your account to see the latest transactions\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\leapOfFaith\\\\newage\\\\client\\\\app\\\\components\\\\Transactions.tsx\",\n                    lineNumber: 18,\n                    columnNumber: 21\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\leapOfFaith\\\\newage\\\\client\\\\app\\\\components\\\\Transactions.tsx\",\n                lineNumber: 12,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-wrap gap-2 p-4 w-full justify-center items-center\",\n                children: transactions && transactions.map((transaction)=>{\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                className: \"rounded-t-lg \",\n                                src: \"https://picsum.photos/200?random=2\",\n                                alt: \"\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\leapOfFaith\\\\newage\\\\client\\\\app\\\\components\\\\Transactions.tsx\",\n                                lineNumber: 28,\n                                columnNumber: 29\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"p-5\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                        className: \"mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white\",\n                                        children: [\n                                            \"From: \",\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                className: \"font-light text-[#DBDBE3]\",\n                                                children: [\n                                                    transaction.sender.substr(0, 5),\n                                                    \"......\",\n                                                    transaction.sender.substr(transaction.sender.length - 5, transaction.sender.length - 1)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"D:\\\\leapOfFaith\\\\newage\\\\client\\\\app\\\\components\\\\Transactions.tsx\",\n                                                lineNumber: 32,\n                                                columnNumber: 43\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"D:\\\\leapOfFaith\\\\newage\\\\client\\\\app\\\\components\\\\Transactions.tsx\",\n                                        lineNumber: 31,\n                                        columnNumber: 33\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                        className: \"mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white\",\n                                        children: [\n                                            \"To: \",\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                className: \"font-light text-[#DBDBE3]\",\n                                                children: [\n                                                    transaction.receiver.substr(0, 5),\n                                                    \"......\",\n                                                    transaction.receiver.substr(transaction.receiver.length - 5, transaction.receiver.length - 1)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"D:\\\\leapOfFaith\\\\newage\\\\client\\\\app\\\\components\\\\Transactions.tsx\",\n                                                lineNumber: 35,\n                                                columnNumber: 41\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"D:\\\\leapOfFaith\\\\newage\\\\client\\\\app\\\\components\\\\Transactions.tsx\",\n                                        lineNumber: 34,\n                                        columnNumber: 33\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                        className: \"mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white\",\n                                        children: [\n                                            \"Amount: \",\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                className: \"font-light text-[#DBDBE3]\",\n                                                children: [\n                                                    transaction.amount,\n                                                    \" ETH\"\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"D:\\\\leapOfFaith\\\\newage\\\\client\\\\app\\\\components\\\\Transactions.tsx\",\n                                                lineNumber: 38,\n                                                columnNumber: 45\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"D:\\\\leapOfFaith\\\\newage\\\\client\\\\app\\\\components\\\\Transactions.tsx\",\n                                        lineNumber: 37,\n                                        columnNumber: 33\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                        className: \"mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white\",\n                                        children: [\n                                            \"Message: \",\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                className: \"font-light text-[#DBDBE3]\",\n                                                children: transaction.message\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\leapOfFaith\\\\newage\\\\client\\\\app\\\\components\\\\Transactions.tsx\",\n                                                lineNumber: 41,\n                                                columnNumber: 46\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"D:\\\\leapOfFaith\\\\newage\\\\client\\\\app\\\\components\\\\Transactions.tsx\",\n                                        lineNumber: 40,\n                                        columnNumber: 33\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                        className: \"mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white\",\n                                        children: [\n                                            \"Keyword: \",\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                className: \"font-light text-[#DBDBE3]\",\n                                                children: transaction.keyword\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\leapOfFaith\\\\newage\\\\client\\\\app\\\\components\\\\Transactions.tsx\",\n                                                lineNumber: 44,\n                                                columnNumber: 46\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"D:\\\\leapOfFaith\\\\newage\\\\client\\\\app\\\\components\\\\Transactions.tsx\",\n                                        lineNumber: 43,\n                                        columnNumber: 33\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\leapOfFaith\\\\newage\\\\client\\\\app\\\\components\\\\Transactions.tsx\",\n                                lineNumber: 30,\n                                columnNumber: 29\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\leapOfFaith\\\\newage\\\\client\\\\app\\\\components\\\\Transactions.tsx\",\n                        lineNumber: 26,\n                        columnNumber: 25\n                    }, undefined);\n                })\n            }, void 0, false, {\n                fileName: \"D:\\\\leapOfFaith\\\\newage\\\\client\\\\app\\\\components\\\\Transactions.tsx\",\n                lineNumber: 23,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\leapOfFaith\\\\newage\\\\client\\\\app\\\\components\\\\Transactions.tsx\",\n        lineNumber: 11,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Transactions, \"MhdKNeTNlgfo0C7LhlnQOZjqwIM=\");\n_c = Transactions;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Transactions);\nvar _c;\n$RefreshReg$(_c, \"Transactions\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL1RyYW5zYWN0aW9ucy50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUUwQztBQUN5QjtBQUduRSxNQUFNRyxlQUFlOztJQUVqQixNQUFNLEVBQUVDLGNBQWMsRUFBRUMsWUFBWSxFQUFFLEdBQUdKLGlEQUFVQSxDQUFDQywyRUFBa0JBO0lBQ3RFLHFCQUNJLDhEQUFDSTtRQUFJQyxXQUFVOzswQkFDWCw4REFBQ0Q7Z0JBQUlDLFdBQVU7MEJBQ1ZILCtCQUNHLDhEQUFDSTtvQkFBR0QsV0FBVTs4QkFBdUM7Ozs7OzhDQUlyRCw4REFBQ0M7b0JBQUdELFdBQVU7OEJBQXVDOzs7Ozs7Ozs7OzswQkFLN0QsOERBQUNEO2dCQUFJQyxXQUFVOzBCQUNWRixnQkFBZ0JBLGFBQWFJLEdBQUcsQ0FBQyxDQUFDQztvQkFDL0IscUJBQ0ksOERBQUNKO3dCQUFJQyxXQUFVOzswQ0FFWCw4REFBQ0k7Z0NBQUlKLFdBQVU7Z0NBQWdCSyxLQUFJO2dDQUFxQ0MsS0FBSTs7Ozs7OzBDQUU1RSw4REFBQ1A7Z0NBQUlDLFdBQVU7O2tEQUNYLDhEQUFDTzt3Q0FBR1AsV0FBVTs7NENBQXVFOzBEQUMzRSw4REFBQ1E7Z0RBQUtSLFdBQVU7O29EQUE2QkcsWUFBWU0sTUFBTSxDQUFDQyxNQUFNLENBQUMsR0FBRztvREFBRztvREFBT1AsWUFBWU0sTUFBTSxDQUFDQyxNQUFNLENBQUNQLFlBQVlNLE1BQU0sQ0FBQ0UsTUFBTSxHQUFHLEdBQUdSLFlBQVlNLE1BQU0sQ0FBQ0UsTUFBTSxHQUFHOzs7Ozs7Ozs7Ozs7O2tEQUVuTCw4REFBQ0o7d0NBQUdQLFdBQVU7OzRDQUF1RTswREFDN0UsOERBQUNRO2dEQUFLUixXQUFVOztvREFBNkJHLFlBQVlTLFFBQVEsQ0FBQ0YsTUFBTSxDQUFDLEdBQUc7b0RBQUc7b0RBQU9QLFlBQVlTLFFBQVEsQ0FBQ0YsTUFBTSxDQUFDUCxZQUFZUyxRQUFRLENBQUNELE1BQU0sR0FBRyxHQUFHUixZQUFZUyxRQUFRLENBQUNELE1BQU0sR0FBRzs7Ozs7Ozs7Ozs7OztrREFFekwsOERBQUNKO3dDQUFHUCxXQUFVOzs0Q0FBdUU7MERBQ3pFLDhEQUFDUTtnREFBS1IsV0FBVTs7b0RBQTZCRyxZQUFZVSxNQUFNO29EQUFDOzs7Ozs7Ozs7Ozs7O2tEQUU1RSw4REFBQ047d0NBQUdQLFdBQVU7OzRDQUF1RTswREFDeEUsOERBQUNRO2dEQUFLUixXQUFVOzBEQUE2QkcsWUFBWVcsT0FBTzs7Ozs7Ozs7Ozs7O2tEQUU3RSw4REFBQ1A7d0NBQUdQLFdBQVU7OzRDQUF1RTswREFDeEUsOERBQUNRO2dEQUFLUixXQUFVOzBEQUNwQkcsWUFBWVksT0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2dCQVE1Qzs7Ozs7Ozs7Ozs7O0FBS2hCO0dBbkRNbkI7S0FBQUE7QUFzRE4sK0RBQWVBLFlBQVlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvVHJhbnNhY3Rpb25zLnRzeD9mMjFlIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5cclxuaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgVHJhbnNhY3Rpb25Db250ZXh0IH0gZnJvbSBcIi4uL2NvbnRleHQvVHJhbnNhY3Rpb25Db250ZXh0XCI7XHJcblxyXG5cclxuY29uc3QgVHJhbnNhY3Rpb25zID0gKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IHsgY3VycmVudEFjY291bnQsIHRyYW5zYWN0aW9ucyB9ID0gdXNlQ29udGV4dChUcmFuc2FjdGlvbkNvbnRleHQpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgdy1mdWxsIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciAyeGw6cHgtMjBcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIG1kOnAtMTIgcHktMTIgcHgtNFwiPlxyXG4gICAgICAgICAgICAgICAge2N1cnJlbnRBY2NvdW50ID8gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIHRleHQtM3hsIHRleHQtY2VudGVyIG15LTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgTGF0ZXN0IFRyYW5zYWN0aW9uc1xyXG4gICAgICAgICAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIHRleHQtM3hsIHRleHQtY2VudGVyIG15LTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQ29ubmVjdCB5b3VyIGFjY291bnQgdG8gc2VlIHRoZSBsYXRlc3QgdHJhbnNhY3Rpb25zXHJcbiAgICAgICAgICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIGdhcC0yIHAtNCB3LWZ1bGwganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICB7dHJhbnNhY3Rpb25zICYmIHRyYW5zYWN0aW9ucy5tYXAoKHRyYW5zYWN0aW9uOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LXNtIGJnLXdoaXRlIGJvcmRlciBib3JkZXItZ3JheS0yMDAgcm91bmRlZC1sZyBzaGFkb3cgZGFyazpiZy1ncmF5LTgwMCBkYXJrOmJvcmRlci1ncmF5LTcwMFwiPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwicm91bmRlZC10LWxnIFwiIHNyYz1cImh0dHBzOi8vcGljc3VtLnBob3Rvcy8yMDA/cmFuZG9tPTJcIiBhbHQ9XCJcIiAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC01XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cIm1iLTIgdGV4dC0yeGwgZm9udC1ib2xkIHRyYWNraW5nLXRpZ2h0IHRleHQtZ3JheS05MDAgZGFyazp0ZXh0LXdoaXRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZyb206IDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtbGlnaHQgdGV4dC1bI0RCREJFM11cIj57dHJhbnNhY3Rpb24uc2VuZGVyLnN1YnN0cigwLCA1KX0uLi4uLi57dHJhbnNhY3Rpb24uc2VuZGVyLnN1YnN0cih0cmFuc2FjdGlvbi5zZW5kZXIubGVuZ3RoIC0gNSwgdHJhbnNhY3Rpb24uc2VuZGVyLmxlbmd0aCAtIDEpfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJtYi0yIHRleHQtMnhsIGZvbnQtYm9sZCB0cmFja2luZy10aWdodCB0ZXh0LWdyYXktOTAwIGRhcms6dGV4dC13aGl0ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUbzogPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1saWdodCB0ZXh0LVsjREJEQkUzXVwiPnt0cmFuc2FjdGlvbi5yZWNlaXZlci5zdWJzdHIoMCwgNSl9Li4uLi4ue3RyYW5zYWN0aW9uLnJlY2VpdmVyLnN1YnN0cih0cmFuc2FjdGlvbi5yZWNlaXZlci5sZW5ndGggLSA1LCB0cmFuc2FjdGlvbi5yZWNlaXZlci5sZW5ndGggLSAxKX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwibWItMiB0ZXh0LTJ4bCBmb250LWJvbGQgdHJhY2tpbmctdGlnaHQgdGV4dC1ncmF5LTkwMCBkYXJrOnRleHQtd2hpdGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQW1vdW50OiA8c3BhbiBjbGFzc05hbWU9XCJmb250LWxpZ2h0IHRleHQtWyNEQkRCRTNdXCI+e3RyYW5zYWN0aW9uLmFtb3VudH0gRVRIPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cIm1iLTIgdGV4dC0yeGwgZm9udC1ib2xkIHRyYWNraW5nLXRpZ2h0IHRleHQtZ3JheS05MDAgZGFyazp0ZXh0LXdoaXRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1lc3NhZ2U6IDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtbGlnaHQgdGV4dC1bI0RCREJFM11cIj57dHJhbnNhY3Rpb24ubWVzc2FnZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwibWItMiB0ZXh0LTJ4bCBmb250LWJvbGQgdHJhY2tpbmctdGlnaHQgdGV4dC1ncmF5LTkwMCBkYXJrOnRleHQtd2hpdGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgS2V5d29yZDogPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1saWdodCB0ZXh0LVsjREJEQkUzXVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RyYW5zYWN0aW9uLmtleXdvcmR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2g1PlxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG5cclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRyYW5zYWN0aW9uczsgIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlQ29udGV4dCIsIlRyYW5zYWN0aW9uQ29udGV4dCIsIlRyYW5zYWN0aW9ucyIsImN1cnJlbnRBY2NvdW50IiwidHJhbnNhY3Rpb25zIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDMiLCJtYXAiLCJ0cmFuc2FjdGlvbiIsImltZyIsInNyYyIsImFsdCIsImg1Iiwic3BhbiIsInNlbmRlciIsInN1YnN0ciIsImxlbmd0aCIsInJlY2VpdmVyIiwiYW1vdW50IiwibWVzc2FnZSIsImtleXdvcmQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/Transactions.tsx\n"));

/***/ })

});