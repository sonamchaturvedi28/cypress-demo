/// <reference types="cypress" />

describe('Handle Web Table', () => {
    it('Verify Web Table', () => {          
        cy.visit('https://qavbox.github.io/demo/webtable/')
        cy.get('#table01').contains('td','GUI').should('be.visible')
        cy.get('#table01').contains('td','Selenium').should('be.visible')
      
        cy.get('#table01 > tbody > tr:nth-child(1) > td:nth-child(3)').contains('QTP').should('be.visible')
    })
})