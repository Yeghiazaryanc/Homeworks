
const mixedMap = new Map([
  [1, 'num'],
  ['str', 'text'],
  [true, false]
]);

const iterator=mixedMap.entries();
let current=iterator.next();

while(!current.done){
    const [key,value]=current.value;
    if(typeof value === "string"){
        console.log([key,value]);
    }
    current=iterator.next();
}
