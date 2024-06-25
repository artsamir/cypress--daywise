describe('RS Test suite', () => {
    it.skip('Alert control test', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        cy.get('#alertbtn').click()

        // verify alert message use here cy.on()
        cy.on("window:alert",(message)=>{
            // Asserting the alert message -- 'expect' is the function for assertion
            expect(message).to.eq('Hello , share this practice page and share your knowledge')
            return true;
        })
    });

    it('confirm alert test', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        cy.get('#confirmbtn').click()
        // verify alert message use here cy.on()
        cy.on("window:confirm",(message)=>{
            // Asserting the alert message -- 'expect' is the function for assertion
            expect(message).to.eq('Hello , Are you sure you want to confirm?')
            return true;
            // return false;
        })
    });
});