
function myInstanceOf(obj,Constructor){
    if(obj===null || (typeof obj !="object" && typeof obj !="function")){
        return false;
    }
    let pro=Object.getPrototypeOf(obj);
    while(pro !== null){
        if(pro===Constructor.prototype){
            return true;
        }
        pro=Object.getPrototypeOf(pro);
    }
    return false;
}

function Animal() {}
function Dog() {}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

const dog = new Dog();

console.log(myInstanceOf(dog, Dog)); // true
console.log(myInstanceOf(dog, Animal)); // true
console.log(myInstanceOf(dog, Array)); // false
console.log(myInstanceOf(123, Number)); // false
console.log(myInstanceOf(null, Object)); //false
console.log(myInstanceOf("hello", String)); // false