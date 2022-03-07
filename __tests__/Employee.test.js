
const Employee = require("../lib/Employee.js");

// make new employee class
test("is an Employee", () => {
    const employee = new Employee();

    expect(employee.name).toBeCalledWith(expect.anything());
});