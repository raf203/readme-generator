//  Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
//  Create an array of questions for user input
const questions = [
    {
      type: 'input',
      message: "Enter your project title.",
      name: 'title',
    },
    {
      type: 'input',
      message: "Enter a description of your project.",
      name: 'description',
    },
    {
      type: 'input',
      message: 'Enter the installation instructions.',
      name: 'install',
      default: 'Install npm and inquirer.',
    },
    {
        type: 'input',
        message: 'Enter a description of the application usage.',
        name: 'usage',
      },
      {
        type: 'input',
        message: 'Enter informations about how people can contribute.',
        name: 'contribute',
      },
      {
          type: 'input',
          message: 'Enter any problems found in the tests performed.',
          name: 'test',
      },
      {
        type: 'input',
        message: 'Enter your GitHub username.',
        name: 'gitHubUser',
      },
      {
        type: 'input',
        message: "Enter your name.",
        name: 'name',
      },

      {
        type: 'input',
        message:'Enter your email address.',
        name:'email',
      },
      {
        type:'list',
        name: 'license',
        message: "Choose one project license for your project.",
        choices: [
          'MIT',
          'GNU',
          'None'
        ]}
    ]
// Create a function to initialize app
    function init() {
        inquirer.prompt(questions)
      .then((response)=> {
        console.log(response)
    
        // Licenses
        //MIT
        if(response.license == 'MIT')
        {
          genLicense = fs.readFileSync('MIT.txt', 'utf-8')
          licenseBadge = `[![MIT License](https://img.shields.io/badge/license-${response.license}-red.svg)](#license)`
          licenseLink = ` https://opensource.org/licenses/MIT`
        }
        //GNU
        else if (response.license == 'GNU')
        {
          genLicense = fs.readFileSync('GNU.txt', 'utf-8') 
    
          licenseBadge = `[![GNU License](https://img.shields.io/badge/license-${response.license}-red.svg)](#license)`
          licenseLink = `https://opensource.org/licenses/GPL-3.0`
            
        }
        
        // No License
        else if(response.license == 'None')
        {
          genLicense = 'No license specified'
          licenseBadge = `https://choosealicense.com/(#license)`
    
        }
    
        // Define name of created file
        const fileName = 'ReadMeCreated.md'
    
        // GitHub
        const profile = "https://github.com/" + response.gitHubUser
        
        // Read me's structure
      let readContents = `# ${response.title}
This project is licensed under the ${licenseBadge}.
This is the license link ${licenseLink}.
        
## Description:
    ${response.description}
        
        
## Table of contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
        
## Installation
    ${response.install}

## Usage
    ${response.usage}
    
## License
   ${genLicense}
  
## Contributing
    ${response.contribute}
    
## Tests
    ${response.test}

## Questions
    Any problem you can contact: ${response.name}
    Email:  ${response.email}

    Github: ${profile} `
    
    
// Create README file
    fs.writeFile(fileName, readContents, (err) => err ? console.log(err) : console.log('Read me file created!'))
      });
      }


// Function call to initialize app
init();
