fixture("Set Page Timeout Fixture")
.page("http://devexpress.github.io/testcafe/example/")

test("Set page timeout test", async t => {
    await t 
    .setPageLoadTimeout(0)
    .navigateTo('http://devexpress.github.io/testcafe/');
        
});