

class Employee{
    constructor(fName = ""){
        this.fName = fName;
        this.id = Math.floor(Math.random());
        this.email = "email@email.com";
        this.role = "Employee";
    }
    
    // get employee's name 
    getName(){
        if(!this.fName){
            return false;
        }
        return this.fName;
    };

    // get employee's ID
    getId(){
        if(typeof this.id != "number"){
            return false;
        }
        return this.id;
    };

    // get employee's email
    getEmail(){
        if(!this.email.includes("@")){
            return false;
        }
        return this.email;
    };

    // ask for employee's role
        // returns employee
    getRole(){
        if(this.role === "Employee"){
            return this.role;
        }
    };
}


module.exports = Employee;