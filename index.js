const playwright = require('playwright');

async function main() {
    
    const browser = await playwright.chromium.launch({
        headless: false
    });

    const page = await browser.newPage();

    await page.waitForTimeout(1000);
    await browser.close();

    console.log("test");
}

main();
