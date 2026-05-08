// 1

console.log("1");
setTimeout(()=>{
    console.log("2");
},0);
Promise.resolve().then(()=>{
    console.log("3");
});
console.log("4");

// 1 սինխրոն  աշխատում է անմիջապես:
// 4 սինխրոն  աշխատում է անմիջապես հաջորդում:
// 3 Promise-ի մեջ է, ուստի գնում է Microtask Queue: Սա ունի գերակայություն և աշխատում է սինխրոն կոդի ավարտից անմիջապես հետո:
// 2 setTimeout-ի մեջ է, որը Macrotask Queue-ում է: Այն աշխատում է միայն այն ժամանակ, երբ Microtask հերթը լիովին դատարկվում է:


// 2

console.log("A");
Promise.resolve().then(()=>console.log("B"));
Promise.resolve().then(()=>console.log("C"));
setTimeout(()=>console.log("D"),0);
console.log("E");

//Նախ աշխատում է սինխրոն կոդը (A, E), հետո միանգամից աշխատում են բոլոր Promise-ները (B, C), քանի որ նրանք Microtask են, և վերջում նոր՝ Macrotask-ը (D):
// A
// E
// B
// C
// D

// 3

console.log("start");
setTimeout(()=>{
    console.log("Timeout 1")
    Promise.resolve().then(()=>{
        console.log("Promise inside timeout");
    });
},0);

Promise.resolve().then(()=>{
    console.log("Promise 1");
});

setTimeout(()=>{
    console.log("Timeout 2");
},0);

console.log("End");

//Event Loop-ը ամեն անգամ մեկ Macrotask ավարտելուց հետո (օրինակ՝ Timeout 1-ը), կանգ է առնում և ստուգում է Microtask հերթը: Քանի որ Timeout 1-ի ներսում ստեղծվեց նոր Promise, Event Loop-ը նախ կաշխատացնի այդ նոր Microtask-ը (Promise inside timeout), և նոր միայն կանցնի հաջորդ Macrotask-ին (Timeout 2):

// start
// end
// Promise 1
// Timeout 1 
// Promise inside timeout
// timeout 2

