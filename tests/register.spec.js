const { test, expect } = require('@playwright/test');
import { register } from './helpers/register';

// test.beforeEach(async ({ page }) => {
//   await page.goto('http://localhost:4200/sign-up');
// });

  test('Sign-Up avec données valides', async ({ page }) => {
    const ps='123456'
    const email ='emaill@yopmail.com'
    const user='user'
      await register(page,ps,email,user);
       //  pour capturer l'alerte
  page.on('dialog', async (dialog) => {
    expect(dialog.message()).toBe('Cet email existe déjà. Veuillez utiliser un autre email.');
    //Ferme l'alerte
    await dialog.accept();
    await page.click('button[type="Ok"]');
  });

  });





