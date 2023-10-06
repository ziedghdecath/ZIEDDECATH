///  <reference types="Cypress"/>
import * as CTA from '../../Object-Repository/CTA/CTA.PO'
Cypress.Commands.add('Test_Form_Cta', () => {

 
        cy.visit('https://client-2.ig1.dev-03.origami-stg-yp4v.decathlon.io/')
        cy.get(':nth-child(3) > [data-testid="ori-menu-category-simpleLink"]').click()
        cy.wait(1000)
   cy.xpath(CTA.btnassist).click();
   cy.xpath(CTA.formassist).should('exist');
})

