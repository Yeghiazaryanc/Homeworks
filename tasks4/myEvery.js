function callBack(currentValue, index, array) {
    if(currentValue % 2==0){
        return 1;
    } else {
        return 0;
    }
}

function mySome(array, callBack) {
    for(let i = 0; i < array.length; ++i){
       if( !callBack(array[i], i, array)) {
        return false;
       }
    } 
    return true;
}

let arr = [2,4,6,8,7];
console.log(mySome(arr,callBack));