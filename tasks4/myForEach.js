function callBack(currentValue, index, array) {
    console.log("This is the current value:", currentValue);
}

function myForEach(array , callBack) {
    for(let i = 0; i < array.length; ++i) {
        callBack(array[i], i, array );
    }
}

const arr = [1,2,3,4,5];
myForEach(arr, callBack);