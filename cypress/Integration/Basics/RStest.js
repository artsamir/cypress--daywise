///<reference types="@cypress/xpath" />

describe('Rahul Shetty Test Suite', () => {
    
    // this will Execute before the first test only
    before(() => {
        cy.log('Log message used in before hook')
    });

    beforeEach(() => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    });

    it('Validate URL Test', () => {
        // cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        //To Assert URL

        cy.url().should('include', 'AutomationPractice/')

        // Asserting my title
        cy.title().should('eq', 'Practice Page')


        cy.get('input#autocomplete').type('Session')
        // Asserting that a particular webelement is visible
        // asserting whether it is having an attribute called placeholder and also asserting the placeholder value.
        cy.get('input#autocomplete').should('be.visible').and('have.attr', 'id', 'autocomplete' )
        
        // Asserting Home button
        // cy.get('a > .btn')
        
        cy.get('a > .btn').should('be.visible').and('have.attr', 'class', 'btn btn-primary' ).and('contain','Home')
        
        // Asserting Practice button using contain
        // cy.get('.jumbotron > div > :nth-child(2)')
        
        cy.get('.jumbotron > div > :nth-child(2)').should('be.visible').and('have.attr', 'class', 'btn btn-primary' ).and('contain','Practice')
        
        // Asserting Login button using text
                
        cy.xpath("//button[@class='btn btn-primary'][2]").should('be.visible').and('have.attr', 'class', 'btn btn-primary' ).and('have.text','Login')
        
        // Asserting Signup button using text
                
        cy.xpath("//button[@class='btn btn-primary'][3]").should('have.text','Signup').and('have.attr', 'class', 'btn btn-primary' )
        
    });

    it('assert text field value test', () => {
        // cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        // Assertions for typed values in Text field
        cy.get('input#autocomplete').type('India').should('have.value','India')
    });

    it('checkbox test', () => {
        // cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        // Assertions for checkbox and check the checkbox
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1');
        
        // Assertions for Uncheckbox and uncheck the checkbox
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked').and('have.value','option1');

        // check all the checkbox
        cy.get("input[type='checkbox']").check();
    });

    it('Multiple checks test', () => {
        // cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get("input[type='checkbox']").check(['option3', 'option1']);

    });

    afterEach(() => {
        cy.log('Log message used after each')
    });

    after(() => {
        cy.log('Log for After')
    });
    
});