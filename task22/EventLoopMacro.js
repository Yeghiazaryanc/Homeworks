// 1

console.log("start");
setTimeout(()=>console.log("Time out"),0);
console.log("end");

// Առաջին հերթին այն տեսնում է սինխրոն console.log("Start") և console.log("End") հրամանները և անմիջապես կատարում է դրանք:
// Երբ հանդիպում է setTimeout-ին, այն փոխանցվում է բրաուզերի Web API-ին: Թեև ժամանակը 0 է, այն անմիջապես չի աշխատում, այլ դրվում է հերթի մեջ (Macrotask Queue): Երբ Call Stack-ը լիովին դատարկվում է (սինխրոն կոդն ավարտվում է), նոր միայն Event Loop-ը վերցնում է Timeout-ը հերթից և տպում այն:

// 2

setTimeout(()=>console.log("A"),1000);
setTimeout(()=>console.log("B"),0);
console.log("C");
// C-ն սինխրոն է և տպվում է անմիջապես:
// B-ն ունի 0մվ հապաղում, ուստի այն ավելի շուտ է հայտնվում հերթի սկզբում և աշխատում
// A-սպասում է 1000մվ իր հերթին հասնելու համար:


// 3

function delay(message,time){
    setTimeout(()=>console.log(message),time);
};
delay("Hello World",4000);