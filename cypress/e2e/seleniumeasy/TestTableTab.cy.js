import InputFormsTabHelper from '../../fixtures/helper/seleniumeasy/InputFormsTabHelper';
import TableHelper from '../../fixtures/helper/seleniumeasy/TableHelper';

describe('Test Table Tab', function () {

    const tableHelper = new TableHelper();
    const inputFormsTabHelper = new InputFormsTabHelper();

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