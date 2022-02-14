package com.medunna.pages;

import com.medunna.utils.CommonMethods;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class AddUserPage extends CommonMethods {

    @FindBy(xpath = "//*[@id=\"admin-menu\"]/div/a/span")
    public WebElement userManagement;

    @FindBy(xpath = "//*[@id=\"user-management-page-heading\"]/a/span")
    public WebElement createNewUser;

    @FindBy(id = "login")
    public WebElement userLogin;

    @FindBy(id = "firstName")
    public WebElement firstName;

    @FindBy(id = "lastName")
    public WebElement lastName;

    @FindBy(id = "email")
    public WebElement email;

    @FindBy(id = "ssn")
    public WebElement ssn;

    @FindBy(xpath = "//*[@id=\"authorities\"]/option[2]")
    public WebElement userRole;

    @FindBy(xpath = "//*[@id=\"app-view-container\"]/div/div/div/div/div[2]/div/form/button")
    public WebElement saveBtn;

    @FindBy(xpath = "//*[@id=\"app-view-container\"]/div/div/div/div/div[1]/table/thead/tr/th[8]/span")
    public WebElement createdDate;

    //Constructors to initialize the variables
    public AddUserPage() {
        PageFactory.initElements(driver, this);
    }

    public void addUser(String login1, String firstName1, String lastName1,
                        String email1, String ssn1) {
        jsClick(userManagement);
        jsClick(createNewUser);
        sendText(userLogin, login1);
        sendText(firstName, firstName1);
        sendText(lastName, lastName1);
        sendText(email, email1);
        sendText(ssn, ssn1);
        userRole.click();
    }

    public void clickOnSaveBtn() {
        jsClick(saveBtn);
    }

    public void clickCreatedDate() {
        jsClick(createdDate);
    }
    //public void


}
