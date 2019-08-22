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

class Instructor extends Person{
    constructor(object){
        super(object);
        this.specialty = object.specialty;
        this.favLanguage = object.favLanguage;
        this.catchPhrase = object.catchPhrase;
    }
    demo(subject){
        console.log(`Today we are learning about ${subject}`);
    }
    grade(student, subject){
        console.log(`${student.name} receives a perfect score on ${subject}`);
    }
}