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
class User {
	name: string;
	age: number;
  
	constructor(name: string, age: number) {
	  this.name = name;
	  this.age = age;
	}
  
	getDetails(): void {
	  console.log(`My name is ${this.name} and age is ${this.age}`);
	}
  }
  
  const User1 = new User('robi', 24);
  User1.getDetails(); // Output: My name is robi and age is 24
  