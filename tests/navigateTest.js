fixture("Navigate Example")
    .page('https://devexpress.github.io/testcafe/example/')

test('Navigate Test', async t => {
    await t
    // Use the 'navigateTo'
    .navigateTo('http://www.google.com');
});