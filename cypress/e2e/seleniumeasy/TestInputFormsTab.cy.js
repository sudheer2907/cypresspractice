import InputFormsTabHelper from '../../support/helper/seleniumeasy/InputFormsTabHelper';
const inputFormsTabHelper = new InputFormsTabHelper()

describe("Test seleniumeasy demo website", function () {
  beforeEach(() => {
    cy.visit("https://demo.seleniumeasy.com/");
    cy.xpath('//a[contains(text(),"No, thanks!")]').click();
  });

  it('Test Input Forms tab', function () {
    cy.xpath('//a[@class="dropdown-toggle"][normalize-space()="Input Forms"]').click();
    cy.xpath('//ul[@class="dropdown-menu"]//a[normalize-space()="Simple Form Demo"]').click();
    cy.xpath('//h3[contains(text(),"This would be your first example to start with Sel")]').should('be.visible');
    cy.xpath('//input[@id="user-message"]').type('Hi');
    cy.get('button[onclick="showInput();"]').click();
    cy.get('#display').contains('Hi');

    cy.get('#sum1').type(10);
    cy.get('#sum2').type(20);
    cy.get('button[onclick="return total()"]').click();
    cy.get('#displayvalue').contains(30);

    cy.xpath('//a[@class="dropdown-toggle"][normalize-space()="Input Forms"]').click();
    cy.xpath('//ul[@class="dropdown-menu"]//a[normalize-space()="Checkbox Demo"]').click();
    cy.xpath('//h3[contains(text(),"This would be a basic example to start with checkb")]').should('be.visible');
    cy.xpath('//div[normalize-space()="Single Checkbox Demo"]').should('be.visible');
    cy.get('#isAgeSelected').click();
    cy.get('#txtAge').contains('Success - Check box is checked').click();
    cy.xpath('//label[normalize-space()="Option 1"]').click();
    cy.xpath('//label[normalize-space()="Option 2"]').click();
    cy.xpath('//label[normalize-space()="Option 1"]/input').should('be.checked');

    cy.xpath('//a[@class="dropdown-toggle"][normalize-space()="Input Forms"]').click();
    cy.xpath('//ul[@class="dropdown-menu"]//a[normalize-space()="Radio Buttons Demo"]').click();
    cy.xpath('//h3[contains(text(),"This is again simple example to start working with")]').should('be.visible');
    cy.get('input[value="Male"][name="optradio"]').click();
    cy.get('#buttoncheck').click();
    cy.get('.radiobutton').should('have.text', "Radio button 'Male' is checked");
    cy.get('input[value="Female"][name="gender"]').click();
    cy.get('input[value="5 - 15"]').click();
    cy.get('button[onclick="getValues();"]').click();
    cy.get('.groupradiobutton').contains('Sex : Female');
    cy.get('.groupradiobutton').contains(' Age group: 5 - 15');

    cy.xpath('//a[@class="dropdown-toggle"][normalize-space()="Input Forms"]').click();
    cy.xpath('//ul[@class="dropdown-menu"]//a[normalize-space()="Select Dropdown List"]').click();
    cy.get("#select-demo").select('Sunday');
    cy.get('.selected-value').contains('Day selected :- Sunday');
    //Issue with multiple select from a list
    //cy.xpath('//select[@id="multi-select"]').select('Florida','Ohio');

    cy.xpath('//a[@class="dropdown-toggle"][normalize-space()="Input Forms"]').click();
    cy.xpath('//ul[@class="dropdown-menu"]//a[normalize-space()="Input Form Submit"]').click();
    cy.xpath('//h2[normalize-space()="Input form with validations"]').contains('Input form with validations');
    cy.get('input[placeholder="First Name"]').type('Sudheer');
    cy.get('input[placeholder="Last Name"]').type('Singh');
    cy.get('input[placeholder="E-Mail Address"]').type('sudheer2907@gmail.com');
    cy.get('input[placeholder="(845)555-1212"]').type(9891535139);
    cy.get('input[placeholder="city"]').type('Pune');
    cy.get('input[placeholder="Address"]').type('PunePunePune');
    cy.get('select[name="state"]').select('Alaska');
    cy.get('input[placeholder="Zip Code"]').type(99502);
    cy.get('input[placeholder="Website or domain name"]').type('testinglead.com');
    cy.get('input[value="yes"]').click();
    cy.get('textarea[placeholder="Project Description"]').type('This is just a Sample Project');
    cy.get('.glyphicon.glyphicon-send').click();

    cy.xpath('//a[@class="dropdown-toggle"][normalize-space()="Input Forms"]').click();
    cy.xpath('//ul[@class="dropdown-menu"]//a[normalize-space()="Ajax Form Submit"]').click();
    cy.xpath('//h1[normalize-space()="Ajax Form Submit with Loading icon"]').should('be.visible');
    cy.get('#title').type('Sudheer Singh');
    cy.get('#description').type('Comments');
    cy.get('#btn-submit').click();
    cy.get('#submit-control').contains('Form submited Successfully!');

    cy.xpath('//a[@class="dropdown-toggle"][normalize-space()="Input Forms"]').click();
    cy.xpath('//ul[@class="dropdown-menu"]//a[normalize-space()="JQuery Select dropdown"]').click();
    cy.xpath('//label[normalize-space()="Select Country :"]/..//span[2]/b').click();
    cy.get('span[class="select2-search select2-search--dropdown"] input[role="textbox"]').type('India');
    cy.get('li[role="treeitem"]').click();
    cy.get('input[placeholder="Select state(s)"]').type('Indiana');
    cy.xpath('//li[contains(@class,"select2-results")]').type("{enter}");
    cy.get('input[role="textbox"]').type('Alaska');
    cy.xpath('//li[contains(@class,"select2-results")]').contains('Alaska').type("{enter}");

    cy.xpath('//a[@class="dropdown-toggle"][normalize-space()="Input Forms"]').click();
    cy.xpath('//ul[@class="dropdown-menu"]//a[normalize-space()="JQuery Select dropdown"]').click();
    cy.xpath('//select[@id="files"]').select('PHP');
  });

})