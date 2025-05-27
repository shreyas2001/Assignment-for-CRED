describe("ToolJet pplication Verifcation",()=>{
    it("ToolJet login Page",()=>{
        // Login directly with commands
        cy.loginToToolJet("cy.qa@example.com","password")

        // Mocking the license limits API to bypass 403 errors during test execution.
        cy.intercept('GET', '/api/license/workflows/limits/**', {
        statusCode: 200,
        body: {
        instanceLimit: 5,
        workspaceLimit: 2,
        },
        }).as('mockedLicense');

        // selecting hamburger icon and importing the folder
        cy.get("button[class='d-inline dropdown-toggle dropdown-toggle-split btn btn-primary']").click()
        cy.get('label[data-cy="import-option-label"]').click()

        // importing the folder in custom way
        cy.get('input[type="file"]').selectFile('cypress/fixtures/sample.json', { force: true });


        // import app click
        cy.get('button[data-cy="import-app"]').should("be.enabled").click()
        cy.wait(9000)

        for(let i=0;i<5;i++){
            cy.get("button[class='driver-next-btn']").click()
        }

        // validating te imported folder
        cy.textBoxInApplication().type('oro1', { force: true });
        cy.get('#select-container').should("be.visible").first().click();
    })
})