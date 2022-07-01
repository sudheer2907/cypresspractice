describe("Testing herocuppapp demo website", function () {
  beforeEach(() => {
    cy.visit("https://the-internet.herokuapp.com/");
    cy.get("h1").contains("Welcome to the-internet");
  });

  it("Test Add Remove button feature", function () {
    cy.get('a[href*="add_remove_elements"]').click();
    cy.contains("Add Element").click();
    cy.contains("Delete").should("be.visible");
    cy.contains("Delete").click();
  });
});
