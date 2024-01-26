// TODO: Include packages needed for this application

const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const promptUser = async () => {
    try {
      const answers = await inquirer.prompt([
        {
          type: 'input',
          name: 'projectTitle',
          message: 'Enter your project title:',
        },
        {
          type: 'input',
          name: 'description',
          message: 'Enter a brief description:',
        },
        {
          type: 'input',
          name: 'installation',
          message: 'Enter installation instructions:',
        },
        {
          type: 'input',
          name: 'usage',
          message: 'Enter usage information:',
        },
        {
          type: 'list',
          name: 'license',
          message: 'Choose a license:',
          choices: ['MIT', 'GPL', 'Apache'],
        },
        {
          type: 'input',
          name: 'contributing',
          message: 'Enter contribution guidelines:',
        },
        {
          type: 'input',
          name: 'tests',
          message: 'Enter test instructions:',
        },
        {
          type: 'input',
          name: 'githubUsername',
          message: 'Enter your GitHub username:',
        },
        {
          type: 'input',
          name: 'email',
          message: 'Enter your email address:',
        },
      ]);

// TODO: Create a function to write README file
 // Generate README based on user responses
 generateREADME(answers);
    } catch (error) {
    console.error('Error during prompt:', error);
    }
    };

  const generateREADME = (answers) => {
    //Build README content based on user responses
    const readmeContent = `
    # ${answers.projectTitle}

    ## Description
    ${answers.description}

    ## Table of Contents
    - [Installation](#installation)
    - [Usage](#usage)
    - [License](#license)
    - [Contributing](#contributing)
    - [Tests](#tests)
    - [Questions](#questions)

    ## Installation
    ${answers.installation}

    ## Usage
    ${answers.usage}

    ## License
    ![License Badge](https://img.shields.io/badge/license-${answers.license}-brightgreen)
      
    This application is covered under the ${answers.license} license.

    ## Contributing
    ${answers.contributing}

    ## Tests
    ${answers.tests}

    ## Questions
    For additional questions, contact:
    - GitHub: [${answers.githubUsername}](https://github.com/${answers.githubUsername})
    - Email: ${answers.email}
        `;
      
      //Writes the README content from above to a README.md file
      fs.writeFileSync('README.md', readmeContent)

      console.log('README.md created successfully!');
    };

// Create a function to initialize app
function init() {
    promptUser();
};
// Function call to initialize app
init();
