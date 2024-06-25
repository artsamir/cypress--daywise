/// <reference types="@cypress/xpath" />

describe('datepicker suite', () => {
    it('test1', () => {
        cy.visit('https://jqueryui.com/datepicker/')

        cy.iframe('.demo-frame').find('input#datepicker').type('02/08/2024{enter}')
        
    });
});