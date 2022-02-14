package com.medunna.runners;


import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(features = "src/test/resources/features",//need to give a path
        glue = "com/medunna/stepdefinitions",//we need to glue our step definitions
        dryRun = false,
//When set as true, will run over the feature steps and reveals the unimplemented step.
        tags = {"@featureTag"},//adding tag
        strict = false,//when set is true, will fail the execution when undefined step is present.
        plugin = {"pretty",//will print executed steps inside the console
                "html:target/cucumber-default-reports",//generate default html report
                "rerun:target/FailedTest.txt",//generates a txt file with failed test only
                "json:target/cucumber.json"//generates json reports

        }
)
public class TestRunner {


}
