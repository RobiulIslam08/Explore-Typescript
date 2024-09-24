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
var User1 = new User('robi', 24);
User1.getDetails(); // Output: My name is robi and age is 24
