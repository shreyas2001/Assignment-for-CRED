// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
        Cypress.on('uncaught:exception', (err, runnable) => {
         if (err.message.includes("Unexpected token 'U'")) {
        return false; // prevent Cypress from failing the test
    }
    });

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

                Cypress.on('uncaught:exception', (err, runnable) => {
        if (err.message.includes("Unexpected token '<'")) {
        return false;
        }
        });

        Cypress.on('uncaught:exception', (err, runnable) => {
  // Prevent failing the test for known 403 permission errors or HTML responses
  if (
    err.message.includes('You do not have permission') ||
    err.message.includes("Unexpected token '<'")
  ) {
    return false;
  }
});