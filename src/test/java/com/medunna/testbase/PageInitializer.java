package com.medunna.testbase;

import com.medunna.pages.AddUserPage;
import com.medunna.pages.DashboardPage;
import com.medunna.pages.LoginPage;

public class PageInitializer extends BaseClass {

    public static LoginPage loginPage;
    public static DashboardPage dashboardPage;
    public static AddUserPage addUserPage;

    public static void initializePageObjects(){
        loginPage= new LoginPage();
        dashboardPage = new DashboardPage();
        addUserPage=new AddUserPage();
    }
}
