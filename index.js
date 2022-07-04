// packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');


const generateMarkdown = require('./utils/generateMarkdown')

// an array of questions for user input
const questions = () => {
    return inquirer.prompt([
    {
        type: 'input',
        name: 'title',
        message: 'What is the Title of your application?',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please enter your application Title!');
                return false;
            }
        }
            
    },
    {
        type: 'input',
        name: 'description',
        message: 'Type a description for your README here.',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('Please enter a description for your README!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please type out the steps to install your project.',
        validate: installationInput => {
            if (installationInput) {
                return true;
            } else {
                console.log('Please enter steps to install!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How do you use this project?',
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log('Please enter a description for project usage!');
                return false; 
            }
        }
    },
    {
        type: 'input',
        name: 'test', 
        message: 'What command should be run to run tests?',
        default: 'npm test'
    },
    {
        type: 'input',
        name: 'contributors',
        message: 'What does the user need to know about contributing to the repo?'
    },
    {
        type: 'list',
        name: 'license',
        message: 'What kind of license should your project have?',
        choices: [{name:'none', value:''}, {name:'MIT', value:'MIT'}, {name:'GNU General Public License 2.0', value:'GNU General Public License 2.0'}, {name:'Apache License 2.0', value: 'Apache License 2.0'}, {name:'GNU General Public License 3.0', value: "GNU General Public License 3.0"}],
        default: ['None'],
        
    }

    ]);
};

// function to write README file
const writeToFile = data => {
    fs.writeFile('./results/README.md', data, err => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log('✔️ Your README has been successfully created!')
        }
    })
}

// function to initialize app
async function init() {
    const data = await questions();
    const content = generateMarkdown(data);

    writeToFile(content);
};

// Function call to initialize app
init();