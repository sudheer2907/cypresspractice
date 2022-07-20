import InputFormsTabHelper from '../../fixtures/helper/seleniumeasy/InputFormsTabHelper';
import OthersTabHelper from '../../fixtures/helper/seleniumeasy/OthersTabHelper';

describe("Test seleniumeasy demo website", function () {

    const othersTabHelper = new OthersTabHelper();
    const inputFormsTabHelper = new InputFormsTabHelper();

    it('Login to the page', function () {
        inputFormsTabHelper.loginToThePage();
    });

    it('Test Drag and Drop', function () {
        othersTabHelper.clickOnOthersTab();
        othersTabHelper.clickOnDragAndDropSubTab();
        othersTabHelper.isDragAndDropPageDisplayed();
        //othersTabHelper.dragElement("//span[normalize-space()='Draggable 1']", "//div[@id='mydropzone']");
        cy.xpath("//span[normalize-space()='Draggable 1']").drag('#mydropzone');
    });

})