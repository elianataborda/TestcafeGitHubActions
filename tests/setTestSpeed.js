fixture("Set Speed Fixture")
.page("http://devexpress.github.io/testcafe/example/")

test("Set Speed test", async t => {
    await t 
        .setTestSpeed(0.01)
        .typeText("#developer-name", "John Doe")
        .click("#macos")
        .click('#submit-button');
});