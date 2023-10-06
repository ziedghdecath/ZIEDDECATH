///  <reference types="Cypress"/>
import * as  TreeView from '../../Object-Repository/TreeView/TreeView.Po'

const url = "https://client-1.ig1.dev-03.origami-stg-yp4v.decathlon.io/";
const adminurl = "https://admin-1.ig1.dev-03.origami-stg-yp4v.decathlon.io/";


Cypress.Commands.add('Create_TreeView', () => {

    cy.get('[href="/tree_views"]').click()
    cy.wait(5000)
    cy.get(TreeView.editButton).click()
    cy.get(TreeView.synchronizeButton).click()
    cy.wait(5000)
    cy.get(TreeView.treeViewContainer).should('exist')
    cy.get(TreeView.synchronizeButton).should('be.disabled')
    cy.get(TreeView.expandButton).click({ multiple: true })
    cy.wait(5000)
   /* cy.get(TreeView.saveButton).click()
    cy.get('[aria-label="Save"] > .MuiButton-label > .jss10').click()
    cy.wait(5000)
    cy.get(TreeView.popupSuccessMessage).contains('Treeview updating, this may take a few minutes') */


})

Cypress.Commands.add('Delete_TreeView', () => {

    cy.get('[href="/tree_views"]').click()
    cy.wait(5000)
    cy.get(TreeView.editButton).click()
    cy.xpath(TreeView.deleteFirstElement).click()
   



})


//cy.get(TreeView.popupCloseButton).click()