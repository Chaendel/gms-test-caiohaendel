/// <reference types="cypress"/>

describe('US-012-Funcionalidade: Buscar filmes', () => {
    it('Deve limpar busca de filmes', () => {
      cy.visit('http://192.168.18.60:8080/')
      cy.get('#search-input').click()
      cy.get('#search-input').type('Batman')
      cy.get('#search-button').click()
      cy.wait(5000)
      cy.get('#clear-button').click()
    })
  })