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

}

export default CypressBaseHelper;