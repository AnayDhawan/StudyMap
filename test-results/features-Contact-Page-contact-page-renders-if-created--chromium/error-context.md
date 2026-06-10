# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: features.spec.ts >> Contact Page >> contact page renders (if created)
- Location: e2e\features.spec.ts:123:7

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
    - generic [ref=e14]:
      - heading "Get in touch" [level=1] [ref=e15]
      - paragraph [ref=e16]: Have a question, found a bug, or want to contribute? Here is how to reach us.
      - generic [ref=e17]:
        - generic [ref=e18]:
          - generic [ref=e20]:
            - img [ref=e21]
            - text: Email
          - generic [ref=e24]:
            - paragraph [ref=e25]: "For general questions or partnerships:"
            - link "anay@studymap.dev" [ref=e26] [cursor=pointer]:
              - /url: mailto:anay@studymap.dev
        - generic [ref=e27]:
          - generic [ref=e29]:
            - img [ref=e30]
            - text: GitHub Issues
          - generic [ref=e33]:
            - paragraph [ref=e34]: "Report bugs or suggest features:"
            - link "Open an issue" [ref=e35] [cursor=pointer]:
              - /url: https://github.com/anaydhawan/studymap/issues
        - generic [ref=e36]:
          - generic [ref=e38]:
            - img [ref=e39]
            - text: GitHub Discussions
          - generic [ref=e41]:
            - paragraph [ref=e42]: "Ask questions or discuss ideas:"
            - link "Start a discussion" [ref=e43] [cursor=pointer]:
              - /url: https://github.com/anaydhawan/studymap/discussions
        - generic [ref=e44]:
          - generic [ref=e46]:
            - img [ref=e47]
            - text: Report bad data
          - generic [ref=e50]:
            - paragraph [ref=e51]: Found incorrect place info?
            - link "Email us" [ref=e52] [cursor=pointer]:
              - /url: "mailto:anay@studymap.dev?subject=Report: Incorrect place data&body=Place name: %0ACity: %0AIssue: %0A"
      - generic [ref=e53]:
        - heading "Frequently asked" [level=2] [ref=e54]
        - generic [ref=e55]:
          - generic [ref=e56]:
            - heading "How do I contribute a new place?" [level=3] [ref=e57]
            - paragraph [ref=e58]:
              - text: See the
              - link "Contribute" [ref=e59] [cursor=pointer]:
                - /url: /contribute
              - text: page for step-by-step instructions.
          - generic [ref=e60]:
            - heading "How long does it take to review my pull request?" [level=3] [ref=e61]
            - paragraph [ref=e62]: Usually 1-3 days. Complex contributions or those needing clarification may take longer. Thanks for your patience.
          - generic [ref=e63]:
            - heading "Can I request a feature?" [level=3] [ref=e64]
            - paragraph [ref=e65]: Yes! Open a GitHub issue or discussion. Features are prioritized based on impact and volunteer availability.
          - generic [ref=e66]:
            - heading "How do I report a privacy or security issue?" [level=3] [ref=e67]
            - paragraph [ref=e68]: Do not post it publicly. Email anay@studymap.dev with details. We will respond within 48 hours.
          - generic [ref=e69]:
            - heading "Can I use StudyMap data in my own project?" [level=3] [ref=e70]
            - paragraph [ref=e71]:
              - text: Yes, it is released under CC0 (public domain). See the
              - link "Terms" [ref=e72] [cursor=pointer]:
                - /url: /legal/terms
              - text: page for details.
          - generic [ref=e73]:
            - heading "Is StudyMap free forever?" [level=3] [ref=e74]
            - paragraph [ref=e75]: Yes. StudyMap is open source and will always be free. The code is on GitHub if you want to self-host.
  - contentinfo [ref=e76]:
    - generic [ref=e77]:
      - paragraph [ref=e78]: StudyMap. Open source and self-hostable. Built for students.
      - navigation [ref=e79]:
        - link "Privacy" [ref=e80] [cursor=pointer]:
          - /url: /legal/privacy
        - link "Terms" [ref=e81] [cursor=pointer]:
          - /url: /legal/terms
        - link "Disclaimer" [ref=e82] [cursor=pointer]:
          - /url: /legal/disclaimer
        - link "Contribute" [ref=e83] [cursor=pointer]:
          - /url: /contribute
        - link "GitHub" [ref=e84] [cursor=pointer]:
          - /url: https://github.com/anaydhawan/studymap
  - region "Notifications alt+T"
  - button "Open Next.js Dev Tools" [ref=e90] [cursor=pointer]:
    - img [ref=e91]
  - alert [ref=e94]
```

# Test source

```ts
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
> 127 |       await expect(heading).toContainText(/contact/i);
      |                             ^ Error: expect(locator).toContainText(expected) failed
  128 |     }
  129 |   });
  130 | });
  131 | 
  132 | test.describe('Theme Toggle', () => {
  133 |   test('theme toggle button present', async ({ page }) => {
  134 |     await page.goto('/');
  135 |     const themeBtn = page.locator('button[aria-label*="theme"], button:has-text("☀"), button:has-text("🌙")');
  136 |     await expect(themeBtn).toBeVisible();
  137 |   });
  138 | 
  139 |   test('light and dark mode render correctly', async ({ page }) => {
  140 |     await page.goto('/');
  141 |     const html = page.locator('html');
  142 | 
  143 |     // Check light mode (default or forced)
  144 |     await html.evaluate(el => el.classList.remove('dark'));
  145 |     let bgColor = await page.evaluate(() => window.getComputedStyle(document.body).backgroundColor);
  146 |     expect(bgColor).not.toContain('0, 0, 0'); // Not black
  147 | 
  148 |     // Switch to dark
  149 |     await html.evaluate(el => el.classList.add('dark'));
  150 |     bgColor = await page.evaluate(() => window.getComputedStyle(document.body).backgroundColor);
  151 |     // Dark should be darker (can't test exact value due to CSS var resolution)
  152 |     expect(bgColor).toBeDefined();
  153 |   });
  154 | });
  155 | 
  156 | test.describe('Responsive Design', () => {
  157 |   test('mobile viewport (375px)', async ({ page }) => {
  158 |     await page.setViewportSize({ width: 375, height: 667 });
  159 |     await page.goto('/');
  160 |     const heading = page.locator('h1');
  161 |     await expect(heading).toBeVisible();
  162 |   });
  163 | 
  164 |   test('tablet viewport (768px)', async ({ page }) => {
  165 |     await page.setViewportSize({ width: 768, height: 1024 });
  166 |     await page.goto('/');
  167 |     const heading = page.locator('h1');
  168 |     await expect(heading).toBeVisible();
  169 |   });
  170 | 
  171 |   test('desktop viewport (1280px)', async ({ page }) => {
  172 |     await page.setViewportSize({ width: 1280, height: 800 });
  173 |     await page.goto('/');
  174 |     const heading = page.locator('h1');
  175 |     await expect(heading).toBeVisible();
  176 |   });
  177 | 
  178 |   test('navbar collapses on mobile', async ({ page }) => {
  179 |     await page.goto('/');
  180 | 
  181 |     // Desktop: nav visible
  182 |     await page.setViewportSize({ width: 1280, height: 800 });
  183 |     let desktopNav = page.locator('nav[class*="md:flex"]');
  184 |     let isVisible = await desktopNav.isVisible({ timeout: 1000 }).catch(() => false);
  185 |     expect(isVisible).toBeTruthy();
  186 | 
  187 |     // Mobile: menu button
  188 |     await page.setViewportSize({ width: 375, height: 667 });
  189 |     const mobileMenuBtn = page.locator('button[class*="md:hidden"]').first();
  190 |     isVisible = await mobileMenuBtn.isVisible({ timeout: 1000 }).catch(() => false);
  191 |     expect(isVisible).toBeTruthy();
  192 |   });
  193 | });
  194 | 
```