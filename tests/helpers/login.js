const { expect } = require('@playwright/test');
import { loginData } from '../data.js';  

export async function login(page, data) {
    await page.goto('http://localhost:4200/login');
   
        await expect(page.locator('button[type="submit"]')).toBeDisabled();
        await page.fill('#email', data.email);
        await expect(page.locator('button[type="submit"]')).toBeDisabled();
        await page.fill('#password', data.psw);
        await expect(page.locator('button[type="submit"]')).toBeEnabled();
        

    if (data === loginData.valid_user) {
        await page.getByRole('button', { name: 'Se connecter' }).click();
        await expect(page).toHaveURL('http://localhost:4200/dashboard');
    }

  
    if (data === loginData.invalid_email || data === loginData.invalid_password) {
        await page.getByRole('button', { name: 'Se connecter' }).click();
        const errorMessage = page.locator('.message');
        await expect(errorMessage).toBeVisible();
        await expect(errorMessage).toHaveText('Email ou mot de passe incorrect.');
    }


}
