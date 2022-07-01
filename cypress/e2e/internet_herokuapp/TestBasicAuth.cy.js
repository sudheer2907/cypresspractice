describe("Testing herocuppapp demo website", function () {
  beforeEach(() => {
    cy.visit("https://the-internet.herokuapp.com/");
    cy.get("h1").contains("Welcome to the-internet");
  });

  it("Test Basic Auth", function () {
    cy.get('a[href*="basic_auth"]').click();
  });
});
