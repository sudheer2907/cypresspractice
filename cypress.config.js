const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseurl: 'https://demo.seleniumeasy.com/',
    setupNodeEvents(on, config) {
    },
  },
  reporter: 'cypress-mochawesome-reporter',
  video: false,
  screenshotsFolder: 'screenshots',
  reporterOptions: {
    reportDir: 'cypress/reports',
    charts: true,
    reportPageTitle: 'SOAR UI Automation Test Results',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
  chromeWebSecurity: false,
  defaultCommandTimeout: 45000,
  pageLoadTimeout: 90000,
  screenshotOnRunFailure: true,
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
