/// <reference types="cypress"/>

describe('happy path', () => {
    it('should work', () => {
        cy.visit('http://localhost:8080');
        // cy.get('#' + id)
        cy.get('label')
            .should('have.text', "off")
            .click()
            .should('have.text', "on")
        ;
    })
})
