// ***********************************************************
/*
 * Auteur: Marwa WAHADA
 * Projet: ORIGAMI
 * Date: 08-04-2023
 * Description: Ce code est dédié pour la mise 
 * en place de la configuration Cypress
 */
// ***********************************************************

const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity: false,
  waitForAnimations: true,
  viewportWidth: 1400,
  viewportHeight: 900,
  e2e: {
  clientUrl:"https://client-1.ig1.dev-03.origami-stg-yp4v.decathlon.io/",
  adminUrl: "https://admin-1.ig1.dev-03.origami-stg-yp4v.decathlon.io/login",
  
    
  setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern : "cypress/e2e/**/*.spec.js"
  },
});

