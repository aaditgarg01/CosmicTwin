# Cosmic Twin

A real-time web application designed to find "Cosmic Twins" among hundreds of participants by comparing their answers to a set of randomized thought-provoking questions.

## Live Deployment
🚀 **Play the live version here:** [https://cosmictwin.vercel.app](https://cosmictwin.vercel.app)

## Admin Dashboard
The admin dashboard is available at: [https://cosmictwin.vercel.app/admin.html](https://cosmictwin.vercel.app/admin.html)

## Technology Stack
- **Frontend:** HTML, CSS (Custom Animations, Mobile Responsive), Vanilla JS
- **Backend:** Vercel Serverless Functions (`/api/submit`, `/api/participants`)
- **Database:** Upstash Redis (Vercel KV)

## Features
- **Scroll-Scrub Video Animation:** High-performance, mobile-optimized background video tied to scroll events.
- **Randomized Question Bank:** 100 questions total, dynamically selecting 20 unique questions per user.
- **Real-Time Polling Engine:** Serverless-compatible polling algorithm to simulate real-time updates for the admin dashboard.
- **Intersection Matching Algorithm:** Compares exact questions answered across participants to find the strongest match percentage.
