const inquirer = require("inquirer");
const employee = require("./lib/Employee");
const manager = require("./lib/Manager");
const engineer = require("./lib/Engineer");
const intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const teamArray = [];

function getTeamInfo () {
    inquirer
        .prompt([
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
                message: "What is the employee's ID number?",
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
                type: 'list',
                name: "empType",
                message: "Select the employee's title.",
                choices: ["Manager", "Engineer","Intern"],
            },
            {
                type: 'input',
                message: "What is the employee's office number?",
                name: 'officeNumber',
                validate: function(text) {
                    const phonePattern = /[0-9]/;
                    return (phonePattern.test(text)) ? true : 'Please provide a valid phone number (i.e., all numerics).';
                },
                when: (answers) => answers.empType === 'Manager',
            },
            {
                type: 'input',
                message: "What is the employee's GitHub username?",
                name: 'GitHub',
                validate: function(text) {
                    return (text !== '') ? true: "Please provide the employee's GitHub username."
                },
                when: (answers) => answers.empType === 'Engineer',
            },
            {
                type: 'input',
                name: 'school',
                message: "What school does the intern attend?",
                validate: function(text) {
                    return (text !== "") ? true : "Please provide the name of the school the intern is attending."
                },
                when: (answers) => answers.empType === 'Intern',
            }           
        ])
        .then ((response) => {
            if (response.empType === 'Manager') {
                teamArray.push(new Manager(response.name, response.id, response.email, response.officeNumber));
                console.log(teamArray);
                addAnotherMember();
            } else if (response.empType === 'Engineer') {
                    teamArray.push(new Engineer(response.name, response.id, response.email, response.GitHub));
                    console.log(teamArray);
                    addAnotherMember();
            } else {
                teamArray.push(new Intern(response.name, response.id, response.email, response.school));
                console.log(teamArray);
                addAnotherMember();
            }
        })
        .catch((error) => {
            console.log('There was an error getTeamInfo().')
        });
};

function addAnotherMember() {
    inquirer
        .prompt([
            {
                type: 'confirm',
                message: 'Would you like to add another memeber to your team?',
                name: 'confirmNewMember',
            }
        ])
        .then ((response) => {
            if(response.confirmNewMember) {
                getTeamInfo();
            } else {
                console.log('Generate HTML function');
            }
        })
        .catch((error) => {
            console.log("There was an error with addAnotherMember().")
        })
}

getTeamInfo();

