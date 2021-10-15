var demo = /** @class */ (function () {
    function demo() {
        console.log("Hi msg from constructor");
    }
    demo.prototype.meth = function () {
        console.log("Hi msg from method");
    };
    return demo;
}());
var d = new demo();
