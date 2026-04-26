class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    introduce(){
        console.log(`hi my name is ${this.name}, im a ${this.age} year old`);
    }
};
class Student extends Person{
    constructor(name,age,institute){
        super(name,age);
        this.institute=institute;
    }
    study(){
        console.log(`${this.name} studies at ${this.institute}`);
    }
};
let st1=new Student("Lyov",22,"Picsart Academy");
st1.introduce();
st1.study();


// function constructor

function Person2(name,age){
    this.name=name;
    this.age=age;
};
Person2.prototype.introduce=function(){
    console.log(`hi my name is ${this.name}, im a ${this.age} year old`);
};

function Student2(name,age,institute){
    Person2.call(this,name,age);
    this.institute=institute;
};

Student2.prototype=Object.create(Person2.prototype);
Student2.prototype.constructor=Student2;

Student2.prototype.study=function(){
    console.log(`${this.name} studies at ${this.institute}`);
}

const st2=new Student2("Lyov",22,"Picsart Academy");
st2.introduce();
st2.study();