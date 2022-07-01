describe("Test herocuppapp demo website", function () {
  beforeEach(() => {
    cy.visit("https://the-internet.herokuapp.com/");
    cy.get("h1").contains("Welcome to the-internet");
  });

  it("Test Menu bar on the Home Page", function () {
    cy.get('a[href="/floating_menu"]').click();
    cy.get("#menu").then((menu) => {
      expect(menu[0]).to.contain.text("Home");
      expect(menu[0]).to.contain.text("News");
      expect(menu[0]).to.contain.text("Contact");
      expect(menu[0]).to.contain.text("About");
    });
  });

})