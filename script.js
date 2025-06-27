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

OOP CHALLENGES!!!!!------------------------

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

/*
Coding Challenge #2
Your tasks:

Re-create Challenge #1, but this time using an ES6 class (call it 'CarCl')

Add a getter called 'speedUS' which returns the current speed in mi/h (divide
by 1.6)

Add a setter called 'speedUS' which sets the current speed in mi/h (but
converts it to km/h before storing the value, by multiplying the input by 1.6)

Create a new car and experiment with the 'accelerate' and 'brake'
methods, and with the getter and setter.
Test data:
§ Data car 1: 'Ford' going at 120 km/h
GOOD LUCK 😀
*/

//create class
class carCl {
  constructor (make, speed) {
    this.make = make,
    this.speed = speed
  }
//method to accelerate
   accelerate() {
    this.speed += 10
    console.log(`${this.make} is going at ${this.speed} in km/h`)
   }
//method to brake
   brake() {
    this.speed -= 5
    console.log(`${this.make} is going at ${this.speed} in km/h`)
   }
//getter for kmh to miles conversion
  get speedUS () {
    return this.speed / 1.6
  }
//Setter for miles to kmh conversion
  set speedUS (speedinMiles) {
    this.speed = speedinMiles * 1.6
  } 

};

const ford = new carCl('Ford', 120);

ford.accelerate();
ford.brake();

//Using Getter
console.log(`${ford.make} is going at ${ford.speedUS} miles per hour`)

//Using Setter
ford.speedUS = 80
console.log(`${ford.make} is now going at ${ford.speed} Km per hour and ${ford.speedUS} miles per hour`)

