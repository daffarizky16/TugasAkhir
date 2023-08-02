"use strict";
(() => {
var exports = {};
exports.id = 459;
exports.ids = [459];
exports.modules = {

/***/ 3913:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Login),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "next-auth/react"
var react_ = __webpack_require__(1649);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: external "process"
const external_process_namespaceObject = require("process");
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./components/Button.tsx
var Button = __webpack_require__(570);
;// CONCATENATED MODULE: ./components/signin.tsx





const LoginForm = ()=>{
    const { 0: npm , 1: setNpm  } = (0,external_react_.useState)("");
    const { 0: password , 1: setPassword  } = (0,external_react_.useState)("");
    const handleNpmChange = (event)=>{
        setNpm(event.currentTarget.value);
    };
    const handlePasswordChange = (event)=>{
        setPassword(event.currentTarget.value);
    };
    const handleSubmit = (event)=>{
        event.preventDefault();
        // Lakukan aksi yang diinginkan saat form dikirimkan (misalnya, validasi atau proses login).
        console.log("NPM:", npm);
        console.log("Password:", password);
    };
    const handleLogin = async (event)=>{
        event.preventDefault();
        try {
            const response = await fetch("/api/auth", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    action: "login",
                    npm,
                    password
                })
            });
            const data = await response.json();
            if (response.ok) {
                console.log(data.message); // Login successful
            // Setelah login berhasil, Anda dapat mengarahkan pengguna ke halaman yang sesuai.
            } else {
                console.error(data.message); // Contoh: User not found atau Invalid password
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };
    const submit = ()=>{};
    return /*#__PURE__*/ jsx_runtime_.jsx("form", {
        onSubmit: handleSubmit,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
                        type: "text",
                        className: "border-solid border-2 border-sky-500 px-3 py-2 w-80 mb-3",
                        placeholder: "NPM",
                        value: npm,
                        onChange: handleNpmChange
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
                        type: "password",
                        className: "border-solid border-2 border-sky-500 px-3 py-2 w-80 mb-4",
                        placeholder: "Password",
                        value: password,
                        onChange: handlePasswordChange
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                    text: "Login",
                    size: "md",
                    className: "rounded-none mr-44",
                    onClick: react_.signIn
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: "/login/Daftar",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        className: "text-sm mb-10 font-thin hover:underline underline-offset-2",
                        children: "Daftar disini"
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const signin = (LoginForm);

;// CONCATENATED MODULE: ./pages/login/index.tsx







function Login({ providers  }) {
    const { data: session  } = (0,react_.useSession)();
    const router = (0,router_.useRouter)();
    const handleLoginButton = (e)=>{
        e.preventDefault();
        (0,react_.signIn)();
    };
    if (session) {
        router.push("/");
    }
    const googleIcon = /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        className: "mr-2 -ml-1 w-4 h-4",
        "aria-hidden": "true",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 48 48",
        "data-prefix": "fab",
        "data-icon": "google",
        role: "img",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#FFC107",
                d: "M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#FF3D00",
                d: "M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#4CAF50",
                d: "M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#1976D2",
                d: "M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
            })
        ]
    });
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "flex flex-col items-center justify-center container h-screen m-auto",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((head_default()), {
                children: /*#__PURE__*/ jsx_runtime_.jsx("title", {
                    children: "Login"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: "/",
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    className: "text-6xl mb-10 font-thin",
                    children: "Voting-Ku"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(signin, {}),
            Object.values(providers).map((provider)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "w-1/3",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                        onClick: ()=>(0,react_.signIn)(provider.id),
                        className: "inline-flex justify-center items-center bg-white text-zinc-900 py-2 w-full border-2 border-zinc-900 font-medium hover:bg-zinc-900 hover:text-white",
                        children: [
                            provider.name === "Google" && googleIcon,
                            "Login Dengan ",
                            provider.name
                        ]
                    })
                }, provider.name))
        ]
    });
}
async function getServerSideProps() {
    const providers = await (0,react_.getProviders)();
    return {
        props: {
            providers
        }
    };
}


/***/ }),

/***/ 1649:
/***/ ((module) => {

module.exports = require("next-auth/react");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [598,676,664,570], () => (__webpack_exec__(3913)));
module.exports = __webpack_exports__;

})();