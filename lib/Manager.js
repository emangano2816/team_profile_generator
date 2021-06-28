//Create Manager sub-class, extension of Employee
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officenumber;
    }
    getOfficenumber() {
        return this.officenumber;
    }
    getRole() {
        return 'Manager';
    }
}

module.exports = Manager;