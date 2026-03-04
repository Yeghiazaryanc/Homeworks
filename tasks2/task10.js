  function container(arr,value){
            for(let i=0;i<arr.length;i++){
               if(arr[i]==value){return true;}
            }
            return false;
        }
        console.log(container([3,2,3,4],4));