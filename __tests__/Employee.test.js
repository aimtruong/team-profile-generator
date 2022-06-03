
const Employee = require("../lib/Employee.js");

// checks for employee class
test("is an Employee", () => {
    const employee = new Employee("Jacob");

    // see if name is anything that's not undefined
    expect(employee.fName).toBe("Jacob");

    // see if id is any number
    expect(employee.id).toEqual(expect.any(Number));
    
    // see if email has a @ to be true
    expect(employee.email).toEqual(expect.any(String));

    // see if getRole() returns Employee
    expect(employee.getRole()).toEqual(expect.stringMatching(/Employee/));
});

// checks for employee's getName()
test("gets employee's Name or returns false", () => {
    const employee = new Employee("Jacob");
    expect(employee.getName()).toEqual(expect.any(String));

    employee.fName = "";
    expect(employee.getName()).toEqual(false);
});

// checks for employee's getId()
test("gets employee's Id", () => {
    const employee = new Employee("Jacob");

    expect(employee.getId()).toEqual(expect.any(Number));
});

// checks for employee's getEmail()
test("gets employee's Email", () => {
    const employee = new Employee("Jacob");

    expect(employee.getEmail()).toEqual(expect.any(String));

});

// checks for employee's getRole()
test("gets employee's Role 'EMPLOYEE'", () => {
    const employee = new Employee("Jacob");

    expect(employee.getRole()).toBe("Employee");
});