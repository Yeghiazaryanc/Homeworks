
function makeDeepImmutable(obj){
    if(typeof obj !== "object" || obj === null){
        return obj;
    }
    return new Proxy(obj,{
        get(target,prop,receiver){
            const value=Reflect.get(target,prop,receiver);
            if(typeof value === 'object' && value !== null){
                return makeDeepImmutable(value);
            }
            return value;
        },
        set(){
            throw new Error("Object is read_only");
        },
        deleteProperty(){
            throw new Error("Object is read-only");
        },
        setPrototypeOf(){
            throw new Error("Object is read-only");
        },
    });
};
const constantData=makeDeepImmutable({version:"1.0.0",meta:{author:"Admin",tags:["JS","proxy","Security"]}});
//constantData.version="1.0.4";
//delete constantData.version;
console.log(constantData.version);// 1.0.0


console.log(constantData.meta.author);// Admin
//constantData.meta.author="Hacker";//"Object is read-only"

//constantData.meta.tags.push("hack");// "Object is read-only"