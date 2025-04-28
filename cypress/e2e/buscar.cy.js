/// <reference types="cypress"/>

describe('US-012-Funcionalidade: Buscar filmes', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  afterEach(() => {
    cy.screenshot()
  })

  it('Deve buscar filmes com sucesso', () => {
    cy.get('#search-input').type('Batman')
    cy.get('#search-button').click()
    cy.get('#results-section').should('contain', 'Batmanfsdfsdfggs')
  })

  it('Deve buscar filmes com sucesso de uma lista', () => {
    cy.fixture('filmes').then((filmes) => {
      cy.get('#search-input').type(filmes[1].titulo)
      cy.get('#search-button').click()
      cy.get('#results-section').should('contain', filmes[1].titulo)
    })
  })

  it('Deve buscar filmes com sucesso de uma lista interia', () => {
    cy.fixture('filmes').each((filmes) => {
      cy.get('#search-input').clear().type(filmes.titulo)
      cy.get('#search-button').click({ force: true })
      cy.get('#results-section').should('contain', filmes.titulo)
    })
  })

})