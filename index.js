// TODO: Include packages needed for this application
const inq = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    "please enter project name", 
    "please enter description:",
    "please enter installation instructions:",
    "please enter usage information:",
    "please enter contribution guidelines:",
    "please enter test instructions:",
    "please select your license type:"];

    const generateREADME = ({name, description, install, usage, contribute, test}) =>
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
    
    ${test}`

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
      name: 'instalInstruct',
      message: `${questions[2]}`,
    },
    {
      type: 'input',
      name: 'userInfo',
      message:`${questions[3]}`,
    },
    {
      type: 'input',
      name: 'contribute',
      message: `${questions[4]}`,
    },
    {
      type: 'input',
      name: 'testInstruct',
      message: `${questions[5]}`,
    },
    {
      type: 'list',
      name: 'liscence',
      message: `${questions[6]}`,
      choices: ['Apache License 2.0', 'GNY General Public LIcense v3.0', 'MIT License', 'BSD 2-Clause SImplified LIcense', 'BDS 3-Clause', 'Boost Software License', "Creative Commons Zero v1.0 Universal", 'Eclipse PUblic License 2.0', 'GNU General Public License v2.0', 'GNU Lesser General Public License v2.1', 'Mozilla Public License 2.0', 'The Unlicense']
    },
  ])
  .then((answers) => {
    const readMeContent = generateREADME(answers);

    fs.writeFile('README.md', readMeContent, (err) =>
      err ? console.log(err) : console.log('Successfully created index.html!')
    );
  });


// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
