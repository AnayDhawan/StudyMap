# Contributing to StudyMap

Thanks for helping students find their way around. The most useful contribution is a real, verified place. Everything works on localhost with no setup, so you can preview your change before opening a pull request.

## Ways to contribute

- **Add a public place** (library, exam centre, book shop, stationery, and so on)
- **Fix incorrect data** (wrong coordinates, outdated name, broken link)
- **Fix code or docs**

## Quality gate for places

Public places live in the repo as JSON and must be trustworthy. Before a place is merged it must clear this gate, with proof shown in the PR:

- A **source or citation** showing the place is real and reputable
- A **Google Maps rating of 4.0 or higher**
- **50 or more Google Maps reviews**
- A **date you verified** the place and its coordinates

Proof goes in the pull request, never in the committed JSON.

## The place record

Each place is one object inside `data/places/<type>.json`. Valid types: `book_shop`, `library`, `exam_centre`, `imp_locations`, `stationery`, `internet_cafe`, `airport`, `train_station`.

```json
{
  "id": "mum-library-07",
  "name": "City Library, Dadar branch",
  "type": "library",
  "city": "mumbai",
  "lat": 19.0176,
  "lng": 72.8562,
  "address": "Optional, short and human-readable",
  "gmaps_link": "https://maps.app.goo.gl/...",
  "added_by": "your-github-handle"
}
```

- `city` is one of: `mumbai`, `thane`, `navi_mumbai`
- `id` format: `<city-prefix>-<type>-<number>`, unique within the file
- Coordinates: `lat` 18-20, `lng` 72-73 (Mumbai Metropolitan Region)
- Do not add rating, review count, or verified date to the JSON. Those go in the PR.

## House rules

- Conventional commit messages, one logical change per commit
- No em dashes in any copy
- Run `npm run dev` and verify your change on localhost before opening a PR
- Questions: open an issue or email [dhawansanay@gmail.com](mailto:dhawansanay@gmail.com)
