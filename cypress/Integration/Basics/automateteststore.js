describe('Contact us test suite', () => {
    it('contact us test', () => {
        cy.visit('https://automationteststore.com/')
        cy.get('.info_links_footer > :nth-child(5) > a').click()
        // Asserting the url - it contain the text(rt=content/contact)
        cy.url().should('include','rt=content/contact')

        cy.get('#ContactUsFrm_first_name').type('Samir').then(($fstname)=>{
            expect($fstname).to.have.value('Samir')
        })
        


        cy.get('#ContactUsFrm_email').type('Samir@email.com').should('have.value','Samir@email.com')
        cy.get('#ContactUsFrm_enquiry').type('Hi... I am now automate this contact us page to check it is working or not')

        cy.get('.lock-on-click').click()
        cy.xpath("//section[@class='mb40']/p[2]").then(($enqtxt)=>{
            expect($enqtxt).to.have.text('Your enquiry has been successfully sent to the store owner!')
        })

        cy.url().should('include','contact/success')

        // Navigating back
        cy.go('back')
        cy.go('back')

        // Navigating Forward
        cy.go('forward')

        //  Reloading the webpage
        cy.reload()

    });
});