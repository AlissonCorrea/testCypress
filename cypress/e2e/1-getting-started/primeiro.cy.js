/// <reference types="cypress"/>
describe('Login', () => {
    it('should log in successfully', () => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
        cy.get('#buttonSimple').should('be.visible').should('have.value' , 'Clique Me!')
    })
    it('Preencher texto', () => {
    cy.visit('https://wcaquino.me/cypress/componentes.html')
    cy.get('#formNome').should('be.visible').type('Alisson');
    cy.get('#formNome').should('have.value','Alisson');
    cy.get('[data-cy="dataSobrenome"]').should('be.visible').type('Correa');
    cy.get('[data-cy="dataSobrenome"]').should('have.value','Correa');
    cy.get('#formSexoMasc').should('be.visible').check();
    cy.get('#formComidaCarne').should('be.visible').check();
    cy.get('#formEsportes').select('natacao');
    cy.get('#elementosForm\\:sugestoes').should('be.visible').type('Teste de Escrever');
    cy.get(':nth-child(2) > :nth-child(1) > :nth-child(4) > input').check();
    cy.get(':nth-child(2) > :nth-child(4) > input').check();
    cy.get(':nth-child(3) > :nth-child(5) > table > tbody > tr > td > input').check();
    cy.get(':nth-child(4) > :nth-child(6) > input').type('populando campo');
    cy.get(':nth-child(5) > :nth-child(4) > input').check();
    cy.get('#formCadastrar').click();
    cy.get('#descNome').should('contain','Alisson');
    cy.get('#descSobrenome').should('contain','Correa');
    cy.get('#descSexo').should('contain','Masculino');
    cy.get('#descEsportes').should('contain','Natacao')
    cy.get('#descEscolaridade').should('contain','1grauincomp');
    cy.get('#descSugestoes').should('contain','Teste de Escrever');
    })

    it('Login', () => {
        cy.visit('https://www.atacarejonet.com.br/login')
        cy.get('#login_cliente').should('be.visible').type('alisson@teste.com.br')
        cy.get('.botao-finalizar-pedido').click()
        cy.get('#senha_cliente').should('be.visible').type('alisson123')
        cy.get('.botao-finalizar-pedido').click()
        })
    it('Cadastro', () => {
        cy.visit('https://www.atacarejonet.com.br/login')
        cy.get('#login_cliente').should('be.visible').type('alisson@teste.com.br')
        cy.get('.botao-finalizar-pedido').click() 
        cy.get('#nome_cliente').should('be.visible').type('Alisson Correa')
        cy.get('#cpf_cliente').should('be.visible').type('87158716066')
        cy.get('#data_n_cliente').should('be.visible').type('19/05/1996')
        cy.get('#sexo_cliente').select('Masculino')
        cy.get('#rg_cliente').should('be.visible').type('335190248')
        cy.get('#senha_cliente').should('be.visible').type('alisson123')
        cy.get('#cep_cliente').should('be.visible').type('88750000')
        cy.get('#confirmar-cep').click()
    })
 })