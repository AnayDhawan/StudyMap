# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: navigation.spec.ts >> Navigation & Page Render >> navigate to /map page
- Location: e2e\navigation.spec.ts:19:7

# Error details

```
Error: expect(locator).toHaveCSS(expected) failed

Locator: locator('main')
Expected pattern: /calc/
Received string:  "664px"
Timeout: 5000ms

Call log:
  - Expect "toHaveCSS" with timeout 5000ms
  - waiting for locator('main')
    13 × locator resolved to <main class="flex flex-1 flex-col">…</main>
       - unexpected value "664px"

```

```yaml
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
  - paragraph: 80 places
  - paragraph: City
  - checkbox "Mumbai"
  - text: Mumbai
  - checkbox "Thane"
  - text: Thane
  - checkbox "Navi Mumbai"
  - text: Navi Mumbai
  - paragraph: Type
  - checkbox "Book shop"
  - text: Book shop
  - checkbox "Library"
  - text: Library
  - checkbox "Exam centre"
  - text: Exam centre
  - checkbox "Important locations"
  - text: Important locations
  - checkbox "Stationery"
  - text: Stationery
  - checkbox "Internet cafe"
  - text: Internet cafe
  - checkbox "Airport"
  - text: Airport
  - checkbox "Train station"
  - text: Train station
  - paragraph: No filter selected means everything shows.
  - text: Filter places by city and type
  - button "Near me"
  - button "Copy a shareable link to this view": Share
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
> 22  |     await expect(page.locator('main')).toHaveCSS('height', /calc/);
      |                                        ^ Error: expect(locator).toHaveCSS(expected) failed
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
  92  |       await expect(page.locator(`text=${type}`)).toBeVisible();
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