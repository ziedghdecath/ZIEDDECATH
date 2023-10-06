 // ***********************************************************
/*
 * Auteur: Marwa WAHADA
 * Projet: ORIGAMI
 * Date: 01-06-2023
 * Description: Ce code permet de vérifier l'existance 
 * des items Menu depuis le Client 
 */
// ***********************************************************  

/// <reference types="Cypress"/>

import * as Menu from '../../Pages/Menu/Menu'



describe('Menu Tests', () => {


  it('Check the Logo  ', () => {

    cy.Check_Logo();

  })

  it('Check the first menu item internal redirection', () => {

    cy.Check_the_first_menu_item_internal_redirection();

  })

  it('Check_the_second_menu_item_external_redirection', () => {

    cy.Check_the_second_menu_item_external_redirection();

  })


})