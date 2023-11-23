URL = "https://app.vscrawl.com/"
const email = "notary@dictalabs.com";
const password = 'password123';
describe('Single signer pdf digital signing', () => {
  it('Signs a pdfs using a single signer', () => {
    // Visit vScrawl 
    cy.visit(URL)

    //enter email
    cy.get('#email',{ timeout : 20000 }).type(email)

    //enter password
    cy.get('#password',{ timeout : 20000 }).type(password)

    cy.get('.mat-flat-button',{ timeout : 20000 }).click()

    //select to upload a new document
    cy.get('.pl-5 > .flex > .mat-focus-indicator > .mat-button-wrapper > .mat-icon',{ timeout : 20000 }).click()

    cy.get('button.mat-menu-item',{ timeout : 20000, retryInterval: 3000 }).first().click();

    cy.get('.text-base > .mat-focus-indicator > .mat-button-wrapper',{ timeout : 20000 }).click({ force: true })
 
    //upload the file to be signed
    cy.get('input[type="file"]',{ timeout : 20000 }).selectFile('TestingDoc.pdf',{force:true})

    cy.wait(2000)

    cy.get('.mat-primary').click()

    //dragging and dropping a signature box on the pdf
    cy.get('#menu_signature',{ timeout : 20000 }).drag('#pageNo_1 > .page', {
      //descibes the target location on the pdf where it is being dropped
      target: { x:250,y:290 }
    })

    //dynamically getting the attribute for the signature box locator
    cy.get('[id^="sign_"]',{ timeout : 20000 }).click()

    //selecting e-signature
    cy.get('#mat-radio-2 > .mat-radio-label > .mat-radio-container > .mat-radio-outer-circle',{ timeout : 20000 }).click({force : true})

    cy.get('.mat-flat-button',{ timeout : 20000 }).click()

    //Changing the size of the signature box
    cy.get('[id^="sign_"]',{ timeout : 20000 }).then(($object) => {
          // Resize the object
          $object.css('width', '300px');
          $object.css('height', '200px');
      });

     //dragging and dropping a text box on the pdf
     cy.get('#menu_text',{ timeout : 20000 }).drag('#pageNo_1 > .page', {
      //descibes the target location on the pdf where it is being dropped
      target: { x:200,y:150 }
    })

    cy.get('input',{ timeout : 20000 }).dblclick({force:true})

    cy.wait(200)

    cy.get('input',{ timeout : 20000 }).clear({force:true})

    cy.get('input',{ timeout : 20000 }).type('Signer',{force:true})

    //dynamically getting the attribute for the signature box locator
    cy.get('[id^="sign_"]',{ timeout : 20000 }).click()

    cy.get('input',{ timeout : 20000 }).then(($object) => {
      // Resize the object
      $object.css('width', '200px');
  });

    //finishing the document
    cy.get('.pl-2 > :nth-child(2) > .mat-focus-indicator',{ timeout : 20000 }).click()

    cy.get('.mat-flat-button',{ timeout : 20000 }).click()

    cy.get('tbody > :nth-child(1) > .cdk-column-status').should('contain.text', 'Completed')
  })
})
