
const statsMap=new WeakMap();

function getStats(originalObj){
    return statsMap.get(originalObj);
}

function trackAccess(obj){
    statsMap.set(obj,0);
    return new Proxy(obj,{
        get(target,prop){
            const count=statsMap.get(target);
            statsMap.set(target,count+1);
            return Reflect.get(target,prop);
        }
    })
}
const original = { a: 1, b: 2 };
const proxy = trackAccess(original);


console.log(proxy.a);
console.log(proxy.b);
console.log(proxy.a);
console.log(getStats(original));
