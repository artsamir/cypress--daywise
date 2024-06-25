///<reference types="@cypress/xpath" />

describe('DropDown test suite', () => {
    it('dropdown test1', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        cy.get('#dropdown-class-example').select('option3').should('have.value', 'option3')
        cy.get('#dropdown-class-example').select('option2').should('have.value', 'option2')
        cy.get('#dropdown-class-example').select('option1').should('have.value', 'option1')
        cy.get('#dropdown-class-example').select('').should('have.value', '')
    });

    it('Dropdown test2 - select by text', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#dropdown-class-example').select('Option3').should('have.value','option3')
        cy.get('#dropdown-class-example').select('Option2').should('have.value','option2')
        cy.get('#dropdown-class-example').select('Option1').should('have.value','option1')
        cy.get('#dropdown-class-example').select('').should('have.value','')
    });

    it('Dropdown test3 - select by Index', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#dropdown-class-example').select(2)
        cy.wait(3000)
        cy.get('#dropdown-class-example').select(1)
        cy.wait(3000)
        cy.get('#dropdown-class-example').select(3)
        cy.wait(3000)
        cy.get('#dropdown-class-example').select(0)
    });

    it.only('Dynamic dropdown test', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        cy.get('#autocomplete').type('an')
        // cy.get('#ui-id-2').click()

        /*
        cy.get('.ui-menu-item').each(($ele)=>{

            // $ele.text()=='Saint Lucia'
            if ($ele.text().includes('Saint Lucia')) {
                cy.wrap($ele).click()                
            }
        })

        */
        
        cy.get('.ui-menu-item').contains('Antarctica').click()



    });
});