// Generated by Selenium IDE
const { Builder, By, Key } = require('selenium-webdriver');
const assert = require('assert');
const fs = require('fs');

describe('-1+-1', function () {
    this.timeout(30000);
    let driver;
    let vars;

    if (!fs.existsSync('./screenshots')) {
        fs.mkdirSync('./screenshots');
    }

    beforeEach(async function () {
        const chrome = require('selenium-webdriver/chrome');
        const options = new chrome.Options();
        options.addArguments('--headless', '--no-sandbox', '--disable-dev-shm-usage');
        driver = await new Builder().forBrowser('chrome').setChromeOptions(options).build();
        vars = {};
    });



    it('Invalid Number Format (Multiple Decimal Points)', async function () {
        await driver.get("http://127.0.0.1:8000/index.html");
        await driver.manage().window().setRect({ width: 769, height: 1079 });
        await driver.findElement(By.id("num1")).click();
        await driver.findElement(By.id("num1")).sendKeys("3.1.4");
        await driver.findElement(By.id("num2")).click();
        await driver.findElement(By.id("num2")).sendKeys("3");
        await driver.findElement(By.css("button:nth-child(1)")).click();
    });
});
