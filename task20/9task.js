let d=new Date();
let current_day=d.getDate()
d.setDate(current_day+5);


const expectedDiff = 5 * 24 * 60 * 60 * 1000;
const actualDiff = d.getTime() - new Date().getTime();
console.log("Task 9:", actualDiff >= expectedDiff - 1000); 