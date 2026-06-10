# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: navigation.spec.ts >> Navigation & Page Render >> navigate to /contact page
- Location: e2e\navigation.spec.ts:40:7

# Error details

```
Error: expect(locator).toContainText(expected) failed

Locator: locator('h1, h2')
Expected pattern: /contact/i
Error: strict mode violation: locator('h1, h2') resolved to 2 elements:
    1) <h1 class="font-heading text-3xl font-bold tracking-tight">Get in touch</h1> aka getByRole('heading', { name: 'Get in touch' })
    2) <h2 class="font-heading text-lg font-semibold">Frequently asked</h2> aka getByRole('heading', { name: 'Frequently asked' })

Call log:
  - Expect "toContainText" with timeout 5000ms
  - waiting for locator('h1, h2')

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
    - generic [ref=e10]:
      - heading "Get in touch" [level=1] [ref=e11]
      - paragraph [ref=e12]: Have a question, found a bug, or want to contribute? Here is how to reach us.
      - generic [ref=e13]:
        - generic [ref=e14]:
          - generic [ref=e16]:
            - img [ref=e17]
            - text: Email
          - generic [ref=e20]:
            - paragraph [ref=e21]: "For general questions or partnerships:"
            - link "anay@studymap.dev" [ref=e22] [cursor=pointer]:
              - /url: mailto:anay@studymap.dev
        - generic [ref=e23]:
          - generic [ref=e25]:
            - img [ref=e26]
            - text: GitHub Issues
          - generic [ref=e29]:
            - paragraph [ref=e30]: "Report bugs or suggest features:"
            - link "Open an issue" [ref=e31] [cursor=pointer]:
              - /url: https://github.com/anaydhawan/studymap/issues
        - generic [ref=e32]:
          - generic [ref=e34]:
            - img [ref=e35]
            - text: GitHub Discussions
          - generic [ref=e37]:
            - paragraph [ref=e38]: "Ask questions or discuss ideas:"
            - link "Start a discussion" [ref=e39] [cursor=pointer]:
              - /url: https://github.com/anaydhawan/studymap/discussions
        - generic [ref=e40]:
          - generic [ref=e42]:
            - img [ref=e43]
            - text: Report bad data
          - generic [ref=e46]:
            - paragraph [ref=e47]: Found incorrect place info?
            - link "Email us" [ref=e48] [cursor=pointer]:
              - /url: "mailto:anay@studymap.dev?subject=Report: Incorrect place data&body=Place name: %0ACity: %0AIssue: %0A"
      - generic [ref=e49]:
        - heading "Frequently asked" [level=2] [ref=e50]
        - generic [ref=e51]:
          - generic [ref=e52]:
            - heading "How do I contribute a new place?" [level=3] [ref=e53]
            - paragraph [ref=e54]:
              - text: See the
              - link "Contribute" [ref=e55] [cursor=pointer]:
                - /url: /contribute
              - text: page for step-by-step instructions.
          - generic [ref=e56]:
            - heading "How long does it take to review my pull request?" [level=3] [ref=e57]
            - paragraph [ref=e58]: Usually 1-3 days. Complex contributions or those needing clarification may take longer. Thanks for your patience.
          - generic [ref=e59]:
            - heading "Can I request a feature?" [level=3] [ref=e60]
            - paragraph [ref=e61]: Yes! Open a GitHub issue or discussion. Features are prioritized based on impact and volunteer availability.
          - generic [ref=e62]:
            - heading "How do I report a privacy or security issue?" [level=3] [ref=e63]
            - paragraph [ref=e64]: Do not post it publicly. Email anay@studymap.dev with details. We will respond within 48 hours.
          - generic [ref=e65]:
            - heading "Can I use StudyMap data in my own project?" [level=3] [ref=e66]
            - paragraph [ref=e67]:
              - text: Yes, it is released under CC0 (public domain). See the
              - link "Terms" [ref=e68] [cursor=pointer]:
                - /url: /legal/terms
              - text: page for details.
          - generic [ref=e69]:
            - heading "Is StudyMap free forever?" [level=3] [ref=e70]
            - paragraph [ref=e71]: Yes. StudyMap is open source and will always be free. The code is on GitHub if you want to self-host.
  - contentinfo [ref=e72]:
    - generic [ref=e73]:
      - paragraph [ref=e74]: StudyMap. Open source and self-hostable. Built for students.
      - navigation [ref=e75]:
        - link "Privacy" [ref=e76] [cursor=pointer]:
          - /url: /legal/privacy
        - link "Terms" [ref=e77] [cursor=pointer]:
          - /url: /legal/terms
        - link "Disclaimer" [ref=e78] [cursor=pointer]:
          - /url: /legal/disclaimer
        - link "Contribute" [ref=e79] [cursor=pointer]:
          - /url: /contribute
        - link "GitHub" [ref=e80] [cursor=pointer]:
          - /url: https://github.com/anaydhawan/studymap
  - region "Notifications alt+T"
  - button "Open Next.js Dev Tools" [ref=e86] [cursor=pointer]:
    - img [ref=e87]
  - alert [ref=e90]
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
> 42  |     await expect(page.locator('h1, h2')).toContainText(/contact/i);
      |                                          ^ Error: expect(locator).toContainText(expected) failed
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