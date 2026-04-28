
class OddValidator{
    static [Symbol.hasInstance](instance){
        if(typeof instance !== "number"){
            return false;
        }
        return instance % 2 !==0;
    }
}
console.log(5 instanceof OddValidator);// true, 5 number and odd
console.log(10 instanceof OddValidator);//false, 10 number, no odd
console.log("7" instanceof OddValidator);//false, 7 string, odd 


