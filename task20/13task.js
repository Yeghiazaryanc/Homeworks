const normalArray = [10, 20, 255];

const uint8View=new Uint8Array(normalArray);

console.log("Task 13.1:", uint8View instanceof Uint8Array);
console.log("Task 13.2:", uint8View[2] === 255);
