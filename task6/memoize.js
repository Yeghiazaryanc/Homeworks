
function factorial(a) {
 let res = 1;
 for (let i = 2; i <= a; ++i) {
   res *= i;
 }
 return res;
}

function memoize(cb) {
    const cache={};
    return function(arg){
         if(arg in cache){
            return cache[arg];
        }
      let result=cb(arg);
      cache[arg]=result; 
      return result
    }
 }

const foo = memoize(factorial);

console.log(foo(5)); // 120
console.log(foo(5)); // 120