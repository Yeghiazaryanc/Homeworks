
class Player{
    constructor(name="Alex",score=1500,isOnline=true){
        this.name=name;
        this.score=score;
        this.isOnline=isOnline;
    }
}

const obj=new Player();
const jsonStr=JSON.stringify(obj);


console.log("Task 1.1:", typeof jsonStr === "string");
console.log("Task 1.2:", jsonStr.includes("Alex") && jsonStr.includes("1500"));