URL = "https://app.vscrawl.com"
const email1 = 'notary@dictalabs.com'
const password1 = 'password123'
const email2 = 'ans.sohail@dictalabs.com'
const password2 = 'P@ssword123'
describe("Check Multi signing", () => {
    it("Sequential Signing", () => {
      // Visit the webpage or load your application
      cy.visit(URL);

       // enter email for first signer
       cy.get('#email',{ timeout : 15000, retryInterval: 3000 }).type(email1)
  
       // enter password for first signer
       cy.get('#password',{ timeout : 15000, retryInterval: 3000 }).type(password1)
 
       cy.get('.mat-flat-button',{ timeout : 15000, retryInterval: 3000 }).click()
 
       // select to upload a new document
       cy.get('.pl-5 > .flex > .mat-focus-indicator > .mat-button-wrapper',{ timeout : 15000, retryInterval: 3000 }).click()
       
       cy.wait(1500)

       cy.get('button.mat-menu-item',{ timeout : 15000, retryInterval: 3000 }).last().click();

       // upload the file to be signed
       cy.get('input[type="file"]',{ timeout : 15000, retryInterval: 3000 }).selectFile('TestingDoc.pdf',{force:true})

       cy.wait(500)

       cy.get('.mat-primary',{ timeout : 15000, retryInterval: 3000 }).click()

       cy.get('.mat-checkbox-inner-container',{ timeout : 15000, retryInterval: 3000 }).click()

       // secondary signer name
       cy.get('#mat-input-3',{ timeout : 15000, retryInterval: 3000 }).type('Signer')

       // secondary signer email
       cy.get('#mat-input-4',{ timeout : 15000, retryInterval: 3000 }).type(email2)

       cy.get('.mt-8').click()

       cy.get('#mat-input-5',{ timeout : 15000, retryInterval: 3000 }).type('Notary')

       cy.get('#mat-input-6',{ timeout : 15000, retryInterval: 3000 }).type(email1)

       cy.get('.justify-end > .mat-primary > .mat-button-wrapper',{ timeout : 15000, retryInterval: 3000 }).click()

       //dragging and dropping a signature box on the pdf
       cy.get('#menu_signature',{ timeout : 15000, retryInterval: 3000 }).drag('#pageNo_1 > .page', {
           //descibes the target location on the pdf where it is being dropped
           target: { x:400,y:490 },
           timeout: 15000
       })

       cy.get('#mat-select-value-3',{ timeout : 15000, retryInterval: 3000 }).click()

       cy.get('#mat-option-5',{ timeout : 15000, retryInterval: 3000 }).click()

       //dragging and dropping a signature box on the pdf
       cy.get('#menu_signature',{ timeout : 15000, retryInterval: 3000 }).drag('#pageNo_1 > .page', {
           //descibes the target location on the pdf where it is being dropped
           target: { x:350,y:290 }
       })

       cy.get('#mat-select-value-3',{ timeout : 15000, retryInterval: 3000 }).click()

       cy.get('#mat-option-4',{ timeout : 15000, retryInterval: 3000 }).click()

       //dragging and dropping a text box on the pdf
       cy.get('#menu_text',{ timeout : 15000, retryInterval: 3000 }).drag('#pageNo_1 > .page', {
           //descibes the target location on the pdf where it is being dropped
           target: { x:200,y:50 }
       })

       cy.get('input',{ timeout : 15000, retryInterval: 3000 }).clear({force:true})

       cy.get('input',{ timeout : 15000, retryInterval: 3000 }).type('Signer 1',{force:true})

       cy.get('#mat-select-value-3',{ timeout : 15000, retryInterval: 3000 }).click()

       cy.get('#mat-option-5',{ timeout : 15000, retryInterval: 3000 }).click()

       //dragging and dropping a text box on the pdf
       cy.get('#menu_text',{ timeout : 15000, retryInterval: 3000 }).drag('#pageNo_1 > .page', {
           //descibes the target location on the pdf where it is being dropped
           target: { x:250,y:150 }
       })

    //    // dynamically getting the locator of the first signature box to apply the signature
    //    cy.get('[id^="sign_"]',{ timeout : 15000, retryInterval: 3000 }).first().click()

       cy.get('.pl-2 > :nth-child(4) > div > .mat-focus-indicator',{ timeout : 15000, retryInterval: 3000 }).click()

       cy.get('[class="mat-focus-indicator mat-flat-button mat-button-base mat-primary ng-star-inserted"]',{ timeout : 15000, retryInterval: 3000 }).click()

       cy.get('tbody > :nth-child(1) > .cdk-column-status',{ timeout : 15000, retryInterval: 3000 }).should('contain.text', 'Sent')

       cy.get(':nth-child(1) > .cdk-column-fileName > a',{ timeout : 15000, retryInterval: 3000 }).click()

       cy.get('.flex-auto > .bg-card',{ timeout : 15000, retryInterval: 3000 }).should('not.be.visible')

       cy.get('div.ng-star-inserted > .mat-focus-indicator',{ timeout : 15000, retryInterval: 3000 }).should('contain.text', 'Download')

       cy.get('user > .mat-focus-indicator',{ timeout : 15000, retryInterval: 3000 }).click()

       cy.get('.mat-menu-content > :nth-child(6)',{ timeout : 15000, retryInterval: 3000 }).click()

       cy.wait(500)

       cy.visit(URL)

       // enter email for second signer
       cy.get('#email',{ timeout : 15000, retryInterval: 3000 }).type(email2)
 
       // enter password for second signer
       cy.get('#password',{ timeout : 15000, retryInterval: 3000 }).type(password2)
 
       cy.get('.mat-flat-button',{ timeout : 15000, retryInterval: 3000 }).click()

       cy.get('tbody > :nth-child(1) > .cdk-column-status',{ timeout : 15000, retryInterval: 3000 }).should('contains.text', 'Pending')

       // dynamically getting the locator for the link to the last document to be signed 
       cy.get(':nth-child(1) > .cdk-column-fileName > a',{ timeout : 15000, retryInterval: 3000 }).click()

       cy.get(':nth-child(2) > .flex > div > .mat-focus-indicator',{ timeout : 15000, retryInterval: 3000 }).click()

       cy.get('input',{ timeout : 15000, retryInterval: 3000 }).clear({force:true})

       // signing the document through second signer
       cy.get('input',{ timeout : 15000, retryInterval: 3000 }).type('Signer',{force:true})
       
       cy.get('[id^="sign_"]',{ timeout : 15000, retryInterval: 3000 }).click()

       cy.get('.items-center > :nth-child(2) > .mat-focus-indicator',{ timeout : 15000, retryInterval: 3000 }).click()

       cy.get('.mat-flat-button',{ timeout : 15000, retryInterval: 3000 }).click()

       cy.get('user > .mat-focus-indicator',{ timeout : 15000, retryInterval: 3000 }).click()

       cy.get('.mat-menu-content > :nth-child(5)',{ timeout : 15000, retryInterval: 3000 }).click()

       // enter email for first signer
       cy.get('#email',{ timeout : 15000, retryInterval: 3000 }).type(email1)
  
       // enter password for first signer
       cy.get('#password',{ timeout : 15000, retryInterval: 3000 }).type(password1)
 
       cy.get('.mat-flat-button',{ timeout : 15000, retryInterval: 3000 }).click()

       cy.get('tbody > :nth-child(1) > .cdk-column-status',{ timeout : 15000, retryInterval: 3000 }).should('contains.text', 'Pending')

       // dynamically getting the locator for the link to the last document to be signed 
       cy.get(':nth-child(1) > .cdk-column-fileName > a',{ timeout : 15000, retryInterval: 3000 }).click()

       cy.wait(1000)

       cy.get('input',{ timeout : 15000, retryInterval: 3000 }).clear({force:true})

       // signing the document through first signer now 
       cy.get('input',{ timeout : 15000, retryInterval: 3000 }).type('Signer 2',{force:true})
       
       cy.get('[id^="sign_"]',{ timeout : 15000, retryInterval: 3000 }).click()

       cy.get('.items-center > :nth-child(2) > .mat-focus-indicator',{ timeout : 15000, retryInterval: 3000 }).click()

       cy.get('.mat-flat-button',{ timeout : 15000, retryInterval: 3000 }).click()

    });
  });