# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: navigation.spec.ts >> Hero Section >> marker color legend visible
- Location: e2e\navigation.spec.ts:84:7

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('text=Book shop')
Expected: visible
Error: strict mode violation: locator('text=Book shop') resolved to 2 elements:
    1) <p class="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">Exam centres, libraries, book shops, stationery, …</p> aka getByText('Exam centres, libraries, book')
    2) <li class="flex items-center gap-2 text-xs text-muted-foreground">…</li> aka getByText('Book shop', { exact: true })

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('text=Book shop')

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
        - paragraph [ref=e17]: Mumbai · Thane · Navi Mumbai
        - heading "Every place a student needs, on one map." [level=1] [ref=e18]
        - paragraph [ref=e19]: Exam centres, libraries, book shops, stationery, and the spots that actually matter, across the Mumbai Metropolitan Region. Crowdsourced, open-source, free.
        - generic [ref=e20]:
          - link "Open the map" [ref=e21] [cursor=pointer]:
            - /url: /map
            - text: Open the map
            - img
          - link "Add a place" [ref=e22] [cursor=pointer]:
            - /url: https://github.com/anaydhawan/studymap
        - paragraph [ref=e23]: 80places · 8 categories · 3 cities · 100% open data
        - list [ref=e24]:
          - listitem [ref=e25]: Book shop
          - listitem [ref=e27]: Library
          - listitem [ref=e29]: Exam centre
          - listitem [ref=e31]: Important locations
          - listitem [ref=e33]: Stationery
          - listitem [ref=e35]: Internet cafe
          - listitem [ref=e37]: Airport
          - listitem [ref=e39]: Train station
      - generic [ref=e42]:
        - generic [ref=e43]: Loading map...
        - generic: Live data, OpenStreetMap
        - link "Open the full interactive map" [ref=e44] [cursor=pointer]:
          - /url: /map
          - generic [ref=e45]:
            - text: Open full map
            - img [ref=e46]
    - generic [ref=e50]:
      - generic [ref=e51]:
        - paragraph [ref=e52]: Open source
        - heading "Built by students, for students." [level=2] [ref=e53]
        - paragraph [ref=e54]: Every pin is community-contributed and reviewed before it lands. Know a place worth adding? Send it in and help the next student find it.
      - link "Contribute on GitHub" [ref=e55] [cursor=pointer]:
        - /url: https://github.com/anaydhawan/studymap
  - contentinfo [ref=e56]:
    - generic [ref=e57]:
      - paragraph [ref=e58]: StudyMap. Open source and self-hostable. Built for students.
      - navigation [ref=e59]:
        - link "Privacy" [ref=e60] [cursor=pointer]:
          - /url: /legal/privacy
        - link "Terms" [ref=e61] [cursor=pointer]:
          - /url: /legal/terms
        - link "Disclaimer" [ref=e62] [cursor=pointer]:
          - /url: /legal/disclaimer
        - link "Contribute" [ref=e63] [cursor=pointer]:
          - /url: /contribute
        - link "GitHub" [ref=e64] [cursor=pointer]:
          - /url: https://github.com/anaydhawan/studymap
  - region "Notifications alt+T"
  - button "Open Next.js Dev Tools" [ref=e70] [cursor=pointer]:
    - img [ref=e71]
  - alert [ref=e75]
```

# Test source

```ts
  1   | import { test, expect } from '@playwright/test';
  2   | 
  3   | test.describe('Navigation & Page Render', () => {
  4   |   test('homepage loads with hero', async ({ page }) => {
  5   |     await page.goto('/');
  6   |     await expect(page.locator('h1')).toContainText('Every place a student needs');
  7   |     await expect(page.locator('[class*="kicker"]')).toContainText('Mumbai');
  8   |   });
  9   | 
  10  |   test('navbar links present and working', async ({ page }) => {
  11  |     await page.goto('/');
  12  |     const navbar = page.locator('header nav');
  13  |     await expect(navbar.locator('a[href="/map"]')).toBeVisible();
  14  |     await expect(navbar.locator('a[href="/resources"]')).toBeVisible();
  15  |     await expect(navbar.locator('a[href="/benefits"]')).toBeVisible();
  16  |     await expect(navbar.locator('a[href="/account"]')).toBeVisible();
  17  |   });
  18  | 
  19  |   test('navigate to /map page', async ({ page }) => {
  20  |     await page.goto('/map');
  21  |     // Map page should load with full-height container
  22  |     await expect(page.locator('main')).toHaveCSS('height', /calc/);
  23  |   });
  24  | 
  25  |   test('navigate to /resources page', async ({ page }) => {
  26  |     await page.goto('/resources');
  27  |     await expect(page).toHaveTitle(/resources/i);
  28  |   });
  29  | 
  30  |   test('navigate to /benefits page', async ({ page }) => {
  31  |     await page.goto('/benefits');
  32  |     await expect(page).toHaveTitle(/benefits|student docs/i);
  33  |   });
  34  | 
  35  |   test('navigate to /account page', async ({ page }) => {
  36  |     await page.goto('/account');
  37  |     await expect(page).toHaveTitle(/account/i);
  38  |   });
  39  | 
  40  |   test('navigate to /contact page', async ({ page }) => {
  41  |     await page.goto('/contact');
  42  |     await expect(page.locator('h1, h2')).toContainText(/contact/i);
  43  |   });
  44  | 
  45  |   test('navigate to /legal/privacy', async ({ page }) => {
  46  |     await page.goto('/legal/privacy');
  47  |     await expect(page).toHaveTitle(/privacy/i);
  48  |   });
  49  | 
  50  |   test('navigate to /legal/terms', async ({ page }) => {
  51  |     await page.goto('/legal/terms');
  52  |     await expect(page).toHaveTitle(/terms/i);
  53  |   });
  54  | 
  55  |   test('navigate to /legal/disclaimer', async ({ page }) => {
  56  |     await page.goto('/legal/disclaimer');
  57  |     await expect(page).toHaveTitle(/disclaimer/i);
  58  |   });
  59  | 
  60  |   test('footer "How to Contribute" link present', async ({ page }) => {
  61  |     await page.goto('/');
  62  |     await page.locator('footer').scrollIntoViewIfNeeded();
  63  |     const contributeLink = page.locator('footer a[href*="contribute"], footer a:has-text("Contribute")');
  64  |     await expect(contributeLink).toBeVisible();
  65  |   });
  66  | 
  67  |   test('footer legal links present', async ({ page }) => {
  68  |     await page.goto('/');
  69  |     await page.locator('footer').scrollIntoViewIfNeeded();
  70  |     await expect(page.locator('footer a[href*="privacy"]')).toBeVisible();
  71  |     await expect(page.locator('footer a[href*="terms"]')).toBeVisible();
  72  |     await expect(page.locator('footer a[href*="disclaimer"]')).toBeVisible();
  73  |   });
  74  | });
  75  | 
  76  | test.describe('Hero Section', () => {
  77  |   test('homepage shows place count and stats', async ({ page }) => {
  78  |     await page.goto('/');
  79  |     await expect(page.locator('p:has-text("places")')).toBeVisible();
  80  |     await expect(page.locator('p:has-text("categories")')).toBeVisible();
  81  |     await expect(page.locator('p:has-text("cities")')).toBeVisible();
  82  |   });
  83  | 
  84  |   test('marker color legend visible', async ({ page }) => {
  85  |     await page.goto('/');
  86  |     // Check that all 8 place type labels are shown
  87  |     const placeTypes = [
  88  |       'Book shop', 'Library', 'Exam centre', 'Important locations',
  89  |       'Stationery', 'Internet cafe', 'Airport', 'Train station'
  90  |     ];
  91  |     for (const type of placeTypes) {
> 92  |       await expect(page.locator(`text=${type}`)).toBeVisible();
      |                                                  ^ Error: expect(locator).toBeVisible() failed
  93  |     }
  94  |   });
  95  | 
  96  |   test('CTA buttons clickable', async ({ page }) => {
  97  |     await page.goto('/');
  98  |     const mapBtn = page.locator('a:has-text("Open the map")');
  99  |     const contributeBtn = page.locator('a:has-text("Add a place")');
  100 |     await expect(mapBtn).toBeVisible();
  101 |     await expect(contributeBtn).toBeVisible();
  102 |   });
  103 | });
  104 | 
```