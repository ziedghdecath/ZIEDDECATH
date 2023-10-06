 // ***********************************************************
/*
 * Auteur: GHANMI ZIED
 * Projet: ORIGAMI
 * Date: 18-09-2023
 * Description: Ce code permet d'exécuter les différentes 
 * combinaisons pour le test gestion de formulaire
 */
// ***********************************************************  

/// <reference types="Cypress"/>

import * as SHEFTLIFTMENU from '../../Pages/SHEFTLIFTMENU/SHIFTLEFTMENU'


describe('FORM Tests', () => {
it('shift_leftMenu', () => {
    Cypress.on('uncaught:exception', () => { return false })

    cy.shift_leftMenu();
    
  })

})