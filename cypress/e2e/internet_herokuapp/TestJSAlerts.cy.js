describe("Test herocuppapp demo website", function () {
  beforeEach(() => {
    cy.visit("https://the-internet.herokuapp.com/");
    cy.get("h1").contains("Welcome to the-internet");
  });

  it("Test javascript alerts", function () {
    cy.get('a[href="/javascript_alerts"]').click();
    cy.get('button[onclick="jsAlert()"]').click();
    cy.on("window:alert", (alertText) => {
      expect(alertText).to.equal("I am a JS Alert");
    });
    cy.on("window:confirm", () => true);
    cy.get("#result").should("have.text", "You successfully clicked an alert");

    cy.get('button[onclick="jsConfirm()"]').click();
    cy.on("window:confirm", (alertText2) => {
      expect(alertText2).to.equal("I am a JS Confirm");
    });
    cy.on("window:confirm", () => false);
    cy.get("#result").should("have.text", "You clicked: Cancel");

    cy.get('button[onclick="jsConfirm()"]').click();
    cy.on("window:confirm", () => true);
    cy.get("#result").should("have.text", "You clicked: Cancel");
  });

});