const str = '{"title": "Epic Sword", "damage": 50}';

const obj=JSON.parse(str);

console.log("Task 2:", obj !== undefined && obj.damage === 50);