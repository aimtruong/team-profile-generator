
const Intern = require("../lib/Intern.js");

test("gets intern's full info", () => {
    const intern = new Intern(name);

    expect(intern.intInfo()).toHaveProperty("intName");
    expect(intern.intInfo()).toHaveProperty("intId");
    expect(intern.intInfo()).toHaveProperty("intEmail");
    expect(intern.intInfo()).toHaveProperty("intSchool");
});