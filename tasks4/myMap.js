function callBack(currentValue, index, array){
    return currentValue *=2;
}

function myMap(array, callBack) {
    let newArray = [];
    for(let i = 0; i < array.length; ++i) {
        newArray[i] = callBack(array[i], i, array);
    }
    return newArray;
}
let arr = [1,2,3,4,5];
console.log(myMap(arr , callBack));