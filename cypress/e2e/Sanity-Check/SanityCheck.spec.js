///  <reference types="Cypress"/>
describe('URL-Check', () => {

  // ***********************************************************
/*
 * Auteur: Marwa WAHADA
 * Projet: ORIGAMI
 * Date: 01-06-2023
 * Description: Ce code permet de vérifier les sites Production
 * et la structure de la page 
 */
// ***********************************************************  
  
  
  const urls = require('../../fixtures/urls.json');


    urls.urls.forEach((url) => {
      it(`checks ${url} for 200 response`, () => {
        cy.visit(url)
        cy.on('uncaught:exception', (err) => {
            expect(err.message); 
             return false;
        });
      
        cy.get('body').should('exist');
        cy.get('html').should('exist');
        cy.get('head').should('exist');
        cy.get('title').should('exist');
        cy.get('meta').should('exist');
    
        // Check for 200 response
        cy.request(url).should((response) => {
          expect(response.status).to.eq(200);
        })
      })
    })

})
