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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   TransactionContext: function() { return /* binding */ TransactionContext; },\n/* harmony export */   TransactionProvider: function() { return /* binding */ TransactionProvider; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ethers */ \"(app-pages-browser)/./node_modules/ethers/lib.esm/providers/provider-browser.js\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ethers */ \"(app-pages-browser)/./node_modules/ethers/lib.esm/contract/contract.js\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ethers */ \"(app-pages-browser)/./node_modules/ethers/lib.esm/utils/units.js\");\n/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/constants */ \"(app-pages-browser)/./utils/constants.js\");\n/* __next_internal_client_entry_do_not_use__ TransactionContext,TransactionProvider auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst TransactionContext = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createContext();\nif (true) {\n    const { ethereum: ethereum1 } = window;\n}\n// fecthing the contract\nconst getEthereumContract = async ()=>{\n    const provider = new ethers__WEBPACK_IMPORTED_MODULE_3__.BrowserProvider(ethereum);\n    const signer = await provider.getSigner();\n    const transactionContract = new ethers__WEBPACK_IMPORTED_MODULE_4__.Contract(_utils_constants__WEBPACK_IMPORTED_MODULE_2__.contractAddress, _utils_constants__WEBPACK_IMPORTED_MODULE_2__.contractABI, signer);\n    // console.log({\n    //     provider,\n    //     signer,\n    //     transactionContract\n    // })\n    return transactionContract;\n};\n// now, we need to call this function somewhere. So here we are essentially creating a wrapper for this transaction contract. \nconst TransactionProvider = (param)=>{\n    let { children } = param;\n    _s();\n    const [currentAccount, setcurrentAccount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [formData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        addressTo: \"\",\n        amount: \"\",\n        keyword: \"\",\n        message: \"\"\n    });\n    const handleChange = (e, name)=>{\n        // console.log(\"Inside handle change, changing value of name to \", name, e.target.value);\n        setFormData((prev)=>({\n                ...prev,\n                [name]: e.target.value\n            }));\n    };\n    // checking if metamask is connected. \n    const checkWalletConnected = async ()=>{\n        if (!ethereum) return alert(\"Please install Metamask.\");\n        const accounts = await ethereum.request({\n            method: \"eth_accounts\"\n        });\n        // checking that if we already have an account connected at the start of the render, we can already set the value of the account. \n        if (accounts.length > 0) {\n            setcurrentAccount(accounts[0]);\n        } else {\n            console.log(\"No accounts found\");\n        }\n        console.log(accounts);\n    };\n    // retreiving the first waller. \n    const connectWallet = async ()=>{\n        try {\n            if (!ethereum) return alert(\"Please install Metamask.\");\n            const accounts = await ethereum.request({\n                method: \"eth_requestAccounts\"\n            });\n            setcurrentAccount(accounts[0]);\n        // console.log(currentAccount);\n        } catch (error) {\n            console.log(error);\n            throw new Error(\"No ethereum object has been found.\");\n        }\n    };\n    const sendTransaction = async ()=>{\n        try {\n            if (!ethereum) return alert(\"Please install Metamask.\");\n            // getting form data\n            const { addressTo, amount, keyword, message } = formData;\n            // knowing what contract to invoke \n            const transactionContract = getEthereumContract();\n            // sim reason as to what is explained below, this passes your amount into GWEI hexadecimal amount. \n            console.log(\"Amount is: \", amount, \"type: \", typeof amount);\n            const parsedAmount = ethers__WEBPACK_IMPORTED_MODULE_5__.parseEther(amount);\n            console.log(\"This is the parsed amount: \", parsedAmount);\n            console.log(\"This is the parsed amount in hex: \", parsedAmount._hex);\n            // let's send shit mf\n            await ethereum.request({\n                method: \"eth_sendTransaction\",\n                params: [\n                    {\n                        from: currentAccount,\n                        to: addressTo,\n                        gas: \"0x5208\",\n                        value: parsedAmount._hex\n                    }\n                ]\n            });\n            // adding to the blockchain \n            const transactionHash = await transactionContract.addToBlockchain(addressTo, parsedAmount, message, keyword);\n            console.log(\"This is your transaction hash: \", transactionHash.hash);\n        } catch (error) {\n            console.log(error);\n            throw new Error(\"No ethereum object has been found.\");\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        checkWalletConnected();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TransactionContext.Provider, {\n        value: {\n            connectWallet,\n            currentAccount,\n            formData,\n            sendTransaction,\n            handleChange\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"D:\\\\leapOfFaith\\\\newage\\\\client\\\\app\\\\context\\\\TransactionContext.jsx\",\n        lineNumber: 115,\n        columnNumber: 9\n    }, undefined);\n};\n_s(TransactionProvider, \"vq5xGaRr9Q09xZnYDHp1/YQ/iUI=\");\n_c = TransactionProvider;\nvar _c;\n$RefreshReg$(_c, \"TransactionProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb250ZXh0L1RyYW5zYWN0aW9uQ29udGV4dC5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFFbUQ7QUFDbkI7QUFDcUM7QUFFOUQsTUFBTU0sbUNBQXFCTiwwREFBbUIsR0FBRztBQUV4RCxJQUFJLElBQTZCLEVBQUU7SUFDL0IsTUFBTSxFQUFFUSxVQUFBQSxTQUFRLEVBQUUsR0FBR0M7QUFDekI7QUFFQSx3QkFBd0I7QUFFeEIsTUFBTUMsc0JBQXNCO0lBQ3hCLE1BQU1DLFdBQVcsSUFBSVIsbURBQXNCLENBQUNLO0lBQzVDLE1BQU1LLFNBQVMsTUFBTUYsU0FBU0csU0FBUztJQUN2QyxNQUFNQyxzQkFBc0IsSUFBSVosNENBQWUsQ0FBQ0UsNkRBQWVBLEVBQUVELHlEQUFXQSxFQUFFUztJQUU5RSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCwwQkFBMEI7SUFDMUIsS0FBSztJQUNMLE9BQU9FO0FBQ1g7QUFFQSw4SEFBOEg7QUFFdkgsTUFBTUUsc0JBQXNCO1FBQUMsRUFBRUMsUUFBUSxFQUFFOztJQUU1QyxNQUFNLENBQUNDLGdCQUFnQkMsa0JBQWtCLEdBQUduQiwrQ0FBUUEsQ0FBQztJQUVyRCxNQUFNLENBQUNvQixVQUFVQyxZQUFZLEdBQUdyQiwrQ0FBUUEsQ0FBQztRQUNyQ3NCLFdBQVc7UUFBSUMsUUFBUTtRQUFJQyxTQUFTO1FBQUlDLFNBQVM7SUFDckQ7SUFFQSxNQUFNQyxlQUFlLENBQUNDLEdBQUdDO1FBQ3JCLHlGQUF5RjtRQUN6RlAsWUFBWSxDQUFDUSxPQUFVO2dCQUFFLEdBQUdBLElBQUk7Z0JBQUUsQ0FBQ0QsS0FBSyxFQUFFRCxFQUFFRyxNQUFNLENBQUNDLEtBQUs7WUFBQztJQUM3RDtJQUVBLHNDQUFzQztJQUN0QyxNQUFNQyx1QkFBdUI7UUFDekIsSUFBSSxDQUFDekIsVUFBVSxPQUFPMEIsTUFBTTtRQUM1QixNQUFNQyxXQUFXLE1BQU0zQixTQUFTNEIsT0FBTyxDQUFDO1lBQUVDLFFBQVE7UUFBZTtRQUNqRSxrSUFBa0k7UUFDbEksSUFBSUYsU0FBU0csTUFBTSxHQUFHLEdBQUc7WUFDckJsQixrQkFBa0JlLFFBQVEsQ0FBQyxFQUFFO1FBQ2pDLE9BQU87WUFDSEksUUFBUUMsR0FBRyxDQUFDO1FBQ2hCO1FBQ0FELFFBQVFDLEdBQUcsQ0FBQ0w7SUFDaEI7SUFFQSxnQ0FBZ0M7SUFDaEMsTUFBTU0sZ0JBQWdCO1FBQ2xCLElBQUk7WUFDQSxJQUFJLENBQUNqQyxVQUFVLE9BQU8wQixNQUFNO1lBQzVCLE1BQU1DLFdBQVcsTUFBTTNCLFNBQVM0QixPQUFPLENBQUM7Z0JBQUVDLFFBQVE7WUFBc0I7WUFDeEVqQixrQkFBa0JlLFFBQVEsQ0FBQyxFQUFFO1FBQzdCLCtCQUErQjtRQUNuQyxFQUFFLE9BQU9PLE9BQU87WUFDWkgsUUFBUUMsR0FBRyxDQUFDRTtZQUNaLE1BQU0sSUFBSUMsTUFBTTtRQUNwQjtJQUNKO0lBRUEsTUFBTUMsa0JBQWtCO1FBQ3BCLElBQUk7WUFDQSxJQUFJLENBQUNwQyxVQUFVLE9BQU8wQixNQUFNO1lBRTVCLG9CQUFvQjtZQUNwQixNQUFNLEVBQUVYLFNBQVMsRUFBRUMsTUFBTSxFQUFFQyxPQUFPLEVBQUVDLE9BQU8sRUFBRSxHQUFHTDtZQUVoRCxtQ0FBbUM7WUFDbkMsTUFBTU4sc0JBQXNCTDtZQUU1QixtR0FBbUc7WUFDbkc2QixRQUFRQyxHQUFHLENBQUMsZUFBZWhCLFFBQVEsVUFBVSxPQUFRQTtZQUNyRCxNQUFNcUIsZUFBZTFDLDhDQUFpQixDQUFDcUI7WUFDdkNlLFFBQVFDLEdBQUcsQ0FBQywrQkFBK0JLO1lBQzNDTixRQUFRQyxHQUFHLENBQUMsc0NBQXNDSyxhQUFhRSxJQUFJO1lBR25FLHFCQUFxQjtZQUNyQixNQUFNdkMsU0FBUzRCLE9BQU8sQ0FBQztnQkFDbkJDLFFBQVE7Z0JBQ1JXLFFBQVE7b0JBQUM7d0JBQ0xDLE1BQU05Qjt3QkFDTitCLElBQUkzQjt3QkFDSjRCLEtBQUs7d0JBQ0xuQixPQUFPYSxhQUFhRSxJQUFJO29CQUM1QjtpQkFBRTtZQUNOO1lBRUEsNEJBQTRCO1lBQzVCLE1BQU1LLGtCQUFrQixNQUFNckMsb0JBQW9Cc0MsZUFBZSxDQUFDOUIsV0FBV3NCLGNBQWNuQixTQUFTRDtZQUVwR2MsUUFBUUMsR0FBRyxDQUFDLG1DQUFtQ1ksZ0JBQWdCRSxJQUFJO1FBRXZFLEVBQUUsT0FBT1osT0FBTztZQUNaSCxRQUFRQyxHQUFHLENBQUNFO1lBQ1osTUFBTSxJQUFJQyxNQUFNO1FBQ3BCO0lBQ0o7SUFFQXpDLGdEQUFTQSxDQUFDO1FBQ04rQjtJQUNKLEdBQUcsRUFBRTtJQUlMLHFCQUNJLDhEQUFDM0IsbUJBQW1CaUQsUUFBUTtRQUFDdkIsT0FBTztZQUFFUztZQUFldEI7WUFBZ0JFO1lBQVV1QjtZQUFpQmpCO1FBQWE7a0JBQ3hHVDs7Ozs7O0FBR2IsRUFBQztHQXpGWUQ7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbnRleHQvVHJhbnNhY3Rpb25Db250ZXh0LmpzeD8xNjkzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5cclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgZXRoZXJzIH0gZnJvbSAnZXRoZXJzJztcclxuaW1wb3J0IHsgY29udHJhY3RBQkksIGNvbnRyYWN0QWRkcmVzcyB9IGZyb20gXCIuLi8uLi91dGlscy9jb25zdGFudHNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBUcmFuc2FjdGlvbkNvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KCk7XHJcblxyXG5pZiAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgY29uc3QgeyBldGhlcmV1bSB9ID0gd2luZG93O1xyXG59XHJcblxyXG4vLyBmZWN0aGluZyB0aGUgY29udHJhY3RcclxuXHJcbmNvbnN0IGdldEV0aGVyZXVtQ29udHJhY3QgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zdCBwcm92aWRlciA9IG5ldyBldGhlcnMuQnJvd3NlclByb3ZpZGVyKGV0aGVyZXVtKVxyXG4gICAgY29uc3Qgc2lnbmVyID0gYXdhaXQgcHJvdmlkZXIuZ2V0U2lnbmVyKCk7XHJcbiAgICBjb25zdCB0cmFuc2FjdGlvbkNvbnRyYWN0ID0gbmV3IGV0aGVycy5Db250cmFjdChjb250cmFjdEFkZHJlc3MsIGNvbnRyYWN0QUJJLCBzaWduZXIpO1xyXG5cclxuICAgIC8vIGNvbnNvbGUubG9nKHtcclxuICAgIC8vICAgICBwcm92aWRlcixcclxuICAgIC8vICAgICBzaWduZXIsXHJcbiAgICAvLyAgICAgdHJhbnNhY3Rpb25Db250cmFjdFxyXG4gICAgLy8gfSlcclxuICAgIHJldHVybiB0cmFuc2FjdGlvbkNvbnRyYWN0O1xyXG59XHJcblxyXG4vLyBub3csIHdlIG5lZWQgdG8gY2FsbCB0aGlzIGZ1bmN0aW9uIHNvbWV3aGVyZS4gU28gaGVyZSB3ZSBhcmUgZXNzZW50aWFsbHkgY3JlYXRpbmcgYSB3cmFwcGVyIGZvciB0aGlzIHRyYW5zYWN0aW9uIGNvbnRyYWN0LiBcclxuXHJcbmV4cG9ydCBjb25zdCBUcmFuc2FjdGlvblByb3ZpZGVyID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xyXG5cclxuICAgIGNvbnN0IFtjdXJyZW50QWNjb3VudCwgc2V0Y3VycmVudEFjY291bnRdID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG4gICAgY29uc3QgW2Zvcm1EYXRhLCBzZXRGb3JtRGF0YV0gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgYWRkcmVzc1RvOiBcIlwiLCBhbW91bnQ6IFwiXCIsIGtleXdvcmQ6IFwiXCIsIG1lc3NhZ2U6IFwiXCJcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlLCBuYW1lKSA9PiB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJJbnNpZGUgaGFuZGxlIGNoYW5nZSwgY2hhbmdpbmcgdmFsdWUgb2YgbmFtZSB0byBcIiwgbmFtZSwgZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgIHNldEZvcm1EYXRhKChwcmV2KSA9PiAoeyAuLi5wcmV2LCBbbmFtZV06IGUudGFyZ2V0LnZhbHVlIH0pKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBjaGVja2luZyBpZiBtZXRhbWFzayBpcyBjb25uZWN0ZWQuIFxyXG4gICAgY29uc3QgY2hlY2tXYWxsZXRDb25uZWN0ZWQgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgaWYgKCFldGhlcmV1bSkgcmV0dXJuIGFsZXJ0KFwiUGxlYXNlIGluc3RhbGwgTWV0YW1hc2suXCIpO1xyXG4gICAgICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgZXRoZXJldW0ucmVxdWVzdCh7IG1ldGhvZDogJ2V0aF9hY2NvdW50cycgfSk7XHJcbiAgICAgICAgLy8gY2hlY2tpbmcgdGhhdCBpZiB3ZSBhbHJlYWR5IGhhdmUgYW4gYWNjb3VudCBjb25uZWN0ZWQgYXQgdGhlIHN0YXJ0IG9mIHRoZSByZW5kZXIsIHdlIGNhbiBhbHJlYWR5IHNldCB0aGUgdmFsdWUgb2YgdGhlIGFjY291bnQuIFxyXG4gICAgICAgIGlmIChhY2NvdW50cy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIHNldGN1cnJlbnRBY2NvdW50KGFjY291bnRzWzBdKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIk5vIGFjY291bnRzIGZvdW5kXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmxvZyhhY2NvdW50cyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gcmV0cmVpdmluZyB0aGUgZmlyc3Qgd2FsbGVyLiBcclxuICAgIGNvbnN0IGNvbm5lY3RXYWxsZXQgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKCFldGhlcmV1bSkgcmV0dXJuIGFsZXJ0KFwiUGxlYXNlIGluc3RhbGwgTWV0YW1hc2suXCIpO1xyXG4gICAgICAgICAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IGV0aGVyZXVtLnJlcXVlc3QoeyBtZXRob2Q6ICdldGhfcmVxdWVzdEFjY291bnRzJyB9KTtcclxuICAgICAgICAgICAgc2V0Y3VycmVudEFjY291bnQoYWNjb3VudHNbMF0pO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhjdXJyZW50QWNjb3VudCk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJObyBldGhlcmV1bSBvYmplY3QgaGFzIGJlZW4gZm91bmQuXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzZW5kVHJhbnNhY3Rpb24gPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKCFldGhlcmV1bSkgcmV0dXJuIGFsZXJ0KFwiUGxlYXNlIGluc3RhbGwgTWV0YW1hc2suXCIpO1xyXG5cclxuICAgICAgICAgICAgLy8gZ2V0dGluZyBmb3JtIGRhdGFcclxuICAgICAgICAgICAgY29uc3QgeyBhZGRyZXNzVG8sIGFtb3VudCwga2V5d29yZCwgbWVzc2FnZSB9ID0gZm9ybURhdGE7XHJcblxyXG4gICAgICAgICAgICAvLyBrbm93aW5nIHdoYXQgY29udHJhY3QgdG8gaW52b2tlIFxyXG4gICAgICAgICAgICBjb25zdCB0cmFuc2FjdGlvbkNvbnRyYWN0ID0gZ2V0RXRoZXJldW1Db250cmFjdCgpO1xyXG5cclxuICAgICAgICAgICAgLy8gc2ltIHJlYXNvbiBhcyB0byB3aGF0IGlzIGV4cGxhaW5lZCBiZWxvdywgdGhpcyBwYXNzZXMgeW91ciBhbW91bnQgaW50byBHV0VJIGhleGFkZWNpbWFsIGFtb3VudC4gXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQW1vdW50IGlzOiBcIiwgYW1vdW50LCBcInR5cGU6IFwiLCB0eXBlb2YgKGFtb3VudCkpO1xyXG4gICAgICAgICAgICBjb25zdCBwYXJzZWRBbW91bnQgPSBldGhlcnMucGFyc2VFdGhlcihhbW91bnQpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlRoaXMgaXMgdGhlIHBhcnNlZCBhbW91bnQ6IFwiLCBwYXJzZWRBbW91bnQpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlRoaXMgaXMgdGhlIHBhcnNlZCBhbW91bnQgaW4gaGV4OiBcIiwgcGFyc2VkQW1vdW50Ll9oZXgpO1xyXG5cclxuXHJcbiAgICAgICAgICAgIC8vIGxldCdzIHNlbmQgc2hpdCBtZlxyXG4gICAgICAgICAgICBhd2FpdCBldGhlcmV1bS5yZXF1ZXN0KHtcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogJ2V0aF9zZW5kVHJhbnNhY3Rpb24nLFxyXG4gICAgICAgICAgICAgICAgcGFyYW1zOiBbe1xyXG4gICAgICAgICAgICAgICAgICAgIGZyb206IGN1cnJlbnRBY2NvdW50LFxyXG4gICAgICAgICAgICAgICAgICAgIHRvOiBhZGRyZXNzVG8sXHJcbiAgICAgICAgICAgICAgICAgICAgZ2FzOiAnMHg1MjA4JywgLy9zbyBoZXJlJ3MgdGhlIHRlYSBhYm91dCB0aGlzLiBHYXMgaGVyZSBpcyB0aGUgYW1vdW50IG9mIG1vbmV5IHdlIHdhbnQgdG8gc3BlbmQgaW4gdGhpcyB0cmFuc2FjdGlvbi4gQWxzbywgYWxsIG9mIHRoaXMgaXMgd3JpdHRlbiBpbiBoZXhhZGVjaW1hbC4gTm93LCB0aGlzIGluIGRlY2ltYWwgZm9ybWF0IGlzIDIxMDAwLiBCdXQgdGhpcyBpcyBpbiBHV0VJLCBub3QgRVRILiBHV0VJIGlzIGEgc3VidW5pdCBvZiBFVEgsIGxpa2UgY2VudCBpcyB0byBhIGRvbGxhciwgYW5kIDIxSyBnd2VpIGlzIDAuMDAwMDIxIGV0aC4gXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHBhcnNlZEFtb3VudC5faGV4LFxyXG4gICAgICAgICAgICAgICAgfV1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAvLyBhZGRpbmcgdG8gdGhlIGJsb2NrY2hhaW4gXHJcbiAgICAgICAgICAgIGNvbnN0IHRyYW5zYWN0aW9uSGFzaCA9IGF3YWl0IHRyYW5zYWN0aW9uQ29udHJhY3QuYWRkVG9CbG9ja2NoYWluKGFkZHJlc3NUbywgcGFyc2VkQW1vdW50LCBtZXNzYWdlLCBrZXl3b3JkKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVGhpcyBpcyB5b3VyIHRyYW5zYWN0aW9uIGhhc2g6IFwiLCB0cmFuc2FjdGlvbkhhc2guaGFzaCk7XHJcblxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTm8gZXRoZXJldW0gb2JqZWN0IGhhcyBiZWVuIGZvdW5kLlwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjaGVja1dhbGxldENvbm5lY3RlZCgpO1xyXG4gICAgfSwgW10pXHJcblxyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxUcmFuc2FjdGlvbkNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgY29ubmVjdFdhbGxldCwgY3VycmVudEFjY291bnQsIGZvcm1EYXRhLCBzZW5kVHJhbnNhY3Rpb24sIGhhbmRsZUNoYW5nZSB9fT5cclxuICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgIDwvVHJhbnNhY3Rpb25Db250ZXh0LlByb3ZpZGVyPlxyXG4gICAgKVxyXG59Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJldGhlcnMiLCJjb250cmFjdEFCSSIsImNvbnRyYWN0QWRkcmVzcyIsIlRyYW5zYWN0aW9uQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJldGhlcmV1bSIsIndpbmRvdyIsImdldEV0aGVyZXVtQ29udHJhY3QiLCJwcm92aWRlciIsIkJyb3dzZXJQcm92aWRlciIsInNpZ25lciIsImdldFNpZ25lciIsInRyYW5zYWN0aW9uQ29udHJhY3QiLCJDb250cmFjdCIsIlRyYW5zYWN0aW9uUHJvdmlkZXIiLCJjaGlsZHJlbiIsImN1cnJlbnRBY2NvdW50Iiwic2V0Y3VycmVudEFjY291bnQiLCJmb3JtRGF0YSIsInNldEZvcm1EYXRhIiwiYWRkcmVzc1RvIiwiYW1vdW50Iiwia2V5d29yZCIsIm1lc3NhZ2UiLCJoYW5kbGVDaGFuZ2UiLCJlIiwibmFtZSIsInByZXYiLCJ0YXJnZXQiLCJ2YWx1ZSIsImNoZWNrV2FsbGV0Q29ubmVjdGVkIiwiYWxlcnQiLCJhY2NvdW50cyIsInJlcXVlc3QiLCJtZXRob2QiLCJsZW5ndGgiLCJjb25zb2xlIiwibG9nIiwiY29ubmVjdFdhbGxldCIsImVycm9yIiwiRXJyb3IiLCJzZW5kVHJhbnNhY3Rpb24iLCJwYXJzZWRBbW91bnQiLCJwYXJzZUV0aGVyIiwiX2hleCIsInBhcmFtcyIsImZyb20iLCJ0byIsImdhcyIsInRyYW5zYWN0aW9uSGFzaCIsImFkZFRvQmxvY2tjaGFpbiIsImhhc2giLCJQcm92aWRlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/context/TransactionContext.jsx\n"));

/***/ })

});