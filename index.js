const inquirer = require("inquirer");
const employee = require("./lib/Employee");
const manager = require("./lib/Manager");
const engineer = require("./lib/Engineer");
const intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const teamArray = [];

function getManagerInfo () {
    inquirer
        .prompt([
            {
                type: 'input',
                message: "What is the manager's name?",
                name: 'name',
                validate: function(text) {
                    return (text !=='') ? true : 'Employee name is required.';
                }
            },
            {
                type: 'input',
                message: "What is the manager's employee ID number?",
                name: 'id',
                validate: function(text) {
                    return (text !=='') ? true : 'Employee ID is required.';
                }
            },
            {
                type: 'input',
                message: "What is the manager's email address",
                name: 'email',
                validate: function(text) {
                    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
                    return (emailPattern.test(text)) ? true : 'Please provide a valid email address for the employee.';
                }
            },
            {
                type: 'input',
                message: "What is the employee's office number?",
                name: 'officeNumber',
                validate: function(text) {
                    const phonePattern = /[0-9]/;
                    return (phonePattern.test(text)) ? true : 'Please provide a valid phone number (i.e., all numerics).';
                }
            }
        ])
        .then ((response) => {
                teamArray.push(new Manager(response.name, response.id, response.email, response.officeNumber));
                console.log(teamArray);
                teamComplete();
        })
        .catch((error) => {
            console.log('There was an error getManagerInfo().')
        });
}           

function teamComplete() {
    inquirer
    .prompt([
        {
            type: 'list',
            name: "teamComplete",
            message: "What would you like to do next?",
            choices: ["Add a team member.", "My team is complete."],
        }
    ])
    .then ((response) => {
        if(response.teamComplete ==="My team is complete.") {
            console.log ("Generate HTML function.")
        } else {
            addAnotherMember();
        }
    })
    .catch((error) => {
        console.log("Error with teamComplete().")
    })
}

function addAnotherMember() {
    inquirer
        .prompt([
            {
                type: 'list',
                name: "addAnother",
                message: "Which would you like to add to your team?",
                choices: ["Engineer","Intern"],
            },
            {
                type: 'input',
                message: "What is the employee's name?",
                name: 'name',
                validate: function(text) {
                    return (text !=='') ? true : 'Employee name is required.';
                }
            },
            {
                type: 'input',
                message: "What is the employee's employee ID number?",
                name: 'id',
                validate: function(text) {
                    return (text !=='') ? true : 'Employee ID is required.';
                }
            },
            {
                type: 'input',
                message: "What is the employee's email address",
                name: 'email',
                validate: function(text) {
                    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
                    return (emailPattern.test(text)) ? true : 'Please provide a valid email address for the employee.';
                }
            },
            {
                type: 'input',
                message: "What is the employee's GitHub username?",
                name: 'GitHub',
                validate: function(text) {
                    return (text !== '') ? true: "Please provide the employee's GitHub username."
                },
                when: (answers) => answers.addAnother === 'Engineer',
            },
            {
                type: 'input',
                name: 'school',
                message: "What school does the intern attend?",
                validate: function(text) {
                    return (text !== "") ? true : "Please provide the name of the school the intern is attending."
                },
                when: (answers) => answers.addAnother === 'Intern',
            }           
        ])
        .then ((response) => {
            if (response.addAnother === 'Engineer') {
                    teamArray.push(new Engineer(response.name, response.id, response.email, response.GitHub));
                    console.log(teamArray);
                    teamComplete();
             } else {
                teamArray.push(new Intern(response.name, response.id, response.email, response.school));
                console.log(teamArray);
                teamComplete();
             }
        })
        .catch((error) => {
            console.log('There was an error addAnotherMember().')
        });
};

getManagerInfo();

