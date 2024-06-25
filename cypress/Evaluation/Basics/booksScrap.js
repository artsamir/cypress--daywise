/// <reference types="Cypress" />

describe('BS test suite', () => {
    it('Test case 1', () => {
        cy.visit('https://books.toscrape.com/');
        cy.title().should('equal','All products | Books to Scrape - Sandbox');
    });
    it('Test case 2', () => {
        cy.visit('https://books.toscrape.com/');
        cy.get(':nth-child(12) > a').click();
        cy.get('.page-header > h1').should('have.text','Nonfiction');
        
    });
    it('Test case 3', () => {
        cy.visit('https://books.toscrape.com/')
        cy.xpath("//*[contains(text(),'Mystery')]").click()
        cy.get('.page-header > h1').should('have.text','Mystery')
        cy.get(".col-xs-6:nth-child(6) > article > div.product_price > form > button").click()
    });
});