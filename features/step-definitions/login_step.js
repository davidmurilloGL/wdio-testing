const { Given, When, Then } = require('@cucumber/cucumber');

const LoginPage = require('../pageobjects/product_album.page');
const InventoryPage = require('../pageobjects/shop.page');

const pages = {
    login: LoginPage
}

Given(/^I am on the (\w+) page$/, (page) => {
    pages[page].open()
});


When(/^I login with (\w+) and (.+)$/, (username, password) => {
    LoginPage.login(username, password)
});

Then(/^inventory page is displayed/, () => {
    expect(InventoryPage.productHeader).toBeExisting();
    
});

Then(/^I should see an error message saying (.*)$/, (message) => {
    expect(LoginPage.errorMessage).toBeExisting();
    expect(LoginPage.errorMessage).toHaveTextContaining(message);
});