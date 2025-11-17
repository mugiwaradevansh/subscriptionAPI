# 📡 Subscription Tracker MVP  

> Track every recurring cost, stay ahead of renewals, and keep Finance in sync — all from one sleek workspace.

---

## ✨ Highlights

| Area | Superpower |
| ---- | ---------- |
| 🛡️ Auth | Secure JWT sessions, `/auth/me` hydration, protected routes |
| 📊 Dashboard | Real-time monthly burn, priority-ordered renewal radar, actionable “Next actions” card |
| 🧠 Subscriptions | Full CRUD with categories, payment methods, notes, **priority levels**, day-left pills |
| 🔔 Workflows | Optional Upstash workflow hook to trigger renewal reminders |
| 🎨 Frontend | Modern React + Vite + Tailwind-inspired styling with custom gradients |

---

## 🏗️ Architecture & System Design

```
subscriptionAPI/
├── app.js                 # Express bootstrap (CORS, routers, DB)
├── controller/            # Auth, subscription, user, workflow logic
├── models/                # Mongoose schemas (User, Subscription)
├── routes/                # REST routers per resource
├── frontend/              # Vite React SPA
└── utils/, middlewares/   # Mailer, auth guard, error handler, etc.
```

### Tech Stack

| Layer | Tech | Purpose |
| ----- | ---- | ------- |
| API Core | **Node.js**, **Express 4**, **Mongoose 8**, **JWT** | RESTful endpoints, validation, auth strategy, MongoDB ODM |
| Data | **MongoDB Atlas** (or local) | Flexible schema for subscriptions, timestamps, indexes |
| Messaging | **Nodemailer** + Gmail / **Upstash Workflow** (optional) | Email reminders, scheduled background triggers |
| Security | **Helmet**, **CORS**, **Arcjet** | Hardened headers, preflight handling, optional bot & rate protection |
| Frontend | **React 18**, **React Router 6**, **Vite 5**, **Day.js** | SPA shell, client routing, fast dev server, date math |
| Styling | **Tailwind-inspired custom CSS**, gradients, pills | Consistent design tokens, responsive layout, micro-interactions |
| DX | **ESLint 9**, **Nodemon**, **dotenv** | Linting, live reload, env orchestration |

---

## 🧭 What I Built & Learned

| Track | Takeaways |
| ----- | --------- |
| 👨‍💻 Full-stack orchestration | How an industry subscription dashboard stitches together Express APIs, secure JWT flows, Mongo models, and a React SPA. |
| 🎯 Product thinking | Crafted dashboard KPIs (monthly burn, upcoming renewals) and CTA placement similar to SaaS billing tools (Stripe, Paddle). |
| 🧱 Component systems | Built reusable gradient pills, priority chips, and filter controls, mirroring design systems like WorkOS or Linear. |
| 🛰️ CORS & security | Implemented configurable multi-origin CORS with preflight support + helmet, reflecting production hardening. |
| 🔄 Workflow readiness | Abstracted reminder triggers via Upstash so scheduled jobs can be toggled per environment. |
| 📐 Data modeling | Expanded subscription schema with enums, validation, auto-renewal calculations—valuable for CRM/billing domains. |
| 🌈 UX polish | Responsive layout, animated loaders, and error states to match “big tech” onboarding polish. |

> **Skills unlocked:** REST API design, JWT session management, advanced CORS, React Router guards, Tailwind-style utility authoring, dayjs date math, SaaS dashboard copywriting, environment-driven builds.

---

## ⚙️ Setup

### 1. Clone & install

```bash
git clone <your-fork-url> subscriptionAPI
cd subscriptionAPI
npm install              # backend deps
cd frontend && npm install
```

### 2. Environment files

Create `.env.development.local` (and `.env.production.local` as needed).

```env
PORT=5500
CLIENT_URL=http://localhost:5173
DB_URI=<your-mongodb-uri>
JWT_SECRET=<super-secret>
JWT_EXPIRES_IN=7d
EMAIL_PASSWORD=<gmail-app-password>
ARCJET_KEY=optional
QSTASH_URL=optional
QSTASH_TOKEN=optional
```

Frontend (`frontend/.env`):

```env
VITE_API_URL=http://localhost:5500/api/v1
```

### 3. Run locally

```bash
# backend (root)
npm run dev

# frontend
cd frontend
npm run dev
```

Visit: `http://localhost:5173`

---

## 🔁 Key Workflows

### Authentication 🔐
- `POST /api/v1/auth/sign-up` → name/email/password, returns JWT + sanitized user
- `POST /api/v1/auth/sign-in`
- `GET /api/v1/auth/me` (protected) → session hydration
- `POST /api/v1/auth/sign-out`

### Subscriptions 📦
- `POST /api/v1/subscription` → name, price, currency, frequency, category, paymentMethod, startDate, optional renewalDate, notes, **priority**
- `GET /api/v1/subscription` → sorted by closest renewal; attaches user context
- `PUT/DELETE /api/v1/subscription/:id`
- `PUT /api/v1/subscription/:id/cancel`
- `GET /api/v1/subscription/summary`
- `GET /api/v1/subscription/upcoming-renewals?days=30`

### Frontend UX anchors 🖥️

| Screen | Purpose |
| ------ | ------- |
| Login/Register | Inline validation, onboarding copy |
| Dashboard | Priority-ordered radar, days-left chips, actionable metrics |
| Subscriptions | Filter by status/priority/due window, see days-left pill |
| Add Subscription | Large amount field, currency selector, notes, priority chips |
| Profile | Local + `/auth/me` hydration |

---

## 🧪 Testing & Quality

| Command | Action |
| ------- | ------ |
| `npm run dev` | Nodemon server with live reload |
| `npm run start` | Production server |
| `npm run build --prefix frontend` | Production bundle for SPA |
| `npm run preview --prefix frontend` | Serve built assets |
| `npm run lint` (if configured) | ESLint check |

Manual verification checklist:
1. Sign up, refresh, ensure session persists.
2. Add new subscription → watch dashboard metrics update.
3. Use filters to find subscriptions by priority/due window.
4. Cancel subscription → status updates + metrics adjust.
5. (Optional) Configure QStash + Nodemailer to test workflow/email path.

---

## 🚀 Deployment Notes

- **Backend**: host on Render, Railway, Fly.io, etc. Ensure env vars + Mongo URI are set. Use `npm start`.
- **Frontend**: build via `npm run build --prefix frontend` and serve `/frontend/dist`. Set `VITE_API_URL` to deployed API base.
- **CORS**: `CLIENT_URL` accepts comma-separated origins (e.g., `https://app.com,https://preview.netlify.app`).
- **Secrets**: never commit `.env*`. Use platform secret managers.

---

## 💡 Roadmap Ideas
- Team accounts & sharing
- Budget ceilings + anomaly alerts
- CSV import/export for finance ops
- Audit log + commenting

---

## 🧑‍🎨 Design & Industry Notes

- Typography + gradients inspired by Nimbus/Linear/Netflix dashboards.
- Priority chips and days-left pills mirror B2B billing UX (Paddle, Chargebee).
- “Next actions” replicates enterprise control towers with quantified tasks.
- Data cards reuse consistent spacing, blur, and glassmorphism for premium feel.
- Responsive layout validated from 320px → widescreen.

---

### ❤️ Contributions & Support

1. Fork & branch (`feat/awesome-upgrade`)
2. Follow existing lint/style guidelines
3. Open PR with before/after screenshots for UI changes

---

Made with calm focus and way too much coffee. ☕  
Questions, feedback, or feature requests? **Open an issue** – I’d love to collaborate!  

