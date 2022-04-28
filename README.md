WeTransfer QA Technical test - Tech challenge
=============================================

Brief
-----
Create an automated test in a framework of your choice using javascript or
typescript that tests the transfer link upload / download functionality on WeTransfer
website with
a free account.

Requirements:
-------------
* The upload/ download must be performed with multiple files of different types
and sizes
* Write the steps using Gherkin language and document the code
* Generate a report
* Create documentation explaining how to execute the tests

Installation:
-------------
Installation assumes node.js and git bash are succesfully installed on your system.

Once you have cloned the repository to the directory of your choice, tests can be run via:

    npx wdio run ./wdio.conf.js

To generate an Allure report run:

    allure generate reports/allure-results/

To view the report, run:

    allure open

Test definitions are written using Cucumber in features/WeTransfer.feature

The tests were developed and tested on a Windows 10 environment using Chrome webdriver.
Configuration to use other browsers should be set in wdio.conf.js