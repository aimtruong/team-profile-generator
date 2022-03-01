
const { expect } = require("@jest/globals");
const Employee = require("../lib/Employee.js");

// make new employee class
test("create new Employee class", () => {
    const employee = new Employee("Dave");

    expect(employee.name).toBe("Dave");
    expect(employee.id).toEqual(expect.any(Number));

    const email = "google@gmail.com";
    expect(email).toEqual(expect.stringMatching("@"));
})