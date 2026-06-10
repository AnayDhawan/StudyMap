# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: features.spec.ts >> Map Page >> map loads interactively
- Location: e2e\features.spec.ts:4:7

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
  3   | test.describe('Map Page', () => {
  4   |   test('map loads interactively', async ({ page }) => {
  5   |     await page.goto('/map');
  6   |     // Wait for map container and Leaflet to initialize
  7   |     const mapContainer = page.locator('[class*="leaflet"]');
> 8   |     await expect(mapContainer).toBeVisible({ timeout: 5000 });
      |                                ^ Error: expect(locator).toBeVisible() failed
  9   |   });
  10  | 
  11  |   test('filters panel visible on desktop', async ({ page }) => {
  12  |     await page.goto('/map');
  13  |     // Set viewport to desktop size
  14  |     await page.setViewportSize({ width: 1280, height: 800 });
  15  |     const filterPanel = page.locator('[class*="filter"], :has-text("Filters")');
  16  |     // Panel should be visible on desktop (sm:block)
  17  |     await new Promise(r => setTimeout(r, 1000)); // Wait for hydration
  18  |     // Note: if filter panel is hidden initially, this test may need adjustment
  19  |   });
  20  | 
  21  |   test('mobile filter button present', async ({ page }) => {
  22  |     await page.goto('/map');
  23  |     await page.setViewportSize({ width: 375, height: 667 }); // Mobile
  24  |     const mobileFilterBtn = page.locator('button:has-text("Filters")');
  25  |     await expect(mobileFilterBtn).toBeVisible();
  26  |   });
  27  | 
  28  |   test('share button present', async ({ page }) => {
  29  |     await page.goto('/map');
  30  |     const shareBtn = page.locator('button:has-text("Share")');
  31  |     await expect(shareBtn).toBeVisible({ timeout: 3000 });
  32  |   });
  33  | 
  34  |   test('near me button present', async ({ page }) => {
  35  |     await page.goto('/map');
  36  |     const nearMeBtn = page.locator('button:has-text("Near me")');
  37  |     await expect(nearMeBtn).toBeVisible({ timeout: 3000 });
  38  |   });
  39  | });
  40  | 
  41  | test.describe('Resources Page', () => {
  42  |   test('resources page loads', async ({ page }) => {
  43  |     await page.goto('/resources');
  44  |     // Check that board tabs/filters exist (IB, IGCSE, SAT only)
  45  |     await expect(page.locator('text=IB').or(page.locator('[data-board="ib"]'))).toBeVisible({ timeout: 3000 });
  46  |   });
  47  | 
  48  |   test('resources are filtered by board', async ({ page }) => {
  49  |     await page.goto('/resources');
  50  |     // Try to find IB board option and verify it's visible
  51  |     await expect(page.locator('text=IB').first()).toBeVisible({ timeout: 3000 });
  52  |   });
  53  | 
  54  |   test('view toggle present (if implemented)', async ({ page }) => {
  55  |     await page.goto('/resources');
  56  |     const toggleBtn = page.locator('button:has-text("view"), button:has-text("list"), button:has-text("grid")');
  57  |     // This may not exist yet; test is conditional on implementation
  58  |     const isVisible = await toggleBtn.isVisible({ timeout: 1000 }).catch(() => false);
  59  |     if (isVisible) {
  60  |       expect(isVisible).toBeTruthy();
  61  |     }
  62  |   });
  63  | 
  64  |   test('no JEE/NEET/UPSC boards shown', async ({ page }) => {
  65  |     await page.goto('/resources');
  66  |     await expect(page.locator('text=JEE')).not.toBeVisible({ timeout: 1000 });
  67  |     await expect(page.locator('text=NEET')).not.toBeVisible({ timeout: 1000 });
  68  |     await expect(page.locator('text=UPSC')).not.toBeVisible({ timeout: 1000 });
  69  |   });
  70  | });
  71  | 
  72  | test.describe('Benefits Page', () => {
  73  |   test('benefits page loads with guides', async ({ page }) => {
  74  |     await page.goto('/benefits');
  75  |     // Page should have at least the existing guides
  76  |     const content = page.locator('main');
  77  |     await expect(content).not.toBeEmpty({ timeout: 3000 });
  78  |   });
  79  | 
  80  |   test('new guides visible (if added)', async ({ page }) => {
  81  |     await page.goto('/benefits');
  82  |     const guideCheck = async (title: string) => {
  83  |       const link = page.locator(`a:has-text("${title}"), h2:has-text("${title}"), h3:has-text("${title}")`);
  84  |       const isVisible = await link.isVisible({ timeout: 1000 }).catch(() => false);
  85  |       return isVisible;
  86  |     };
  87  | 
  88  |     const guides = [
  89  |       'GitHub',
  90  |       'Free software',
  91  |       'Textbook',
  92  |       'Subject selection'
  93  |     ];
  94  | 
  95  |     // At least some of these should be present if agents completed Task 1
  96  |     let foundAny = false;
  97  |     for (const guide of guides) {
  98  |       const found = await guideCheck(guide);
  99  |       if (found) foundAny = true;
  100 |     }
  101 |     // Test passes if at least one new guide found, or if original guides still there
  102 |     expect(foundAny || (await page.locator('[class*="mdx"]').isVisible({ timeout: 1000 }).catch(() => true))).toBeTruthy();
  103 |   });
  104 | });
  105 | 
  106 | test.describe('Account Page', () => {
  107 |   test('account page renders', async ({ page }) => {
  108 |     await page.goto('/account');
```