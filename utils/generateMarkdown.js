// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

//function to generate markdown for README
function generateMarkdown(readmeData) {
  return `# ${readmeData.title}

  ## Description
  ${readmeData.description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributors](#contributors)
  * [Tests](#tests)
  * [Questions](#questions)
  * [Contact](#contact)
  
  ## Installation
  ${readmeData.installation}

  ## Usage
  ${readmeData.usage}

  ## License
  ${readmeData.license}

  ## Contributors
  ${readmeData.contribute}

  ## Tests
  ${readmeData.test}

  ## Questions
  ${readmeData.issue}

  ## Contact
  * Email: ${readmeData.email}
  * [GitHub](https://github.com/${readmeData.github})
`;
}

module.exports = generateMarkdown;
