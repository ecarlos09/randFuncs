const { TestScheduler } = require("jest");
const myFuncs = require("../randFuncs.js");

describe("testing journey function", () => {
    let journey = myFuncs.journey
    test("journey receives a string argument for destination", () => {
        expect(journey('Colombia', 16, "London")).toEqual(expect.any(String));
    });
});

describe("testing camel case function", () => {
    let pascalCase = myFuncs.pascalCase
    test("converts string to pascal cased string", () => {
        expect(pascalCase("two words")).toEqual("Two Words");
    });

    test("returns an error when a number is passed as an argument", () => {
        expect(pascalCase(5)).toThrowError(new Error('Did you input a string?'));
    });
});
