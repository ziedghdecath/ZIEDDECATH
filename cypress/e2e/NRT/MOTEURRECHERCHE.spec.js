 // ***********************************************************
/*
 * Auteur: GHANMI ZIED
 * Projet: ORIGAMI
 * Date: 19-09-2023
 * Description: Ce code permet de déterminer la perfomance du moteur de recherche en terme temps d'execution de la requete 
 */
// ***********************************************************  

/// <reference types="Cypress"/>

import * as MOTEURRECHERCHE from '../../Pages/MOTEURRECHERCHE/MOTEURRECHERCHE'


describe('FORM Tests', () => {
it('moteur_recherche', () => {
    Cypress.on('uncaught:exception', () => { return false })

    cy.moteur_recherche();
    
  })

})