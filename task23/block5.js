// 13

console.log('1');
// Change the line below
console.log('2'); 
console.log('3');


console.log('1');
setTimeout(()=>{
    console.log('2');
},0);
console.log('3');


// 14

Promise.resolve().then(()=>{console.log("Hidden message");});


// 15


function doHeavyMath() {
  for(let i = 0; i < 1000000; i++) {}
  console.log('Calculations finished');
}

console.log('Work started');
// Քո խնդիրն է՝ կանչել doHeavyMath-ը այնպես, որ ներքևի console.log-ը աշխատի ՆԱԽՔԱՆ հաշվարկները:
console.log('Work finished, you can click buttons now');


setTimeout(()=>{
   doHeavyMath();
},0);
