// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('loginToToolJet', (email, password) => {
  cy.visit("https://cetestsystem.tooljet.com/testcypress")
  cy.get("[data-cy='sign-in-header']").should("be.visible")
  cy.get("input[name='email']").type(email)
  cy.get("input[id='password']").type(password)
  cy.get("span[class='button-text']").click()
})

Cypress.Commands.add('textBoxInApplication',()=>{
    return cy.get("#app > div > div.main-wrapper > div.wrapper.editor > div.header > header > div > div > div.header-inner-wrapper.d-flex > div.flex-grow-1.d-flex.align-items-center > div.p-0.m-0.d-flex.align-items-center > div.global-settings-app-wrapper.p-0.m-0 > div > input")
})

Cypress.Commands.add("threeDotsForDeletingApp",()=>{
    return cy.get("#app > div > div.main-wrapper > div.row.m-auto > div.col > div > div > div > div.col.home-page-content.bg-light-gray > div.w-100.mb-5.container.home-page-content-container > div.app-list > div > div > div:nth-child(1) > div > div > div.row.home-app-card-header > div > div:nth-child(2)").trigger("mouseover")
})

Cypress.Commands.add("deletingPreBeforeStep",()=>{
    return cy.get("#app > div > div.main-wrapper > div.row.m-auto > div.col > div > div > div > div.col.home-page-content.bg-light-gray > div.w-100.mb-5.container.home-page-content-container > div.app-list > div > div > div:nth-child(1) > div > div > div.row.home-app-card-header > div > div:nth-child(2) > div > svg")
})