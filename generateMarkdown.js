// renders the license badge and passes the input from the user to create the badge
function renderLicenseBadge(license) {
  if (license) {
    const licenseURL = `https://img.shields.io/badge/license-${encodeURIComponent(
      license
    )}-blueviolet`;
    return `![${license} License](${licenseURL})`;
  } else {
    return "";
  }
}
// creates a license link based on the license selected from the inquirer inputs
function renderLicenseLink(license) {
  if (license === "MIT") {
    return "[MIT License](https://opensource.org/licenses/MIT)";
  } else if (license === "Apache 2.0") {
    return "[Apache 2.0 License](https://opensource.org/licenses/Apache-2.0)";
  } else if (license === "GPLv3") {
    return "[GPLv3 License](https://www.gnu.org/licenses/gpl-3.0.en.html)";
  } else if (license === "BSDv3") {
    return "[BSDv3 License](https://opensource.org/license/bsd-3-clause/)";
  } else {
    return "";
  }
}

// renders the license link
function renderLicenseSection(license) {
  if (license) {
    return `This project is licensed under the ${renderLicenseLink(
      license
    )} license.`;
  } else {
    return "";
  }
}

// generates README file and passes data from the inquirer inputs to the README template

function generateMarkdown(data) {
  return `# ${data.projectName}
  
  ${renderLicenseBadge(data.license)}
  
  ## Description
  
  ${data.projectDescription}

   <br/>

  ## Table of Contents
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)

  <br/>
  
  ## Installation

      ${data.dependencies}

  
  <br/>

  ## Usage

  ${data.howTo}

  <br/>
  
  ## Credits

      Github: ${data.username} Email: ${data.email}
  
  ## License

  ${renderLicenseSection(data.license)}
  
  <br/>

  ## Badges

  ${renderLicenseBadge(data.license)}  

  <br/>
  
  ## Questions

  If you have any questions, please feel free to email me at ${data.email}

  [Link to my GitHub](https://github.com/${data.username}/)
  
  <br/>

  ## How to Contribute

  ${data.contribute}

  <br/>
  
  ## Test
      ${data.test}`;
}

module.exports = generateMarkdown;
