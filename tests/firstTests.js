fixture("First Fixture")
.page("http://devexpress.github.io/testcafe/example/")

test("First test", async t => {
    await t 
        .typeText("#developer-name", "John Doe")
        .click("#macos")
        .click('#submit-button');
});