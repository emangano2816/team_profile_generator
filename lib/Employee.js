//Create Employee parent class
class Employee {
    constructor() {
        this.name;
        this.id;
        this.email;
    }

    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        return 'Employee'
    }
}
module.exports = Employee;