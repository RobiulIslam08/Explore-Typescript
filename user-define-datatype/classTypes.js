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
// class User{
// 	name: string;
// 	age: number
// 	constructor(name:string, age:number){
// 		this.name = name;
// 		this.age = age
// 	}
// 	getDetais(): void{
// 		console.log(`my name ${this.name} and age ${this.age}`)
// 	}
// }
// const User1 = new User('robi', 24)
// user1.getDetais()
var User = /** @class */ (function () {
    function User(name, age) {
        this.name = name;
        this.age = age;
    }
    User.prototype.getDetails = function () {
        console.log("My name is ".concat(this.name, " and age is ").concat(this.age));
    };
    return User;
}());
//   for class
//   const User1 = new User('robi', 24);
//   User1.getDetails(); // Output: My name is robi and age is 24
// for inheritecns
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(name, age, studentId) {
        var _this = _super.call(this, name, age) || this;
        _this.studentId = studentId;
        return _this;
    }
    Student.prototype.getStudentDetails = function () {
        console.log("My name is ".concat(this.name, " and age is ").concat(this.age, " and id ").concat(this.studentId));
    };
    return Student;
}(User));
var student1 = new Student('rahad', 8, 434);
student1.getStudentDetails();
student1.getDetails();
