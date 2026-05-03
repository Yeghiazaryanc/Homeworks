const user = { username: "dev", stats: { level: 10 } };

const prettyJson=JSON.stringify(user,null,4); 

console.log("Task 3:", prettyJson.includes("\n    \"username\""));
