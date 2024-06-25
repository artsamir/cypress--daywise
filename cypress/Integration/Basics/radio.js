describe('RS test', () => {
    it('radio test', () => {
        
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        cy.get("[value='radio1']").check().should('be.checked').and('have.attr','class','radioButton')

        cy.get("[type='radio'").check(['radio2', 'radio3'])
    });
});