import BaseHelper from "../basehelper/BaseHelper";

class DatePickerHelper extends BaseHelper {

    clickOnDatePickerTab() {
        cy.xpath('//a[@class="dropdown-toggle"][normalize-space()="Date pickers"]').click();
    };

    clickOntheBootstarpDatePicker() {
        cy.xpath('//ul[@class="dropdown-menu"]//a[normalize-space()="Bootstrap Date Picker"]').click();
    }

    clickOntheJqueryDatePicker() {
        cy.xpath('//ul[@class="dropdown-menu"]//a[normalize-space()="JQuery Date Picker"]').click();
    };

    isBootstrapDatePickerPageDisplayed() {
        return cy.get('.col-md-6.text-left').should('be.visible');
    };

    selectDate(date) {
        cy.get('input[placeholder="dd/mm/yyyy"]').type(date).type("{enter}");
    };

    selectStartDate(date) {
        cy.get('input[placeholder="Start date"]').type(date).type("{enter}");
    };

    selectEndDate(date) {
        cy.get('input[placeholder="End date"]').type(date).type("{enter}");
    };

    selectFromDate(date) {
        cy.get('#from').type(date).type("{enter}");
    };

    selectToDate(date) {
        cy.get('#to').type(date).type("{enter}");
    };

}

export default DatePickerHelper;