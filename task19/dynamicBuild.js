function createQueryBuilder(){
    const steps=[];
    const proxy= new Proxy({},{
        get(target,prop,receiver){
            if(prop == "execute"){
                return function(){
                    return JSON.stringify(steps);
                };
            }
            return function (...args) {
                steps.push({method:prop,args:args});
                return receiver;
            }
        }
    });
    return proxy;
};

const queryBuilder=createQueryBuilder();
const query=queryBuilder.select('id','name').where('age',18).limit(10).execute();
console.log(query);
