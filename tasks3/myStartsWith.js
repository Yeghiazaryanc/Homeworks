
function myStartsWith(str,search,index=0){
    if(typeof str !=='string' ||typeof search !=="string" || typeof index !=='number') {return 'no strings or number'};
    if(index<=0){
        index =0;
    }
    if(search.length + index > str.length){
        return false;
    }
    for(let i=0;i<search.length;i++){
        if(search[i] !== str[index+i]){
            return false;
        } 
    }
    return true;
}
console.log(myStartsWith('Jav'));
