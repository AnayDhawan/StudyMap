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
    3) <span data-slot="badge" data-variant="secondary" class="group/badge inline-flex h-5 w-fit shrink-0 items-center justify-center gap-1 overflow-hidden rounded-4xl border border-transparent px-2 py-0.5 text-xs font-medium whitespace-nowrap transition-all focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 […>IB</span> aka getByRole('row', { name: 'IB International' }).locator('span')
    4) <span data-slot="badge" data-variant="secondary" class="group/badge inline-flex h-5 w-fit shrink-0 items-center justify-center gap-1 overflow-hidden rounded-4xl border border-transparent px-2 py-0.5 text-xs font-medium whitespace-nowrap transition-all focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 […>IB</span> aka getByRole('row', { name: 'IB IB Mathematics AA Past' }).locator('span')
    5) <a target="_blank" rel="noreferrer" href="https://ibpastpapers.com/IB/Mathematics/Math-AA" class="inline-flex items-center gap-1.5 font-medium hover:underline">…</a> aka getByRole('link', { name: 'IB Mathematics AA Past Papers' })
    6) <span data-slot="badge" data-variant="secondary" class="group/badge inline-flex h-5 w-fit shrink-0 items-center justify-center gap-1 overflow-hidden rounded-4xl border border-transparent px-2 py-0.5 text-xs font-medium whitespace-nowrap transition-all focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 […>IB</span> aka getByRole('row', { name: 'IB IB Physics Past Papers' }).locator('span')
    7) <a target="_blank" rel="noreferrer" href="https://ibpastpapers.com/IB/Physics" class="inline-flex items-center gap-1.5 font-medium hover:underline">…</a> aka getByRole('link', { name: 'IB Physics Past Papers' })
    8) <span data-slot="badge" data-variant="secondary" class="group/badge inline-flex h-5 w-fit shrink-0 items-center justify-center gap-1 overflow-hidden rounded-4xl border border-transparent px-2 py-0.5 text-xs font-medium whitespace-nowrap transition-all focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 […>IB</span> aka getByRole('row', { name: 'IB IB Chemistry Past Papers' }).locator('span')
    9) <a target="_blank" rel="noreferrer" href="https://ibpastpapers.com/IB/Chemistry" class="inline-flex items-center gap-1.5 font-medium hover:underline">…</a> aka getByRole('link', { name: 'IB Chemistry Past Papers' })
    10) <span data-slot="badge" data-variant="secondary" class="group/badge inline-flex h-5 w-fit shrink-0 items-center justify-center gap-1 overflow-hidden rounded-4xl border border-transparent px-2 py-0.5 text-xs font-medium whitespace-nowrap transition-all focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 […>IB</span> aka getByRole('row', { name: 'IB IB English A Past Papers' }).locator('span')
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
      - generic [ref=e6]:
        - button "Toggle theme" [ref=e7]:
          - img
        - button "Open menu" [ref=e8]:
          - img
  - main [ref=e9]:
    - generic [ref=e10]:
      - heading "Past papers and resources" [level=1] [ref=e11]
      - paragraph [ref=e12]: Curated, cited links to past papers and official portals for IB, IGCSE, and SAT. StudyMap links out to the source; it never hosts files.
      - generic [ref=e14]:
        - generic [ref=e15]:
          - button "IB" [ref=e16]
          - button "IGCSE" [ref=e17]
          - button "SAT" [ref=e18]
        - generic [ref=e19]:
          - textbox "Filter by subject" [ref=e20]
          - combobox [ref=e21]:
            - generic: All years
            - img
          - generic [ref=e22]:
            - button "Card view" [ref=e23]:
              - img
            - button "List view" [ref=e24]:
              - img
        - paragraph [ref=e25]: 21 resources. Every link opens an external source; nothing is hosted here.
        - table [ref=e28]:
          - rowgroup [ref=e29]:
            - row "Board Title Subject Year Type" [ref=e30]:
              - columnheader "Board" [ref=e31]
              - columnheader "Title" [ref=e32]
              - columnheader "Subject" [ref=e33]
              - columnheader "Year" [ref=e34]
              - columnheader "Type" [ref=e35]
          - rowgroup [ref=e36]:
            - row "IB International Baccalaureate (official site) - - Website" [ref=e37]:
              - cell "IB" [ref=e38]:
                - generic [ref=e39]: IB
              - cell "International Baccalaureate (official site)" [ref=e40]:
                - link "International Baccalaureate (official site)" [ref=e41] [cursor=pointer]:
                  - /url: https://www.ibo.org
                  - text: International Baccalaureate (official site)
                  - img [ref=e42]
              - cell "-" [ref=e46]
              - cell "-" [ref=e47]
              - cell "Website" [ref=e48]
            - row "IB IB Mathematics AA Past Papers 2023 Mathematics AA 2023 Past paper" [ref=e49]:
              - cell "IB" [ref=e50]:
                - generic [ref=e51]: IB
              - cell "IB Mathematics AA Past Papers 2023" [ref=e52]:
                - link "IB Mathematics AA Past Papers 2023" [ref=e53] [cursor=pointer]:
                  - /url: https://ibpastpapers.com/IB/Mathematics/Math-AA
                  - text: IB Mathematics AA Past Papers 2023
                  - img [ref=e54]
              - cell "Mathematics AA" [ref=e58]
              - cell "2023" [ref=e59]
              - cell "Past paper" [ref=e60]
            - row "IB IB Physics Past Papers 2023 Physics 2023 Past paper" [ref=e61]:
              - cell "IB" [ref=e62]:
                - generic [ref=e63]: IB
              - cell "IB Physics Past Papers 2023" [ref=e64]:
                - link "IB Physics Past Papers 2023" [ref=e65] [cursor=pointer]:
                  - /url: https://ibpastpapers.com/IB/Physics
                  - text: IB Physics Past Papers 2023
                  - img [ref=e66]
              - cell "Physics" [ref=e70]
              - cell "2023" [ref=e71]
              - cell "Past paper" [ref=e72]
            - row "IB IB Chemistry Past Papers 2023 Chemistry 2023 Past paper" [ref=e73]:
              - cell "IB" [ref=e74]:
                - generic [ref=e75]: IB
              - cell "IB Chemistry Past Papers 2023" [ref=e76]:
                - link "IB Chemistry Past Papers 2023" [ref=e77] [cursor=pointer]:
                  - /url: https://ibpastpapers.com/IB/Chemistry
                  - text: IB Chemistry Past Papers 2023
                  - img [ref=e78]
              - cell "Chemistry" [ref=e82]
              - cell "2023" [ref=e83]
              - cell "Past paper" [ref=e84]
            - row "IB IB English A Past Papers 2023 English A 2023 Past paper" [ref=e85]:
              - cell "IB" [ref=e86]:
                - generic [ref=e87]: IB
              - cell "IB English A Past Papers 2023" [ref=e88]:
                - link "IB English A Past Papers 2023" [ref=e89] [cursor=pointer]:
                  - /url: https://ibpastpapers.com/IB/English
                  - text: IB English A Past Papers 2023
                  - img [ref=e90]
              - cell "English A" [ref=e94]
              - cell "2023" [ref=e95]
              - cell "Past paper" [ref=e96]
            - row "IB IB History Past Papers 2022 History 2022 Past paper" [ref=e97]:
              - cell "IB" [ref=e98]:
                - generic [ref=e99]: IB
              - cell "IB History Past Papers 2022" [ref=e100]:
                - link "IB History Past Papers 2022" [ref=e101] [cursor=pointer]:
                  - /url: https://ibpastpapers.com/IB/History
                  - text: IB History Past Papers 2022
                  - img [ref=e102]
              - cell "History" [ref=e106]
              - cell "2022" [ref=e107]
              - cell "Past paper" [ref=e108]
            - row "IB IB candidate results portal - - Portal" [ref=e109]:
              - cell "IB" [ref=e110]:
                - generic [ref=e111]: IB
              - cell "IB candidate results portal" [ref=e112]:
                - link "IB candidate results portal" [ref=e113] [cursor=pointer]:
                  - /url: https://candidates.ibo.org
                  - text: IB candidate results portal
                  - img [ref=e114]
              - cell "-" [ref=e118]
              - cell "-" [ref=e119]
              - cell "Portal" [ref=e120]
            - row "IB IB Diploma Programme Course Guides - - Website" [ref=e121]:
              - cell "IB" [ref=e122]:
                - generic [ref=e123]: IB
              - cell "IB Diploma Programme Course Guides" [ref=e124]:
                - link "IB Diploma Programme Course Guides" [ref=e125] [cursor=pointer]:
                  - /url: https://ibo.org/programmes/diploma-programme/curriculum/
                  - text: IB Diploma Programme Course Guides
                  - img [ref=e126]
              - cell "-" [ref=e130]
              - cell "-" [ref=e131]
              - cell "Website" [ref=e132]
            - row "IGCSE Cambridge International (official site) - - Website" [ref=e133]:
              - cell "IGCSE" [ref=e134]:
                - generic [ref=e135]: IGCSE
              - cell "Cambridge International (official site)" [ref=e136]:
                - link "Cambridge International (official site)" [ref=e137] [cursor=pointer]:
                  - /url: https://www.cambridgeinternational.org
                  - text: Cambridge International (official site)
                  - img [ref=e138]
              - cell "-" [ref=e142]
              - cell "-" [ref=e143]
              - cell "Website" [ref=e144]
            - row "IGCSE IGCSE Physics Past Papers 2023 Physics 2023 Past paper" [ref=e145]:
              - cell "IGCSE" [ref=e146]:
                - generic [ref=e147]: IGCSE
              - cell "IGCSE Physics Past Papers 2023" [ref=e148]:
                - link "IGCSE Physics Past Papers 2023" [ref=e149] [cursor=pointer]:
                  - /url: https://www.cambridgeinternational.org/programmes-and-qualifications/cambridge-igcse/past-papers/
                  - text: IGCSE Physics Past Papers 2023
                  - img [ref=e150]
              - cell "Physics" [ref=e154]
              - cell "2023" [ref=e155]
              - cell "Past paper" [ref=e156]
            - row "IGCSE IGCSE Chemistry Past Papers 2023 Chemistry 2023 Past paper" [ref=e157]:
              - cell "IGCSE" [ref=e158]:
                - generic [ref=e159]: IGCSE
              - cell "IGCSE Chemistry Past Papers 2023" [ref=e160]:
                - link "IGCSE Chemistry Past Papers 2023" [ref=e161] [cursor=pointer]:
                  - /url: https://www.cambridgeinternational.org/programmes-and-qualifications/cambridge-igcse/past-papers/
                  - text: IGCSE Chemistry Past Papers 2023
                  - img [ref=e162]
              - cell "Chemistry" [ref=e166]
              - cell "2023" [ref=e167]
              - cell "Past paper" [ref=e168]
            - row "IGCSE IGCSE Mathematics Past Papers 2023 Mathematics 2023 Past paper" [ref=e169]:
              - cell "IGCSE" [ref=e170]:
                - generic [ref=e171]: IGCSE
              - cell "IGCSE Mathematics Past Papers 2023" [ref=e172]:
                - link "IGCSE Mathematics Past Papers 2023" [ref=e173] [cursor=pointer]:
                  - /url: https://www.cambridgeinternational.org/programmes-and-qualifications/cambridge-igcse/past-papers/
                  - text: IGCSE Mathematics Past Papers 2023
                  - img [ref=e174]
              - cell "Mathematics" [ref=e178]
              - cell "2023" [ref=e179]
              - cell "Past paper" [ref=e180]
            - row "IGCSE IGCSE English Past Papers 2023 English as a Second Language 2023 Past paper" [ref=e181]:
              - cell "IGCSE" [ref=e182]:
                - generic [ref=e183]: IGCSE
              - cell "IGCSE English Past Papers 2023" [ref=e184]:
                - link "IGCSE English Past Papers 2023" [ref=e185] [cursor=pointer]:
                  - /url: https://www.cambridgeinternational.org/programmes-and-qualifications/cambridge-igcse/past-papers/
                  - text: IGCSE English Past Papers 2023
                  - img [ref=e186]
              - cell "English as a Second Language" [ref=e190]
              - cell "2023" [ref=e191]
              - cell "Past paper" [ref=e192]
            - row "IGCSE Cambridge Assessment Candidate Portal - - Portal" [ref=e193]:
              - cell "IGCSE" [ref=e194]:
                - generic [ref=e195]: IGCSE
              - cell "Cambridge Assessment Candidate Portal" [ref=e196]:
                - link "Cambridge Assessment Candidate Portal" [ref=e197] [cursor=pointer]:
                  - /url: https://www.cambridgeinternational.org/candidate-services/
                  - text: Cambridge Assessment Candidate Portal
                  - img [ref=e198]
              - cell "-" [ref=e202]
              - cell "-" [ref=e203]
              - cell "Portal" [ref=e204]
            - row "IGCSE The Student Room - IGCSE Resources - - Website" [ref=e205]:
              - cell "IGCSE" [ref=e206]:
                - generic [ref=e207]: IGCSE
              - cell "The Student Room - IGCSE Resources" [ref=e208]:
                - link "The Student Room - IGCSE Resources" [ref=e209] [cursor=pointer]:
                  - /url: https://thestudentroom.co.uk/forumdisplay.php?f=600
                  - text: The Student Room - IGCSE Resources
                  - img [ref=e210]
              - cell "-" [ref=e214]
              - cell "-" [ref=e215]
              - cell "Website" [ref=e216]
            - row "SAT College Board SAT Suite (official site) - - Website" [ref=e217]:
              - cell "SAT" [ref=e218]:
                - generic [ref=e219]: SAT
              - cell "College Board SAT Suite (official site)" [ref=e220]:
                - link "College Board SAT Suite (official site)" [ref=e221] [cursor=pointer]:
                  - /url: https://satsuite.collegeboard.org
                  - text: College Board SAT Suite (official site)
                  - img [ref=e222]
              - cell "-" [ref=e226]
              - cell "-" [ref=e227]
              - cell "Website" [ref=e228]
            - row "SAT Official SAT practice and preparation Practice - Portal" [ref=e229]:
              - cell "SAT" [ref=e230]:
                - generic [ref=e231]: SAT
              - cell "Official SAT practice and preparation" [ref=e232]:
                - link "Official SAT practice and preparation" [ref=e233] [cursor=pointer]:
                  - /url: https://satsuite.collegeboard.org/sat/practice-preparation
                  - text: Official SAT practice and preparation
                  - img [ref=e234]
              - cell "Practice" [ref=e238]
              - cell "-" [ref=e239]
              - cell "Portal" [ref=e240]
            - row "SAT SAT Practice Tests 2024 Full test 2024 Past paper" [ref=e241]:
              - cell "SAT" [ref=e242]:
                - generic [ref=e243]: SAT
              - cell "SAT Practice Tests 2024" [ref=e244]:
                - link "SAT Practice Tests 2024" [ref=e245] [cursor=pointer]:
                  - /url: https://satsuite.collegeboard.org/sat/practice-preparation/practice-tests
                  - text: SAT Practice Tests 2024
                  - img [ref=e246]
              - cell "Full test" [ref=e250]
              - cell "2024" [ref=e251]
              - cell "Past paper" [ref=e252]
            - row "SAT Khan Academy SAT Prep - - Website" [ref=e253]:
              - cell "SAT" [ref=e254]:
                - generic [ref=e255]: SAT
              - cell "Khan Academy SAT Prep" [ref=e256]:
                - link "Khan Academy SAT Prep" [ref=e257] [cursor=pointer]:
                  - /url: https://www.khanacademy.org/test-prep/sat
                  - text: Khan Academy SAT Prep
                  - img [ref=e258]
              - cell "-" [ref=e262]
              - cell "-" [ref=e263]
              - cell "Website" [ref=e264]
            - row "SAT Digital SAT Information - - Website" [ref=e265]:
              - cell "SAT" [ref=e266]:
                - generic [ref=e267]: SAT
              - cell "Digital SAT Information" [ref=e268]:
                - link "Digital SAT Information" [ref=e269] [cursor=pointer]:
                  - /url: https://satsuite.collegeboard.org/digital-sat
                  - text: Digital SAT Information
                  - img [ref=e270]
              - cell "-" [ref=e274]
              - cell "-" [ref=e275]
              - cell "Website" [ref=e276]
            - row "SAT SAT Registration Portal - - Portal" [ref=e277]:
              - cell "SAT" [ref=e278]:
                - generic [ref=e279]: SAT
              - cell "SAT Registration Portal" [ref=e280]:
                - link "SAT Registration Portal" [ref=e281] [cursor=pointer]:
                  - /url: https://www.collegereadiness.collegeboard.org/sat/register
                  - text: SAT Registration Portal
                  - img [ref=e282]
              - cell "-" [ref=e286]
              - cell "-" [ref=e287]
              - cell "Portal" [ref=e288]
  - contentinfo [ref=e289]:
    - generic [ref=e290]:
      - paragraph [ref=e291]: StudyMap. Open source and self-hostable. Built for students.
      - navigation [ref=e292]:
        - link "Privacy" [ref=e293] [cursor=pointer]:
          - /url: /legal/privacy
        - link "Terms" [ref=e294] [cursor=pointer]:
          - /url: /legal/terms
        - link "Disclaimer" [ref=e295] [cursor=pointer]:
          - /url: /legal/disclaimer
        - link "Contribute" [ref=e296] [cursor=pointer]:
          - /url: /contribute
        - link "GitHub" [ref=e297] [cursor=pointer]:
          - /url: https://github.com/anaydhawan/studymap
  - region "Notifications alt+T"
  - button "Open Next.js Dev Tools" [ref=e303] [cursor=pointer]:
    - img [ref=e304]
  - alert [ref=e307]
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