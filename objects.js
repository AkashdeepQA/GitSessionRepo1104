let key = 'noOfGears';

let bike = {
    manufacturer: 'Bajaj',
    model: 'Avenger',
    color: 'Forest Green',
    engineCC: 330,
    topSpeed: 220,
    [key]: 5
};

for(let key in bike){
    console.log(`The key is ${key} and the value is ${bike[key]}`);
}

//add aproperty
//bike.noOfGears = 5;

//remove a property
//delete bike.topSpeed;


//console.log(typeof bike);
//console.log(bike);

//console.log(`I own ${bike.manufacturer} ${bike['model']} bike`);