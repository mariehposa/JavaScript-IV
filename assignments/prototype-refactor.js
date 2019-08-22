/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday


function Person(name, age){
  this.name = name;
  this.age = age;
  this.stomach = [];
}

Person.prototype.eat = function (edible) {
  this.stomach.push(edible)
}

Person.prototype.poop = function () { 
  this.stomach = [] 
}

Person.prototype.greet = function	(){
  return (`My name is ${this.name} and I am ${this.age}`)
}

const mariam = new Person("Mariam", 23)

mariam.eat('rice')

console.log(mariam)

mariam.poop()

console.log(mariam)

//Task 2
function Car(model, carMake){
  this.model = model;
  this.carMake = carMake;
  this.odometer = 0;
  this.crashed = false;
}

Car.prototype.drive = function (distance) {
  if(this.crashed)
    return `I crashed at ${this.odometer} miles!`
  this.odometer += Number(distance)
  return `I did not crash and i am at ${this.odometer} miles now`;
}

Car.prototype.crash = function () {
  this.crashed = true;
}

Car.prototype.repair = function () { this.crashed = false; }

var aCar = new Car('YC', 'BMW');

//Task 3
function Baby(name, age) {
  Person.call(this, name, age)
}

Baby.prototype = Object.create(Person.prototype);

Baby.prototype.play = function () { return `I love to play and I am ${this.age} years old...`}

var mine = new Baby('Mine', 3)

//Task 4
function Truck(age, type){
  this.age = age;
  this.type = type;
  this.tankLevel = 10;
  this.miles = 0;
}

Truck.prototype.drive = function (miles) {
  if(Number(miles) <= this.tankLevel){
    this.miles += Number(miles)
    return `We have covered ${miles} miles`
  }

  return `Fuels tank is not sufficient, maybe refill.`
}

Truck.prototype.refill = function (litres) { this.tankLevel += Number(litres)}

var truck = new Truck(2, 'Toyota')
*/
/*
2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.
*/

//Task 1
class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
      this.stomach = [];
    }

    eat(edible) {
    	this.stomach.push(edible)
		}

		greet(){
			return (`My name is ${this.name} and I am ${this.age}`)
		}

		poop() { 
			this.stomach = [] 
		}	
}
const mariam = new Person("Mariam", 23)
mariam.eat('rice');
console.log(mariam);
console.log(mariam.greet());
mariam.poop();
console.log(mariam);

//Task 2
class Car {
	constructor(model, carMake) {
		this.model = model;
		this.carMake = carMake;
		this.odometer = 0;
		this.crashed = false;
	}
	drive(distance) {
		if (this.crashed)
			return `I crashed at ${this.odometer} miles!`;
		this.odometer += Number(distance);
		return `I did not crash and i am at ${this.odometer} miles now`;
	}
	crash() {
		this.crashed = true;
	}
	repair() { this.crashed = false; }
}

var myCar = new Car('YC', 'BMW');

//Task 3
class Baby extends Person{
  constructor(name, age, toy) {
    super(name, age)
    this.toy = toy;
  }
  play() { return `I love to play with ${this.toy} and I am ${this.age} years old...`; }
}
var mine = new Baby('Mine', 3, 'train')
