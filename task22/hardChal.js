console.log("1");

setTimeout(() => {
    console.log("2");

    Promise.resolve().then(() => {
        console.log("3");
    });

}, 0);

Promise.resolve().then(() => {
    console.log("4");
});

console.log("5");

setTimeout(() => {
    console.log("6");
}, 0);
//	1.	1 և 5 տպվում են անմիջապես (Call Stack):
//	2.	Promise 4-ը գնում է Microtask Queue:
//	3.	Երկու setTimeout-ները (2 և 6) գնում են Macrotask Queue:
//	4.	Call Stack-ը դատարկվելուց հետո աշխատում է Microtask Queue-ն՝ տպվում է 4:
//	5.	Microtask-երը ավարտելուց հետո վերցվում է առաջին Macrotask-ը՝ տպվում է 2:
//	6.	2-ի ներսում կա նոր Promise (3), որն անմիջապես ավելանում է Microtask Queue-ում:
//	7.	Քանի որ ընթացիկ Macrotask-ն ավարտվեց, Event Loop-ը նորից ստուգում է Microtask Queue-ն: Տեսնում է դատարկ չէ, աշխատացնում է այն՝ տպելով 3:
//	8.	Դրանից հետո միայն անցնում է հաջորդ Macrotask-ին և տպում 6:

// 1
// 5
// 4
// 2
// 3
// 6 
