Feature: Contact
  Testing features of the Contact page

  Scenario: Go directly to the contact page
    Given I open the "/contact" page
    Then I should see "contact" in the url
    And I should see "Contact Us" in the "header"


