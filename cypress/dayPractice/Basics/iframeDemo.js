/// <reference types="@cypress/xpath" />
describe('Iframe suite', () => {
    it('iframe test1', () => {
        cy.visit('https://v1.training-support.net/selenium/iframes')

        cy.frameLoaded('iframe[src="/selenium/frame1"]')
        cy.wait(2000)
        cy.iframe().xpath("//button[@class='ui inverted red button']").click()
    });

    it.only('test2', () => {
        cy.visit('https://v1.training-support.net/selenium/iframes')

       cy.iframe('iframe[src="/selenium/frame1"]').find('button').first().click()
        
    });
});