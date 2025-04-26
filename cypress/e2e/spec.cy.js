/// <reference types="cypress"/>

describe('US-012-Funcionalidade: Cadastro de membros', () => {
  it('Deve fazer o cadastro de campo obrigatórios', () => {
    cy.visit('http://192.168.18.60:8080/')
    cy.get('#signup-firstname').type('Caio')
    cy.get('#signup-lastname').type('Haendel')
    cy.get('#signup-email').type('Caiohaendel2@gmail.com')
    cy.get('#signup-phone').type('8599596255')
    cy.get('#signup-password').type('Teste&2020')
    cy.get('#signup-button').click()
    cy.get('#signup-response').should('contain' , 'Cadastro realizado com sucesso!')
  })
})