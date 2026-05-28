# Revolving Clock

A modern animated flip clock built with **Next.js 14**, **Framer Motion**, **Tailwind CSS**, and **MongoDB Atlas**.

---

## Tech Stack

| Layer       | Technology              |
|-------------|-------------------------|
| Frontend    | React + Next.js 14      |
| Styling     | Tailwind CSS            |
| Animation   | Framer Motion           |
| Backend API | Next.js API Routes      |
| Database    | MongoDB Atlas           |
| Deployment  | Vercel                  |

---

## Features

- 3D flip animation on every digit change (Framer Motion)
- 12h / 24h toggle
- Animation speed control (0.5×, 1×, 2×)
- Live date + auto-detected timezone
- Settings saved to MongoDB (theme, format, speed, timezone)
- Animated background with glowing orbs
- Fully responsive

---

## Project Structure

```
revolving-clock/
├── public/assets/
├── src/
│   ├── app/
│   │   ├── api/settings/route.js   ← GET + POST API
│   │   ├── globals.css
│   │   ├── layout.js
│   │   └── page.js
│   ├── components/
│   │   ├── Clock.jsx               ← Main controller
│   │   ├── FlipCard.jsx            ← Single digit flip animation
│   │   ├── TimeUnit.jsx            ← HH / MM / SS unit
│   │   └── BackgroundGlow.jsx      ← Animated background
│   ├── lib/
│   │   └── mongodb.js              ← Mongoose connection singleton
│   ├── styles/
│   │   └── animations.css          ← Custom keyframes
│   └── utils/
│       └── timeFormatter.js        ← Time/date formatting helpers
├── .env.local                      ← Add your MONGODB_URI here
├── next.config.js
├── tailwind.config.js
└── vercel.json
```

---




## Development Phases

- [x] Phase 1 — Next.js + Tailwind + basic clock
- [x] Phase 2 — Framer Motion flip animation
- [x] Phase 3 — Dark neon UI + glow effects
- [x] Phase 4 — MongoDB API routes + settings persistence
- [ ] Phase 5 — Deploy to Vercel (follow steps above)

---

## Future Features

- Multiple timezones
- Analog + digital mode toggle
- Alarm system
- Stopwatch / Pomodoro timer
- Sound effects
- Weather integration
- Fullscreen ambient mode
