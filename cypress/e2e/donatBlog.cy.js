///<reference types="cypress" />
//Проверка блока Поддержать автора на странице

it('Donat', function() {
    cy.viewport(1280, 720)  // ширина 1280px, высота 720px`
   cy.visit('https://sandbox.orbita.local/p/2713289113')
   cy.wait(2000);
   
   cy.get('[data-test-path="pages-blogPage-main-donate-price-200"]').click();
   cy.get('[data-test-path="pages-blogPage-main-donate-input"]').should('have.value', '200 ₽');

   cy.get('[data-test-path="pages-blogPage-main-donate-price-300"]').click();
   cy.get('[data-test-path="pages-blogPage-main-donate-input"]').should('have.value', '300 ₽');

   cy.get('[data-test-path="pages-blogPage-main-donate-price-500"]').click();
   cy.get('[data-test-path="pages-blogPage-main-donate-input"]').should('have.value', '500 ₽');

   cy.get('[data-test-path="pages-blogPage-main-donate-price-750"]').click();
   cy.get('[data-test-path="pages-blogPage-main-donate-input"]').should('have.value', '750 ₽');

   cy.get('[data-test-path="pages-blogPage-main-donate-price-1000"]').click()
   cy.get('[data-test-path="pages-blogPage-main-donate-input"]').should('have.value', '1 000 ₽');
   
   cy.get('[data-test-path="pages-blogPage-main-donate-input"]').click()
   .clear()
   .type('520');
   cy.get('[data-test-path="pages-blogPage-main-donate-input"]').should('have.value', '520 ₽');
   cy.get('[data-test-path="pages-blogPage-main-donate-submit"]')
   .should('have.text', 'Поддержать')
   .click();
   cy.wait(2000);
   cy.url().should('include', '/donate') // Проверка, что URL содержит нужный путь
 

})

