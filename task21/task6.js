
function intersection(set1,set2){
    let result=new Set();
    for (const element of set1) {
         if(set2.has(element)){
            result.add(element);
         }   
    }
    return result;
}

function difference(set1,set2){
    let result=new Set();
    for (const element of set1) {
        if(!set2.has(element)){
            result.add(element);
        }
    }
    return result;
}


const setA = new Set(['reading', 'games', 'music']);
const setB = new Set(['games', 'sports']);

console.log(intersection(setA, setB)); //Set(1) { 'games' }
console.log(difference(setA, setB)); //Set(2) { 'reading', 'music' }