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
  console.log("generateMarkdown");

  renderLicenseBadge('MIT');
  return `
    # ${data.title}

    ## Description
    ${data.description}

    ## Table of Contents

    ## Installation

    ## Usage

    ## Credits

    ## License

    ## Badges

    ## Features

    ## Contributing

    ## Tests

  
`;
}

module.exports = generateMarkdown;
