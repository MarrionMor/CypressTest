// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************
// Import commands.js using ES2015 syntax:
Cypress.on('uncaught:exception', (err) => {
  // Игнорируем ошибки гидратации React, чтобы тесты не падали
  if (
    /Minified React error #418/.test(err.message) ||
     /Minified React error #422/.test(err.message) ||
    /Minified React error #423/.test(err.message) ||
    /Minified React error #425/.test(err.message) ||
    /hydration failed because the initial UI does not match/.test(err.message) || // Сообщение для #418
    /There was an error during hydration/.test(err.message) // Сообщение для #423
  ) {
    return false; // Предотвращает падение теста в Cypress
  }
  // Если ошибка не связана с гидратацией, позволяем Cypress обработать её стандартно
})
import './commands'
