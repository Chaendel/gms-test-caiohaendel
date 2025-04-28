/// <reference types="cypress"/>

describe('US-012-Funcionalidade: Cadastro de membros', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  afterEach(() => {
    cy.screenshot()
  })

  it('Deve fazer o cadastro de campo obrigatórios', () => {
    var email = `caio${Date.now()}@teste.com`
    cy.preencherCadastro('Caio', 'Haendel', email, '85996457816', 'Teste@12345')
    cy.get('#signup-response').should('contain', 'Cadastro realizado com sucesso!')
  })

  it('Deve validar mensagem de erro com campo nome inválido', () => {
    cy.preencherCadastro('Caio26', 'Haendel', 'caio@teste.com', '85996457816', 'Teste@12345')
    cy.get('#signup-response').should('contain', 'Nome deve conter apenas caracteres alfabéticos, acentuados e espaços')
  })
})