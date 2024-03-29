describe("Check Multi signing", () => {
    it("Sequential Signing", () => {
      // Visit the webpage or load your application
      cy.visit(Cypress.env('URL'));

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

       cy.wait(500)

       cy.get('.mat-primary',{ timeout : 20000, retryInterval: 3000 }).click()

       cy.get('#mat-checkbox-2 > .mat-checkbox-layout > .mat-checkbox-inner-container',{ timeout : 20000, retryInterval: 3000 }).click({force : true})

       // secondary signer name
       cy.get('#mat-input-3',{ timeout : 20000, retryInterval: 3000 }).type('Signer')

       // secondary signer email
       cy.get('#mat-input-4',{ timeout : 20000, retryInterval: 3000 }).type(Cypress.env('email2'))

       cy.get('.mt-8').click()

       cy.get('#mat-input-5',{ timeout : 20000, retryInterval: 3000 }).type('Notary')

       cy.get('#mat-input-6',{ timeout : 20000, retryInterval: 3000 }).type(Cypress.env('email1'))

       cy.get('.justify-end > .mat-primary > .mat-button-wrapper',{ timeout : 20000, retryInterval: 3000 }).click()

       //dragging and dropping a signature box on the pdf
       cy.get('#menu_signature',{ timeout : 20000, retryInterval: 3000 }).drag('#pageNo_1 > .page', {
           //descibes the target location on the pdf where it is being dropped
           target: { x:400,y:490 },
           timeout : 20000, retryInterval: 3000
       })

       cy.get('[id^="mat-select-value"]',{ timeout : 20000, retryInterval: 3000 }).click()

       cy.get('#mat-option-5',{ timeout : 20000, retryInterval: 3000 }).click()

       //dragging and dropping a signature box on the pdf
       cy.get('#menu_signature',{ timeout : 20000, retryInterval: 3000 }).drag('#pageNo_1 > .page', {
           //descibes the target location on the pdf where it is being dropped
           target: { x:350,y:290 },
           timeout : 20000, retryInterval: 3000
       })

       cy.get('[id^="mat-select-value"]',{ timeout : 20000, retryInterval: 3000 }).click()

       cy.get('#mat-option-4',{ timeout : 20000, retryInterval: 3000 }).click()

       //dragging and dropping a text box on the pdf
       cy.get('#menu_text',{ timeout : 20000, retryInterval: 3000 }).drag('#pageNo_1 > .page', {
           //descibes the target location on the pdf where it is being dropped
           target: { x:200,y:50 },
           timeout : 20000, retryInterval: 3000
       })

       cy.get('input',{ timeout : 20000, retryInterval: 3000 }).clear({force:true})

       cy.get('input',{ timeout : 20000, retryInterval: 3000 }).type('Signer 1',{force:true})

       cy.get('[id^="mat-select-value"]',{ timeout : 20000, retryInterval: 3000 }).click()

       cy.get('#mat-option-5',{ timeout : 20000, retryInterval: 3000 }).click()

       //dragging and dropping a text box on the pdf
       cy.get('#menu_text',{ timeout : 20000, retryInterval: 3000 }).drag('#pageNo_1 > .page', {
           //descibes the target location on the pdf where it is being dropped
           target: { x:250,y:150 },
           timeout : 20000, retryInterval: 3000
       })

       // dynamically getting the locator of the first signature box to apply the signature
       cy.get('[id^="sign_"]',{ timeout : 20000, retryInterval: 3000 }).first().click()

       cy.get(':nth-child(5) > div > .mat-focus-indicator',{ timeout : 20000, retryInterval: 3000 }).click()

       cy.get('[class="mat-focus-indicator mat-flat-button mat-button-base mat-primary ng-star-inserted"]',{ timeout : 20000, retryInterval: 3000 }).click()

       cy.get('tbody > :nth-child(1) > .cdk-column-status',{ timeout : 20000, retryInterval: 3000 }).should('contain.text', 'Sent')

       cy.get(':nth-child(1) > .truncate-cell > a',{ timeout : 20000, retryInterval: 3000 }).click()

       cy.wait(1000)

       cy.get('.flex-auto > .bg-card',{ timeout : 20000, retryInterval: 3000 }).should('not.be.visible')

       cy.get('div.ng-star-inserted > .mat-focus-indicator',{ timeout : 20000, retryInterval: 3000 }).should('contain.text', 'Download')

       cy.get('user > .mat-focus-indicator',{ timeout : 20000, retryInterval: 3000 }).click()

       cy.contains('Sign out',{ timeout : 20000, retryInterval: 3000 }).click()

       cy.wait(500)

       cy.visit(Cypress.env('URL'))

       // enter email for second signer
       cy.get('#email',{ timeout : 20000, retryInterval: 3000 }).type(Cypress.env('email2'))
 
       // enter password for second signer
       cy.get('#password',{ timeout : 20000, retryInterval: 3000 }).type(Cypress.env('password2'))
 
       cy.get('.mat-flat-button',{ timeout : 20000, retryInterval: 3000 }).click()

       cy.get('tbody > :nth-child(1) > .cdk-column-status',{ timeout : 20000, retryInterval: 3000 }).should('contains.text', 'Pending')

       // dynamically getting the locator for the link to the last document to be signed 
       cy.get(':nth-child(1) > .truncate-cell > a',{ timeout : 20000, retryInterval: 3000 }).click()

       cy.get(':nth-child(2) > .flex > div > .mat-focus-indicator',{ timeout : 20000, retryInterval: 3000 }).click()

       cy.get('input',{ timeout : 20000, retryInterval: 3000 }).clear({force:true})

       // signing the document through second signer
       cy.get('input',{ timeout : 20000, retryInterval: 3000 }).type('Signer',{force:true})
       
       cy.get('[id^="sign_"]',{ timeout : 20000, retryInterval: 3000 }).click()

       cy.wait(500)

       cy.get('.items-center > :nth-child(2) > .mat-focus-indicator',{ timeout : 20000, retryInterval: 3000 }).click()

       cy.get('.mat-flat-button',{ timeout : 20000, retryInterval: 3000 }).click()

       cy.get('user > .mat-focus-indicator',{ timeout : 20000, retryInterval: 3000 }).click()

       cy.contains('Sign out',{ timeout : 20000, retryInterval: 3000 }).click()

       // enter email for first signer
       cy.get('#email',{ timeout : 20000, retryInterval: 3000 }).type(Cypress.env('email1'))
  
       // enter password for first signer
       cy.get('#password',{ timeout : 20000, retryInterval: 3000 }).type(Cypress.env('password1'))
 
       cy.get('.mat-flat-button',{ timeout : 20000, retryInterval: 3000 }).click()

       cy.get('tbody > :nth-child(1) > .cdk-column-status',{ timeout : 20000, retryInterval: 3000 }).should('contains.text', 'Pending')

       // dynamically getting the locator for the link to the last document to be signed 
       cy.get(':nth-child(1) > .truncate-cell > a',{ timeout : 20000, retryInterval: 3000 }).click()

       cy.wait(2000)

       cy.get('input',{ timeout : 20000, retryInterval: 3000 }).clear({force:true})

       // signing the document through first signer now 
       cy.get('input',{ timeout : 20000, retryInterval: 3000 }).type('Signer 2',{force:true})

       cy.wait(500)
       
       cy.get('[id^="sign_"]',{ timeout : 20000, retryInterval: 3000 }).click()

       cy.wait(500)

       cy.get('.items-center > :nth-child(2) > .mat-focus-indicator',{ timeout : 20000, retryInterval: 3000 }).click()

       cy.get('.mat-flat-button',{ timeout : 20000, retryInterval: 3000 }).click()

    });
  });