@featureTag # feature level tag
Feature:Login Functionality

  Scenario: Login with valid credentials
    #Given navigate to Medunna.com login page
    When enter valid credentials
    And click on login button
    Then verify dashboard is displayed
    #And quit the browser
  @invalidCred  //scenerio level tag

  Scenario: Login with invalid credentials
    #Given navigate to Medunna.com login page
    When enter invalid credentials
    And click on login button
    Then verify error message
    #And quit the browser

  @smoke @regression #adding multiple scenario level tags
  Scenario: Login with empty username
    #Given navigate to Medunna.com login page
    When enter password
    And click on login button
    Then verify error message for empty username
    #And quit the browser

