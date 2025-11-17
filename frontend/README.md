# Subscription Tracker Frontend

This is a minimal, responsive React + Vite + Tailwind frontend for the Subscription Tracker API.

Quick start:

1. Install dependencies

```pwsh
cd frontend
npm install
```

2. Create a `.env` file in `frontend/` with your backend URL (optional)

```
VITE_API_URL=http://localhost:3000/api
```

3. Run the dev server

```pwsh
npm run dev
```

Notes:

- The app expects the backend API under `/api`. Adjust `VITE_API_URL` if your backend uses a different host or port.
- Endpoints used: `/auth/login`, `/auth/register`, `/subscriptions`, `/user/me`.
- This scaffold focuses on a clean, minimalist UI using a matte sky blue and dark navy theme.

If you want, I can:

- Add a more polished component library
- Wire up forms to all endpoints and add client-side validation
- Create a production build and show how to host it behind your Express server
