/// <reference types="Cypress" />

context('Simple Form', () => {
    it("Writes some text in input then sees that text in h1", function(){
        cy.visit("http://localhost:3000");
        cy.get('#input').type('This is a test');
        cy.get("#show").click();
        // make cypress click the hide btn and then the show btn again
    })
  })
  