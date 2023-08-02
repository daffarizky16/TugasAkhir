"use strict";
(() => {
var exports = {};
exports.id = 800;
exports.ids = [800];
exports.modules = {

/***/ 3524:
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ 3227:
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ 3598:
/***/ ((module) => {

module.exports = require("next-auth/providers/google");

/***/ }),

/***/ 593:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handle)
/* harmony export */ });
/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3227);
/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _auth_nextauth___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8439);
/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8047);



async function handle(req, res) {
    const session = await (0,next_auth__WEBPACK_IMPORTED_MODULE_0__.unstable_getServerSession)(req, res, _auth_nextauth___WEBPACK_IMPORTED_MODULE_1__.authOptions);
    if (!session) {
        res.status(401).json({
            message: "You must be logged in."
        });
        return;
    }
    const { code  } = req.query;
    // Get Participant Details  
    if (req.method === "GET") {
        const result = await _lib_prisma__WEBPACK_IMPORTED_MODULE_2__/* .prisma.participant.findFirst */ ._.participant.findFirst({
            where: {
                code: code,
                email: session.user.email
            }
        });
        const response = {
            status: 200,
            data: result
        };
        return res.status(200).json(response);
    }
    // Add Participant
    if (req.method === "POST") {
        const result1 = await _lib_prisma__WEBPACK_IMPORTED_MODULE_2__/* .prisma.participant.create */ ._.participant.create({
            data: {
                candidate: req.body.candidate,
                email: session.user.email,
                code: code
            }
        });
        return res.json(result1);
    }
    return res.json({
        message: "Hi"
    });
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [365], () => (__webpack_exec__(593)));
module.exports = __webpack_exports__;

})();