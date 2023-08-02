"use strict";
exports.id = 570;
exports.ids = [570];
exports.modules = {

/***/ 570:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Button)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function Button(props) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
        disabled: props.isLoading,
        onClick: (e)=>{
            e.preventDefault();
            props.onClick();
        },
        className: `bg-sky-500 text-white  hover:bg-sky-400 font-bold rounded-md  
      ${props.className} ${props.size === "sm" ? "py-1 px-2 text-sm " : props.size === "lg" ? "py-3 px-4" : "py-2 px-3"}`,
        children: props.isLoading ? "Loading..." : props.text
    });
}


/***/ })

};
;