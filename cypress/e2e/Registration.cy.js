URL = "https://staging.app.vscrawl.com:4233/"

describe('Registration Validations check', () => {
    it('Empty fields', () => {

        cy.visit(URL+'/sign-up')

        cy.get('.fuse-mat-button-large > .mat-button-wrapper').click()

        cy.get('#mat-error-0').should('contains.text','Full name is required')

        cy.get('#mat-error-1').should('contains.text','User name is required')

        cy.get('#mat-error-2').should('contain.text','Email address is required')

        cy.get('#mat-error-3').should('contain.text','Password is required')
    })
    it('Full name (less than limit)', () => {

        cy.visit(URL+'/sign-up')

        cy.get('#fullname').type('an')

        cy.get('.fuse-mat-button-large > .mat-button-wrapper').click()

        cy.get('#mat-error-4').should('contain.text','Full name should be at least 3 characters long')
    })
    it('Full name (non-alphabetic)',() => {

        cy.visit(URL+'/sign-up')

        cy.get('#fullname').type('an 5')

        cy.get('.fuse-mat-button-large > .mat-button-wrapper').click()

        cy.get('#mat-error-5').should('contain.text','Full name should only contain alphabetic characters')
    })
    it('Full name (more than limit)', () => {

        cy.visit(URL+'/sign-up')

        cy.get('#fullname').type('qwertyuiopasdfghjklzxcvbnm')

        cy.get('.fuse-mat-button-large > .mat-button-wrapper').click()

        cy.get('#mat-error-5').should('contain.text','Full name should not exceed 20 characters')
    })
    it('Username (less than limit)', () => {

        cy.visit(URL+'/sign-up')

        cy.get('#uname').type('qw')

        cy.get('.fuse-mat-button-large > .mat-button-wrapper').click()

        cy.get('#mat-error-4').should('contain.text','User name should be at least 3 characters long')
    })
    it('Username (contains space)', () => {

        cy.visit(URL+'/sign-up')

        cy.get('#uname').type('qw e')

        cy.get('.fuse-mat-button-large > .mat-button-wrapper').click()

        cy.get('#mat-error-5').should('contain.text','User name should only contain alphabetic characters')
    })
    it('Username (more than limit)', () => {

        cy.visit(URL+'/sign-up')

        cy.get('#uname').type('qwertyuiopasdfghjklzxcvbnm')

        cy.get('.fuse-mat-button-large > .mat-button-wrapper').click()

        cy.get('#mat-error-5').should('contain.text','User name should not exceed 20 characters')
    })
    it('Email (invalid)', () => {

        cy.visit(URL+'/sign-up')

        cy.get('#emailaddress').type('qwerty')

        cy.get('.fuse-mat-button-large > .mat-button-wrapper').click()

        cy.get('#mat-error-4').should('contain.text','Please enter a valid email address')
    })
    it('Password (less than limit)', () => {

        cy.visit(URL+'/sign-up')

        cy.get('#password').type('P@ss9')

        cy.get('.fuse-mat-button-large > .mat-button-wrapper').click()

        cy.get('#mat-error-4').should('contain.text','Password should be at least 8 characters long')
    })
    it('Password (weak)', () => {

        cy.visit(URL+'/sign-up')

        cy.get('#password').type('123456789')

        cy.get('.fuse-mat-button-large > .mat-button-wrapper').click()

        cy.get('#mat-error-5').should('contain.text','Password should contain at least one lowercase letter, one uppercase letter, one digit, and one special character')
    })
    it('Password (more than limit)', () => {

        cy.visit(URL+'/sign-up')

        cy.get('#password').type('qwertP@ssyasdfghjklzxcvbnm0zxcvbnm')

        cy.get('.fuse-mat-button-large > .mat-button-wrapper').click()

        cy.get('#mat-error-6').should('contain.text','Password should not exceed 20 characters')
    })

    it('Already registered account', () => {

        cy.visit(URL+'/sign-up')

        cy.get('#fullname').type('anas')

        cy.get('#uname').type('anas')

        cy.get('#emailaddress').type('ans.sohail@dictalabs.com')

        cy.get('#password').type('P@ssword123')

        cy.get('.mat-checkbox-inner-container').click()

        cy.get('.fuse-mat-button-large > .mat-button-wrapper').click()

        cy.get('.fuse-alert-container').should('contain.text','Email Address already exist. Please use another email!')
    })
})