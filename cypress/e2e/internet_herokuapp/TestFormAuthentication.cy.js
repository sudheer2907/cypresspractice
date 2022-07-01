describe("Test herocuppapp demo website", function () {
  beforeEach(() => {
    cy.visit("https://the-internet.herokuapp.com/");
    cy.get("h1").contains("Welcome to the-internet");
  });

  it("Test Form Authentication", function () {
    cy.xpath('//a[contains(text(),"Form Authentication")]').click();
    cy.get("#username").type("admin");
    cy.get("#password").type("admin");
    cy.xpath('//i[contains(text(),"Login")]').click();
    cy.xpath('//div[@id="flash"]').contains("Your username is invalid!");
  });
})