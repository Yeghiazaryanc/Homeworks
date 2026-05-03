
const data1 = { id: 1 };
const data2 = { id: 2 };

let processedData=new WeakSet([data1]);

console.log("Task 20.1:", processedData.has(data1) === true);
console.log("Task 20.2:", processedData.has(data2) === false);