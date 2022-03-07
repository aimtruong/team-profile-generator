
const Manager = require("../lib/Manager.js");

// test for manager class
test("gets manager's full info", () => {
    const manager = new Manager(name);

    expect(manager.manInfo()).toHaveProperty("manName");
    expect(manager.manInfo()).toHaveProperty("manId");
    expect(manager.manInfo()).toHaveProperty("manEmail");
    expect(manager.manInfo()).toHaveProperty("manOffice");
});