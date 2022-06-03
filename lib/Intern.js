
const Employee = require("./Employee");

class Intern extends Employee{
    constructor(fName = ""){
        super(fName);
        this.role = "Intern";
        this.school = "school";
    }

    // get Intern's school
    getSchool(){
        if(!this.school){
            return false;
        }
        return this.school;
    };

    // get Intern's role
    getRole(){
        if(this.role === "Intern"){
            return this.role;
        }
    };
}

module.exports = Intern;