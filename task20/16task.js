const ids = [1, 2, 2, 3, 4, 1];
let uniqueIds=[...new Set(ids)];


console.log("Task 16.1:", uniqueIds.length === 4);
console.log("Task 16.2:", Array.isArray(uniqueIds));
