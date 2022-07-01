describe("Testing herocuppapp demo website", function () {
  beforeEach(() => {
    cy.visit("https://the-internet.herokuapp.com/");
    cy.get("h1").contains("Welcome to the-internet");
  });

  it("Test Broken Images", function () {
    cy.get('a[href*="broken_images"]').click();
    cy.get("img").each(($img) => {
      cy.wrap($img).scrollIntoView().should("be.visible");
      expect($img[0].naturalWidth).to.be.greaterThan(0);
      expect($img[0].naturalHeight).to.be.greaterThan(0);
    });
  });
});
