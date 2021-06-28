const Employee = require("../lib/Employee");
const Engineer = require("../lib/Engineer")

describe("Engineer", () => {
    //Positive test
    it("should return an object", () => {
            //arrange
            const newEng = new Engineer();
            //assert
            expect(typeof(newEng)).toBe("object");
    });

    it("should create an object with specified properties", () => {
        const newEng = new Engineer('Elizabeth', '1', 'test@test.com','emangano2816');

        expect(newEng.name).toEqual('Elizabeth');
        expect(newEng.id).toEqual('1');
        expect(newEng.email).toEqual('test@test.com');
        expect(newEng.gitHub).toEqual('emangano2816');
    })

    describe("getGitHub", () => {
        it("should return a string", () => {
            const newEng = new Engineer ('Elizabeth', '1', 'test@test.com','emangano2816');
            const gitReturned = newEng.getGitHub();
            expect(typeof(gitReturned)).toBe("string");
        })
    })

    describe("getRole", () => {
        it("should return role as engineer", () => {
            const newEng = new Engineer ();
            const roleReturned = newEng.getRole();
            expect(roleReturned).toEqual("Engineer");
        })
    })

});