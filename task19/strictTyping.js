
class Product{
    constructor(title,price){
        this.title=title;
        this.price=price;
    }
};

const productProxy=new Proxy(new Product("Notebook",1000),{
    set(target,prop,value,receiver){
        if(prop == "price"){
            if(typeof value != "number" || value<0){
                throw new TypeError("Invalid price");
            }
        }
        return Reflect.set(target,prop,value,receiver);
    }
});

productProxy.price=1200;
console.log(productProxy.price);
//productProxy.price=-120;
//console.log(productProxy.price);// Type Error
productProxy.price="Free";
console.log(productProxy.price);// Type Error


