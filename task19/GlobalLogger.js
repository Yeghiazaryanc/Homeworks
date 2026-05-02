
class DataStore{
    username="admin";
};
const store=new DataStore();

const proxyStore=new Proxy(store,{
    get(target,prop,receiver){
        console.log("Reading property: "+prop);
        return Reflect.get(target,prop,receiver);
    },
    set(target,prop,value,receiver){
        console.log("Wriitng property: " + prop + "=" + value);
        return Reflect.set(target,prop,value,receiver);
    }
});

console.log(proxyStore.username);
proxyStore.theme="dark";
