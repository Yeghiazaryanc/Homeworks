
const account = { username: "bob", _password: "supersecret123", balance: 100 };

const secureAccaount=new Proxy(account,{
    get(target,prop,receiver){
        if(typeof prop ==="string" && prop.startsWith('_')){
            return undefined;
        }
        return Reflect.get(target,prop,receiver)
    },
    has(target,prop){
        if(typeof prop === "string" && prop.startsWith('_')){
            return false;
        }
        return Reflect.has(target,prop);
    },
    ownKeys(target){
        const keys=Reflect.ownKeys(target);
        return keys.filter(key=>typeof key !== 'string' || !key.startsWith('_'));
    }
});

console.log(secureAccaount._password);//undefined
console.log('_pasword' in secureAccaount);//falsae
console.log(Object.keys(secureAccaount));//["username","balance"]


