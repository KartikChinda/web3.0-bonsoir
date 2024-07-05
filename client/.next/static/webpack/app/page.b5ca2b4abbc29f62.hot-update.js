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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   TransactionContext: function() { return /* binding */ TransactionContext; },\n/* harmony export */   TransactionProvider: function() { return /* binding */ TransactionProvider; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ethers */ \"(app-pages-browser)/./node_modules/ethers/lib.esm/providers/provider-browser.js\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ethers */ \"(app-pages-browser)/./node_modules/ethers/lib.esm/contract/contract.js\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ethers */ \"(app-pages-browser)/./node_modules/ethers/lib.esm/utils/units.js\");\n/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/constants */ \"(app-pages-browser)/./utils/constants.js\");\n/* __next_internal_client_entry_do_not_use__ TransactionContext,TransactionProvider auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst TransactionContext = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createContext();\nif (true) {\n    const { ethereum: ethereum1 } = window;\n}\n// fecthing the contract\nconst getEthereumContract = async ()=>{\n    const provider = new ethers__WEBPACK_IMPORTED_MODULE_3__.BrowserProvider(ethereum);\n    const signer = await provider.getSigner();\n    const transactionContract = new ethers__WEBPACK_IMPORTED_MODULE_4__.Contract(_utils_constants__WEBPACK_IMPORTED_MODULE_2__.contractAddress, _utils_constants__WEBPACK_IMPORTED_MODULE_2__.contractABI, signer);\n    // console.log({\n    //     provider,\n    //     signer,\n    //     transactionContract\n    // })\n    return transactionContract;\n};\n// now, we need to call this function somewhere. So here we are essentially creating a wrapper for this transaction contract. \nconst TransactionProvider = (param)=>{\n    let { children } = param;\n    _s();\n    const [currentAccount, setcurrentAccount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [formData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        addressTo: \"\",\n        amount: \"\",\n        keyword: \"\",\n        message: \"\"\n    });\n    const handleChange = (e, name)=>{\n        // console.log(\"Inside handle change, changing value of name to \", name, e.target.value);\n        setFormData((prev)=>({\n                ...prev,\n                [name]: e.target.value\n            }));\n    };\n    // fetching all transactions \n    const getTransactions = async ()=>{\n        try {\n            if (!ethereum) return alert(\"Please install Metamask\");\n            const transactionContract = await getEthereumContract();\n            const transactionsList = await transactionContract.getAllTransactions();\n            console.log(transactionsList);\n        } catch (error) {\n            console.log(error);\n        }\n    };\n    // checking if metamask is connected. \n    const checkWalletConnected = async ()=>{\n        if (!ethereum) return alert(\"Please install Metamask.\");\n        const accounts = await ethereum.request({\n            method: \"eth_accounts\"\n        });\n        // checking that if we already have an account connected at the start of the render, we can already set the value of the account. \n        if (accounts.length > 0) {\n            setcurrentAccount(accounts[0]);\n        } else {\n            console.log(\"No accounts found\");\n        }\n        console.log(accounts);\n        getTransactions();\n    };\n    // retreiving the first waller. \n    const connectWallet = async ()=>{\n        try {\n            if (!ethereum) return alert(\"Please install Metamask.\");\n            const accounts = await ethereum.request({\n                method: \"eth_requestAccounts\"\n            });\n            setcurrentAccount(accounts[0]);\n        // console.log(currentAccount);\n        } catch (error) {\n            console.log(error);\n            throw new Error(\"No ethereum object has been found.\");\n        }\n    };\n    const sendTransaction = async ()=>{\n        try {\n            if (!ethereum) return alert(\"Please install Metamask.\");\n            // getting form data\n            const { addressTo, amount, keyword, message } = formData;\n            // knowing what contract to invoke \n            const transactionContract = await getEthereumContract();\n            // sim reason as to what is explained below, this passes your amount into GWEI hexadecimal amount. \n            console.log(\"Amount is: \", amount, \"type: \", typeof amount);\n            const parsedAmount = ethers__WEBPACK_IMPORTED_MODULE_5__.parseEther(amount);\n            console.log(\"This is the parsed amount: \", parsedAmount);\n            console.log(\"This is the parsed amount in hex: \", parsedAmount.toString(16));\n            // let's send shit mf\n            await ethereum.request({\n                method: \"eth_sendTransaction\",\n                params: [\n                    {\n                        from: currentAccount,\n                        to: addressTo,\n                        gas: \"0x5208\",\n                        value: parsedAmount.toString(16)\n                    }\n                ]\n            });\n            // adding to the blockchain \n            const transactionHash = await transactionContract.addToBlockchain(addressTo, parsedAmount, message, keyword);\n            getTransactions();\n            console.log(\"This is your transaction hash: \", transactionHash.hash);\n            if (true) window.reload();\n        } catch (error) {\n            console.log(error);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        checkWalletConnected();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TransactionContext.Provider, {\n        value: {\n            connectWallet,\n            currentAccount,\n            formData,\n            sendTransaction,\n            handleChange\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"D:\\\\leapOfFaith\\\\newage\\\\client\\\\app\\\\context\\\\TransactionContext.jsx\",\n        lineNumber: 137,\n        columnNumber: 9\n    }, undefined);\n};\n_s(TransactionProvider, \"mhU3BCmS1ygvsoX+g/dxJTRBdR4=\");\n_c = TransactionProvider;\nvar _c;\n$RefreshReg$(_c, \"TransactionProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb250ZXh0L1RyYW5zYWN0aW9uQ29udGV4dC5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFFbUQ7QUFDbkI7QUFDcUM7QUFFOUQsTUFBTU0sbUNBQXFCTiwwREFBbUIsR0FBRztBQUV4RCxJQUFJLElBQTZCLEVBQUU7SUFDL0IsTUFBTSxFQUFFUSxVQUFBQSxTQUFRLEVBQUUsR0FBR0M7QUFDekI7QUFFQSx3QkFBd0I7QUFFeEIsTUFBTUMsc0JBQXNCO0lBQ3hCLE1BQU1DLFdBQVcsSUFBSVIsbURBQXNCLENBQUNLO0lBQzVDLE1BQU1LLFNBQVMsTUFBTUYsU0FBU0csU0FBUztJQUN2QyxNQUFNQyxzQkFBc0IsSUFBSVosNENBQWUsQ0FBQ0UsNkRBQWVBLEVBQUVELHlEQUFXQSxFQUFFUztJQUU5RSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCwwQkFBMEI7SUFDMUIsS0FBSztJQUNMLE9BQU9FO0FBQ1g7QUFFQSw4SEFBOEg7QUFFdkgsTUFBTUUsc0JBQXNCO1FBQUMsRUFBRUMsUUFBUSxFQUFFOztJQUU1QyxNQUFNLENBQUNDLGdCQUFnQkMsa0JBQWtCLEdBQUduQiwrQ0FBUUEsQ0FBQztJQUVyRCxNQUFNLENBQUNvQixXQUFXQyxhQUFhLEdBQUdyQiwrQ0FBUUEsQ0FBQztJQUUzQyxNQUFNLENBQUNzQixVQUFVQyxZQUFZLEdBQUd2QiwrQ0FBUUEsQ0FBQztRQUNyQ3dCLFdBQVc7UUFBSUMsUUFBUTtRQUFJQyxTQUFTO1FBQUlDLFNBQVM7SUFDckQ7SUFFQSxNQUFNQyxlQUFlLENBQUNDLEdBQUdDO1FBQ3JCLHlGQUF5RjtRQUN6RlAsWUFBWSxDQUFDUSxPQUFVO2dCQUFFLEdBQUdBLElBQUk7Z0JBQUUsQ0FBQ0QsS0FBSyxFQUFFRCxFQUFFRyxNQUFNLENBQUNDLEtBQUs7WUFBQztJQUM3RDtJQUVBLDZCQUE2QjtJQUM3QixNQUFNQyxrQkFBa0I7UUFDcEIsSUFBSTtZQUNBLElBQUksQ0FBQzNCLFVBQVUsT0FBTzRCLE1BQU07WUFDNUIsTUFBTXJCLHNCQUFzQixNQUFNTDtZQUNsQyxNQUFNMkIsbUJBQW1CLE1BQU10QixvQkFBb0J1QixrQkFBa0I7WUFDckVDLFFBQVFDLEdBQUcsQ0FBQ0g7UUFFaEIsRUFBRSxPQUFPSSxPQUFPO1lBQ1pGLFFBQVFDLEdBQUcsQ0FBQ0M7UUFDaEI7SUFDSjtJQUVBLHNDQUFzQztJQUN0QyxNQUFNQyx1QkFBdUI7UUFDekIsSUFBSSxDQUFDbEMsVUFBVSxPQUFPNEIsTUFBTTtRQUM1QixNQUFNTyxXQUFXLE1BQU1uQyxTQUFTb0MsT0FBTyxDQUFDO1lBQUVDLFFBQVE7UUFBZTtRQUdqRSxrSUFBa0k7UUFDbEksSUFBSUYsU0FBU0csTUFBTSxHQUFHLEdBQUc7WUFDckIxQixrQkFBa0J1QixRQUFRLENBQUMsRUFBRTtRQUNqQyxPQUFPO1lBQ0hKLFFBQVFDLEdBQUcsQ0FBQztRQUNoQjtRQUNBRCxRQUFRQyxHQUFHLENBQUNHO1FBQ1pSO0lBQ0o7SUFFQSxnQ0FBZ0M7SUFDaEMsTUFBTVksZ0JBQWdCO1FBQ2xCLElBQUk7WUFDQSxJQUFJLENBQUN2QyxVQUFVLE9BQU80QixNQUFNO1lBQzVCLE1BQU1PLFdBQVcsTUFBTW5DLFNBQVNvQyxPQUFPLENBQUM7Z0JBQUVDLFFBQVE7WUFBc0I7WUFDeEV6QixrQkFBa0J1QixRQUFRLENBQUMsRUFBRTtRQUM3QiwrQkFBK0I7UUFDbkMsRUFBRSxPQUFPRixPQUFPO1lBQ1pGLFFBQVFDLEdBQUcsQ0FBQ0M7WUFDWixNQUFNLElBQUlPLE1BQU07UUFDcEI7SUFDSjtJQUlBLE1BQU1DLGtCQUFrQjtRQUNwQixJQUFJO1lBQ0EsSUFBSSxDQUFDekMsVUFBVSxPQUFPNEIsTUFBTTtZQUU1QixvQkFBb0I7WUFDcEIsTUFBTSxFQUFFWCxTQUFTLEVBQUVDLE1BQU0sRUFBRUMsT0FBTyxFQUFFQyxPQUFPLEVBQUUsR0FBR0w7WUFFaEQsbUNBQW1DO1lBQ25DLE1BQU1SLHNCQUFzQixNQUFNTDtZQUVsQyxtR0FBbUc7WUFDbkc2QixRQUFRQyxHQUFHLENBQUMsZUFBZWQsUUFBUSxVQUFVLE9BQVFBO1lBQ3JELE1BQU13QixlQUFlL0MsOENBQWlCLENBQUN1QjtZQUN2Q2EsUUFBUUMsR0FBRyxDQUFDLCtCQUErQlU7WUFDM0NYLFFBQVFDLEdBQUcsQ0FBQyxzQ0FBc0NVLGFBQWFFLFFBQVEsQ0FBQztZQUd4RSxxQkFBcUI7WUFDckIsTUFBTTVDLFNBQVNvQyxPQUFPLENBQUM7Z0JBQ25CQyxRQUFRO2dCQUNSUSxRQUFRO29CQUFDO3dCQUNMQyxNQUFNbkM7d0JBQ05vQyxJQUFJOUI7d0JBQ0orQixLQUFLO3dCQUNMdEIsT0FBT2dCLGFBQWFFLFFBQVEsQ0FBQztvQkFDakM7aUJBQUU7WUFDTjtZQUVBLDRCQUE0QjtZQUM1QixNQUFNSyxrQkFBa0IsTUFBTTFDLG9CQUFvQjJDLGVBQWUsQ0FBQ2pDLFdBQVd5QixjQUFjdEIsU0FBU0Q7WUFDcEdRO1lBQ0FJLFFBQVFDLEdBQUcsQ0FBQyxtQ0FBbUNpQixnQkFBZ0JFLElBQUk7WUFDbkUsSUFBSSxJQUE2QixFQUFFbEQsT0FBT21ELE1BQU07UUFHcEQsRUFBRSxPQUFPbkIsT0FBTztZQUNaRixRQUFRQyxHQUFHLENBQUNDO1FBRWhCO0lBQ0o7SUFFQXZDLGdEQUFTQSxDQUFDO1FBQ053QztJQUNKLEdBQUcsRUFBRTtJQUlMLHFCQUNJLDhEQUFDcEMsbUJBQW1CdUQsUUFBUTtRQUFDM0IsT0FBTztZQUFFYTtZQUFlNUI7WUFBZ0JJO1lBQVUwQjtZQUFpQnBCO1FBQWE7a0JBQ3hHWDs7Ozs7O0FBR2IsRUFBQztHQS9HWUQ7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbnRleHQvVHJhbnNhY3Rpb25Db250ZXh0LmpzeD8xNjkzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5cclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgZXRoZXJzIH0gZnJvbSAnZXRoZXJzJztcclxuaW1wb3J0IHsgY29udHJhY3RBQkksIGNvbnRyYWN0QWRkcmVzcyB9IGZyb20gXCIuLi8uLi91dGlscy9jb25zdGFudHNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBUcmFuc2FjdGlvbkNvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KCk7XHJcblxyXG5pZiAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgY29uc3QgeyBldGhlcmV1bSB9ID0gd2luZG93O1xyXG59XHJcblxyXG4vLyBmZWN0aGluZyB0aGUgY29udHJhY3RcclxuXHJcbmNvbnN0IGdldEV0aGVyZXVtQ29udHJhY3QgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zdCBwcm92aWRlciA9IG5ldyBldGhlcnMuQnJvd3NlclByb3ZpZGVyKGV0aGVyZXVtKVxyXG4gICAgY29uc3Qgc2lnbmVyID0gYXdhaXQgcHJvdmlkZXIuZ2V0U2lnbmVyKCk7XHJcbiAgICBjb25zdCB0cmFuc2FjdGlvbkNvbnRyYWN0ID0gbmV3IGV0aGVycy5Db250cmFjdChjb250cmFjdEFkZHJlc3MsIGNvbnRyYWN0QUJJLCBzaWduZXIpO1xyXG5cclxuICAgIC8vIGNvbnNvbGUubG9nKHtcclxuICAgIC8vICAgICBwcm92aWRlcixcclxuICAgIC8vICAgICBzaWduZXIsXHJcbiAgICAvLyAgICAgdHJhbnNhY3Rpb25Db250cmFjdFxyXG4gICAgLy8gfSlcclxuICAgIHJldHVybiB0cmFuc2FjdGlvbkNvbnRyYWN0O1xyXG59XHJcblxyXG4vLyBub3csIHdlIG5lZWQgdG8gY2FsbCB0aGlzIGZ1bmN0aW9uIHNvbWV3aGVyZS4gU28gaGVyZSB3ZSBhcmUgZXNzZW50aWFsbHkgY3JlYXRpbmcgYSB3cmFwcGVyIGZvciB0aGlzIHRyYW5zYWN0aW9uIGNvbnRyYWN0LiBcclxuXHJcbmV4cG9ydCBjb25zdCBUcmFuc2FjdGlvblByb3ZpZGVyID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xyXG5cclxuICAgIGNvbnN0IFtjdXJyZW50QWNjb3VudCwgc2V0Y3VycmVudEFjY291bnRdID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG4gICAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgICBjb25zdCBbZm9ybURhdGEsIHNldEZvcm1EYXRhXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICBhZGRyZXNzVG86IFwiXCIsIGFtb3VudDogXCJcIiwga2V5d29yZDogXCJcIiwgbWVzc2FnZTogXCJcIlxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGUsIG5hbWUpID0+IHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIkluc2lkZSBoYW5kbGUgY2hhbmdlLCBjaGFuZ2luZyB2YWx1ZSBvZiBuYW1lIHRvIFwiLCBuYW1lLCBlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgc2V0Rm9ybURhdGEoKHByZXYpID0+ICh7IC4uLnByZXYsIFtuYW1lXTogZS50YXJnZXQudmFsdWUgfSkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGZldGNoaW5nIGFsbCB0cmFuc2FjdGlvbnMgXHJcbiAgICBjb25zdCBnZXRUcmFuc2FjdGlvbnMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKCFldGhlcmV1bSkgcmV0dXJuIGFsZXJ0KFwiUGxlYXNlIGluc3RhbGwgTWV0YW1hc2tcIik7XHJcbiAgICAgICAgICAgIGNvbnN0IHRyYW5zYWN0aW9uQ29udHJhY3QgPSBhd2FpdCBnZXRFdGhlcmV1bUNvbnRyYWN0KCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHRyYW5zYWN0aW9uc0xpc3QgPSBhd2FpdCB0cmFuc2FjdGlvbkNvbnRyYWN0LmdldEFsbFRyYW5zYWN0aW9ucygpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0cmFuc2FjdGlvbnNMaXN0KTtcclxuXHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBjaGVja2luZyBpZiBtZXRhbWFzayBpcyBjb25uZWN0ZWQuIFxyXG4gICAgY29uc3QgY2hlY2tXYWxsZXRDb25uZWN0ZWQgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgaWYgKCFldGhlcmV1bSkgcmV0dXJuIGFsZXJ0KFwiUGxlYXNlIGluc3RhbGwgTWV0YW1hc2suXCIpO1xyXG4gICAgICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgZXRoZXJldW0ucmVxdWVzdCh7IG1ldGhvZDogJ2V0aF9hY2NvdW50cycgfSk7XHJcblxyXG5cclxuICAgICAgICAvLyBjaGVja2luZyB0aGF0IGlmIHdlIGFscmVhZHkgaGF2ZSBhbiBhY2NvdW50IGNvbm5lY3RlZCBhdCB0aGUgc3RhcnQgb2YgdGhlIHJlbmRlciwgd2UgY2FuIGFscmVhZHkgc2V0IHRoZSB2YWx1ZSBvZiB0aGUgYWNjb3VudC4gXHJcbiAgICAgICAgaWYgKGFjY291bnRzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgc2V0Y3VycmVudEFjY291bnQoYWNjb3VudHNbMF0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTm8gYWNjb3VudHMgZm91bmRcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGFjY291bnRzKTtcclxuICAgICAgICBnZXRUcmFuc2FjdGlvbnMoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyByZXRyZWl2aW5nIHRoZSBmaXJzdCB3YWxsZXIuIFxyXG4gICAgY29uc3QgY29ubmVjdFdhbGxldCA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAoIWV0aGVyZXVtKSByZXR1cm4gYWxlcnQoXCJQbGVhc2UgaW5zdGFsbCBNZXRhbWFzay5cIik7XHJcbiAgICAgICAgICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgZXRoZXJldW0ucmVxdWVzdCh7IG1ldGhvZDogJ2V0aF9yZXF1ZXN0QWNjb3VudHMnIH0pO1xyXG4gICAgICAgICAgICBzZXRjdXJyZW50QWNjb3VudChhY2NvdW50c1swXSk7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGN1cnJlbnRBY2NvdW50KTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk5vIGV0aGVyZXVtIG9iamVjdCBoYXMgYmVlbiBmb3VuZC5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgY29uc3Qgc2VuZFRyYW5zYWN0aW9uID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmICghZXRoZXJldW0pIHJldHVybiBhbGVydChcIlBsZWFzZSBpbnN0YWxsIE1ldGFtYXNrLlwiKTtcclxuXHJcbiAgICAgICAgICAgIC8vIGdldHRpbmcgZm9ybSBkYXRhXHJcbiAgICAgICAgICAgIGNvbnN0IHsgYWRkcmVzc1RvLCBhbW91bnQsIGtleXdvcmQsIG1lc3NhZ2UgfSA9IGZvcm1EYXRhO1xyXG5cclxuICAgICAgICAgICAgLy8ga25vd2luZyB3aGF0IGNvbnRyYWN0IHRvIGludm9rZSBcclxuICAgICAgICAgICAgY29uc3QgdHJhbnNhY3Rpb25Db250cmFjdCA9IGF3YWl0IGdldEV0aGVyZXVtQ29udHJhY3QoKTtcclxuXHJcbiAgICAgICAgICAgIC8vIHNpbSByZWFzb24gYXMgdG8gd2hhdCBpcyBleHBsYWluZWQgYmVsb3csIHRoaXMgcGFzc2VzIHlvdXIgYW1vdW50IGludG8gR1dFSSBoZXhhZGVjaW1hbCBhbW91bnQuIFxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkFtb3VudCBpczogXCIsIGFtb3VudCwgXCJ0eXBlOiBcIiwgdHlwZW9mIChhbW91bnQpKTtcclxuICAgICAgICAgICAgY29uc3QgcGFyc2VkQW1vdW50ID0gZXRoZXJzLnBhcnNlRXRoZXIoYW1vdW50KTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJUaGlzIGlzIHRoZSBwYXJzZWQgYW1vdW50OiBcIiwgcGFyc2VkQW1vdW50KTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJUaGlzIGlzIHRoZSBwYXJzZWQgYW1vdW50IGluIGhleDogXCIsIHBhcnNlZEFtb3VudC50b1N0cmluZygxNikpO1xyXG5cclxuXHJcbiAgICAgICAgICAgIC8vIGxldCdzIHNlbmQgc2hpdCBtZlxyXG4gICAgICAgICAgICBhd2FpdCBldGhlcmV1bS5yZXF1ZXN0KHtcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogJ2V0aF9zZW5kVHJhbnNhY3Rpb24nLFxyXG4gICAgICAgICAgICAgICAgcGFyYW1zOiBbe1xyXG4gICAgICAgICAgICAgICAgICAgIGZyb206IGN1cnJlbnRBY2NvdW50LFxyXG4gICAgICAgICAgICAgICAgICAgIHRvOiBhZGRyZXNzVG8sXHJcbiAgICAgICAgICAgICAgICAgICAgZ2FzOiAnMHg1MjA4JywgLy9zbyBoZXJlJ3MgdGhlIHRlYSBhYm91dCB0aGlzLiBHYXMgaGVyZSBpcyB0aGUgYW1vdW50IG9mIG1vbmV5IHdlIHdhbnQgdG8gc3BlbmQgaW4gdGhpcyB0cmFuc2FjdGlvbi4gQWxzbywgYWxsIG9mIHRoaXMgaXMgd3JpdHRlbiBpbiBoZXhhZGVjaW1hbC4gTm93LCB0aGlzIGluIGRlY2ltYWwgZm9ybWF0IGlzIDIxMDAwLiBCdXQgdGhpcyBpcyBpbiBHV0VJLCBub3QgRVRILiBHV0VJIGlzIGEgc3VidW5pdCBvZiBFVEgsIGxpa2UgY2VudCBpcyB0byBhIGRvbGxhciwgYW5kIDIxSyBnd2VpIGlzIDAuMDAwMDIxIGV0aC4gXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHBhcnNlZEFtb3VudC50b1N0cmluZygxNiksXHJcbiAgICAgICAgICAgICAgICB9XVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIC8vIGFkZGluZyB0byB0aGUgYmxvY2tjaGFpbiBcclxuICAgICAgICAgICAgY29uc3QgdHJhbnNhY3Rpb25IYXNoID0gYXdhaXQgdHJhbnNhY3Rpb25Db250cmFjdC5hZGRUb0Jsb2NrY2hhaW4oYWRkcmVzc1RvLCBwYXJzZWRBbW91bnQsIG1lc3NhZ2UsIGtleXdvcmQpO1xyXG4gICAgICAgICAgICBnZXRUcmFuc2FjdGlvbnMoKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJUaGlzIGlzIHlvdXIgdHJhbnNhY3Rpb24gaGFzaDogXCIsIHRyYW5zYWN0aW9uSGFzaC5oYXNoKTtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIpIHdpbmRvdy5yZWxvYWQoKTtcclxuXHJcblxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY2hlY2tXYWxsZXRDb25uZWN0ZWQoKTtcclxuICAgIH0sIFtdKVxyXG5cclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8VHJhbnNhY3Rpb25Db250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IGNvbm5lY3RXYWxsZXQsIGN1cnJlbnRBY2NvdW50LCBmb3JtRGF0YSwgc2VuZFRyYW5zYWN0aW9uLCBoYW5kbGVDaGFuZ2UgfX0+XHJcbiAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICA8L1RyYW5zYWN0aW9uQ29udGV4dC5Qcm92aWRlcj5cclxuICAgIClcclxufSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiZXRoZXJzIiwiY29udHJhY3RBQkkiLCJjb250cmFjdEFkZHJlc3MiLCJUcmFuc2FjdGlvbkNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiZXRoZXJldW0iLCJ3aW5kb3ciLCJnZXRFdGhlcmV1bUNvbnRyYWN0IiwicHJvdmlkZXIiLCJCcm93c2VyUHJvdmlkZXIiLCJzaWduZXIiLCJnZXRTaWduZXIiLCJ0cmFuc2FjdGlvbkNvbnRyYWN0IiwiQ29udHJhY3QiLCJUcmFuc2FjdGlvblByb3ZpZGVyIiwiY2hpbGRyZW4iLCJjdXJyZW50QWNjb3VudCIsInNldGN1cnJlbnRBY2NvdW50IiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwiZm9ybURhdGEiLCJzZXRGb3JtRGF0YSIsImFkZHJlc3NUbyIsImFtb3VudCIsImtleXdvcmQiLCJtZXNzYWdlIiwiaGFuZGxlQ2hhbmdlIiwiZSIsIm5hbWUiLCJwcmV2IiwidGFyZ2V0IiwidmFsdWUiLCJnZXRUcmFuc2FjdGlvbnMiLCJhbGVydCIsInRyYW5zYWN0aW9uc0xpc3QiLCJnZXRBbGxUcmFuc2FjdGlvbnMiLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJjaGVja1dhbGxldENvbm5lY3RlZCIsImFjY291bnRzIiwicmVxdWVzdCIsIm1ldGhvZCIsImxlbmd0aCIsImNvbm5lY3RXYWxsZXQiLCJFcnJvciIsInNlbmRUcmFuc2FjdGlvbiIsInBhcnNlZEFtb3VudCIsInBhcnNlRXRoZXIiLCJ0b1N0cmluZyIsInBhcmFtcyIsImZyb20iLCJ0byIsImdhcyIsInRyYW5zYWN0aW9uSGFzaCIsImFkZFRvQmxvY2tjaGFpbiIsImhhc2giLCJyZWxvYWQiLCJQcm92aWRlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/context/TransactionContext.jsx\n"));

/***/ })

});