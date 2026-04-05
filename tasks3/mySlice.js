
function mySlice(str,start,end=str.length){
    if(typeof str !=='string' || typeof start !== 'number' || typeof end !== 'number') return 'Error';

  // Կարգավորում ենք start-ը
    if(start < 0){
        // Եթե բացասական է, գումարում ենք երկարությանը, բայց թույլ չենք տալիս 0-ից իջնել
        start=Math.max(0,str.length+start);
    }
    else {
        // Եթե դրական է, թույլ չենք տալիս տեքստի երկարությունից անցնել
        start=Math.min(start,str.length);
    }
    
   // Կարգավորում ենք end-ը (ճիշտ նույն տրամաբանությամբ)
    if(end<0){
        end=Math.max(0,str.length+end);
    }
    else{
        end=Math.min(end,str.length);
    }

    let newStr='';

    for(let i=start;i<end;i++){
        newStr+=str[i];
    }
    return newStr;
}

console.log(mySlice('Javascript',-4,-1));

