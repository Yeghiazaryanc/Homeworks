
class Hero{
    constructor(){
        this.health=100;
        this.mana=undefined;
    }
    attack(){}
}

const obj=new Hero();
const restoredHero=JSON.parse(JSON.stringify(obj));

console.log("Task 4.1:", restoredHero.health === 100);
console.log("Task 4.2:", restoredHero.hasOwnProperty("mana") === false);
console.log("Task 4.3:", restoredHero.attack === undefined);
