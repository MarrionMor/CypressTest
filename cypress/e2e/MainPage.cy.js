   ///<reference types="cypress" />

it('MainPage', function() {
  cy.viewport(1280, 720)  // ширина 1280px, высота 720px`  
  cy.visit('/');
    cy.wait(2000);
    cy.get('[data-test-path="pages-main-mainBanners-becomeAuthor"]').click();
    
    cy.visit('/')
    cy.wait(2000);
    
   cy.get('.authors-top-module__section___7gm15') //Найти блок Авторы в топе
    .find('li') 
    .filter((_, el) => !el.closest('.swiper-slide-duplicate')) //Проверить что в этом блоке 6 карточек авторов

    .each(($link) => {    
      cy.wrap($link).should('not.be.empty'); // Ссылки не пустые
  })
  .first().click(); // Кликнуть по первой карточке автора

   //cy.get('.authors-top-module__section___7gm15 > :nth-child(3) > .author-card-module__card___ntPzT > .author-card-module__link___uCJdR').click();
  
   cy.visit('/')
    cy.wait(2000);

   cy.get('[data-test-path="pages-main-authorsTop-catalog"]') // Получили серелктор кнопки Смотреть всех авторов
  .should('have.text', 'Смотреть всех авторов')
  .and('have.attr', 'href', '/catalog').click();

  cy.visit('/')
    cy.wait(1500);

    cy.get('[data-test-path="pages-main-ecosystem"]') //Подробнее о других сервисах экосистемы
  .should('have.text', 'Подробнее о других сервисах экосистемыПодробнее об экосистеме')
 .and('have.attr', 'href', 'https://ecosystem.dev2.planeta.ru')
  .click()

  cy.wait(1000);
  cy.get('[data-test-path="pages-main-pageBanners-becomeAuthor"]') //Баннер "Покажи себя настоящего"
  .click();
  cy.visit('/')
  cy.wait(1000);

  //Новые публикации
  //Список категорий
  cy.get('[data-test-path="pages-main-publicationList-filter-itemD-all"]') // Получили кнопку Все категории
  .should('have.text', 'Все категории')
  .click();
  cy.wait(900);
  cy.get('[data-test-path="pages-main-publicationList-filter-itemD-literature"]') // Получили кнопку Литература
  .should('have.text', 'Литература')
  .click();
    cy.wait(900);
  cy.get('[data-test-path="pages-main-publicationList-filter-itemD-music"]') // Получили кнопку Музыка
  .should('have.text', 'Музыка')
  .click();
    cy.wait(900);
  cy.get('[data-test-path="pages-main-publicationList-filter-itemD-art"]') // Получили кнопку Искусство
  .should('have.text', 'Искусство')
  .click();
    cy.wait(900);
  cy.get('[data-test-path="pages-main-publicationList-filter-itemD-games"]') // Получили кнопку Игры
  .should('have.text', 'Игры')
  .click();
    cy.wait(900);
  cy.get('[data-test-path="pages-main-publicationList-filter-itemD-charity"]') // Получили кнопку Благотворительность
  .should('have.text', 'Благотворительность')
  .click();
    cy.wait(900);
    cy.get('[data-test-path="pages-main-publicationList-toCatalog-d"]') // Еще одна кнопка В каталог авторов    
  .should('have.text', 'В каталог авторов') //Анадогичная проблема с названием кнопки, есть неразрывный пробел между словами В и каталог, поэтому тест не проходит, нужно уточнить у разработчиков как должно быть написано название кнопки и исправить в тесте
  .and('have.attr', 'href', '/catalog').click();
    cy.visit('/')

 

   /* .and('include', 'ecosystem.dev2.planeta.ru').click();
  //.and('have.attr', 'href', 'https://ecosystem.dev2.planeta.ru/')
  //.click()
  cy.visit('/')*/




  // cy.get('.authors-top-module__authorsList___ApI3d > :nth-child(3) > .author-card-module__card___ntPzT > .author-card-module__link___uCJdR')
 
  

})