# caloundraunited.com

Marketing site for **Caloundra United O35**, a Sunshine Coast over-35s football team in the Churches Sunshine Coast division.

Static site built with [Astro](https://astro.build/), deployed to Vercel, DNS via Cloudflare. No CMS — content is edited directly in this repo.

---

## Quick start

```bash
npm install
cp .env.example .env       # fill in PUBLIC_WEB3FORMS_ACCESS_KEY
npm run dev                # http://localhost:4321
npm run build              # → dist/
npm run preview            # serves dist/
```

Requires Node 20+.

---

## Updating content

All site content lives under `src/`. Edit, save, push — Vercel auto-deploys on every push to `main`.

### After a match

1. **Add the result** in [`src/data/fixtures.ts`](src/data/fixtures.ts) — find the matching fixture, add a `result: { gf: <us>, ga: <them> }`.
2. **Update the ladder** in [`src/data/ladder.ts`](src/data/ladder.ts) — replace the array with the new standings (top → bottom).
3. **(Optional) Write a match report** — add a markdown file in [`src/content/news/`](src/content/news/) following the frontmatter shape used in existing posts. To link it from the fixtures table, set `reportSlug: '<filename-without-extension>'` on the fixture.

The hero strip ("Next ▸ / League / Last ▸"), form summary, GF/GA, league position, and "form (last 5)" are all *derived* from these two files — no separate copy/paste.

### Add a news post

Drop a new `.md` file in `src/content/news/`:

```markdown
---
title: 'Headline goes here'
date: 2026-05-15
category: 'Match Report'      # one of: Match Report, Training, Club, Off-Pitch, Health, Pre-Season
excerpt: 'One-line summary used on the index and news pages.'
author: 'By the bench'
readTime: '5 min read'
heroLabel: 'round07-noosa.jpg' # caption inside the placeholder block
feature: false                 # set true to make this the headline post on / and /news
---

Body in markdown. Headings, lists, **bold**, *italic*, links — all standard.
```

The newest post automatically appears first; whichever post has `feature: true` becomes the big card. If none is featured, the most recent post takes that slot.

### Update the squad

Edit [`src/data/squad.ts`](src/data/squad.ts). Group by `gk | def | mid | fwd | staff`. The `stat` field accepts inline `<strong>...</strong>` for emphasis. Image filename in `imageLabel` is shown inside the placeholder until you drop a real photo into `public/assets/players/` and set `image:` instead.

### Add a real image

Drop the file into `public/assets/...` and reference it as `/assets/...` in the relevant data file or post frontmatter.

### Change an email, ground, or kickoff time

Edit [`src/data/site.ts`](src/data/site.ts). Used by the footer, contact page, and several inline references.

---

## Forms

The contact form posts to [Web3Forms](https://web3forms.com) via their public access key. To set up:

1. Sign up at <https://web3forms.com> (free, no credit card). Create an access key bound to **team@caloundraunited.com**.
2. Add the key to `.env` locally:
   ```
   PUBLIC_WEB3FORMS_ACCESS_KEY=your-key-here
   ```
3. In Vercel: **Settings → Environment Variables → Add** the same variable for *Production*, *Preview*, and *Development*.
4. (Optional) Spam protection via [Cloudflare Turnstile](https://dash.cloudflare.com/?to=/:account/turnstile): create a site key, add as `PUBLIC_TURNSTILE_SITE_KEY`. The Turnstile widget shows up automatically when this var is set.

The form uses an invisible honeypot (`botcheck`) regardless. Web3Forms sends submissions to the email you registered with.

---

## Deploy

### Vercel

1. Connect the GitHub repo to Vercel.
2. Framework preset: **Astro** (auto-detected).
3. Add env var: `PUBLIC_WEB3FORMS_ACCESS_KEY` (and optionally `PUBLIC_TURNSTILE_SITE_KEY`).
4. Deploy.

Every push to `main` triggers a production deploy. PRs get a preview URL.

### Cloudflare DNS

Once Vercel has deployed and given you a target hostname (something like `cname.vercel-dns.com`):

1. In Cloudflare, add a `CNAME` for `www` pointing to `cname.vercel-dns.com` — proxy status: **DNS only** (grey cloud) initially.
2. Add an `A` record (or `ALIAS`) for the apex `caloundraunited.com` per Vercel's domain instructions.
3. In Vercel **Settings → Domains**, add both `caloundraunited.com` and `www.caloundraunited.com`. Set one as the primary (suggest `www`) and have the other 308-redirect to it.
4. Once SSL is issued (~minute), you can flip Cloudflare proxy on (orange cloud) if you want their CDN/firewall in front. Not required.

---

## Project structure

```
src/
  components/        Nav, Strip, Footer, OppCrest, Placeholder
  content/news/      Markdown news posts
  data/              site.ts, fixtures.ts, ladder.ts, squad.ts, sponsors.ts
  layouts/           BaseLayout (head, fonts, nav, footer)
  pages/             /, /fixtures, /table, /squad, /news, /news/[slug], /contact
  styles/global.css  All styling — ported verbatim from the design prototype
public/
  assets/            crest.png, sponsors/, (drop player photos and match images here)
```

---

## Scaling content management later

If editing JSON gets tedious, two natural upgrades:

- **Google Sheets → JSON at build time.** A small Astro loader pulls a published sheet (Pts/W/D/L/etc.) at `npm run build`. You edit a sheet; trigger a Vercel rebuild from a bookmarked deploy hook URL.
- **Decap CMS / TinaCMS** — gives you a `/admin` UI that commits to this repo. Both are free and self-hosted. Worth it only once you want non-technical contributors.

Neither is needed yet. Two JSON files and a `git push` is fine for one-person ops.
