import InputFormsTabHelper from '../../fixtures/helper/seleniumeasy/InputFormsTabHelper';
import ProgressHelper from '../../fixtures/helper/seleniumeasy/ProgressHelper';

describe('Test Table Tab', function () {

    const progressHelper = new ProgressHelper();
    const inputFormsTabHelper = new InputFormsTabHelper();

    it('Test JQuery Download Progress bars', function () {
        inputFormsTabHelper.loginToThePage();
        progressHelper.clickOnProgressBarstab();
        progressHelper.clickOnJQueryDownloadProgressbarsSubTab();
        progressHelper.isJqueryDownloadProgressBarsPageDisplayed();
        progressHelper.clickOnDownloadButton();
        progressHelper.isProgressLevelDisplayed();
        progressHelper.isCloseButtonDisplayed();
        progressHelper.clickOnCloseButton();
    });

    it('Test Bootstrap Progress bars', function () {
        inputFormsTabHelper.loginToThePage();
        progressHelper.clickOnProgressBarstab();
        progressHelper.clickOnBootstrapProgressBarSubTab();
        progressHelper.isBootstrapProgressBarDisplayed();
        progressHelper.clickOnDownloadButtonOnBootStrapProgressBarPage();
        progressHelper.isFilesDownloaded();
    });

    it('Test Drag and Drop', function () {
        inputFormsTabHelper.loginToThePage();
        progressHelper.clickOnProgressBarstab();
        progressHelper.clickOnDragAndDropSubTab();
        progressHelper.slideFirstSlider(20);
        progressHelper.verifyFirstSliderValue(20);
        progressHelper.slideFirstSlider(100);
        progressHelper.verifyFirstSliderValue(100);
        progressHelper.slideSecondSlider(20);
        progressHelper.verifySecondSliderValue(20);
    });
})