//Create Intern sub-class, extension of Employee
class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school;
    }
    getSchool() {
        return this.school;
    }
    getRole() {
        return 'Intern';
    }
}

module.exports = Intern;