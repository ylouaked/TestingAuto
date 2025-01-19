export async function login(page, email, psw) {
    await page.goto('http://localhost:4200/login');
    await page.fill('#email', email);
    await page.fill('#password', psw);
    await page.click('button[type="submit"]');
}