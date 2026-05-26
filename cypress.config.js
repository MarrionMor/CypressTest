const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: false,
  
  experimentalModifyObstructiveThirdPartyCode: true,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    'watchForFileChanges': false, // default is true, set to false to disable watching and re-running tests on file changes
    "baseUrl": 'https://sandbox.orbita.local/', // set the base URL for all tests
    chromeWebSecurity: false, // disable Chrome's web security to allow cross-origin testing
  },
});
