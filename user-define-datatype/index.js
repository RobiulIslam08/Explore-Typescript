var userId;
// userId = 101; // no error
// userId = "101"; // no error
// userId = true; // error
function userIdDataType(userId) {
    console.log(typeof userId);
}
userIdDataType('123'); // no error
userIdDataType(123); // no error
// userIdDataType(true); // error
var isEven = function (num) {
    if (typeof num === 'number') {
        console.log(typeof num);
        return num % 2 === 0 ? 'even' : 'odd';
    }
    else {
        console.log(typeof num);
        return Number(num) % 2 === 0 ? 'even' : 'odd';
    }
};
var student = { name: 'robi', id: 434 };
console.log(student);
