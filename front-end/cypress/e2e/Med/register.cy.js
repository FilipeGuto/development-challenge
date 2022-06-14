/* eslint-disable no-undef */
const baseURL = 'http://localhost:3000/'

describe('Verifica se tem acesso ao Registro', () => {
  it('Verifica se ao clicar em "Clique aqui" é levado a pagina de registro', () => {
    cy.visit(`${baseURL}login`);
    cy.get('[data-cy=btn-register]').click();
  });

  it('Se clicar em ENTRAR sem passar informações deverá retornar uma mensagem de erro', () => {
    cy.get('[data-cy=btn-handle-register]').click();
    cy.contains("Preencha todos os campos");
  });

  it('Se passar um email existente retorna um erro', () => {
    cy.get('[data-cy=input-name-register]').type("Fulano da Silva");
    cy.get('[data-cy=input-email-register]').type("email@email.com");
    cy.get('[data-cy=input-password-register]').type("123");
    cy.get('[data-cy=input-birthDate-register]').click();
    cy.get('[data-cy=input-birthDate-register]').type("1990-01-01");
    cy.get('[data-cy=input-country-register]').type("Brasil");
    cy.get('[data-cy=input-state-register]').click();
    cy.get('[data-cy=input-state]').click();
    cy.get('[data-cy=input-city-register]').type("Ponta Grossa");

    cy.get('[data-cy=btn-handle-register]').click();
    cy.contains("Email já cadastrado");
  });

  it('Ao passar dados válidos é possivel registrar um usuario', () => {
    cy.get('[data-cy=input-name-register]').clear();
    cy.get('[data-cy=input-email-register]').clear();
    cy.get('[data-cy=input-password-register]').clear();
    cy.get('[data-cy=input-birthDate-register]').clear();
    cy.get('[data-cy=input-country-register]').clear();
    cy.get('[data-cy=input-city-register]').clear();

    cy.get('[data-cy=input-name-register]').type("Fulano da Silva");
    cy.get('[data-cy=input-email-register]').type("fulano@email.com");
    cy.get('[data-cy=input-password-register]').type("123");
    cy.get('[data-cy=input-birthDate-register]').click();
    cy.get('[data-cy=input-birthDate-register]').type("1990-01-01");
    cy.get('[data-cy=input-country-register]').type("Brasil");
    cy.get('[data-cy=input-state-register]').click();
    cy.get('[data-cy=input-state]').click();
    cy.get('[data-cy=input-city-register]').type("Ponta Grossa");

    cy.get('[data-cy=btn-handle-register]').click();
  });
});
