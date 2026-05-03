
let buffer=new ArrayBuffer(4);
let uint8View=new Uint8Array(buffer);
let int32View=new Int32Array(buffer);
int32View[0]=258;


console.log("Task 15.1:", uint8View[0] === 2);
console.log("Task 15.2:", uint8View[1] === 1);