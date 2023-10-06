///  <reference types="Cypress"/>
import * as ACCEPTCOOCKIES from '../../Pages/ACCEPTCOOCKIES/ACCEPTCOOCKIES'
it('coockies_accept', () => {
    Cypress.on('uncaught:exception', () => { return false })
cy.accept_coockies();
})