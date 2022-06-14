/* eslint-disable no-undef */
const baseURL = 'http://localhost:3000/'

describe('Verifica se tem acesso ao site', () => {
  beforeEach(() => {
    cy.visit(baseURL);
  });

  it('Verifica se a logo esta correta', () => {
    cy.get('[data-cy=logo]').should('to.have.length', 1);
  });

  it('Se não estiver logado deve conter um botão de login', () => {
    cy.get('[data-cy=btn-login]').should('to.have.length', 1);
  });

  it('Se não estiver logado os botões de planos devem estar desabilitados', () => {
    cy.get('[data-cy=btn-plan-disabled]').should('to.have.length', 2);
  });

  it('Ao clicar no menu pode acessar os Contatos', () => {
    cy.get('[data-cy=menu]').click();
    cy.get('[data-cy=menu-contact]').click();
  })

  it('Ao clicar no botão lateral é levado até a Home ', () => {
    cy.get('[data-cy=menu]').click();
    cy.get('[data-cy=menu-contact]').click();

    cy.get('[data-cy=btn-to-top]').click();
  })
});