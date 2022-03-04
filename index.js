
const inquirer = require("inquirer");

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
        {
            type: "confirm",
            name: "confirmManInfo",
            message: "Would you like to add another manager? ",
            default: false
        }
    ])
    .then(manData => {
        managers.push(manData);
        if(manData.confirmManInfo){
            return manInfo(managers);
        }
        else{
            return managers;
        }
    });
};

const engInfo = engineers => {
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

manInfo()
    .then(engInfo)
    .then(intInfo)
    .then(answers => console.log(answers))
    .catch(err => {console.log(err)});