
const inquirer = require("inquirer");
const generatePage = require("./src/page-template");
const fs = require("fs");

const manInfo = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "manName",
            message: "What is the manager's name? "
        },
        {
            type: "input",
            name: "manId",
            message: "What is the manager's employee ID? "
        },
        {
            type: "input",
            name: "manEmail",
            message: "What is the manager's email? "
        },
        {
            type: "input",
            name: "manOffice",
            message: "What is the manager's office number? "
        },
//        {
//            type: "list",
//            name: "confirmEmployee",
//            message: "Would you like to add an engineer, intern, or the team is complete? ",
//            choices: ["Engineer", "Intern", "Completed Team"],
//            default: "Engineer"
//        }
    ])
    //.then(manData => {
    //    if(manData.confirmEmployee === "Engineer"){
    //        return engInfo(manData);
    //    }
    //    else if(manData.confirmEmployee === "Intern"){
    //       return intInfo(manData);
    //    }
    //    else if(manData.confirmEmployee === "Completed Team"){
    //        return manData;
    //    }
    //});
};

const engInfo = engineers => {
    // if no "engineer" array
    if(!engineers.eng){
        engineers.eng = [];
    };

    return inquirer.prompt([
        {
            type: "input",
            name: "engName",
            message: "What is the engineer's name? "
        },
        {
            type: "input",
            name: "engId",
            message: "What is the engineer's employee ID? "
        },
        {
            type: "input",
            name: "engEmail",
            message: "What is the engineer's email? "
        },
        {
            type: "input",
            name: "engGit",
            message: "What is the engineer's GitHub username? "
        },
        {
            type: "confirm",
            name: "confirmEngInfo",
            message: "Would you like to add another engineer? ",
            default: false
        }
    ])
    .then(engData => {
        engineers.eng.push(engData);
        if(engData.confirmEngInfo){
            return engInfo(engineers);
        }
        else{
            return engineers;
        }
    });
};

const intInfo = interns => {
    // if no 'interns' array
    if(!interns.int){
        interns.int = [];
    };

    return inquirer.prompt([
        {
            type: "input",
            name: "intName",
            message: "What is the intern's name? "
        },
        {
            type: "input",
            name: "intId",
            message: "What is the intern's employee ID? "
        },
        {
            type: "input",
            name: "intEmail",
            message: "What is the intern's email? "
        },
        {
            type: "input",
            name: "intSchool",
            message: "Where did the intern graduated? "
        },
        {
            type: "confirm",
            name: "confirmIntInfo",
            message: "Would you like to add another intern? ",
            default: false
        }
    ])
    .then(intData => {
        interns.int.push(intData);
        if(intData.confirmIntInfo){
            return intInfo(interns);
        }
        else{
            return interns;
        }
    });
};

const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile("dist/index.html", fileContent, (err) => {
            if(err){
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: "file written successfully"
            });
        });
    });
};

const copyFile = () => {
    return new Promise((resolve, reject) => {
        fs.copyFile("./src/style.css", "./dist/style.css", err => {
            if(err){
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: "File copied!"
            });
        });
    });
};

manInfo()
    .then(engInfo)
    .then(intInfo)
    .then(answers => {
        return generatePage(answers);
    })
    .then(pageHTML => {
        console.log("Team profile was created successfully! Find the HTML and CSS in the dist folder.");
        return writeFile(pageHTML);
    })
    .then(writeFileResponse => {
        console.log(writeFileResponse);
        return copyFile();
    })
    .then(writeCopyResponse => {
        console.log(writeCopyResponse);
    })
    .catch(err => {console.log(err)});