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

class Dog {
  constructor(name, breed) {
    this.name = name;
    this.breed = breed;
  }

  bark() {
    console.log(`${this.name} says, Woof Woof!!`);
  }
}

const myDog = new Dog('Mufasa', 'German Shepherd');
myDog.bark();
