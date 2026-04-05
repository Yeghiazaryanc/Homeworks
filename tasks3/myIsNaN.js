

function myIsNaN(value){
   //return value !== value;
   return typeof value=== 'number' && value !== value;
}
console.log(myIsNaN('heleo'));