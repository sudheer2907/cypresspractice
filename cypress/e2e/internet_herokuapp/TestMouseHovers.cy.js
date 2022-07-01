describe("Test herocuppapp demo website", function () {
  beforeEach(() => {
    cy.visit("https://the-internet.herokuapp.com/");
    cy.get("h1").contains("Welcome to the-internet");
  });

  it("Test Mouse Hovers", function () {
    cy.get('a[href="/hovers"]').click();
    cy.xpath('//div[@class="figure"][1]/img[1]').realHover();
    //.invoke("show");
    // .trigger("mouseover");
    cy.xpath('//h5[contains(text(),"name: user1")]').should("be.visible");
  });

});