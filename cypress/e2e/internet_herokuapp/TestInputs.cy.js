describe("Test herocuppapp demo website", function () {
  beforeEach(() => {
    cy.visit("https://the-internet.herokuapp.com/");
    cy.get("h1").contains("Welcome to the-internet");
  });

  it("Test Inputs", function () {
    cy.get('a[href="/inputs"]').click();
    cy.get('input[type="number"]').type("45");
  });

});