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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   TransactionContext: function() { return /* binding */ TransactionContext; },\n/* harmony export */   TransactionProvider: function() { return /* binding */ TransactionProvider; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ethers */ \"(app-pages-browser)/./node_modules/ethers/lib.esm/providers/provider-browser.js\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ethers */ \"(app-pages-browser)/./node_modules/ethers/lib.esm/contract/contract.js\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ethers */ \"(app-pages-browser)/./node_modules/ethers/lib.esm/utils/units.js\");\n/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/constants */ \"(app-pages-browser)/./utils/constants.js\");\n/* __next_internal_client_entry_do_not_use__ TransactionContext,TransactionProvider auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst TransactionContext = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createContext();\nif (true) {\n    const { ethereum: ethereum1 } = window;\n}\n// fecthing the contract\nconst getEthereumContract = ()=>{\n    const provider = new ethers__WEBPACK_IMPORTED_MODULE_3__.BrowserProvider(ethereum);\n    const signer = provider.getSigner();\n    const transactionContract = new ethers__WEBPACK_IMPORTED_MODULE_4__.Contract(_utils_constants__WEBPACK_IMPORTED_MODULE_2__.contractAddress, _utils_constants__WEBPACK_IMPORTED_MODULE_2__.contractABI, signer);\n    // console.log({\n    //     provider,\n    //     signer,\n    //     transactionContract\n    // })\n    return transactionContract;\n};\n// now, we need to call this function somewhere. So here we are essentially creating a wrapper for this transaction contract. \nconst TransactionProvider = (param)=>{\n    let { children } = param;\n    _s();\n    const [currentAccount, setcurrentAccount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [formData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        addressTo: \"\",\n        amount: \"\",\n        keyword: \"\",\n        message: \"\"\n    });\n    const handleChange = (e, name)=>{\n        // console.log(\"Inside handle change, changing value of name to \", name, e.target.value);\n        setFormData((prev)=>({\n                ...prev,\n                [name]: e.target.value\n            }));\n    };\n    // checking if metamask is connected. \n    const checkWalletConnected = async ()=>{\n        if (!ethereum) return alert(\"Please install Metamask.\");\n        const accounts = await ethereum.request({\n            method: \"eth_accounts\"\n        });\n        // checking that if we already have an account connected at the start of the render, we can already set the value of the account. \n        if (accounts.length > 0) {\n            setcurrentAccount(accounts[0]);\n        } else {\n            console.log(\"No accounts found\");\n        }\n        console.log(accounts);\n    };\n    // retreiving the first waller. \n    const connectWallet = async ()=>{\n        try {\n            if (!ethereum) return alert(\"Please install Metamask.\");\n            const accounts = await ethereum.request({\n                method: \"eth_requestAccounts\"\n            });\n            setcurrentAccount(accounts[0]);\n        // console.log(currentAccount);\n        } catch (error) {\n            console.log(error);\n            throw new Error(\"No ethereum object has been found.\");\n        }\n    };\n    const sendTransaction = async ()=>{\n        try {\n            if (!ethereum) return alert(\"Please install Metamask.\");\n            // getting form data\n            const { addressTo, amount, keyword, message } = formData;\n            // knowing what contract to invoke \n            const transactionContract = getEthereumContract();\n            // sim reason as to what is explained below, this passes your amount into GWEI hexadecimal amount. \n            const parsetAmount = ethers__WEBPACK_IMPORTED_MODULE_5__.parseEther(amount);\n            // let's send shit mf\n            await ethereum.request({\n                method: \"eth_sendTransaction\",\n                params: [\n                    {\n                        from: currentAccount,\n                        to: addressTo,\n                        gas: \"0x5208\",\n                        value: parsedAmount\n                    }\n                ]\n            });\n        } catch (error) {\n            console.log(error);\n            throw new Error(\"No ethereum object has been found.\");\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        checkWalletConnected();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TransactionContext.Provider, {\n        value: {\n            connectWallet,\n            currentAccount,\n            formData,\n            sendTransaction,\n            handleChange\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"D:\\\\leapOfFaith\\\\newage\\\\client\\\\app\\\\context\\\\TransactionContext.jsx\",\n        lineNumber: 106,\n        columnNumber: 9\n    }, undefined);\n};\n_s(TransactionProvider, \"vq5xGaRr9Q09xZnYDHp1/YQ/iUI=\");\n_c = TransactionProvider;\nvar _c;\n$RefreshReg$(_c, \"TransactionProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb250ZXh0L1RyYW5zYWN0aW9uQ29udGV4dC5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFFbUQ7QUFDbkI7QUFDcUM7QUFFOUQsTUFBTU0sbUNBQXFCTiwwREFBbUIsR0FBRztBQUV4RCxJQUFJLElBQTZCLEVBQUU7SUFDL0IsTUFBTSxFQUFFUSxVQUFBQSxTQUFRLEVBQUUsR0FBR0M7QUFDekI7QUFFQSx3QkFBd0I7QUFFeEIsTUFBTUMsc0JBQXNCO0lBQ3hCLE1BQU1DLFdBQVcsSUFBSVIsbURBQXNCLENBQUNLO0lBQzVDLE1BQU1LLFNBQVNGLFNBQVNHLFNBQVM7SUFDakMsTUFBTUMsc0JBQXNCLElBQUlaLDRDQUFlLENBQUNFLDZEQUFlQSxFQUFFRCx5REFBV0EsRUFBRVM7SUFFOUUsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsMEJBQTBCO0lBQzFCLEtBQUs7SUFDTCxPQUFPRTtBQUNYO0FBRUEsOEhBQThIO0FBRXZILE1BQU1FLHNCQUFzQjtRQUFDLEVBQUVDLFFBQVEsRUFBRTs7SUFFNUMsTUFBTSxDQUFDQyxnQkFBZ0JDLGtCQUFrQixHQUFHbkIsK0NBQVFBLENBQUM7SUFFckQsTUFBTSxDQUFDb0IsVUFBVUMsWUFBWSxHQUFHckIsK0NBQVFBLENBQUM7UUFDckNzQixXQUFXO1FBQUlDLFFBQVE7UUFBSUMsU0FBUztRQUFJQyxTQUFTO0lBQ3JEO0lBRUEsTUFBTUMsZUFBZSxDQUFDQyxHQUFHQztRQUNyQix5RkFBeUY7UUFDekZQLFlBQVksQ0FBQ1EsT0FBVTtnQkFBRSxHQUFHQSxJQUFJO2dCQUFFLENBQUNELEtBQUssRUFBRUQsRUFBRUcsTUFBTSxDQUFDQyxLQUFLO1lBQUM7SUFDN0Q7SUFFQSxzQ0FBc0M7SUFDdEMsTUFBTUMsdUJBQXVCO1FBQ3pCLElBQUksQ0FBQ3pCLFVBQVUsT0FBTzBCLE1BQU07UUFDNUIsTUFBTUMsV0FBVyxNQUFNM0IsU0FBUzRCLE9BQU8sQ0FBQztZQUFFQyxRQUFRO1FBQWU7UUFDakUsa0lBQWtJO1FBQ2xJLElBQUlGLFNBQVNHLE1BQU0sR0FBRyxHQUFHO1lBQ3JCbEIsa0JBQWtCZSxRQUFRLENBQUMsRUFBRTtRQUNqQyxPQUFPO1lBQ0hJLFFBQVFDLEdBQUcsQ0FBQztRQUNoQjtRQUNBRCxRQUFRQyxHQUFHLENBQUNMO0lBQ2hCO0lBRUEsZ0NBQWdDO0lBQ2hDLE1BQU1NLGdCQUFnQjtRQUNsQixJQUFJO1lBQ0EsSUFBSSxDQUFDakMsVUFBVSxPQUFPMEIsTUFBTTtZQUM1QixNQUFNQyxXQUFXLE1BQU0zQixTQUFTNEIsT0FBTyxDQUFDO2dCQUFFQyxRQUFRO1lBQXNCO1lBQ3hFakIsa0JBQWtCZSxRQUFRLENBQUMsRUFBRTtRQUM3QiwrQkFBK0I7UUFDbkMsRUFBRSxPQUFPTyxPQUFPO1lBQ1pILFFBQVFDLEdBQUcsQ0FBQ0U7WUFDWixNQUFNLElBQUlDLE1BQU07UUFDcEI7SUFDSjtJQUVBLE1BQU1DLGtCQUFrQjtRQUNwQixJQUFJO1lBQ0EsSUFBSSxDQUFDcEMsVUFBVSxPQUFPMEIsTUFBTTtZQUU1QixvQkFBb0I7WUFDcEIsTUFBTSxFQUFFWCxTQUFTLEVBQUVDLE1BQU0sRUFBRUMsT0FBTyxFQUFFQyxPQUFPLEVBQUUsR0FBR0w7WUFFaEQsbUNBQW1DO1lBQ25DLE1BQU1OLHNCQUFzQkw7WUFFNUIsbUdBQW1HO1lBQ25HLE1BQU1tQyxlQUFlMUMsOENBQWlCLENBQUNxQjtZQUV2QyxxQkFBcUI7WUFDckIsTUFBTWhCLFNBQVM0QixPQUFPLENBQUM7Z0JBQ25CQyxRQUFRO2dCQUNSVSxRQUFRO29CQUFDO3dCQUNMQyxNQUFNN0I7d0JBQ044QixJQUFJMUI7d0JBQ0oyQixLQUFLO3dCQUNMbEIsT0FBT21CO29CQUNYO2lCQUFFO1lBQ047UUFFSixFQUFFLE9BQU9ULE9BQU87WUFDWkgsUUFBUUMsR0FBRyxDQUFDRTtZQUNaLE1BQU0sSUFBSUMsTUFBTTtRQUNwQjtJQUNKO0lBRUF6QyxnREFBU0EsQ0FBQztRQUNOK0I7SUFDSixHQUFHLEVBQUU7SUFJTCxxQkFDSSw4REFBQzNCLG1CQUFtQjhDLFFBQVE7UUFBQ3BCLE9BQU87WUFBRVM7WUFBZXRCO1lBQWdCRTtZQUFVdUI7WUFBaUJqQjtRQUFhO2tCQUN4R1Q7Ozs7OztBQUdiLEVBQUM7R0FoRllEO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9jb250ZXh0L1RyYW5zYWN0aW9uQ29udGV4dC5qc3g/MTY5MyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGV0aGVycyB9IGZyb20gJ2V0aGVycyc7XHJcbmltcG9ydCB7IGNvbnRyYWN0QUJJLCBjb250cmFjdEFkZHJlc3MgfSBmcm9tIFwiLi4vLi4vdXRpbHMvY29uc3RhbnRzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgVHJhbnNhY3Rpb25Db250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dCgpO1xyXG5cclxuaWYgKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgIGNvbnN0IHsgZXRoZXJldW0gfSA9IHdpbmRvdztcclxufVxyXG5cclxuLy8gZmVjdGhpbmcgdGhlIGNvbnRyYWN0XHJcblxyXG5jb25zdCBnZXRFdGhlcmV1bUNvbnRyYWN0ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgcHJvdmlkZXIgPSBuZXcgZXRoZXJzLkJyb3dzZXJQcm92aWRlcihldGhlcmV1bSlcclxuICAgIGNvbnN0IHNpZ25lciA9IHByb3ZpZGVyLmdldFNpZ25lcigpO1xyXG4gICAgY29uc3QgdHJhbnNhY3Rpb25Db250cmFjdCA9IG5ldyBldGhlcnMuQ29udHJhY3QoY29udHJhY3RBZGRyZXNzLCBjb250cmFjdEFCSSwgc2lnbmVyKTtcclxuXHJcbiAgICAvLyBjb25zb2xlLmxvZyh7XHJcbiAgICAvLyAgICAgcHJvdmlkZXIsXHJcbiAgICAvLyAgICAgc2lnbmVyLFxyXG4gICAgLy8gICAgIHRyYW5zYWN0aW9uQ29udHJhY3RcclxuICAgIC8vIH0pXHJcbiAgICByZXR1cm4gdHJhbnNhY3Rpb25Db250cmFjdDtcclxufVxyXG5cclxuLy8gbm93LCB3ZSBuZWVkIHRvIGNhbGwgdGhpcyBmdW5jdGlvbiBzb21ld2hlcmUuIFNvIGhlcmUgd2UgYXJlIGVzc2VudGlhbGx5IGNyZWF0aW5nIGEgd3JhcHBlciBmb3IgdGhpcyB0cmFuc2FjdGlvbiBjb250cmFjdC4gXHJcblxyXG5leHBvcnQgY29uc3QgVHJhbnNhY3Rpb25Qcm92aWRlciA9ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuXHJcbiAgICBjb25zdCBbY3VycmVudEFjY291bnQsIHNldGN1cnJlbnRBY2NvdW50XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICAgIGNvbnN0IFtmb3JtRGF0YSwgc2V0Rm9ybURhdGFdID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIGFkZHJlc3NUbzogXCJcIiwgYW1vdW50OiBcIlwiLCBrZXl3b3JkOiBcIlwiLCBtZXNzYWdlOiBcIlwiXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZSwgbmFtZSkgPT4ge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiSW5zaWRlIGhhbmRsZSBjaGFuZ2UsIGNoYW5naW5nIHZhbHVlIG9mIG5hbWUgdG8gXCIsIG5hbWUsIGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICBzZXRGb3JtRGF0YSgocHJldikgPT4gKHsgLi4ucHJldiwgW25hbWVdOiBlLnRhcmdldC52YWx1ZSB9KSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gY2hlY2tpbmcgaWYgbWV0YW1hc2sgaXMgY29ubmVjdGVkLiBcclxuICAgIGNvbnN0IGNoZWNrV2FsbGV0Q29ubmVjdGVkID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGlmICghZXRoZXJldW0pIHJldHVybiBhbGVydChcIlBsZWFzZSBpbnN0YWxsIE1ldGFtYXNrLlwiKTtcclxuICAgICAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IGV0aGVyZXVtLnJlcXVlc3QoeyBtZXRob2Q6ICdldGhfYWNjb3VudHMnIH0pO1xyXG4gICAgICAgIC8vIGNoZWNraW5nIHRoYXQgaWYgd2UgYWxyZWFkeSBoYXZlIGFuIGFjY291bnQgY29ubmVjdGVkIGF0IHRoZSBzdGFydCBvZiB0aGUgcmVuZGVyLCB3ZSBjYW4gYWxyZWFkeSBzZXQgdGhlIHZhbHVlIG9mIHRoZSBhY2NvdW50LiBcclxuICAgICAgICBpZiAoYWNjb3VudHMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBzZXRjdXJyZW50QWNjb3VudChhY2NvdW50c1swXSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJObyBhY2NvdW50cyBmb3VuZFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5sb2coYWNjb3VudHMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHJldHJlaXZpbmcgdGhlIGZpcnN0IHdhbGxlci4gXHJcbiAgICBjb25zdCBjb25uZWN0V2FsbGV0ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmICghZXRoZXJldW0pIHJldHVybiBhbGVydChcIlBsZWFzZSBpbnN0YWxsIE1ldGFtYXNrLlwiKTtcclxuICAgICAgICAgICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCBldGhlcmV1bS5yZXF1ZXN0KHsgbWV0aG9kOiAnZXRoX3JlcXVlc3RBY2NvdW50cycgfSk7XHJcbiAgICAgICAgICAgIHNldGN1cnJlbnRBY2NvdW50KGFjY291bnRzWzBdKTtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coY3VycmVudEFjY291bnQpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTm8gZXRoZXJldW0gb2JqZWN0IGhhcyBiZWVuIGZvdW5kLlwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc2VuZFRyYW5zYWN0aW9uID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmICghZXRoZXJldW0pIHJldHVybiBhbGVydChcIlBsZWFzZSBpbnN0YWxsIE1ldGFtYXNrLlwiKTtcclxuXHJcbiAgICAgICAgICAgIC8vIGdldHRpbmcgZm9ybSBkYXRhXHJcbiAgICAgICAgICAgIGNvbnN0IHsgYWRkcmVzc1RvLCBhbW91bnQsIGtleXdvcmQsIG1lc3NhZ2UgfSA9IGZvcm1EYXRhO1xyXG5cclxuICAgICAgICAgICAgLy8ga25vd2luZyB3aGF0IGNvbnRyYWN0IHRvIGludm9rZSBcclxuICAgICAgICAgICAgY29uc3QgdHJhbnNhY3Rpb25Db250cmFjdCA9IGdldEV0aGVyZXVtQ29udHJhY3QoKTtcclxuXHJcbiAgICAgICAgICAgIC8vIHNpbSByZWFzb24gYXMgdG8gd2hhdCBpcyBleHBsYWluZWQgYmVsb3csIHRoaXMgcGFzc2VzIHlvdXIgYW1vdW50IGludG8gR1dFSSBoZXhhZGVjaW1hbCBhbW91bnQuIFxyXG4gICAgICAgICAgICBjb25zdCBwYXJzZXRBbW91bnQgPSBldGhlcnMucGFyc2VFdGhlcihhbW91bnQpO1xyXG5cclxuICAgICAgICAgICAgLy8gbGV0J3Mgc2VuZCBzaGl0IG1mXHJcbiAgICAgICAgICAgIGF3YWl0IGV0aGVyZXVtLnJlcXVlc3Qoe1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnZXRoX3NlbmRUcmFuc2FjdGlvbicsXHJcbiAgICAgICAgICAgICAgICBwYXJhbXM6IFt7XHJcbiAgICAgICAgICAgICAgICAgICAgZnJvbTogY3VycmVudEFjY291bnQsXHJcbiAgICAgICAgICAgICAgICAgICAgdG86IGFkZHJlc3NUbyxcclxuICAgICAgICAgICAgICAgICAgICBnYXM6ICcweDUyMDgnLCAvL3NvIGhlcmUncyB0aGUgdGVhIGFib3V0IHRoaXMuIEdhcyBoZXJlIGlzIHRoZSBhbW91bnQgb2YgbW9uZXkgd2Ugd2FudCB0byBzcGVuZCBpbiB0aGlzIHRyYW5zYWN0aW9uLiBBbHNvLCBhbGwgb2YgdGhpcyBpcyB3cml0dGVuIGluIGhleGFkZWNpbWFsLiBOb3csIHRoaXMgaW4gZGVjaW1hbCBmb3JtYXQgaXMgMjEwMDAuIEJ1dCB0aGlzIGlzIGluIEdXRUksIG5vdCBFVEguIEdXRUkgaXMgYSBzdWJ1bml0IG9mIEVUSCwgbGlrZSBjZW50IGlzIHRvIGEgZG9sbGFyLCBhbmQgMjFLIGd3ZWkgaXMgMC4wMDAwMjEgZXRoLiBcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogcGFyc2VkQW1vdW50LFxyXG4gICAgICAgICAgICAgICAgfV1cclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJObyBldGhlcmV1bSBvYmplY3QgaGFzIGJlZW4gZm91bmQuXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNoZWNrV2FsbGV0Q29ubmVjdGVkKCk7XHJcbiAgICB9LCBbXSlcclxuXHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFRyYW5zYWN0aW9uQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyBjb25uZWN0V2FsbGV0LCBjdXJyZW50QWNjb3VudCwgZm9ybURhdGEsIHNlbmRUcmFuc2FjdGlvbiwgaGFuZGxlQ2hhbmdlIH19PlxyXG4gICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgPC9UcmFuc2FjdGlvbkNvbnRleHQuUHJvdmlkZXI+XHJcbiAgICApXHJcbn0iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImV0aGVycyIsImNvbnRyYWN0QUJJIiwiY29udHJhY3RBZGRyZXNzIiwiVHJhbnNhY3Rpb25Db250ZXh0IiwiY3JlYXRlQ29udGV4dCIsImV0aGVyZXVtIiwid2luZG93IiwiZ2V0RXRoZXJldW1Db250cmFjdCIsInByb3ZpZGVyIiwiQnJvd3NlclByb3ZpZGVyIiwic2lnbmVyIiwiZ2V0U2lnbmVyIiwidHJhbnNhY3Rpb25Db250cmFjdCIsIkNvbnRyYWN0IiwiVHJhbnNhY3Rpb25Qcm92aWRlciIsImNoaWxkcmVuIiwiY3VycmVudEFjY291bnQiLCJzZXRjdXJyZW50QWNjb3VudCIsImZvcm1EYXRhIiwic2V0Rm9ybURhdGEiLCJhZGRyZXNzVG8iLCJhbW91bnQiLCJrZXl3b3JkIiwibWVzc2FnZSIsImhhbmRsZUNoYW5nZSIsImUiLCJuYW1lIiwicHJldiIsInRhcmdldCIsInZhbHVlIiwiY2hlY2tXYWxsZXRDb25uZWN0ZWQiLCJhbGVydCIsImFjY291bnRzIiwicmVxdWVzdCIsIm1ldGhvZCIsImxlbmd0aCIsImNvbnNvbGUiLCJsb2ciLCJjb25uZWN0V2FsbGV0IiwiZXJyb3IiLCJFcnJvciIsInNlbmRUcmFuc2FjdGlvbiIsInBhcnNldEFtb3VudCIsInBhcnNlRXRoZXIiLCJwYXJhbXMiLCJmcm9tIiwidG8iLCJnYXMiLCJwYXJzZWRBbW91bnQiLCJQcm92aWRlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/context/TransactionContext.jsx\n"));

/***/ })

});