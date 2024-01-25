// TODO: Include packages needed for this application

const inquirer = require('inquirer');

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
    }
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
