// #1
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
    getInfo(){
        return `${this.name} ${this.age}`;
    };
};
class Dog extends Animal{
    constructor(name,age,bread){
        super(name,age);
        this.bread=bread;
    };
    makeSound(){
         console.log("woof");
    };
    getInfo(){
        return`${this.name} ${this.age} ${this.bread}`;
        
    };
};

let dog1=new Dog("Graf",7,"Rotweiller");
dog1.makeSound();
console.log(dog1.getInfo());


// function constructor
function Animal2(name,age){
    this.name=name;
    this.age=age;
};
Animal2.prototype.eat=function(){
    console.log(this.name + " eating");
};
Animal2.prototype.sleep=function(){
    console.log(this.name+" is sleeping");
};
Animal2.prototype.getInfo=function(){
    return `Name: ${this.name}, Age: ${this.age}`;
};

function Dog2(name,age,breed){
    Animal2.call(this,name,age);
    this.bread=breed;
};

Dog2.prototype=Object.create(Animal2.prototype);
Dog2.prototype.constructor=Dog2;
Dog2.prototype.makeSound=function(){
    console.log(this.name + " says Woof");
};
Dog2.prototype.getInfo=function(){
    return Animal2.prototype.getInfo.call(this)+", Breed: "+this.bread;
};

const myAnimal=new Animal2("Generic Animal",6);
console.log(myAnimal.getInfo());
myAnimal.eat();

const myDog=new Dog2("Rex",3,"Rotweiler");
console.log(myDog.getInfo());
myDog.makeSound();
myDog.sleep();