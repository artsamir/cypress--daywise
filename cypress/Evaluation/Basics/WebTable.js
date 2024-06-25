///<reference types="@cypress/xpath" />

describe('WebTable test suite', () => {
    it.skip('test table data', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.xpath('//table[@name="courses"]/tbody/tr[6]/td[2]').should('include.text','Learn JMETER from Scratch - (Performance + Load) Testing Tool')

        cy.xpath('//table[@name="courses"]/tbody/tr[9]/td').each(($table)=>{
            if($table.text().includes('Python')){
                cy.wrap($table).next().then((price)=>{
                    cy.log(price.text())
                })
            }
        })
    });

    it('table data test2', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.xpath("//div[@class='tableFixHead']/table/tbody/tr[4]/td[2]").should('include.text','Receptionist')

        cy.xpath("//div[@class='tableFixHead']/table/tbody/tr[4]/td").each(($table2)=>{
            if($table2.text().includes('Receptionist')){
                cy.wrap($table2).next().then((city)=>{
                    cy.log(city.text())
                })
            }
        })
    });
});