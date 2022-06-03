
const Employee = require("./Employee");

class Manager extends Employee{
    constructor(fName = ""){
        super(fName);
        this.officeNumber = Math.floor(Math.random());
        this.role = "Manager";
    }

    // get Intern's role
    getRole(){
        if(this.role === "Manager"){
            return this.role;
        }
    };
}

module.exports = Manager;