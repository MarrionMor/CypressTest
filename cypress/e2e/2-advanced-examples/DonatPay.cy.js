///<reference types="cypress" />
//Проверка блока Поддержать автора на странице

it('DonatPay', function() {
    cy.viewport(1280, 720)  // ширина 1280px, высота 720px`
   cy.visit('https://sandbox.orbita.local/p/2713289113')
   cy.wait(2000);
   const donatUser = 999
   


    cy.get('[data-test-path="pages-blogPage-main-donate-price-200"]').click();
     cy.get('[data-test-path="pages-blogPage-main-donate-submit"]')
   .should('have.text', 'Поддержать')
    .click();
   cy.wait(1100);
   cy.url().should('include', '/donate') // Проверка, что URL содержит нужный путь

   //Проверка блока Сумма доната
   cy.get('[data-test-path="pages-blogPage-donate-donateBox-container"]')//.should('include', 'Сумма доната');
   cy.get('[data-test-path="pages-blogPage-donate-donateBox-input"]').should('have.value', '200 ₽')

    cy.get('[data-test-path="pages-blogPage-donate-donateBox-price-300"]').click();
   cy.get('[data-test-path="pages-blogPage-donate-donateBox-input"]').should('have.value', '300 ₽');

   cy.get('[data-test-path="pages-blogPage-donate-donateBox-price-500"]').click();
   cy.get('[data-test-path="pages-blogPage-donate-donateBox-input"]').should('have.value', '500 ₽');

   cy.get('[data-test-path="pages-blogPage-donate-donateBox-price-750"]').click();
   cy.get('[data-test-path="pages-blogPage-donate-donateBox-input"]').should('have.value', '750 ₽');

   cy.get('[data-test-path="pages-blogPage-donate-donateBox-price-1000"]').click()
   cy.get('[data-test-path="pages-blogPage-donate-donateBox-input"]').should('have.value', '1 000 ₽');
    cy.get('[data-test-path="pages-blogPage-donate-donateBox-input"]').click() .clear()
   .type(donatUser);
   cy.get('[data-test-path="pages-blogPage-donate-donateBox-input"]').should('have.value', '999 ₽');

   //Проверка блока Сообщение автору
    cy.get('[data-test-path="pages-blogPage-donate-msg-container"]').should('contain', 'Сообщение автору (необязательно)')
    cy.get('[data-test-path="pages-blogPage-donate-msg-input"]')
    .click()
    .type('Спасибо за ваш труд!')
    .should('have.value', 'Спасибо за ваш труд!');
    //Проверка блока Способ оплаты

    cy.get('[data-test-path="common-purchase-paymentSelect-title"]')
    .should('contain', 'Способ оплаты')
    
    cy.get ('[data-test-path="common-purchase-consents-input"]')
    .next()
    .should('have.text','Укажите ваш email')

    //Проверка блока Условие оплаты и поля для ввода email
      cy.get('[data-test-path="common-purchase-consents-input"]')//.should('have.attr', 'placeholder', 'Укажите ваш email')
    .click()
    .type('mir0slava.4ernigov@gmail.com')
    .should('have.value', 'mir0slava.4ernigov@gmail.com')
   
        //Проверка чекбокса Я даю своё согласие на обработку персональных данных, соглашаюсь с условиями пользовательского соглашения и политикой персональных данных
     cy.get('[data-test-path="common-purchase-consents-agreement"]')
    .should('exist')
    .and('be.visible')
    .and('not.be.checked')
    //Многие современные UI-библиотеки скрывают нативный чекбокс и показывают стилизованный элемент. Реальный <input> остается на странице, но невидим или перекрыт. Поэтому для клика по нему нужно использовать {force: true}, чтобы принудительно кликнуть по элементу, даже если он невидим или перекрыт.
    .click({force: true}) // Кликаем по чекбоксу
     // Проверяем, что чекбокс стал выбран
  cy.get('[data-test-path="common-purchase-consents-agreement"]')
    .should('be.checked')
    
    cy.get('[data-test-path="common-purchase-consents-agreement"]')
    .next() // Переходим к следующему элементу после чекбокса, который содержит текст
    .invoke('text')
   
  .then(text => {
    // Удаляем лишние пробелы и переносы строк
    const normalizedText = text.replace(/\s+/g, ' ').trim()
    expect(normalizedText).to.equal('Я даю своё согласие на обработку персональных данных, соглашаюсь с условиями пользовательского соглашения и политикой персональных данных')
  })
 

    cy.get('[data-test-path="common-purchase-consents-agreement"]')
    .next() // Переходим к следующему элементу после чекбокса, который содержит текст
    .find('a') // Находим все ссылки внутри этого элемента
    .should('have.length', 3) // Проверяем, что найдено 3 ссылки
.each(($el, index) => {
    cy.wrap($el).within(() => {
      const indexToLinkContent = [
        {text: /согласие/i, href: '/docs/private-info#application1'}, 
        {text: /соглашения/i, href: '/docs/agreement'}, 
        {text: /политикой/i, href: '/docs/private-info'}
      ]; 
      cy.contains('a', indexToLinkContent[index].text).should('have.attr', 'href').and('include', indexToLinkContent[index].href)
 
    })
  })
  
        // Соглашение с офертой покупки

    cy.get('[data-test-path="common-purchase-consents-terms"]')
      .should('exist')
     .and('be.visible')
      .and('not.be.checked')
      .next() // Переходим к следующему элементу после чекбокса, который содержит текст
       .invoke('text')
   
  .then(text => {
    // Удаляем лишние пробелы и переносы строк
    const normalizedText = text.replace(/\s+/g, ' ').trim()
    expect(normalizedText).to.equal('Соглашаюсь с Офертой покупки')
  }) 
     cy.contains('a', /Офертой покупки/i).should('have.attr', 'href').and('include', '/docs/orbita-agreement')

    cy.get('[data-test-path="common-purchase-consents-terms"]')
    .click({force: true}) // Кликаем по чекбоксу
     .should('be.checked')// Проверяем, что чекбокс стал выбран
  

        // Рекламные предложения
    cy.get('[data-test-path="common-purchase-consents-marketing"]')
     .should('exist')
    .and('be.visible')
    .and('not.be.checked')
    .next() // Переходим к следующему элементу после чекбокса, который содержит текст
       .invoke('text')
   
  .then(text => {
    // Удаляем лишние пробелы и переносы строк
    const normalizedText = text.replace(/\s+/g, ' ').trim()
    expect(normalizedText).to.equal('Я соглашаюсь получать полезные рассылки и рекламные предложения от Орбиты')
  }) 
    cy.contains('a', /рекламные предложения/i).should('have.attr', 'href').and('include', '/docs/private-info#application2')
    cy.get('[data-test-path="common-purchase-consents-marketing"]')
    .click({force: true}) // Кликаем по чекбоксу
     
  cy.get('[data-test-path="common-purchase-consents-marketing"]')
    .should('be.checked') // Проверяем, что чекбокс стал выбран

        //Кнопка Оплатить "Сумма"
  cy.get('[data-test-path="pages-blogPage-common-purchasePageContainer-submit"]')    
    .invoke('text')
 .then(text => {
    // Удаляем лишние пробелы и переносы строк
    const normalizedText = text.replace(/\s+/g, ' ').trim()
    expect(normalizedText).to.equal('Оплатить '+ donatUser + ' ₽')
    }) 
  cy.get('[data-test-path="pages-blogPage-common-purchasePageContainer-submit"]').click() 
cy.wait(2000)

cy.origin('https://id.dev2.planeta.ru', () => {
   cy.get('[name="email"]').should('have.value', 'mir0slava.4ernigov@gmail.com')
cy.go('back')
    })
         cy.get('[data-test-path="pages-blogPage-common-purchasePageContainer-submit"]').click()
         
})