@featureTag # feature level tag
Feature:Add User Functionality

  @regression
Scenario: Add a new user
#Given navigate to Medunna.com login page
When enter valid credentials
And click on login button
And Fill out the form
And Click Save Button
Then verify the user is created