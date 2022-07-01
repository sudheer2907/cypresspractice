describe("Test herocuppapp demo website", function () {
  beforeEach(() => {
    cy.visit("https://the-internet.herokuapp.com/");
    cy.get("h1").contains("Welcome to the-internet");
  });

  it("Test Key Presses", function () {
    cy.get('a[href="/key_presses"]').click();
    cy.get("#target").click();
    cy.get("#target").type("{enter}");
    cy.get("#target").type("{backspace}");
    cy.get("#target").type("{del}");
    cy.get("#target").type("{downArrow}");
  });

});