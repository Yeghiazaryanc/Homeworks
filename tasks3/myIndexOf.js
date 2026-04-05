
function myIndexOf(str,search,index=0){
     if (
    typeof str !== "string" ||
    typeof search !== "string" ||
    typeof index !== "number"
  ) {
    return -1;
  }
    if(index < 0){
        index=0;
    }

    if(index>str.length){
        index=str.length;
    }

    if(search===''){
        return index;
    }

    for(let i=index;i<=str.length-search.length;i++){
        let isMatch=true;
        for(let j=0;j<search.length;j++){
            if(str[i+j]!==search[j]){
                isMatch=false;
                break;
            }
        }
        if(isMatch){
            return i;
        }
    }
    return -1;
}

console.log(myIndexOf("hello world", "world"));      // 6
console.log(myIndexOf("hello world", "world", 7));   // -1
console.log(myIndexOf("cat", "cat"));