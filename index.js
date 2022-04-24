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
            message: 'What command is used to instal your project:',
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
            type: 'list',
            name: 'license',
            message: 'Please select the appropriate license for this project:',
            choices: [
                'Apache2.0',
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
            message: 'What command should be run for testing purposes?',
            default: 'npm test',
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

