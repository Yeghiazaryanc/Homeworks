const account ={
    balance:1000,
    currency:"USD",
    [Symbol.toPrimitive](hint){
        if(hint === "number"){
            return this.balance;
        };
        if(hint === "string"){
            return "Accaount Balance: "+ this.balance + " " + this.currency;
        }
        if(hint === "default"){
        return this.balance;
        }
    }
}

console.log(+account);// 1000
console.log(String(account));// "Account Balance: 1000 USD"
console.log(account + 500); // 1500
