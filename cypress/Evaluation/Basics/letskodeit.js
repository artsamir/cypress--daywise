describe('letskodeit test suite', () => {
    it('test case 1', () => {
        cy.visit('https://www.letskodeit.com/practice')
        cy.get('#benzradio').click()
        cy.get('input[type="checkbox"]').check(['bmw','honda'])
        cy.get('#carselect').select(1)
    });
});