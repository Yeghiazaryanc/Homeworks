const original = { items: ["apple", "potion"] };

const copy=JSON.parse(JSON.stringify(original));
copy.items.push("sword");



console.log("Task 5.1:", copy.items.length === 3);
console.log("Task 5.2:", original.items.length === 2);
