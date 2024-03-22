fixture ("MyFixture")
    .page ("https://devexpress.github.io/testcafe/example/");
test.page ("https://devexpress.github.io/testcafe/blog/")
    ('My test', async t => {
    // Starts at http://devexpress.github.io/testcafe/blog/
        await t
            .typeText("#developer-name","TAU")
            .click("#macos")
            .click("#submit-button");
});