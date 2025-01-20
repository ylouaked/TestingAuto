const { test, expect } = require('@playwright/test');
import { register } from './helpers/register';
import {registerData} from './data.js'




test('Sign-Up avec données valides', async ({ page }) => {
    
    await register(page, registerData.invalid_data);
});




test('Sign-Up avec un email déjà utilisé', async ({ page }) => {
    await register(page, );
});

// test('Vérification du bouton désactivé avec mot de passe trop court', async ({ page }) => {
//     await register(page, {
//         user: 'UtilisateurTest',
//         email: 'email1@example.com',
//         psw: '123', 
//         scenario: 'short_password'
//     });
//   });


  
// test('Sign-Up avec un email invalide', async ({ page }) => {
//   await register(page, {
//       user: 'UtilisateurTest',
//       email: 'xxx', 
//       psw: '123456',
//       scenario: 'invalid_email'
//   });
// });





