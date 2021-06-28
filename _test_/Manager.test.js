const Employee = require("../lib/Employee");
const Manager = require("../lib/Manager")


describe("Manager", () => {
    //Positive test
    it("should return an object", () => {
            //arrange
            const newMan = new Manager();
            //assert
            expect(typeof(newMan)).toBe("object");
    });

    it("should create an object with specified properties", () => {
        const newMan = new Manager('Elizabeth', '1', 'test@test.com','9999999999');

        expect(newMan.name).toEqual('Elizabeth');
        expect(newMan.id).toEqual('1');
        expect(newMan.email).toEqual('test@test.com');
        expect(newMan.officeNumber).toEqual('9999999999');
    })

    describe("getOfficeNumber", () => {
        it("should return a string", () => {
            const newMan = new Manager ('Elizabeth', '1', 'test@test.com','9999999999');
            const offNumReturned = newMan.getOfficeNumber();
            expect(typeof(offNumReturned)).toBe("string");
        })
    })

    describe("getRole", () => {
        it("should return role as manager", () => {
            const newMan = new Manager ();
            const roleReturned = newMan.getRole();
            expect(roleReturned).toEqual("Manager");
        })
    })

});