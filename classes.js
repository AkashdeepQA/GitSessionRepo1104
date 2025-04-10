
class Car {
    //properties
    manufacturer;
    model;
    color;
    numOfWheels;
    //_price; //protected property

    constructor(manufacturer, model, color) {
        this.manufacturer = manufacturer;
        this.model = model;
        this.color = color;
        this.numOfWheels = 4;
    }

    //methods
    start() {
        console.log('Car has started');
    }

    stop() {
        console.log('Car has stopped');
    }

    makeNoise() {
        console.log('Vroom vroom!!');
        //return 'Vroom vroom!!';
    }

    setPrice(price) {
        this._price = price;
    }
}

class EVCar extends Car {
    batteryType;
    constructor(manufacturer, model, color, batteryType) {
        super(manufacturer, model, color);
        this.batteryType = batteryType;
    }

    makeNoise() {
        super.makeNoise();
        console.log('EV cars are silent. They don\'t make noise');
    }
}
/*
let car1 = new Car();
car1.manufacturer = 'Maruti Suzuki';
car1.model = 'Baleno';
car1.color = 'Blue';
car1.numOfWheels = 4;
console.log(`Car1 manufacturer: ${car1.manufacturer}`);
console.log(`Car1 model: ${car1.model}`);
console.log(`Car1 color: ${car1.color}`);
console.log(`Car1 Number of wheels: ${car1.numOfWheels}`);
console.log('Starting the car:')
car1.start();
console.log('Stopping the car:')
car1.stop();

let car2 = new Car();
car2.manufacturer = 'Toyota';
car2.model = 'Fortuner';
car2.color = 'White';
car2.numOfWheels = 4;
console.log(`car2 manufacturer: ${car2.manufacturer}`);
console.log(`car2 model: ${car2.model}`);
console.log(`car2 color: ${car2.color}`);
console.log(`car2 Number of wheels: ${car2.numOfWheels}`);
console.log('Starting the car:')
car2.start();
console.log('Stopping the car:')
car2.stop();

let car3 = new Car('Hyundai', 'Verna', 'Black', 1500000);
console.log(`car3 manufacturer: ${car3.manufacturer}`);
console.log(`car3 model: ${car3.model}`);
console.log(`car3 color: ${car3.color}`);
console.log(`car3 Number of wheels: ${car3.numOfWheels}`);
console.log(`car3 price: ${car3.GetPrice()}`);
console.log('Starting the car:')
car3.start();
console.log('Stopping the car:')
car3.stop();
*/
let EVCar1 = new EVCar('Mahindra', 'BE6', 'Red', 'Lithium Ion');
// console.log(`EVCar1 manufacturer: ${EVCar1.manufacturer}`);
// console.log(`EVCar1 model: ${EVCar1.model}`);
// console.log(`EVCar1 color: ${EVCar1.color}`);
// console.log(`EVCar1 Number of wheels: ${EVCar1.numOfWheels}`);
// console.log(`EVCar1 Battery Type: ${EVCar1.batteryType}`);
// console.log('Starting the car:')
// EVCar1.start();
// console.log('Stopping the car:')
// EVCar1.stop();
// console.log('Make some noise');
EVCar1.makeNoise();

// console.log(EVCar1);

// let jsonString = JSON.stringify(EVCar1);
// console.log(jsonString);

// let objectFromJson = JSON.parse(jsonString);
// console.log(objectFromJson.manufacturer, typeof objectFromJson.manufacturer);
// console.log(objectFromJson.model, typeof objectFromJson.model);
// console.log(objectFromJson.color, typeof objectFromJson.color);
// console.log(objectFromJson.numOfWheels, typeof objectFromJson.numOfWheels);
// console.log(objectFromJson.batteryType, typeof objectFromJson.batteryType);


