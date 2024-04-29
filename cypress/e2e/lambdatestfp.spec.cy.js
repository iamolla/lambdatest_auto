describe('example to-do app', () => {

    before('', () => {
        cy.visit('https://ecommerce-playground.lambdatest.io/index.php?route=common/home')
    }) 
    
    it('Verify the user is able to reset password', () => {
        cy.get('#widget-navbar-217834 > .navbar-nav > :nth-child(6) > .nav-link > .info > .title').click()
        cy.contains('Forgotten Password').click()
        cy.get('#input-email').should('exist').should('be.visible').type('holamicom@gmail.com')
        cy.get('.float-right > .btn').click()
        cy.get('#account-login > .alert').contains("An email with a confirmation link has been sent your email address.")
    })  
})    