const { isEmpty, checkCaracters } = require("../validations");

describe("validations tests suites - isEmpty", () => {
    test("should return true as the label is undefined", () => {
        const result = isEmpty();
        expect(result).toBe(true);
    });

    test("should return true as the label is empty", () => {
        const result = isEmpty("");
        expect(result).toBe(true);
    });

    test("should return false as the label is empty", () => {
        const result = isEmpty("Label");
        expect(result).toBe(false);
    });
});

// TODO: Create tests suite for validation function
describe("validations tests suites - checkCaracters", () => {
    test("should return true as the label has number", () => {
        const result = checkCaracters("Label1");
        expect(result).toBe(true);
    });
    test("should return true as the label do not have number", () => {
        const result = checkCaracters("Label");
        expect(result).toBe(false);
    });
}); 
