import {Selector} from  'testcafe';

const developerName = Selector( '#developer-name' );
const osOption       = Selector( '#macos');
const submitButton  = Selector( '#submit-button' );
fixture("First Fixture")
.page("http://devexpress.github.io/testcafe/example/")

test("First test", async t => {
    await t 
        .typeText(developerName, "John Doe")
        .click(osOption)
        .click(submitButton);
});