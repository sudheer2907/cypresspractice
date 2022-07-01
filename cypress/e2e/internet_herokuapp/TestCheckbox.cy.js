describe("Testing herocuppapp demo website", function () {
  beforeEach(() => {
    cy.visit("https://the-internet.herokuapp.com/");
    cy.get("h1").contains("Welcome to the-internet");
  });

  it("Test checkbox", function () {
    cy.contains("Checkboxes").click();
    cy.get("h3").should("be.visible");
    cy.get("input").first().click();
    cy.get("input").last().should("be.checked");
  });

  it("Test Checkboxed using xpath", function () {
    cy.contains("Checkboxes").click();
    cy.xpath("//form[@id='checkboxes']/input[1]")
      .click()
      .should("be.checked");
  });
});
