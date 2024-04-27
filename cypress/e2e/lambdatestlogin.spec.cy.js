describe('example to-do app', () => {

    beforeEach('', () => {
        cy.visit('https://ecommerce-playground.lambdatest.io/index.php?route=common/home')
    })  
    
    it('Verify the user is able to login with valid credentials', () => {
        cy.get('#widget-navbar-217834 > .navbar-nav > :nth-child(6) > .nav-link > .info > .title').click()
        cy.get('#input-email').should('exist').should('be.visible').type('holamicom@gmail.com')
        cy.get('#input-password').should('exist').should('be.visible').type('@olabak0805')
        cy.get('[value="Login"]').click()
    })  

    it('Verify the user is unable to login with invalid credentials', () => {
        cy.get('#widget-navbar-217834 > .navbar-nav > :nth-child(6) > .nav-link > .info > .title').click()
        cy.get('#input-email').should('exist').should('be.visible').type('holamicom@gmail.co')
        cy.get('#input-password').should('exist').should('be.visible').type('@olabak')
        cy.get('[value="Login"]').click()
        cy.get('#account-login > .alert').contains("Warning: No match for E-Mail Address and/or Password.")
    }) 

    it('Verify the user is unable to login with empty fields', () => {
        cy.get('#widget-navbar-217834 > .navbar-nav > :nth-child(6) > .nav-link > .info > .title').click()
        cy.get('[value="Login"]').click()
        cy.get('#account-login > .alert').contains("Warning: No match for E-Mail Address and/or Password.")
    })   
})       