///<reference types="cypress" />

it('My First Test', function() {
  cy.viewport(1280, 720)  // ширина 1280px, высота 720px`  
  
   


   //   cy.visit('/')
   cy.wait(2000);
   cy.contains("button", "Войти").click();

   //cy.get('.header-user-blog-link-module__btnText___Nnrk7').click();
    cy.get('[name="email"]').click().type('mir0slava.4ernigov@gmail.com');
    cy.get('[name="password"]').click().type('5Wrcze1ASD983!');

   
   cy.get('.swiper-slide-next > .authors-top-module__item___wVr\+a > .author-card-module__card___ntPzT > .author-card-module__link___uCJdR').click();
   cy.get('[href="/p/myzon4ik/donate"]')
   cy.get('[name="amount"]').click().type('100');
    cy.get('[name="amount"]').should('have.value', '100');
    cy.get('.textarea-module__textAreaWrapper___5qsnL').click().type('Привет от сайперса!');

})