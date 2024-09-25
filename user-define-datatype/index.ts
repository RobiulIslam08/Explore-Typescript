let userId: string | number;

// userId = 101; // no error
// userId = "101"; // no error
// userId = true; // error

function userIdDataType(userId: string | number) {
  console.log(typeof userId);
}

userIdDataType('123'); // no error
userIdDataType(123); // no error
// userIdDataType(true); // error

const isEven = (num: number | string) => {
  if (typeof num === 'number') {
    console.log(typeof num);
    return num % 2 === 0 ? 'even' : 'odd';
  } else {
    console.log(typeof num);
    return Number(num) % 2 === 0 ? 'even' : 'odd';
  }
};

// console.log(isEven(32));
// console.log(isEven('32'));

type Tstudent = {name:string, id:number}
let student:Tstudent = {name:'robi', id:434}
console.log(student)