
const Employee = require("./Employee");

class Engineer extends Employee{
    constructor(fName = ""){
        super(fName);
        this.role = "Engineer";
        this.github = "github";
    }

    // get engineer's github
    getGithub(){
        if(!this.github){
            return false;
        }
        return this.github;
    };

    // get engineer's role
    getRole(){
        if(this.role === "Engineer"){
            return this.role;
        }
    }
}

module.exports = Engineer;