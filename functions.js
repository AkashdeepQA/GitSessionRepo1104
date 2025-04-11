const readline = require('readline-sync');


// function greet(username = 'user') {
//     console.log(`Welcome, ${username}!!`);
//     if(username === 'eshwar')
//         return;
//     console.log('You have successfully logged in to the system!');
//     console.log('==================');
// }

// greet();
// greet('akashdeep.s');
// greet('mahit.p');
// greet('eshwar');

// function calculateAverage(num1, num2, num3) {
//     let average = (num1 + num2 + num3) / 3;
//     console.log('This statement is before the return statement');
//     return average;
//     console.log('This statement is after the return statement');
// }

// let average1 = calculateAverage(10, 20, 30); //20
// let average2 = calculateAverage(100, 200, 300); //200

// let username = 'akashdeep.s';
// let greetArrow = username => console.log(`Hi, Welcome ${username}`);


// let doubleArrow = num => num * 2;
// let result = doubleArrow(15);
// console.log(result);

// let multiplyArrow = (num1, num2) => num1 * num2;
// let multiplyResult = multiplyArrow(10, 20);
// console.log(multiplyResult);

let greetWoParamArrow = () => {
    console.log(`Hi, Welcome user`);
    console.log('Welcome to the application');
    console.log('Happpy to help you!!');
    let age = readline.question('Please enter your age: ');
    return age;
}

let userAge = greetWoParamArrow();
console.log('The users age is: ' + userAge);

//Comment2