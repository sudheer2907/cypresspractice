class OthersTabHelper {

clickOnOthersTab() {
cy.xpath("//a[@class='dropdown-toggle'][normalize-space()='Others']").click();
}

clickOnDragAndDropSubTab() {
cy.xpath("//ul[@class='dropdown-menu']//a[normalize-space()='Drag and Drop']").click();
}

isDragAndDropPageDisplayed() {
cy.xpath("//h2[normalize-space()='Drag and Drop Demo for Automation']").should('be.visible');
}

dragElement(target, destination) {
    cy.xpath(target).drag(destination);
    const dt = new DataTransfer();
    cy.xpath(target).trigger("dragstart", {
      dt,
    });
    cy.xpath(destination).trigger("drop", {
      dt,
    });
}
}

export default OthersTabHelper;