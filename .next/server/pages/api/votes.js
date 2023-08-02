"use strict";
(() => {
var exports = {};
exports.id = 86;
exports.ids = [86];
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

/***/ 1424:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ handle)
});

// EXTERNAL MODULE: ./lib/prisma.ts
var prisma = __webpack_require__(8047);
;// CONCATENATED MODULE: external "next-auth/next"
const next_namespaceObject = require("next-auth/next");
// EXTERNAL MODULE: ./pages/api/auth/[...nextauth].ts
var _nextauth_ = __webpack_require__(8439);
;// CONCATENATED MODULE: ./lib/code.ts
const code = (length)=>{
    var result = "";
    var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    var charactersLength = characters.length;
    for(var i = 0; i < length; i++){
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
};

;// CONCATENATED MODULE: ./pages/api/votes/index.ts




async function handle(req, res) {
    const session = await (0,next_namespaceObject.unstable_getServerSession)(req, res, _nextauth_.authOptions);
    if (!session) {
        res.status(401).json({
            message: "You must be logged in."
        });
        return;
    }
    // Create New Votes
    if (req.method === "POST") {
        const result = await prisma/* prisma.votes.create */._.votes.create({
            data: {
                title: req.body.title,
                candidates: req.body.candidates,
                startDateTime: req.body.startDate,
                endDateTime: req.body.endDate,
                publisher: req.body.publisher,
                code: code(6),
                deletedAt: null
            }
        });
        return res.json(result);
    } else if (req.method === "GET") {
        const result1 = await prisma/* prisma.votes.findMany */._.votes.findMany({
            where: {
                AND: [
                    {
                        deletedAt: null
                    },
                    {
                        publisher: session.user.email
                    }
                ]
            }
        });
        const response = {
            status: 200,
            data: result1
        };
        return res.json(response);
    } else if (req.method === "PUT") {
        const result2 = await prisma/* prisma.votes.update */._.votes.update({
            where: {
                code: req.body.code
            },
            data: {
                candidates: req.body.candidates,
                endDateTime: req.body.endDate,
                startDateTime: req.body.startDate,
                title: req.body.title
            }
        });
        return res.json(result2);
    }
    return res.status(400).json("Method not allowed.");
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [365], () => (__webpack_exec__(1424)));
module.exports = __webpack_exports__;

})();