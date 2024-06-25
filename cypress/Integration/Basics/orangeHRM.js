

describe('OrangeHRM Test Suite', () => {

   

    
    it.skip('Login Functionality', () => {
        //cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
       
        cy.wait(3000);
        // cy.get('.oxd-dropdown-menu').find(':nth-child(4) > .oxd-userdropdown-link').click();

        
        cy.get('.oxd-main-menu').find('.oxd-main-menu-item-wrapper').each(($e)=>{

            if ($e.text()=='Recruitment') {
                cy.wrap($e).click()
            }
        
        });
        

    });


    it.skip('requitment functionality', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('input[name=username]').type('Admin')
        cy.get('input[name=password]').type('admin123')
        cy.get('button[type=submit]').click();

        cy.wait(2000)
        cy.get('.oxd-main-menu').find('.oxd-main-menu-item-wrapper').each(($e)=>{

            if ($e.text()=='Recruitment') {
                cy.wrap($e).click()
            }
        
        });
        
    });
    

    it.skip('Logout Functionality', () => {
        

        cy.wait(2000)
        cy.get('.oxd-userdropdown-tab').click();
        cy.get('.oxd-dropdown-menu').find('.oxd-userdropdown-link').each(($ele)=>{

            // if($ele.text().includes('Logout'))
            // ($ele.text()=='Logout')
            if ($ele.text().includes('Logout')) {
                cy.wrap($ele).click(); // cy.qrap we are using because directly we can't click on $ele
                // wrapping the element with cypress object                                
            }
        }); // end of each function
        
    });

    it('Login test', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('input[name=username]').type('Admin')

        cy.get('input[name=password]').then(($password_ele)=>{
            //Assertion using expect()
            expect($password_ele).to.have.attr('placeholder','Password')
            cy.wrap($password_ele).type('admin123')
        })

        cy.get('button[type=submit]').then(($login_ele)=>{
            //Assertion using expect()
            expect($login_ele).to.have.text(' Login ')
            cy.wrap($login_ele).click()
        })
    });


    
});