'use strict';
/* function Car(colour, brand) {
  this.colour = colour;
  this.brand = brand;

  this.drive = function () {
    console.log(`The ${colour} ${brand} is driving`);
  };
}

const myCar = new Car('red', 'Toyota');

myCar.drive(); */

/* class Car1 {
  constructor(colour, brand) {
    this.colour = colour;
    this.brand = brand;
  }
  drive() {
    console.log(`The ${this.colour} ${this.brand} is driving`);
  }
}

const myCar1 = new Car1('Green', 'Honda');
myCar1.drive(); */

/* function Dog(name, breed) {
  this.name = name;
  this.breed = breed;

  this.bark = function () {
    console.log(`${this.name} says, Woof!!`);
  };
}

const myDog = new Dog('Simba', 'Golden Retriever');
console.log(myDog);
console.log(myDog.name);
console.log(myDog.breed);
myDog.bark();

const dog2 = new Dog('Luna', 'Husky');
dog2.bark();
 */

/* Your tasks:

Use a constructor function to implement a 'Car'. A car has a 'make' and a
'speed' property. The 'speed' property is the current speed of the car in
km/h

Implement an 'accelerate' method that will increase the car's speed by 10,
and log the new speed to the console

Implement a 'brake' method that will decrease the car's speed by 5, and log
the new speed to the console

Create 2 'Car' objects and experiment with calling 'accelerate' and
'brake' multiple times on each of them
Test data:
§ Data car 1: 'BMW' going at 120 km/h
§ Data car 2: 'Mercedes' going at 95 km/h
GOOD LUCK 😀 */

/* const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};


Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed}`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed}`);
};

const myCar = new Car('BMW', 120);
const myCar1 = new Car('Mercedes', 95);

myCar.accelerate();
myCar1.accelerate();
myCar.brake();
myCar1.brake(); */
