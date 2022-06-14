/* eslint-disable no-undef */
const baseURL = 'http://localhost:3000/'

describe('Verifica se tem acesso a Login', () => {
  it('Verifica ao clicar em "Entrar" é levado a pagina de login', () => {
    cy.visit(baseURL);
    cy.get('[data-cy=btn-login]').click();
  });

  it('Verifica se contém ao clicar em "Entrar" é levado a pagina de login', () => {
    cy.get('[data-cy=input-login]').should('to.have.length', 1);
  });

  it('Se clicar em entrar sem passar informações deverá retornar uma mensagem de erro', () => {
    cy.get('[data-cy=btn-login]').click();
    cy.contains("Preencha todos os campos");
  });

  it('Se passar um email inválidos retorna um erro', () => {
    cy.get('[data-cy=input-email]').type("email2email.com");
    cy.get('[data-cy=input-password]').type("123456");
    cy.get('[data-cy=btn-login]').click();
    cy.contains("Email ou senha incorretos");
  });

  it('Se passar uma senha inaválida retorna um erro', () => {
    cy.get('[data-cy=input-email]').clear();
    cy.get('[data-cy=input-password]').clear();
    cy.get('[data-cy=input-email]').type("email@email.com");
    cy.get('[data-cy=input-password]').type("123456789");
    cy.get('[data-cy=btn-login]').click();
    cy.contains("Email ou senha incorretos");
  });

  it('Verifica se existe um botão para criar uma nova conta', () => {
    cy.get('[data-cy=btn-register]').should('to.have.length', 1);
  });
});
