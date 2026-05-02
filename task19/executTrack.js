
function slowTask(iterations){
    let count=0;
    for(let i=0;i<iterations;i++) count++;
    return count;
};

function profile(fn){
    return new Proxy(fn,{
        apply(target,thisArg,argumentsList){
            let start=performance.now();
            let result=Reflect.apply(target,thisArg,argumentsList);
            let end=performance.now();
            console.log("Execution Time: " + (end-start).toFixed(4) + " ms");
            return result;
        }
    });
};

const profiledTask=profile(slowTask);
console.log(profiledTask(1000000));
