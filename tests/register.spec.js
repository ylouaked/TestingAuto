const { test, expect } = require('@playwright/test');
import { register } from './helpers/register';
import {registerData} from './data.js';




test('Sign-Up avec données valides', async ({ page }) => {
    await register(page, registerData.valid_data);
});

test('Sign-Up avec un email non valide', async ({ page }) => {
    await register(page,registerData.invalid_email);
});

test('Sign-Up avec un email déjà utilisé', async ({ page }) => {
  await register(page,registerData.email_already_used);
});

test('Sign-Up avec short password', async ({ page }) => {
  await register(page,registerData.short_password);
});

