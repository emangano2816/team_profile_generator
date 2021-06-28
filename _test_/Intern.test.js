const Employee = require("../lib/Employee");
const Intern = require("../lib/Intern")

describe("Intern", () => {
    //Positive test
    it("should return an object", () => {
            //arrange
            const newInt = new Intern();
            //assert
            expect(typeof(newInt)).toBe("object");
    });

    it("should create an object with specified properties", () => {
        const newInt = new Intern('Elizabeth', '1', 'test@test.com','OU');

        expect(newInt.name).toEqual('Elizabeth');
        expect(newInt.id).toEqual('1');
        expect(newInt.email).toEqual('test@test.com');
        expect(newInt.school).toEqual('OU');
    })

    describe("getGitHub", () => {
        it("should return a string", () => {
            const newInt = new Intern('Elizabeth', '1', 'test@test.com','OU');
            const schoolReturned = newInt.getSchool();
            expect(typeof(schoolReturned)).toBe("string");
        })
    })

    describe("getRole", () => {
        it("should return role as Intern", () => {
            const newInt = new Intern();
            const roleReturned = newInt.getRole();
            expect(roleReturned).toEqual("Intern");
        })
    })

});