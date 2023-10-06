///  <reference types="Cypress"/>

import * as MOTEURRECHERCHE from '../../Object-Repository/MOTEURRECHERCHE/MOTEURRECHERCHE.po'

Cypress.Commands.add('moteur_recherche', () => {

    
    cy.visit('https://client-1.ig1.dev-03.origami-stg-yp4v.decathlon.io/')
    cy.clearCookies()
    const startTime = Date.now(); 

    cy.log("debutt :" +startTime+ "ms");

        cy.get(MOTEURRECHERCHE.searchfiled).type('velo')
        
        cy.get(MOTEURRECHERCHE.btnsearch).click();
         cy.get(MOTEURRECHERCHE.divsearch).should("be.visible").then(() => {
            const endTime = Date.now();

            // Calculez la durée d'exécution en millisecondes
            const executionTime = Math.floor((endTime - startTime)/1000);
            
            cy.log(`La recherche  mis ${executionTime} s .`);

         })
        //var endTime = window.performance.now()
       // cy.log("endTimee :" +endTime+ "ms");

          // Calculez la durée d'exécution en millisecondes
    // Affichez la durée d'exécution dans la console ou enregistrez-la dans un rapport
   

        
    })

