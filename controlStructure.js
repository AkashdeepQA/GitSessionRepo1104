//let age = 17;

// if(age < 18){
//     console.log('You are not an adult');
// }
// else{
//     console.log('You are an adult');
// }

// let result = age < 18 ? 'You are not an adult' : 'You are an adult';

// console.log(result);

// if(age < 12){
//     console.log('You are a kid');
// }
// else if(age < 18){
//     console.log('You are a Teenager')
// }
// else{
//     console.log('You are an adult');
// }


const readlineSync = require("readline-sync");

let age = readlineSync.question("Enter your age: ");
let result1 = age < 12 ? 'You are a kid' :
    age < 18 ? 'You are a Teenager' : 'You are an adult';
console.log(result1);


// console.log(result1);


// 1 - One
//2 - two
//3 - three
//4 - four
//5 - five

// let num = 6;

// switch (num) {
//     case 1:
//         console.log('One');
//         break;
//     case 2:
//         console.log('Two');
//         break;
//     case 3:
//         console.log('Three');
//         break;
//     case 4:
//         console.log('Four');
//         break;
//     case 5:
//         console.log('Five');
//         break;
//     default:
//         console.log('You entered a invalid number');
// }