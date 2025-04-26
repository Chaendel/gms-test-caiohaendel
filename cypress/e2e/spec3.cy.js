/// <reference types="cypress"/>

describe('US-012-Funcionalidade: Buscar filmes', () => {
    it('Deve listar filmes relacionados com o nome digitado', () => {
      cy.visit('http://192.168.18.60:8080/')
      cy.get('#search-input').click()
      cy.get('#search-input').type('Bat')
    })
  })