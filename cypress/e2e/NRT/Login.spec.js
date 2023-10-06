 // ***********************************************************
/*
 * Auteur: Marwa WAHADA
 * Projet: ORIGAMI
 * Date: 01-06-2023
 * Description: Ce code permet d'exécuter les différentes 
 * combinaisons pour le test d'authentification
 */
// ***********************************************************  

/// <reference types="Cypress"/>

import * as Login from  '../../Pages/Login/Login'

const LOGIN = Cypress.env('login')
const MDP = Cypress.env('password')

describe('test de login', () => {


  it('Login', () => {
    cy.session('Login',()=>{
    cy.Login(LOGIN,MDP)

    })
   })

  it('Wrong Password Test Case', () => {
    cy.Wrong_Password_Test_Case();
    

  })

  it('Wrong Login Test Case', () => {
    cy.Wrong_Login_Test_Case()

  })


  it('Empty Password Field', () => {
    cy.Empty_Password_Field()

  }) 

})

 

 