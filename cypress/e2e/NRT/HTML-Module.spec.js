 // ***********************************************************
/*
 * Auteur: Marwa WAHADA
 * Projet: ORIGAMI
 * Date: 01-06-2023
 * Description: Ce code permet de creer et de modifier un 
 * un contenu HTML depuis le BO 
 */
// ***********************************************************  

/// <reference types="Cypress"/>

import * as Login from '../../Pages/login/Login'
import * as  Content from '../../Pages/Content-Creation/Content-Creation' 

const LOGIN = Cypress.env('login')
const MDP = Cypress.env('password')


describe('HTML Module Tests', () => {



    it('Create HTML Module', () => {
        cy.session('Login', () => {
            cy.Login(LOGIN, MDP)
            cy.Create_HTML_Module();

        })
    })


    it('Edit HTML Module', () => {
        cy.session('Login', () => {
            cy.Login(LOGIN, MDP)
            cy.Edit_HTML_Module();

        })
    })

})