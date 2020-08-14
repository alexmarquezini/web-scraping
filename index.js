const puppeteer = require('puppeteer');
const fs = require('fs');
require('dotenv').config();

(async () => {
  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();
  console.log(`https://instagram.com/${process.env.INSTAGRAM_ACCONT}`);
  await page.goto(`https://instagram.com/${process.env.INSTAGRAM_ACCONT}`);

  const imgList = await page.evaluate(() => {
      const nodeList = document.querySelectorAll('article img')

      const imgArray = [...nodeList]

      const imgList = imgArray.map( ({src}) => ({
          src
      }))

      return imgList
  })

  fs.writeFile('instagram.json', JSON.stringify(imgList, null, 2), err => {
      if(err) throw new Error("Something went wrong!")

      console.log("well done!")
  })
  //await browser.close()
})();