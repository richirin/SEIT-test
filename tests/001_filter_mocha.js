describe('Filter', () => {
    const minimumPrice = 3000000
    const maximumPrice = 8000000
    const filterMinimumPrice = "3,000,000.00"
    const filterMaximumPrice = "8,000,000.00"
    const filterSize = "6 Inch or More"
    it('confirm', (client) => {
        client
            // .resizeWindow(1920, 937)
            .url('https://www.ebay.com/')
            .useCss()
            // Wait and click element "Category"
            .waitForElementVisible("#gh-shop-a", 10000)
            .click("#gh-shop-a")
            .useXpath()
            // Wait and click element "Cell phones & accessories"
            .waitForElementVisible("//a[normalize-space(text())='Cell phones & accessories']", 10000)
            .click("//a[normalize-space(text())='Cell phones & accessories']")
            // wait and click element "Cell Phones & Smartphones"
            .waitForElementVisible("//div[contains(text(),'Cell Phones & Smartphones')]", 10000)
            .click("//div[contains(text(),'Cell Phones & Smartphones')]")
            // wait and click element "More refinements"
            .waitForElementVisible("//body[1]/div[3]/div[3]/div[1]/div[1]/div[1]/div[1]/ul[1]/li[1]/div[1]/button[1]", 10000)
            .click("//body[1]/div[3]/div[3]/div[1]/div[1]/div[1]/div[1]/ul[1]/li[1]/div[1]/button[1]")
            // wait and click element "Screen Size"
            .waitForElementVisible("//body[1]/div[11]/div[2]/div[1]/form[1]/div[1]/div[1]/div[1]/div[8]", 10000)
            .click("//body[1]/div[11]/div[2]/div[1]/form[1]/div[1]/div[1]/div[1]/div[8]")
            // wait and click element "6 in or More"
            .waitForElementVisible("//body[1]/div[11]/div[2]/div[1]/form[1]/div[1]/div[2]/div[1]/div[1]/fieldset[1]/div[2]/div[2]/label[1]/span[1]", 10000)
            .click("//body[1]/div[11]/div[2]/div[1]/form[1]/div[1]/div[2]/div[1]/div[1]/fieldset[1]/div[2]/div[2]/label[1]/span[1]")
            // wait and click element "Price"
            .waitForElementVisible("//body[1]/div[11]/div[2]/div[1]/form[1]/div[1]/div[1]/div[1]/div[21]", 10000)
            .click("//body[1]/div[11]/div[2]/div[1]/form[1]/div[1]/div[1]/div[1]/div[21]")
            // wait and input to element minimum price
            .waitForElementVisible("//body[1]/div[11]/div[2]/div[1]/form[1]/div[1]/div[2]/div[1]/div[1]/fieldset[1]/ul[1]/li[1]/div[2]/div[1]/div[1]/div[1]/input[1]", 10000)
            .setValue("//body[1]/div[11]/div[2]/div[1]/form[1]/div[1]/div[2]/div[1]/div[1]/fieldset[1]/ul[1]/li[1]/div[2]/div[1]/div[1]/div[1]/input[1]", minimumPrice)
            // wait and input to element minimum price
            .waitForElementVisible("//body[1]/div[11]/div[2]/div[1]/form[1]/div[1]/div[2]/div[1]/div[1]/fieldset[1]/ul[1]/li[1]/div[2]/div[1]/div[2]/div[1]/input[1]", 10000)
            .setValue("//body[1]/div[11]/div[2]/div[1]/form[1]/div[1]/div[2]/div[1]/div[1]/fieldset[1]/ul[1]/li[1]/div[2]/div[1]/div[2]/div[1]/input[1]", maximumPrice)
            // wait and click element "item location"
            .waitForElementVisible("//body[1]/div[11]/div[2]/div[1]/form[1]/div[1]/div[1]/div[1]/div[23]", 10000)
            .click("//body[1]/div[11]/div[2]/div[1]/form[1]/div[1]/div[1]/div[1]/div[23]")
            // wait and click element "Asia"
            .waitForElementVisible("//body[1]/div[11]/div[2]/div[1]/form[1]/div[1]/div[2]/div[1]/div[1]/fieldset[1]/div[5]/label[1]/span[1]", 10000)
            .click("//body[1]/div[11]/div[2]/div[1]/form[1]/div[1]/div[2]/div[1]/div[1]/fieldset[1]/div[5]/label[1]/span[1]")
            // click element apply 
            .click("//button[contains(text(),'Apply')]")
            // Verify Price Filter 
            .assert.containsText("//body[1]/div[3]/div[2]/h1[1]/span[1]", "IDR" + filterMinimumPrice)
            .assert.containsText("//body[1]/div[3]/div[2]/h1[1]/span[1]", "IDR" + filterMaximumPrice)
            // Verify Size
            .assert.containsText("//body[1]/div[3]/div[2]/h1[1]/span[1]", filterSize)
    })
})