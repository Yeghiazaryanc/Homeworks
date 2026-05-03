let current=new Date();
const formatter=Intl.DateTimeFormat("en-US",{
    timeStyle:"long",
    dateStyle:"full",
});

const formattedDate=formatter.format(current);
console.log(formattedDate);

console.log("Task 10:", typeof formattedDate === "string" && formattedDate.length > 10);
