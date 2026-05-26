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
Cypress.Commands.add('login', (email = 'mir0slava.4ernigov@gmail.com', password = '5Wrcze1ASD983!') => {


    cy.visit('https://id.dev2.planeta.ru/login')
    cy.wait(1000);
    cy.get('[name="email"]').click().type(email);
    cy.get('[name="password"]').click().type(password);
    cy.get('.route-module__form___tROAt > .button-module__button___YeqL-').click();
    cy.wait(1000);
    cy.url().should('eq', 'https://id.dev2.planeta.ru/account');
   

});