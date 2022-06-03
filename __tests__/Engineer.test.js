
const Engineer = require("../lib/Engineer.js");

// checks for engineer class
test("is an Engineer", () => {
    const engineer = new Engineer("Jacob");

    // see if name is anything that's not undefined
    expect(engineer.fName).toBe("Jacob");

    // see if id is any number
    expect(engineer.id).toEqual(expect.any(Number));
    
    // see if email has a @ to be true
    expect(engineer.email).toEqual(expect.any(String));

    // see if getRole() returns Employee
    expect(engineer.getRole()).toEqual(expect.stringMatching(/Engineer/));
});

// test for engineer's github
test("gets engineer's Github", () => {
    const engineer = new Engineer("Jacob");

    expect(engineer.getGithub()).toEqual(expect.any(String));

});

// test for engineer's role for 'Engineer'
test("gets engineer's role 'ENGINEER'", () => {
    const engineer = new Engineer("Jacob");

    expect(engineer.getRole()).toBe("Engineer");
});