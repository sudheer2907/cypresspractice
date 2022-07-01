describe("Test herocuppapp demo website", function () {
  beforeEach(() => {
    cy.visit("https://the-internet.herokuapp.com/");
    cy.get("h1").contains("Welcome to the-internet");
  });

  it("Test file uploading", function () {
    cy.get('a[href="/upload"]').click();
    const p = "index.html";
    cy.get("#file-upload").attachFile(p);
    cy.get("#file-submit").click();
    cy.get("#uploaded-files").contains("index");
  });
});
