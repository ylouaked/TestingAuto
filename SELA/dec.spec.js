import { test } from '@playwright/test'; 
import { login } from './help/log.js';
import { loginData } from './datas.js';

test.use({
    ignoreHTTPSErrors: true, 
});

test.beforeEach(async ({ page }) => {
    await login(page, loginData.valid_data);
});

test('Déconnexion', async ({ page }) => {
   
    await page.getByRole('button', { name: 'Matt Hudson' }).click();
    // await expect(page.locator('#mat-menu-panel-3')).toContainText('Changer votre code secret');
    // await expect(page.locator('#mat-menu-panel-3')).toContainText('Déconnexion');
    await page.getByRole('menuitem', { name: 'Déconnexion' }).click();
    await expect(page).toHaveURL('https://10.234.34.115/login');
   
    // await expect(page).toHaveTitle(/'S’identifier/);
    
   });