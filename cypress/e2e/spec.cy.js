it("my first test", () => {
    cy.visit("/")
    /* ==== Generated with Cypress Studio ==== */
    cy.get(':nth-child(1) > .input-wrap > .ng-untouched').click();
    cy.get('.input-focus > .input-wrap > .ng-untouched').clear();
    cy.get('.input-focus > .input-wrap > .ng-untouched').type('ayeni@kobo360.com');
    cy.get(':nth-child(2) > .input-wrap > .ng-untouched').click();
    cy.get('.input-wrap > .ng-untouched').clear();
    cy.get('.input-wrap > .ng-untouched').type('1@Password');
    cy.get('small').click();
    cy.get('.mat-focus-indicator').click();
    /* ==== End Cypress Studio ==== */
})