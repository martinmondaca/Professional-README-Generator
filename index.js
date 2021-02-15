const inquirer = require('inquirer');
const fs = require('fs');
const Choices = require('inquirer/lib/objects/choices');
const generateMarkdown = require('./utils/generateMarkdown');


// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), (err) =>
        err ? console.error(err) : console.log('Success!');
    );
};

inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is the title of your project?',
            name: 'appTitle',
        }, {
            type: 'input',
            message: 'What is the purpose of this project?/What problem does it solve?',
            name: 'appPurpose',
        }, {
            type: 'input',
            message: 'What did you learn while working on this project?/What challenges did you face?',
            name: 'appChallenges',
        }, {
            type: 'input',
            message: 'What features would you like to implement in the future?',
            name: 'appFuture',
        }, {
            type: 'input',
            message: 'Please provide installation instructions for your project.',
            name: 'appInstall',
        }, {
            type: 'editor',
            message: 'Please provide usage instructions for your project.',
            name: 'appUsage',
        }, {
            type: 'editor',
            message: 'Please provide instructions for testing your project.',
            name: 'appTest',
        }, {
            type: 'editor',
            message: 'Please provide a link to the technologies used in this project.',
            name: 'appTech',
        }, {
            type: 'input',
            message: 'Please provide your email address for questions and contributions',
            name: 'devEmail',
        }, {
            type: 'input',
            message: 'Please provide your GitHub username for questions and contributions',
            name: 'devGitHub',
        }, {
            type: 'list',
            message: 'Which license would you like to use for your project?',
            name: 'appLicense',
            choices: ['GNU AGPLv3', 'GNU GPL v3', 'GNU LGPL v3', 'Mozilla Public License 2.0',
                'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense'],
        },
    ])
    .then((data) => {
        if (data.appLicense === 'GNU AGPL v3') {
            data.appLicenseBadge = `[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)`
        } else if (data.appLicense === 'GNU GPL v3') {
            data.appLicenseBadge = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
        } else if (data.appLicense === 'GNU LGPL v3') {
            data.appLicenseBadge = '[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)'
        } else if (data.appLicense === 'Mozilla Public License 2.0') {
            data.appLicenseBadge = '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'
        } else if (data.appLicense === 'Apache License 2.0') {
            data.appLicenseBadge = '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
        } else if (data.appLicense === 'MIT License') {
            data.appLicenseBadge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
        } else if (data.appLicense === 'Boost Software License 1.0') {
            data.appLicenseBadge = '[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)'
        } else {
            data.appLicenseBadge = '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)'
        };
        writeToFile('sampleREADME.md', data);
    });