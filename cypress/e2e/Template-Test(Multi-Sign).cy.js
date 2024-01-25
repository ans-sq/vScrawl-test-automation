URL = "https://staging.app.vscrawl.com:4233/"

describe('Multi-Sign Template Test', () =>{

    // The testcase for multiple signers pdf signing 
    it('Multi-Sign', () => {

        // visit vScrawl console
        cy.visit(URL)

        cy.get('.cc-allow',{ timeout : 20000, retryInterval: 3000 }).click()

        // enter email for first signer
        cy.get('#email',{ timeout : 20000, retryInterval: 3000 }).type(Cypress.env('email1'))
  
        // enter password for first signer
        cy.get('#password',{ timeout : 20000, retryInterval: 3000 }).type(Cypress.env('password1'))
  
        cy.get('.mat-flat-button',{ timeout : 20000, retryInterval: 3000 }).click()
  
        // select to upload a new document
        cy.get('.pl-5 > .flex > .mat-focus-indicator > .mat-button-wrapper',{ timeout : 20000, retryInterval: 3000 }).click()
        
        cy.wait(1500)

        cy.get('button.mat-menu-item',{ timeout : 20000, retryInterval: 3000 }).last().click();

        // upload the file to be signed
        cy.get('input[type="file"]',{ timeout : 20000, retryInterval: 3000 }).selectFile('TestingDoc.pdf',{force:true})

        cy.wait(2000)

        cy.get('.mat-primary',{ timeout : 20000, retryInterval: 3000 }).click()

        // secondary signer name
        cy.get('[id^="mat-input"]',{ timeout : 20000, retryInterval: 3000 }).eq(0).type('Notary')

        // secondary signer email
        cy.get('[id^="mat-input"]',{ timeout : 20000, retryInterval: 3000 }).eq(1).type(Cypress.env('email1'))

        cy.get('.mt-8').click()

        cy.get('[id^="mat-input"]').eq(2).type('Signer')

        cy.get('[id^="mat-input"]').eq(3).type(Cypress.env('email2'))

        cy.get('.justify-end > .mat-primary',{ timeout : 20000, retryInterval: 3000 }).click({ force: true })

        //dragging and dropping a signature box on the pdf
        cy.get('#menu_signature',{ timeout : 20000, retryInterval: 3000 }).drag('#pageNo_1 > .page', {
            //descibes the target location on the pdf where it is being dropped
            target: { x:400,y:490 },
            timeout : 20000, retryInterval: 3000
        })

        //dynamically getting the attribute for the signature box locator
        cy.get('[id^="sign_"]',{ timeout : 20000, retryInterval: 3000 }).click()

        cy.get('#mat-select-value-3',{ timeout : 20000, retryInterval: 3000 }).click()

        cy.get('#mat-option-5',{ timeout : 20000, retryInterval: 3000 }).click()

        //dragging and dropping a signature box on the pdf
        cy.get('#menu_signature',{ timeout : 20000, retryInterval: 3000 }).drag('#pageNo_1 > .page', {
            //descibes the target location on the pdf where it is being dropped
            target: { x:350,y:290 },
            timeout : 20000, retryInterval: 3000
        })

        cy.get('#mat-select-value-3',{ timeout : 20000, retryInterval: 3000 }).click()

        cy.get('#mat-option-4',{ timeout : 20000, retryInterval: 3000 }).click()

        //dragging and dropping a text box on the pdf
        cy.get('#menu_text',{ timeout : 20000, retryInterval: 3000 }).drag('#pageNo_1 > .page', {
            //descibes the target location on the pdf where it is being dropped
            target: { x:200,y:50 },
            timeout : 20000, retryInterval: 3000
        })

        cy.get('input',{ timeout : 20000, retryInterval: 3000 }).clear({force:true})

        cy.get('input',{ timeout : 20000, retryInterval: 3000 }).type('Signer 1',{force:true})

        cy.get('#mat-select-value-3',{ timeout : 20000, retryInterval: 3000 }).click()

        cy.get('#mat-option-5',{ timeout : 20000, retryInterval: 3000 }).click()

        //dragging and dropping a text box on the pdf
        cy.get('#menu_text',{ timeout : 20000, retryInterval: 3000 }).drag('#pageNo_1 > .page', {
            //descibes the target location on the pdf where it is being dropped
            target: { x:250,y:150 },
            timeout : 20000, retryInterval: 3000
        })

        // dynamically getting the locator of the first signature box to apply the signature
        cy.get('[id^="sign_"]',{ timeout : 20000, retryInterval: 3000 }).first().click()

        cy.get('.pl-2 > :nth-child(7)', { timeout : 20000, retryInterval: 3000 }).click()

        // Saving a new Template 
        cy.get('.mat-menu-content > .mat-focus-indicator', { timeout : 20000, retryInterval: 3000 }).click()

        cy.get('[id^="mat-input"]', { timeout : 20000, retryInterval: 3000 }).first().type("Automation Multi-Sign Template")

        cy.get('.mat-flat-button', { timeout : 20000, retryInterval: 3000 }).click()

        //Sending the Document
        cy.get('.pl-2 > :nth-child(4) > div > .mat-focus-indicator',{ timeout : 20000, retryInterval: 3000 }).click()

        cy.get('[class="mat-focus-indicator mat-flat-button mat-button-base mat-primary ng-star-inserted"]',{ timeout : 20000, retryInterval: 3000 }).click()

        cy.get('tbody > :nth-child(1) > .cdk-column-status',{ timeout : 20000, retryInterval: 3000 }).should('contains.text', 'Pending')

        cy.get(':nth-child(1) > .cdk-column-fileName > a',{ timeout : 20000, retryInterval: 3000 }).click()

        cy.wait(2000)

        cy.get('.items-center > :nth-child(2) > .mat-focus-indicator',{ timeout : 20000, retryInterval: 3000 }).click()

        //cy.get('.mat-stroked-button',{ timeout : 20000, retryInterval: 3000 }).click()
        cy.get('.mat-flat-button',{ timeout : 20000, retryInterval: 3000 }).click()

        cy.get('tbody > :nth-child(1) > .cdk-column-status',{ timeout : 20000, retryInterval: 3000 }).should('contains.text', 'Signed')


        // logging out first signer
        cy.get('user > .mat-focus-indicator',{ timeout : 20000, retryInterval: 3000 }).click()

        cy.contains('Sign out',{ timeout : 20000, retryInterval: 3000 }).click()

        cy.wait(500)

        cy.visit(URL)

        // enter email for second signer
        cy.get('#email',{ timeout : 20000, retryInterval: 3000 }).type(Cypress.env('email2'))
  
        // enter password for second signer
        cy.get('#password',{ timeout : 20000, retryInterval: 3000 }).type(Cypress.env('password2'))
  
        cy.get('.mat-flat-button',{ timeout : 20000, retryInterval: 3000 }).click()

        cy.get('tbody > :nth-child(1) > .cdk-column-status',{ timeout : 20000, retryInterval: 3000 }).should('contains.text', 'Pending')

        // dynamically getting the locator for the link to the last document to be signed 
        cy.get(':nth-child(1) > .cdk-column-fileName > a',{ timeout : 20000, retryInterval: 3000 }).click()

        cy.get(':nth-child(2) > .flex > div > .mat-focus-indicator',{ timeout : 20000, retryInterval: 3000 }).click()

        cy.get('input',{ timeout : 20000, retryInterval: 3000 }).clear({force:true})

        // signing the document through second signer
        cy.get('input',{ timeout : 20000, retryInterval: 3000 }).type('Signer 2',{force:true})
        
        cy.get('[id^="sign_"]',{ timeout : 20000, retryInterval: 3000 }).click()

        cy.wait(500)

        cy.get('.items-center > :nth-child(2) > .mat-focus-indicator',{ timeout : 20000, retryInterval: 3000 }).click()

        cy.get('.mat-flat-button',{ timeout : 20000, retryInterval: 3000 }).click()
        
        // end of signing

        cy.get('user > .mat-focus-indicator',{ timeout : 20000, retryInterval: 3000 }).click()

        cy.contains('Sign out',{ timeout : 20000, retryInterval: 3000 }).click()

        cy.wait(500)

        cy.visit(URL)

        // enter email for first signer
        cy.get('#email',{ timeout : 20000, retryInterval: 3000 }).type(Cypress.env('email1'))

        // enter password for first signer
        cy.get('#password',{ timeout : 20000, retryInterval: 3000 }).type(Cypress.env('password1'))

        cy.get('.mat-flat-button',{ timeout : 20000, retryInterval: 3000 }).click()

        //Using the Template
        cy.get('user > .mat-focus-indicator', { timeout : 20000, retryInterval: 3000 }).click()

        cy.contains('Template', { timeout : 20000, retryInterval: 3000 }).click()

        cy.get('tbody > :nth-child(1) > .cdk-column-name').should('contain.text', "Automation Multi-Sign Template", { timeout : 20000, retryInterval: 3000 })

        cy.get(':nth-child(1) > .cdk-column-Options > .button-container > .use-button', { timeout : 20000, retryInterval: 3000 }).click()

        //Sending The document again using templates
        cy.get('.pl-2 > :nth-child(4) > div > .mat-focus-indicator',{ timeout : 20000, retryInterval: 3000 }).click()

        cy.get('[class="mat-focus-indicator mat-flat-button mat-button-base mat-primary ng-star-inserted"]',{ timeout : 20000, retryInterval: 3000 }).click()

        cy.get('tbody > :nth-child(1) > .cdk-column-status',{ timeout : 20000, retryInterval: 3000 }).should('contains.text', 'Pending')

        cy.get(':nth-child(1) > .cdk-column-fileName > a',{ timeout : 20000, retryInterval: 3000 }).click()

        cy.wait(2000)

        cy.get('[id^="sign_"]',{ timeout : 20000, retryInterval: 3000 }).first().click()

        cy.get('.items-center > :nth-child(2) > .mat-focus-indicator',{ timeout : 20000, retryInterval: 3000 }).click()

        //cy.get('.mat-stroked-button',{ timeout : 20000, retryInterval: 3000 }).click()
        cy.get('.mat-flat-button',{ timeout : 20000, retryInterval: 3000 }).click()

        cy.get('tbody > :nth-child(1) > .cdk-column-status',{ timeout : 20000, retryInterval: 3000 }).should('contains.text', 'Signed')


        // logging out first signer
        cy.get('user > .mat-focus-indicator',{ timeout : 20000, retryInterval: 3000 }).click()

        cy.contains('Sign out',{ timeout : 20000, retryInterval: 3000 }).click()

        cy.wait(500)

        cy.visit(URL)

        // enter email for second signer
        cy.get('#email',{ timeout : 20000, retryInterval: 3000 }).type(Cypress.env('email2'))
  
        // enter password for second signer
        cy.get('#password',{ timeout : 20000, retryInterval: 3000 }).type(Cypress.env('password2'))
  
        cy.get('.mat-flat-button',{ timeout : 20000, retryInterval: 3000 }).click()

        cy.get('tbody > :nth-child(1) > .cdk-column-status',{ timeout : 20000, retryInterval: 3000 }).should('contains.text', 'Pending')

        // dynamically getting the locator for the link to the last document to be signed 
        cy.get(':nth-child(1) > .cdk-column-fileName > a',{ timeout : 20000, retryInterval: 3000 }).click()

        cy.get(':nth-child(2) > .flex > div > .mat-focus-indicator',{ timeout : 20000, retryInterval: 3000 }).click()

        cy.get('input',{ timeout : 20000, retryInterval: 3000 }).clear({force:true})

        // signing the document through second signer
        cy.get('input',{ timeout : 20000, retryInterval: 3000 }).type('Signer 2',{force:true})
        
        cy.get('[id^="sign_"]',{ timeout : 20000, retryInterval: 3000 }).click()

        cy.wait(500)

        cy.get('.items-center > :nth-child(2) > .mat-focus-indicator',{ timeout : 20000, retryInterval: 3000 }).click()

        cy.get('.mat-flat-button',{ timeout : 20000, retryInterval: 3000 }).click()

        cy.get('user > .mat-focus-indicator',{ timeout : 20000, retryInterval: 3000 }).click()

        cy.contains('Sign out',{ timeout : 20000, retryInterval: 3000 }).click()

        cy.wait(500)

        cy.visit(URL)

        // enter email for first signer
        cy.get('#email',{ timeout : 20000, retryInterval: 3000 }).type(Cypress.env('email1'))

        // enter password for first signer
        cy.get('#password',{ timeout : 20000, retryInterval: 3000 }).type(Cypress.env('password1'))

        cy.get('.mat-flat-button',{ timeout : 20000, retryInterval: 3000 }).click()
    })

    afterEach(() => {
        
            
        // cy.visit(URL)

        cy.wait(10000)

        // // enter email for first signer
        // cy.get('#email',{ timeout : 20000, retryInterval: 3000 }).type(Cypress.env('email1'),{force:true})

        // // enter password for first signer
        // cy.get('#password',{ timeout : 20000, retryInterval: 3000 }).type(Cypress.env('password1'),{force:true})

        // cy.get('.mat-flat-button',{ timeout : 20000, retryInterval: 3000 }).click({force:true})

        cy.visit(URL + 'template-documents', { timeout : 20000, retryInterval: 3000 })
    
        cy.wait(10000)
    
        cy.get('.button-container > .mat-focus-indicator > .mat-button-wrapper', { timeout : 20000, retryInterval: 3000 }).first().click({force:true})
    
        cy.get('[title="Delete"]', { timeout : 20000, retryInterval: 3000 }).click({force:true, multiple:true})
       
      })
})
