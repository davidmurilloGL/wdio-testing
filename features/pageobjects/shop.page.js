const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class ShopPage extends Page {
    /**
     * define selectors using getter methods
     */
    get albumButton () { return $('[data-product_id="23"]')}
    get albumImage (){ return $(".product-image")}
    get sortButton () { return $('[name="orderby"]') }
    get view12 () { return $('#main > div.shoper-toolbar.clearfix > ul > li:nth-child(2) > a') }
    get view24 () { return $('#main > div.shoper-toolbar.clearfix > ul > li:nth-child(3) > a') }
    get viewAll () { return $('#main > div.shoper-toolbar.clearfix > ul > li:nth-child(4) > a') }

    open () {
        return super.open('http://52.14.147.231/');
    }

}


module.exports = new ShopPage();
