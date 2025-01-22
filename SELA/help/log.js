import { expect } from '@playwright/test';

export async function login(page, data) {
  
    await page.goto('https://10.234.34.115/index/login');

    await page.getByPlaceholder('Username').click();
    await page.getByPlaceholder('Username').fill(data.username);
    await page.getByRole('button', { name: 'Submit' }).click();


    for (const number of data.password) {
      await page.locator(`button:has-text("${number}")`).click();
    await page.getByRole('button', { name: 'Log in' }).click();


     if (data.password.length < 6) {
      await expect(page.getByRole('button', { name: 'Se connecter' })).toBeDisabled();
  }
}

if (data.password.length >= 6) {
  await expect(page.getByRole('button', { name: 'Se connecter' })).toBeEnabled();
}

    
  if (data === loginData.valid_data) {
      await page.getByRole('button', { name: 'Log in' }).click();
      await expect(page).toHaveURL('https://10.234.34.115/mes-comptes');
  } 
 
  else {
      await page.getByRole('button', { name: 'Log in' }).click();
      const errorMessage = page.locator('.error-message'); 
      await expect(errorMessage).toBeVisible();
      await expect(errorMessage).toHaveText('');
  }

}
