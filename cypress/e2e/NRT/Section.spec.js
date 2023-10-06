 // ***********************************************************
/*
 * Auteur: Marwa WAHADA
 * Projet: ORIGAMI
 * Date: 01-06-2023
 * Description: Ce code permet de creer et de modifier un 
 * une section depuis le BO 
 */
// ***********************************************************  


/// <reference types="Cypress"/>

import * as Login from '../../Pages/login/Login'
import * as  Content from '../../Pages/Content-Creation/Content-Creation' 

const LOGIN = Cypress.env('login')
const MDP = Cypress.env('password')


describe('Section Tests', () => {



    it('Create Section', () => {Section
        cy.session('Login', () => {
            cy.Login(LOGIN, MDP)
            cy.Create_Section();

        })
    })


    it('Edit Section', () => {
        cy.session('Login', () => {
            cy.Login(LOGIN, MDP)
            cy.Edit_Section();

        })
    })

})