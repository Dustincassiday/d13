  Feature: Navigation Feature

  Testing features of the Nav bar
  
  Scenario: Navigate to the contact page
    Given I open the "/" page
    When I click on the "contact" link
    Then I should see "contact" in the url
    And I should see "Contact Us" in the "h1"

  Scenario: Open the login modal
    Given I open the "/" page
    When I click on the "Login" button
    Then I should see the "Login" modal

  Scenario: Open the Signup modal
    Given I open the "/" page
    When I click on the "Signup" button
    Then I should see the "Signup" modal