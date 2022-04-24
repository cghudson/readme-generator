// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'None') {
    return ""
  } else {
    return `![GitHub License](https://img.shields.io/badge/License-${license}-green)`
  }
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'None') {
    return ""
  } else {
    return `  * [License](#license)`
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'None') {
    return ""
  } else {
    return `  ## License

   This application is licensed under the ${license} license.
   `
  }
}

//function to generate markdown for README
function generateMarkdown(readmeData) {
  return `# ${readmeData.title}
  ${renderLicenseBadge(readmeData.license)}

  ## Description

  ${readmeData.description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
${renderLicenseLink(readmeData.license)}
  * [Contributors](#contributors)
  * [Tests](#tests)
  * [Questions](#questions)
  * [Contact](#contact)
  
  ## Installation

  To run any necessary installations use the following command:

\`\`\`
  ${readmeData.installation}
\`\`\`

  ## Usage

  ${readmeData.usage}

${renderLicenseSection(readmeData.license)}

  ## Contributors

  ${readmeData.contribute}

  ## Tests
  
  To run any necessary test, use the following command:

\`\`\`
  ${readmeData.test}
\`\`\`

  ## Questions

If you have any questions about this project please email directly at [${readmeData.email}](mailto:${readmeData.email}) .

Check out more of my projects here: [${readmeData.github}](https://github.com/${readmeData.github})
`;
}

module.exports = generateMarkdown;
