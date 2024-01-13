// TODO: Include packages needed for this application
const inq = require('inquirer');
const fs = require('fs');
const licenseMD= require(`./utils/generateMarkdown.js`)

// TODO: Create an array of questions for user input
const questions = [
    "please enter project name", 
    "please enter description:",
    "please enter installation instructions:",
    "please enter usage information:",
    "please enter contribution guidelines:",
    "please enter test instructions:",
    "please select your license type:"];


const generateREADME = ({name, description, install, usage, contribute, test, license}) =>
    `# ${name}

    ## Description
    
   ${description}
    
    ## Table of Contents 
    
    - [Installation](#installation)
    - [Usage](#usage)
    - [Credits](#credits)
    - [License](#license)
    
    ## Installation
    
    ${install}
    
    ## Usage
    
    ${usage}
    
    ## How to Contribute
    
   ${contribute}

    ## Tests
    
    ${test}
    
    ${licenseMD.renderLicenseSection(license)}`


    inq
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: `${questions[0]}`,
    },
    {
      type: 'input',
      name: 'description',
      message:`${questions[1]}`,
    },
    {
      type: 'input',
      name: 'install',
      message: `${questions[2]}`,
    },
    {
      type: 'input',
      name: 'usage',
      message:`${questions[3]}`,
    },
    {
      type: 'input',
      name: 'contribute',
      message: `${questions[4]}`,
    },
    {
      type: 'input',
      name: 'test',
      message: `${questions[5]}`,
    },
    {
      type: 'list',
      name: 'license',
      message: `${questions[6]}`,
      choices: ['Apache License 2.0', 'GNY General Public License v3.0', 'MIT License', 'BSD 2-Clause SImplified License', 'BDS 3-Clause', 'Boost Software License', "Creative Commons Zero v1.0 Universal", 'Eclipse PUblic License 2.0', 'GNU General Public License v2.0', 'GNU Lesser General Public License v2.1', 'Mozilla Public License 2.0', 'The Unlicense']
    },
  ])
  .then((answers) => {
    const readMeContent = generateREADME(answers);

    fs.writeFile('README.md', readMeContent, (err) =>
      err ? console.log(err) : console.log('Successfully created index.html!')
    );
  });


// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
