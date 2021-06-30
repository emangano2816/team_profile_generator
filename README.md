# Team Profile Generator

## Link(s)

1. [GitHub Repository](https://github.com/emangano2816/team_profile_generator)
2. [Generated index.html](/README_SAMPLE.md)


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

1. 

## Tecnhologies Used

1. Node.js
2. JavaScript

## Installation

You will need node.js, jest, and the inquirer package to run this application.

## Video Demonstration

https://user-images.githubusercontent.com/79860046/123151253-44f00a00-d431-11eb-8d36-ad7c950fee6e.mp4

## License

This application is covered under the MIT license.
