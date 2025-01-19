const { test, expect } = require('@playwright/test');
import { register } from './helpers/register';



test('Sign-Up avec données valides', async ({ page }) => {
    await register(page, {
        user: 'UtilisateurTest',
        email: 'testing@email.com',
        psw: '123456',
        scenario: 'valid_data'
    });
});


// test('Sign-Up avec données valides', async ({ page }) => {
//   await register(page, '123456', 'email1@example.com', 'UtilisateurTest', 'valid_data');
// });
//pour que les paramètres seront passés directement à la fonction 
// => export async function register(page, psw, email, user, scenario)

test('Sign-Up avec un email déjà utilisé', async ({ page }) => {
    await register(page, {
        user: 'UtilisateurTest',
        email: 'email1@example.com',
        psw: '123456',
        scenario: 'email_already_used'
    });
});

test('Vérification du bouton désactivé avec mot de passe trop court', async ({ page }) => {
    await register(page, {
        user: 'UtilisateurTest',
        email: 'email1@example.com',
        psw: '123', 
        scenario: 'short_password'
    });
  });


  
test('Sign-Up avec un email invalide', async ({ page }) => {
  await register(page, {
      user: 'UtilisateurTest',
      email: 'xxx', 
      psw: '123456',
      scenario: 'invalid_email'
  });
});





