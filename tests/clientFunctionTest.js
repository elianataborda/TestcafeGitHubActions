import { ClientFunction } from 'testcafe';

const developerName = Selector("#developer-name");
const osOption = Selector("#macos");
const submitButton = Selector("#submit-button");

//Returns the URL of the current web page
const getPageUrl = ClientFunction(() => window.location.href);

fixture ("My Fixture")
    .page ("http://devexpress.github.io/testcafe/example");



test('Check the page URL', async t => {
    await t
        .typeText(developerName,"TAU")
        .click(osOption)
        .click(submitButton)
        .expect(getPageUrl()).contains('thank-you'); //Checks if the current page URL contains the 'thank-you' string
});