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
        cy.get("input[placeholder='Enter app name']").type("TRIAL98")

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
            cy.get("button[class='driver-next-btn']").click()
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
        cy.wait(7000);
        cy.get("#app > div > div.main-wrapper > div.wrapper.editor > div.header > header > div > div > div.header-inner-wrapper.d-flex > div.flex-grow-1.d-flex.align-items-center > div.p-0.m-0.d-flex.align-items-center > div.global-settings-app-wrapper.p-0.m-0 > div > input").type('add', { force: true });
        //back to home page
        cy.get("div[class='cursor-pointer']").click()
        cy.get("a[data-cy='back-to-app-option']").click()

        // delete
        cy.get('.app-list .home-app-card-header').eq(1).find('svg').first().click()
        cy.get('#app > div > div.main-wrapper > div.row.m-auto > div.col > div > div > div > div.col.home-page-content.bg-light-gray > div.w-100.mb-5.container.home-page-content-container > div.app-list > div > div > div:nth-child(1) > div > div > div.row.home-app-card-header > div > div:nth-child(2) > div > svg > path').click()
        cy.get('div[role="tooltip"] > div > div > div[class="field mb-3 field__danger"] > span').should("be.enabled").click()
    })
})
