/// <reference types="Cypress"/>

import * as Login from '../Pages/login/Login'
import * as Footer from '../Pages/TreeView/TreeView'

const LOGIN = Cypress.env('login')
const MDP = Cypress.env('password')


describe('TreeView Tests', () => {



    it('Create TreeView', () => {
        cy.session('Login', () => {
            cy.Login(LOGIN, MDP)
            cy.Create_TreeView();

        })
    }) 

    // it('Delete TreeView', () => {
    //     cy.session('Login', () => {
    //         cy.Login(LOGIN, MDP)
    //         cy.Delete_TreeView();

    //     })
    // })

})