
class DatabaseConnection{
    constructor(){
        this.id=Math.random();
    }
}
let instance=null;
const SingletonDB=new Proxy(DatabaseConnection,{
    construct(target,args){
        if(!instance){
            instance = Reflect.construct(target,args);
        }
        return instance;
    }
})
const db1=new SingletonDB();
const db2=new SingletonDB();

console.log(db1.id === db2.id);//true
