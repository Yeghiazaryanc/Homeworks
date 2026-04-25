//#1
class Employee{
    constructor(firstName,Lastname){
        this.Lastname=Lastname;
        this.firstName=firstName;
    }
    get fullName(){
        return this.firstName+" "+this.Lastname;
    }
}
let p1=new Employee("Artur","Hakobyan")
//console.log(p1.fullName);

//#2
class Account{
    #password;
    set password(value){
        if(value.length>6){
            this.#password=value;
        }else{
            console.log("password too short");
        };
    };
    get password(){
        return this.#password;
    }
};
let p2=new Account();
p2.password="1516";//password too short
p2.password="1516151";// true

//#3

class Temperature{
    _celsius;
    constructor(celsius){
        this.celsius=celsius;
    };
    set celsius(value){
        this._celsius=value;
    }
    get celsius(){
        return this._celsius;
    }
    get fahrenheit(){
        return (this._celsius*9/5)+32;
    }
}
let p3=new Temperature(20);
console.log(p3.celsius);//20
console.log(p3.fahrenheit);//68

// #4
class Counter{
    count=0;
    increment(){
        this.count++;
    };
    get current(){
        return this.count;
    };
};
let p4=new Counter();
p4.increment();
p4.increment();
p4.increment();
p4.increment();
console.log(p4.current);


//#5
class Product{
    constructor(price){
        this.price=price;
    }
    set price(value){
        this._price=value;
    }
    get price(){
        return this._price*0.9;
        //return this._price - (this._price*10/100)
    }
}

let p5=new Product(5000);
console.log(p5.price);

//#6

class BankAccount{
    constructor(){
        this._balance=0
    };
    deposit(value){
        if(value>0){
            this._balance+=value;
        };
    };
    get balance(){
        return this._balance;
    };
};
let p6=new BankAccount();
p6.deposit(4000);
p6.deposit(3000);
console.log(p6.balance);


//#7
class Rectangle{
    constructor(width,height){
        this.width=width;
        this.height=height;
    };
    set width(value){
        if(value>0){
            this._width=value;
        };
    };
    get width() {
        return this._width;
    };
    set height(value){
        if(value>0){
            this._height=value;
        };
    };
    get height() {
        return this._height;
    };
    get area(){
        return this._width*this._height;
    };
};

let p7=new Rectangle(5,5);
console.log(p7.area);

// #8

class Email{
    constructor(email){
        this.email=email;
    }
    set email(value){
        if(value.includes("@")){
            this._email=value;
        }else{
            console.log("Invalid email");   
        };
    };
    get email(){
        return this._email;
    }
};
let p8=new Email("armen");// false value
p8.email="armen@";// true value
console.log(p8.email);
console.log(p8);


// #9

class Cart{
    constructor(){
        this._total=0;
    };
    addItem(price){
        if(price>0){
            this._total+=price;
        }else{
            console.log("invalid type");
        };
    };
    get total(){
        return this._total;
    };
}

let p9=new Cart();
p9.addItem(1555);
p9.addItem(2000);
console.log(p9.total);

//#10
class Car{
    constructor(){
        this._speed=0;
    }
    set speed(value){
        if(value>200){
            console.log("Too fast");
        }else{
            this._speed=value;
            console.log("normal type");
        };
    };
    get speed(){
        return this._speed;
    }
};
let p10=new Car();
p10.speed=450;// To fast
p10.speed=120;// normal type
console.log(p10);

