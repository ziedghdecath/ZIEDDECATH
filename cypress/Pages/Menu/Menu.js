///  <reference types="Cypress"/>
import * as  Menu from '../../Object-Repository/Menu/Menu.po'

const url = "https://blank.decathlon.net/"; 

Cypress.Commands.add('Check_Logo', () => {

    cy.visit(url)
    Cypress.on('uncaught:exception', (err, runnable) => {
        // ignore Uncought exception 
        return false
    })
    cy.get(Menu.logo).should('exist');
    cy.get(Menu.menu).should('exist');
   

})


Cypress.Commands.add('Check_the_first_menu_item_internal_redirection', () => {

    cy.visit(url)
    Cypress.on('uncaught:exception', (err, runnable) => {
        // ignore Uncought exception 
        return false
    })

    cy.get(Menu.menuItem1).click({force: true})
    cy.get(Menu.homePageContent).contains('Decathlon support,')

})

Cypress.Commands.add('Check_the_second_menu_item_external_redirection', () => {

    cy.visit(url)
    Cypress.on('uncaught:exception', (err, runnable) => {
        // ignore Uncought exception 
        return false
    })

    cy.get(Menu.menuItem2).click({force: true})
    cy.get(Menu.externLinkContent).should('have.attr', 'target', '_blank')
    cy.window().then((win) => { cy.wrap(win).should('have.property', 'open').and('be.calledWith', Menu.externLinkContent ); 
});
 
  

    
})