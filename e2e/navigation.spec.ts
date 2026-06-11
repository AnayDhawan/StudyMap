import { test, expect } from '@playwright/test';

test.describe('Navigation & Page Render', () => {
  test('homepage loads with hero', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('h1')).toContainText('Every place a student needs');
    await expect(page.locator('[class*="kicker"]').first()).toContainText('Mumbai');
  });

  test('navbar links: Map and Contribute present (desktop)', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 800 });
    await page.goto('/');
    const navbar = page.locator('header nav');
    await expect(navbar.locator('a[href="/map"]')).toBeVisible();
    await expect(navbar.locator('a[href="/contribute"]')).toBeVisible();
  });

  test('navigate to /map page', async ({ page }) => {
    await page.goto('/map');
    await expect(page.locator('.leaflet-container').first()).toBeVisible({ timeout: 8000 });
  });

  test('navigate to /contribute page', async ({ page }) => {
    await page.goto('/contribute');
    await expect(page.locator('h1, h2').first()).toBeVisible();
  });

  test('navigate to /legal/privacy', async ({ page }) => {
    await page.goto('/legal/privacy');
    await expect(page).toHaveTitle(/privacy/i);
  });

  test('navigate to /legal/terms', async ({ page }) => {
    await page.goto('/legal/terms');
    await expect(page).toHaveTitle(/terms/i);
  });

  test('navigate to /legal/disclaimer', async ({ page }) => {
    await page.goto('/legal/disclaimer');
    await expect(page).toHaveTitle(/disclaimer/i);
  });

  test('footer Contribute link present', async ({ page }) => {
    await page.goto('/');
    await page.locator('footer').scrollIntoViewIfNeeded();
    const contributeLink = page.locator('footer a[href*="contribute"], footer a:has-text("Contribute")');
    await expect(contributeLink.first()).toBeVisible();
  });

  test('footer legal links present', async ({ page }) => {
    await page.goto('/');
    await page.locator('footer').scrollIntoViewIfNeeded();
    await expect(page.locator('footer a[href*="privacy"]')).toBeVisible();
    await expect(page.locator('footer a[href*="terms"]')).toBeVisible();
    await expect(page.locator('footer a[href*="disclaimer"]')).toBeVisible();
  });
});

test.describe('Hero Section', () => {
  test('homepage shows place count and categories', async ({ page }) => {
    await page.goto('/');
    // Hero stat line: "80+ places · 8 categories · 3 cities"
    await expect(page.locator('text=places').first()).toBeVisible();
    await expect(page.locator('text=categories').first()).toBeVisible();
    await expect(page.locator('text=cities').first()).toBeVisible();
  });

  test('all 8 place type labels in legend', async ({ page }) => {
    await page.goto('/');
    const placeTypes = [
      'Book shop', 'Library', 'Exam centre', 'Important locations',
      'Stationery', 'Internet cafe', 'Airport', 'Train station',
    ];
    for (const type of placeTypes) {
      await expect(page.locator(`text=${type}`).first()).toBeVisible();
    }
  });

  test('CTA buttons clickable', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('a:has-text("Open the map")')).toBeVisible();
    await expect(page.locator('a:has-text("Add a place")')).toBeVisible();
  });
});
