   function repeatString(str,n){
            let st='';
            while(n>0){
                st+=str;
                n--;
            }
            return st;
        }
        console.log(repeatString('barev',1));