/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#050816",
        card: "#111827",
        accent: "#00F5FF",
        purple: "#9b5de5",
        pink: "#f72585",
      },
      fontFamily: {
        mono: ["'Share Tech Mono'", "monospace"],
        ui: ["'Rajdhani'", "sans-serif"],
      },
      keyframes: {
        colonPulse: {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "0.15" },
        },
        orbDrift: {
          "0%": { transform: "translate(0,0) scale(1)" },
          "100%": { transform: "translate(40px,30px) scale(1.1)" },
        },
      },
      animation: {
        colonPulse: "colonPulse 1s step-end infinite",
        orbDrift: "orbDrift 16s ease-in-out infinite alternate",
      },
    },
  },
  plugins: [],
};
