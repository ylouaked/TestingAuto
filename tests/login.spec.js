const { test} = require('@playwright/test');

import { login } from './helpers/login';
import { loginData } from './data.js';

test('Login avec des informations valides', async ({ page }) => {
    await login(page, loginData.valid_user);
});

test('Login avec un email invalide', async ({ page }) => {
    await login(page, loginData.invalid_email);
});

test('Login avec un mot de passe invalide', async ({ page }) => {
    await login(page, loginData.invalid_password);
});



