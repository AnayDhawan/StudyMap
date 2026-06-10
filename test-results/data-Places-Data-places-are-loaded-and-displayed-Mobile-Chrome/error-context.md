# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: data.spec.ts >> Places Data >> places are loaded and displayed
- Location: e2e\data.spec.ts:4:7

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('[class*="leaflet"]')
Expected: visible
Error: strict mode violation: locator('[class*="leaflet"]') resolved to 108 elements:
    1) <div tabindex="0" class="size-full leaflet-container leaflet-touch leaflet-retina leaflet-fade-anim leaflet-grab leaflet-touch-drag leaflet-touch-zoom">…</div> aka locator('div').nth(5)
    2) <div class="leaflet-pane leaflet-map-pane">…</div> aka locator('.leaflet-pane').first()
    3) <div class="leaflet-pane leaflet-tile-pane">…</div> aka locator('.leaflet-pane.leaflet-tile-pane')
    4) <div class="leaflet-layer ">…</div> aka locator('.leaflet-layer')
    5) <div class="leaflet-tile-container leaflet-zoom-animated">…</div> aka locator('.leaflet-tile-container')
    6) <img alt="" class="leaflet-tile leaflet-tile-loaded" src="https://c.tile.openstreetmap.org/11/1438/913.png"/> aka locator('img').nth(2)
    7) <img alt="" class="leaflet-tile leaflet-tile-loaded" src="https://a.tile.openstreetmap.org/11/1439/913.png"/> aka locator('img').nth(3)
    8) <img alt="" class="leaflet-tile leaflet-tile-loaded" src="https://b.tile.openstreetmap.org/11/1438/912.png"/> aka locator('img').nth(4)
    9) <img alt="" class="leaflet-tile leaflet-tile-loaded" src="https://c.tile.openstreetmap.org/11/1439/912.png"/> aka locator('img').nth(5)
    10) <img alt="" class="leaflet-tile leaflet-tile-loaded" src="https://a.tile.openstreetmap.org/11/1438/914.png"/> aka locator('img:nth-child(5)')
    ...

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('[class*="leaflet"]')

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - banner [ref=e2]:
    - generic [ref=e3]:
      - link "StudyMap" [ref=e4] [cursor=pointer]:
        - /url: /
        - img "StudyMap" [ref=e5]
      - generic [ref=e6]:
        - button "Toggle theme" [ref=e7]:
          - img
        - button "Open menu" [ref=e8]:
          - img
  - main [ref=e9]:
    - generic [ref=e11]:
      - generic [ref=e12]:
        - generic:
          - generic:
            - img
        - generic:
          - generic [ref=e93]:
            - button "Zoom in" [ref=e94] [cursor=pointer]: +
            - button "Zoom out" [ref=e95] [cursor=pointer]: −
          - generic [ref=e96]:
            - link "Leaflet" [ref=e97] [cursor=pointer]:
              - /url: https://leafletjs.com
              - img [ref=e98]
              - text: Leaflet
            - text: "| ©"
            - link "OpenStreetMap" [ref=e102] [cursor=pointer]:
              - /url: https://www.openstreetmap.org/copyright
            - text: contributors
      - button "Filters" [ref=e103]:
        - img
        - text: Filters
  - contentinfo [ref=e104]:
    - generic [ref=e105]:
      - paragraph [ref=e106]: StudyMap. Open source and self-hostable. Built for students.
      - navigation [ref=e107]:
        - link "Privacy" [ref=e108] [cursor=pointer]:
          - /url: /legal/privacy
        - link "Terms" [ref=e109] [cursor=pointer]:
          - /url: /legal/terms
        - link "Disclaimer" [ref=e110] [cursor=pointer]:
          - /url: /legal/disclaimer
        - link "Contribute" [ref=e111] [cursor=pointer]:
          - /url: /contribute
        - link "GitHub" [ref=e112] [cursor=pointer]:
          - /url: https://github.com/anaydhawan/studymap
  - region "Notifications alt+T"
  - button "Open Next.js Dev Tools" [ref=e118] [cursor=pointer]:
    - img [ref=e119]
  - alert [ref=e122]
```

# Test source

```ts
  1   | import { test, expect } from '@playwright/test';
  2   | 
  3   | test.describe('Places Data', () => {
  4   |   test('places are loaded and displayed', async ({ page }) => {
  5   |     await page.goto('/map');
  6   |     // Wait for map to hydrate and markers to load
  7   |     await page.waitForTimeout(2000);
  8   |     const mapContainer = page.locator('[class*="leaflet"]');
> 9   |     await expect(mapContainer).toBeVisible();
      |                                ^ Error: expect(locator).toBeVisible() failed
  10  |   });
  11  | 
  12  |   test('at least 10 places per category populated', async ({ page }) => {
  13  |     // This is a data validation test; we read the JSON files directly
  14  |     const fs = require('fs').promises;
  15  |     const path = require('path');
  16  | 
  17  |     const dataDir = 'data/places';
  18  |     const types = ['airport', 'train_station', 'exam_centre', 'library', 'book_shop', 'stationery', 'internet_cafe', 'imp_locations'];
  19  | 
  20  |     for (const type of types) {
  21  |       const filePath = path.join(dataDir, `${type}.json`);
  22  |       const content = await fs.readFile(filePath, 'utf-8');
  23  |       const places = JSON.parse(content);
  24  |       expect(places.length).toBeGreaterThanOrEqual(10);
  25  | 
  26  |       // Validate each place has required fields
  27  |       for (const place of places.slice(0, 3)) { // Check first 3
  28  |         expect(place).toHaveProperty('id');
  29  |         expect(place).toHaveProperty('name');
  30  |         expect(place).toHaveProperty('type');
  31  |         expect(place).toHaveProperty('city');
  32  |         expect(place).toHaveProperty('lat');
  33  |         expect(place).toHaveProperty('lng');
  34  |         expect(place).toHaveProperty('gmaps_link');
  35  |         expect(place).toHaveProperty('added_by');
  36  | 
  37  |         // Validate coordinate format
  38  |         expect(typeof place.lat).toBe('number');
  39  |         expect(typeof place.lng).toBe('number');
  40  |         expect(place.lat).toBeGreaterThan(18);
  41  |         expect(place.lat).toBeLessThan(20); // Mumbai region
  42  |         expect(place.lng).toBeGreaterThan(72);
  43  |         expect(place.lng).toBeLessThan(73);
  44  | 
  45  |         // Validate gmaps link
  46  |         expect(place.gmaps_link).toContain('maps.google.com');
  47  |       }
  48  |     }
  49  |   });
  50  | 
  51  |   test('no duplicate place IDs across categories', async ({ page }) => {
  52  |     const fs = require('fs').promises;
  53  |     const path = require('path');
  54  | 
  55  |     const dataDir = 'data/places';
  56  |     const types = ['airport', 'train_station', 'exam_centre', 'library', 'book_shop', 'stationery', 'internet_cafe', 'imp_locations'];
  57  |     const allIds = new Set<string>();
  58  | 
  59  |     for (const type of types) {
  60  |       const filePath = path.join(dataDir, `${type}.json`);
  61  |       const content = await fs.readFile(filePath, 'utf-8');
  62  |       const places = JSON.parse(content);
  63  | 
  64  |       for (const place of places) {
  65  |         expect(allIds.has(place.id)).toBeFalsy();
  66  |         allIds.add(place.id);
  67  |       }
  68  |     }
  69  | 
  70  |     expect(allIds.size).toBeGreaterThanOrEqual(80);
  71  |   });
  72  | });
  73  | 
  74  | test.describe('Resources Data', () => {
  75  |   test('JEE/NEET/UPSC files deleted', async ({ page }) => {
  76  |     const fs = require('fs').promises;
  77  |     const path = require('path');
  78  | 
  79  |     const dataDir = 'data/resources';
  80  |     const deletedFiles = ['jee.json', 'neet.json', 'upsc.json'];
  81  | 
  82  |     for (const file of deletedFiles) {
  83  |       const filePath = path.join(dataDir, file);
  84  |       const exists = await fs.access(filePath).then(() => true).catch(() => false);
  85  |       expect(exists).toBeFalsy();
  86  |     }
  87  |   });
  88  | 
  89  |   test('IB/IGCSE/SAT resources have valid links', async ({ page }) => {
  90  |     const fs = require('fs').promises;
  91  |     const path = require('path');
  92  | 
  93  |     const dataDir = 'data/resources';
  94  |     const boards = ['ib', 'igcse', 'sat'];
  95  | 
  96  |     for (const board of boards) {
  97  |       const filePath = path.join(dataDir, `${board}.json`);
  98  |       const content = await fs.readFile(filePath, 'utf-8');
  99  |       const resources = JSON.parse(content);
  100 | 
  101 |       expect(Array.isArray(resources)).toBeTruthy();
  102 | 
  103 |       for (const resource of resources.slice(0, 2)) { // Check first 2
  104 |         expect(resource).toHaveProperty('title');
  105 |         expect(resource).toHaveProperty('kind');
  106 |         expect(resource).toHaveProperty('url');
  107 | 
  108 |         // URL should be valid (not a placeholder)
  109 |         expect(resource.url).not.toContain('replace with');
```