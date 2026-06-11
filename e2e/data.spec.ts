import { test, expect } from '@playwright/test';

test.describe('Places Data', () => {
  test('map loads and leaflet container visible', async ({ page }) => {
    await page.goto('/map');
    await page.waitForTimeout(2000);
    await expect(page.locator('.leaflet-container').first()).toBeVisible({ timeout: 8000 });
  });

  test('at least 10 places per category populated', async () => {
    const fs = require('fs').promises;
    const path = require('path');

    const dataDir = 'data/places';
    const types = [
      'airport', 'train_station', 'exam_centre', 'library',
      'book_shop', 'stationery', 'internet_cafe', 'imp_locations',
    ];

    for (const type of types) {
      const filePath = path.join(dataDir, `${type}.json`);
      const content = await fs.readFile(filePath, 'utf-8');
      const places = JSON.parse(content);
      expect(places.length, `${type}.json should have ≥10 places`).toBeGreaterThanOrEqual(10);

      for (const place of places.slice(0, 3)) {
        expect(place).toHaveProperty('id');
        expect(place).toHaveProperty('name');
        expect(place).toHaveProperty('type');
        expect(place).toHaveProperty('city');
        expect(place).toHaveProperty('lat');
        expect(place).toHaveProperty('lng');
        expect(place).toHaveProperty('gmaps_link');
        expect(place).toHaveProperty('added_by');

        expect(typeof place.lat).toBe('number');
        expect(typeof place.lng).toBe('number');
        expect(place.lat).toBeGreaterThan(18);
        expect(place.lat).toBeLessThan(20);
        expect(place.lng).toBeGreaterThan(72);
        expect(place.lng).toBeLessThan(73);

        expect(place.gmaps_link).toContain('maps.google.com');
      }
    }
  });

  test('no duplicate place IDs across categories', async () => {
    const fs = require('fs').promises;
    const path = require('path');

    const dataDir = 'data/places';
    const types = [
      'airport', 'train_station', 'exam_centre', 'library',
      'book_shop', 'stationery', 'internet_cafe', 'imp_locations',
    ];
    const allIds = new Set<string>();

    for (const type of types) {
      const filePath = path.join(dataDir, `${type}.json`);
      const content = await fs.readFile(filePath, 'utf-8');
      const places = JSON.parse(content);

      for (const place of places) {
        expect(allIds.has(place.id), `Duplicate ID: ${place.id}`).toBeFalsy();
        allIds.add(place.id);
      }
    }

    expect(allIds.size).toBeGreaterThanOrEqual(80);
  });
});

test.describe('UI Elements', () => {
  test('footer renders on all active pages', async ({ page }) => {
    const pages = ['/', '/map', '/contribute', '/legal/privacy'];

    for (const pagePath of pages) {
      await page.goto(pagePath);
      await expect(page.locator('footer')).toBeVisible();
    }
  });

  test('all footer links have valid href', async ({ page }) => {
    await page.goto('/');
    await page.locator('footer').scrollIntoViewIfNeeded();

    const links = page.locator('footer a');
    const count = await links.count();

    for (let i = 0; i < Math.min(count, 8); i++) {
      const href = await links.nth(i).getAttribute('href');
      expect(href).toBeTruthy();
      expect(href).toMatch(/^(\/|https?:\/\/|mailto:)/);
    }
  });
});
