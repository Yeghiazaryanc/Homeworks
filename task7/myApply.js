// "use strict"
Function.prototype.myApply = function (thisObj , args) {
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

function foo(a,b ,c) {
    console.log(this.name);
    console.log(a+b-c);
}
const arr = [50,60,200];
foo.myApply(obj ,arr);