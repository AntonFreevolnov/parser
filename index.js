const puppeteer = require('puppeteer');





async function main() {
  const browser = await puppeteer.launch({
    headless: false
  });


  const page = await browser.newPage();



  await page.goto('https://google.com');


  setTimeout( () => { browser.close() }, 3000);

}


main();
