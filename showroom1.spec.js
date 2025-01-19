import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.locator('app-sign-up').click();
  await page.getByPlaceholder('Entrez votre nom').click();
  await page.getByPlaceholder('Entrez votre nom').fill('aaaa');
  await page.getByPlaceholder('Entrez votre email').click();
  await page.getByPlaceholder('Entrez votre email').fill('aaa@yopmail0com');
  await page.getByPlaceholder('Entrez votre email').press('ArrowLeft');
  await page.getByPlaceholder('Entrez votre email').press('ArrowLeft');
  await page.getByPlaceholder('Entrez votre email').press('ArrowLeft');
  await page.getByPlaceholder('Entrez votre email').fill('aaa@yopmail.com');
  await page.getByPlaceholder('Entrez votre mot de passe').click();
  await page.getByPlaceholder('Entrez votre mot de passe').fill('123456');
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('button', { name: 'S\'inscrire' }).click();
  await page.getByPlaceholder('Entrez votre email').click();
  await page.getByPlaceholder('Entrez votre email').press('ArrowLeft');
  await page.getByPlaceholder('Entrez votre email').press('ArrowLeft');
  await page.getByPlaceholder('Entrez votre email').press('ArrowLeft');
  await page.getByPlaceholder('Entrez votre email').press('ArrowLeft');
  await page.getByPlaceholder('Entrez votre email').press('ArrowLeft');
  await page.getByPlaceholder('Entrez votre email').press('ArrowLeft');
  await page.getByPlaceholder('Entrez votre email').press('ArrowLeft');
  await page.getByPlaceholder('Entrez votre email').press('ArrowLeft');
  await page.getByPlaceholder('Entrez votre email').press('ArrowLeft');
  await page.getByPlaceholder('Entrez votre email').press('ArrowRight');
  await page.getByPlaceholder('Entrez votre email').fill('aaa1@yopmail.com');
  await page.getByRole('button', { name: 'S\'inscrire' }).click();
});