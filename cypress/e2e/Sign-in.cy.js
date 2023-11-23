URL = "https://staging.app.vscrawl.com:4233/"

describe('Sign in test suite', () => {
  it('Sign in success', () => {

    cy.visit(URL)

    //enter email
    cy.get('#email',{ timeout : 15000 }).type("notary@dictalabs.com")

    //enter password
    cy.get('#password',{ timeout : 15000 }).type("password123")

    cy.get('.mat-flat-button',{ timeout : 15000 }).click()

    cy.get('.pl-5 > .flex > .mat-focus-indicator > .mat-button-wrapper > .mat-icon',{ timeout : 15000 })

  })

  it('Sign in wrong email', () => {
    
    cy.visit(URL)

    //enter email
    cy.get('#email',{ timeout : 15000 }).type("no.tary@dictalabs.com")

    //enter password
    cy.get('#password',{ timeout : 15000 }).type("password123")

    cy.get('.mat-flat-button',{ timeout : 15000 }).click()

    cy.get('.fuse-alert-message').should('contains.text', 'Wrong Email or Password!')

  })
  it('Sign in wrong password', () => {
    
    cy.visit(URL)

    //enter email
    cy.get('#email',{ timeout : 15000 }).type("notary@dictalabs.com")

    //enter password
    cy.get('#password',{ timeout : 15000 }).type("Password12")

    cy.get('.mat-flat-button',{ timeout : 15000 }).click()

    cy.get('.fuse-alert-message').should('contains.text', 'Wrong Email or Password!')

  })
})
