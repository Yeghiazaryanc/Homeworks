
class Service{
    name="AuthService";
    getName(){
        return this.name;
    }
};
const service=new Service();

const boundService=new Proxy(service,{
    get(target,prop,receiver){
        let value=Reflect.get(target,prop,receiver);
        if(typeof value === "function"){
            return value.bind(target);
        }
        return value;
    }
});

const datachedMethod=boundService.getName;
console.log(datachedMethod());// AuthService
