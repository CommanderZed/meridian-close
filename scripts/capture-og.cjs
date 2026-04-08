/**
 * Captures the landing page viewport (1200×630) and writes Next.js metadata files:
 *   src/app/opengraph-image.png
 *   src/app/twitter-image.png
 * (Names are fixed by the App Router file convention.)
 *
 * Run: npm run capture-og
 * Optional: OG_CAPTURE_URL=http://localhost:3000 npm run capture-og
 */

const { chromium } = require("playwright");
const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const appDir = path.join(root, "src", "app");
const ogOut = path.join(appDir, "opengraph-image.png");
const twOut = path.join(appDir, "twitter-image.png");
const url =
  process.env.OG_CAPTURE_URL || "https://meridian-close.vercel.app";

fs.mkdirSync(appDir, { recursive: true });

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({
    viewport: { width: 1200, height: 630 },
    deviceScaleFactor: 1,
  });
  try {
    await page.goto(url, { waitUntil: "networkidle", timeout: 90000 });
    await page.locator("h1").first().waitFor({ state: "visible", timeout: 30000 });
    await new Promise((r) => setTimeout(r, 3000));
    await page.screenshot({
      path: ogOut,
      type: "png",
      animations: "disabled",
    });
    fs.copyFileSync(ogOut, twOut);
    console.log("Wrote", ogOut);
    console.log("Wrote", twOut);
  } finally {
    await browser.close();
  }
})().catch((err) => {
  console.error(err);
  process.exit(1);
});
