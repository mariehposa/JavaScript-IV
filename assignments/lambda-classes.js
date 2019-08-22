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

class Student extends Person{
    constructor(object){
        super(object);
        this.previousBackground = object.previousBackground;
        this.className = object.className;
        this.favSubjects = object.favSubjects;
        this.listsSubjects = object.listsSubjects;
    }
    PRAssignment(subject){
        console.log(`${this.name} has submitted a PR for ${subject}`)
    }
    sprintChallenge(){
        console.log(`${this.name} has begun sprint challenge on ${subject}`)
    }
}

class ProjectManager extends Instructor{
    constructor(object){
        this.gradClassName = object.gradClassName;
        this.favInstructor = object.favInstructor;
    }
    standUp(channel){
        console.log(`${this.name} announces to ${channel}, @channel standy times!`)
    }
    debugsCode(student, subject){
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}`)
    }
}

