

        function minArrNum(arr){
         //   return Math.min(...arr); optimal

            let min=arr[0];
            for(let i=1;i<arr.length;i++){
                if(min > arr[i]){
                    min=arr[i];
                }
            }
            return min
        }
        console.log(minArrNum([0,55,0,88,8,-8]));