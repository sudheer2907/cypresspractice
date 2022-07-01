describe("Testing herocuppapp demo website", function () {
  beforeEach(() => {
    cy.visit("https://the-internet.herokuapp.com/");
    cy.get("h1").contains("Welcome to the-internet");
  });

  it("Test Context Menu", function () {
    cy.get('a[href="/context_menu"]').click();
    cy.get('div[class="example"] h3').should("be.visible");
    cy.xpath(
      '//h3[normalize-space()="Context Menu"]/following-sibling::p'
    ).should(
      "have.text",
      "Context menu items are custom additions that appear in the right-click menu.Right-click in the box below to see one called 'the-internet'. When you click it, it will trigger a JavaScript alert."
    );
    cy.get("#hot-spot").rightclick();
    cy.on("window:confirm", (t) => {
      expect(t).to.equal("You selected a context menu");
    });
  });
});
