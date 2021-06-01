const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class CartPage extends Page {
    /**
     * define selectors using getter methods
     */
    
    get cartTitle () { return $('.page-title-text') }
    get searchField () { return $('.search-field') }
    get recentComments () { return $('#recent-comments-2') }
    get categoriesSection () { return $('#categories-2') }
    get emptyCartSection () { return $('.cart-empty woocommerce-info') }
    get closeModal () { return $('.wcspc-icon-close') }
    get totalCartModal () { return $('.wcspc-total') }
    get cartModalButton () { return $('.wcspc-action-left') }
    get checkoutModalButton () { return $('.wcspc-action-right') }
    get continueShopModal () { return $('#wcspc-continue') }
    get deleteItemIcon (){ return $('.wcspc-item-remove wcspc-icon-remove')}
    get plusItemQuantityModal (){ return $('.wcspc-item-qty-plus')}
    get minusItemQuantityModal (){ return $('.wcspc-item-qty-minus')}
    
    /**
     * overwrite specifc options to adapt it to page object
     */
     open () {
        return super.open('http://52.14.147.231/cart/');
    }

}




module.exports = new CartPage();
