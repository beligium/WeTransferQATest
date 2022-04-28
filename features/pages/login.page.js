/*
Create and export a module with class "LoginPage".
This class behaves as a Child class, which contains the selectors of Login page UI elements required for the test automation scenarios.
This module can be imported and called from Step Definitions to access the UI elements.
*/
const BasePage = require('./base.page')

class LoginPage extends BasePage {

    get userNameTextBox () { return $('[name="email"]') }
    get passwordTextBox () { return $('[name="password"]') }
    get loginButton () { return $('button[name="submit"]') }

    // log into wetransfer
    async login(username, password){ 
        await this.userNameTextBox.waitForClickable();
        await this.userNameTextBox.setValue(username);
        await this.passwordTextBox.setValue(password);
        await this.loginButton.click();
    }


    open() {
        super.open('https://wetransfer.com/log-in')
    }
}

module.exports = new LoginPage();