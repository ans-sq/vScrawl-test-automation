const cypress = require("cypress")

describe("Configurations to run before the actual tests", () => {
    it("Setting up first signer", () => {
         // visit vScrawl console
         cy.visit(Cypress.env('URL'))

         cy.get('.cc-allow',{ timeout : 20000, retryInterval: 3000 }).click()

         // enter email for first signer
         cy.get('#email',{ timeout : 20000, retryInterval: 3000 }).type(Cypress.env('email1'))
   
         // enter password for first signer
         cy.get('#password',{ timeout : 20000, retryInterval: 3000 }).type(Cypress.env('password1'))
   
         cy.get('.mat-flat-button',{ timeout : 20000, retryInterval: 3000 }).click()

         cy.get('user > .mat-focus-indicator',{ timeout : 20000, retryInterval: 3000 }).click()

         cy.contains('Profile',{ timeout : 20000, retryInterval: 3000 }).first().click()
 
         cy.get('.mat-drawer-content > .flex-auto > :nth-child(1) > .mat-focus-indicator',{ timeout : 20000, retryInterval: 3000 }).click()
 
         cy.get('.flex-col > :nth-child(3)',{ timeout : 20000, retryInterval: 3000 }).click()
 
         cy.get('#mat-radio-4 > .mat-radio-label > .mat-radio-container > .mat-radio-outer-circle',{ timeout : 20000, retryInterval: 3000 }).click({ force : true })
 
         cy.get('[id^=mat-input]',{ timeout : 20000, retryInterval: 3000 }).clear()
 
         cy.get('[id^=mat-input]',{ timeout : 20000, retryInterval: 3000 }).type('Akis2')
 
         cy.get(':nth-child(5) > .flex > .mat-focus-indicator',{ timeout : 20000, retryInterval: 3000 }).click({force:true})
 
         cy.get(':nth-child(2) > .fuse-vertical-navigation-item-wrapper > .mat-tooltip-trigger',{ timeout : 20000, retryInterval: 3000 }).click()
    })
    it("Setting up second signer", () => {

         // visit vScrawl console
         cy.visit(Cypress.env('URL'))

         cy.get('.cc-allow',{ timeout : 20000, retryInterval: 3000 }).click()

         // enter email for second signer
         cy.get('#email',{ timeout : 20000, retryInterval: 3000 }).type(Cypress.env('email2'))
   
         // enter password for second signer
         cy.get('#password',{ timeout : 20000, retryInterval: 3000 }).type(Cypress.env('password2'))
   
         cy.get('.mat-flat-button',{ timeout : 20000, retryInterval: 3000 }).click()

         cy.get('user > .mat-focus-indicator',{ timeout : 20000, retryInterval: 3000 }).click()

         cy.contains('Profile',{ timeout : 20000, retryInterval: 3000 }).first().click()
 
         cy.get('.mat-drawer-content > .flex-auto > :nth-child(1) > .mat-focus-indicator',{ timeout : 20000, retryInterval: 3000 }).click()
 
         cy.get('.flex-col > :nth-child(3)',{ timeout : 20000, retryInterval: 3000 }).click()
 
         cy.get('#mat-radio-4 > .mat-radio-label > .mat-radio-container > .mat-radio-outer-circle',{ timeout : 20000, retryInterval: 3000 }).click({ force : true })
 
         cy.get('[id^=mat-input]',{ timeout : 20000, retryInterval: 3000 }).clear()
 
         cy.get('[id^=mat-input]',{ timeout : 20000, retryInterval: 3000 }).type('Akis2')
 
         cy.get(':nth-child(5) > .flex > .mat-focus-indicator',{ timeout : 20000, retryInterval: 3000 }).click({force:true})
 
         cy.get(':nth-child(2) > .fuse-vertical-navigation-item-wrapper > .mat-tooltip-trigger',{ timeout : 20000, retryInterval: 3000 }).click()
    })
})