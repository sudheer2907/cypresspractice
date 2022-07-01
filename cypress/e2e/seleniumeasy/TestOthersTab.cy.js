import InputFormsTabHelper from '../../support/helper/seleniumeasy/InputFormsTabHelper';
const inputFormsTabHelper = new InputFormsTabHelper()
import OthersTabHelper from '../../support/helper/seleniumeasy/OthersTabHelper';
const othersTabHelper = new OthersTabHelper()

describe("Test seleniumeasy demo website", function () {

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