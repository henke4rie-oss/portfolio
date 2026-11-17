# Portfolio (Astro + Tailwind, DarkMinimal template)

## Edit your stuff
Everything personal lives in `src/site.ts`: name, email, links, projects, stack, skills.
Search that file for `TODO` (email, LinkedIn, Formspree ID).

## Run locally
    pnpm install
    pnpm dev        # http://localhost:4321/portfolio/

## Deploy (GitHub Pages)
1. Repo name must match `base` in `astro.config.mjs` (currently `/portfolio`).
   If your repo is `henke4rie-oss.github.io`, set `base: "/"`.
2. GitHub repo > Settings > Pages > Source: GitHub Actions.
3. Push to `main`. The workflow in `.github/workflows/deploy-pages.yml` builds and publishes.

Template: MIT, by Andres Hernandez (keep the footer credit).
