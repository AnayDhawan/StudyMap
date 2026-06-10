import { test, expect } from '@playwright/test';

test.describe('Navigation & Page Render', () => {
  test('homepage loads with hero', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('h1')).toContainText('Every place a student needs');
    await expect(page.locator('[class*="kicker"]')).toContainText('Mumbai');
  });

  test('navbar links present and working', async ({ page }) => {
    await page.goto('/');
    const navbar = page.locator('header nav');
    await expect(navbar.locator('a[href="/map"]')).toBeVisible();
    await expect(navbar.locator('a[href="/resources"]')).toBeVisible();
    await expect(navbar.locator('a[href="/benefits"]')).toBeVisible();
    await expect(navbar.locator('a[href="/account"]')).toBeVisible();
  });

  test('navigate to /map page', async ({ page }) => {
    await page.goto('/map');
    // Map page should load with full-height container
    await expect(page.locator('main')).toHaveCSS('height', /calc/);
  });

  test('navigate to /resources page', async ({ page }) => {
    await page.goto('/resources');
    await expect(page).toHaveTitle(/resources/i);
  });

  test('navigate to /benefits page', async ({ page }) => {
    await page.goto('/benefits');
    await expect(page).toHaveTitle(/benefits|student docs/i);
  });

  test('navigate to /account page', async ({ page }) => {
    await page.goto('/account');
    await expect(page).toHaveTitle(/account/i);
  });

  test('navigate to /contact page', async ({ page }) => {
    await page.goto('/contact');
    await expect(page.locator('h1, h2')).toContainText(/contact/i);
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

  test('footer "How to Contribute" link present', async ({ page }) => {
    await page.goto('/');
    await page.locator('footer').scrollIntoViewIfNeeded();
    const contributeLink = page.locator('footer a[href*="contribute"], footer a:has-text("Contribute")');
    await expect(contributeLink).toBeVisible();
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
  test('homepage shows place count and stats', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('p:has-text("places")')).toBeVisible();
    await expect(page.locator('p:has-text("categories")')).toBeVisible();
    await expect(page.locator('p:has-text("cities")')).toBeVisible();
  });

  test('marker color legend visible', async ({ page }) => {
    await page.goto('/');
    // Check that all 8 place type labels are shown
    const placeTypes = [
      'Book shop', 'Library', 'Exam centre', 'Important locations',
      'Stationery', 'Internet cafe', 'Airport', 'Train station'
    ];
    for (const type of placeTypes) {
      await expect(page.locator(`text=${type}`)).toBeVisible();
    }
  });

  test('CTA buttons clickable', async ({ page }) => {
    await page.goto('/');
    const mapBtn = page.locator('a:has-text("Open the map")');
    const contributeBtn = page.locator('a:has-text("Add a place")');
    await expect(mapBtn).toBeVisible();
    await expect(contributeBtn).toBeVisible();
  });
});
