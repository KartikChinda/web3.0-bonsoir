"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./app/globals.css":
/*!*************************!*\
  !*** ./app/globals.css ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"752b67fee782\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9nbG9iYWxzLmNzcyIsIm1hcHBpbmdzIjoiO0FBQUEsK0RBQWUsY0FBYztBQUM3QixJQUFJLElBQVUsSUFBSSxpQkFBaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2dsb2JhbHMuY3NzP2Y1MGYiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgXCI3NTJiNjdmZWU3ODJcIlxuaWYgKG1vZHVsZS5ob3QpIHsgbW9kdWxlLmhvdC5hY2NlcHQoKSB9XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./app/context/TransactionContext.jsx":
/*!********************************************!*\
  !*** ./app/context/TransactionContext.jsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   TransactionContext: function() { return /* binding */ TransactionContext; },\n/* harmony export */   TransactionProvider: function() { return /* binding */ TransactionProvider; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ethers */ \"(app-pages-browser)/./node_modules/ethers/lib.esm/providers/provider-browser.js\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ethers */ \"(app-pages-browser)/./node_modules/ethers/lib.esm/contract/contract.js\");\n/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/constants */ \"(app-pages-browser)/./utils/constants.js\");\n/* __next_internal_client_entry_do_not_use__ TransactionContext,TransactionProvider auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst TransactionContext = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createContext();\nif (true) {\n    const { ethereum: ethereum1 } = window;\n}\n// fecthing the contract\nconst getEthereumContract = ()=>{\n    const provider = new ethers__WEBPACK_IMPORTED_MODULE_3__.BrowserProvider(ethereum);\n    const signer = provider.getSigner();\n    const transactionContract = new ethers__WEBPACK_IMPORTED_MODULE_4__.Contract(_utils_constants__WEBPACK_IMPORTED_MODULE_2__.contractAddress, _utils_constants__WEBPACK_IMPORTED_MODULE_2__.contractABI, signer);\n    // console.log({\n    //     provider,\n    //     signer,\n    //     transactionContract\n    // })\n    return transactionContract;\n};\n// now, we need to call this function somewhere. So here we are essentially creating a wrapper for this transaction contract. \nconst TransactionProvider = (param)=>{\n    let { children } = param;\n    _s();\n    const [currentAccount, setcurrentAccount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [formData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        addressTo: \"\",\n        amount: \"\",\n        keyword: \"\",\n        message: \"\"\n    });\n    const handleChange = (e, name)=>{\n        // console.log(\"Inside handle change, changing value of name to \", name, e.target.value);\n        setFormData((prev)=>({\n                ...prev,\n                [name]: e.target.value\n            }));\n    };\n    // checking if metamask is connected. \n    const checkWalletConnected = async ()=>{\n        if (!ethereum) return alert(\"Please install Metamask.\");\n        const accounts = await ethereum.request({\n            method: \"eth_accounts\"\n        });\n        // checking that if we already have an account connected at the start of the render, we can already set the value of the account. \n        if (accounts.length > 0) {\n            setcurrentAccount(accounts[0]);\n        } else {\n            console.log(\"No accounts found\");\n        }\n        console.log(accounts);\n    };\n    // retreiving the first waller. \n    const connectWallet = async ()=>{\n        try {\n            if (!ethereum) return alert(\"Please install Metamask.\");\n            const accounts = await ethereum.request({\n                method: \"eth_requestAccounts\"\n            });\n            setcurrentAccount(accounts[0]);\n        // console.log(currentAccount);\n        } catch (error) {\n            console.log(error);\n            throw new Error(\"No ethereum object has been found.\");\n        }\n    };\n    const sendTransaction = async ()=>{\n        try {\n            if (!ethereum) return alert(\"Please install Metamask.\");\n            // getting form data\n            const { addressTo, amount, keyword, message } = formData;\n            // knowing what contract to invoke \n            getEthereumContract();\n        } catch (error) {\n            console.log(error);\n            throw new Error(\"No ethereum object has been found.\");\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        checkWalletConnected();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TransactionContext.Provider, {\n        value: {\n            connectWallet,\n            currentAccount,\n            formData,\n            sendTransaction,\n            handleChange\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"D:\\\\leapOfFaith\\\\newage\\\\client\\\\app\\\\context\\\\TransactionContext.jsx\",\n        lineNumber: 92,\n        columnNumber: 9\n    }, undefined);\n};\n_s(TransactionProvider, \"vq5xGaRr9Q09xZnYDHp1/YQ/iUI=\");\n_c = TransactionProvider;\nvar _c;\n$RefreshReg$(_c, \"TransactionProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb250ZXh0L1RyYW5zYWN0aW9uQ29udGV4dC5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUVtRDtBQUNuQjtBQUNxQztBQUU5RCxNQUFNTSxtQ0FBcUJOLDBEQUFtQixHQUFHO0FBRXhELElBQUksSUFBNkIsRUFBRTtJQUMvQixNQUFNLEVBQUVRLFVBQUFBLFNBQVEsRUFBRSxHQUFHQztBQUN6QjtBQUVBLHdCQUF3QjtBQUV4QixNQUFNQyxzQkFBc0I7SUFDeEIsTUFBTUMsV0FBVyxJQUFJUixtREFBc0IsQ0FBQ0s7SUFDNUMsTUFBTUssU0FBU0YsU0FBU0csU0FBUztJQUNqQyxNQUFNQyxzQkFBc0IsSUFBSVosNENBQWUsQ0FBQ0UsNkRBQWVBLEVBQUVELHlEQUFXQSxFQUFFUztJQUU5RSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCwwQkFBMEI7SUFDMUIsS0FBSztJQUNMLE9BQU9FO0FBQ1g7QUFFQSw4SEFBOEg7QUFFdkgsTUFBTUUsc0JBQXNCO1FBQUMsRUFBRUMsUUFBUSxFQUFFOztJQUU1QyxNQUFNLENBQUNDLGdCQUFnQkMsa0JBQWtCLEdBQUduQiwrQ0FBUUEsQ0FBQztJQUVyRCxNQUFNLENBQUNvQixVQUFVQyxZQUFZLEdBQUdyQiwrQ0FBUUEsQ0FBQztRQUNyQ3NCLFdBQVc7UUFBSUMsUUFBUTtRQUFJQyxTQUFTO1FBQUlDLFNBQVM7SUFDckQ7SUFFQSxNQUFNQyxlQUFlLENBQUNDLEdBQUdDO1FBQ3JCLHlGQUF5RjtRQUN6RlAsWUFBWSxDQUFDUSxPQUFVO2dCQUFFLEdBQUdBLElBQUk7Z0JBQUUsQ0FBQ0QsS0FBSyxFQUFFRCxFQUFFRyxNQUFNLENBQUNDLEtBQUs7WUFBQztJQUM3RDtJQUVBLHNDQUFzQztJQUN0QyxNQUFNQyx1QkFBdUI7UUFDekIsSUFBSSxDQUFDekIsVUFBVSxPQUFPMEIsTUFBTTtRQUM1QixNQUFNQyxXQUFXLE1BQU0zQixTQUFTNEIsT0FBTyxDQUFDO1lBQUVDLFFBQVE7UUFBZTtRQUNqRSxrSUFBa0k7UUFDbEksSUFBSUYsU0FBU0csTUFBTSxHQUFHLEdBQUc7WUFDckJsQixrQkFBa0JlLFFBQVEsQ0FBQyxFQUFFO1FBQ2pDLE9BQU87WUFDSEksUUFBUUMsR0FBRyxDQUFDO1FBQ2hCO1FBQ0FELFFBQVFDLEdBQUcsQ0FBQ0w7SUFDaEI7SUFFQSxnQ0FBZ0M7SUFDaEMsTUFBTU0sZ0JBQWdCO1FBQ2xCLElBQUk7WUFDQSxJQUFJLENBQUNqQyxVQUFVLE9BQU8wQixNQUFNO1lBQzVCLE1BQU1DLFdBQVcsTUFBTTNCLFNBQVM0QixPQUFPLENBQUM7Z0JBQUVDLFFBQVE7WUFBc0I7WUFDeEVqQixrQkFBa0JlLFFBQVEsQ0FBQyxFQUFFO1FBQzdCLCtCQUErQjtRQUNuQyxFQUFFLE9BQU9PLE9BQU87WUFDWkgsUUFBUUMsR0FBRyxDQUFDRTtZQUNaLE1BQU0sSUFBSUMsTUFBTTtRQUNwQjtJQUNKO0lBRUEsTUFBTUMsa0JBQWtCO1FBQ3BCLElBQUk7WUFDQSxJQUFJLENBQUNwQyxVQUFVLE9BQU8wQixNQUFNO1lBRTVCLG9CQUFvQjtZQUNwQixNQUFNLEVBQUVYLFNBQVMsRUFBRUMsTUFBTSxFQUFFQyxPQUFPLEVBQUVDLE9BQU8sRUFBRSxHQUFHTDtZQUVoRCxtQ0FBbUM7WUFDbkNYO1FBRUosRUFBRSxPQUFPZ0MsT0FBTztZQUNaSCxRQUFRQyxHQUFHLENBQUNFO1lBQ1osTUFBTSxJQUFJQyxNQUFNO1FBQ3BCO0lBQ0o7SUFFQXpDLGdEQUFTQSxDQUFDO1FBQ04rQjtJQUNKLEdBQUcsRUFBRTtJQUlMLHFCQUNJLDhEQUFDM0IsbUJBQW1CdUMsUUFBUTtRQUFDYixPQUFPO1lBQUVTO1lBQWV0QjtZQUFnQkU7WUFBVXVCO1lBQWlCakI7UUFBYTtrQkFDeEdUOzs7Ozs7QUFHYixFQUFDO0dBbEVZRDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvY29udGV4dC9UcmFuc2FjdGlvbkNvbnRleHQuanN4PzE2OTMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcblxyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBldGhlcnMgfSBmcm9tICdldGhlcnMnO1xyXG5pbXBvcnQgeyBjb250cmFjdEFCSSwgY29udHJhY3RBZGRyZXNzIH0gZnJvbSBcIi4uLy4uL3V0aWxzL2NvbnN0YW50c1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFRyYW5zYWN0aW9uQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoKTtcclxuXHJcbmlmICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICBjb25zdCB7IGV0aGVyZXVtIH0gPSB3aW5kb3c7XHJcbn1cclxuXHJcbi8vIGZlY3RoaW5nIHRoZSBjb250cmFjdFxyXG5cclxuY29uc3QgZ2V0RXRoZXJldW1Db250cmFjdCA9ICgpID0+IHtcclxuICAgIGNvbnN0IHByb3ZpZGVyID0gbmV3IGV0aGVycy5Ccm93c2VyUHJvdmlkZXIoZXRoZXJldW0pXHJcbiAgICBjb25zdCBzaWduZXIgPSBwcm92aWRlci5nZXRTaWduZXIoKTtcclxuICAgIGNvbnN0IHRyYW5zYWN0aW9uQ29udHJhY3QgPSBuZXcgZXRoZXJzLkNvbnRyYWN0KGNvbnRyYWN0QWRkcmVzcywgY29udHJhY3RBQkksIHNpZ25lcik7XHJcblxyXG4gICAgLy8gY29uc29sZS5sb2coe1xyXG4gICAgLy8gICAgIHByb3ZpZGVyLFxyXG4gICAgLy8gICAgIHNpZ25lcixcclxuICAgIC8vICAgICB0cmFuc2FjdGlvbkNvbnRyYWN0XHJcbiAgICAvLyB9KVxyXG4gICAgcmV0dXJuIHRyYW5zYWN0aW9uQ29udHJhY3Q7XHJcbn1cclxuXHJcbi8vIG5vdywgd2UgbmVlZCB0byBjYWxsIHRoaXMgZnVuY3Rpb24gc29tZXdoZXJlLiBTbyBoZXJlIHdlIGFyZSBlc3NlbnRpYWxseSBjcmVhdGluZyBhIHdyYXBwZXIgZm9yIHRoaXMgdHJhbnNhY3Rpb24gY29udHJhY3QuIFxyXG5cclxuZXhwb3J0IGNvbnN0IFRyYW5zYWN0aW9uUHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcblxyXG4gICAgY29uc3QgW2N1cnJlbnRBY2NvdW50LCBzZXRjdXJyZW50QWNjb3VudF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgICBjb25zdCBbZm9ybURhdGEsIHNldEZvcm1EYXRhXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICBhZGRyZXNzVG86IFwiXCIsIGFtb3VudDogXCJcIiwga2V5d29yZDogXCJcIiwgbWVzc2FnZTogXCJcIlxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGUsIG5hbWUpID0+IHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIkluc2lkZSBoYW5kbGUgY2hhbmdlLCBjaGFuZ2luZyB2YWx1ZSBvZiBuYW1lIHRvIFwiLCBuYW1lLCBlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgc2V0Rm9ybURhdGEoKHByZXYpID0+ICh7IC4uLnByZXYsIFtuYW1lXTogZS50YXJnZXQudmFsdWUgfSkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGNoZWNraW5nIGlmIG1ldGFtYXNrIGlzIGNvbm5lY3RlZC4gXHJcbiAgICBjb25zdCBjaGVja1dhbGxldENvbm5lY3RlZCA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICBpZiAoIWV0aGVyZXVtKSByZXR1cm4gYWxlcnQoXCJQbGVhc2UgaW5zdGFsbCBNZXRhbWFzay5cIik7XHJcbiAgICAgICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCBldGhlcmV1bS5yZXF1ZXN0KHsgbWV0aG9kOiAnZXRoX2FjY291bnRzJyB9KTtcclxuICAgICAgICAvLyBjaGVja2luZyB0aGF0IGlmIHdlIGFscmVhZHkgaGF2ZSBhbiBhY2NvdW50IGNvbm5lY3RlZCBhdCB0aGUgc3RhcnQgb2YgdGhlIHJlbmRlciwgd2UgY2FuIGFscmVhZHkgc2V0IHRoZSB2YWx1ZSBvZiB0aGUgYWNjb3VudC4gXHJcbiAgICAgICAgaWYgKGFjY291bnRzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgc2V0Y3VycmVudEFjY291bnQoYWNjb3VudHNbMF0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTm8gYWNjb3VudHMgZm91bmRcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGFjY291bnRzKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyByZXRyZWl2aW5nIHRoZSBmaXJzdCB3YWxsZXIuIFxyXG4gICAgY29uc3QgY29ubmVjdFdhbGxldCA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAoIWV0aGVyZXVtKSByZXR1cm4gYWxlcnQoXCJQbGVhc2UgaW5zdGFsbCBNZXRhbWFzay5cIik7XHJcbiAgICAgICAgICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgZXRoZXJldW0ucmVxdWVzdCh7IG1ldGhvZDogJ2V0aF9yZXF1ZXN0QWNjb3VudHMnIH0pO1xyXG4gICAgICAgICAgICBzZXRjdXJyZW50QWNjb3VudChhY2NvdW50c1swXSk7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGN1cnJlbnRBY2NvdW50KTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk5vIGV0aGVyZXVtIG9iamVjdCBoYXMgYmVlbiBmb3VuZC5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHNlbmRUcmFuc2FjdGlvbiA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAoIWV0aGVyZXVtKSByZXR1cm4gYWxlcnQoXCJQbGVhc2UgaW5zdGFsbCBNZXRhbWFzay5cIik7XHJcblxyXG4gICAgICAgICAgICAvLyBnZXR0aW5nIGZvcm0gZGF0YVxyXG4gICAgICAgICAgICBjb25zdCB7IGFkZHJlc3NUbywgYW1vdW50LCBrZXl3b3JkLCBtZXNzYWdlIH0gPSBmb3JtRGF0YTtcclxuXHJcbiAgICAgICAgICAgIC8vIGtub3dpbmcgd2hhdCBjb250cmFjdCB0byBpbnZva2UgXHJcbiAgICAgICAgICAgIGdldEV0aGVyZXVtQ29udHJhY3QoKTtcclxuXHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJObyBldGhlcmV1bSBvYmplY3QgaGFzIGJlZW4gZm91bmQuXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNoZWNrV2FsbGV0Q29ubmVjdGVkKCk7XHJcbiAgICB9LCBbXSlcclxuXHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFRyYW5zYWN0aW9uQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyBjb25uZWN0V2FsbGV0LCBjdXJyZW50QWNjb3VudCwgZm9ybURhdGEsIHNlbmRUcmFuc2FjdGlvbiwgaGFuZGxlQ2hhbmdlIH19PlxyXG4gICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgPC9UcmFuc2FjdGlvbkNvbnRleHQuUHJvdmlkZXI+XHJcbiAgICApXHJcbn0iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImV0aGVycyIsImNvbnRyYWN0QUJJIiwiY29udHJhY3RBZGRyZXNzIiwiVHJhbnNhY3Rpb25Db250ZXh0IiwiY3JlYXRlQ29udGV4dCIsImV0aGVyZXVtIiwid2luZG93IiwiZ2V0RXRoZXJldW1Db250cmFjdCIsInByb3ZpZGVyIiwiQnJvd3NlclByb3ZpZGVyIiwic2lnbmVyIiwiZ2V0U2lnbmVyIiwidHJhbnNhY3Rpb25Db250cmFjdCIsIkNvbnRyYWN0IiwiVHJhbnNhY3Rpb25Qcm92aWRlciIsImNoaWxkcmVuIiwiY3VycmVudEFjY291bnQiLCJzZXRjdXJyZW50QWNjb3VudCIsImZvcm1EYXRhIiwic2V0Rm9ybURhdGEiLCJhZGRyZXNzVG8iLCJhbW91bnQiLCJrZXl3b3JkIiwibWVzc2FnZSIsImhhbmRsZUNoYW5nZSIsImUiLCJuYW1lIiwicHJldiIsInRhcmdldCIsInZhbHVlIiwiY2hlY2tXYWxsZXRDb25uZWN0ZWQiLCJhbGVydCIsImFjY291bnRzIiwicmVxdWVzdCIsIm1ldGhvZCIsImxlbmd0aCIsImNvbnNvbGUiLCJsb2ciLCJjb25uZWN0V2FsbGV0IiwiZXJyb3IiLCJFcnJvciIsInNlbmRUcmFuc2FjdGlvbiIsIlByb3ZpZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/context/TransactionContext.jsx\n"));

/***/ })

});