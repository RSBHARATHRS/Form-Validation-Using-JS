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
var Prakash = /** @class */ (function () {
    function Prakash(name, age) {
        this.name = name;
        this.age = age;
    }
    Prakash.prototype.display = function () {
        console.log("Name : " + this.name);
        console.log("Age  : " + this.age);
    };
    return Prakash;
}());
var Raju = /** @class */ (function (_super) {
    __extends(Raju, _super);
    function Raju(name, age, salary, desig) {
        var _this = _super.call(this, name, age) || this;
        _this.salary = salary;
        _this.desig = desig;
        return _this;
    }
    Raju.prototype.displayAll = function () {
        console.log("======================= ");
        console.log("Name : " + this.name);
        console.log("Age  : " + this.age);
        console.log("Name : " + this.salary);
        console.log("Age  : " + this.desig);
    };
    return Raju;
}(Prakash));
var v1 = new Raju("Abi", 25, 5000, "Dev");
v1.display();
v1.displayAll();
