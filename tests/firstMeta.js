fixture.meta('version', '1') ("MyFixture")
    .page ("https://devexpress.github.io/testcafe/example/");
test.meta('env', 'production')
    .page ("https://devexpress.github.io/testcafe/example/")
        ("Second test", async t => {
    // Starts at http://devexpress.github.io/testcafe/blog/
        await t
            .typeText("#developer-name","TAU")
            .click("#macos")
            .click("#submit-button");
});