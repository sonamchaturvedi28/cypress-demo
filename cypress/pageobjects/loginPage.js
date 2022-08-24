class loginPage{

    elements = {  
        usernameInput : () => cy.get('input[name="userName"]'),       
        passwordInput : () => cy.get('input[name="password"]'),     
        loginBtn : () => cy.get('input[name="submit"]'),
        successTxt : () => cy.get('h3'),
        errorTxt : () => cy.get('span')
    }

    enterUsername(username)
    {
        this.elements.usernameInput().clear();
        this.elements.usernameInput().type(username);
    }

    enterPassword(password)
    {
        this.elements.passwordInput().clear();
        this.elements.passwordInput().type(password);
    }
    
    clickSubmit() {
        this.elements.loginBtn().click();
    }

}

//module.exports = new loginPage();
export default loginPage

/* Using getter for POM
class loginPage{

    get username()
    {
        return cy.get('input[name="userName"]');
    }
 
    get password()
    {
        return cy.get('input[name="password"]');
    }
 
    get submit()
    {
        return cy.get('input[name="submit"]');
    }
 
   get successText()
    {
        return cy.get('h3');
    }
 
    get errorText()
    {
        return cy.get('span');
    }
 
 }
 
 export default loginPage;
 */ 
