describe('orangeHRM dropdoen test suite', () => {
    it('dynamic dropdown test', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('input[name="username"]').type('Admin')
        cy.get("input[name='password']").type('admin123')
        cy.get("button[type='submit']").click()
        cy.contains('Admin').click()
        cy.get('input[placeholder="Type for hints..."]').type('ra')
        cy.wait(2000)

        cy.get('.oxd-autocomplete-option').contains('Ravi M B').click()
        /*
        cy.get('.oxd-autocomplete-dropdown').find('.oxd-autocomplete-option').each(($ele)=>{
            if($ele.text=='Ravi M B'){
                cy.wrap($ele).click()
            }
        })
            */
    });
    
});