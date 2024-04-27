describe('example to-do app', () => {

    beforeEach('', () => {
        cy.visit('https://ecommerce-playground.lambdatest.io/index.php?route=common/home')
    })   

    it('Verify the user is able to register with valid credentials', () => {
        cy.get('#widget-navbar-217834 > .navbar-nav > :nth-child(6) > .nav-link > .info > .title').click()
        cy.get('.card-body > .btn').click() 
        cy.get('#input-firstname').should('exist').should('be.visible').type('charles')
        cy.get('#input-lastname').should('exist').should('be.visible').type('bank')
        cy.get('#input-email').should('exist').should('be.visible').type('holamicom@gmail.com')
        cy.get('#input-telephone').should('exist').should('be.visible').type(+2348056856663)
        cy.get('#input-password').should('exist').should('be.visible').type('@olabak0805')
        cy.get('#input-confirm').should('exist').should('be.visible').type('@olabak0805')
        cy.get('.float-right > .custom-control').click()
        cy.get('.float-right > .btn').click()
        //cy.get('#account-register > .alert').contains("Warning: E-Mail Address is already registered!")
    })

    it('Verify the user is unable to register with invalid credentials', () => {
        cy.get('#widget-navbar-217834 > .navbar-nav > :nth-child(6) > .nav-link > .info > .title').click()
        cy.get('.card-body > .btn').click() 
        cy.get('#input-firstname').should('exist').should('be.visible').type('charle')
        cy.get('#input-lastname').should('exist').should('be.visible').type('ank')
        cy.get('#input-email').should('exist').should('be.visible').type('holamicom@gmail.')
        cy.get('#input-telephone').should('exist').should('be.visible').type(+8056856663)
        cy.get('#input-password').should('exist').should('be.visible').type('@olabak')
        cy.get('#input-confirm').should('exist').should('be.visible').type('@olabak')
        cy.get('.float-right > .custom-control').click()
        cy.get('.float-right > .btn').click()
        cy.get('#content >  h1').contains("Register Account")
        cy.get('#content > p').contains("If you already have an account with us, please login at the login page.")
    })   

    it('Verify the user is unable to register with empty fields', () => {
        cy.get('#widget-navbar-217834 > .navbar-nav > :nth-child(6) > .nav-link > .info > .title').click()
        cy.get('.card-body > .btn').click() 
        cy.get('.float-right > .custom-control').click()
        cy.get('.float-right > .btn').click()
        cy.get(':nth-child(3) > .col-sm-10 > .text-danger').contains("First Name must be between 1 and 32 characters!")
        cy.get(':nth-child(4) > .col-sm-10 > .text-danger').contains("Last Name must be between 1 and 32 characters!")
        cy.get(':nth-child(5) > .col-sm-10 > .text-danger').contains("E-Mail Address does not appear to be valid!")
        cy.get(':nth-child(6) > .col-sm-10 > .text-danger').contains("Telephone must be between 3 and 32 characters!")
    })
})