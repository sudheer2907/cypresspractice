describe("Test herocuppapp demo website", function () {
  beforeEach(() => {
    cy.visit("https://the-internet.herokuapp.com/");
    cy.get("h1").contains("Welcome to the-internet");
  });

  it("Test file Downloading", function () {
    cy.get('a[href="/download"]').click();
    cy.xpath('//a[contains(text(),"LambdaTest.txt")]').click();
  });
});
