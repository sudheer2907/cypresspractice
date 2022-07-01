describe("Test herocuppapp Dummy website", function () {
  beforeEach(() => {
    cy.visit("https://the-internet.herokuapp.com/");
    cy.get("h1").contains("Welcome to the-internet");
  });

  it("Test A/B testing label text is displayed", function () {
    cy.get('a[href*="abtest"]').click();
    cy.get("p").contains(
      "Also known as split testing. This is a way in which businesses are able to simultaneously test and learn different versions of a page to see which text and/or functionality works best towards a desired outcome (e.g. a user action such as a click-through)."
    );
  });
});
