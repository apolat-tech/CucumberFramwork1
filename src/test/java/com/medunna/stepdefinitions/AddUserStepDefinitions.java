package com.medunna.stepdefinitions;

import com.medunna.pages.AddUserPage;
import com.medunna.utils.CommonMethods;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

import java.util.List;

public class AddUserStepDefinitions extends CommonMethods {
    @When("Fill out the form")
    public void fill_out_the_form() {
        addUserPage.addUser("email11@email11.com", "Jack1",
                "Cool1", "jcool@email.com",
                "333-33-4444");
    }

    @When("Click Save Button")
    public void click_Save_Button() {
        addUserPage.clickOnSaveBtn();
    }

    @Then("verify the user is created")
    public void verify_the_user_is_created() {
        addUserPage.clickCreatedDate();
        List<WebElement> rows = driver.findElements(By.xpath("//*[@id=\"app-view-container\"]/div/div/div/div/div[1]/table/tbody/tr"));
        for (int i = 1; i < rows.size(); i++) {
            String rowText = rows.get(i).getText();
            if (rowText.contains("email11@email11.com")) {
                Assert.assertEquals("Verifying Error Message", "email11@email11.com", rowText.substring(5, 24));
                break;
            }
        }
    }
    @When("Enter {string}, {string},{string},{string},{string}")
    public void enter(String login1, String fistName1, String lastName1, String email1, String ssn1) {
addUserPage.addUser(login1,fistName1,lastName1,email1,ssn1);
    }

    @Then("verify {string} added successfully")
    public void verify_added_successfully(String string) {
        }


}
