/// <reference types="cypress" />

describe('My First Test', () => {
   it('Verify Title of the Page', () => {
    cy.visit('https://example.cypress.io/commands/querying')
    cy.title().should('eq','Cypress.io: Kitchen Sink')
    cy.xpath('//*[@id="query-btn"]').should('contain','Button')
   
  })

  it('Verify GUI of the Page', () => {
    cy.visit('https://example.cypress.io/commands/actions')
    cy.get('#email1').should('be.visible').type('test@email.com')
    cy.get('#email1').should('be.visible').focus();
    cy.get('.action-checkboxes [type="checkbox"]').should('be.visible').not('[disabled]').check()
    cy.get('.action-checkboxes [type="checkbox"]').should('be.visible').not('[disabled]').check('checkbox1')
    cy.get('.action-radios [type="radio"]').not('[disabled]').check(['radio1','radio2']).should('be.checked')
    cy.get('.action-check [type="checkbox"]').uncheck('checkbox1').should('not.be.checked')

    cy.get('.action-select').select('apples')
    // confirm the apples were selected
    cy.get('.action-select').should('have.value', 'fr-apples')
      // when getting multiple values, invoke "val" method first
    cy.get('.action-select-multiple')
      .select(['apples', 'oranges', 'bananas'])
      .invoke('val')
      .should('deep.equal', ['fr-apples', 'fr-oranges', 'fr-bananas'])
  })

})
