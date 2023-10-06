// ***********************************************************
/*
 * Auteur: Marwa WAHADA
 * Projet: ORIGAMI
 * Date: 17-08-2023
 * Description: Ce code a pour but de définir l'ensemble 
 * de scénario pour la creation et la modification 
 * d'un contenu  
 */
// ***********************************************************



///  <reference types="Cypress"/>

import * as  Content from '../../Object-Repository/Content-Creation/Content-Creation.Po'


const HTMLContentCreation = "<b>This is bold text</b>"
const HTMLContentUpdate = "<p>This is a basic HTML page with a title.</p>>"
const HTMLModule = "/modules_html/c86cb30a-f4eb-46b2-b4e7-a9becbc58cd9"

Cypress.Commands.add('Create_HTML_Module',()=>{

    cy.get(Content.htmlModuleButton).click()
    cy.get(Content.createButton).click()
    cy.get(Content.contentField , {timeout : 10000}).contains('Content').click({force : true})
    cy.get(Content.contentTextField , {timeout : 10000}).type(HTMLContentCreation)
    cy.get(Content.saveButton , {timeout : 10000}).click() 
    cy.get(Content.elementCreatedMessage , {timeout : 10000}).contains('Element created').should('exist')
    
       
})


Cypress.Commands.add('Edit_HTML_Module',()=>{

    cy.get(Content.htmlModuleButton).click()
    cy.get(Content.createButton).click()
    cy.get(Content.contentField , {timeout : 10000}).contains('Content').click({force : true})
    cy.get(Content.contentTextField , {timeout : 10000}).type(HTMLContentUpdate)
    cy.get(Content.saveButton).click()
    cy.get(Content.elementCreatedMessage , {timeout : 10000} ).contains('Element created').should('exist')
    cy.get(Content.editButton , {timeout : 10000}).click()
    cy.get(Content.contentTextField , {timeout : 10000}).type(HTMLContentCreation)
    cy.get(Content.saveButton , {timeout : 10000}).click()
    cy.get(Content.elementUpdatedMessage , {timeout : 10000}).contains('Element updated').should('exist')
       
})


Cypress.Commands.add('Create_Line',()=>{

    cy.get(Content.htmlModuleButton).click()
    cy.get(Content.createButton).click()
    cy.get(Content.contentField , {timeout : 10000}).contains('Content').click({force : true})
    cy.get(Content.contentTextField , {timeout : 10000}).type(HTMLContentCreation)
    cy.get(Content.saveButton , {timeout : 10000}).click()
    cy.get(Content.elementCreatedMessage , {timeout : 10000}).contains('Element created').should('exist')
    cy.get(Content.idButton , {timeout : 10000}).click({force : true})
    cy.get(Content.lineButton , {timeout : 10000}).click()
    cy.get(Content.createModuleButton , {timeout : 10000}).click()
    cy.get(Content.moduleField, {timeout : 10000}).type("{ctrl}v")
    cy.get(Content.saveButtonLine , {timeout : 10000}).click()


    
})

Cypress.Commands.add('Edit_Line',()=>{
   
    cy.get(Content.lineButton).click()
    cy.get(Content.createModuleButton , {timeout : 10000}).click()
    cy.get(Content.moduleField , {timeout : 15000}).click()
    cy.wait(15000)
    cy.get(Content.selectModule).click()
    cy.get(Content.saveButtonLine , {timeout : 10000}).click()
    // cy.get(Content.editButton , {timeout : 10000}).click()
    // cy.get(Content.moduleField , {timeout : 10000}).type(HTMLModule)
    // cy.get(Content.saveButtonLine , {timeout : 10000}).click()
   


    
})

Cypress.Commands.add('Create_Section',()=>{
   

    
})

Cypress.Commands.add('Edit_Section',()=>{
   

    
})

Cypress.Commands.add('Create_Internal_Page',()=>{
   

    
})

Cypress.Commands.add('Edit_Internal_Page ',()=>{
   

    
})