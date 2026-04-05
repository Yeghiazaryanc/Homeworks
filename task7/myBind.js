Function.prototype.myApply = function (thisObj , args) {
    myThis = thisObj ?? globalThis;
    let sym = Symbol();
    myThis[sym] = this;
    let res = myThis[sym](...args);
    delete myThis[sym];
    return res;
}

Function.prototype.myBind = function(newObj, ...args1){
    newObj = newObj ?? globalThis;
    const fn = this;
    return function (...args2) {
        return fn.myApply(newObj,[...args1,...args2]);
    }
}
 let obj = {
     name: "Leo",
    age: "22"
 }
 function foo(a, b, c, d){
    console.log(this.age);
    console.log(a+b-c-d);
 }
 let obj2 = {name: "John"}

 let bar = foo.myBind(obj,1,2,4);
 bar(1,2,3,4)
 console.log(obj)