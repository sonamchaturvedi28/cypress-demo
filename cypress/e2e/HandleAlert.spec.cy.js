/// <reference types="cypress" />

describe('Handle Alert', () => {
    it('Verify Alert Window', () => {
        cy.visit('https://nxtgenaiacademy.com/alertandpopup/')
        cy.get('button[name="alertbox"]').click()
        
        //After the above click, the alert window is already closed.
        //Below raises the alert window event and verify alert text
        cy.on('window:alert', (str)=>{
          expect(str).to.equal('I am an alert box!')
        })
       
      })
    
      it('Verify Alert Confirm Window', () => {           
        cy.visit('https://nxtgenaiacademy.com/alertandpopup/')
        cy.get('button[name="confirmalertbox"]').click()
        //After the above click, the confirm window is already closed.
        //Below raises an window confirm event and verify text of the window
        cy.on('window:confirm', (str)=>{
         expect(str).to.equal('Confirm pop up with OK and Cancel button')
       })
      })
})