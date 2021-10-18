var Emp = /** @class */ (function () {
    function Emp(name, age) {
        this.name = name;
        this.age = age;
    }
    Emp.prototype.display = function () {
        console.log("Name : " + this.name + " Age : " + this.age);
    };
    return Emp;
}());
var a = new Emp("Raju", 25);
a.display();
