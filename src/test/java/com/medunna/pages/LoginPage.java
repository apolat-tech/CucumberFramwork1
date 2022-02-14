package com.medunna.pages;

import com.medunna.utils.CommonMethods;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class LoginPage extends CommonMethods {
    @FindBy(xpath = "//*[@id=\"login-item\"]/span")
    public WebElement signIn;
    @FindBy(xpath = "//*[@id=\"username\"]")
    public WebElement usernameBox;
    @FindBy(id = "password")
    public WebElement passwordBox;
    @FindBy(xpath = "//*[@id=\"login-page\"]/div/form/div[3]/button[2]/span")
    public WebElement LoginButton;
    @FindBy(xpath = "//*[@id=\"login-page\"]/div/form/div[2]/div[1]/div[2]/div[1]/label")
    public WebElement errorMsg;
    @FindBy(xpath = "//*[@id=\"login-page\"]/div/form/div[2]/div[1]/div[2]/div[1]/div")
    public WebElement errorMsgNoUsername;

    //Constructors to initialize the variables
    public LoginPage() {
        PageFactory.initElements(driver, this);
    }

    public void login(String username, String password) {
        sendText(usernameBox, username);
        sendText(passwordBox, password);

    }

    public void clickOnLoginBtn() {
        click(LoginButton);
    }

    public String getErrorMessageText() {

        return errorMsg.getText();
    }
    public String getErrorMessageNoUsernameText(){
        return errorMsgNoUsername.getText();
    }
}
