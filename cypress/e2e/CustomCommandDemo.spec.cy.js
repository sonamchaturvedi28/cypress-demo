/// <reference types="cypress" />

describe('Custom Command Test', () => {

    beforeEach(function() {
        // executes prior each test within it block
        cy.visit('https://demo.guru99.com/test/newtours/login.php')
     })

    it('Verify Custom Login successful', () => {
       cy.login('selenium@qa','qa@12345')
    })
})
