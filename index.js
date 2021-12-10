// Packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = ['What is the project name?', 
                  'What is the project description?', 
                  'What steps are required to install your project?', 
                  'What instructions and/or examples does the user need to use your program?', 
                  'Do you have any collaborators or third party assets that require attribution?', 
                  'Would you like to describe any features?', 
                  'How can someone contribute to your package?', 
                  'Does your appliction have tests? How would someone run them?',
                  'Enter your github username',
                  'What is the email address someone should send questions to?'];

const promptUser = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'title',
        message: questions[0]
      },
      {
        type: 'input',
        name: 'description',
        message: questions[1]
      },
      {
        type: 'input',
        name: 'install',
        message: questions[2]
      },
      {
        type: 'input',
        name: 'usage',
        message: questions[3]
      },
      {
        type: 'input',
        name: 'credits',
        message: questions[4]
      },
      {
        type: 'input',
        name: 'features',
        message: questions[5]
      },
      {
        type: 'input',
        name: 'contribute',
        message: questions[6]
      },
      {
        type: 'input',
        name: 'tests',
        message: questions[7]
      },
      {
        type: 'input',
        name: 'github',
        message: questions[8]
      },
      {
        type: 'input',
        name: 'email',
        message: questions[9]
      }
    ]);
};

// Function to write README file
function writeToFile(fileName, data) {
    const readmeFile = generateMarkdown(data);

    fs.writeFile('./dist/'+ fileName + '.md', readmeFile, err => {
        if (err) {
            console.log(err);
            return;
        }
        console.log("Readme file created! Your file is in the dist folder")
    })
}

// Function to initialize app
function init() {
    const dataArray = ['test', 'tester'];
    
}

// Function call to initialize app
init();

promptUser().then(answers => writeToFile('readme', answers));

