



function pipe(...funcs) {
    return function(arg){
        let currentResult=arg;
        for(let fn of funcs){
            currentResult=fn(currentResult);
        }
        return currentResult;
    }   
 }


const add5 = a => a + 5;
const double = a => 2 * a;
const sub4 = a => a - 4;

const func = pipe(add5, double, sub4); 
console.log(func(2));