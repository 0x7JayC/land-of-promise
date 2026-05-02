# Land of Promise — Next.js

Implementation of the Land of Promise Minecraft community design as a Next.js (App Router) app, deployable to Vercel.

## Local dev

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Deploy to Vercel

```bash
npx vercel        # preview
npx vercel --prod # production
```

Or push to GitHub and import the repo in the Vercel dashboard — no config needed.

## Structure

- `design/index.html` — original design source from the Claude Design handoff bundle
- `app/page.jsx` — renders the design at build/request time (server component reads the HTML, splits style/body/script, injects via Next's `<Script>`)
- `app/layout.jsx` — root layout, loads Press Start 2P + Nunito fonts
