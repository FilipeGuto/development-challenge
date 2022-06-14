/* eslint-disable no-undef */
const baseURL = 'http://localhost:3000/';

describe('Com usuario logado tem acesso ao perfil', () => {
  beforeEach(() => {
    cy.visit(`${baseURL}login`);
    cy.get('[data-cy=input-email]').type("fulano@email.com");
    cy.get('[data-cy=input-password]').type("123");
    cy.get('[data-cy=btn-login]').click();
    cy.get('[data-cy=user-logged]').click();
  });

  it('Ao clicar em PERFIL deverá conter informações corretas do usuario', () => {
    cy.contains("Fulano da Silva");
    cy.contains("fulano@email.com");
  });

  it('Ao clicar em ATUALIZAR é levado a outra pagina', () => {
    cy.get('[data-cy=btn-update-user]').click();
  });

  it('Valida se é posivel alterar NOME do usuario', () => {
    cy.visit(`${baseURL}update`);
    cy.get('[data-cy=input-update-name]').click();
    cy.get('[data-cy=input-update-name]').clear();
    cy.get('[data-cy=input-update-name]').type("Fulano Silva");

    cy.get('[data-cy=btn-confirm-update]').click();

    cy.contains("Fulano Silva");
  });

  it('Ao clicar em EXCLUIR recebe uma modal de confrimação', () => {
    cy.get('[data-cy=btn-deleted-user]').click();
    cy.get('[data-cy=modal-delete]');
  });

  it('Valida se é possivel excluir o usuario', () => {
    cy.get('[data-cy=btn-deleted-user]').click();
    cy.get('[data-cy=modal-delete]');
    cy.get('[data-cy=btn-confirm]').click();
    cy.get('[data-cy=btn-confirm-delete]').click();

    cy.get('[data-cy=btn-login]').should('to.have.length', 1);
  });
});