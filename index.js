//imports the inquire npm
const inquirer = require('inquirer');
const fs = require('fs');

//prompts the user with each of the questions
const promptUser = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'characters',
        message: 'Enter up to three characters for the graphic.',
        validate(input) {

            if (input.length < 4 && input.length > 0) {
                return true;
            }

        throw Error('Please enter 1-3 characters.');
        },
      },
      {
        type: 'input',
        name: 'tcolor',
        message: 'Enter a text color name or hexidecimal in the following format: #000000.',
        validate(input) {
            if (/^#[0-9A-F]{6}$/i.test(input)) {
                return true;
            }
            else if (/^[a-z]*$/.test(input.toLowerCase())) {
                return true;
            }
            throw Error('Please enter a color name or hexidecimal');
        },
      },

      {
        type: 'list',
        name: 'shape',
        message: 'Choose one of the following shapes',
        choices: [
            'Circle', 
            'Triangle', 
            'Square', 
        ],
      },
      {
        type: 'input',
        name: 'scolor',
        message: 'Enter a shape color name or hexidecimal in the following format: #000000',
        validate(input) {
            if (/^#[0-9A-F]{6}$/i.test(input)) {
                return true;
            }
            else if (/^[a-z]*$/.test(input.toLowerCase())) {
                return true;
            }
            throw Error('Please enter a color name or hexidecimal');
        },
      },

    ]);
  };

  function init() {
    promptUser()
      
};

// Function call to initialize app
init();