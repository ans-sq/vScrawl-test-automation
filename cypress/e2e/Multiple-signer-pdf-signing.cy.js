URL = "localhost:4200"
const email1 = 'notary@dictalabs.com'
const password1 = 'password123'
const email2 = 'ans.sohail@dictalabs.com'
const password2 = 'Password123'
describe('Multiple signer pdf signing', () =>{

    // The testcase for multiple signers pdf signing 
    it('signs a pdf using multiple signers', () => {

        // visit vScrawl console
        cy.visit(URL)

        // enter email for first signer
        cy.get('#email',{ timeout : 10000 }).type(email1)
  
        // enter password for first signer
        cy.get('#password',{ timeout : 10000 }).type(password1)
  
        cy.get('.fuse-mat-button-large',{ timeout : 10000 }).click()
  
        // select to upload a new document
        cy.get('[routerlink="/documents/new"] > .flex-auto',{ timeout : 10000 }).click()

        cy.get('.text-base > .mat-focus-indicator > .mat-button-wrapper',{ timeout : 10000 }).click({ force: true })

        // upload the file to be signed
        cy.get('input[type="file"]',{ timeout : 10000 }).selectFile('TestingDoc.pdf',{force:true})

        // unselect checkbox for single signer
        cy.get('.mat-checkbox-inner-container',{ timeout : 10000 }).click()

        cy.get('.mat-primary',{ timeout : 10000 }).click()

        // secondary signer name
        cy.get('#mat-input-3',{ timeout : 10000 }).type('Signer')

        // secondary signer email
        cy.get('#mat-input-4',{ timeout : 10000 }).type(email2)

        cy.get('.items-center > .mat-primary',{ timeout : 10000 }).click()

        //dragging and dropping a signature box on the pdf
        cy.get('#menu_signature',{ timeout : 10000 }).drag('#pageNo_1 > .page', {
            //descibes the target location on the pdf where it is being dropped
            target: { x:200,y:290 }
        })

        //dynamically getting the attribute for the signature box locator
        cy.get('[id^="sign_"]',{ timeout : 10000 }).click()

        cy.get('#mat-select-value-3',{ timeout : 10000 }).click()

        cy.get('#mat-option-5 > .mat-option-text',{ timeout : 10000 }).click()

        //dragging and dropping a signature box on the pdf
        cy.get('#menu_signature',{ timeout : 10000 }).drag('#pageNo_1 > .page', {
            //descibes the target location on the pdf where it is being dropped
            target: { x:350,y:290 }
        })

        cy.get('#mat-select-value-3',{ timeout : 10000 }).click()

        cy.get('#mat-option-4 > .mat-option-text',{ timeout : 10000 }).click()

        //dragging and dropping a text box on the pdf
        cy.get('#menu_text',{ timeout : 10000 }).drag('#pageNo_1 > .page', {
            //descibes the target location on the pdf where it is being dropped
            target: { x:200,y:150 }
        })

        cy.get('input',{ timeout : 10000 }).clear()

        cy.get('input',{ timeout : 10000 }).type('Signer 1')

        cy.get('#mat-select-value-3',{ timeout : 10000 }).click()

        cy.get('#mat-option-5 > .mat-option-text',{ timeout : 10000 }).click()

        //dragging and dropping a text box on the pdf
        cy.get('#menu_text',{ timeout : 10000 }).drag('#pageNo_1 > .page', {
            //descibes the target location on the pdf where it is being dropped
            target: { x:350,y:150 }
        })

        // dynamically getting the locator of the first signature box to apply the signature
        cy.get('[id^="sign_"]',{ timeout : 10000 }).first().click()

        cy.get('.pl-2 > :nth-child(4) > div > .mat-focus-indicator',{ timeout : 10000 }).click()

        cy.get('[class^="mat-focus-indicator mat-stroked-button mat-button-base ng-star-inserted"]',{ timeout : 10000 }).click()

        cy.get('.items-center > :nth-child(2) > .mat-focus-indicator',{ timeout : 10000 }).click()

        cy.get('.mat-stroked-button',{ timeout : 10000 }).click()

        cy.get('.flex-0 > .mt-1',{ timeout : 10000 }).click()

        // logging out first signer
        cy.get('user > .mat-focus-indicator',{ timeout : 10000 }).click()

        cy.get(':nth-child(6) > span',{ timeout : 10000 }).click()

        cy.wait(500)

        cy.visit(URL)

        // enter email for second signer
        cy.get('#email',{ timeout : 10000 }).type(email2)
  
        // enter password for second signer
        cy.get('#password',{ timeout : 10000 }).type(password2)
  
        cy.get('.fuse-mat-button-large',{ timeout : 10000 }).click()

        cy.get('.mat-paginator-navigation-last',{ timeout : 10000 }).click()

        // dynamically getting the locator for the link to the last document to be signed 
        cy.get('[role^="row"] > .cdk-column-name > a',{ timeout : 10000 }).last().click()

        cy.get(':nth-child(2) > .flex > div > .mat-focus-indicator',{ timeout : 10000 }).click()

        cy.get('input',{ timeout : 10000 }).clear()

        // signing the document through second signer
        cy.get('input',{ timeout : 10000 }).type('Signer 2')
        
        cy.get('[id^="sign_"]',{ timeout : 10000 }).click()

        cy.get('.items-center > :nth-child(2) > .mat-focus-indicator',{ timeout : 10000 }).click()

        cy.get('.mat-flat-button',{ timeout : 10000 }).click()
        
        // end of signing

    })
})