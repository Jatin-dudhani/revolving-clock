module.exports = [
"[project]/Downloads/revolving-clock/revolving-clock/src/components/FlipCard.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$revolving$2d$clock$2f$revolving$2d$clock$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/revolving-clock/revolving-clock/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$revolving$2d$clock$2f$revolving$2d$clock$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/revolving-clock/revolving-clock/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$revolving$2d$clock$2f$revolving$2d$clock$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/revolving-clock/revolving-clock/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$revolving$2d$clock$2f$revolving$2d$clock$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/revolving-clock/revolving-clock/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
const FlipCard = ({ digit, animationSpeed = 1 })=>{
    const [current, setCurrent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$revolving$2d$clock$2f$revolving$2d$clock$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(digit);
    const [previous, setPrevious] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$revolving$2d$clock$2f$revolving$2d$clock$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(digit);
    const [flipping, setFlipping] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$revolving$2d$clock$2f$revolving$2d$clock$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const duration = 0.35 / animationSpeed;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$revolving$2d$clock$2f$revolving$2d$clock$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (digit !== current) {
            setPrevious(current);
            setFlipping(true);
            const t = setTimeout(()=>{
                setCurrent(digit);
                setFlipping(false);
            }, duration * 1000);
            return ()=>clearTimeout(t);
        }
    }, [
        digit
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$revolving$2d$clock$2f$revolving$2d$clock$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            width: "clamp(44px, 7vw, 68px)",
            height: "clamp(60px, 10vw, 92px)",
            position: "relative",
            perspective: "600px",
            borderRadius: "6px",
            border: "1px solid var(--card-border)",
            background: "var(--card)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "'Share Tech Mono', monospace",
            fontSize: "clamp(28px, 5vw, 50px)",
            color: "var(--text)"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$revolving$2d$clock$2f$revolving$2d$clock$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                style: {
                    userSelect: "none"
                },
                children: current
            }, void 0, false, {
                fileName: "[project]/Downloads/revolving-clock/revolving-clock/src/components/FlipCard.jsx",
                lineNumber: 43,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$revolving$2d$clock$2f$revolving$2d$clock$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$revolving$2d$clock$2f$revolving$2d$clock$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: flipping && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$revolving$2d$clock$2f$revolving$2d$clock$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$revolving$2d$clock$2f$revolving$2d$clock$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        rotateX: 0
                    },
                    animate: {
                        rotateX: -180
                    },
                    transition: {
                        duration,
                        ease: [
                            0.4,
                            0,
                            0.2,
                            1
                        ]
                    },
                    style: {
                        position: "absolute",
                        inset: 0,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        background: "var(--card)",
                        borderRadius: "6px",
                        fontFamily: "'Share Tech Mono', monospace",
                        fontSize: "clamp(28px, 5vw, 50px)",
                        color: "var(--text)",
                        transformOrigin: "center center",
                        backfaceVisibility: "hidden"
                    },
                    children: previous
                }, `${previous}-${current}`, false, {
                    fileName: "[project]/Downloads/revolving-clock/revolving-clock/src/components/FlipCard.jsx",
                    lineNumber: 48,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/Downloads/revolving-clock/revolving-clock/src/components/FlipCard.jsx",
                lineNumber: 46,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$revolving$2d$clock$2f$revolving$2d$clock$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "absolute",
                    left: 0,
                    right: 0,
                    top: "50%",
                    height: "1px",
                    background: "linear-gradient(90deg, transparent, var(--accent-cyan), transparent)",
                    opacity: 0.35,
                    pointerEvents: "none",
                    zIndex: 10
                }
            }, void 0, false, {
                fileName: "[project]/Downloads/revolving-clock/revolving-clock/src/components/FlipCard.jsx",
                lineNumber: 74,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/revolving-clock/revolving-clock/src/components/FlipCard.jsx",
        lineNumber: 26,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = FlipCard;
}),
"[project]/Downloads/revolving-clock/revolving-clock/src/components/TimeUnit.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$revolving$2d$clock$2f$revolving$2d$clock$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/revolving-clock/revolving-clock/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$revolving$2d$clock$2f$revolving$2d$clock$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/revolving-clock/revolving-clock/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$revolving$2d$clock$2f$revolving$2d$clock$2f$src$2f$components$2f$FlipCard$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/revolving-clock/revolving-clock/src/components/FlipCard.jsx [app-ssr] (ecmascript)");
"use client";
;
;
;
/**
 * TimeUnit.jsx
 * Renders a labeled pair of FlipCard digits (e.g. "09" for hours).
 *
 * Props:
 *  - value {string}          two-character padded digit string ("00"–"59")
 *  - label {string}          unit label ("hours", "minutes", "seconds")
 *  - animationSpeed {number}
 */ const TimeUnit = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$revolving$2d$clock$2f$revolving$2d$clock$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].memo(function TimeUnit({ value, label, animationSpeed }) {
    const [d0, d1] = value.split("");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$revolving$2d$clock$2f$revolving$2d$clock$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col items-center gap-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$revolving$2d$clock$2f$revolving$2d$clock$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-[5px]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$revolving$2d$clock$2f$revolving$2d$clock$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$revolving$2d$clock$2f$revolving$2d$clock$2f$src$2f$components$2f$FlipCard$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        digit: d0,
                        animationSpeed: animationSpeed
                    }, void 0, false, {
                        fileName: "[project]/Downloads/revolving-clock/revolving-clock/src/components/TimeUnit.jsx",
                        lineNumber: 22,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$revolving$2d$clock$2f$revolving$2d$clock$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$revolving$2d$clock$2f$revolving$2d$clock$2f$src$2f$components$2f$FlipCard$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        digit: d1,
                        animationSpeed: animationSpeed
                    }, void 0, false, {
                        fileName: "[project]/Downloads/revolving-clock/revolving-clock/src/components/TimeUnit.jsx",
                        lineNumber: 23,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/revolving-clock/revolving-clock/src/components/TimeUnit.jsx",
                lineNumber: 21,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$revolving$2d$clock$2f$revolving$2d$clock$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-[10px] tracking-[0.4em] uppercase",
                style: {
                    color: "var(--text-muted)"
                },
                children: label
            }, void 0, false, {
                fileName: "[project]/Downloads/revolving-clock/revolving-clock/src/components/TimeUnit.jsx",
                lineNumber: 27,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/revolving-clock/revolving-clock/src/components/TimeUnit.jsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
});
const __TURBOPACK__default__export__ = TimeUnit;
}),
"[project]/Downloads/revolving-clock/revolving-clock/src/utils/timeFormatter.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * utils/timeFormatter.js
 * All time-related formatting utilities for the revolving clock.
 */ /**
 * Returns { hours, minutes, seconds, ampm } from a Date object.
 * @param {Date} date
 * @param {"12"|"24"} format
 */ __turbopack_context__.s([
    "formatDate",
    ()=>formatDate,
    "formatTime",
    ()=>formatTime,
    "getTimezone",
    ()=>getTimezone,
    "pad",
    ()=>pad
]);
function formatTime(date, format = "12") {
    const raw = date instanceof Date ? date : new Date();
    let hours = raw.getHours();
    const minutes = raw.getMinutes();
    const seconds = raw.getSeconds();
    let ampm = null;
    if (format === "12") {
        ampm = hours >= 12 ? "PM" : "AM";
        hours = hours % 12 || 12;
    }
    return {
        hours: pad(hours),
        minutes: pad(minutes),
        seconds: pad(seconds),
        ampm
    };
}
function pad(n) {
    return n.toString().padStart(2, "0");
}
function formatDate(date) {
    const d = date instanceof Date ? date : new Date();
    const days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];
    return {
        dayName: days[d.getDay()],
        monthName: months[d.getMonth()],
        dayNum: d.getDate(),
        year: d.getFullYear()
    };
}
function getTimezone() {
    return Intl.DateTimeFormat().resolvedOptions().timeZone;
}
}),
"[project]/Downloads/revolving-clock/revolving-clock/src/components/Clock.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Clock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$revolving$2d$clock$2f$revolving$2d$clock$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/revolving-clock/revolving-clock/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$revolving$2d$clock$2f$revolving$2d$clock$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/revolving-clock/revolving-clock/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$revolving$2d$clock$2f$revolving$2d$clock$2f$src$2f$components$2f$TimeUnit$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/revolving-clock/revolving-clock/src/components/TimeUnit.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$revolving$2d$clock$2f$revolving$2d$clock$2f$src$2f$utils$2f$timeFormatter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/revolving-clock/revolving-clock/src/utils/timeFormatter.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function Clock() {
    const [time, setTime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$revolving$2d$clock$2f$revolving$2d$clock$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null); // null until client hydration
    const [format, setFormat] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$revolving$2d$clock$2f$revolving$2d$clock$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("12");
    const [speed, setSpeed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$revolving$2d$clock$2f$revolving$2d$clock$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(1);
    const [sessionId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$revolving$2d$clock$2f$revolving$2d$clock$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : "default");
    const saveTimeout = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$revolving$2d$clock$2f$revolving$2d$clock$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    /* ── Tick ── */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$revolving$2d$clock$2f$revolving$2d$clock$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const tick = ()=>setTime(new Date());
        tick();
        const id = setInterval(tick, 1000);
        return ()=>clearInterval(id);
    }, []);
    /* ── Load saved settings on mount ── */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$revolving$2d$clock$2f$revolving$2d$clock$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        fetch(`/api/settings?sessionId=${sessionId}`).then((r)=>r.json()).then((data)=>{
            if (data.timeFormat) setFormat(data.timeFormat);
            if (data.animationSpeed) setSpeed(data.animationSpeed);
        }).catch(()=>{}); // silently fail — clock still works without DB
    }, [
        sessionId
    ]);
    /* ── Save settings (debounced 800 ms) ── */ const saveSettings = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$revolving$2d$clock$2f$revolving$2d$clock$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((newFormat, newSpeed)=>{
        clearTimeout(saveTimeout.current);
        saveTimeout.current = setTimeout(()=>{
            fetch("/api/settings", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    sessionId,
                    timeFormat: newFormat,
                    animationSpeed: newSpeed,
                    theme: "dark",
                    timezone: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$revolving$2d$clock$2f$revolving$2d$clock$2f$src$2f$utils$2f$timeFormatter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getTimezone"])()
                })
            }).catch(()=>{});
        }, 800);
    }, [
        sessionId
    ]);
    const handleFormat = (f)=>{
        setFormat(f);
        saveSettings(f, speed);
    };
    const handleSpeed = (s)=>{
        setSpeed(s);
        saveSettings(format, s);
    };
    /* ── Don't render until we have a real time (avoids SSR mismatch) ── */ if (!time) return null;
    const { hours, minutes, seconds, ampm } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$revolving$2d$clock$2f$revolving$2d$clock$2f$src$2f$utils$2f$timeFormatter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatTime"])(time, format);
    const { dayName, monthName, dayNum, year } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$revolving$2d$clock$2f$revolving$2d$clock$2f$src$2f$utils$2f$timeFormatter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatDate"])(time);
    const tz = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$revolving$2d$clock$2f$revolving$2d$clock$2f$src$2f$utils$2f$timeFormatter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getTimezone"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$revolving$2d$clock$2f$revolving$2d$clock$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col items-center gap-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$revolving$2d$clock$2f$revolving$2d$clock$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-3 flex-wrap justify-center",
                "aria-live": "polite",
                "aria-label": "Current time",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$revolving$2d$clock$2f$revolving$2d$clock$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$revolving$2d$clock$2f$revolving$2d$clock$2f$src$2f$components$2f$TimeUnit$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        value: hours,
                        label: "hours",
                        animationSpeed: speed
                    }, void 0, false, {
                        fileName: "[project]/Downloads/revolving-clock/revolving-clock/src/components/Clock.jsx",
                        lineNumber: 90,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$revolving$2d$clock$2f$revolving$2d$clock$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Colon, {}, void 0, false, {
                        fileName: "[project]/Downloads/revolving-clock/revolving-clock/src/components/Clock.jsx",
                        lineNumber: 91,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$revolving$2d$clock$2f$revolving$2d$clock$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$revolving$2d$clock$2f$revolving$2d$clock$2f$src$2f$components$2f$TimeUnit$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        value: minutes,
                        label: "minutes",
                        animationSpeed: speed
                    }, void 0, false, {
                        fileName: "[project]/Downloads/revolving-clock/revolving-clock/src/components/Clock.jsx",
                        lineNumber: 92,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$revolving$2d$clock$2f$revolving$2d$clock$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Colon, {}, void 0, false, {
                        fileName: "[project]/Downloads/revolving-clock/revolving-clock/src/components/Clock.jsx",
                        lineNumber: 93,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$revolving$2d$clock$2f$revolving$2d$clock$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$revolving$2d$clock$2f$revolving$2d$clock$2f$src$2f$components$2f$TimeUnit$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        value: seconds,
                        label: "seconds",
                        animationSpeed: speed
                    }, void 0, false, {
                        fileName: "[project]/Downloads/revolving-clock/revolving-clock/src/components/Clock.jsx",
                        lineNumber: 94,
                        columnNumber: 9
                    }, this),
                    format === "12" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$revolving$2d$clock$2f$revolving$2d$clock$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-sm md:text-base font-semibold tracking-[0.2em] pb-6",
                        style: {
                            color: "var(--accent-cyan)",
                            opacity: 0.75
                        },
                        children: ampm
                    }, void 0, false, {
                        fileName: "[project]/Downloads/revolving-clock/revolving-clock/src/components/Clock.jsx",
                        lineNumber: 98,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/revolving-clock/revolving-clock/src/components/Clock.jsx",
                lineNumber: 89,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$revolving$2d$clock$2f$revolving$2d$clock$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col items-center gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$revolving$2d$clock$2f$revolving$2d$clock$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex overflow-hidden",
                        style: {
                            border: "1px solid var(--card-border)",
                            borderRadius: "6px"
                        },
                        children: [
                            "12",
                            "24"
                        ].map((f)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$revolving$2d$clock$2f$revolving$2d$clock$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>handleFormat(f),
                                className: "px-5 py-2 text-xs font-semibold tracking-[0.15em] uppercase transition-all duration-200",
                                style: {
                                    fontFamily: "'Rajdhani', sans-serif",
                                    background: format === f ? "rgba(0,245,255,0.08)" : "transparent",
                                    color: format === f ? "var(--accent-cyan)" : "var(--text-muted)",
                                    border: "none",
                                    cursor: "pointer"
                                },
                                children: [
                                    f,
                                    "h"
                                ]
                            }, f, true, {
                                fileName: "[project]/Downloads/revolving-clock/revolving-clock/src/components/Clock.jsx",
                                lineNumber: 115,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/Downloads/revolving-clock/revolving-clock/src/components/Clock.jsx",
                        lineNumber: 110,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$revolving$2d$clock$2f$revolving$2d$clock$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$revolving$2d$clock$2f$revolving$2d$clock$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[10px] tracking-[0.3em] uppercase",
                                style: {
                                    color: "var(--text-muted)"
                                },
                                children: "Speed"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/revolving-clock/revolving-clock/src/components/Clock.jsx",
                                lineNumber: 134,
                                columnNumber: 11
                            }, this),
                            [
                                0.5,
                                1,
                                2
                            ].map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$revolving$2d$clock$2f$revolving$2d$clock$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>handleSpeed(s),
                                    className: "px-3 py-1 text-[11px] rounded transition-all duration-200",
                                    style: {
                                        fontFamily: "'Rajdhani', sans-serif",
                                        background: speed === s ? "rgba(155,93,229,0.15)" : "transparent",
                                        color: speed === s ? "var(--accent-purple)" : "var(--text-muted)",
                                        border: `1px solid ${speed === s ? "rgba(155,93,229,0.3)" : "var(--card-border)"}`,
                                        cursor: "pointer"
                                    },
                                    children: [
                                        s,
                                        "×"
                                    ]
                                }, s, true, {
                                    fileName: "[project]/Downloads/revolving-clock/revolving-clock/src/components/Clock.jsx",
                                    lineNumber: 138,
                                    columnNumber: 13
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/revolving-clock/revolving-clock/src/components/Clock.jsx",
                        lineNumber: 133,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/revolving-clock/revolving-clock/src/components/Clock.jsx",
                lineNumber: 108,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$revolving$2d$clock$2f$revolving$2d$clock$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-[13px] font-light tracking-[0.3em] uppercase text-center",
                style: {
                    color: "var(--text-muted)"
                },
                children: [
                    dayName,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$revolving$2d$clock$2f$revolving$2d$clock$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            color: "rgba(0,245,255,0.5)",
                            margin: "0 6px"
                        },
                        children: "/"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/revolving-clock/revolving-clock/src/components/Clock.jsx",
                        lineNumber: 162,
                        columnNumber: 9
                    }, this),
                    monthName,
                    " ",
                    dayNum,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$revolving$2d$clock$2f$revolving$2d$clock$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            color: "rgba(0,245,255,0.5)",
                            margin: "0 6px"
                        },
                        children: "/"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/revolving-clock/revolving-clock/src/components/Clock.jsx",
                        lineNumber: 164,
                        columnNumber: 9
                    }, this),
                    year
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/revolving-clock/revolving-clock/src/components/Clock.jsx",
                lineNumber: 157,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$revolving$2d$clock$2f$revolving$2d$clock$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-[11px] tracking-[0.25em] uppercase",
                style: {
                    color: "rgba(155,93,229,0.6)"
                },
                children: tz
            }, void 0, false, {
                fileName: "[project]/Downloads/revolving-clock/revolving-clock/src/components/Clock.jsx",
                lineNumber: 169,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/revolving-clock/revolving-clock/src/components/Clock.jsx",
        lineNumber: 86,
        columnNumber: 5
    }, this);
}
/* Blinking colon separator */ function Colon() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$revolving$2d$clock$2f$revolving$2d$clock$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "text-4xl md:text-5xl pb-6 animate-colonPulse",
        style: {
            fontFamily: "'Share Tech Mono', monospace",
            color: "var(--accent-cyan)"
        },
        children: ":"
    }, void 0, false, {
        fileName: "[project]/Downloads/revolving-clock/revolving-clock/src/components/Clock.jsx",
        lineNumber: 182,
        columnNumber: 5
    }, this);
}
}),
"[project]/Downloads/revolving-clock/revolving-clock/src/components/BackgroundGlow.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BackgroundGlow
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$revolving$2d$clock$2f$revolving$2d$clock$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/revolving-clock/revolving-clock/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
"use client";
;
function BackgroundGlow() {
    const orbs = [
        {
            className: "w-[520px] h-[520px] -top-32 -left-24",
            color: "radial-gradient(circle, #0e2a5e 0%, transparent 70%)",
            duration: "16s",
            delay: "0s"
        },
        {
            className: "w-[420px] h-[420px] -bottom-20 -right-20",
            color: "radial-gradient(circle, #1a0540 0%, transparent 70%)",
            duration: "20s",
            delay: "-7s"
        },
        {
            className: "w-[260px] h-[260px] top-[40%] left-[55%]",
            color: "radial-gradient(circle, #081428 0%, transparent 70%)",
            duration: "11s",
            delay: "-3s"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$revolving$2d$clock$2f$revolving$2d$clock$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-0 overflow-hidden pointer-events-none",
        children: orbs.map((orb, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$revolving$2d$clock$2f$revolving$2d$clock$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `absolute rounded-full opacity-55 ${orb.className}`,
                style: {
                    background: orb.color,
                    filter: "blur(80px)",
                    animation: `orbDrift ${orb.duration} ease-in-out infinite alternate`,
                    animationDelay: orb.delay
                }
            }, i, false, {
                fileName: "[project]/Downloads/revolving-clock/revolving-clock/src/components/BackgroundGlow.jsx",
                lineNumber: 33,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/Downloads/revolving-clock/revolving-clock/src/components/BackgroundGlow.jsx",
        lineNumber: 31,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=Downloads_revolving-clock_revolving-clock_src_0wtjh5n._.js.map