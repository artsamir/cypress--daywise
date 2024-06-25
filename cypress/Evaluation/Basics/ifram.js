/// <reference types="@cypress/xpath" />

describe('Iframe suite', () => {
    it('iframe test1', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        // frameLoaded is used to handle the iframe and it load the iframe
        cy.frameLoaded('#courses-iframe')
        cy.wait(2000)
        // work with iframe, button click or anyother use cy.iframe()
        cy.iframe().contains('Blog').click()
    });
});