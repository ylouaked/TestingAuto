const { test, expect } = require('@playwright/test');


import { registerData } from './data';
import { register } from './helpers/register';





test('Login avec mot de passe correct', async ({ page }) => {
   
    await register(page,registerData.invalid_data);
    
});
