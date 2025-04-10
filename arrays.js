

let fruits = ['Apple', 'Banana', 'Cherry', 'Orange', 'Strawberry',
    'Blueberry', 'Dragonfruit', 'Orange', 'Pomegranate'];

console.log(fruits);
console.log(`The lenght of array is: ${fruits.length}`);

/*
console.log(fruits[1]);
console.log(fruits.at(3));
console.log(fruits.at(-2));

let lastFruit = fruits.pop();
console.log(lastFruit);
console.log('Array after pop: ' + fruits);
fruits.push('Dragonfruit');
console.log('Array after push: ' + fruits);

fruits.unshift('Grapes');
console.log('Array after unshift: ' + fruits);

console.log(fruits.shift());
console.log('Array after shift: ' + fruits);

let i = 0;
while(i < fruits.length){
    console.log(`Fruit at index ${i} is ${fruits[i]}`);
    i++;
}

for(let j = 0; j<fruits.length; j++){
    console.log(`Fruit at index ${j} is ${fruits[j]}`);
}

for(let fruit of fruits){
    console.log(fruit);
}
let i = 1;
fruits.forEach(fruit => {
    console.log(`Fruit ${i}: `);
    console.log('\t' + fruit);
    i++;
});

fruits.splice(1, 2, 'Strawberry', 'Blueberry', 'Draonfruit', 'Pomegranate');
console.log(fruits);


let subFruits = fruits.slice(2, 6);
console.log(subFruits);
console.log(fruits);

let newFruits = ['Guava', 'Grapes', 'Papaya'];
let concatedFruits = fruits.concat(newFruits);
console.log(concatedFruits);

console.log(fruits.lastIndexOf('Orange'));

console.log(fruits.includes('Watermelon'));

let longFruitName = fruits.find(fruit => fruit.startsWith('O'));
console.log(longFruitName);

let longFruitsArr = fruits.filter(fruit => fruit.startsWith('B'));
console.log(longFruitsArr);

let uppercaseFruits = fruits.map(fruit => fruit.toUpperCase());
console.log(uppercaseFruits);

fruits.reverse();
console.log(fruits);
*/
fruits.sort(); // use only for string
console.log(fruits);

let numArr = [4, 8, 52, 19, 21, 7, 16, 5]; //4, 5, 7, 8, 16, 19, 21, 52
numArr.sort((a, b) => a - b); // Asc order
console.log('Arr in Asc Order: ' + numArr);
numArr.sort((a, b) => b - a); // Desc Order
console.log('Arr in Desc Order: ' + numArr);

//This comment is added after first git commit