
const Engineer = require("../lib/Engineer.js");

// test for each engineer class
test("gets engineer's full info", () => {
    const engineer = new Engineer(name);

    expect(engineer.engInfo()).toHaveProperty("engName");
    expect(engineer.engInfo()).toHaveProperty("engId");
    expect(engineer.engInfo()).toHaveProperty("engEmail");
    expect(engineer.engInfo()).toHaveProperty("engGit");
});