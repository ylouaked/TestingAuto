const { test, expect } = require('@playwright/test');

// test.beforeEach(async ({ page }) => {
//   await page.goto('http://localhost:4200/sign-up');
// });

test.describe('Tests Sign-Up et Login', () => {
  //Sign up
// test 1
  test('Sign-Up avec données valides', async ({ page }) => {
    await page.goto('http://localhost:4200/sign-up');
    await page.fill('#username', 'UtilisateurTest');
    await expect(page.locator('button[type="submit"]')).toBeDisabled();
    await page.fill('#email', 'email1@example.com');
    await expect(page.locator('button[type="submit"]')).toBeDisabled();
    await page.fill('#password', '123456');
    // await page.getByPlaceHolder("Entrer votre mot de passe").fill("123456");
    // const passwordField = page.getByPlaceholder('Entrez votre mot de passe');
    // await passwordField.fill('123456');
    
    await expect(page.locator('button[type="submit"]')).toBeEnabled(); //si le bouton est activé
    await page.click('button[type="submit"]'); //On a un seul bouton dans le formulaire
    //si y'en a plusieurs : await page.click('button[type="submit"]:has-text("S\'inscrire")')
    
    await expect(page).toHaveURL('http://localhost:4200/login');


  });

   // test 2
   test('Sign-Up avec un email déjà utilisé', async ({ page }) => {
    await page.goto('http://localhost:4200/sign-up');
    await expect(page.locator('button[type="submit"]')).toBeDisabled();
    await page.fill('#username', 'UtilisateurTest');
    await expect(page.locator('button[type="submit"]')).toBeDisabled();
    await page.fill('#email', 'email1@example.com');
    await expect(page.locator('button[type="submit"]')).toBeDisabled();
    await page.fill('#password', '123456');
    await page.click('button[type="submit"]');
    
     //  pour capturer l'alerte
  page.on('dialog', async (dialog) => {
    expect(dialog.message()).toBe('Cet email existe déjà. Veuillez utiliser un autre email.');
    //Ferme l'alerte
    await dialog.accept();
    await page.click('button[type="Ok"]');
  });
  });

  // test 3 
  test('Vérification du bouton désactivé avec mot de passe trop court', async ({ page }) => {
    await page.goto('http://localhost:4200/sign-up');
    await page.fill('#username', 'UtilisateurTest');
    await page.fill('#email', 'email1@example.com');
    await page.fill('#password', '123');
    await expect(page.locator('button[type="submit"]')).toBeDisabled();
    await page.fill('#password', '123456');
    await expect(page.locator('button[type="submit"]')).toBeEnabled();
    //const bottonDisabled = page.getByRole('link', { name: 'Get started' });
  });


//Login
  // test 4
  test('Login avec mot de passe erroné', async ({ page }) => {
    await page.goto('http://localhost:4200/login');
    await page.fill('#email', 'email1@example.com');
    await page.fill('#password', '123456789');
    await page.click('button[type="submit"]');
    await expect(page.locator('.message')).toHaveText('Email ou mot de passe incorrect.');
  });

  // test 5
  test('Login avec email erroné', async ({ page }) => {
    await page.goto('http://localhost:4200/login');
    await page.fill('#email', 'emaillll@example.com');
    await page.fill('#password', '123456');
    await page.click('button[type="submit"]');
    await expect(page.locator('.message')).toHaveText('Email ou mot de passe incorrect.');
  });


// test 6
  test('Login avec des données valides', async ({ page }) => {
  await page.goto('http://localhost:4200/login'); 
  await page.fill('#email', 'email1@example.com'); 
  await page.fill('#password', '123456'); 
  await page.click('button:has-text("Se connecter")'); //or await page.click('button[type="submit"]:has-text("Se connecter")')
  await expect(page).toHaveURL('http://localhost:4200/dashboard'); 
  console.log('Connexion réussie.');
  });
});
