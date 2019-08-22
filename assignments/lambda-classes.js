// CODE here for your Lambda Classes
class Person {
    constructor(object){
        this.name = object.name;
        this.age = object.age;
        this.location = object.location;
    }
    speak(){
        console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
    }
}