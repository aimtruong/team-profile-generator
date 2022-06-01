
const Engineer = require("../lib/Engineer.js");

// test for each engineer class
test("gets engineer's full info", () => {
    const engineer = new Engineer();


    expect(engineer.getGithub()).toEqual();

    // see if getGithub fails
    engineer.github = "john";
    expect(engineer.getGithub()).toEqual(false);

});