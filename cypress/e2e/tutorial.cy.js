/// <reference types="Cypress" />
describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io');
    cy.get('h1').contains("Kitchen Sink");
    cy.contains("type").click();
    cy.url().should("include", "/commands/actions");
    /* ==== Generated with Cypress Studio ==== */
    cy.get('#email1').clear('d');
    cy.get('#email1').type('direcciónprueba@email.com');
    cy.get('#email1').clear('direcciónprueba@email.com{enter}');
    cy.get('#email1').type('direcciónprueba@email.com{enter}');
    cy.get('#password1').click();
    cy.get('.row > :nth-child(5)').click();
    cy.get('#fullName1').clear('fd');
    cy.get('#fullName1').type('fdsfds');
    cy.get('#description').click();
    cy.get('#couponCode1').click();
    cy.get('.action-form > .btn').click();
    /* ==== End Cypress Studio ==== */
  })
})