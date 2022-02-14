package com.medunna.pages;

import com.medunna.utils.CommonMethods;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class DashboardPage extends CommonMethods {

    @FindBy(xpath="//*[@id=\"hero\"]/div/h1")
    public WebElement welcomeMessage;
    public DashboardPage(){
        PageFactory.initElements(CommonMethods.driver,this);
    }

}
