module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[project]/Downloads/revolving-clock/revolving-clock/src/lib/mongodb.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$Downloads$2f$revolving$2d$clock$2f$revolving$2d$clock$2f$node_modules$2f$mongoose$29$__ = __turbopack_context__.i("[externals]/mongoose [external] (mongoose, cjs, [project]/Downloads/revolving-clock/revolving-clock/node_modules/mongoose)");
;
const MONGODB_URI = process.env.MONGODB_URI;
console.log("URI:", MONGODB_URI);
if (!MONGODB_URI) {
    throw new Error("Please define MONGODB_URI in .env.local");
}
let cached = /*TURBOPACK member replacement*/ __turbopack_context__.g.mongoose;
if (!cached) {
    cached = /*TURBOPACK member replacement*/ __turbopack_context__.g.mongoose = {
        conn: null,
        promise: null
    };
}
async function connectDB() {
    if (cached.conn) return cached.conn;
    if (!cached.promise) {
        const opts = {
            bufferCommands: false
        };
        cached.promise = __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$Downloads$2f$revolving$2d$clock$2f$revolving$2d$clock$2f$node_modules$2f$mongoose$29$__["default"].connect(MONGODB_URI, opts).then((m)=>m);
    }
    try {
        cached.conn = await cached.promise;
    } catch (e) {
        cached.promise = null;
        throw e;
    }
    return cached.conn;
}
const __TURBOPACK__default__export__ = connectDB;
}),
"[project]/Downloads/revolving-clock/revolving-clock/src/app/api/settings/route.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET,
    "POST",
    ()=>POST
]);
/**
 * app/api/settings/route.js
 * GET  /api/settings  — returns saved user preferences
 * POST /api/settings  — saves user preferences to MongoDB
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$revolving$2d$clock$2f$revolving$2d$clock$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/revolving-clock/revolving-clock/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$revolving$2d$clock$2f$revolving$2d$clock$2f$src$2f$lib$2f$mongodb$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/revolving-clock/revolving-clock/src/lib/mongodb.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$Downloads$2f$revolving$2d$clock$2f$revolving$2d$clock$2f$node_modules$2f$mongoose$29$__ = __turbopack_context__.i("[externals]/mongoose [external] (mongoose, cjs, [project]/Downloads/revolving-clock/revolving-clock/node_modules/mongoose)");
;
;
;
/* ── Mongoose Schema ── */ const preferenceSchema = new __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$Downloads$2f$revolving$2d$clock$2f$revolving$2d$clock$2f$node_modules$2f$mongoose$29$__["default"].Schema({
    sessionId: {
        type: String,
        required: true,
        unique: true
    },
    theme: {
        type: String,
        default: "dark"
    },
    timezone: {
        type: String,
        default: "Asia/Kolkata"
    },
    animationSpeed: {
        type: Number,
        default: 1,
        min: 0.25,
        max: 2
    },
    timeFormat: {
        type: String,
        enum: [
            "12",
            "24"
        ],
        default: "12"
    }
}, {
    timestamps: true
});
// Avoid re-compiling model on hot reload
const Preference = __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$Downloads$2f$revolving$2d$clock$2f$revolving$2d$clock$2f$node_modules$2f$mongoose$29$__["default"].models.Preference || __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$Downloads$2f$revolving$2d$clock$2f$revolving$2d$clock$2f$node_modules$2f$mongoose$29$__["default"].model("Preference", preferenceSchema);
async function GET(request) {
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$revolving$2d$clock$2f$revolving$2d$clock$2f$src$2f$lib$2f$mongodb$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])();
        const { searchParams } = new URL(request.url);
        const sessionId = searchParams.get("sessionId") || "default";
        let prefs = await Preference.findOne({
            sessionId
        });
        if (!prefs) {
            // Return defaults if no saved settings
            return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$revolving$2d$clock$2f$revolving$2d$clock$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                theme: "dark",
                timezone: Intl.DateTimeFormat().resolvedOptions().timeZone || "UTC",
                animationSpeed: 1,
                timeFormat: "12"
            });
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$revolving$2d$clock$2f$revolving$2d$clock$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            theme: prefs.theme,
            timezone: prefs.timezone,
            animationSpeed: prefs.animationSpeed,
            timeFormat: prefs.timeFormat
        });
    } catch (error) {
        console.error("[GET /api/settings]", error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$revolving$2d$clock$2f$revolving$2d$clock$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "Failed to fetch settings"
        }, {
            status: 500
        });
    }
}
async function POST(request) {
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$revolving$2d$clock$2f$revolving$2d$clock$2f$src$2f$lib$2f$mongodb$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])();
        const body = await request.json();
        const { sessionId = "default", theme, timezone, animationSpeed, timeFormat } = body;
        const prefs = await Preference.findOneAndUpdate({
            sessionId
        }, {
            ...theme !== undefined && {
                theme
            },
            ...timezone !== undefined && {
                timezone
            },
            ...animationSpeed !== undefined && {
                animationSpeed
            },
            ...timeFormat !== undefined && {
                timeFormat
            }
        }, {
            upsert: true,
            new: true,
            runValidators: true
        });
        return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$revolving$2d$clock$2f$revolving$2d$clock$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: true,
            data: {
                theme: prefs.theme,
                timezone: prefs.timezone,
                animationSpeed: prefs.animationSpeed,
                timeFormat: prefs.timeFormat
            }
        });
    } catch (error) {
        console.error("[POST /api/settings]", error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$revolving$2d$clock$2f$revolving$2d$clock$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "Failed to save settings"
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0x0nsuy._.js.map