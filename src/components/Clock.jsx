"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import TimeUnit from "./TimeUnit";
import { formatTime, formatDate, getTimezone } from "@/utils/timeFormatter";

/**
 * Clock.jsx
 * Main controller — manages time state, settings persistence, and renders
 * the full clock UI (TimeUnits + controls + date + timezone).
 */
export default function Clock() {
  const [time, setTime]       = useState(null);      // null until client hydration
  const [format, setFormat]   = useState("12");
  const [speed, setSpeed]     = useState(1);
  const [sessionId]           = useState(() =>
    typeof window !== "undefined"
      ? (localStorage.getItem("clock_session") ||
         (() => {
           const id = crypto.randomUUID();
           localStorage.setItem("clock_session", id);
           return id;
         })())
      : "default"
  );
  const saveTimeout = useRef(null);

  /* ── Tick ── */
  useEffect(() => {
    const tick = () => setTime(new Date());
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  /* ── Load saved settings on mount ── */
  useEffect(() => {
    fetch(`/api/settings?sessionId=${sessionId}`)
      .then((r) => r.json())
      .then((data) => {
        if (data.timeFormat)     setFormat(data.timeFormat);
        if (data.animationSpeed) setSpeed(data.animationSpeed);
      })
      .catch(() => {}); // silently fail — clock still works without DB
  }, [sessionId]);

  /* ── Save settings (debounced 800 ms) ── */
  const saveSettings = useCallback(
    (newFormat, newSpeed) => {
      clearTimeout(saveTimeout.current);
      saveTimeout.current = setTimeout(() => {
        fetch("/api/settings", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            sessionId,
            timeFormat: newFormat,
            animationSpeed: newSpeed,
            theme: "dark",
            timezone: getTimezone(),
          }),
        }).catch(() => {});
      }, 800);
    },
    [sessionId]
  );

  const handleFormat = (f) => {
    setFormat(f);
    saveSettings(f, speed);
  };

  const handleSpeed = (s) => {
    setSpeed(s);
    saveSettings(format, s);
  };

  /* ── Don't render until we have a real time (avoids SSR mismatch) ── */
  if (!time) return null;

  const { hours, minutes, seconds, ampm } = formatTime(time, format);
  const { dayName, monthName, dayNum, year } = formatDate(time);
  const tz = getTimezone();

  return (
    <div className="flex flex-col items-center gap-8">

      {/* ── Clock face ── */}
      <div className="flex items-center gap-3 flex-wrap justify-center" aria-live="polite" aria-label="Current time">
        <TimeUnit value={hours}   label="hours"   animationSpeed={speed} />
        <Colon />
        <TimeUnit value={minutes} label="minutes" animationSpeed={speed} />
        <Colon />
        <TimeUnit value={seconds} label="seconds" animationSpeed={speed} />

        {/* AM / PM badge */}
        {format === "12" && (
          <span
            className="text-sm md:text-base font-semibold tracking-[0.2em] pb-6"
            style={{ color: "var(--accent-cyan)", opacity: 0.75 }}
          >
            {ampm}
          </span>
        )}
      </div>

      {/* ── Controls ── */}
      <div className="flex flex-col items-center gap-4">
        {/* Format toggle */}
        <div
          className="flex overflow-hidden"
          style={{ border: "1px solid var(--card-border)", borderRadius: "6px" }}
        >
          {["12", "24"].map((f) => (
            <button
              key={f}
              onClick={() => handleFormat(f)}
              className="px-5 py-2 text-xs font-semibold tracking-[0.15em] uppercase transition-all duration-200"
              style={{
                fontFamily: "'Rajdhani', sans-serif",
                background: format === f ? "rgba(0,245,255,0.08)" : "transparent",
                color:      format === f ? "var(--accent-cyan)" : "var(--text-muted)",
                border: "none",
                cursor: "pointer",
              }}
            >
              {f}h
            </button>
          ))}
        </div>

        {/* Animation speed */}
        <div className="flex items-center gap-3">
          <span className="text-[10px] tracking-[0.3em] uppercase" style={{ color: "var(--text-muted)" }}>
            Speed
          </span>
          {[0.5, 1, 2].map((s) => (
            <button
              key={s}
              onClick={() => handleSpeed(s)}
              className="px-3 py-1 text-[11px] rounded transition-all duration-200"
              style={{
                fontFamily: "'Rajdhani', sans-serif",
                background: speed === s ? "rgba(155,93,229,0.15)" : "transparent",
                color:      speed === s ? "var(--accent-purple)" : "var(--text-muted)",
                border:     `1px solid ${speed === s ? "rgba(155,93,229,0.3)" : "var(--card-border)"}`,
                cursor: "pointer",
              }}
            >
              {s}×
            </button>
          ))}
        </div>
      </div>

      {/* ── Date ── */}
      <div
        className="text-[13px] font-light tracking-[0.3em] uppercase text-center"
        style={{ color: "var(--text-muted)" }}
      >
        {dayName}
        <span style={{ color: "rgba(0,245,255,0.5)", margin: "0 6px" }}>/</span>
        {monthName} {dayNum}
        <span style={{ color: "rgba(0,245,255,0.5)", margin: "0 6px" }}>/</span>
        {year}
      </div>

      {/* ── Timezone ── */}
      <div
        className="text-[11px] tracking-[0.25em] uppercase"
        style={{ color: "rgba(155,93,229,0.6)" }}
      >
        {tz}
      </div>
    </div>
  );
}

/* Blinking colon separator */
function Colon() {
  return (
    <span
      className="text-4xl md:text-5xl pb-6 animate-colonPulse"
      style={{ fontFamily: "'Share Tech Mono', monospace", color: "var(--accent-cyan)" }}
    >
      :
    </span>
  );
}
