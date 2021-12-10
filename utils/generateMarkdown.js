// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) {
    return 'https://img.shields.io/badge/licses-MIT-yellowgreen'
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const { username, ...title} = data;

  renderLicenseBadge('MIT');
  return `
# ${data.title}

## Description
${data.description}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)
* [Features](#features)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation
${data.install}

## Usage
${data.usage}

## Credits
${data.credits}

## License

## Badges

## Features
${data.features}

## Contributing
${data.contribute}

## Tests
${data.tests}

## Questions
${data.github}
${data.email}
  
`;
}

module.exports = generateMarkdown;
