///  <reference types="Cypress"/>
import * as ACCEPTCOOCKIES from '../../Object-Repository/ACCEPTCOOCKIES/ACCEPTCOOCKIES.PO'
Cypress.Commands.add('accept_coockies', () => {

 
    Cypress.on('uncaught:exception', () => { return false })
    cy.visit('https://blank.decathlon.net/')
    cy.wait(2000)
    cy.get(ACCEPTCOOCKIES.bancookies).should('exist')
    cy.xpath(ACCEPTCOOCKIES.btnaccptcookies).click()
    cy.get(ACCEPTCOOCKIES.bancookies).should('not.exist')
})

