describe("Test herocuppapp demo website", function () {
  beforeEach(() => {
    cy.visit("https://the-internet.herokuapp.com/");
    cy.get("h1").contains("Welcome to the-internet");
  });

  it("Test JQueryUI Menu", function () {
    cy.get('a[href="/jqueryui/menu"]').click();
    cy.xpath('//a[normalize-space()="Enabled"]').click();
    cy.xpath('//a[normalize-space()="Downloads"]').click();
    cy.get('a[href="/download/jqueryui/menu/menu.pdf"]').should("be.visible");
    cy.get('a[href="/download/jqueryui/menu/menu.csv"]').should("be.visible");
    cy.get('a[href="/download/jqueryui/menu/menu.xls"]').should("be.visible");
  });

});