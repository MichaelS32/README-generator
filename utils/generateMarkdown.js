// function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
let licenseString = ""
function renderLicenseBadge(data) {
  let licenseType = data.license;
  if (licenseType == "MIT") {
    licenseString = `![License](https://img.shields.io/badge/License-MIT-yellow.svg)`
  } else if (licenseType == "GNU General Public License 2.0") {
    licenseString = `![License](https://img.shields.io/badge/License-GPL%20v2-blue.svg)`
  } else if (licenseType == "Apache License 2.0") {
    licenseString = `![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)`
  } else if (licenseType == "GNU General Public License 3.0") {
    licenseString = `![License](https://img.shields.io/badge/License-GPLv3-blue.svg)`
  } else {
    licenseString = "";
  }

  return licenseString
};

// function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(data) {
  if(data.license == "MIT") {
    licenseLink = "https://www.mit.edu/~amini/LICENSE.md";
  } else if (data.license == "GNU General Public License 3.0") {
    licenseLink = "https://www.gnu.org/licenses/gpl-3.0.en.html"
  } else if (data.license == "Apache License 2.0") {
    licenseLink = "https://www.apache.org/licenses/LICENSE-2.0"
  } else if (data.license == "GNU General Public License 2.0") {
    licenseLink = "https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html"
  } else {
    licenseLink = ""
  }     
  return licenseLink;
};

// function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(data) {
  if(data.license != "") {
    return `## License \n Please visit the link for detailed information on this license.\n[${data.license}](${licenseLink})`
  } else {
    return "";
  }
};

//function to generate markdown for README
function generateMarkdown(data) {
  
  renderLicenseBadge(data);
  renderLicenseLink(data);

  return `# ${data.title}

  ## Table of Contents
  -[Description](#description) \n
  -[Installation](#installation) \n
  -[Usage](#usage) \n
  -[Tests](#tests) \n
  -[Contributors](#contributors) \n
  -[License](#license) \n

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

  ${renderLicenseSection(data)} 
  ${licenseString}
  
  ## Questions
  For any questions, please contact me using the info below:
  email- ${data.email}
  GitHub- [${data.username}](https://github.com/${data.username})
  `;
}


module.exports = generateMarkdown;
