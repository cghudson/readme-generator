// TODO: Include packages needed for this application
const fs = require('fs')
const inquirer = require('inquirer')
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?'
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please write a short description of your project:'
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Please provide instructions for installing the project:'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'What is the purpose of the project?'
        },
        {
            type: 'list',
            name: 'license',
            message: 'Please select the appropriate license for this project:',
            choices: [
                'Apache',
                'GNU',
                'MIT',
                'Mozilla'
            ]
        },
        {
            type: 'input',
            name: 'contribute',
            message: 'Who are the contributors of this project?'
        },
        {
            type: 'input',
            name: 'test',
            message: 'Is there a test included?'
        },
        {
            type: 'input',
            name: 'question',
            message: 'Please provide instructions to reach you if there are questions about your project:'
        },
        {
            type: 'input',
            name: 'github',
            message: 'Please enter your GitHub Username:'
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter your email address:'
        },
    ])
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
