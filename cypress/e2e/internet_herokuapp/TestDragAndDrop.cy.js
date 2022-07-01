describe("Test herocuppapp demo website", function () {
  beforeEach(() => {
    cy.visit("https://the-internet.herokuapp.com/");
    cy.get("h1").contains("Welcome to the-internet");
  });

  it("Test Drage and Drop", function () {
    cy.xpath("//a[normalize-space()='Drag and Drop']").click();
    cy.get("#column-a").drag("#column-b");
    const dt = new DataTransfer();
    cy.get("#column-a").trigger("dragstart", {
      dt,
    });
    cy.get("#column-b").trigger("drop", {
      dt,
    });
  });
});
