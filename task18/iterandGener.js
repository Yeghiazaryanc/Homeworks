//#1
const counter={
    start:1,
    end:3,
    [Symbol.iterator](){
        let current=this.start;
        let last=this.end;
        return {
            next(){
                if(current<=last){
                    return {value:current++,done:false};
                }
                return {value:undefined,done:true};
            }
        }
    }
};
for (const num of counter) {
  console.log(num);
}

//#2
function* fibobacci(){
    let [prev,curr]=[1,2];
    while(true){
        yield prev;
        [prev,curr]=[curr,prev+curr];
    }
};
const [a,b,c,d]=fibobacci();
console.log(a,b,c,d);


// #3
function* trafficLight(){
    while(true){
        yield "Green";
        yield "Yellow";
        yield "Red";
    }
}
const light = trafficLight();
console.log(light.next().value);
console.log(light.next().value);
console.log(light.next().value);
console.log(light.next().value);

//#4
function* generateId(){
    let id=1;
    while(true){
        yield `id_${id++}`;
    }
}
const idGen = generateId();
console.log(idGen.next().value);
console.log(idGen.next().value);
console.log(idGen.next().value);
//console.log([...generateId()])// կհանգեցնի անվերջ ցիկլի և հիշողության սպառման (Crash), քանի որ այն երբեք done: true չի ստանա։


//#5
function* piggyBank(){
    let balance=0;
    while(true){
        let depozit=yield balance;
        if(depozit) balance+=depozit;
    }
}
const bank = piggyBank();
bank.next(); // Initialize the generator

console.log(bank.next(50).value);
console.log(bank.next(25).value);

//#6
function* range(start,end){
    for(let i=start;i<=end;i++){
        yield i;
    }
};
const numbers = [...range(2, 5)];
console.log(numbers);

//#7

function* filterEven(array){
    for(let num of array){
        if(num % 2 === 0) yield num;
    }
}
const data = [1, 2, 3, 4, 5, 6];
const result = [];

for (const num of filterEven(data)) {
  result.push(num);
  if (result.length === 2) break; // Stop after 2 matches
}

console.log(result);


//#8

function* quoteCarousel(quotes){
    let i=0;
    while(true){
        yield quotes[i % quotes.length];
        i++;
    }
}
const carousel = quoteCarousel(["Q1", "Q2", "Q3"]);
console.log(carousel.next().value);
console.log(carousel.next().value);
console.log(carousel.next().value);
console.log(carousel.next().value);