///<ReferenceType = "cypress">


describe("ToolJet pplication Verifcation",()=>{
    it("ToolJet login Page",()=>{
        // Login directly with commands
        cy.loginToToolJet("cy.qa@example.com","password")

        // click on cret btn
        cy.get("button[class='create-new-app-button col-11  btn btn-primary']").click()

        //entering app name
        cy.get("input[placeholder='Enter app name']").type("rzLMI")


        // create aapp
        cy.get("button[form='createAppForm']").click()

        // api validation for 2nd task
        cy.request("GET","https://v3-lts-eetestsystem.tooljet.com/api/license/access").then((response)=>{
            expect(response.status).to.eq(200)

            expect(response.body.ai).to.be.true
        })

        // all in one step for acceptingg next
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

        //to renames
        cy.wait(7000);
        cy.textBoxInApplication().type('adding9', { force: true });
        cy.get('p[class="mb-0 text-center"]').first().click();

        //back to home page
        cy.get("div[class='cursor-pointer']").click()
        cy.get("a[data-cy='back-to-app-option']").click()

        // delete
        cy.threeDotsForDeletingApp()
        cy.deletingPreBeforeStep().click()
        cy.get('div[role="tooltip"] > div > div > div[class="field mb-3 field__danger"] > span').should("be.enabled").click()
    })
})
