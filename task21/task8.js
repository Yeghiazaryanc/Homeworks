
let cache=new WeakMap();

function heavyCalc(obj){
    if(cache.has(obj)){
        return cache.get(obj);
    }
    let result=0;
    for(let i=0;i<1000000;i++){
        result +=i;
    }
    result=obj.value*10;
    cache.set(obj,result);
    return result;
}

const dataObj = { value: 10 };


console.log(heavyCalc(dataObj)); // 100
console.log(heavyCalc(dataObj)); // 100