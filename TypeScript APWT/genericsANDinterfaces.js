//Generics
function display(id, name) {
    console.log("Id = ".concat(id, ", Name = ").concat(name));
}
display(101, "Steve");
display("102", "Bill");
var Employee6 = /** @class */ (function () {
    function Employee6(id, name) {
        this.id = id;
        this.name = name;
    }
    Employee6.prototype.display = function () {
        console.log("Id = ".concat(this.id, ", Name = ").concat(this.name));
    };
    return Employee6;
}());
var emp6 = new Employee6(1, "Steve");
emp6.display();
