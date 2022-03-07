
const Employee = require("../lib/Employee.js");

// make new employee class
test("is an Employee", () => {
    const employee = new Employee();

    expect(employee.name).toEqual(expect.anything());
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.stringMatching(/^@/));

});