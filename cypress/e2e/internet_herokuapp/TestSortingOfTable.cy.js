describe("Test herocuppapp demo website", function () {
  beforeEach(() => {
    cy.visit("https://the-internet.herokuapp.com/");
    cy.get("h1").contains("Welcome to the-internet");
  });

  it("Test Sorting of Table", function () {
    cy.get('a[href="/tables"]').click();
    cy.xpath(
      '//table[@id="table1"]//span[contains(text(),"Last Name")]'
    ).click();
    cy.get('th[class="header headerSortDown"] span').should("be.visible");
    cy.xpath(
      '//table[@id="table1"]//span[contains(text(),"Last Name")]'
    ).click();
    cy.get('th[class="header headerSortUp"] span').should("be.visible");

    cy.xpath('//table[@id="table1"]//tbody/tr/td[3]').contains(
      "tconway@earthlink.net"
    );
    cy.xpath('//table[@id="table1"]//tbody/tr/td[3]').contains(
      "jdoe@hotmail.com"
    );
    cy.xpath('//table[@id="table1"]//tbody/tr/td[5]').contains(
      "http://www.jdoe.com"
    );
  });

});