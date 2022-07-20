class CypressBaseHelper {

    getIframeDocument() {
        return cy
            .get('object')
            .its('0.contentDocument')
    };

    getIframeBody() {
        return cy
            .get('object')
            .its('0.contentDocument').
            its('body')
            .then(cy.wrap)
    };

    getCurrentDateAndTime() {
        var currentdate = new Date();
        var datetime = currentdate.getFullYear()
            + "-" + currentdate.getMonth()
            + "-" + currentdate.getDate()
            + "-" + currentdate.getHours()
            + "-" + currentdate.getMinutes()
            + "-" + currentdate.getSeconds();
        return datetime.toString();
    };

    clickWebElement(locater) {
        if (locater.charAt(0) == "/") {
            cy.xpath(locater).click();
        } else {
            cy.get(locater).click();
        }
    };

    isElementVisible(locater) {
        if (locater.charAt(0) == "/") {
            cy.xpath(xpathLocater).should('be.visible');
        } else {
            cy.get(locater).should('be.visible');
        }
    };

    sendKeys(locater, value) {
        if (locater.charAt(0) == "/") {
            cy.xpath(xpathLocater).type(value);
        } else {
            cy.get(locater).type(value);
        }
    };

    printmessage(message) {
        cy.log(message);
    }
}

export default CypressBaseHelper;