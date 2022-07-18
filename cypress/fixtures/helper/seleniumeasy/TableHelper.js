class TableHelper {

clickOnTableTab() {
cy.xpath('//a[@class="dropdown-toggle"][normalize-space()="Table"]').click();
}

clickOnTableSubTab(subtab) {
cy.xpath("//ul[@class='dropdown-menu']//a[normalize-space()='"+subtab+"']").click();
}

isTablePaginationPageDisplayed() {
cy.xpath("//h2[normalize-space()='Table with Pagination Example']").should('be.visible');
}

isTableContentCorrect(index) {
cy.xpath("//td[normalize-space()='"+index+"']/../td[1]").contains(index);
cy.xpath("//td[normalize-space()='"+index+"']/../td[2]").contains('Table cell');
cy.xpath("//td[normalize-space()='"+index+"']/../td[3]").contains('Table cell');
cy.xpath("//td[normalize-space()='"+index+"']/../td[4]").contains('Table cell');
cy.xpath("//td[normalize-space()='"+index+"']/../td[5]").contains('Table cell');
}

jumpNextPage() {
cy.get('.next_link').click();
}

isPageButtonSelected(pageNum) {
cy.get("li[class='active'] a[class='page_link']").contains(pageNum);
}

}

export default TableHelper;