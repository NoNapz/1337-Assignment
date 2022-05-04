describe('Testing the filtering and sorting of employees', () => {
    it("User can search for employee and office", () => {
        // Selecting the name filter on EmployeeMenu option dropdown.
        cy.visit('/');
        cy.findByRole('textbox').type('Alicia');
        cy.findByRole('heading', {  name: /alicia sjöberg/i});
        cy.findByRole('textbox').clear();
        cy.findByRole('textbox').type('Lund');
        cy.contains('Lund');
        cy.findByRole('textbox').clear();
    });

    it("User can sort by name or office via dropdown", () => {
        cy.findByRole('combobox').select('Office');
        cy.findByRole('combobox').select('Name');
    })
})