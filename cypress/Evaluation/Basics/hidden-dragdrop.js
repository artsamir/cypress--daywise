///<reference types="@cypress/xpath" />

describe('Hidden element suite', () => {
    it.skip('testcase1', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        cy.get('#displayed-text').should('be.visible')
        cy.get('#hide-textbox').click()
        cy.get('#displayed-text').should('not.be.visible')
        cy.wait(2000);
        cy.get('#show-textbox').click()
        cy.get('#displayed-text').should('be.visible').type('samir')
    });

    it('hover1', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        cy.get('#mousehover').invoke('show')
        cy.contains('Top').click({force:true}); // workaround if click is not working properly

        cy.url().should('include','top')

    });

    it('hover2', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        cy.get('#mousehover').trigger('mouseover')
        cy.contains('Reload').click({force:true})

        cy.url().should('not.include','top')
    });

    it.only('drag and drop test', () => {
        cy.visit('https://v1.training-support.net/selenium/drag-drop')
    
        // trigger is used to do mouse actions
        // {which: 1} is used to specify left button mouse
        // {which: 2} is used to specify center button
        cy.get('#draggable').trigger('mousedown',{which: 1})
        cy.get('#droppable').trigger('mousemove',{force:true}).trigger('mouseup',{force:true})
        // Move to next dropzone
        cy.get('#draggable').trigger('mousedown',{which: 1})
        cy.get('#dropzone2').trigger('mousemove',{force:true}).trigger('mouseup',{force:true})
        
    });

});