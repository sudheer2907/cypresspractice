describe("Test herocuppapp demo website", function () {
  beforeEach(() => {
    cy.visit("https://the-internet.herokuapp.com/");
    cy.get("h1").contains("Welcome to the-internet");
  });

  it("Test DropDown", function () {
    cy.get('a[href="/dropdown"]').click();
    cy.get("#dropdown").select("Option 1");
    cy.get("#dropdown").select("Option 2");
  });
});
