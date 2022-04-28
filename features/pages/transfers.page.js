/*
Create and export a module with class "LoginPage".
This class behaves as a Child class, which contains the selectors of Login page UI elements required for the test automation scenarios.
This module can be imported and called from Step Definitions to access the UI elements.
*/
const BasePage = require('./base.page')

class TransfersPage extends BasePage {

    get fileElement () { return $(div='document.pdf') }

    open() {
        super.open('https://wetransfer.com/transfers')
    }
}

module.exports = new TransfersPage();