///<reference types="cypress" />
describe('LoginIn', () => {
    before(() => {
        cy.login();
    });

    it('LK_ID', function () {

        cy.viewport(1280, 720)  // ширина 1280px, высота 720px`  
        //Planeta
        cy.get('[href="https://dev2.planeta.ru/account/my-campaigns"]')
        .contains('Мои проекты').
        should('have.text', 'Мои проекты').click();
        
        cy.wait(1000);
        
        cy.url().should('eq', 'https://id.dev2.planeta.ru/account');
        cy.get('[href="https://dev2.planeta.ru/account/orders"]')
        .contains('Мои заказы')
        .should('have.text', 'Мои заказы')
        .and('be.visible').click();
        cy.wait(1000);
        cy.url().should('eq', 'https://id.dev2.planeta.ru/account');
        cy.get('[href="https://dev2.planeta.ru/account/balance"]')
        .contains('Баланс')
        .should('have.text', 'Баланс')
        .and('be.visible').click();
        cy.wait(1000);
        //Шоп
        cy.url().should('eq', 'https://id.dev2.planeta.ru/account');
        cy.get('[href="https://sandbox.atmosfera.local/profile/orders"]')
        .contains('Мои заказы')
  .should('have.text', 'Мои заказы')
  .and('be.visible').click(); // Мои заказы
        cy.wait(1000);
        cy.url().should('eq', 'https://id.dev2.planeta.ru/account');
        cy.get('[href="https://sandbox.atmosfera.local/profile/refunds"]') 
        .contains('Возвраты')
        .should('have.text', 'Возвраты')
  .and('be.visible').click(); // Возвраты
        cy.wait(1000);
        cy.url().should('eq', 'https://id.dev2.planeta.ru/account');
        //Орбита
        cy.get('[href="https://sandbox.orbita.local/p/6742053294"]') 
        .contains('Моя страница')
        .should('have.text', 'Моя страница')
  .and('be.visible').click(); // Моя страница
        cy.wait(1000);
        cy.url().should('eq', 'https://id.dev2.planeta.ru/account');    
       cy.get('[href="https://sandbox.orbita.local/profile/my-subscriptions"]') 
        .contains('История покупок и заказов')
         .should('have.text', 'История покупок и заказов') 
  .and('be.visible').click(); // История покупок и&nbspзаказов
        cy.wait(1000);
        cy.url().should('eq', 'https://id.dev2.planeta.ru/account');
        cy.get('[href="https://sandbox.orbita.local/feed"]')
        .contains('Лента публикаций')
        .should('have.text', 'Лента публикаций')
  .and('be.visible').click(); // Лента публикаций
        cy.wait(1000);
        cy.url().should('eq', 'https://id.dev2.planeta.ru/account');
        //Проверить, что есть такая сслылка и называется она Мои заказы
       // cy.get('[href="https://dev2.planeta.ru/account/orders"]').should('be.visible');

    });
})
/*
 .then(text => text.replace(/\s+/g, ' ')) // заменяем все пробельные символы на один пробел
  .should('include', 'Я даю своё согласие на обработку моих персональных данных, соглашаюсь с условиями пользовательского соглашения и политикой персональных данных')  */




