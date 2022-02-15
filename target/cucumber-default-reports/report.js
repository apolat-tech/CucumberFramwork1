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
formatter.scenarioOutline({
  "name": "Adding multiple users",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@regression"
    }
  ]
});
formatter.step({
  "name": "enter valid credentials",
  "keyword": "When "
});
formatter.step({
  "name": "click on login button",
  "keyword": "And "
});
formatter.step({
  "name": "Enter \"\u003cUserLogin\u003e\", \"\u003cFirstName\u003e\",\"\u003cLastName\u003e\",\"\u003cEmail\u003e\",\"\u003cSsn\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "Click Save Button",
  "keyword": "And "
});
formatter.step({
  "name": "verify \"\u003cEmail\u003e\" added successfully",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "UserLogin",
        "FirstName",
        "LastName",
        "Email",
        "Ssn"
      ]
    },
    {
      "cells": [
        "user2",
        "Joe2",
        "Doe2",
        "jdoe2@email.com",
        "456-65-5444"
      ]
    },
    {
      "cells": [
        "user3",
        "Joe3",
        "Doe3",
        "jdoe3@email.com",
        "455-65-5444"
      ]
    },
    {
      "cells": [
        "user4",
        "Joe4",
        "Doe4",
        "jdoe4@email.com",
        "454-65-5444"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Adding multiple users",
  "description": "",
  "keyword": "Scenario Outline",
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
  "name": "Enter \"user2\", \"Joe2\",\"Doe2\",\"jdoe2@email.com\",\"456-65-5444\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.medunna.stepdefinitions.AddUserStepDefinitions.enter(java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
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
  "name": "verify \"jdoe2@email.com\" added successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "com.medunna.stepdefinitions.AddUserStepDefinitions.verify_added_successfully(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded0.png", "Adding multiple users");
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Adding multiple users",
  "description": "",
  "keyword": "Scenario Outline",
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
  "name": "Enter \"user3\", \"Joe3\",\"Doe3\",\"jdoe3@email.com\",\"455-65-5444\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.medunna.stepdefinitions.AddUserStepDefinitions.enter(java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
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
  "name": "verify \"jdoe3@email.com\" added successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "com.medunna.stepdefinitions.AddUserStepDefinitions.verify_added_successfully(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded1.png", "Adding multiple users");
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Adding multiple users",
  "description": "",
  "keyword": "Scenario Outline",
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
  "name": "Enter \"user4\", \"Joe4\",\"Doe4\",\"jdoe4@email.com\",\"454-65-5444\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.medunna.stepdefinitions.AddUserStepDefinitions.enter(java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
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
  "name": "verify \"jdoe4@email.com\" added successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "com.medunna.stepdefinitions.AddUserStepDefinitions.verify_added_successfully(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded2.png", "Adding multiple users");
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
formatter.embedding("image/png", "embedded3.png", "Login with valid credentials");
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
formatter.embedding("image/png", "embedded4.png", "Login with invalid credentials");
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
formatter.embedding("image/png", "embedded5.png", "Login with empty username");
formatter.after({
  "status": "passed"
});
});