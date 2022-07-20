import BaseHelper from "../basehelper/BaseHelper";

class InputFormsTabHelper extends BaseHelper {

  loginToThePage() {
    cy.visit("https://demo.seleniumeasy.com/");
    cy.xpath('//a[contains(text(),"No, thanks!")]').click();
  };

}

export default InputFormsTabHelper