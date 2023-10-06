 // ***********************************************************
/*
 * Auteur: Marwa WAHADA
 * Projet: ORIGAMI
 * Date: 01-06-2023
 * Description: Ce code permet de lances des tests sur le 
 * Moteur de recherche
 */
// ***********************************************************  

/// <reference types="Cypress"/>

import * as Client from '../../Pages/Search/Search'

describe('Serch tests', () => {

  beforeEach(() => {

    cy.Sanity_Check();

  })
  it('Search For Existing Element', () => {

    cy.Search_For_Existing_Element();

  })

   it('Search For Non Existing Element', () => {

    cy.Search_For_NonExisting_Element();

  }) 


  it('Search For Non Existing Element With Paging Result', () => {

    cy.Search_For_Existing_Element_With_Paging_Result();

  }) 
})
