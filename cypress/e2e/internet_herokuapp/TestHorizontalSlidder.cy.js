describe("Test herocuppapp demo website", function () {
  beforeEach(() => {
    cy.visit("https://the-internet.herokuapp.com/");
    cy.get("h1").contains("Welcome to the-internet");
  });

  it("Test Horizontal Slider", function () {
    cy.get('a[href="/horizontal_slider"]').click();
    cy.get('input[value="0"]').invoke("val", 3).trigger("change");
    cy.get("#range").contains(3);
  });

});