const puppeteer = require("puppeteer");
import { Browser, Page, Puppeteer } from "puppeteer";

export class testResume {
  public async verifyApi(x: Page) {
    console.log("inside verifyApi");
    const htmlElements = {
      textSel: "div:nth-child(7) > div > div > p",
      api: ".api",
    };
    //await x.waitForSelector(htmlElements.textSel);
    let fullTitle = await x.evaluate((selector: any) => {
      return document.querySelector(selector).innerText;
    }, htmlElements.api);

    if (fullTitle == "I love playing Football and Basketball.") {
      console.log("API FOUND");
    } else {
      console.log("API not Found");
      await x.screenshot({ fullPage: true, path: "example.png" });
      //issue faced while building this project screenshot require time hence we need sleep here.
    }
  }

  public async home(page: any) {
    console.log("inside Home");
    await page.goto("http://localhost:3000/home");
    return page;
  }

  public async verifyCerts(x: Page) {
    console.log("inside verifyCerts");
    await x.close();
  }
}
