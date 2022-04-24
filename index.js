//packages needed for this application
const fs = require('fs')
const inquirer = require('inquirer')
const generateReadme = require('./utils/generateMarkdown')

//array of questions for user input
const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?',
            validate: titleInput => {
                if (titleInput) {
                  return true;
                } else {
                  console.log('Please enter the project title!');
                  return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please write a short description of your project:',
            validate: descriptionInput => {
                if (descriptionInput) {
                  return true;
                } else {
                  console.log('Please enter a project description!');
                  return false;
                }
            }
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Please provide instructions for installing the project:',
            validate: installationInput => {
                if (installationInput) {
                  return true;
                } else {
                  console.log('Please enter installation instructions!');
                  return false;
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'What is the purpose or use of the project?',
            validate: usageInput => {
                if (usageInput) {
                  return true;
                } else {
                  console.log('Please enter the purpose or usage of the project!');
                  return false;
                }
            }
        },
        {
            type: 'checkbox',
            name: 'license',
            message: 'Please select the appropriate license for this project:',
            choices: [
                'Apache 2.0',
                'GNU',
                'MIT',
                'Mozilla',
                'None'
            ]
        },
        {
            type: 'input',
            name: 'contribute',
            message: 'Who are the contributors of this project?',
            validate: contributeInput => {
                if (contributeInput) {
                  return true;
                } else {
                  console.log('Please enter project contributors!');
                  return false;
                }
            }
        },
        {
            type: 'input',
            name: 'test',
            message: 'Is there a test included?',
            validate: testInput => {
                if (testInput) {
                    return true;
                } else {
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'Please enter your GitHub Username:',
            validate: githubInput => {
                if (githubInput) {
                  return true;
                } else {
                  console.log('Please enter your GitHub Username!');
                  return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter your email address:',
            validate: emailInput => {
                if (emailInput) {
                  return true;
                } else {
                  console.log('Please enter your email address!');
                  return false;
                }
            }
        },
        {
            type: 'input',
            name: 'issue',
            message: 'Please provide instructions to reach you if there are questions about your project:',
            validate: issueInput => {
                if (issueInput) {
                  return true;
                } else {
                  console.log('Please let users know how to contact you in the event of issues or questions');
                  return false;
                }
            }
        },
    ])
};

//function to write README file
const writeFile = readmeData => {
    fs.writeFile('README.md', readmeData, err => {
        if(err) {
            console.log(err)
            return
        } else {
            console.log("Your README file has been created!")
        }
    })
}

//function to initialize app
promptUser()
.then(input => {
    return generateReadme(input);
})
.then(readmeData => {
    return writeFile(readmeData)
})
.catch(err => {
    console.log(err)
})

