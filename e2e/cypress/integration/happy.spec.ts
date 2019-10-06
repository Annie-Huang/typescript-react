/// <reference types="cypress"/>

import { id, onText, offText } from '../../../src/constants';

describe('happy path', () => {
    it('should work', () => {
        cy.visit('http://localhost:8080');
        // cy.get('label')
        // cy.get('#onOff')
        cy.get('#' + id)
            // .should('have.text', "off")
            .should('have.text', offText)
            .click()
            // .should('have.text', "on")
            .should('have.text', onText);
    })
});
