URL = "https://dev.app.vscrawl.com/"

describe('Sign in test suite', () => {
  it('Sign in success', () => {

    cy.visit(URL)

    //enter email
    cy.get('#email',{ timeout : 15000 }).type("ans.sohail@dictalabs.com")

    //enter password
    cy.get('#password',{ timeout : 15000 }).type("Password123")

    cy.get('.fuse-mat-button-large',{ timeout : 15000 }).click()

    cy.get('[routerlink="/documents/new"] > .flex-auto',{ timeout : 15000 })

  })

  it('Sign in wrong email', () => {
    
    cy.visit(URL)

    //enter email
    cy.get('#email',{ timeout : 15000 }).type("an.sohail@dictalabs.com")

    //enter password
    cy.get('#password',{ timeout : 15000 }).type("Password123")

    cy.get('.fuse-mat-button-large',{ timeout : 15000 }).click()

    cy.get('.fuse-alert-message').should('contains.text', 'Wrong Email or Password!')

  })
  it('Sign in wrong password', () => {
    
    cy.visit(URL)

    //enter email
    cy.get('#email',{ timeout : 15000 }).type("ans.sohail@dictalabs.com")

    //enter password
    cy.get('#password',{ timeout : 15000 }).type("Password12")

    cy.get('.fuse-mat-button-large',{ timeout : 15000 }).click()

    cy.get('.fuse-alert-message').should('contains.text', 'Wrong Email or Password!')

  })
})
