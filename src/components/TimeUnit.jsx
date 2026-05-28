"use client";

import React from "react";
import FlipCard from "./FlipCard";

/**
 * TimeUnit.jsx
 * Renders a labeled pair of FlipCard digits (e.g. "09" for hours).
 *
 * Props:
 *  - value {string}          two-character padded digit string ("00"–"59")
 *  - label {string}          unit label ("hours", "minutes", "seconds")
 *  - animationSpeed {number}
 */
const TimeUnit = React.memo(function TimeUnit({ value, label, animationSpeed }) {
  const [d0, d1] = value.split("");

  return (
    <div className="flex flex-col items-center gap-2">
      {/* Two digit cards */}
      <div className="flex gap-[5px]">
        <FlipCard digit={d0} animationSpeed={animationSpeed} />
        <FlipCard digit={d1} animationSpeed={animationSpeed} />
      </div>

      {/* Label */}
      <span
        className="text-[10px] tracking-[0.4em] uppercase"
        style={{ color: "var(--text-muted)" }}
      >
        {label}
      </span>
    </div>
  );
});

export default TimeUnit;
