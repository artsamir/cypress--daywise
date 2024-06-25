/// <reference types="@cypress/xpath" />
describe('upload test suite', () => {
    it('testcase 1', () => {
        cy.visit('https://the-internet.herokuapp.com/upload')

        cy.get('#file-upload').selectFile('C:/Users/samir/Downloads/upload test/Screenshot 2024-06-22 142411.png')

        cy.get('#file-submit').click()
        cy.contains('File Uploaded!').should('be.visible')
    });
});