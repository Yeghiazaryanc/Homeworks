
const int32View=new Int32Array(new ArrayBuffer(16));
int32View[0]=42;

console.log("Task 12.1:", int32View[0] === 42);
console.log("Task 12.2:", int32View.length === 4);