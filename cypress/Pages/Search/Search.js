///  <reference types="Cypress"/>
import * as  Client from '../../Object-Repository/Search/Search.po'

const url = "https://client-1.ig1.dev-03.origami-stg-yp4v.decathlon.io/";

Cypress.Commands.add('Sanity_Check', () => {

        cy.visit(url)
        Cypress.on('uncaught:exception', (err, runnable) => {
                // ignore Uncought exception 
                return false
        })
        cy.get('body').should('exist');
        cy.get('html').should('exist');
        cy.get('head').should('exist');
        cy.get('title').should('exist');
        cy.get('meta').should('exist');

})


Cypress.Commands.add('Search_For_Existing_Element', () => {


        cy.get('[placeholder="Saisissez un mot-clé pour lancer une recherche"]').invoke('css', 'visibility', 'visible').then(() => {
                // Now the form should be visible, and you can interact with the input
                cy.get(Client.searchField).type('Test de Marwa', { force: true });
                cy.get(Client.searchField).type('{enter}', { force: true });
                cy.get(Client.searchContainer).contains('résultats pour votre recherche')
                cy.get(Client.searchElement1).should('exist')
                
        });





})

Cypress.Commands.add('Search_For_NonExisting_Element', () => {

        cy.get('[placeholder="Saisissez un mot-clé pour lancer une recherche"]').invoke('css', 'visibility', 'visible').then(() => {
                // Now the form should be visible, and you can interact with the input
                cy.get(Client.searchField).type('NoElementFound', { force: true });
                cy.get(Client.searchField).type('{enter}', { force: true });
                cy.get(Client.searchContainer).contains('Aucun résultat pour votre recherche')
        

        });
})



Cypress.Commands.add('Search_For_Existing_Element_With_Paging_Result', () => {


        cy.get('[placeholder="Saisissez un mot-clé pour lancer une recherche"]').invoke('css', 'visibility', 'visible').then(() => {
                // Now the form should be visible, and you can interact with the input
                cy.get(Client.searchField).type('HOW TO CHOOSE A YOUR SPORTS T-SHIRT', { force: true });
                cy.get(Client.searchField).type('{enter}', { force: true });
                cy.get(Client.searchContainer).contains('résultats pour votre recherche')
                cy.get(Client.searchElement2).should('exist')
                cy.get(Client.pagination).should('exist')
        });



})
