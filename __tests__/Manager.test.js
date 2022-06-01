
const Manager = require("../lib/Manager.js");

// test for manager class
test("gets manager's full info", () => {
    const manager = new Manager(name);

    expect(manager.()).toHaveProperty("manName");
    expect(manager.()).toHaveProperty("manId");
    expect(manager.()).toHaveProperty("manEmail");
    expect(manager.()).toHaveProperty("manOffice");
});