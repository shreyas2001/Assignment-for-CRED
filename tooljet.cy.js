///<ReferenceType = "cypress">


describe("ToolJet pplication Verifcation",()=>{
    it("ToolJet login Page",()=>{
        Cypress.on('uncaught:exception', (err, runnable) => {
         if (err.message.includes("Unexpected token 'U'")) {
        return false; // prevent Cypress from failing the test
    }
    });
        cy.visit("https://cetestsystem.tooljet.com/testcypress")
        cy.get("[data-cy='sign-in-header']").should("be.visible")

        cy.get("input[name='email']").type("cy.qa@example.com")
        cy.get("input[id='password']").type("password")
        cy.get("span[class='button-text']").click()

        Cypress.on('uncaught:exception', (err, runnable) => {
        if (err.message.includes("Unexpected token '<'")) {
        return false;
        }
        });


        cy.get("button[class='create-new-app-button col-11  btn btn-primary']").click()
        cy.get("input[placeholder='Enter app name']").type("CREATis")

        Cypress.on('uncaught:exception', (err, runnable) => {
        // Allow known issues to pass without failing the test
        if (
        err.message.includes("Unexpected token '<'") ||
        err.message.includes("You do not have permission") ||
        err.message.includes("An unknown error has occurred")
        ) {
        return false;
        }
        });

        // create aapp
        cy.get("button[form='createAppForm']").click()
        for(let i=0;i<5;i++){
            cy.get("span > button[class='driver-next-btn']").click()
        }
        cy.get("p[class='widgets-manager-header']").contains('Components')
        //validating in above line 

        cy.get("div[class='cursor-pointer']").click()
        cy.get("a[data-cy='back-to-app-option']").click()
        // verify home page
        cy.wait(9000)
        cy.get("div[class='w-100 mb-5 container home-page-content-container']").should("be.visible")

        //on to update           div[data-cy="aoc-card"]
        cy.get('button.tj-primary-btn.tj-text-xsm.edit-button').first().click({ force: true });
        //to rename
        cy.get('div[class="p-0 m-0 d-flex align-items-center"] > div >div > input[class="form-control-plaintext form-control-plaintext-sm  "]').type('add', { force: true });
        //back to home page
        cy.get("div[class='cursor-pointer']").click()
        cy.get("a[data-cy='back-to-app-option']").click()

        // delete
        cy.get('.app-list .home-app-card-header').eq(1).find('svg').first().click()
        cy.get('div[class="field mb-3 field__danger"]').click()
        cy.get('button[data-cy="yes-button"]').should("be.enabled").click()
    })
})