import AlertsAndModalsTabHelper from '../../fixtures/helper/seleniumeasy/AlertsAndModalsTabHelper';

describe('Test Alerts And Models tab', function () {

    var alertsAndModalsTabHelper = new AlertsAndModalsTabHelper();

    beforeEach(() => {
        cy.visit('https://demo.seleniumeasy.com/');
        cy.xpath('//a[contains(text(),"No, thanks!")]').click();
    });

    it.only('Test Bootstrap alerts', function () {
        alertsAndModalsTabHelper.clickOnAlertAndModalsTab();
        alertsAndModalsTabHelper.clickOnSubTabBootStrapAlerts();
        alertsAndModalsTabHelper.isBootStrapAlertsPageDisplayed();
        alertsAndModalsTabHelper.clickOnAutoclosablebtnsuccessbutton();
        alertsAndModalsTabHelper.isAutoclosableAlertMessageDisplayed();
        alertsAndModalsTabHelper.clickOnNormalMessageButton();
        alertsAndModalsTabHelper.isNormalAlertMessageDisplayed();
        alertsAndModalsTabHelper.clickOnNormalInfoMessageButton();
        alertsAndModalsTabHelper.isNormalInfoAlertMessageDisplayed();
        alertsAndModalsTabHelper.closeNormalInfoAlertsMessage();
    });

    it('Test Bootstrap Modals - Single Model', function () {
        alertsAndModalsTabHelper.clickOnAlertAndModalsTab();
        alertsAndModalsTabHelper.clickOnSubTabBootStrapModals();
        alertsAndModalsTabHelper.isBootStrapModalsPageDisplayed();
        alertsAndModalsTabHelper.clickLaunchModelButtonUnderSingleMode();
        alertsAndModalsTabHelper.isModelTitleDisplayed();
        alertsAndModalsTabHelper.clickOnSaveChangesButtonOfModelTitle();
    });

    it('Test Bootstrap Modals - Multi Model', function () {
        alertsAndModalsTabHelper.clickOnAlertAndModalsTab();
        alertsAndModalsTabHelper.clickOnSubTabBootStrapModals();
        alertsAndModalsTabHelper.isBootStrapModalsPageDisplayed();
        alertsAndModalsTabHelper.clickLaunchModelButtonUnderMultiMode();
        alertsAndModalsTabHelper.isFirstModelDisplayed();
        alertsAndModalsTabHelper.clickOnInternalLaunchModelOfMultiModel();
        alertsAndModalsTabHelper.isModelTwodDisplayed();
        alertsAndModalsTabHelper.closeModelTwoDAlerts();
    });

    it('Verify File Download', function () {
        alertsAndModalsTabHelper.clickOnAlertAndModalsTab();
        alertsAndModalsTabHelper.clickOnTheSubTabFileDownload();
        alertsAndModalsTabHelper.isFileDownloadPageDisplayed();
        alertsAndModalsTabHelper.enterDataDescriptions('testfile');
        alertsAndModalsTabHelper.clickOnGenerateButton();
        alertsAndModalsTabHelper.clickOnDownloadButton();
        cy.verifyDownload('easyinfo.txt');
    });

})