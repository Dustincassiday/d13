Feature: Login Modal
  
  As a user 
  I would like to log in to the website 
  So that I can manage my account

  Background: Open the login modal
    Given I open the "/" page
    When I click on the "login" nav item

  Scenario: Successful login
    When I type "registered@email" into the "email" input
    And I type "password123" into the "password" input
    And I click on the modal "Login" button
    Then I should see the "logout" nav item
    And I should not see the "login" nav item
    And I should not see the "signup" nav item

  Scenario: Error on empty fields
    When the "email" input is empty
    And the "password" input is empty
    When I click on the modal "Login" button
    Then the "email" input should have an error
    And the "password" input should have an error

  Scenario: Error on invalid email format
    When I type "invalid email address" into the "email" input
    And I type "any password" into the "password" input
    And I click on the modal "Login" button
    Then the "email" input error should say "Please enter a correct email format"

  Scenario: Error on invalid login
    When I type "error@error" into the "email" input
    And I type "anyPass" into the "password" input
    And I click on the modal "Login" button
    Then I should see a "danger" alert

  Scenario: Error on locked account
    When I type "locked@error" into the "email" input
    And I type "anyPass" into the "password" input
    And I click on the modal "Login" button
    Then I should see a "danger" alert

  Scenario: New User link clicked
    When I click on the modal "New User" button
    Then I should see the "Signup" modal
    And I should not see the "Login" modal

  Scenario: Forgot Password link clicked
    When I click on the modal "Forgot Password" button
    Then I should see the "Reset Password" modal
    And I should not see the "Login" modal
 
