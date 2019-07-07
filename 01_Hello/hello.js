console.log("Hello, World")

const person = {
    name: "Zukile Mtotso",
    age: 100
};
module.exports = person;

/*create object
//file name person.js
class Student{
    constructor(name, age){
        this.name = name;
        this.gradeYear = gradeYear;
        this.group = group;
    }

    greeting(){
        console.log(`My name is ${this.name} and I am doing grade ${this.gradeYear}`);
    }
}

module.exports = Student; */

//file name index.js

console.log("hello world");

const person = require('./person');
//const Student = require('./person')

console.log(person.name)

//const student1 = new Student('Odwa Mtotso', 'First Year');

//student1.greeting();


//create object
class Person{
    constructor(name, gradeYear, group){
        this.name = name;
        this.gradeYear = gradeYear;
        this.group = group;
    }

    greeting(){
        console.log(`My name is ${this.name} and I am doing ${this.gradeYear}`);
    }
}

module.exports = Person;


const Person = require('./person');

console.log("hello world");

const person = require('./person');


console.log(person.name)

const person1 = new Person('Odwa Mtotso', 'First Year');

person1.greeting();