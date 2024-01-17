const { testResume } = require("./resume");
const puppeteer = require("puppeteer");
import { Page } from "puppeteer";

class Project {
  private tester: typeof testResume;

  constructor() {
    this.tester = new testResume();
  }

  public async homePage(page: Page) {
    await this.tester.home(page);
  }

  public async firstPage(page: Page) {
    await this.tester.verifyApi(page);
  }

  public async verifyCertsPage(page: Page) {
    await this.tester.verifyCerts(page);
  }
}

const myProject = new Project();

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  console.log("Puppeteer launched");

  const page = await browser.newPage();

  try {
    await myProject.homePage(page);
    await myProject.firstPage(page);
    await myProject.verifyCertsPage(page);
  } catch (error) {
    console.error("Error:", error);
  } finally {
    await browser.close();
  }
})();
