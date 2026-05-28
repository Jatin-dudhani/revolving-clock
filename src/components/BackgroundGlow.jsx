"use client";

/**
 * BackgroundGlow.jsx
 * Renders animated glowing orbs and sets the atmospheric background.
 * Pure CSS — no JS animation overhead.
 */
export default function BackgroundGlow() {
  const orbs = [
    {
      className: "w-[520px] h-[520px] -top-32 -left-24",
      color: "radial-gradient(circle, #0e2a5e 0%, transparent 70%)",
      duration: "16s",
      delay: "0s",
    },
    {
      className: "w-[420px] h-[420px] -bottom-20 -right-20",
      color: "radial-gradient(circle, #1a0540 0%, transparent 70%)",
      duration: "20s",
      delay: "-7s",
    },
    {
      className: "w-[260px] h-[260px] top-[40%] left-[55%]",
      color: "radial-gradient(circle, #081428 0%, transparent 70%)",
      duration: "11s",
      delay: "-3s",
    },
  ];

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {orbs.map((orb, i) => (
        <div
          key={i}
          className={`absolute rounded-full opacity-55 ${orb.className}`}
          style={{
            background: orb.color,
            filter: "blur(80px)",
            animation: `orbDrift ${orb.duration} ease-in-out infinite alternate`,
            animationDelay: orb.delay,
          }}
        />
      ))}
    </div>
  );
}
