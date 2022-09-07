class Person{
    constructor(name="anonymous" , age= 0){
        this.name = name;
        this.age = age;
    }
    getDescription(){
        return `Hello ${this.name}, is ${this.age} years old`
    }

};

const person1= new Person('John', 19);
console.log(person1.getDescription());
const person2= new Person('Seline', 23);
console.log(person2.getDescription());