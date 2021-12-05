// Packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = ['What is the project name?', 'What is the project description?'];

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
    writeToFile('readme', dataArray);
}

// Function call to initialize app
init();
