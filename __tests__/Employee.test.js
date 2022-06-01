
const Employee = require("../lib/Employee.js");

// checks for employee class
test("is an Employee", () => {
    const employee = new Employee();

    // see if name is anything that's not undefined
    expect(employee.getName()).toEqual(expect.anything());
    
    // see if getName() fails
    employee.fName = "";
    expect(employee.getName()).toEqual(false);

    // see if id is any number
    expect(employee.getId()).toEqual(expect.any(Number));

    // see if getId() fails
    employee.id = "1";
    expect(employee.getId()).toEqual(false);
    
    // see if email has a @ to be true
    expect(employee.getEmail()).toEqual(expect.stringMatching(/@/));
    
    // see if getEmail fails
    employee.email = "employee.com";
    expect(employee.getEmail()).toEqual(false);

    // see if getRole() returns Employee
    expect(employee.getRole()).toEqual(expect.stringMatching(/Employee/));

});