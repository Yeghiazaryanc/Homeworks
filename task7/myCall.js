// "use strict"


Function.prototype.myCall = function (thisObj , ...args) {
    myThis = thisObj ?? globalThis;
    let sym = Symbol();
    myThis[sym] = this;
    let res = myThis[sym](...args);
    delete myThis[sym];
    return res;
}

let obj = {
    name: "John",
    age: "30"
};

function foo(a , b) {
    console.log(this.name);
    console.log(a+b);
}
foo.myCall(obj ,10 , 20);