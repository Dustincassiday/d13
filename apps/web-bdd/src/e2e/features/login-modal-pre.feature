Feature: Login Modal
  
  As a user 
  I would like to log in to the website 
  So that I can manage my account

  Background: Open the login modal
    Given I am on the main page
    And I am not logged in
    When I click on the "Login" button 

  Scenario: Successful login
    When I enter valid login credentials
    Then I should see the "Logout" button
    And I should not see the "Login" button
    And I should not see the "Signup" button

  Scenario: Error on required fields
    When I leave the email and password fields blank
    And I click on the "Login" button
    Then the "email" input should have an error
    And the "password" input should have an error

  Scenario: Error on invalid email format
    When I enter an invalid email affress into the "email" field
    Then the email input should have an error that states "Please enter a correct email format"

  Scenario: Error on invalid login
    When I enter invalid login credentials
    And I click on the "Login" button
    Then I should see the "Login Failed" alert

  Scenario: Error on locked account
    When I enter login credentials for an account that has been locked
    And I click on the "Login" button
    Then I should see the "Account Locked" alert

  Scenario: New User link clicked
    When I click on the modal "New User" button
    Then the "Login Modal" should close
    And I should see the "Signup" modal

  Scenario: Forgot Password link clicked
    When I click on the modal "Forgot Password" button
    Then the "Login Modal" should close
    Then I should see the "Reset Password" modal
 
