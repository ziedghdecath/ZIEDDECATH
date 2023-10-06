// ***********************************************************
/*
 * Auteur: Marwa WAHADA
 * Projet: ORIGAMI
 * Date: 20-03-2023
 * Description: Ce code a pour but d'exécuter un ensemble 
 * d'action avant chaque cas de test pour ouvrir une nouvelle 
 * session
 */
// ***********************************************************

import './commands'
require('cypress-xpath')

beforeEach(()=>{
  
     cy.clearCookie('https://preprod.idpdecathlon.oxylane.com')
     cy.clearLocalStorage('https://preprod.idpdecathlon.oxylane.com')
     cy.clearAllLocalStorage()
     cy.clearAllSessionStorage() 
     Cypress.session.clearAllSavedSessions()
     Cypress.session.clearCurrentSessionData()
})