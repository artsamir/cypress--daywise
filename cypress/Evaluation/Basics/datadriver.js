/// <reference types="cypress" />
describe('Data driven', () => {
    
    before(() => {
        cy.fixture('example').then((data)=>{

            globalThis.data = data; /* this will fatch all data which coming from example.json and 
            stored in a variable */

            
        })
    });

    it('test', () => {
        
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        cy.get('[name="username"]').type(data.username)
        cy.get('[name="password"]').type(data.password)
        cy.get('.orangehrm-login-button').click()
    });
});