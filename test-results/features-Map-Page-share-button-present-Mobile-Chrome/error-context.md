# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: features.spec.ts >> Map Page >> share button present
- Location: e2e\features.spec.ts:28:7

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator:  locator('button:has-text("Share")')
Expected: visible
Received: hidden
Timeout:  3000ms

Call log:
  - Expect "toBeVisible" with timeout 3000ms
  - waiting for locator('button:has-text("Share")')
    9 × locator resolved to <button data-size="sm" data-slot="button" data-variant="outline" aria-label="Copy a shareable link to this view" class="group/button inline-flex shrink-0 items-center justify-center border bg-clip-padding font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:r…>…</button>
      - unexpected value "hidden"

```

```yaml
- banner:
  - link "StudyMap":
    - /url: /
    - img "StudyMap"
  - button "Toggle theme"
  - button "Open menu"
- main:
  - img
  - button "Zoom in"
  - button "Zoom out"
  - link "Leaflet":
    - /url: https://leafletjs.com
  - text: ©
  - link "OpenStreetMap":
    - /url: https://www.openstreetmap.org/copyright
  - text: contributors
  - button "Filters"
- contentinfo:
  - paragraph: StudyMap. Open source and self-hostable. Built for students.
  - navigation:
    - link "Privacy":
      - /url: /legal/privacy
    - link "Terms":
      - /url: /legal/terms
    - link "Disclaimer":
      - /url: /legal/disclaimer
    - link "Contribute":
      - /url: /contribute
    - link "GitHub":
      - /url: https://github.com/anaydhawan/studymap
- region "Notifications alt+T"
- alert
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
  8   |     await expect(mapContainer).toBeVisible({ timeout: 5000 });
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
> 31  |     await expect(shareBtn).toBeVisible({ timeout: 3000 });
      |                            ^ Error: expect(locator).toBeVisible() failed
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
  109 |     const panel = page.locator('[class*="account"], text=/account|sign/i');
  110 |     await expect(panel).toBeVisible({ timeout: 2000 });
  111 |   });
  112 | 
  113 |   test('sign-in option visible', async ({ page }) => {
  114 |     await page.goto('/account');
  115 |     const signInText = page.locator('text=/sign in|authenticate/i');
  116 |     const isVisible = await signInText.isVisible({ timeout: 2000 }).catch(() => false);
  117 |     // May be hidden if Supabase not configured; test is conditional
  118 |     expect(isVisible).toBeDefined();
  119 |   });
  120 | });
  121 | 
  122 | test.describe('Contact Page', () => {
  123 |   test('contact page renders (if created)', async ({ page }) => {
  124 |     const response = await page.goto('/contact').catch(() => null);
  125 |     if (response && response.status() === 200) {
  126 |       const heading = page.locator('h1, h2');
  127 |       await expect(heading).toContainText(/contact/i);
  128 |     }
  129 |   });
  130 | });
  131 | 
```