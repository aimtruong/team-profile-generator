
const Manager = require("../lib/Manager.js");

// checks for Manager class
test("is an Manager", () => {
    const manager = new Manager("Jacob");

    // see if name is anything that's not undefined
    expect(manager.fName).toBe("Jacob");

    // see if id is any number
    expect(manager.id).toEqual(expect.any(Number));
    
    // see if email has a @ to be true
    expect(manager.email).toEqual(expect.any(String));

    // see if getRole() returns Manager
    expect(manager.getRole()).toEqual(expect.stringMatching(/Manager/));
});

// test for manager's role for 'Manager'
test("gets intern's role 'MANAGER'", () => {
    const intern = new Manager("Jacob");

    expect(intern.getRole()).toBe("Manager");
});
