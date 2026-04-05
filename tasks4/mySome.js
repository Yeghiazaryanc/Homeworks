function callBack(currentValue, index, array) {
    if(currentValue % 2==0){
        return 1;
    } else {
        return 0;
    }
}

function mySome(array, callBack) {
    for(let i = 0; i < array.length; ++i){
       if( callBack(array[i], i, array)) {
        return true;
       }
    } 
    return false;
}

let arr = [1,1,2,3,45,5,66,7,7,7,];
console.log(mySome(arr,callBack));