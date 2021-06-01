const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class ProductAlbumPage extends Page {
    /**
     * define selectors using getter methods
     */
    get productTitle () { return $('.page-title-text') }
    get productImage () { return $('.wp-post-image') }
    get productSummary () { return $('.woocommerce-product-details__short-description') }
    get addButton () {return $('.plus')}
    get minusButton () {return $('.minus')}
    get descriptionTab () {return $('#tab-title-description')}
    get reviewTab () {return $('#tab-title-reviews')}
    get description (){return $('#tab-description')}
    get review (){return $('#reviews')}
    get reviewAuthor (){return $('#author')}
    get reviewMail (){return $('#email')}
    get reviewRating (){return $('.stars')}
    get review3star (){return $('.star-3')}
    get reviewText (){return $('#comment')}
    get agreeCheckbox (){return $('#wp-comment-cookies-consent')}
    get submitButton (){return $('#submit')}
    get relatedSection () {return $('#product-23 > section')}

    
    /**
     * overwrite specifc options to adapt it to page object
     */
    open () {
        return super.open('http://52.14.147.231/product/album/');
    }

    fillreviewform () {
        this.reviewAuthor.setValue("David");
        this.reviewMail.setValue("david.murillo@gorillalogic.com");
        this.review3star.click();
        this.reviewText.setValue("Test Review");
        this.agreeCheckbox.click();  
    }
}

module.exports = new ProductAlbumPage();
