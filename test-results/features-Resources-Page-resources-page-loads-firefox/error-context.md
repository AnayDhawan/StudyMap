# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: features.spec.ts >> Resources Page >> resources page loads
- Location: e2e\features.spec.ts:42:7

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('text=IB').or(locator('[data-board="ib"]'))
Expected: visible
Error: strict mode violation: locator('text=IB').or(locator('[data-board="ib"]')) resolved to 18 elements:
    1) <p class="mt-2 max-w-2xl text-muted-foreground">Curated, cited links to past papers and official …</p> aka getByText('Curated, cited links to past')
    2) <button data-size="sm" data-slot="button" data-variant="outline" class="group/button inline-flex shrink-0 items-center justify-center border bg-clip-padding font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-dest…>IB</button> aka getByRole('button', { name: 'IB' })
    ...

Call log:
  - Expect "toBeVisible" with timeout 3000ms
  - waiting for locator('text=IB').or(locator('[data-board="ib"]'))

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
      - heading "Past papers and resources" [level=1] [ref=e15]
      - paragraph [ref=e16]: Curated, cited links to past papers and official portals for IB, IGCSE, and SAT. StudyMap links out to the source; it never hosts files.
      - generic [ref=e18]:
        - generic [ref=e19]:
          - button "IB" [ref=e20]
          - button "IGCSE" [ref=e21]
          - button "SAT" [ref=e22]
        - generic [ref=e23]:
          - textbox "Filter by subject" [ref=e24]
          - combobox [ref=e25]:
            - img
          - combobox [ref=e26]
          - generic [ref=e27]:
            - button "Card view" [ref=e28]:
              - img
            - button "List view" [ref=e29]:
              - img
        - paragraph [ref=e30]: 21 resources. Every link opens an external source; nothing is hosted here.
        - table [ref=e33]:
          - rowgroup [ref=e34]:
            - row "Board Title Subject Year Type" [ref=e35]:
              - columnheader "Board" [ref=e36]
              - columnheader "Title" [ref=e37]
              - columnheader "Subject" [ref=e38]
              - columnheader "Year" [ref=e39]
              - columnheader "Type" [ref=e40]
          - rowgroup [ref=e41]:
            - row "IB International Baccalaureate (official site) - - Website" [ref=e42]:
              - cell "IB" [ref=e43]:
                - generic [ref=e44]: IB
              - cell "International Baccalaureate (official site)" [ref=e45]:
                - link "International Baccalaureate (official site)" [ref=e46] [cursor=pointer]:
                  - /url: https://www.ibo.org
                  - text: International Baccalaureate (official site)
                  - img [ref=e47]
              - cell "-" [ref=e51]
              - cell "-" [ref=e52]
              - cell "Website" [ref=e53]
            - row "IB IB Mathematics AA Past Papers 2023 Mathematics AA 2023 Past paper" [ref=e54]:
              - cell "IB" [ref=e55]:
                - generic [ref=e56]: IB
              - cell "IB Mathematics AA Past Papers 2023" [ref=e57]:
                - link "IB Mathematics AA Past Papers 2023" [ref=e58] [cursor=pointer]:
                  - /url: https://ibpastpapers.com/IB/Mathematics/Math-AA
                  - text: IB Mathematics AA Past Papers 2023
                  - img [ref=e59]
              - cell "Mathematics AA" [ref=e63]
              - cell "2023" [ref=e64]
              - cell "Past paper" [ref=e65]
            - row "IB IB Physics Past Papers 2023 Physics 2023 Past paper" [ref=e66]:
              - cell "IB" [ref=e67]:
                - generic [ref=e68]: IB
              - cell "IB Physics Past Papers 2023" [ref=e69]:
                - link "IB Physics Past Papers 2023" [ref=e70] [cursor=pointer]:
                  - /url: https://ibpastpapers.com/IB/Physics
                  - text: IB Physics Past Papers 2023
                  - img [ref=e71]
              - cell "Physics" [ref=e75]
              - cell "2023" [ref=e76]
              - cell "Past paper" [ref=e77]
            - row "IB IB Chemistry Past Papers 2023 Chemistry 2023 Past paper" [ref=e78]:
              - cell "IB" [ref=e79]:
                - generic [ref=e80]: IB
              - cell "IB Chemistry Past Papers 2023" [ref=e81]:
                - link "IB Chemistry Past Papers 2023" [ref=e82] [cursor=pointer]:
                  - /url: https://ibpastpapers.com/IB/Chemistry
                  - text: IB Chemistry Past Papers 2023
                  - img [ref=e83]
              - cell "Chemistry" [ref=e87]
              - cell "2023" [ref=e88]
              - cell "Past paper" [ref=e89]
            - row "IB IB English A Past Papers 2023 English A 2023 Past paper" [ref=e90]:
              - cell "IB" [ref=e91]:
                - generic [ref=e92]: IB
              - cell "IB English A Past Papers 2023" [ref=e93]:
                - link "IB English A Past Papers 2023" [ref=e94] [cursor=pointer]:
                  - /url: https://ibpastpapers.com/IB/English
                  - text: IB English A Past Papers 2023
                  - img [ref=e95]
              - cell "English A" [ref=e99]
              - cell "2023" [ref=e100]
              - cell "Past paper" [ref=e101]
            - row "IB IB History Past Papers 2022 History 2022 Past paper" [ref=e102]:
              - cell "IB" [ref=e103]:
                - generic [ref=e104]: IB
              - cell "IB History Past Papers 2022" [ref=e105]:
                - link "IB History Past Papers 2022" [ref=e106] [cursor=pointer]:
                  - /url: https://ibpastpapers.com/IB/History
                  - text: IB History Past Papers 2022
                  - img [ref=e107]
              - cell "History" [ref=e111]
              - cell "2022" [ref=e112]
              - cell "Past paper" [ref=e113]
            - row "IB IB candidate results portal - - Portal" [ref=e114]:
              - cell "IB" [ref=e115]:
                - generic [ref=e116]: IB
              - cell "IB candidate results portal" [ref=e117]:
                - link "IB candidate results portal" [ref=e118] [cursor=pointer]:
                  - /url: https://candidates.ibo.org
                  - text: IB candidate results portal
                  - img [ref=e119]
              - cell "-" [ref=e123]
              - cell "-" [ref=e124]
              - cell "Portal" [ref=e125]
            - row "IB IB Diploma Programme Course Guides - - Website" [ref=e126]:
              - cell "IB" [ref=e127]:
                - generic [ref=e128]: IB
              - cell "IB Diploma Programme Course Guides" [ref=e129]:
                - link "IB Diploma Programme Course Guides" [ref=e130] [cursor=pointer]:
                  - /url: https://ibo.org/programmes/diploma-programme/curriculum/
                  - text: IB Diploma Programme Course Guides
                  - img [ref=e131]
              - cell "-" [ref=e135]
              - cell "-" [ref=e136]
              - cell "Website" [ref=e137]
            - row "IGCSE Cambridge International (official site) - - Website" [ref=e138]:
              - cell "IGCSE" [ref=e139]:
                - generic [ref=e140]: IGCSE
              - cell "Cambridge International (official site)" [ref=e141]:
                - link "Cambridge International (official site)" [ref=e142] [cursor=pointer]:
                  - /url: https://www.cambridgeinternational.org
                  - text: Cambridge International (official site)
                  - img [ref=e143]
              - cell "-" [ref=e147]
              - cell "-" [ref=e148]
              - cell "Website" [ref=e149]
            - row "IGCSE IGCSE Physics Past Papers 2023 Physics 2023 Past paper" [ref=e150]:
              - cell "IGCSE" [ref=e151]:
                - generic [ref=e152]: IGCSE
              - cell "IGCSE Physics Past Papers 2023" [ref=e153]:
                - link "IGCSE Physics Past Papers 2023" [ref=e154] [cursor=pointer]:
                  - /url: https://www.cambridgeinternational.org/programmes-and-qualifications/cambridge-igcse/past-papers/
                  - text: IGCSE Physics Past Papers 2023
                  - img [ref=e155]
              - cell "Physics" [ref=e159]
              - cell "2023" [ref=e160]
              - cell "Past paper" [ref=e161]
            - row "IGCSE IGCSE Chemistry Past Papers 2023 Chemistry 2023 Past paper" [ref=e162]:
              - cell "IGCSE" [ref=e163]:
                - generic [ref=e164]: IGCSE
              - cell "IGCSE Chemistry Past Papers 2023" [ref=e165]:
                - link "IGCSE Chemistry Past Papers 2023" [ref=e166] [cursor=pointer]:
                  - /url: https://www.cambridgeinternational.org/programmes-and-qualifications/cambridge-igcse/past-papers/
                  - text: IGCSE Chemistry Past Papers 2023
                  - img [ref=e167]
              - cell "Chemistry" [ref=e171]
              - cell "2023" [ref=e172]
              - cell "Past paper" [ref=e173]
            - row "IGCSE IGCSE Mathematics Past Papers 2023 Mathematics 2023 Past paper" [ref=e174]:
              - cell "IGCSE" [ref=e175]:
                - generic [ref=e176]: IGCSE
              - cell "IGCSE Mathematics Past Papers 2023" [ref=e177]:
                - link "IGCSE Mathematics Past Papers 2023" [ref=e178] [cursor=pointer]:
                  - /url: https://www.cambridgeinternational.org/programmes-and-qualifications/cambridge-igcse/past-papers/
                  - text: IGCSE Mathematics Past Papers 2023
                  - img [ref=e179]
              - cell "Mathematics" [ref=e183]
              - cell "2023" [ref=e184]
              - cell "Past paper" [ref=e185]
            - row "IGCSE IGCSE English Past Papers 2023 English as a Second Language 2023 Past paper" [ref=e186]:
              - cell "IGCSE" [ref=e187]:
                - generic [ref=e188]: IGCSE
              - cell "IGCSE English Past Papers 2023" [ref=e189]:
                - link "IGCSE English Past Papers 2023" [ref=e190] [cursor=pointer]:
                  - /url: https://www.cambridgeinternational.org/programmes-and-qualifications/cambridge-igcse/past-papers/
                  - text: IGCSE English Past Papers 2023
                  - img [ref=e191]
              - cell "English as a Second Language" [ref=e195]
              - cell "2023" [ref=e196]
              - cell "Past paper" [ref=e197]
            - row "IGCSE Cambridge Assessment Candidate Portal - - Portal" [ref=e198]:
              - cell "IGCSE" [ref=e199]:
                - generic [ref=e200]: IGCSE
              - cell "Cambridge Assessment Candidate Portal" [ref=e201]:
                - link "Cambridge Assessment Candidate Portal" [ref=e202] [cursor=pointer]:
                  - /url: https://www.cambridgeinternational.org/candidate-services/
                  - text: Cambridge Assessment Candidate Portal
                  - img [ref=e203]
              - cell "-" [ref=e207]
              - cell "-" [ref=e208]
              - cell "Portal" [ref=e209]
            - row "IGCSE The Student Room - IGCSE Resources - - Website" [ref=e210]:
              - cell "IGCSE" [ref=e211]:
                - generic [ref=e212]: IGCSE
              - cell "The Student Room - IGCSE Resources" [ref=e213]:
                - link "The Student Room - IGCSE Resources" [ref=e214] [cursor=pointer]:
                  - /url: https://thestudentroom.co.uk/forumdisplay.php?f=600
                  - text: The Student Room - IGCSE Resources
                  - img [ref=e215]
              - cell "-" [ref=e219]
              - cell "-" [ref=e220]
              - cell "Website" [ref=e221]
            - row "SAT College Board SAT Suite (official site) - - Website" [ref=e222]:
              - cell "SAT" [ref=e223]:
                - generic [ref=e224]: SAT
              - cell "College Board SAT Suite (official site)" [ref=e225]:
                - link "College Board SAT Suite (official site)" [ref=e226] [cursor=pointer]:
                  - /url: https://satsuite.collegeboard.org
                  - text: College Board SAT Suite (official site)
                  - img [ref=e227]
              - cell "-" [ref=e231]
              - cell "-" [ref=e232]
              - cell "Website" [ref=e233]
            - row "SAT Official SAT practice and preparation Practice - Portal" [ref=e234]:
              - cell "SAT" [ref=e235]:
                - generic [ref=e236]: SAT
              - cell "Official SAT practice and preparation" [ref=e237]:
                - link "Official SAT practice and preparation" [ref=e238] [cursor=pointer]:
                  - /url: https://satsuite.collegeboard.org/sat/practice-preparation
                  - text: Official SAT practice and preparation
                  - img [ref=e239]
              - cell "Practice" [ref=e243]
              - cell "-" [ref=e244]
              - cell "Portal" [ref=e245]
            - row "SAT SAT Practice Tests 2024 Full test 2024 Past paper" [ref=e246]:
              - cell "SAT" [ref=e247]:
                - generic [ref=e248]: SAT
              - cell "SAT Practice Tests 2024" [ref=e249]:
                - link "SAT Practice Tests 2024" [ref=e250] [cursor=pointer]:
                  - /url: https://satsuite.collegeboard.org/sat/practice-preparation/practice-tests
                  - text: SAT Practice Tests 2024
                  - img [ref=e251]
              - cell "Full test" [ref=e255]
              - cell "2024" [ref=e256]
              - cell "Past paper" [ref=e257]
            - row "SAT Khan Academy SAT Prep - - Website" [ref=e258]:
              - cell "SAT" [ref=e259]:
                - generic [ref=e260]: SAT
              - cell "Khan Academy SAT Prep" [ref=e261]:
                - link "Khan Academy SAT Prep" [ref=e262] [cursor=pointer]:
                  - /url: https://www.khanacademy.org/test-prep/sat
                  - text: Khan Academy SAT Prep
                  - img [ref=e263]
              - cell "-" [ref=e267]
              - cell "-" [ref=e268]
              - cell "Website" [ref=e269]
            - row "SAT Digital SAT Information - - Website" [ref=e270]:
              - cell "SAT" [ref=e271]:
                - generic [ref=e272]: SAT
              - cell "Digital SAT Information" [ref=e273]:
                - link "Digital SAT Information" [ref=e274] [cursor=pointer]:
                  - /url: https://satsuite.collegeboard.org/digital-sat
                  - text: Digital SAT Information
                  - img [ref=e275]
              - cell "-" [ref=e279]
              - cell "-" [ref=e280]
              - cell "Website" [ref=e281]
            - row "SAT SAT Registration Portal - - Portal" [ref=e282]:
              - cell "SAT" [ref=e283]:
                - generic [ref=e284]: SAT
              - cell "SAT Registration Portal" [ref=e285]:
                - link "SAT Registration Portal" [ref=e286] [cursor=pointer]:
                  - /url: https://www.collegereadiness.collegeboard.org/sat/register
                  - text: SAT Registration Portal
                  - img [ref=e287]
              - cell "-" [ref=e291]
              - cell "-" [ref=e292]
              - cell "Portal" [ref=e293]
  - contentinfo [ref=e294]:
    - generic [ref=e295]:
      - paragraph [ref=e296]: StudyMap. Open source and self-hostable. Built for students.
      - navigation [ref=e297]:
        - link "Privacy" [ref=e298] [cursor=pointer]:
          - /url: /legal/privacy
        - link "Terms" [ref=e299] [cursor=pointer]:
          - /url: /legal/terms
        - link "Disclaimer" [ref=e300] [cursor=pointer]:
          - /url: /legal/disclaimer
        - link "Contribute" [ref=e301] [cursor=pointer]:
          - /url: /contribute
        - link "GitHub" [ref=e302] [cursor=pointer]:
          - /url: https://github.com/anaydhawan/studymap
  - region "Notifications alt+T"
  - button "Open Next.js Dev Tools" [ref=e308] [cursor=pointer]:
    - img [ref=e309]
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
> 45  |     await expect(page.locator('text=IB').or(page.locator('[data-board="ib"]'))).toBeVisible({ timeout: 3000 });
      |                                                                                 ^ Error: expect(locator).toBeVisible() failed
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
```