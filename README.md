# Draco Dynasty SaaS Starter (Full)

This scaffold contains a production-ready starter layout for a SaaS storefront with Stripe billing.
It includes:
- Go backend scaffold (handlers + Stripe webhook placeholder)
- PostgreSQL migration SQL for multi-tenant models
- Next.js frontend scaffold (marketing + dashboard + billing)
- Dockerfiles and env examples

## What you cannot host on GitHub Pages
GitHub Pages can serve only static files. This full SaaS requires a backend (API, DB, webhooks) and cannot run on GitHub Pages alone.
You can however export the frontend (`next export`) and host the static storefront on GitHub Pages, but billing/webhooks/auth will require proper server hosting (Render / Vercel serverless functions / Fly / Heroku).

## Quick start (local)
- Backend: set up Postgres, populate .env, `go run ./backend`
- Frontend: `cd frontend && npm install && npm run dev` (set NEXT_PUBLIC_API_URL)

## Deploy
- Frontend: Vercel (connect GitHub), set NEXT_PUBLIC_API_URL
- Backend: Render / Railway / Fly with Docker or Go build, set env vars and attach Postgres
- Stripe: set STRIPE_SECRET_KEY and STRIPE_WEBHOOK_SECRET; configure webhook endpoint on provider

## Files of interest
- backend/: Go server
- backend/models.sql: DB migration
- frontend/: Next.js site
- Dockerfile(s) & .env.example

## License
MIT
