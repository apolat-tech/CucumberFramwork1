package com.medunna.runners;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(features = "@target/FailedTests.txt",
        glue = "com/medunna/stepdefinitions",
        plugin = {"pretty",
                "html:target/cucumber-default-reports",
                "rerun:target/FailedTest.txt"}
)

public class FailedRunner {


}
