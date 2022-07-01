class ProgressHelper {

clickOnProgressBarstab() {
cy.xpath("//a[normalize-space()='Progress Bars']").click();
}

clickOnJQueryDownloadProgressbarsSubTab() {
cy.xpath("//ul[@class='dropdown-menu']//a[normalize-space()='JQuery Download Progress bars']").click();
}

isJqueryDownloadProgressBarsPageDisplayed() {
cy.xpath("//h2[normalize-space()='JQuery UI Progress bar - Download Dialog']").should('be.visible');
}

clickOnDownloadButton() {
cy.get('#downloadButton').click();
}

isProgressLevelDisplayed() {
cy.get('.progress-label').should('be.visible');
}

isCloseButtonDisplayed() {
cy.get("div[class='ui-dialog-buttonset'] button[type='button']").should('be.visible');
}

clickOnCloseButton() {
cy.get("div[class='ui-dialog-buttonset'] button[type='button']").click();
}

clickOnBootstrapProgressBarSubTab() {
cy.xpath("//ul[@class='dropdown-menu']//a[normalize-space()='Bootstrap Progress bar']").click();
}

isBootstrapProgressBarDisplayed(){
cy.xpath("//h3[normalize-space()='Stylish progress bar demo for the automation']").should('be.visible');
}

clickOnDownloadButtonOnBootStrapProgressBarPage() {
cy.get('#cricle-btn').click();
}

isFilesDownloaded() {
//cy.wait(25000);
//cy.get(".percenttext", {timeout:30000}).should().contains(100);
cy.get('.percenttext').should('be.visible').contains(100);
}

clickOnDragAndDropSubTab() {
cy.xpath("//ul[@class='dropdown-menu']//a[normalize-space()='Drag & Drop Sliders']").click();
}

slideFirstSlider(value) {
cy.get("input[value='10']").invoke("val", value).trigger("change");
}

verifyFirstSliderValue(value) {
cy.get('#range').contains(value);
}

slideSecondSlider(value) {
cy.get("div[class='range range-primary'] input[name='range']").invoke("val", value).trigger("change");
}

verifySecondSliderValue(value) {
cy.get('#rangePrimary').contains(value);
}

}
export default ProgressHelper;