
class Drink{
    getDescription(){
        return "Unknown Drink";
    };
    getCost(){
        return 0;
    };
};
class Coffee extends Drink{
    getDescription(){
        return "Coffee";
    }
    getCost(){
        return 5
    }
};
class DrinkDecorator extends Drink{
    constructor(drink){
        super();
        this.drink=drink;
    }
    getDescription(){return this.drink.getDescription()};
    getCost(){return this.drink.getCost()};
};
class Milk extends DrinkDecorator{
    getDescription(){return this.drink.getDescription()+", Milk"};
    getCost(){return this.drink.getCost() + 2};
};
class Sugar extends DrinkDecorator{
    getDescription(){return this.drink.getDescription()+", Sugar"};
    getCost(){return this.drink.getCost() + 1};
};
class Chocolate extends DrinkDecorator{
    getDescription(){return this.drink.getDescription()+", Chocolate"};
    getCost(){return this.drink.getCost() + 3};
};
class Caramel extends DrinkDecorator{
    getDescription(){return this.drink.getDescription()+", Caramel"};
    getCost(){return this.drink.getCost() + 1};
}

const coffee = new Coffee();
console.log(coffee.getDescription()); // "Coffee"
console.log(coffee.getCost()); // 5

const coffeeWithMilk = new Milk(coffee);
console.log(coffeeWithMilk.getDescription()); // "Coffee, Milk"
console.log(coffeeWithMilk.getCost()); // 7

const coffeeWithMilkAndSugar = new Sugar(coffeeWithMilk);
console.log(coffeeWithMilkAndSugar.getDescription()); // "Coffee, Milk, Sugar"
console.log(coffeeWithMilkAndSugar.getCost()); // 8

const fullOrder = new Caramel(new Chocolate(coffeeWithMilkAndSugar));
console.log(fullOrder.getDescription()); // "Coffee, Milk, Sugar, Chocolate, Caramel"
console.log(fullOrder.getCost()); // 12