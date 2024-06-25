
describe('Heroku Test suite', () => {
    it('login', () => {
        cy.visit('https://the-internet.herokuapp.com/login') 
        cy.get('#username').type('tomsmith');
        cy.get('#password').type('SuperSecretPassword!');
        cy.get('.radius').click();
    });

    it
});