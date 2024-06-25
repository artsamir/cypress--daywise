// const { config } = require("chai");
const { defineConfig } = require("cypress");


async function setupNodeEvents(on, config) {
  // implement node event listeners here
  return config;
}

module.exports = defineConfig({
  e2e: {
    setupNodeEvents,
    // specPattern: 'cypress/Integration/Basics/*.js'     // Specifiy the what you want to execute
    // specPattern: 'cypress/Evaluation/Basics/*.js'     // Specifiy the what you want to execute
    specPattern: 'cypress/dayPractice/Basics/*.js'
  },
});
