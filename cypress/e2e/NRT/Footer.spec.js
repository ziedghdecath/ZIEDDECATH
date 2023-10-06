 // ***********************************************************
/*
 * Auteur: Marwa WAHADA
 * Projet: ORIGAMI
 * Date: 01-06-2023
 * Description: Ce code permet de vérifier la structure
 * du Footer dans la HP 
 */
// ***********************************************************  


/// <reference types="Cypress"/>

import * as Footer from '../../Pages/Footer/Footer'



describe('Footer Tests', () => {


  it('Check the Legal Notice page  ', () => {

    cy.Check_Legal_Notice_Page();

  })

  it('Check the Term Of Use Page', () => {

    cy.Check_Term_Of_Use_Page();

  })

  it('Check the Contacts Page', () => {

    cy.Check_Contacts_Page();

  })


  it('Check the 404 Page ', () => {

    cy.Check_404_Page();

  })

  it('Check the Personal Data Page', () => {

    cy.Check_Personal_Data_Page();

  })

  it('Check Footer Data', () => {

    cy.Check_Footer_Data();

  })

  it('Check the Copy right ', () => {

    cy.Check_Copy_right();
    
  })


  // This test case has been automated but needs to be updated via the configuration on BO 

  // it('Check the Cookies PopUp ', () => {r

  //   cy.Check_Cookies_PopUp();

  //  })

})
