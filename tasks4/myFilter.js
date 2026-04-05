function callBack(currentValue, index, array) {
    if(currentValue < 6){
        return true;
    } 
    //return currentValue < 6;   
}

function myFilter(array, callback) {
    let newArr = [];
    let j = 0;
    for(let i = 0; i < array.length; ++i) {
        if(callBack(array[i],i,array)){
            newArr[j] = array[i];
            ++j;
        }
    }

    return newArr;
}

let arr = [1,2,3,4,5,6,7,8];
console.log(myFilter(arr, callBack));