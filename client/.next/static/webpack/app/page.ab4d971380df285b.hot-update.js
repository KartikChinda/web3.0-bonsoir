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

/***/ "(app-pages-browser)/./app/context/TransactionContext.jsx":
/*!********************************************!*\
  !*** ./app/context/TransactionContext.jsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   TransactionContext: function() { return /* binding */ TransactionContext; },\n/* harmony export */   TransactionProvider: function() { return /* binding */ TransactionProvider; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ethers */ \"(app-pages-browser)/./node_modules/ethers/lib.esm/providers/provider-browser.js\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ethers */ \"(app-pages-browser)/./node_modules/ethers/lib.esm/contract/contract.js\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ethers */ \"(app-pages-browser)/./node_modules/ethers/lib.esm/utils/units.js\");\n/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/constants */ \"(app-pages-browser)/./utils/constants.js\");\n/* __next_internal_client_entry_do_not_use__ TransactionContext,TransactionProvider auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst TransactionContext = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createContext();\nif (true) {\n    const { ethereum: ethereum1 } = window;\n}\n// fecthing the contract\nconst getEthereumContract = async ()=>{\n    const provider = new ethers__WEBPACK_IMPORTED_MODULE_3__.BrowserProvider(ethereum);\n    const signer = await provider.getSigner();\n    const transactionContract = new ethers__WEBPACK_IMPORTED_MODULE_4__.Contract(_utils_constants__WEBPACK_IMPORTED_MODULE_2__.contractAddress, _utils_constants__WEBPACK_IMPORTED_MODULE_2__.contractABI, signer);\n    // console.log({\n    //     provider,\n    //     signer,\n    //     transactionContract\n    // })\n    return transactionContract;\n};\n// now, we need to call this function somewhere. So here we are essentially creating a wrapper for this transaction contract. \nconst TransactionProvider = (param)=>{\n    let { children } = param;\n    _s();\n    const [currentAccount, setcurrentAccount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [formData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        addressTo: \"\",\n        amount: \"\",\n        keyword: \"\",\n        message: \"\"\n    });\n    const handleChange = (e, name)=>{\n        // console.log(\"Inside handle change, changing value of name to \", name, e.target.value);\n        setFormData((prev)=>({\n                ...prev,\n                [name]: e.target.value\n            }));\n    };\n    // fetching all transactions \n    const getTransactions = async ()=>{\n        try {\n            if (!ethereum) return alert(\"Please install Metamask\");\n            const transactionContract = await getEthereumContract();\n            const transactionsList = await transactionContract.getAllTransactions();\n            // Transform the transactions list to a more usable format\n            const formattedTransactions = transactionsList.map((transaction)=>({\n                    sender: transaction.sender,\n                    receiver: transaction.receiver,\n                    amount: transaction.amount.toString() / 10 ** 18,\n                    message: transaction.message,\n                    timestamp: new Date(Number(transaction.timestamp) * 1000).toLocaleString(),\n                    keyword: transaction.keyword\n                }));\n            console.log(formattedTransactions);\n        } catch (error) {\n            console.log(error);\n        }\n    };\n    // checking if metamask is connected. \n    const checkWalletConnected = async ()=>{\n        if (!ethereum) return alert(\"Please install Metamask.\");\n        const accounts = await ethereum.request({\n            method: \"eth_accounts\"\n        });\n        // checking that if we already have an account connected at the start of the render, we can already set the value of the account. \n        if (accounts.length > 0) {\n            setcurrentAccount(accounts[0]);\n        } else {\n            console.log(\"No accounts found\");\n        }\n        console.log(accounts);\n        getTransactions();\n    };\n    // retreiving the first waller. \n    const connectWallet = async ()=>{\n        try {\n            if (!ethereum) return alert(\"Please install Metamask.\");\n            const accounts = await ethereum.request({\n                method: \"eth_requestAccounts\"\n            });\n            setcurrentAccount(accounts[0]);\n        // console.log(currentAccount);\n        } catch (error) {\n            console.log(error);\n            throw new Error(\"No ethereum object has been found.\");\n        }\n    };\n    const sendTransaction = async ()=>{\n        try {\n            if (!ethereum) return alert(\"Please install Metamask.\");\n            // getting form data\n            const { addressTo, amount, keyword, message } = formData;\n            // knowing what contract to invoke \n            const transactionContract = await getEthereumContract();\n            // sim reason as to what is explained below, this passes your amount into GWEI hexadecimal amount. \n            console.log(\"Amount is: \", amount, \"type: \", typeof amount);\n            const parsedAmount = ethers__WEBPACK_IMPORTED_MODULE_5__.parseEther(amount);\n            console.log(\"This is the parsed amount: \", parsedAmount);\n            console.log(\"This is the parsed amount in hex: \", parsedAmount.toString(16));\n            // let's send shit mf\n            await ethereum.request({\n                method: \"eth_sendTransaction\",\n                params: [\n                    {\n                        from: currentAccount,\n                        to: addressTo,\n                        gas: \"0x5208\",\n                        value: parsedAmount.toString(16)\n                    }\n                ]\n            });\n            // adding to the blockchain \n            const transactionHash = await transactionContract.addToBlockchain(addressTo, parsedAmount, message, keyword);\n            console.log(\"This is your transaction hash: \", transactionHash.hash);\n        } catch (error) {\n            console.log(error);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        checkWalletConnected();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TransactionContext.Provider, {\n        value: {\n            connectWallet,\n            currentAccount,\n            formData,\n            sendTransaction,\n            handleChange\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"D:\\\\leapOfFaith\\\\newage\\\\client\\\\app\\\\context\\\\TransactionContext.jsx\",\n        lineNumber: 146,\n        columnNumber: 9\n    }, undefined);\n};\n_s(TransactionProvider, \"mhU3BCmS1ygvsoX+g/dxJTRBdR4=\");\n_c = TransactionProvider;\nvar _c;\n$RefreshReg$(_c, \"TransactionProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb250ZXh0L1RyYW5zYWN0aW9uQ29udGV4dC5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFFbUQ7QUFDbkI7QUFDcUM7QUFFOUQsTUFBTU0sbUNBQXFCTiwwREFBbUIsR0FBRztBQUV4RCxJQUFJLElBQTZCLEVBQUU7SUFDL0IsTUFBTSxFQUFFUSxVQUFBQSxTQUFRLEVBQUUsR0FBR0M7QUFDekI7QUFFQSx3QkFBd0I7QUFFeEIsTUFBTUMsc0JBQXNCO0lBQ3hCLE1BQU1DLFdBQVcsSUFBSVIsbURBQXNCLENBQUNLO0lBQzVDLE1BQU1LLFNBQVMsTUFBTUYsU0FBU0csU0FBUztJQUN2QyxNQUFNQyxzQkFBc0IsSUFBSVosNENBQWUsQ0FBQ0UsNkRBQWVBLEVBQUVELHlEQUFXQSxFQUFFUztJQUU5RSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCwwQkFBMEI7SUFDMUIsS0FBSztJQUNMLE9BQU9FO0FBQ1g7QUFFQSw4SEFBOEg7QUFFdkgsTUFBTUUsc0JBQXNCO1FBQUMsRUFBRUMsUUFBUSxFQUFFOztJQUU1QyxNQUFNLENBQUNDLGdCQUFnQkMsa0JBQWtCLEdBQUduQiwrQ0FBUUEsQ0FBQztJQUVyRCxNQUFNLENBQUNvQixXQUFXQyxhQUFhLEdBQUdyQiwrQ0FBUUEsQ0FBQztJQUUzQyxNQUFNLENBQUNzQixVQUFVQyxZQUFZLEdBQUd2QiwrQ0FBUUEsQ0FBQztRQUNyQ3dCLFdBQVc7UUFBSUMsUUFBUTtRQUFJQyxTQUFTO1FBQUlDLFNBQVM7SUFDckQ7SUFFQSxNQUFNQyxlQUFlLENBQUNDLEdBQUdDO1FBQ3JCLHlGQUF5RjtRQUN6RlAsWUFBWSxDQUFDUSxPQUFVO2dCQUFFLEdBQUdBLElBQUk7Z0JBQUUsQ0FBQ0QsS0FBSyxFQUFFRCxFQUFFRyxNQUFNLENBQUNDLEtBQUs7WUFBQztJQUM3RDtJQUVBLDZCQUE2QjtJQUM3QixNQUFNQyxrQkFBa0I7UUFDcEIsSUFBSTtZQUNBLElB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O1lBQVVvQztZQUFpQjlCO1FBQWE7a0JBQ3hHWDs7Ozs7O0FBR2IsRUFBQztHQXhIWUQ7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbnRleHQvVHJhbnNhY3Rpb25Db250ZXh0LmpzeD8xNjkzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5cclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgZXRoZXJzIH0gZnJvbSAnZXRoZXJzJztcclxuaW1wb3J0IHsgY29udHJhY3RBQkksIGNvbnRyYWN0QWRkcmVzcyB9IGZyb20gXCIuLi8uLi91dGlscy9jb25zdGFudHNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBUcmFuc2FjdGlvbkNvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KCk7XHJcblxyXG5pZiAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgY29uc3QgeyBldGhlcmV1bSB9ID0gd2luZG93O1xyXG59XHJcblxyXG4vLyBmZWN0aGluZyB0aGUgY29udHJhY3RcclxuXHJcbmNvbnN0IGdldEV0aGVyZXVtQ29udHJhY3QgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zdCBwcm92aWRlciA9IG5ldyBldGhlcnMuQnJvd3NlclByb3ZpZGVyKGV0aGVyZXVtKVxyXG4gICAgY29uc3Qgc2lnbmVyID0gYXdhaXQgcHJvdmlkZXIuZ2V0U2lnbmVyKCk7XHJcbiAgICBjb25zdCB0cmFuc2FjdGlvbkNvbnRyYWN0ID0gbmV3IGV0aGVycy5Db250cmFjdChjb250cmFjdEFkZHJlc3MsIGNvbnRyYWN0QUJJLCBzaWduZXIpO1xyXG5cclxuICAgIC8vIGNvbnNvbGUubG9nKHtcclxuICAgIC8vICAgICBwcm92aWRlcixcclxuICAgIC8vICAgICBzaWduZXIsXHJcbiAgICAvLyAgICAgdHJhbnNhY3Rpb25Db250cmFjdFxyXG4gICAgLy8gfSlcclxuICAgIHJldHVybiB0cmFuc2FjdGlvbkNvbnRyYWN0O1xyXG59XHJcblxyXG4vLyBub3csIHdlIG5lZWQgdG8gY2FsbCB0aGlzIGZ1bmN0aW9uIHNvbWV3aGVyZS4gU28gaGVyZSB3ZSBhcmUgZXNzZW50aWFsbHkgY3JlYXRpbmcgYSB3cmFwcGVyIGZvciB0aGlzIHRyYW5zYWN0aW9uIGNvbnRyYWN0LiBcclxuXHJcbmV4cG9ydCBjb25zdCBUcmFuc2FjdGlvblByb3ZpZGVyID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xyXG5cclxuICAgIGNvbnN0IFtjdXJyZW50QWNjb3VudCwgc2V0Y3VycmVudEFjY291bnRdID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG4gICAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgICBjb25zdCBbZm9ybURhdGEsIHNldEZvcm1EYXRhXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICBhZGRyZXNzVG86IFwiXCIsIGFtb3VudDogXCJcIiwga2V5d29yZDogXCJcIiwgbWVzc2FnZTogXCJcIlxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGUsIG5hbWUpID0+IHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIkluc2lkZSBoYW5kbGUgY2hhbmdlLCBjaGFuZ2luZyB2YWx1ZSBvZiBuYW1lIHRvIFwiLCBuYW1lLCBlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgc2V0Rm9ybURhdGEoKHByZXYpID0+ICh7IC4uLnByZXYsIFtuYW1lXTogZS50YXJnZXQudmFsdWUgfSkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGZldGNoaW5nIGFsbCB0cmFuc2FjdGlvbnMgXHJcbiAgICBjb25zdCBnZXRUcmFuc2FjdGlvbnMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKCFldGhlcmV1bSkgcmV0dXJuIGFsZXJ0KFwiUGxlYXNlIGluc3RhbGwgTWV0YW1hc2tcIik7XHJcblxyXG4gICAgICAgICAgICBjb25zdCB0cmFuc2FjdGlvbkNvbnRyYWN0ID0gYXdhaXQgZ2V0RXRoZXJldW1Db250cmFjdCgpO1xyXG4gICAgICAgICAgICBjb25zdCB0cmFuc2FjdGlvbnNMaXN0ID0gYXdhaXQgdHJhbnNhY3Rpb25Db250cmFjdC5nZXRBbGxUcmFuc2FjdGlvbnMoKTtcclxuXHJcbiAgICAgICAgICAgIC8vIFRyYW5zZm9ybSB0aGUgdHJhbnNhY3Rpb25zIGxpc3QgdG8gYSBtb3JlIHVzYWJsZSBmb3JtYXRcclxuICAgICAgICAgICAgY29uc3QgZm9ybWF0dGVkVHJhbnNhY3Rpb25zID0gdHJhbnNhY3Rpb25zTGlzdC5tYXAodHJhbnNhY3Rpb24gPT4gKHtcclxuICAgICAgICAgICAgICAgIHNlbmRlcjogdHJhbnNhY3Rpb24uc2VuZGVyLFxyXG4gICAgICAgICAgICAgICAgcmVjZWl2ZXI6IHRyYW5zYWN0aW9uLnJlY2VpdmVyLFxyXG4gICAgICAgICAgICAgICAgYW1vdW50OiB0cmFuc2FjdGlvbi5hbW91bnQudG9TdHJpbmcoKSAvICgxMCAqKiAxOCksICAvLyBEaXZpZGluZyBieSAxMF4xOCBzbyB0aGF0IHdlIGNhbiBnZXQgdGhlIHZhbHVlIGluIEV0aCwgYW5kIG5vdCBpbiBHV0VJXHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiB0cmFuc2FjdGlvbi5tZXNzYWdlLFxyXG4gICAgICAgICAgICAgICAgdGltZXN0YW1wOiBuZXcgRGF0ZShOdW1iZXIodHJhbnNhY3Rpb24udGltZXN0YW1wKSAqIDEwMDApLnRvTG9jYWxlU3RyaW5nKCksICAvLyBDb252ZXJ0IEJpZ0ludCB0byBudW1iZXIgdGhlbiB0byBEYXRlIG9iamVjdFxyXG4gICAgICAgICAgICAgICAga2V5d29yZDogdHJhbnNhY3Rpb24ua2V5d29yZFxyXG4gICAgICAgICAgICB9KSk7XHJcblxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhmb3JtYXR0ZWRUcmFuc2FjdGlvbnMpO1xyXG5cclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIGNoZWNraW5nIGlmIG1ldGFtYXNrIGlzIGNvbm5lY3RlZC4gXHJcbiAgICBjb25zdCBjaGVja1dhbGxldENvbm5lY3RlZCA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICBpZiAoIWV0aGVyZXVtKSByZXR1cm4gYWxlcnQoXCJQbGVhc2UgaW5zdGFsbCBNZXRhbWFzay5cIik7XHJcbiAgICAgICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCBldGhlcmV1bS5yZXF1ZXN0KHsgbWV0aG9kOiAnZXRoX2FjY291bnRzJyB9KTtcclxuXHJcblxyXG4gICAgICAgIC8vIGNoZWNraW5nIHRoYXQgaWYgd2UgYWxyZWFkeSBoYXZlIGFuIGFjY291bnQgY29ubmVjdGVkIGF0IHRoZSBzdGFydCBvZiB0aGUgcmVuZGVyLCB3ZSBjYW4gYWxyZWFkeSBzZXQgdGhlIHZhbHVlIG9mIHRoZSBhY2NvdW50LiBcclxuICAgICAgICBpZiAoYWNjb3VudHMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBzZXRjdXJyZW50QWNjb3VudChhY2NvdW50c1swXSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJObyBhY2NvdW50cyBmb3VuZFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5sb2coYWNjb3VudHMpO1xyXG4gICAgICAgIGdldFRyYW5zYWN0aW9ucygpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHJldHJlaXZpbmcgdGhlIGZpcnN0IHdhbGxlci4gXHJcbiAgICBjb25zdCBjb25uZWN0V2FsbGV0ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmICghZXRoZXJldW0pIHJldHVybiBhbGVydChcIlBsZWFzZSBpbnN0YWxsIE1ldGFtYXNrLlwiKTtcclxuICAgICAgICAgICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCBldGhlcmV1bS5yZXF1ZXN0KHsgbWV0aG9kOiAnZXRoX3JlcXVlc3RBY2NvdW50cycgfSk7XHJcbiAgICAgICAgICAgIHNldGN1cnJlbnRBY2NvdW50KGFjY291bnRzWzBdKTtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coY3VycmVudEFjY291bnQpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTm8gZXRoZXJldW0gb2JqZWN0IGhhcyBiZWVuIGZvdW5kLlwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICBjb25zdCBzZW5kVHJhbnNhY3Rpb24gPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKCFldGhlcmV1bSkgcmV0dXJuIGFsZXJ0KFwiUGxlYXNlIGluc3RhbGwgTWV0YW1hc2suXCIpO1xyXG5cclxuICAgICAgICAgICAgLy8gZ2V0dGluZyBmb3JtIGRhdGFcclxuICAgICAgICAgICAgY29uc3QgeyBhZGRyZXNzVG8sIGFtb3VudCwga2V5d29yZCwgbWVzc2FnZSB9ID0gZm9ybURhdGE7XHJcblxyXG4gICAgICAgICAgICAvLyBrbm93aW5nIHdoYXQgY29udHJhY3QgdG8gaW52b2tlIFxyXG4gICAgICAgICAgICBjb25zdCB0cmFuc2FjdGlvbkNvbnRyYWN0ID0gYXdhaXQgZ2V0RXRoZXJldW1Db250cmFjdCgpO1xyXG5cclxuICAgICAgICAgICAgLy8gc2ltIHJlYXNvbiBhcyB0byB3aGF0IGlzIGV4cGxhaW5lZCBiZWxvdywgdGhpcyBwYXNzZXMgeW91ciBhbW91bnQgaW50byBHV0VJIGhleGFkZWNpbWFsIGFtb3VudC4gXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQW1vdW50IGlzOiBcIiwgYW1vdW50LCBcInR5cGU6IFwiLCB0eXBlb2YgKGFtb3VudCkpO1xyXG4gICAgICAgICAgICBjb25zdCBwYXJzZWRBbW91bnQgPSBldGhlcnMucGFyc2VFdGhlcihhbW91bnQpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlRoaXMgaXMgdGhlIHBhcnNlZCBhbW91bnQ6IFwiLCBwYXJzZWRBbW91bnQpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlRoaXMgaXMgdGhlIHBhcnNlZCBhbW91bnQgaW4gaGV4OiBcIiwgcGFyc2VkQW1vdW50LnRvU3RyaW5nKDE2KSk7XHJcblxyXG5cclxuICAgICAgICAgICAgLy8gbGV0J3Mgc2VuZCBzaGl0IG1mXHJcbiAgICAgICAgICAgIGF3YWl0IGV0aGVyZXVtLnJlcXVlc3Qoe1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnZXRoX3NlbmRUcmFuc2FjdGlvbicsXHJcbiAgICAgICAgICAgICAgICBwYXJhbXM6IFt7XHJcbiAgICAgICAgICAgICAgICAgICAgZnJvbTogY3VycmVudEFjY291bnQsXHJcbiAgICAgICAgICAgICAgICAgICAgdG86IGFkZHJlc3NUbyxcclxuICAgICAgICAgICAgICAgICAgICBnYXM6ICcweDUyMDgnLCAvL3NvIGhlcmUncyB0aGUgdGVhIGFib3V0IHRoaXMuIEdhcyBoZXJlIGlzIHRoZSBhbW91bnQgb2YgbW9uZXkgd2Ugd2FudCB0byBzcGVuZCBpbiB0aGlzIHRyYW5zYWN0aW9uLiBBbHNvLCBhbGwgb2YgdGhpcyBpcyB3cml0dGVuIGluIGhleGFkZWNpbWFsLiBOb3csIHRoaXMgaW4gZGVjaW1hbCBmb3JtYXQgaXMgMjEwMDAuIEJ1dCB0aGlzIGlzIGluIEdXRUksIG5vdCBFVEguIEdXRUkgaXMgYSBzdWJ1bml0IG9mIEVUSCwgbGlrZSBjZW50IGlzIHRvIGEgZG9sbGFyLCBhbmQgMjFLIGd3ZWkgaXMgMC4wMDAwMjEgZXRoLiBcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogcGFyc2VkQW1vdW50LnRvU3RyaW5nKDE2KSxcclxuICAgICAgICAgICAgICAgIH1dXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgLy8gYWRkaW5nIHRvIHRoZSBibG9ja2NoYWluIFxyXG4gICAgICAgICAgICBjb25zdCB0cmFuc2FjdGlvbkhhc2ggPSBhd2FpdCB0cmFuc2FjdGlvbkNvbnRyYWN0LmFkZFRvQmxvY2tjaGFpbihhZGRyZXNzVG8sIHBhcnNlZEFtb3VudCwgbWVzc2FnZSwga2V5d29yZCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVGhpcyBpcyB5b3VyIHRyYW5zYWN0aW9uIGhhc2g6IFwiLCB0cmFuc2FjdGlvbkhhc2guaGFzaCk7XHJcblxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY2hlY2tXYWxsZXRDb25uZWN0ZWQoKTtcclxuICAgIH0sIFtdKVxyXG5cclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8VHJhbnNhY3Rpb25Db250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IGNvbm5lY3RXYWxsZXQsIGN1cnJlbnRBY2NvdW50LCBmb3JtRGF0YSwgc2VuZFRyYW5zYWN0aW9uLCBoYW5kbGVDaGFuZ2UgfX0+XHJcbiAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICA8L1RyYW5zYWN0aW9uQ29udGV4dC5Qcm92aWRlcj5cclxuICAgIClcclxufSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiZXRoZXJzIiwiY29udHJhY3RBQkkiLCJjb250cmFjdEFkZHJlc3MiLCJUcmFuc2FjdGlvbkNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiZXRoZXJldW0iLCJ3aW5kb3ciLCJnZXRFdGhlcmV1bUNvbnRyYWN0IiwicHJvdmlkZXIiLCJCcm93c2VyUHJvdmlkZXIiLCJzaWduZXIiLCJnZXRTaWduZXIiLCJ0cmFuc2FjdGlvbkNvbnRyYWN0IiwiQ29udHJhY3QiLCJUcmFuc2FjdGlvblByb3ZpZGVyIiwiY2hpbGRyZW4iLCJjdXJyZW50QWNjb3VudCIsInNldGN1cnJlbnRBY2NvdW50IiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwiZm9ybURhdGEiLCJzZXRGb3JtRGF0YSIsImFkZHJlc3NUbyIsImFtb3VudCIsImtleXdvcmQiLCJtZXNzYWdlIiwiaGFuZGxlQ2hhbmdlIiwiZSIsIm5hbWUiLCJwcmV2IiwidGFyZ2V0IiwidmFsdWUiLCJnZXRUcmFuc2FjdGlvbnMiLCJhbGVydCIsInRyYW5zYWN0aW9uc0xpc3QiLCJnZXRBbGxUcmFuc2FjdGlvbnMiLCJmb3JtYXR0ZWRUcmFuc2FjdGlvbnMiLCJtYXAiLCJ0cmFuc2FjdGlvbiIsInNlbmRlciIsInJlY2VpdmVyIiwidG9TdHJpbmciLCJ0aW1lc3RhbXAiLCJEYXRlIiwiTnVtYmVyIiwidG9Mb2NhbGVTdHJpbmciLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJjaGVja1dhbGxldENvbm5lY3RlZCIsImFjY291bnRzIiwicmVxdWVzdCIsIm1ldGhvZCIsImxlbmd0aCIsImNvbm5lY3RXYWxsZXQiLCJFcnJvciIsInNlbmRUcmFuc2FjdGlvbiIsInBhcnNlZEFtb3VudCIsInBhcnNlRXRoZXIiLCJwYXJhbXMiLCJmcm9tIiwidG8iLCJnYXMiLCJ0cmFuc2FjdGlvbkhhc2giLCJhZGRUb0Jsb2NrY2hhaW4iLCJoYXNoIiwiUHJvdmlkZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/context/TransactionContext.jsx\n"));

/***/ })

});