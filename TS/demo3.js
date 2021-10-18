var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Employees = /** @class */ (function () {
    function Employees(name, age, salary, desig) {
        this.name = name;
        this.age = age;
        this.salary = salary;
        this.desig = desig;
    }
    Employees.prototype.displayAll = function () {
        console.log("======****************========= ");
        console.log("Name : " + this.name);
        console.log("Age  : " + this.age);
        console.log("Name : " + this.salary);
        console.log("Age  : " + this.desig);
    };
    return Employees;
}());
var Developer = /** @class */ (function (_super) {
    __extends(Developer, _super);
    function Developer(name, age, salary, desig) {
        return _super.call(this, name, age, salary, desig) || this;
    }
    return Developer;
}(Employees));
var Tester = /** @class */ (function (_super) {
    __extends(Tester, _super);
    function Tester(name, age, salary, desig) {
        return _super.call(this, name, age, salary, desig) || this;
    }
    return Tester;
}(Employees));
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(name, age, salary, desig) {
        return _super.call(this, name, age, salary, desig) || this;
    }
    return Manager;
}(Employees));
var d1 = new Developer("Darshan", 25, 50000, "Dev");
var t1 = new Tester("Tarun", 22, 35000, "Tester");
var m1 = new Manager("Manoj", 35, 75000, "Manager");
d1.displayAll();
t1.displayAll();
m1.displayAll();
