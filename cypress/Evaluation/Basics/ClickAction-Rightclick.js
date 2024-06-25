describe('Rightclick Action test suite', () => {
    it('click action test', () => {
        cy.visit('https://demo.guru99.com/test/simple_context_menu.html')
        cy.contains('Double-Click Me To See Alert').dblclick()
        cy.contains('right click me').rightclick()
    });
});