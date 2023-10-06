 // ***********************************************************
/*
 * Auteur: GHANMI ZIED
 * Projet: ORIGAMI
 * Date: 13-09-2023
 * Description: Ce code permet d'exécuter les différentes 
 * combinaisons pour le test gestion de formulaire
 */
// ***********************************************************  

/// <reference types="Cypress"/>

import * as CTA from '../../Pages/CTA/CTA'


describe('FORM Tests', () => {
it('Test_Form_Cta', () => {
    Cypress.on('uncaught:exception', () => { return false })

    cy.Test_Form_Cta();
    
  })

})