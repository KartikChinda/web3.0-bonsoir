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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"2aee5b3956bf\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9nbG9iYWxzLmNzcyIsIm1hcHBpbmdzIjoiO0FBQUEsK0RBQWUsY0FBYztBQUM3QixJQUFJLElBQVUsSUFBSSxpQkFBaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2dsb2JhbHMuY3NzP2Y1MGYiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgXCIyYWVlNWIzOTU2YmZcIlxuaWYgKG1vZHVsZS5ob3QpIHsgbW9kdWxlLmhvdC5hY2NlcHQoKSB9XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./app/context/TransactionContext.jsx":
/*!********************************************!*\
  !*** ./app/context/TransactionContext.jsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   TransactionContext: function() { return /* binding */ TransactionContext; },\n/* harmony export */   TransactionProvider: function() { return /* binding */ TransactionProvider; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ethers */ \"(app-pages-browser)/./node_modules/ethers/lib.esm/providers/provider-browser.js\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ethers */ \"(app-pages-browser)/./node_modules/ethers/lib.esm/contract/contract.js\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ethers */ \"(app-pages-browser)/./node_modules/ethers/lib.esm/utils/units.js\");\n/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/constants */ \"(app-pages-browser)/./utils/constants.js\");\n/* __next_internal_client_entry_do_not_use__ TransactionContext,TransactionProvider auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst TransactionContext = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createContext();\nif (true) {\n    const { ethereum: ethereum1 } = window;\n}\n// fecthing the contract\nconst getEthereumContract = async ()=>{\n    const provider = new ethers__WEBPACK_IMPORTED_MODULE_3__.BrowserProvider(ethereum);\n    const signer = await provider.getSigner();\n    const transactionContract = new ethers__WEBPACK_IMPORTED_MODULE_4__.Contract(_utils_constants__WEBPACK_IMPORTED_MODULE_2__.contractAddress, _utils_constants__WEBPACK_IMPORTED_MODULE_2__.contractABI, signer);\n    // console.log({\n    //     provider,\n    //     signer,\n    //     transactionContract\n    // })\n    return transactionContract;\n};\n// now, we need to call this function somewhere. So here we are essentially creating a wrapper for this transaction contract. \nconst TransactionProvider = (param)=>{\n    let { children } = param;\n    _s();\n    const [currentAccount, setcurrentAccount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [formData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        addressTo: \"\",\n        amount: \"\",\n        keyword: \"\",\n        message: \"\"\n    });\n    const handleChange = (e, name)=>{\n        // console.log(\"Inside handle change, changing value of name to \", name, e.target.value);\n        setFormData((prev)=>({\n                ...prev,\n                [name]: e.target.value\n            }));\n    };\n    // fetching all transactions \n    const getTransactions = async ()=>{\n        try {\n            if (!ethereum) return alert(\"Please install Metamask\");\n            const transactionContract = await getEthereumContract();\n            const transactionsList = await transactionContract.getAllTransactions();\n            // Transform the transactions list to a more usable format, if needed\n            const formattedTransactions = transactionsList.map((transaction)=>({\n                    sender: transaction.sender,\n                    receiver: transaction.receiver,\n                    amount: transaction.amount.toString(),\n                    message: transaction.message,\n                    timestamp: new Date(transaction.timestamp * 1000),\n                    keyword: transaction.keyword\n                }));\n            console.log(formattedTransactions);\n        } catch (error) {\n            console.log(error);\n        }\n    };\n    // checking if metamask is connected. \n    const checkWalletConnected = async ()=>{\n        if (!ethereum) return alert(\"Please install Metamask.\");\n        const accounts = await ethereum.request({\n            method: \"eth_accounts\"\n        });\n        // checking that if we already have an account connected at the start of the render, we can already set the value of the account. \n        if (accounts.length > 0) {\n            setcurrentAccount(accounts[0]);\n        } else {\n            console.log(\"No accounts found\");\n        }\n        console.log(accounts);\n        getTransactions();\n    };\n    // retreiving the first waller. \n    const connectWallet = async ()=>{\n        try {\n            if (!ethereum) return alert(\"Please install Metamask.\");\n            const accounts = await ethereum.request({\n                method: \"eth_requestAccounts\"\n            });\n            setcurrentAccount(accounts[0]);\n        // console.log(currentAccount);\n        } catch (error) {\n            console.log(error);\n            throw new Error(\"No ethereum object has been found.\");\n        }\n    };\n    const sendTransaction = async ()=>{\n        try {\n            if (!ethereum) return alert(\"Please install Metamask.\");\n            // getting form data\n            const { addressTo, amount, keyword, message } = formData;\n            // knowing what contract to invoke \n            const transactionContract = await getEthereumContract();\n            // sim reason as to what is explained below, this passes your amount into GWEI hexadecimal amount. \n            console.log(\"Amount is: \", amount, \"type: \", typeof amount);\n            const parsedAmount = ethers__WEBPACK_IMPORTED_MODULE_5__.parseEther(amount);\n            console.log(\"This is the parsed amount: \", parsedAmount);\n            console.log(\"This is the parsed amount in hex: \", parsedAmount.toString(16));\n            // let's send shit mf\n            await ethereum.request({\n                method: \"eth_sendTransaction\",\n                params: [\n                    {\n                        from: currentAccount,\n                        to: addressTo,\n                        gas: \"0x5208\",\n                        value: parsedAmount.toString(16)\n                    }\n                ]\n            });\n            // adding to the blockchain \n            const transactionHash = await transactionContract.addToBlockchain(addressTo, parsedAmount, message, keyword);\n            console.log(\"This is your transaction hash: \", transactionHash.hash);\n        } catch (error) {\n            console.log(error);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        checkWalletConnected();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TransactionContext.Provider, {\n        value: {\n            connectWallet,\n            currentAccount,\n            formData,\n            sendTransaction,\n            handleChange\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"D:\\\\leapOfFaith\\\\newage\\\\client\\\\app\\\\context\\\\TransactionContext.jsx\",\n        lineNumber: 146,\n        columnNumber: 9\n    }, undefined);\n};\n_s(TransactionProvider, \"mhU3BCmS1ygvsoX+g/dxJTRBdR4=\");\n_c = TransactionProvider;\nvar _c;\n$RefreshReg$(_c, \"TransactionProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb250ZXh0L1RyYW5zYWN0aW9uQ29udGV4dC5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFFbUQ7QUFDbkI7QUFDcUM7QUFFOUQsTUFBTU0sbUNBQXFCTiwwREFBbUIsR0FBRztBQUV4RCxJQUFJLElBQTZCLEVBQUU7SUFDL0IsTUFBTSxFQUFFUSxVQUFBQSxTQUFRLEVBQUUsR0FBR0M7QUFDekI7QUFFQSx3QkFBd0I7QUFFeEIsTUFBTUMsc0JBQXNCO0lBQ3hCLE1BQU1DLFdBQVcsSUFBSVIsbURBQXNCLENBQUNLO0lBQzVDLE1BQU1LLFNBQVMsTUFBTUYsU0FBU0csU0FBUztJQUN2QyxNQUFNQyxzQkFBc0IsSUFBSVosNENBQWUsQ0FBQ0UsNkRBQWVBLEVBQUVELHlEQUFXQSxFQUFFUztJQUU5RSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCwwQkFBMEI7SUFDMUIsS0FBSztJQUNMLE9BQU9FO0FBQ1g7QUFFQSw4SEFBOEg7QUFFdkgsTUFBTUUsc0JBQXNCO1FBQUMsRUFBRUMsUUFBUSxFQUFFOztJQUU1QyxNQUFNLENBQUNDLGdCQUFnQkMsa0JBQWtCLEdBQUduQiwrQ0FBUUEsQ0FBQztJQUVyRCxNQUFNLENBQUNvQixXQUFXQyxhQUFhLEdBQUdyQiwrQ0FBUUEsQ0FBQztJQUUzQyxNQUFNLENBQUNzQixVQUFVQyxZQUFZLEdBQUd2QiwrQ0FBUUEsQ0FBQztRQUNyQ3dCLFdBQVc7UUFBSUMsUUFBUTtRQUFJQyxTQUFTO1FBQUlDLFNBQVM7SUFDckQ7SUFFQSxNQUFNQyxlQUFlLENBQUNDLEdBQUdDO1FBQ3JCLHlGQUF5RjtRQUN6RlAsWUFBWSxDQUFDUSxPQUFVO2dCQUFFLEdBQUdBLElBQUk7Z0JBQUUsQ0FBQ0QsS0FBSyxFQUFFRCxFQUFFRyxNQUFNLENBQUNDLEtBQUs7WUFBQztJQUM3RDtJQUVBLDZCQUE2QjtJQUM3QixNQUFNQyxrQkFBa0I7UUFDcEIsSUFBSTtZQUNBLElB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Ozs7QUFHYixFQUFDO0dBeEhZRDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvY29udGV4dC9UcmFuc2FjdGlvbkNvbnRleHQuanN4PzE2OTMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcblxyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBldGhlcnMgfSBmcm9tICdldGhlcnMnO1xyXG5pbXBvcnQgeyBjb250cmFjdEFCSSwgY29udHJhY3RBZGRyZXNzIH0gZnJvbSBcIi4uLy4uL3V0aWxzL2NvbnN0YW50c1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFRyYW5zYWN0aW9uQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoKTtcclxuXHJcbmlmICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICBjb25zdCB7IGV0aGVyZXVtIH0gPSB3aW5kb3c7XHJcbn1cclxuXHJcbi8vIGZlY3RoaW5nIHRoZSBjb250cmFjdFxyXG5cclxuY29uc3QgZ2V0RXRoZXJldW1Db250cmFjdCA9IGFzeW5jICgpID0+IHtcclxuICAgIGNvbnN0IHByb3ZpZGVyID0gbmV3IGV0aGVycy5Ccm93c2VyUHJvdmlkZXIoZXRoZXJldW0pXHJcbiAgICBjb25zdCBzaWduZXIgPSBhd2FpdCBwcm92aWRlci5nZXRTaWduZXIoKTtcclxuICAgIGNvbnN0IHRyYW5zYWN0aW9uQ29udHJhY3QgPSBuZXcgZXRoZXJzLkNvbnRyYWN0KGNvbnRyYWN0QWRkcmVzcywgY29udHJhY3RBQkksIHNpZ25lcik7XHJcblxyXG4gICAgLy8gY29uc29sZS5sb2coe1xyXG4gICAgLy8gICAgIHByb3ZpZGVyLFxyXG4gICAgLy8gICAgIHNpZ25lcixcclxuICAgIC8vICAgICB0cmFuc2FjdGlvbkNvbnRyYWN0XHJcbiAgICAvLyB9KVxyXG4gICAgcmV0dXJuIHRyYW5zYWN0aW9uQ29udHJhY3Q7XHJcbn1cclxuXHJcbi8vIG5vdywgd2UgbmVlZCB0byBjYWxsIHRoaXMgZnVuY3Rpb24gc29tZXdoZXJlLiBTbyBoZXJlIHdlIGFyZSBlc3NlbnRpYWxseSBjcmVhdGluZyBhIHdyYXBwZXIgZm9yIHRoaXMgdHJhbnNhY3Rpb24gY29udHJhY3QuIFxyXG5cclxuZXhwb3J0IGNvbnN0IFRyYW5zYWN0aW9uUHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcblxyXG4gICAgY29uc3QgW2N1cnJlbnRBY2NvdW50LCBzZXRjdXJyZW50QWNjb3VudF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAgIGNvbnN0IFtmb3JtRGF0YSwgc2V0Rm9ybURhdGFdID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIGFkZHJlc3NUbzogXCJcIiwgYW1vdW50OiBcIlwiLCBrZXl3b3JkOiBcIlwiLCBtZXNzYWdlOiBcIlwiXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZSwgbmFtZSkgPT4ge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiSW5zaWRlIGhhbmRsZSBjaGFuZ2UsIGNoYW5naW5nIHZhbHVlIG9mIG5hbWUgdG8gXCIsIG5hbWUsIGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICBzZXRGb3JtRGF0YSgocHJldikgPT4gKHsgLi4ucHJldiwgW25hbWVdOiBlLnRhcmdldC52YWx1ZSB9KSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gZmV0Y2hpbmcgYWxsIHRyYW5zYWN0aW9ucyBcclxuICAgIGNvbnN0IGdldFRyYW5zYWN0aW9ucyA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAoIWV0aGVyZXVtKSByZXR1cm4gYWxlcnQoXCJQbGVhc2UgaW5zdGFsbCBNZXRhbWFza1wiKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHRyYW5zYWN0aW9uQ29udHJhY3QgPSBhd2FpdCBnZXRFdGhlcmV1bUNvbnRyYWN0KCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHRyYW5zYWN0aW9uc0xpc3QgPSBhd2FpdCB0cmFuc2FjdGlvbkNvbnRyYWN0LmdldEFsbFRyYW5zYWN0aW9ucygpO1xyXG5cclxuICAgICAgICAgICAgLy8gVHJhbnNmb3JtIHRoZSB0cmFuc2FjdGlvbnMgbGlzdCB0byBhIG1vcmUgdXNhYmxlIGZvcm1hdCwgaWYgbmVlZGVkXHJcbiAgICAgICAgICAgIGNvbnN0IGZvcm1hdHRlZFRyYW5zYWN0aW9ucyA9IHRyYW5zYWN0aW9uc0xpc3QubWFwKHRyYW5zYWN0aW9uID0+ICh7XHJcbiAgICAgICAgICAgICAgICBzZW5kZXI6IHRyYW5zYWN0aW9uLnNlbmRlcixcclxuICAgICAgICAgICAgICAgIHJlY2VpdmVyOiB0cmFuc2FjdGlvbi5yZWNlaXZlcixcclxuICAgICAgICAgICAgICAgIGFtb3VudDogdHJhbnNhY3Rpb24uYW1vdW50LnRvU3RyaW5nKCksICAvLyBJZiBhbW91bnQgaXMgYSBCaWdOdW1iZXIsIGNvbnZlcnQgdG8gc3RyaW5nXHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiB0cmFuc2FjdGlvbi5tZXNzYWdlLFxyXG4gICAgICAgICAgICAgICAgdGltZXN0YW1wOiBuZXcgRGF0ZSh0cmFuc2FjdGlvbi50aW1lc3RhbXAgKiAxMDAwKSwgIC8vIENvbnZlcnQgVU5JWCB0aW1lc3RhbXAgdG8gRGF0ZSBvYmplY3RcclxuICAgICAgICAgICAgICAgIGtleXdvcmQ6IHRyYW5zYWN0aW9uLmtleXdvcmRcclxuICAgICAgICAgICAgfSkpO1xyXG5cclxuICAgICAgICAgICAgY29uc29sZS5sb2coZm9ybWF0dGVkVHJhbnNhY3Rpb25zKTtcclxuXHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBjaGVja2luZyBpZiBtZXRhbWFzayBpcyBjb25uZWN0ZWQuIFxyXG4gICAgY29uc3QgY2hlY2tXYWxsZXRDb25uZWN0ZWQgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgaWYgKCFldGhlcmV1bSkgcmV0dXJuIGFsZXJ0KFwiUGxlYXNlIGluc3RhbGwgTWV0YW1hc2suXCIpO1xyXG4gICAgICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgZXRoZXJldW0ucmVxdWVzdCh7IG1ldGhvZDogJ2V0aF9hY2NvdW50cycgfSk7XHJcblxyXG5cclxuICAgICAgICAvLyBjaGVja2luZyB0aGF0IGlmIHdlIGFscmVhZHkgaGF2ZSBhbiBhY2NvdW50IGNvbm5lY3RlZCBhdCB0aGUgc3RhcnQgb2YgdGhlIHJlbmRlciwgd2UgY2FuIGFscmVhZHkgc2V0IHRoZSB2YWx1ZSBvZiB0aGUgYWNjb3VudC4gXHJcbiAgICAgICAgaWYgKGFjY291bnRzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgc2V0Y3VycmVudEFjY291bnQoYWNjb3VudHNbMF0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTm8gYWNjb3VudHMgZm91bmRcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGFjY291bnRzKTtcclxuICAgICAgICBnZXRUcmFuc2FjdGlvbnMoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyByZXRyZWl2aW5nIHRoZSBmaXJzdCB3YWxsZXIuIFxyXG4gICAgY29uc3QgY29ubmVjdFdhbGxldCA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAoIWV0aGVyZXVtKSByZXR1cm4gYWxlcnQoXCJQbGVhc2UgaW5zdGFsbCBNZXRhbWFzay5cIik7XHJcbiAgICAgICAgICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgZXRoZXJldW0ucmVxdWVzdCh7IG1ldGhvZDogJ2V0aF9yZXF1ZXN0QWNjb3VudHMnIH0pO1xyXG4gICAgICAgICAgICBzZXRjdXJyZW50QWNjb3VudChhY2NvdW50c1swXSk7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGN1cnJlbnRBY2NvdW50KTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk5vIGV0aGVyZXVtIG9iamVjdCBoYXMgYmVlbiBmb3VuZC5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgY29uc3Qgc2VuZFRyYW5zYWN0aW9uID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmICghZXRoZXJldW0pIHJldHVybiBhbGVydChcIlBsZWFzZSBpbnN0YWxsIE1ldGFtYXNrLlwiKTtcclxuXHJcbiAgICAgICAgICAgIC8vIGdldHRpbmcgZm9ybSBkYXRhXHJcbiAgICAgICAgICAgIGNvbnN0IHsgYWRkcmVzc1RvLCBhbW91bnQsIGtleXdvcmQsIG1lc3NhZ2UgfSA9IGZvcm1EYXRhO1xyXG5cclxuICAgICAgICAgICAgLy8ga25vd2luZyB3aGF0IGNvbnRyYWN0IHRvIGludm9rZSBcclxuICAgICAgICAgICAgY29uc3QgdHJhbnNhY3Rpb25Db250cmFjdCA9IGF3YWl0IGdldEV0aGVyZXVtQ29udHJhY3QoKTtcclxuXHJcbiAgICAgICAgICAgIC8vIHNpbSByZWFzb24gYXMgdG8gd2hhdCBpcyBleHBsYWluZWQgYmVsb3csIHRoaXMgcGFzc2VzIHlvdXIgYW1vdW50IGludG8gR1dFSSBoZXhhZGVjaW1hbCBhbW91bnQuIFxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkFtb3VudCBpczogXCIsIGFtb3VudCwgXCJ0eXBlOiBcIiwgdHlwZW9mIChhbW91bnQpKTtcclxuICAgICAgICAgICAgY29uc3QgcGFyc2VkQW1vdW50ID0gZXRoZXJzLnBhcnNlRXRoZXIoYW1vdW50KTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJUaGlzIGlzIHRoZSBwYXJzZWQgYW1vdW50OiBcIiwgcGFyc2VkQW1vdW50KTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJUaGlzIGlzIHRoZSBwYXJzZWQgYW1vdW50IGluIGhleDogXCIsIHBhcnNlZEFtb3VudC50b1N0cmluZygxNikpO1xyXG5cclxuXHJcbiAgICAgICAgICAgIC8vIGxldCdzIHNlbmQgc2hpdCBtZlxyXG4gICAgICAgICAgICBhd2FpdCBldGhlcmV1bS5yZXF1ZXN0KHtcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogJ2V0aF9zZW5kVHJhbnNhY3Rpb24nLFxyXG4gICAgICAgICAgICAgICAgcGFyYW1zOiBbe1xyXG4gICAgICAgICAgICAgICAgICAgIGZyb206IGN1cnJlbnRBY2NvdW50LFxyXG4gICAgICAgICAgICAgICAgICAgIHRvOiBhZGRyZXNzVG8sXHJcbiAgICAgICAgICAgICAgICAgICAgZ2FzOiAnMHg1MjA4JywgLy9zbyBoZXJlJ3MgdGhlIHRlYSBhYm91dCB0aGlzLiBHYXMgaGVyZSBpcyB0aGUgYW1vdW50IG9mIG1vbmV5IHdlIHdhbnQgdG8gc3BlbmQgaW4gdGhpcyB0cmFuc2FjdGlvbi4gQWxzbywgYWxsIG9mIHRoaXMgaXMgd3JpdHRlbiBpbiBoZXhhZGVjaW1hbC4gTm93LCB0aGlzIGluIGRlY2ltYWwgZm9ybWF0IGlzIDIxMDAwLiBCdXQgdGhpcyBpcyBpbiBHV0VJLCBub3QgRVRILiBHV0VJIGlzIGEgc3VidW5pdCBvZiBFVEgsIGxpa2UgY2VudCBpcyB0byBhIGRvbGxhciwgYW5kIDIxSyBnd2VpIGlzIDAuMDAwMDIxIGV0aC4gXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHBhcnNlZEFtb3VudC50b1N0cmluZygxNiksXHJcbiAgICAgICAgICAgICAgICB9XVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIC8vIGFkZGluZyB0byB0aGUgYmxvY2tjaGFpbiBcclxuICAgICAgICAgICAgY29uc3QgdHJhbnNhY3Rpb25IYXNoID0gYXdhaXQgdHJhbnNhY3Rpb25Db250cmFjdC5hZGRUb0Jsb2NrY2hhaW4oYWRkcmVzc1RvLCBwYXJzZWRBbW91bnQsIG1lc3NhZ2UsIGtleXdvcmQpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlRoaXMgaXMgeW91ciB0cmFuc2FjdGlvbiBoYXNoOiBcIiwgdHJhbnNhY3Rpb25IYXNoLmhhc2gpO1xyXG5cclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNoZWNrV2FsbGV0Q29ubmVjdGVkKCk7XHJcbiAgICB9LCBbXSlcclxuXHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFRyYW5zYWN0aW9uQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyBjb25uZWN0V2FsbGV0LCBjdXJyZW50QWNjb3VudCwgZm9ybURhdGEsIHNlbmRUcmFuc2FjdGlvbiwgaGFuZGxlQ2hhbmdlIH19PlxyXG4gICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgPC9UcmFuc2FjdGlvbkNvbnRleHQuUHJvdmlkZXI+XHJcbiAgICApXHJcbn0iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImV0aGVycyIsImNvbnRyYWN0QUJJIiwiY29udHJhY3RBZGRyZXNzIiwiVHJhbnNhY3Rpb25Db250ZXh0IiwiY3JlYXRlQ29udGV4dCIsImV0aGVyZXVtIiwid2luZG93IiwiZ2V0RXRoZXJldW1Db250cmFjdCIsInByb3ZpZGVyIiwiQnJvd3NlclByb3ZpZGVyIiwic2lnbmVyIiwiZ2V0U2lnbmVyIiwidHJhbnNhY3Rpb25Db250cmFjdCIsIkNvbnRyYWN0IiwiVHJhbnNhY3Rpb25Qcm92aWRlciIsImNoaWxkcmVuIiwiY3VycmVudEFjY291bnQiLCJzZXRjdXJyZW50QWNjb3VudCIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsImZvcm1EYXRhIiwic2V0Rm9ybURhdGEiLCJhZGRyZXNzVG8iLCJhbW91bnQiLCJrZXl3b3JkIiwibWVzc2FnZSIsImhhbmRsZUNoYW5nZSIsImUiLCJuYW1lIiwicHJldiIsInRhcmdldCIsInZhbHVlIiwiZ2V0VHJhbnNhY3Rpb25zIiwiYWxlcnQiLCJ0cmFuc2FjdGlvbnNMaXN0IiwiZ2V0QWxsVHJhbnNhY3Rpb25zIiwiZm9ybWF0dGVkVHJhbnNhY3Rpb25zIiwibWFwIiwidHJhbnNhY3Rpb24iLCJzZW5kZXIiLCJyZWNlaXZlciIsInRvU3RyaW5nIiwidGltZXN0YW1wIiwiRGF0ZSIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsImNoZWNrV2FsbGV0Q29ubmVjdGVkIiwiYWNjb3VudHMiLCJyZXF1ZXN0IiwibWV0aG9kIiwibGVuZ3RoIiwiY29ubmVjdFdhbGxldCIsIkVycm9yIiwic2VuZFRyYW5zYWN0aW9uIiwicGFyc2VkQW1vdW50IiwicGFyc2VFdGhlciIsInBhcmFtcyIsImZyb20iLCJ0byIsImdhcyIsInRyYW5zYWN0aW9uSGFzaCIsImFkZFRvQmxvY2tjaGFpbiIsImhhc2giLCJQcm92aWRlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/context/TransactionContext.jsx\n"));

/***/ })

});