# StudyMap

A crowdsourced map of student-important places across the Mumbai Metropolitan Region (Mumbai, Thane, Navi Mumbai), with a past-paper catalogue and a student-benefits guide. Open source and self-hostable.

> This README is an early stub. A fuller version is on the way.

## What it does

- **Places map:** find exam centres, libraries, book shops, important locations, internet cafes, stationery shops, train stations, and airports across the MMR. Filter by type and city.
- **Resources:** curated links to past papers and official portals by board (IB, IGCSE, NEET, JEE, UPSC, SAT). The site never hosts files; it links out.
- **Local papers:** keep your own question papers and syllabi in a local `papers/` folder and browse them offline on localhost.
- **Benefits:** guides on claiming student perks, getting software free or discounted, travelling solo, and applying for a passport.
- **Personal pins (optional):** sign in with Google to save private places (home, school, coaching) visible only to you.

## Quick start

```bash
npm install
npm run dev
```

Open http://localhost:3000. The map, resources, papers, and benefits all work with no setup. Sign-in and personal pins are optional and only activate when Supabase environment variables are present (see `.env.example`).

## Run your own city

StudyMap ships pre-loaded for the Mumbai Metropolitan Region, but the data layer is plain JSON, so any city works.

1. **Localhost (default):** `npm install && npm run dev`. The map, resources, papers, and benefits all run with zero environment variables, reading place and resource data straight from `data/`.
2. **Add your own places:** drop records into `data/places/<type>.json` (one file per category, see `src/lib/types.ts` for the `PlaceType` union and record shape) or open a PR following the gate in `CONTRIBUTING.md`.
3. **Enable sign-in and personal pins (optional):** create a Supabase project, run the migration in `supabase/migrations/`, and copy `.env.example` to `.env.local` with your project URL and anon key. Full walkthrough in `supabase/README.md`. Without these set, the account UI stays hidden and the rest of the site is unaffected.
4. **Local papers:** drop files into `papers/<board>/` (gitignored, see `papers/README.md`); they show up at `/papers` on localhost only.
5. **Deploy:** push to your fork and import it on Vercel. No environment variables are required for a working deploy; add the Supabase ones later to turn on accounts.

## Tech

Next.js (App Router) + TypeScript + Tailwind + shadcn/ui + Leaflet (OpenStreetMap) + Supabase (auth and private pins only).

## Contributing

See `CONTRIBUTING.md`. Public places are submitted through GitHub with a citation and a quality check.

## License

See `LICENSE`.
