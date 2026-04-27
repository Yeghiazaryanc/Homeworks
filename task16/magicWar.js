
class Character{
    constructor(name,health){
        this.name=name;
        this.health=health;
    }
    getInfo(){
        return this.constructor.name+ ": " + this.name +", HP: "+ this.health;
    }
    attack(){
        throw new Error("Method 'attack()' must be implemented.");
    }
}

class Warrior extends Character{
    constructor(name){
        super(name,150);
    }
    attack(){
        return this.name +" attack wit a sword";
    }
};
class Mage extends Character{
    constructor(name){
        super(name,100);
    }
    attack(){
        return this.name+" casts a spell";
    }
};
class Archer extends Character{
    constructor(name){
        super(name,120);
    }
    attack(){
        return this.name+" shoots an arrow";
    }
};
class CharacterFactory{
    createCharacter(type,name){
        if(typeof type !== "string" && typeof name !=="string"){
            return "The name and type must be string";
        }
        if(type.toLowerCase()==="warrior"){
            return new Warrior(name);
        }
        if(type.toLowerCase()==="mage"){
            return new Mage(name);
        }
        if(type.toLowerCase()==="archer"){
            return new Archer(name);
        }
        return "there is not any character type in our game";
    };
};
const factory = new CharacterFactory();

const warrior = factory.createCharacter("warrior", "Thor");
const mage = factory.createCharacter("mage", "Merlin");
const archer = factory.createCharacter("archer", "Legolas");

console.log(warrior.getInfo()); // "Warrior: Thor, HP: 150"
console.log(mage.getInfo()); // "Mage: Merlin, HP: 100"
console.log(archer.getInfo()); // "Archer: Legolas, HP: 120"

console.log(warrior.attack()); // "Thor attacks with a sword"
console.log(mage.attack()); // "Merlin casts a spell"
console.log(archer.attack()); // "Legolas shoots an arrow"