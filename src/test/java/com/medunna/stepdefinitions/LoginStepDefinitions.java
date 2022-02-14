package com.medunna.stepdefinitions;

import com.medunna.utils.CommonMethods;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;

public class LoginStepDefinitions extends CommonMethods {
    @Given("navigate to Medunna.com login page")
    public void navigate_to_medunna_com_login_page() {
        setUp();
    }

    @When("enter valid credentials")
    public void enter_valid_credentials() {
        loginPage.login("apl", "Green4321!");
    }

    @When("click on login button")
    public void click_on_login_button() {
        loginPage.clickOnLoginBtn();
    }

    @Then("verify dashboard is displayed")
    public void verify_dashboard_is_displayed() {
        Assert.assertTrue(dashboardPage.welcomeMessage.isDisplayed());
    }

    @Then("quit the browser")
    public void quit_the_browser() {
        tearDown();
    }

    @When("enter invalid credentials")
    public void enter_invalid_credentials() {
        loginPage.login("apl2", "Gre1en4321!");
    }

    @Then("verify error message")
    public void verify_error_message() {
        Assert.assertEquals("Verifying Error Message","Username", loginPage.getErrorMessageText());

    }

    @When("enter password")
    public void enter_password() {
        loginPage.login("", "Green4321!");
    }

    @Then("verify error message for empty username")
    public void verify_error_message_for_empty_username() {
        Assert.assertEquals("Verifying Error Message","Username cannot be empty!", loginPage.getErrorMessageNoUsernameText());

    }

}
