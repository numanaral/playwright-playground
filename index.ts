import { chromium } from 'playwright';

const TEMP_FOLDER = 'temp/';

const screenshotSite = async (siteUrl: string, fileName = 'example') => {
	const browser = await chromium.launch();
	const page = await browser.newPage();
	await page.goto((!siteUrl.startsWith('http') && 'https://') + siteUrl);
	await page.screenshot({ path: `${TEMP_FOLDER}${fileName}.png` });
	await browser.close();
};

const launchBrowserUi = async (siteUrl?: string) => {
	const browser = await chromium.launch({
		headless: false,
		slowMo: 50,
	});
	const page = await browser.newPage();
	if (siteUrl) await page.goto(siteUrl);

	// await browser.close();
};

(async () => {
	await screenshotSite('numanaral.github.io');
	// await launchBrowserUi();
})();
