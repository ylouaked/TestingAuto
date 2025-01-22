const { expect } = require('@playwright/test');
import { registerData } from '../data.js';

export async function register(page, data){
    await page.goto('http://localhost:4200/sign-up');
    await page.fill('#username', data.user);
    await expect(page.locator('button[type="submit"]')).toBeDisabled();
    await page.fill('#email', data.email);
    await expect(page.locator('button[type="submit"]')).toBeDisabled();
    await page.fill('#password', data.psw);

    // Comparaison directe avec data et les valeurs de registerData
    if (data === registerData.short_password) { 
        await expect(page.locator('button[type="submit"]')).toBeDisabled();
    } 
    else if (data === registerData.email_already_used) {
        await expect(page.locator('button[type="submit"]')).toBeEnabled();
        await page.click('button[type="submit"]');
        page.on('dialog', async (dialog) => {
            expect(dialog.message()).toBe('Cet email existe déjà. Veuillez utiliser un autre email.');
            await dialog.accept(); 
        });
    } else if (data === registerData.valid_data) {
        if (data.psw.length >= 6) {
            await expect(page.locator('button[type="submit"]')).toBeEnabled();
            await page.click('button[type="submit"]');
            await expect(page).toHaveURL('http://localhost:4200/login');
        }
    } else if (data === registerData.invalid_email) {
        const errorMessage = page.locator('.error-message'); 
        await expect(errorMessage).toBeVisible();
        await expect(errorMessage).toHaveText('Veuillez entrer une adresse email valide.');
        await expect(page.locator('button[type="submit"]')).toBeDisabled();
    }
}

  
