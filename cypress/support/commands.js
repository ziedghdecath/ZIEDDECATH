// ***********************************************************
/*
 * Auteur: Marwa WAHADA
 * Projet: ORIGAMI
 * Date: 20-03-2023
 * Description: Ce code construit les étapes de Login 
 * qu'on va pouvoir utilisé dans les prochaines cas de tests
 */
// ***********************************************************

Cypress.Commands.add('Login', (login,password) => {
cy.visit('https://admin-1.ig1.dev-03.origami-stg-yp4v.decathlon.io/')
cy.get('[value="Sign in with"]',{timeout : 15000}).click()
cy.get('#username',{timeout : 15000}).type(login,{log:false})
cy.get('#password',{timeout : 15000}).type(password,{log:false})
cy.get('#cnxbton').click()
cy.get('[aria-label="Profile"]',{timeout : 15000}).should('be.visible')

})