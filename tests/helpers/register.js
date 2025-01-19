const { test, expect } = require('@playwright/test');

export async function register (page,psw,email,user){
    await page.goto('http://localhost:4200/sign-up');
    await page.fill('#username', user);
    await expect(page.locator('button[type="submit"]')).toBeDisabled();
    await page.fill('#email', email);
    await expect(page.locator('button[type="submit"]')).toBeDisabled();
    await page.fill('#password', psw);
    if (psw.length < 6){
        await expect(page.locator('button[type="submit"]')).toBeDisabled();
    } if(psw.length>=6)
    {
        await expect(page.locator('button[type="submit"]')).toBeEnabled();
        await page.click('button[type="submit"]'); 
        await expect(page).toHaveURL('http://localhost:4200/login');
    }
     
  
}