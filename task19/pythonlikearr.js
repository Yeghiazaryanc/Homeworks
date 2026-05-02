const arr=[10,20,30,40];

const pythonArray= new Proxy(arr,{
    get(target,prop,receiver){
        let index=Number(prop);
        if(typeof index =="number" && index<0){
            let real_index=target.length+index;
            return Reflect.get(target,real_index,receiver);
        }
        return Reflect.get(target,prop,receiver);
    }
})


console.log(pythonArray[0]);
console.log(pythonArray[-1]);
console.log(pythonArray[-2]);
console.log(pythonArray[-3]);
