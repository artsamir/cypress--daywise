describe('Scrolling test suite', () => {
    it('testcase1', () => {
        cy.visit('https://www.google.com/')

        cy.get('[title="Search"]').type('Masai{enter}') // {enter} will press enter on keyboard

        
        cy.scrollTo(0, 1000); //scrollbottom to particular value
        cy.wait(3000)
        /*
        cy.scrollTo(0, 1000); //scrollup to particular value
        cy.wait(2000)
        */
        cy.contains('Maasai people').scrollIntoView().click();

    });
});
