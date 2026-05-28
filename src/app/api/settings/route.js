/**
 * app/api/settings/route.js
 * GET  /api/settings  — returns saved user preferences
 * POST /api/settings  — saves user preferences to MongoDB
 */

import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import mongoose from "mongoose";

/* ── Mongoose Schema ── */
const preferenceSchema = new mongoose.Schema(
  {
    sessionId:      { type: String, required: true, unique: true },
    theme:          { type: String, default: "dark" },
    timezone:       { type: String, default: "Asia/Kolkata" },
    animationSpeed: { type: Number, default: 1, min: 0.25, max: 2 },
    timeFormat:     { type: String, enum: ["12", "24"], default: "12" },
  },
  { timestamps: true }
);

// Avoid re-compiling model on hot reload
const Preference =
  mongoose.models.Preference ||
  mongoose.model("Preference", preferenceSchema);

/* ── GET /api/settings ── */
export async function GET(request) {
  try {
    await connectDB();

    const { searchParams } = new URL(request.url);
    const sessionId = searchParams.get("sessionId") || "default";

    let prefs = await Preference.findOne({ sessionId });

    if (!prefs) {
      // Return defaults if no saved settings
      return NextResponse.json({
        theme:          "dark",
        timezone:       Intl.DateTimeFormat().resolvedOptions().timeZone || "UTC",
        animationSpeed: 1,
        timeFormat:     "12",
      });
    }

    return NextResponse.json({
      theme:          prefs.theme,
      timezone:       prefs.timezone,
      animationSpeed: prefs.animationSpeed,
      timeFormat:     prefs.timeFormat,
    });
  } catch (error) {
    console.error("[GET /api/settings]", error);
    return NextResponse.json(
      { error: "Failed to fetch settings" },
      { status: 500 }
    );
  }
}

/* ── POST /api/settings ── */
export async function POST(request) {
  try {
    await connectDB();

    const body = await request.json();
    const { sessionId = "default", theme, timezone, animationSpeed, timeFormat } = body;

    const prefs = await Preference.findOneAndUpdate(
      { sessionId },
      {
        ...(theme          !== undefined && { theme }),
        ...(timezone       !== undefined && { timezone }),
        ...(animationSpeed !== undefined && { animationSpeed }),
        ...(timeFormat     !== undefined && { timeFormat }),
      },
      { upsert: true, new: true, runValidators: true }
    );

    return NextResponse.json({
      success: true,
      data: {
        theme:          prefs.theme,
        timezone:       prefs.timezone,
        animationSpeed: prefs.animationSpeed,
        timeFormat:     prefs.timeFormat,
      },
    });
  } catch (error) {
    console.error("[POST /api/settings]", error);
    return NextResponse.json(
      { error: "Failed to save settings" },
      { status: 500 }
    );
  }
}
