
function withDefaults(target,defaultValue){
    return new Proxy(target,{
        get(target,prop,receiver){
            if(Reflect.has(target,prop)){
                return Reflect.get(target,prop,receiver);
            }else{
                return defaultValue;
            }
        }
    });
};
const user=withDefaults({name:"Alice"},"Not provided");
console.log(user.name);
console.log(user.age);
