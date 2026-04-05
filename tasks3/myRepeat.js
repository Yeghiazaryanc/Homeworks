
function myRepeat(str,count){
    if(typeof str !== 'string' || typeof count !=='number') return 'Error';

    count=Math.floor(count);
    
    if(count<0){
        return 'Error:Count cannot be negative';
    }

    let newStr='';
    for(let i=0;i<count;i++){
        newStr+=str;
    }
    return newStr;
}
console.log(myRepeat('ba',3));
