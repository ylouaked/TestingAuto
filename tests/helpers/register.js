const { test, expect } = require('@playwright/test');

export async function register(page, { psw, email, user, scenario }){
    await page.goto('http://localhost:4200/sign-up');
    await page.fill('#username', user);
    await expect(page.locator('button[type="submit"]')).toBeDisabled();
    await page.fill('#email', email);
    await expect(page.locator('button[type="submit"]')).toBeDisabled();
    await page.fill('#password', psw);
    
    if (scenario === 'short_password') {
        
        await expect(page.locator('button[type="submit"]')).toBeDisabled();
    } else if (scenario === 'email_already_used') {
        
        await expect(page.locator('button[type="submit"]')).toBeEnabled();
        await page.click('button[type="submit"]');

        
        page.on('dialog', async (dialog) => {
            expect(dialog.message()).toBe('Cet email existe déjà. Veuillez utiliser un autre email.');
            await dialog.accept(); 
        });
    } else if (scenario === 'valid_data') {
        if (psw.length >= 6) {
            await page.fill('#password', psw);
            await expect(page.locator('button[type="submit"]')).toBeEnabled();
            await page.click('button[type="submit"]');
            await expect(page).toHaveURL('http://localhost:4200/login');
        }
    } else if (scenario === 'invalid_email') {
        await page.fill('#email', 'invalid-email');
        await page.fill('#password', psw);
        const errorMessage = page.locator('.error-message'); 
        await expect(errorMessage).toBeVisible();
        await expect(errorMessage).toHaveText('Veuillez entrer une adresse email valide.');
        await expect(page.locator('button[type="submit"]')).toBeDisabled();
    }

}
     
  
