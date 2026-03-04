
      function countDigits(num){
            let count=0;
            let current=Math.abs(num);
            if(current===0) return 1;
            while(current>0){
                current=Math.floor(current/10);
                count++;
            }
            return count;
        }
        console.log(countDigits(0));
        