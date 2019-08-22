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
        // this.listsSubjects = object.listsSubjects;
    }
    PRAssignment(subject){
        console.log(`${this.name} has submitted a PR for ${subject}`)
    }
    sprintChallenge(subject){
        console.log(`${this.name} has begun sprint challenge on ${subject}`)
    }
    listsSubjects (){
			this.favSubjects.forEach(element => {
				console.log(element);
			});
    }
}

class ProjectManager extends Instructor{
    constructor(object){
        super(object)
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

const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
});
  
const karim = new Instructor({
    name: 'karim Bertacche',
    location: 'Italy',
    age: 30,
    favLanguage: 'Javascript',
    specialty: 'Mobile',
    catchPhrase: `Okay Bye! See ya guys tomorrow!`
});

var mariam = new ProjectManager({
    name: 'Adedeji Mariam',
    location: 'Nigeria',
    age: 23,
    favLanguage: 'javascript',
    specialty: 'Full stack',
    catchPhrase: `Oopsy!`,
    gradClassName: 'WEBEU3',
    favInstructor: 'Gabe',
})

const esther = new ProjectManager({
    name: 'Esther Agbaje',
    location: 'Nigeria',
    age: 23,
    favLanguage: 'TypeScript',
    specialty: 'Front-End',
    catchPhrase: `Hey!`,
    gradClassName: 'UX3',
    favInstructor: 'Linda',
})

const funmilayo = new Person({
    name: 'Olufunmilayo',
    location: 'UK',
    age: 21,
})

const kiyani = new Person({
    name: 'Kiyani',
    location: 'Ivory Coast',
    age: 21,
})

const dani = new Student({
    name: 'Danika Thomson',
    location: 'UK',
    age: 'har-har',
    previousBackground: 'someBackground',
    className: 'WEBEU3',
    favSubjects: ['JavaScript', 'HTML', 'CSS', 'LESS']
})

const sandrava = new Student({
    name: 'Sandrava',
location: 'South Africa',
    age: '25',
    previousBackground: 'someBackground',
    className: 'WEBEU3',
    favSubjects: ['LESS', 'Repl.it', 'LESS', 'CSS']
})

fred.demo('JavaScript')
karim.demo('UX')

fred.grade(sandrava, 'JavaScript')
karim.grade(dani, 'Repl.it')

funmilayo.speak();
kiyani.speak();

mariam.standUp('Karim Bertacche');

esther.standUp('WebEU3');

mariam.debugsCode(funmilayo, 'JavaScript')

esther.debugsCode(dani, 'Data science')

sandrava.listsSubjects();
sandrava.PRAssignment('Sql')
sandrava.sprintChallenge('Android')

dani.listsSubjects();
dani.PRAssignment('React')
dani.sprintChallenge('Python')

