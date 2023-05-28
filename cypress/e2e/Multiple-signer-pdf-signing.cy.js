URL = "https://app.vscrawl.com/sign-in"
describe('Multiple signer pdf signing', () =>{

    // The testcase for multiple signers pdf signing 
    it('signs a pdf using multiple signers', () => {

        // visit vScrawl console
        cy.visit(URL)

        // enter email for first signer
        cy.get('#email',{ timeout : 15000 }).type('notary@dictalabs.com')
  
        // enter password for first signer
        cy.get('#password',{ timeout : 15000 }).type('password123')
  
        cy.get('.fuse-mat-button-large',{ timeout : 15000 }).click()
  
        // select to upload a new document
        cy.get('[routerlink="/documents/new"] > .flex-auto',{ timeout : 15000 }).click()

        cy.get('.text-base > .mat-focus-indicator > .mat-button-wrapper',{ timeout : 15000 }).click({ force: true })

        // upload the file to be signed
        cy.get('input[type="file"]',{ timeout : 15000 }).selectFile('TestingDoc.pdf',{force:true})

        // unselect checkbox for single signer
        cy.get('.mat-checkbox-inner-container',{ timeout : 15000 }).click()

        cy.get('.mat-primary',{ timeout : 15000 }).click()

        // secondary signer name
        cy.get('#mat-input-3',{ timeout : 15000 }).type('Ans')

        // secondary signer email
        cy.get('#mat-input-4',{ timeout : 15000 }).type('ans.sohail@dictalabs.com')

        cy.get('.items-center > .mat-primary',{ timeout : 15000 }).click()

        //dragging and dropping a signature box on the pdf
        cy.get('#menu_signature',{ timeout : 15000 }).drag('#pageNo_1 > .page', {
            //descibes the target location on the pdf where it is being dropped
            target: { x:200,y:290 }
        })

        //dynamically getting the attribute for the signature box locator
        cy.get('[id^="sign_"]',{ timeout : 15000 }).click()

        cy.get('#mat-select-value-3',{ timeout : 15000 }).click()

        cy.get('#mat-option-5 > .mat-option-text',{ timeout : 15000 }).click()

        //dragging and dropping a signature box on the pdf
        cy.get('#menu_signature',{ timeout : 15000 }).drag('#pageNo_1 > .page', {
            //descibes the target location on the pdf where it is being dropped
            target: { x:350,y:290 }
        })

        cy.get('#mat-select-value-3',{ timeout : 15000 }).click()

        cy.get('#mat-option-4 > .mat-option-text',{ timeout : 15000 }).click()

        //dragging and dropping a text box on the pdf
        cy.get('#menu_text',{ timeout : 15000 }).drag('#pageNo_1 > .page', {
            //descibes the target location on the pdf where it is being dropped
            target: { x:200,y:150 }
        })

        cy.get('input',{ timeout : 15000 }).clear()

        cy.get('input',{ timeout : 15000 }).type('notary')

        cy.get('#mat-select-value-3',{ timeout : 15000 }).click()

        cy.get('#mat-option-5 > .mat-option-text',{ timeout : 15000 }).click()

        //dragging and dropping a text box on the pdf
        cy.get('#menu_text',{ timeout : 15000 }).drag('#pageNo_1 > .page', {
            //descibes the target location on the pdf where it is being dropped
            target: { x:350,y:150 }
        })

        // dynamically getting the locator of the first signature box to apply the signature
        cy.get('[id^="sign_"]',{ timeout : 15000 }).first().click()

        cy.get('.pl-2 > :nth-child(4) > div > .mat-focus-indicator',{ timeout : 15000 }).click()

        cy.get('[class^="mat-focus-indicator mat-stroked-button mat-button-base ng-star-inserted"]',{ timeout : 15000 }).click()

        cy.get('.items-center > :nth-child(2) > .mat-focus-indicator',{ timeout : 15000 }).click()

        cy.get('.mat-stroked-button',{ timeout : 15000 }).click()

        cy.get('.flex-0 > .mt-1',{ timeout : 15000 }).click()

        // logging out first signer
        cy.get('user > .mat-focus-indicator',{ timeout : 15000 }).click()

        cy.get(':nth-child(6) > span',{ timeout : 15000 }).click()

        cy.wait(500)

        cy.visit(URL)

        // enter email for second signer
        cy.get('#email',{ timeout : 15000 }).type('ans.sohail@dictalabs.com')
  
        // enter password for second signer
        cy.get('#password',{ timeout : 15000 }).type('Password123')
  
        cy.get('.fuse-mat-button-large',{ timeout : 15000 }).click()

        cy.get('.mat-paginator-navigation-last',{ timeout : 15000 }).click()

        // dynamically getting the locator for the link to the last document to be signed 
        cy.get('[role^="row"] > .cdk-column-name > a',{ timeout : 15000 }).last().click()

        cy.get(':nth-child(2) > .flex > div > .mat-focus-indicator',{ timeout : 15000 }).click()

        cy.get('input',{ timeout : 15000 }).clear()

        // signing the document through second signer
        cy.get('input',{ timeout : 15000 }).type('Ans')
        
        cy.get('[id^="sign_"]',{ timeout : 15000 }).click()

        cy.get('.items-center > :nth-child(2) > .mat-focus-indicator',{ timeout : 15000 }).click()

        cy.get('.mat-flat-button',{ timeout : 15000 }).click()
        
        // end of signing

    })
})