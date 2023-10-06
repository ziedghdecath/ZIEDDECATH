///  <reference types="Cypress"/>
import * as Login from '../../Object-Repository/Login/Login.po'

Cypress.Commands.add('Wrong_Password_Test_Case', () => {

    cy.session('Login', () => {
        cy.visit('https://admin-1.ig1.dev-03.origami-stg-yp4v.decathlon.io/login')
        cy.get(Login.signInButton).click()
        cy.get(Login.userNameField).type("Z01OCYPR")
        cy.get(Login.passwordField).type("WrongPassword")
        cy.get(Login.connexionButton).click()
        cy.get(Login.emtyFieldPopUp).contains('Le login ou le mot de passe entré n')
    })
})
Cypress.Commands.add('Wrong_Login_Test_Case', () => {

    cy.session('Login', () => {
        cy.visit('https://admin-1.ig1.dev-03.origami-stg-yp4v.decathlon.io/login')
        cy.get(Login.signInButton).click()
        cy.get(Login.userNameField).type("WrongLogin")
        cy.get(Login.passwordField).type("@ZAhMQj-l56ZjFh")
        cy.get(Login.connexionButton).click()
        cy.get(Login.emtyFieldPopUp).contains('Le login ou le mot de passe entré n')
    })
})
Cypress.Commands.add('Empty_Password_Field', () => {
    cy.session('Login', () => {
        cy.visit('https://admin-1.ig1.dev-03.origami-stg-yp4v.decathlon.io/login')
        cy.get(Login.signInButton).click()
        cy.get(Login.userNameField).type("WrongLogin")
        cy.get(Login.passwordField).type("")
        cy.get(Login.connexionButton).click()/
        cy.get(Login.emtyFieldPopUp).contains('Merci de renseigner ce champ')

    })
})
