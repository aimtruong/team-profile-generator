
const Intern = require("../lib/Intern.js");

// checks for intern class
test("is an Intern", () => {
    const intern = new Intern("Jacob");

    // see if name is anything that's not undefined
    expect(intern.fName).toBe("Jacob");

    // see if id is any number
    expect(intern.id).toEqual(expect.any(Number));
    
    // see if email has a @ to be true
    expect(intern.email).toEqual(expect.any(String));

    // see if getRole() returns Intern
    expect(intern.getRole()).toEqual(expect.stringMatching(/Intern/));
});


// test for intern's school
test("gets intern's school", () => {
    const intern = new Intern("Jacob");

    expect(intern.getSchool()).toEqual(expect.any(String));
});


// test for intern's role for 'Intern'
test("gets intern's role 'INTERN'", () => {
    const intern = new Intern("Jacob");

    expect(intern.getRole()).toBe("Intern");
});
