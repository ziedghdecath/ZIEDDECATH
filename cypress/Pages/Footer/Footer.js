// ***********************************************************
/*
 * Auteur: Marwa WAHADA
 * Projet: ORIGAMI
 * Date: 17-06-2023
 * Description: Ce code a pour but de définir l'ensemble 
 * de scénario pour le footer de la HP
 */
// ***********************************************************


///  <reference types="Cypress"/>
import * as  Footer from '../../Object-Repository/Footer/Footer.Po'

const url = "https://client-1.ig1.dev-03.origami-stg-yp4v.decathlon.io/"; 
const undefined_url = "https://client-1.ig1.dev-03.origami-stg-yp4v.decathlon.io/404"; 

Cypress.Commands.add('Check_Legal_Notice_Page', () => {

    cy.visit(url)
    Cypress.on('uncaught:exception', (err, runnable) => {
        // ignore Uncought exception 
        return false
    })
    cy.xpath(Footer.legalNotice).click()
    cy.get(Footer.legalNoticeContent).contains(' Mentions légales')

})

Cypress.Commands.add('Check_Term_Of_Use_Page', () => {

    cy.visit(url)
    Cypress.on('uncaught:exception', (err, runnable) => {
        // ignore Uncought exception 
        return false
    })
     cy.xpath(Footer.termOfUse).click()
     cy.get(Footer.termOfUseContent).contains('Terms of Use') 
}) 

Cypress.Commands.add('Check_Contacts_Page', () => {

    cy.visit(url)
    Cypress.on('uncaught:exception', (err, runnable) => {
        // ignore Uncought exception 
        return false
    })
     cy.xpath(Footer.contacts).click()
     cy.get(Footer.contactsContent).contains('Page de contact') 
})


Cypress.Commands.add('Check_404_Page', () => {

    cy.visit(url)
    Cypress.on('uncaught:exception', (err, runnable) => {
        // ignore Uncought exception 
        return false
    })
    cy.visit(undefined_url, { failOnStatusCode: false })
    cy.get(Footer.notFoundPage).contains('404 error') 
})


Cypress.Commands.add('Check_Personal_Data_Page', () => {

    cy.visit(url)
    Cypress.on('uncaught:exception', (err, runnable) => {
        // ignore Uncought exception 
        return false
    })
     cy.xpath(Footer.personalData).click()
     cy.visit("https://client-1.ig1.dev-03.origami-stg-yp4v.decathlon.io/donnees-personnelles")
     Cypress.on('uncaught:exception', (err, runnable) => {
        // ignore Uncought exception 
        return false
    })
     cy.get(Footer.personalDataContent)
})

 Cypress.Commands.add('Check_Footer_Data', () => {

    cy.visit(url)
    Cypress.on('uncaught:exception', (err, runnable) => {
        // ignore Uncought exception 
        return false
    })
    cy.get(Footer.faceBookIcon).should('exist')
    cy.get(Footer.twitterIcon).should('exist')
    cy.get(Footer.youtubeIcon).should('exist')
    cy.get(Footer.pinterestIcon).should('exist')
    cy.get(Footer.instagramIcon).should('exist')
}) 

Cypress.Commands.add('Check_Copy_right', () => {

    cy.visit(url)
    Cypress.on('uncaught:exception', (err, runnable) => {
        // ignore Uncought exception 
        return false
    })
    cy.get(Footer.copyRight).contains('Copyright 2022 Decathlon') 
})



// This test case has been automated but needs to be updated via the configuration on BO 

// Cypress.Commands.add('Check_Cookies_PopUp', () => {

//     cy.visit(url)
//     Cypress.on('uncaught:exception', (err, runnable) => {
//         // ignore Uncought exception 
//         return false
//     })
//      cy.xpath(Footer.cookies).click()
//      cy.get(Footer.cks).contains('Gestion du consentement')
    // cy.get(Footer.cookiesPopup).contains('Gestion du consentement')
     

// })
