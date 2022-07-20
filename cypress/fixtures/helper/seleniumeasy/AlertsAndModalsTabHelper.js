import BaseHelper from "../basehelper/BaseHelper";

class AlertsAndModalsTabHelper extends BaseHelper {

    clickOnAlertAndModalsTab() {
        super.clickWebElement("//a[@class='dropdown-toggle'][normalize-space()='Alerts & Modals']");
    };

    clickOnSubTabBootStrapAlerts() {
        super.clickWebElement("//ul[@class='dropdown-menu']//a[normalize-space()='Bootstrap Alerts']");
    };

    isBootStrapAlertsPageDisplayed() {
        super.isElementVisible("//h2[normalize-space()='Bootstrap Alert messages']");
    };

    clickOnAutoclosablebtnsuccessbutton() {
        super.clickWebElement('#autoclosable-btn-success');
    };

    isAutoclosableAlertMessageDisplayed() {
        super.isElementVisible('.alert.alert-success.alert-autocloseable-success');
    };

    clickOnNormalMessageButton() {
        cy.get('#normal-btn-success').click();
    };

    isNormalAlertMessageDisplayed() {
        cy.get('.alert.alert-success.alert-normal-success').should('be.visible');
    };

    clickOnNormalInfoMessageButton() {
        cy.get('#normal-btn-info').click();
    };

    isNormalInfoAlertMessageDisplayed() {
        cy.get('.alert.alert-info.alert-normal-info').should('be.visible');
    };

    closeNormalInfoAlertsMessage() {
        cy.xpath("//div[@class='alert alert-info alert-normal-info']//button[@type='button'][normalize-space()='×']").click();
    };

    clickOnSubTabBootStrapModals() {
        cy.xpath("//ul[@class='dropdown-menu']//a[normalize-space()='Bootstrap Modals']").click();
    };

    isBootStrapModalsPageDisplayed() {
        cy.xpath("//h2[normalize-space()='Bootstrap Modal Example for Automation']").should('be.visible');
    };

    clickLaunchModelButtonUnderSingleMode() {
        cy.xpath("//div[contains(text(),'Single Modal Example')]/../div/a[contains(text(),'Launch modal')]").click();
    };

    isModelTitleDisplayed() {
        cy.get("div[id='myModal0'] h4[class='modal-title']").should('be.visible');
    };

    clickOnSaveChangesButtonOfModelTitle() {
        cy.get("div[id='myModal0'] a[class='btn btn-primary']").click();
    };

    clickLaunchModelButtonUnderMultiMode() {
        cy.get("a[href='#myModal']").click();
    };

    isFirstModelDisplayed() {
        cy.get("div[id='myModal'] h4[class='modal-title']").should('be.visible');
    };

    clickOnInternalLaunchModelOfMultiModel() {
        cy.get("div[class='modal-body'] a[class='btn btn-primary']").click();
    };

    isModelTwodDisplayed() {
        cy.get("div[id='myModal2'] h4[class='modal-title']").should('be.visible');
    };

    closeModelTwoDAlerts() {
        cy.get("div[id='myModal2'] a[class='btn btn-primary']").click();
    };

    clickOnTheSubTabFileDownload() {
        cy.xpath("//ul[@class='dropdown-menu']//a[normalize-space()='File Download']").click();
    };

    isFileDownloadPageDisplayed() {
        cy.xpath("//h2[normalize-space()='File Download Demo for Automation']").should('be.visible');
    };

    enterDataDescriptions(descriptions) {
        cy.get('#textbox').type(descriptions);
    };

    clickOnGenerateButton() {
        cy.get('#create').click();
    };

    clickOnDownloadButton() {
        cy.xpath("//a[@id='link-to-download']").click();
    };
}

export default AlertsAndModalsTabHelper;