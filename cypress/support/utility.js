// ***********************************************************
/*
 * Auteur: Marwa WAHADA
 * Projet: ORIGAMI
 * Date: 20-03-2023
 * Description: Ce bloc de code aide a configurer plusieurs
 * environnements de tests  
 */
// ***********************************************************



//utility.ts
export class Utility {
    getBaseUrl() {
        //Get the value of evnironment variable i.e ENV
        let envi = Cypress.env('ENV'); //Get the value of evnironment variable i.e ENV
        if (envi == 'PREPROD') 
            return "https://admin-1.ig1.dev-03.origami-stg-yp4v.decathlon.io/login"; 
        // else if (envi == 'BLANK')
        //     return "env2";
        // else if (envi == 'PROD')
        //     return "env3";
        // else
        //     return "env4"; 
    }
}