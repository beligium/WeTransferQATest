/*
This file maps to the Cucumber test scenario definitions in the WeTransfer.feature file, and provides the logic to run the steps
*/
const { Given, When, Then } = require("@cucumber/cucumber");

const LoginPage = require("../pages/login.page");
const MainPage = require("../pages/main.page");

// Scenario: Log in with a free account
Given("I am on the login page", async () => {
  await LoginPage.open();
  // confirm we are on the login page
  await expect(browser).toHaveTitle("WeTransfer account | WeTransfer");
});

When(/I login using: (.*) and (.*)/, async (username, password) => {
  // login
  await LoginPage.login(username, password);
 });

Then("I am redirected to the main page", async () => {
  // confirm we are logged in successfully by being redirected to the main page
  await expect(browser).toHaveTitle("WeTransfer - Send Large Files & Share Photos Online - Up to 2GB Free");
  await MainPage.userButton.waitForClickable();
  // check that we are logged in via the account name on the user button
  await expect(MainPage.userButton).toHaveTextContaining("dam");
  await MainPage.userButton.waitForClickable();
});

Then("I accept cookies and ToS", async () => {
  /* 
  On first log in in a new browser, the user is presented with prompts asking the user to confirm:
  1) they accept cookies
  2) the accept the Terms of Service
  This will appear each session as chromedriver uses it's own guest instance of the browser
  */
  await MainPage.open();
  await MainPage.cookieAcceptButton.waitForClickable();
  await MainPage.accept();
  await MainPage.uploadDiv.waitForClickable();
  await expect(MainPage.uploadDiv).toHaveTextContaining("Upload files");
});


// Scenario: As a user with a free account I can upload a file
When(/I upload: (.*) to (.*)/, async (file, emailTo) => {
  await MainPage.upload(file, emailTo); // tests currently break at this point. See main.page.js for more details
  await expect(MainPage.uploadCount).toHaveTextContaining("1 file added");
});

Then("the Transfer button becomes active", async () => {
  // ToDo
});

When("I click on the Transfer button", async () => {
  // ToDo
});

Then(/(.*) is uploaded/, async (file) => {
  // ToDo
});


// Scenario: As a user with a free account I can upload a file
Given("I have previously uploaded a <file>", async (file) => {
  await TransfersPage.open();
  await TransfersPage.fileElement.waitForClickable();
});

When("I download <file>", async () => {
  // ToDo
});

Then("the file is saved to my local filesystem", async () => {
  // ToDo
});