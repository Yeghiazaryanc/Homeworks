class Student {
  constructor(name) { this.name = name; }
}
const s1 = new Student("Alice");
const s2 = new Student("Bob");

let gradesMap=new Map();
gradesMap.set(s1,[90,95]);
gradesMap.set(s2,[80,85]);
console.log("Task 17.1:", gradesMap.get(s1)[0] === 90);
console.log("Task 17.2:", gradesMap.size === 2);