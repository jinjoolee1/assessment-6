import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const { Builder, Browser, By, until } = require("selenium-webdriver");

beforeEach(async () => {
  driver.get('http://localhost:3000/')
})

let driver;

beforeEach(async () => {
  driver = await new Builder().forBrowser(Browser.CHROME).build();
});

afterEach(async () => {
  await driver.quit();
});

describe("Duel Duo tests", () => {
  test("page loads with title", async () => {
    await driver.get("http://localhost:3000");
    await driver.wait(until.titleIs("Duel Duo"), 1000);
  });
});

test('Draw Button displays choices', async () =>{
  const drawBtn = await driver.findElement(By.id('draw'))
  drawBtn.click();
  const choiceDiv = await driver.findElement(By.id('choices'))
  await driver.sleep(2000)
  const displayed = await choiceDiv.isDisplayed();
  expect(displayed).toBe(true);
});

test('Display Player-duo when "add to duo" button is clicked', async () =>{
  const drawBtn = await driver.findElement(By.id('draw'))
  drawBtn.click();
  await driver.sleep(2000)
  const duoBtn = await driver.findElement(By.xpath(`//*[@id="choices"]/div[1]/button`))
  duoBtn.click();
  const playerDiv = await driver.findElement(By.id('your-duo-header'))
  await driver.sleep(2000)
  const displayed = await playerDiv.isDisplayed();
  expect(displayed).toBe(true);
});