@featureTag # feature level tag
Feature:Add User Functionality

#  @regression
#Scenario: Add a new user
##Given navigate to Medunna.com login page
#When enter valid credentials
#And click on login button
#And Fill out the form
#And Click Save Button
#Then verify the user is created

  @regression
  Scenario Outline: Adding multiple users
#Given navigate to Medunna.com login page
    When enter valid credentials
    And click on login button
    And Enter "<UserLogin>", "<FirstName>","<LastName>","<Email>","<Ssn>"
    And Click Save Button
    Then verify "<Email>" added successfully
    Examples:
    |UserLogin  |FirstName  |LastName |Email  |Ssn  |
    |user2      |Joe2       |Doe2     |jdoe2@email.com|456-65-5444|
    |user3      |Joe3       |Doe3     |jdoe3@email.com|455-65-5444|
    |user4      |Joe4       |Doe4     |jdoe4@email.com|454-65-5444|

