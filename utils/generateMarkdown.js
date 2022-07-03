// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
let licenseString = ""
function renderLicenseBadge(license) {
  if (license = "MIT") {
    licenseString = `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
  };
  if (license = "GNU General Public License 2.0") {
    licenseString = `![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)`
  };
  if (license = "Apache License 2.0") {
     licenseString = `![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)`
    };
  if (license = "GNU General Public License 3.0") {
      licenseString = `![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)`
    };
  return licenseString
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
let licenseLink = "";
function renderLicenseLink(license) {
  if(license = "MIT") {
    licenseLink = "https://mit-license.org/";
  }
  if(license = "GNU General Public License 3.0") {
    licenseLink = "https://www.gnu.org/licenses/gpl-3.0.en.html"
  } else {
    licenseLink = ""
  }
        
  return licenseLink;
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license != "") {
    return `## License 
    Please visit ${licenseLink} for detailed information on this license
    `
  }
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  renderLicenseBadge();
  renderLicenseLink();

  return `# ${data.title}

  ## Table of Contents
  *[Description](#description)
  *[Installation](#installation)
  *[Usage](#usage)
  *[Tests](#tests)
  *[Contributors](#contributors)
  *[License](#license)

  ## Description
  ${data.description}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Tests
  ${data.test}

  ## Contributors
  ${data.contributors}

  ${renderLicenseSection()} 
  
  ${licenseString}`;
}


module.exports = generateMarkdown;
