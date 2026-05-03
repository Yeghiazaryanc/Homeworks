
const secrets = new WeakMap();

class PLayer{
    constructor(token){
        secrets.set(this,token);
    }
    getSecret(){
        return secrets.get(this);
    }
}
const p1=new PLayer("super_secret");

console.log("Task 19.1:", p1.getSecret() === "super_secret");
console.log("Task 19.2:", p1.token === undefined);

