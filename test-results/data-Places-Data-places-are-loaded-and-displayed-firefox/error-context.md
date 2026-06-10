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
Error: strict mode violation: locator('[class*="leaflet"]') resolved to 120 elements:
    1) <div tabindex="0" class="size-full leaflet-container leaflet-touch leaflet-fade-anim leaflet-grab leaflet-touch-drag leaflet-touch-zoom">…</div> aka locator('div').nth(5)
    2) <div class="leaflet-pane leaflet-map-pane">…</div> aka locator('.leaflet-pane').first()
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
      - navigation [ref=e6]:
        - link "Map" [ref=e7] [cursor=pointer]:
          - /url: /map
        - link "Resources" [ref=e8] [cursor=pointer]:
          - /url: /resources
        - link "Student Docs" [ref=e9] [cursor=pointer]:
          - /url: /benefits
        - link "Account" [ref=e10] [cursor=pointer]:
          - /url: /account
      - button "Toggle theme" [ref=e12]:
        - img
  - main [ref=e13]:
    - generic [ref=e15]:
      - generic [ref=e16]:
        - generic:
          - generic:
            - img
        - generic:
          - generic [ref=e97]:
            - button "Zoom in" [ref=e98] [cursor=pointer]: +
            - button "Zoom out" [ref=e99] [cursor=pointer]: −
          - generic [ref=e100]:
            - link "Leaflet" [ref=e101] [cursor=pointer]:
              - /url: https://leafletjs.com
              - img [ref=e102]
              - text: Leaflet
            - text: "| ©"
            - link "OpenStreetMap" [ref=e106] [cursor=pointer]:
              - /url: https://www.openstreetmap.org/copyright
            - text: contributors
      - generic [ref=e107]:
        - generic [ref=e108]:
          - paragraph [ref=e110]: 80 places
          - generic [ref=e111]:
            - paragraph [ref=e112]: City
            - generic [ref=e113]:
              - checkbox "Mumbai" [ref=e114]
              - text: Mumbai
            - generic [ref=e115]:
              - checkbox "Thane" [ref=e116]
              - text: Thane
            - generic [ref=e117]:
              - checkbox "Navi Mumbai" [ref=e118]
              - text: Navi Mumbai
          - generic [ref=e119]:
            - paragraph [ref=e120]: Type
            - generic [ref=e121]:
              - checkbox "Book shop" [ref=e122]
              - generic [ref=e124]: Book shop
            - generic [ref=e125]:
              - checkbox "Library" [ref=e126]
              - generic [ref=e128]: Library
            - generic [ref=e129]:
              - checkbox "Exam centre" [ref=e130]
              - generic [ref=e132]: Exam centre
            - generic [ref=e133]:
              - checkbox "Important locations" [ref=e134]
              - generic [ref=e136]: Important locations
            - generic [ref=e137]:
              - checkbox "Stationery" [ref=e138]
              - generic [ref=e140]: Stationery
            - generic [ref=e141]:
              - checkbox "Internet cafe" [ref=e142]
              - generic [ref=e144]: Internet cafe
            - generic [ref=e145]:
              - checkbox "Airport" [ref=e146]
              - generic [ref=e148]: Airport
            - generic [ref=e149]:
              - checkbox "Train station" [ref=e150]
              - generic [ref=e152]: Train station
          - paragraph [ref=e153]: No filter selected means everything shows.
          - generic [ref=e154]: Filter places by city and type
        - generic [ref=e155]:
          - button "Near me" [ref=e157]:
            - img
            - text: Near me
          - button "Copy a shareable link to this view" [ref=e158]:
            - img
            - text: Share
  - contentinfo [ref=e159]:
    - generic [ref=e160]:
      - paragraph [ref=e161]: StudyMap. Open source and self-hostable. Built for students.
      - navigation [ref=e162]:
        - link "Privacy" [ref=e163] [cursor=pointer]:
          - /url: /legal/privacy
        - link "Terms" [ref=e164] [cursor=pointer]:
          - /url: /legal/terms
        - link "Disclaimer" [ref=e165] [cursor=pointer]:
          - /url: /legal/disclaimer
        - link "Contribute" [ref=e166] [cursor=pointer]:
          - /url: /contribute
        - link "GitHub" [ref=e167] [cursor=pointer]:
          - /url: https://github.com/anaydhawan/studymap
  - region "Notifications alt+T"
  - button "Open Next.js Dev Tools" [ref=e173] [cursor=pointer]:
    - img [ref=e174]
  - alert [ref=e178]
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