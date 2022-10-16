import { When } from '@badeball/cypress-cucumber-preprocessor';

When('I click on the modal Login button', () => {
  cy.get(`[data-cy="modal-login-btn"]`).click();
});
