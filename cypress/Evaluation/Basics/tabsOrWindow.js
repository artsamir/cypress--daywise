/// <reference types="@cypress/xpath" />
describe('tab control suite', () => {
    it('tab control test', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        // below code will remove the target attribute and click on it
        cy.get('#opentab').invoke('removeAttr', 'target').click()

        // After we remove target and click on the link
        // Origin() is used to work with the new tab

        cy.origin('https://www.qaclickacademy.com',()=>{
            cy.visit('/')

            cy.contains('Access all our Courses').click();

            cy.log(cy.title()) //this will print the title of page

        })
    });

    it('windows control test2', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        cy.get('#openwindow').invoke('removeAttr', 'onclick').click()

        cy.origin('https://www.qaclickacademy.com',()=>{
            cy.visit('/')

            cy.contains('Access all our Courses').click();
            cy.wait(2000)
            cy.log(cy.title())
        })


    });

    it.only('tab control test3', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#opentab').then(($link)=>{
    
            // this $Link.attr('href') will fatch the href attribute
            const href1 = $link.attr('href') 
            cy.visit(href1) 
           
            // Origin() is used to work with the new tab and new url/link
            cy.origin(href1,()=>{
                cy.visit('/')
    
                cy.contains('Access all our Courses').click();
                cy.wait(2000)
                cy.log(cy.title())
            })
        })
    });
});