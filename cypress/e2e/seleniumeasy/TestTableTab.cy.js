import InputFormsTabHelper from '../../support/helper/seleniumeasy/InputFormsTabHelper';
const inputFormsTabHelper = new InputFormsTabHelper();
import TableHelper from '../../support/helper/seleniumeasy/TableHelper';
const tableHelper = new TableHelper()

describe('Test Table Tab', function () {

    it('Test Table Pagination', function () {
        inputFormsTabHelper.loginToThePage();
        tableHelper.clickOnTableTab();
        tableHelper.clickOnTableSubTab('Table Pagination');
        tableHelper.isTablePaginationPageDisplayed();
        tableHelper.isTableContentCorrect(4);
        tableHelper.jumpNextPage();
        tableHelper.isPageButtonSelected(2);
    });

})