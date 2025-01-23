import { test, expect } from '@playwright/test';
import { loginData } from './data.js'; 
import { login } from './helpers/login'; 

test.beforeEach(async ({ page }) => {
    await login(page, loginData.valid_user);
  });

test('Les éléments du navbar', async ({ page }) => {
    await expect(page.locator('.navbar-logo img')).toBeVisible();
    await expect(page.locator('a:has-text("Accueil")')).toBeVisible();
    await expect(page.locator('a:has-text("Profile")')).toBeVisible();
    await expect(page.locator('a:has-text("Stores")')).toBeVisible();
    await expect(page.locator('.test')).toBeVisible();
});



test('Redirections', async ({ page }) => {

    await page.locator('a:has-text("Accueil")').click();
    await expect(page).toHaveURL('http://localhost:4200/dashboard');
    await page.locator('a:has-text("Profile")').click();
    await expect(page).toHaveURL('http://localhost:4200/profile');
    await page.locator('a:has-text("Stores")').click();
    await expect(page).toHaveURL('http://localhost:4200/stores');
});


test('Menu déroulant', async ({ page }) => {
   
    await page.locator('.test').click();
    await expect(page.locator('.mat-menu')).toBeVisible();
    await expect(page.locator('button:has-text("Informations du compte")')).toBeVisible();
    await expect(page.locator('button:has-text("Changer mot de passe")')).toBeVisible();
    await expect(page.locator('button:has-text("Se déconnecter")')).toBeVisible();
});
