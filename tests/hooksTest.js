import { t } from "testcafe";

fixture("First Fixture")
.page("http://devexpress.github.io/testcafe/")
.beforeEach(async t => {
    await t
        .maximizeWindow()
        .setTestSpeed(0.1)
        .setPageLoadTimeout(0);
});

test
.page("http://devexpress.github.io/testcafe/example/")
("First test", async t => {
    await t 
        .typeText("#developer-name", "John Doe")
        .click("#macos")
        .click('#submit-button');
});

test
.page("https://devexpress.github.io/testcafe/example/")
("Second Test", async t =>{
    await t
        .typeText("#developer-name","TAU")
        .click("#macos")
        .click("#submit-button");
});