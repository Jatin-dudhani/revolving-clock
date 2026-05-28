"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FlipCard = ({ digit, animationSpeed = 1 }) => {
  const [current, setCurrent] = useState(digit);
  const [previous, setPrevious] = useState(digit);
  const [flipping, setFlipping] = useState(false);

  const duration = 0.35 / animationSpeed;

  useEffect(() => {
    if (digit !== current) {
      setPrevious(current);
      setFlipping(true);
      const t = setTimeout(() => {
        setCurrent(digit);
        setFlipping(false);
      }, duration * 1000);
      return () => clearTimeout(t);
    }
  }, [digit]);

  return (
    <div style={{
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
      color: "var(--text)",
    }}>

      {/* Always visible current digit */}
      <span style={{ userSelect: "none" }}>{current}</span>

      {/* Flip overlay — only shown during animation */}
      <AnimatePresence>
        {flipping && (
          <motion.div
            key={`${previous}-${current}`}
            initial={{ rotateX: 0 }}
            animate={{ rotateX: -180 }}
            transition={{ duration, ease: [0.4, 0, 0.2, 1] }}
            style={{
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
              backfaceVisibility: "hidden",
            }}
          >
            {previous}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Centre divider */}
      <div style={{
        position: "absolute", left: 0, right: 0, top: "50%",
        height: "1px",
        background: "linear-gradient(90deg, transparent, var(--accent-cyan), transparent)",
        opacity: 0.35,
        pointerEvents: "none",
        zIndex: 10,
      }} />
    </div>
  );
};

export default FlipCard;