# StudyMap — Expansion Roadmap

This file tracks where StudyMap is going. Each phase builds on the previous; nothing here is a firm commitment.

## Phase 1 — Lean core (current)

Goal: clean, expandable codebase. Public, working, zero-setup.

- [x] 8 place types, 80+ places across MMR
- [x] Filter by type and city
- [x] Shareable URLs (filter + focus state in query params)
- [x] Near Me (geolocation, closest 5 places)
- [x] Dark/light mode
- [x] Mobile-responsive
- [x] Playwright E2E suite (chromium, firefox, Mobile Chrome)
- [ ] Org migration: transfer repo to `student-place` GitHub org
- [ ] Update Vercel project + README badges after org migration

## Phase 2 — More cities and better data

Goal: expand MMR coverage, add more cities.

- [ ] Increase place count per category (target 20+ per type)
- [ ] GitHub issue templates for place submissions (guided form)
- [ ] PR-based review workflow documented in CONTRIBUTING.md
- [ ] City expansion: Pune, Bengaluru (schema is already city-keyed — just add data + city constant)
- [ ] `address` field display in popup (currently hidden if present)
- [ ] Sort/display by distance in sidebar without requiring "Near Me"

## Phase 3 — Auth + personal pins (resurrection)

Auth and personal pins were removed from the lean build but live in git history.

Resurrection commit: `dbefdb1` (`refactor: remove account/auth/Supabase`) — all deleted files recoverable from the parent.

- [ ] Supabase project setup guide
- [ ] Google OAuth sign-in
- [ ] Personal pins (home, school, coaching) — visible only to signed-in user
- [ ] Personal pin filter toggle in sidebar
- [ ] Migration: `supabase/migrations/0001_personal_pins.sql`

## Phase 4 — In-app submission + moderation

Goal: lower the contribution bar from "open a PR" to "fill a form".

- [ ] In-app place submission form (name, type, city, lat/lng from map click, gmaps link)
- [ ] Supabase queue for pending submissions
- [ ] Maintainer moderation UI (approve/reject with reason)
- [ ] Auto-PR generation on approval (GitHub API)
- [ ] Duplicate detection on submission (nearest-neighbor check)

## Sibling repos (under `student-place` org)

Once the org exists, these can be separate repos:

| Repo | Purpose |
|------|---------|
| `student-place/studymap` | This repo (map core) |
| `student-place/resources` | Curated past-paper and portal links by board |
| `student-place/student-docs` | MDX guides: GitHub Student Pack, free software, travel |
| `student-place/contribute-bot` | GitHub bot for place submission automation |
