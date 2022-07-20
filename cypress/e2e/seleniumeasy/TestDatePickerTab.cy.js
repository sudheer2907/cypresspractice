import InputFormsTabHelper from '../../fixtures/helper/seleniumeasy/InputFormsTabHelper';
import DatePickerHelper from '../../fixtures/helper/seleniumeasy/DatePickerHelper';

describe("Test Date Picker tav of selenium easy demo website", function () {

    const datePickerHelper = new DatePickerHelper()
    const inputFormsTabHelper = new InputFormsTabHelper()

    it('Test Bootstrap date picker', function () {
        inputFormsTabHelper.loginToThePage();
        datePickerHelper.clickOnDatePickerTab();
        datePickerHelper.clickOntheBootstarpDatePicker();
        datePickerHelper.isBootstrapDatePickerPageDisplayed();
        datePickerHelper.selectDate('02/06/2022');
        datePickerHelper.selectStartDate('02/05/2022');
        datePickerHelper.selectEndDate('02/06/2021');
    });

    it('Test JQuery date picker', function () {
        inputFormsTabHelper.loginToThePage();
        datePickerHelper.clickOnDatePickerTab();
        datePickerHelper.clickOntheJqueryDatePicker();
        datePickerHelper.selectFromDate('02/06/2021');
        datePickerHelper.selectToDate('03/06/2021');
    });
})
