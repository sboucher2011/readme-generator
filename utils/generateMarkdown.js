// Function that returns a license badge based on which license is passed in
// If there is no license, returns an empty string
function renderLicenseBadge(license) {
    if (license == "MIT") {
      return '![badmath](https://img.shields.io/badge/license-MIT-green)';
    } else if (license == "GNU General Public License") {
      return '![badmath](https://img.shields.io/badge/license-GNU-orange)';
    } else if (license == 'Apache') {
      return '![badmath](https://img.shields.io/badge/license-Apache-blue)';
    } else if (license == 'Eclipse Public License') {
      return '![badmath](https://img.shields.io/badge/license-Eclipse-red)';
    } else {
      return "";
    }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  return 'hello';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

  renderLicenseLink(license);
}

// Generates markdown for README
function generateMarkdown(data) {
  const { username, ...title} = data;

  return `
# ${data.title}

${renderLicenseBadge(data.license)}

## Description
${data.description}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation
\`\`\`shell
${data.install}
\`\`\`

## Usage
${data.usage}

## Credits
${data.credits}

## License
${renderLicenseSection(data.license)}

## Contributing
${data.contribute}

## Tests
${data.tests}

## Questions
My repository can be found here: (www.github.com/${data.github})
For questions you can contact me via my email: (${data.email})
  
`;
}

module.exports = generateMarkdown;
