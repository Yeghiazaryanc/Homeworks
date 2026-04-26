
class Animal{
    constructor(name,age){
        this.name=name;
        this.age=age;
    };
    eat(){
        console.log("animal eat");
    };
    sleep(){
        console.log("animal sleep");
    };
};
class Dog extends Animal{
    constructor(name,age,bread){
        super(name,age);
        this.bread=bread;
    };
    makeSound(){
        console.log("Woof");
    };
};
class Puppy extends Animal{
    constructor(name,age,bread,owner){
        super(name,age);
        this.bread=bread;
        this.owner=owner;
    };
    play(){
        console.log("Play");
    };
};
let myPupy=new Puppy("Archuk",3,"Pitbull","Dog");
Object.setPrototypeOf(Puppy.prototype,Dog.prototype);
Object.setPrototypeOf(Puppy,Dog);
myPupy.makeSound();
myPupy.sleep();


// fucntion constructor

function Animal2(name,age){
    this.name=name;
    this.age=age;
};
Animal2.prototype.eat=function(){
    console.log(this.name+" is eating");
};
Animal2.prototype.sleep=function(){
    console.log(this.name+" is slepping");
};
function Dog2(name,age,bread){
    Animal2.call(this,name,age);
    this.bread=bread;
};

Dog2.prototype=Object.create(Animal2.prototype);
Dog2.prototype.constructor=Dog2;

Dog2.prototype.makeSound=function(){
    console.log(this.name+ " says Woof");
};

function Puppy2(name,age,owner){
    Animal2.call(this,name,age);
    this.owner=owner;
};

Puppy2.prototype=Object.create(Animal2.prototype);
Puppy2.prototype.constructor=Puppy2;

Puppy2.prototype.play=function(){
    console.log(this.name+ " is playing");
};

const myPupy2=new Puppy2("Max",2,"Aram");
console.log(myPupy2.name);
console.log(myPupy2.owner);
myPupy2.eat();
myPupy2.play();

//myPupy2.makeSound();//Error

Object.setPrototypeOf(Puppy2.prototype,Dog2.prototype);
myPupy2.makeSound();//Max says Woof
myPupy2.sleep();