const Employee = require("../lib/Employee");


describe("Employee", () => {
    //Positive test
    it("should return an object", () => {
            //arrange
            const newEmp = new Employee();
            //assert
            expect(typeof(newEmp)).toBe("object");
    });

    it("should create an object with specified properties", () => {
        const newEmp = new Employee('Elizabeth', '1', 'test@test.com');

        expect(newEmp.name).toEqual('Elizabeth');
        expect(newEmp.id).toEqual('1');
        expect(newEmp.email).toEqual('test@test.com');
    })

    describe("getName", () => {
        it("should return a string", () => {
            const newEmp = new Employee ('Elizabeth', '1', 'test@test.com');
            const nameReturned = newEmp.getName();
            expect(typeof(nameReturned)).toBe("string");
        })
    })

    describe("getId", () => {
        it("should return a string", () => {
            const newEmp = new Employee ('Elizabeth', '1', 'test@test.com');
            const idReturned = newEmp.getId();
            expect(typeof(idReturned)).toBe("string");
        })
    })

    describe("getEmail", () => {
        it("should return a string", () => {
            const newEmp = new Employee ('Elizabeth', '1', 'test@test.com');
            const emailReturned = newEmp.getId();
            expect(typeof(emailReturned)).toBe("string");
        })
    })

    describe("getRole", () => {
        it("should return role as employee", () => {
            const newEmp = new Employee ('Elizabeth', '1', 'test@test.com');
            const roleReturned = newEmp.getRole();
            expect(roleReturned).toEqual("Employee");
        })
    })

});

