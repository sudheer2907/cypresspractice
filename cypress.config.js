const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  video:false,
  screenshotsFolder: 'screenshots',
  reporterOptions: {
      charts: true,
      reportPageTitle: 'Herokuaap Test Execution Report',
      embeddedScreenshots: true,
      inlineAssets: true,
      saveAllAttempts: false,
    },
  defaultCommandTimeout: 25000,
  screenshotOnRunFailure: true,
  e2e: {
    setupNodeEvents(on, config) {
    require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
