/*
Create and export a module with class "MainPage".
This class behaves as a Child class, which contains the selectors of main page UI elements required for test automation scenarios.
This module can be imported and called from Step Definitions to access the UI elements.
*/
const BasePage = require('./base.page')
const path = require('path');

class MainPage extends BasePage {

    get userButton () {return $('button[class="TransferAccountMenuButton"') } // user account button with username
    get cookieAcceptButton () { return $('button[class="button welcome__button welcome__button--accept button--enabled"]') } // button to accept cookies
    get termsAcceptButton () { return $('button[class="transfer__button"]') } // button to accept terms of Service
    get uploadDiv () { return $('.uploader__files') } // Div surrounding upload files function. clicking will launch the OS Open File manager
    get uploadCount () { return $('uploader__add_files') } // Should contain the string "1 file added" after selecting a file. use to check file added
    get emailToBox () { return $('[name="autosuggest"]') } // to email address
    get emailFromBox () { return $('.uploader__locked-sender-email') } // from email address
    get transferButton () { return $('button[class="transfer__button"]') } // transfer button. is disabled until file is selected and email addresses input
    
    // accept cookies and ToS on first login of session
    async accept(){
        await this.cookieAcceptButton.click();
        await this.termsAcceptButton.waitForClickable();
        await this.termsAcceptButton.click();
    }

    // upload a file.
    /* 
    Unfortunately I could not get this to work in time using the standard wedriver.io solution.
    
    I attempted solutions using browser.uploadFile() from:
    https://webdriver.io/blog/2019/06/25/file-upload/
    https://dev.to/automationbro/upload-file-on-a-hidden-input-field-webdriverio-i91
    http://v4.webdriver.io/api/action/submitForm.html

    I did not want to mock / stub out the functionality, as that did not seem to go with the brief.

    An alternative approach could be to try to test using the API, as per:
    https://developers.wetransfer.com/documentation/#transfer-file-upload
    but the documentation I found indicated this was no longer accessible.
    */

    async upload(file, emailTo){ 
        await this.uploadDiv.waitForEnabled();
        
        // construct file path
        const filePath = path.join(__dirname, '../../test_files', file);
        
        // upload file
        /*
        This is the problematic line.
        It fails silently.
        I believe this is because the usage model expects to have a path, and an upload button.
        This does not seem to be the case with the wetransfer implementation.
        */
        const uploadedFile = await browser.uploadFile(filePath);
        await this.uploadDiv.setValue(uploadedFile); 
        
        // check file has uploaded via change to the upload file message
        await this.uploadCount.waitForClickable();
    }

    open() {
        super.open('https://wetransfer.com/')
    }
}

module.exports = new MainPage();