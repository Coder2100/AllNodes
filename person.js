
// module wrapper function
//(function (exports, require, module, __filename, __dirname){

//})

//file directory

console.log(__dirname, __filename)

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