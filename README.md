# Team Profile Generator

![MIT License](https://img.shields.io/badge/License-MIT-yellow.svg)

## Link(s)

1. [GitHub Repository](https://github.com/emangano2816/team_profile_generator)
2. [Generated index.html](/dist/index.html)


## User Story

```text
AS A manager
I WANT to generate a webpage that displays my team's basic info
SO THAT I have quick access to their emails and GitHub profiles
```

## Acceptance Criteria

```text
GIVEN a command-line application that accepts user input
WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input
WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address
WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab
WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated
```

## Achieving Acceptance Criteria

1. Upon invoking the application, the user is prompted to enter information about various team members.   Once information has been provided for each team member the application generates an index.html that displays a formatted team roster based on the user input.
2. In the generated team roster, clicking on the user's email address opens and populates the TO field of the email with the address of the team member.
3. In the genreated team roster, clicking on the user's GitHub username opens the user's GitHub profile in a new tab.
4. Upon invoking the application, the user is prompted to enter information about the manager.  Specifically, the application requires information about the manager's name, employee ID, email address, and office number.
5. After providing the team manager's information, the user is then asked if they would like to add another member to their team or if the team is finished.  If the user chooses to add another team member, they then receive a prompt asking if they would like to add an engineer or an intern.
6. Upon selecting the option to add an engineer, the user is asked to provide the following information about the engineer: name, employee ID, email address, and GitHub username.  Once this information is provided, the user receives the prompt to: add another team member or team is finished.
7. Upon selecting the option to add an intern, the user is asked to provide the following information about the intern: name, employee ID, email address, and School.  Once this information is provided, the user receives the prompt to: add another team member or team is finished.
8. Upon selecting the option 'team is finished', the application generates an HTML file that includes the user's input.

Additionally, the application uses the Inquirer and Jest packages and includes a class for Employee, Manager, Engineer, and Intern.

## Tecnhologies Used

1. Node.js
2. npm (inquirer, jest)
4. JavaScript

## Installation

You will need node.js, the Jest package, and the Inquirer package.

## Video Demonstration

https://user-images.githubusercontent.com/79860046/123992101-4ec9be00-d999-11eb-9b8a-f394bfdd35e4.mp4

## License

This application is covered under the MIT license.
