
let date=new Date();
const [year,month]=[date.getFullYear(),date.getMonth()];

console.log("Task 6.1:", typeof year === "number" && year >= 2024);
console.log("Task 6.2:", month >= 0 && month <= 11);
