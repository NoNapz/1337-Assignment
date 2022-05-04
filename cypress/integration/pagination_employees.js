describe('Testing the pagination of emplyee list', () => {
    it("Testing Next button.", () => {
        cy.visit('/');
        cy.findByRole('button', { name: /next page/i }).click();
        cy.findByRole('button', { name: /page 2 is your current page/i })
    });

    it("Testing Previous button.", () => {
        cy.findByRole('button', { name: /previous page/i }).click();
        cy.findByRole('button', { name: /page 1 is your current page/i })
    });
})