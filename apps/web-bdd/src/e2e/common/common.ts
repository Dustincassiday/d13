import { When, Then, Given } from '@badeball/cypress-cucumber-preprocessor';

// GIVEN
Given('I open the {string} page', (path: string) => {
  cy.visit(path);
});

// WHEN
When('I click on the {string} link', (link: string) => {
  cy.get(`a[href*="${link}"]`).click();
});

When('I click on the {string} modal link', (link: string) => {
  cy.get(`a[href*="${link}"]`).click();
});

When('I click on the {string} nav item', (id: string) => {
  cy.get(`[data-cy="${id}-nav"]`).click();
});

When('I click on the {string} button', (id: string) => {
  cy.get(`[data-cy="${id}-btn"]`).click();
});

When('I click on the modal {string} button', (id: string) => {
  cy.get(`[data-cy="modal-btn"]`).contains(id).click();
});

When('I type {string} into the {string} input', (text: string, id: string) => {
  cy.get(`[data-cy="${id}-input"]`).clear().type(text);
});

When('the {string} input is empty', (id: string) => {
  cy.get(`[data-cy="${id}-input"]`).clear();
});

Then('I should see {string} in the url', (path: string) => {
  cy.url().should('include', path);
});

Then('I should see {string} in the title', (title: string) => {
  cy.title().should('include', title);
});

Then(
  'I should see {string} in the {string}',
  (text: string, attribute: string) => {
    cy.get(`[data-cy="${attribute}"]`).should('have.text', text);
  }
);

Then('I should see the {string} modal', (titleText: string) => {
  cy.get('[data-cy="modal-title"]').contains(titleText).should('exist');
});

Then('I should not see the {string} modal', (titleText: string) => {
  cy.get('[data-cy="modal-title"]').contains(titleText).should('not.exist');
});

Then(
  'the {string} input error should say {string}',
  (id: string, text: string) => {
    cy.get(`[data-cy="${id}-error"]`).should('contain.text', text);
  }
);

Then('the {string} input should have an error', (id: string) => {
  cy.get(`[data-cy="${id}-error"]`).should('exist');
});

Then('I should see a {string} alert', (id: string) => {
  cy.get(`.alert-${id}[data-cy="alert"]`).should('exist');
});

Then('I should see the {string} nav item', (id: string) => {
  cy.get(`[data-cy="${id}-nav"]`).should('exist');
});

Then('I should not see the {string} nav item', (id: string) => {
  cy.get(`[data-cy="${id}-nav"]`).should('not.exist');
});
