# Learn Cypress Step by Step

# Initial setup to start with Cypress:
1. Install node 12 or 14 or above version 
2. Open Visual studio
3. Import the project
4. Open the Terminal
5. Run the command: npm init
6. Run the command: npm install cypress --save-dev
7. Verify that node_modules folder has been created
8. Run the command: npx cypress open
9. Execute your test cases one by one
10. If you want to execute entire test case then Run the command: npx cypress run
11. To clear the cache Run the command: npm cache clear --force
12. To execute any particular specf files: cypress run --spec cypress/integration/examples/cypressTest1.cy.js
13. To execute on any specific browser: cypress run --browser chrome
14. To execute particular spec files on particular browser: cypress run --spec cypress/integration/examples/cypressTest1.js --browser chrome

# Folder Structure to be followed:
1. Keep all the page class files into cypress/fixtures/helper folder
2. Keep all the test cases related files into e2e/playbooktest folder
3. keep all the test data related files into cypress/fixutres/testdata folder
4. Keep all the environmental related files into cypress/fixtures/environmentmanager

# Important key points
1. Default timeout period configured is 25 seconds, if required some extra timeout period then use cy.wait or declare some utility methods for the same.
2. Do not make unneccessary changes into these files package.json, package-lock.json, cypress.config.js, e2e.js, command.js
3. Do not push dead code or commented lines.
4. Declare Javascript doc for each and every utility methods.
5. Do not push changes related to baseurls - else it may cause some issue with customer environment.

# Issues faced and solution to get it resolved
1. Not able to execute on chrome browser.
   Solution - pass chromeWebSecurity: false into cypress.config.js files.
 
# Improvements needed
1. Xpath can be seperated out from methods
2. Data driven testing
3. Parallel execution
4. Cross browser tetsing
5. API Integartion to delete junk test data post automation execution

