function getPrototypeMethods(obj){
    if(obj === null || obj=== undefined){
        return [];
    }
    let proto=Object.getPrototypeOf(obj);
    if(proto === null){
        return [];
    }
    const propertyNames=Object.getOwnPropertyNames(proto);
    const methods=propertyNames.filter((name)=>{
        return typeof proto[name]==="function";
    });
    return methods;
}
function User(name) {
 this.name = name;
}

User.prototype.sayHi = function () {
 return `Hi, ${this.name}`;
};

User.prototype.getName = function () {
 return this.name;
};

const user = new User("Alex");

console.log(getPrototypeMethods(user)); // ["sayHi", "getName"] order may vary
console.log(getPrototypeMethods({ a: 1 })); // []
console.log(getPrototypeMethods([]).includes("push")); // true

const base = {
 x: 10,
 print() {
   return "hello";
 }
};

const obj = Object.create(base);

console.log(getPrototypeMethods(obj)); // ["print"]
console.log(getPrototypeMethods(Object.create(null))); // []

