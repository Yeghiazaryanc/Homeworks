
let start=Date.now();
for(let i=0;i<1_000_000;i++){

}
let end=Date.now();
let duration=end-start;
console.log(duration);

console.log("Task 8:", typeof duration === "number" && duration >= 0);
