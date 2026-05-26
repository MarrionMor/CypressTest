   ///<reference types="cypress" />

// const cypress = require("cypress");
import users from '../fixtures/users';

// const user = new users(users);

console.log(users.mashka.email);

it('LoginIn', function() {
  cy.viewport(1280, 720)  // ширина 1280px, высота 720px`  

    cy.visit('https://id.dev2.planeta.ru/login')
    cy.wait(1000);
    cy.get('[name="email"]').click().type(users.mashka.email);
    cy.get('[name="password"]').click().type(users.mashka.password);
    cy.get('.route-module__form___tROAt > .button-module__button___YeqL-').click();
    cy.wait(1000);
    cy.url().should('eq', 'https://id.dev2.planeta.ru/account');
   


})