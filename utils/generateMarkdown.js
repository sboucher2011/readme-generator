const licenseLinks = ['https://opensource.org/licenses/MIT', 'https://opensource.org/licenses/gpl-license', 'https://opensource.org/licenses/Apache-2.0', 'https://opensource.org/licenses/EPL-2.0'];


// Function that returns a license badge based on which license is passed in
// If there is no license, returns an empty string
function renderLicenseBadge(license) {
    if (license == "MIT") {
      return '![badmath](https://img.shields.io/badge/license-MIT-green)';
    } else if (license == "GNU General Public License") {
      return '![badmath](https://img.shields.io/badge/license-gpl-orange)';
    } else if (license == 'Apache') {
      return '![badmath](https://img.shields.io/badge/license-Apache-blue)';
    } else if (license == 'Eclipse Public License') {
      return '![badmath](https://img.shields.io/badge/license-EPL-red)';
    } else {
      return "";
    }
}

// Function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  link = "";

  if (license == "MIT") {
    link = licenseLinks[0];
  } else if (license == "GNU General Public License") {
    link = licenseLinks[1];
  } else if (license == 'Apache') {
    link = licenseLinks[2];
  } else if (license == 'Eclipse Public License') {
    link = licenseLinks[3];
  }

  return `
## License
${link}
  `;
}

// Function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license != "None") {
    return renderLicenseLink(license);
  } else {
    return ""
  }
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
${renderLicenseSection(data.license)}

## Contributing
${data.contribute}

## Tests
${data.tests}

## Questions
My repository can be found here: (https://github.com//${data.github})
For questions you can contact me via my email: (${data.email})
  
`;
}

module.exports = generateMarkdown;
