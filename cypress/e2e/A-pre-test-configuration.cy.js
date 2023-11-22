URL = "https://app.vscrawl.com/"
const email1 = 'notary@dictalabs.com'
const password1 = 'password123'
const email2 = 'ans.sohail@dictalabs.com'
const password2 = 'P@ssword123'

describe("Configurations to run before the actual tests", () => {
    it("Setting up first signer", () => {
         // visit vScrawl console
         cy.visit(URL)

         // enter email for first signer
         cy.get('#email',{ timeout : 20000, retryInterval: 3000 }).type(email1)
   
         // enter password for first signer
         cy.get('#password',{ timeout : 20000, retryInterval: 3000 }).type(password1)
   
         cy.get('.mat-flat-button',{ timeout : 20000, retryInterval: 3000 }).click()

         cy.get('user > .mat-focus-indicator',{ timeout : 20000, retryInterval: 3000 }).click()

         cy.contains('Profile',{ timeout : 20000, retryInterval: 3000 }).first().click()
 
         cy.get('.mat-drawer-content > .flex-auto > :nth-child(1) > .mat-focus-indicator',{ timeout : 20000, retryInterval: 3000 }).click()
 
         cy.get('.flex-col > :nth-child(3)',{ timeout : 20000, retryInterval: 3000 }).click()
 
         cy.get('#mat-radio-4 > .mat-radio-label > .mat-radio-container > .mat-radio-outer-circle',{ timeout : 20000, retryInterval: 3000 }).click({ force : true })
 
         cy.get('[id^=mat-input]',{ timeout : 20000, retryInterval: 3000 }).clear()
 
         cy.get('[id^=mat-input]',{ timeout : 20000, retryInterval: 3000 }).type('Akis2')
 
         cy.get(':nth-child(5) > .flex > .mat-focus-indicator',{ timeout : 20000, retryInterval: 3000 }).click()
 
         cy.get(':nth-child(2) > .fuse-vertical-navigation-item-wrapper > .mat-tooltip-trigger',{ timeout : 20000, retryInterval: 3000 }).click()
    })
    it("Setting up second signer", () => {

         // visit vScrawl console
         cy.visit(URL)

         // enter email for second signer
         cy.get('#email',{ timeout : 20000, retryInterval: 3000 }).type(email2)
   
         // enter password for second signer
         cy.get('#password',{ timeout : 20000, retryInterval: 3000 }).type(password2)
   
         cy.get('.mat-flat-button',{ timeout : 20000, retryInterval: 3000 }).click()

         cy.get('user > .mat-focus-indicator').click()

         cy.contains('Profile').first().click()
 
         cy.get('.mat-drawer-content > .flex-auto > :nth-child(1) > .mat-focus-indicator').click()
 
         cy.get('.flex-col > :nth-child(3)').last().click()
 
         cy.get('#mat-radio-4 > .mat-radio-label > .mat-radio-container > .mat-radio-outer-circle').click({ force : true })
 
         cy.get('#mat-input-5').clear()
 
         cy.get('#mat-input-5').type('Akis2')
 
         cy.get(':nth-child(5) > .flex > .mat-focus-indicator').click()
 
         cy.get(':nth-child(2) > .fuse-vertical-navigation-item-wrapper > .mat-tooltip-trigger').click()
    })
})