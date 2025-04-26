/// <reference types="cypress"/>

describe('US-012-Funcionalidade: Política de privacidade', () => {
    it('Deve ser redirecionado ao clicar na política de privacidade', () => {
      cy.visit('http://192.168.18.60:8080/')
      cy.get('a').click()
    })
  })

  // Estou enviando, mas não conseguir resolver o erro sobre ser direcionado para nova URL