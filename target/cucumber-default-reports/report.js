$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/addUser.feature");
formatter.feature({
  "name": "Add User Functionality",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@featureTag"
    },
    {
      "name": "#"
    },
    {
      "name": "feature"
    },
    {
      "name": "level"
    },
    {
      "name": "tag"
    }
  ]
});
formatter.scenario({
  "name": "Add a new user",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@featureTag"
    },
    {
      "name": "#"
    },
    {
      "name": "feature"
    },
    {
      "name": "level"
    },
    {
      "name": "tag"
    },
    {
      "name": "@regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "enter valid credentials",
  "keyword": "When "
});
formatter.match({
  "location": "com.medunna.stepdefinitions.LoginStepDefinitions.enter_valid_credentials()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on login button",
  "keyword": "And "
});
formatter.match({
  "location": "com.medunna.stepdefinitions.LoginStepDefinitions.click_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Fill out the form",
  "keyword": "And "
});
formatter.match({
  "location": "com.medunna.stepdefinitions.AddUserStepDefinitions.fill_out_the_form()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Save Button",
  "keyword": "And "
});
formatter.match({
  "location": "com.medunna.stepdefinitions.AddUserStepDefinitions.click_Save_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the user is created",
  "keyword": "Then "
});
formatter.match({
  "location": "com.medunna.stepdefinitions.AddUserStepDefinitions.verify_the_user_is_created()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded0.png", "Add a new user");
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/login.feature");
formatter.feature({
  "name": "Login Functionality",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@featureTag"
    },
    {
      "name": "#"
    },
    {
      "name": "feature"
    },
    {
      "name": "level"
    },
    {
      "name": "tag"
    }
  ]
});
formatter.scenario({
  "name": "Login with valid credentials",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@featureTag"
    },
    {
      "name": "#"
    },
    {
      "name": "feature"
    },
    {
      "name": "level"
    },
    {
      "name": "tag"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "enter valid credentials",
  "keyword": "When "
});
formatter.match({
  "location": "com.medunna.stepdefinitions.LoginStepDefinitions.enter_valid_credentials()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on login button",
  "keyword": "And "
});
formatter.match({
  "location": "com.medunna.stepdefinitions.LoginStepDefinitions.click_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify dashboard is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "com.medunna.stepdefinitions.LoginStepDefinitions.verify_dashboard_is_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded1.png", "Login with valid credentials");
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Login with invalid credentials",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@featureTag"
    },
    {
      "name": "#"
    },
    {
      "name": "feature"
    },
    {
      "name": "level"
    },
    {
      "name": "tag"
    },
    {
      "name": "@invalidCred"
    },
    {
      "name": "//scenerio"
    },
    {
      "name": "level"
    },
    {
      "name": "tag"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "enter invalid credentials",
  "keyword": "When "
});
formatter.match({
  "location": "com.medunna.stepdefinitions.LoginStepDefinitions.enter_invalid_credentials()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on login button",
  "keyword": "And "
});
formatter.match({
  "location": "com.medunna.stepdefinitions.LoginStepDefinitions.click_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify error message",
  "keyword": "Then "
});
formatter.match({
  "location": "com.medunna.stepdefinitions.LoginStepDefinitions.verify_error_message()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded2.png", "Login with invalid credentials");
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Login with empty username",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@featureTag"
    },
    {
      "name": "#"
    },
    {
      "name": "feature"
    },
    {
      "name": "level"
    },
    {
      "name": "tag"
    },
    {
      "name": "@smoke"
    },
    {
      "name": "@regression"
    },
    {
      "name": "#adding"
    },
    {
      "name": "multiple"
    },
    {
      "name": "scenario"
    },
    {
      "name": "level"
    },
    {
      "name": "tags"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "enter password",
  "keyword": "When "
});
formatter.match({
  "location": "com.medunna.stepdefinitions.LoginStepDefinitions.enter_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on login button",
  "keyword": "And "
});
formatter.match({
  "location": "com.medunna.stepdefinitions.LoginStepDefinitions.click_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify error message for empty username",
  "keyword": "Then "
});
formatter.match({
  "location": "com.medunna.stepdefinitions.LoginStepDefinitions.verify_error_message_for_empty_username()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded3.png", "Login with empty username");
formatter.after({
  "status": "passed"
});
});