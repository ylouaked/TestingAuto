const { expect } = require('@playwright/test');
import { loginData } from '../datas.js';  

export async function login(page, data) {
    await page.goto('https://10.234.34.115/index/login');
    await page.getByPlaceholder('Username').click();
    await page.getByPlaceholder('Username').fill(data.username);
    await page.getByRole('button', { name: 'Submit' }).click();
    

    }

  

  
  for (const number of data.psw) {
    await page.locator(`button:has-text("${number}")`).click();
  }


  if (data === loginData.valid_user) {
    await page.getByRole('button', { name: 'Se connecter' }).click();
    await expect(page).toHaveURL('https://10.234.34.115/mes-comptes');
  }

 