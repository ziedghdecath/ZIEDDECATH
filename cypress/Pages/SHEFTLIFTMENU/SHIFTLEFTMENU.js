///  <reference types="Cypress"/>
import * as SHIFTLEFTMENU from '../../Object-Repository/SHEFLIFTMENU/SHEFLEFTMENU.po'
Cypress.Commands.add('shift_leftMenu', () => {

 
        cy.visit('https://client-1.ig1.dev-03.origami-stg-yp4v.decathlon.io/landing-page')

   cy.xpath(SHIFTLEFTMENU.firstmenu).click();
   cy.xpath(SHIFTLEFTMENU.secondmenu).click();
   cy.xpath(SHIFTLEFTMENU.secondmenu).should('be.visible');
})
