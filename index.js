const playwright = require('playwright');

async function main() {
    
    const browser = await playwright.chromium.launch({
        headless: false
    });

    const page = await browser.newPage();
    await page.goto('https://www.seaofthieves.com/leaderboards/GoldHoarders/global');

    await page.waitForTimeout(1000);
    await browser.close();

    console.log("test");
}

main();
