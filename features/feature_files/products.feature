Feature: Product Flows

  Background:
    Given I am on the shop page
    
  Scenario: Product Detail Description
    When I click on an album
    Then I should see product detail page
    And  I should see product descripiton
    And I should see related products 

  Scenario: Product Detail Review Form
    When I click on an album
    And I click on a product review tab
    Then The review form is displayed
   
  Scenario: Product Detail Add New Review
    When I click on an album
    And I click on a product review tab
    And I fill the form
    And I click on submit
#    Then The review is displayed on screen
 
#  Scenario: Add 2 albums from product detail to cart
#    When I click on an album
#    And I set quantity 2
#    And I click add to cart
#    Then The item is displayed on the cart modal

#  Scenario: Add album from shop page
#    When I click on the add to cart button from the album product

  
 
