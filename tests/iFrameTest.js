import { Selector } from "testcafe";

const iframeName = Selector('iframe#mce_0_ifr');
const textArea = Selector('body#tinymce.mce-content-body');

fixture("IFrame Fixture")
.page('https://dthe-internet.herokuapp.com/iframe/');

test("iFrame test", async t => {
    await t 
    .switchToIframe(iframeName)
    .click(textArea)
    .pressKey("ctrl+a delete")
    .typeText(textArea, `Hello TestCafe!`)
    .expect(textArea.innerText).contains("Hello")
    .switchToMainWindow();
})