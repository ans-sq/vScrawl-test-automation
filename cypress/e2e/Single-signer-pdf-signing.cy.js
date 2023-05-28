URL = "https://app.vscrawl.com/sign-in"
describe('Single signer pdf signing', () => {
  it('Signs a pdfs using a single signer', () => {
    // Visit vScrawl
    cy.visit(URL)

    //enter email
    cy.get('#email',{ timeout : 15000 }).type('ans.sohail@dictalabs.com')

    //enter password
    cy.get('#password',{ timeout : 15000 }).type('Password123')

    cy.get('.fuse-mat-button-large',{ timeout : 15000 }).click()

    //select to upload a new document
    cy.get('[routerlink="/documents/new"] > .flex-auto',{ timeout : 15000 }).click()

    cy.get('.text-base > .mat-focus-indicator > .mat-button-wrapper',{ timeout : 15000 }).click({ force: true })
 
    //upload the file to be signed
    cy.get('input[type="file"]',{ timeout : 15000 }).selectFile('TestingDoc.pdf',{force:true})

    cy.wait(2000)

    cy.get('.mat-primary').click()

    //dragging and dropping a signature box on the pdf
    cy.get('#menu_signature',{ timeout : 15000 }).drag('#pageNo_1 > .page', {
      //descibes the target location on the pdf where it is being dropped
      target: { x:250,y:290 }
    })

    //dynamically getting the attribute for the signature box locator
    cy.get('[id^="sign_"]',{ timeout : 15000 }).click()

    cy.get('[id^="1"]',{ timeout : 15000 }).then(($object) => {
          // Resize the object
          $object.css('width', '300px');
          $object.css('height', '200px');
      });

     //dragging and dropping a text box on the pdf
     cy.get('#menu_text',{ timeout : 15000 }).drag('#pageNo_1 > .page', {
      //descibes the target location on the pdf where it is being dropped
      target: { x:200,y:150 }
    })

    cy.get('input',{ timeout : 15000 }).clear()

    cy.get('input',{ timeout : 15000 }).type('Hello World')

    cy.get('[id^="1"]',{ timeout : 15000 }).then(($object) => {
      // Resize the object
      $object.css('width', '200px');
  });

    cy.wait(5000)

    //finishing the document
    cy.get('.pl-2 > :nth-child(2) > .mat-focus-indicator',{ timeout : 15000 }).click()

    cy.get('.mat-stroked-button',{ timeout : 15000 }).click()

    cy.get(':nth-child(3) > .mat-focus-indicator',{ timeout : 15000 }).click()
  })
})