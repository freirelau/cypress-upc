/// <reference types="Cypress" />

describe('test case', () => {
    beforeEach(() => {
      cy.enterURL('https://sqademosatp.net/watch/');
    })

    it('Test case 1', () => {  
      cy.fixture('products.json').then(products => {
        cy.clickProduct(products[0].watch);
        cy.modifyQuantity(products[0].quantity);
      })
      
      cy.checkOut();

      cy.fixture('guest.json').then(guest => {
        cy.inputGuestInfo(guest);
      })

      cy.confirmOrder(true);
    })

    it('Test case 2', () => {  
      cy.fixture('products.json').then(products => {
        cy.clickProduct(products[1].watch);
        cy.modifyQuantity(products[1].quantity);
      })
      
      cy.checkOut();

      cy.fixture('guest.json').then(guest => {
        cy.inputGuestInfo(guest);
      })

      cy.confirmOrder(true);
    })

    it('Test case 3', () => {  
      cy.fixture('products.json').then(products => {
        cy.clickProduct(products[0].watch);
        cy.modifyQuantity(products[0].quantity);
      })
      
      cy.checkOut();

      cy.fixture('guest.json').then(guest => {
        cy.inputGuestInfo(guest);
      })

      cy.confirmOrder(false);
    })
})  