 // ***********************************************************
/*
 * Auteur: GHANMI ZIED
 * Projet: ORIGAMI
 * Date: 26-09-2023
 * Description: Ce code permet d'exécuter la synchrnoisation treeview 
 * 
 */
// ***********************************************************  

/// <reference types="Cypress"/>

import * as Login from  '../../Pages/Login/Login'

const LOGIN = Cypress.env('login')
const MDP = Cypress.env('password')
describe('FORM Tests', () => {
it('synchtreeview', () => {
    Cypress.on('uncaught:exception', () => { return false })

    cy.visit("https://admin-1.ig1.dev-03.origami-stg-yp4v.decathlon.io/")
    //cy.session('Login',()=>{
      
        cy.Login(LOGIN,MDP)
        cy.get('[href="/tree_views"]').click()
        cy.wait(5000)
        cy.get('[aria-label="Edit"]').click()
        cy.wait(5000)
        cy.get('[aria-label="SYNCHRONIZE WITH MENU"]').click()
        cy.wait(7000)
        cy.get('[class="rst__tree"]').should("be.visible").then(() => {
          cy.get('[aria-label="Expand"]').eq(0).click()
          cy.wait(5000)

          cy.get('[style="height: 62px; left: 0px; position: absolute; top: 124px; width: 100%;"] > .jss126 > [style="height: 100%;"] > .jss129 > .jss131 > .jss135 > [title="Edit link"]').click()
         cy.xpath('//span[text() ="Add automation"]/ancestor::button').click()
          // cy.get('.jss153 > .MuiButtonBase-root > .MuiButton-label').click()
          cy.wait(50000).then(() => {

        cy.get(':nth-child(8) > .MuiAccordionSummary-root > .MuiButtonBase-root').should("be.visible")            
        cy.get(':nth-child(8) > .MuiAccordionSummary-root > .MuiButtonBase-root').click().then(() => {
          cy.get('input[placeholder="Choose..."]').eq(7).type("cardio training [296]").click().then(() => {
          cy.get('#296').check();

          cy.get('.MuiDialogContent-root > .MuiDialogActions-root > .MuiButtonBase-root > .MuiButton-label').click()
          cy.get('.MuiDialogActions-root > .MuiButton-contained > .MuiButton-label').eq(0).click()
          cy.xpath('//span[text()="Save"]/ancestor::button').click();
          cy.get('[aria-label="Save"] > .MuiButton-label > .jss10').click()
          cy.wait(8000)
        cy.get('[href="/article_pages"]').click()
        cy.wait(15000)
          cy.get('[placeholder="Title"]').type('cardio').type('{enter}')
          cy.get(':nth-child(1) > .column-status').should('have.text', 'published');


          //cy.xpath('//span[text()="Save"]/ancestor::button').click({multiple:true});


          
        })     

          //cy.get('#rdts30_trigger').should("be.visible")
       // cy.get('#rdts30_trigger').click({force:true})
      }) 
      })
       //cy.get('[title="Edit link"]').eq(2).click()
          
        })
      //  cy.get('[aria-label="SYNCHRONIZE WITH MENU"]').should('be.disabled')
   //     cy.get('[aria-label="Expand"]').eq(0).click()
//cy.wait(8000)
       

        //
        

      //  })
     
   
  })

})