"use strict";
(() => {
var exports = {};
exports.id = 484;
exports.ids = [484];
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

/***/ 1169:
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
    // Get Details of the Vote
    if (req.method === "GET") {
        const votes = await _lib_prisma__WEBPACK_IMPORTED_MODULE_2__/* .prisma.votes.findFirst */ ._.votes.findFirst({
            select: {
                id: true,
                publisher: true,
                title: true,
                code: true,
                startDateTime: true,
                endDateTime: true,
                candidates: true,
                createdAt: true,
                deletedAt: false
            },
            where: {
                code: code,
                deletedAt: null
            }
        });
        // Get Participants of the Vote
        const participants = await _lib_prisma__WEBPACK_IMPORTED_MODULE_2__/* .prisma.participant.findMany */ ._.participant.findMany({
            select: {
                candidate: true,
                email: true,
                participateAt: true
            },
            where: {
                code: code
            }
        });
        //Count Vote for each Candidate
        var candidates = [];
        if (participants) {
            candidates = votes?.candidates.map((candidate)=>{
                const votes = participants.filter((participant)=>participant.candidate === candidate.name).length || 0;
                return {
                    ...candidate,
                    votes
                };
            });
        }
        const result = {
            id: votes?.id,
            publisher: votes?.publisher,
            title: votes?.title,
            code: votes?.code,
            candidates: candidates,
            startDateTime: String(votes?.startDateTime),
            endDateTime: String(votes?.endDateTime),
            createdAt: String(votes?.createdAt),
            totalVotes: candidates ? candidates?.reduce((acc, candidate)=>acc + (candidate.votes ? candidate.votes : 0), 0) : 0
        };
        const response = {
            status: 200,
            data: result
        };
        return res.json(response);
    }
    // Delete the Vote
    if (req.method === "DELETE") {
        const result1 = await _lib_prisma__WEBPACK_IMPORTED_MODULE_2__/* .prisma.votes.update */ ._.votes.update({
            where: {
                code: code
            },
            data: {
                deletedAt: new Date().toString()
            }
        });
        return res.json(result1);
    }
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [365], () => (__webpack_exec__(1169)));
module.exports = __webpack_exports__;

})();