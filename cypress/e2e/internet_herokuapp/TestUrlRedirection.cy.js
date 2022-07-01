describe("Test herocuppapp demo website", function () {
  beforeEach(() => {
    cy.visit("https://the-internet.herokuapp.com/");
    cy.get("h1").contains("Welcome to the-internet");
  });

  it("Test Redirection Link", function () {
    cy.get('a[href="/redirector"]').click();
    cy.get("#redirect").click();
    cy.xpath('//h3[contains(text(),"Status Codes")]').should("be.visible");
  });
});