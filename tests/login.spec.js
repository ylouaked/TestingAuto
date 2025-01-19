const { test, expect } = require('@playwright/test');



export async function register (page,psw,email,user){
  const baseURL='http://localhost:4200/login'  
  await page.goto(baseURL);
    await page.fill('#username', user);
    await expect(page.locator('button[type="submit"]')).toBeDisabled();
    await page.fill('#email', email);
    await expect(page.locator('button[type="submit"]')).toBeDisabled();
    await page.fill('#password', psw);
    if (psw.length<6){
        await expect(page.locator('button[type="submit"]')).toBeDisabled();
    } if(psw.length>=6)
    {
        await expect(page.locator('button[type="submit"]')).toBeEnabled();
        await page.click('button[type="submit"]'); //On a un seul bouton dans le formulaire
        //si y'en a plusieurs : await page.click('button[type="submit"]:has-text("S\'inscrire")')
        
        await expect(page).toHaveURL('http://localhost:4200/login');
    }
     
  

}
import { login } from './helpers/login';

test('Login avec mot de passe incorrect', async ({ page }) => {
    const email = 'email1@example.com';
    const psw = 'wrongpassword';

    await login(page, email, psw);
    await expect(page.locator('.message')).toHaveText('Email ou mot de passe incorrect.');
});


