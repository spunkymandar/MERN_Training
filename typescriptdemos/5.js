//working with object
var person = {
    firstName: "Allie",
    lastName: "Grater",
    age: 50,
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
};
console.log(person.fullName());
var emp, _a = void 0, _b = _a.firstName, firstName = _b === void 0 ? 'bob' : _b, _c = _a.lastname, lastname = _c === void 0 ? 'willi' : _c;
// console.log(emp.firstname);
