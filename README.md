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

## Local Setup

### 1. Install dependencies

```bash
npm install
```

### 2. Configure environment

Edit `.env.local` and add your MongoDB Atlas URI:

```
MONGODB_URI=mongodb+srv://<user>:<pass>@cluster0.xxxxx.mongodb.net/revolving-clock?retryWrites=true&w=majority
```

Get this from: [https://cloud.mongodb.com](https://cloud.mongodb.com) → your cluster → Connect → Drivers.

### 3. Run in development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Deploy to Vercel

### Step 1 — Push to GitHub

```bash
git init
git add .
git commit -m "initial commit"
git remote add origin https://github.com/your-username/revolving-clock.git
git push -u origin main
```

### Step 2 — Import on Vercel

Go to [https://vercel.com/new](https://vercel.com/new) and import your GitHub repo.

### Step 3 — Add environment variable

In Vercel project settings → Environment Variables:

```
MONGODB_URI = mongodb+srv://...
```

### Step 4 — Deploy

Click **Deploy**. Vercel auto-builds and hosts on a global CDN.

---

## API Reference

### `GET /api/settings?sessionId=<id>`

Returns saved preferences for a session.

```json
{
  "theme": "dark",
  "timezone": "Asia/Kolkata",
  "animationSpeed": 1,
  "timeFormat": "12"
}
```

### `POST /api/settings`

Saves preferences. Body:

```json
{
  "sessionId": "uuid",
  "theme": "dark",
  "timezone": "Asia/Kolkata",
  "animationSpeed": 1,
  "timeFormat": "24"
}
```

---

## MongoDB Schema

Collection: `preferences`

```json
{
  "sessionId":      "string (unique)",
  "theme":          "dark | light",
  "timezone":       "IANA timezone string",
  "animationSpeed": 0.25 – 2,
  "timeFormat":     "12 | 24",
  "createdAt":      "ISO date",
  "updatedAt":      "ISO date"
}
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
