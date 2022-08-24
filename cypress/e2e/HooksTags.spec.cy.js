/// <reference types="cypress" />

// Cypress Hook example 
describe('Test Hook', function() {
    before(function() {
       // executes once prior all tests in it block
       cy.log("Before hook")
    })
    after(function() {
       // executes once post all tests in it block
       cy.log("After hook")
    })
    beforeEach(function() {
       // executes prior each test within it block
       cy.log("BeforeEach hook")
    })
    afterEach(function() {
       // executes post each test within it block
       cy.log("AfterEac hook")
    })
    it('First Test', function() {
       cy.log("First Test")
    })
    it('Second Test', function() {
       cy.log("Second Test")
    })
  })
  
/* //only tag example 
  describe('Test .only tag', function() {
     //it block with .only tag
     it.only('1st Test', function() {
        cy.log("1st Test")
     })
     it.only('2nd Test', function() {
        cy.log("2nd Test")
     })
     it('3rd Test', function() {
        cy.log("3rd Test")
     })
  })
  
  // .skip tag example 
  describe('Test .skip tag', function() {
     it('1st Test', function() {
        cy.log("1st Test")
     })
     it('2nd Test', function() {
        cy.log("2nd Test")
     })
     //it block with .skip tag
     it.skip('3rd Test', function() {
        cy.log("3rd Test")
     })
  }) */
  