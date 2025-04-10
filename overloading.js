function greet(){
    console.log('Hello User!!');
}

function greet(firstName){
    console.log(`Hello ${firstName}`);
}

function greet(firstName, age){
    console.log(`Hello ${firstName}.\nYou are ${age} years old.`);
}

greet();
greet('Akashdeep');
greet('Akashdeep', 24);


let num = 10;
num = 20;
num = 30;
console.log(num);