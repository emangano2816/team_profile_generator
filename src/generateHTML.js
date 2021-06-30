let dynamicHTML = [];

function createHTML(teamArray) {
    let member;
    for (let i=0; i < teamArray.length; i++) {
        if (teamArray[i].getRole()==='Manager') {
            
            member = 
            `<div class='employee'>
                <div class='employee-header'>
                    <h2 class='name'>${teamArray[i].name}</h2>
                    <h3 class='title'>${teamArray[i].getRole()}</h3>
                </div>
                <div class='employee-info'>
                    <p><strong>Employee ID: </strong>${teamArray[i].id}</p>
                    <p><strong>Email Address: </strong><a href="mailto:${teamArray[i].email}">${teamArray[i].email}</a></p>
                    <p><strong>Office Phone: </strong> <a href="tel:${teamArray[i].officeNumber}">${teamArray[i].officeNumber}</a></p>
                </div>
            </div>`;
            dynamicHTML.push(member);
        } else if (teamArray[i].getRole()==='Engineer') {
            member = 
            `<div class='employee'>
                <div class='employee-header'>
                    <h2 class='name'>${teamArray[i].name}</h2>
                    <h3 class='title'>${teamArray[i].getRole()}</h3>
                </div>
                <div class='employee-info'>
                    <p><strong>Employee ID: </strong>${teamArray[i].id}</p>
                    <p><strong>Email Address: </strong><a href="mailto:${teamArray[i].email}">${teamArray[i].email}</a></p>
                    <p><strong>GitHub Account: </strong> <a href="https://github.com/${teamArray[i].gitHub}" target="_blank" rel="noreferrer noopener" >${teamArray[i].gitHub}</a></p>
                </div>
            </div>`;
            dynamicHTML.push(member);
        } else {
            member = 
            ` <div class='employee'>
                <div class='employee-header'>
                    <h2 class='name'>${teamArray[i].name}</h2>
                    <h3 class='title'>${teamArray[i].getRole()}</h3>
                </div>
                <div class='employee-info'>
                    <p><strong>Employee ID: </strong>${teamArray[i].id}</p>
                    <p><strong>Email Address: </strong><a href="mailto:${teamArray[i].email}">${teamArray[i].email}</a></p>
                    <p><strong>School Attending: </strong> ${teamArray[i].school}</p>
                </div>
            </div>`;
            dynamicHTML.push(member);
        }
    } 
    return dynamicHTML;
}

function generateHTML(teamArray) {
    createHTML(teamArray);

    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <!--link to google fonts-->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inria+Sans:wght@300&display=swap" rel="stylesheet">
    <!--link to custom stylesheet-->
    <link rel="stylesheet" href="./assets/css/reset.css">
    <link rel="stylesheet" href="./assets/css/style.css">

    <title>Team Profile Generator</title>
    </head>
    <body>
    <header class='header'>
        <h1>TEAM PROFILE</h1>
    </header>

    <main class='main'>  
    
    <!--dynamic code goes here-->
    ${dynamicHTML.toString().replace(/,/g,"\n")}
    
    </main>

    </body>
    </html>
    `
}

module.exports ={
    createHTML,
    generateHTML
}