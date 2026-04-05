function myIndecOf(array, searchElement) {
    for(let i = 0; i < array.length; ++i) {
        if(array[i] === searchElement) {
            return i;
        }
    }
    return -1;
}

let arr = [1,2,3,4,4,5,'',6,7,8,89,876,54,5,67,8,765,null,6,78,76,54,5,67,654];
console.log(myIndecOf(arr , 654));