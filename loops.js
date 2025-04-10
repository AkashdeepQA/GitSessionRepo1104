const readline = require('readline-sync')




// let i = 6;

// while (i <= 5) {
//     console.log(i);
//     i++;
// }

// let j = 100;
// do {
//     console.log(j);
//     j++;
// } while (j <= 5)

// for(let k = 1; k <=5; k++){
//     console.log(k);
// }


//Prime number
// let num = 17;
// let i;
// for(i = 2; i < num; i++){
//     if(num % i === 0){
//         console.log(`The number ${num} is not a prime number`);
//         break;
//     }
// }

// if(i === num)
//     console.log(`The number ${num} is a prime number`);



//let num2 = readline.question('Enter a number: ');
//console.log(num2);

for (let i = 1; i <= 30; i++) {
    if (i % 3 === 0)
        continue;
    console.log(i);
}
