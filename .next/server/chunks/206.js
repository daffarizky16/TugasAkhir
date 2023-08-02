"use strict";
exports.id = 206;
exports.ids = [206];
exports.modules = {

/***/ 1206:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "w": () => (/* binding */ showAlert)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(570);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7849);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dom_client__WEBPACK_IMPORTED_MODULE_3__);




function Alert(props) {
    const { 0: isOpen , 1: setIsOpen  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(props.isOpen);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: `relative z-10 ${!isOpen && "hidden"}`,
        "aria-labelledby": "modal-title",
        role: "dialog",
        "aria-modal": "true",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "fixed inset-0 bg-zinc-900 bg-opacity-40 transition-opacity"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "fixed inset-0 z-10 overflow-y-auto",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "flex min-h-full items-end justify-center text-center sm:items-center sm:p-0",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "relative transform overflow-hidden bg-white text-left shadow-xl transition-all p-4 rounded-md",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "w-full p-5 text-center",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "text-2xl font-bold",
                                    children: props.title || "Title"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "text-lg",
                                    children: props.subtitle || "Sub Title"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: `space-x-3 mt-5`,
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                            className: "text-sm bg-zinc-100 px-2 py-1 hover:bg-zinc-200",
                                            onClick: ()=>{
                                                props.onNegativeClick;
                                                setIsOpen(false);
                                            },
                                            children: props.negativeText || "Kembali"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Button__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                            className: `${!props.onPositiveClick && "hidden"}`,
                                            onClick: ()=>{
                                                props.onPositiveClick && props.onPositiveClick();
                                                setIsOpen(false);
                                            },
                                            size: "sm",
                                            text: props.positiveText || "Ya"
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                })
            })
        ]
    });
}
function showAlert(props) {
    const alert = document.createElement("div");
    alert.id = "alert";
    document.body.appendChild(alert);
    const root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_3__.createRoot)(alert);
    root.render(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Alert, {
        isOpen: true,
        title: props.title,
        subtitle: props.subtitle,
        positiveText: props.positiveText,
        negativeText: props.negativeText,
        onPositiveClick: props.onPositiveClick,
        onNegativeClick: props.onNegativeClick
    }));
}


/***/ })

};
;