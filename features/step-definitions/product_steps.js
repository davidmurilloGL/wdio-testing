const { Given, When, Then } = require('@cucumber/cucumber');

const ProductPage = require('../pageobjects/product_album.page');
const ShopPage = require('../pageobjects/shop.page');

const pages = {
    product: ProductPage,
    shop: ShopPage
}

Given(/^I am on the shop page/, () => {
    ShopPage.open();
});

When(/^I click on an album/, () => {
    ShopPage.albumImage.click();
});

When(/^I click on a product review tab$/, () => {
    ProductPage.reviewTab.click();
});

When(/^I fill the form$/, () => {
    ProductPage.fillreviewform();
});

When(/^I click on submit$/, () => {
    ProductPage.submitButton.click();
});

Then(/^I should see product detail page$/, () => {
    expect(ProductPage.productTitle).toBeVisible();
    expect(ProductPage.productTitle).toHaveText('Album');
    expect(ProductPage.productSummary).toBeVisible();
});

Then(/^I should see product descripiton$/, () => {
    expect(ProductPage.descriptionTab).toBeExisting();
    expect(ProductPage.description).toBeExisting();
    expect(ProductPage.descriptionTab).toHaveText('Description');
});

Then(/^I should see related products$/, () => {
    expect(ProductPage.relatedSection).toBeVisible();
});

Then(/^The review form is displayed$/, () => {
    expect(ProductPage.review).toBeExisting();
    expect(ProductPage.relatedSection).toBeExisting();
    expect(ProductPage.reviewAuthor).toBeVisible();
    expect(ProductPage.reviewMail).toBeVisible();
    expect(ProductPage.reviewRating).toBeVisible();
    expect(ProductPage.reviewText).toBeVisible();
    expect(ProductPage.agreeCheckbox).toBeVisible();

});

Then(/^the review is displayed on screen$/, () => {
    expect(ProductPage.relatedSection).toBeVisible();
});