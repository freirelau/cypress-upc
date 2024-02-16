// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('enterURL', (site) => {
    cy.visit(site);
})

Cypress.Commands.add('clickProduct', (watch) => {
    cy.get('.search-input').type(watch);
    cy.get('.button-search').wait(500).click();
    cy.get('.btn-buy').wait(1000).click();    
})

Cypress.Commands.add('modifyQuantity', (quantity) => {
   
    for (let q = 1; q < Number(quantity); q++) {
        cy.get('.qty > .qty-box > .bigger').wait(50).click();
    }
    cy.wait(500);
    cy.get('.qty-inp-s').should('have.value',quantity);
    cy.get('.pop-up-close').wait(1000).click();
})

Cypress.Commands.add('checkOut', () => {
    cy.get('.cart-content').invoke('show');
    cy.get('.right-buttons > .btn').wait(1000).click();
})

Cypress.Commands.add('inputGuestInfo', (guest) => {
    cy.get('#box-1770 > .btn-2').wait(500).click();
    cy.get('.payment_class_cod > .item-radio > label > input').wait(500).click();

    cy.get('#shipping_address-firstname').type(guest.firstname);
    cy.get('#shipping_address-lastname').type(guest.lastname);
    cy.get('#shipping_address-street_address').type(guest.street_address);
    cy.get('#shipping_address-postcode').type(guest.postcode);
    cy.get('#shipping_address-city').type(guest.city);
    cy.get('#shipping_address-country').select(guest.country,{force: true});
    cy.get('#shipping_address-email_address').type(guest.email_address);
    cy.get('#checkout-email_address').type(guest.email_address);
    cy.get('#checkout-telephone').type(guest.telephone);
})

Cypress.Commands.add('confirmOrder', (result) => {
    cy.get('#checkout-terms').wait(500).click();
    cy.get('#box-31798 > .btn-2').wait(500).click();

    let message = '';

    if (result) {
        message = 'We\'ve received your order';
    } else {
        message = 'We have not received your order'; 
    }
    cy.get('.text-2').wait(1000).should('have.text', message);
})
