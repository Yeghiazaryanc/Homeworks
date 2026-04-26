
//#1
let numbers=[1,2,3];
const newNumbers=numbers.map((n)=>n*2);
//console.log(newNumbers);

//#2
let names=["anna","john"];
const newNames=names.map((n)=>n.toUpperCase());
//console.log(newNames);

//#3
let users=[{name:"A",age:10},{name:"B",age:15}];
const newUsers=users.map((user)=>user.age);
//console.log(newUsers);

//#4

let nums=[1,2,3,4,5,6,7,8,9,10];
let evenNums=nums.filter((n)=>n%2==0);
//console.log(evenNums);

//#5

let users2=[{name:"Artur",age:19},{name:"Hayk",age:15},{name:"Vazgen",age:25}];
let newUsers2=users2.filter((user)=>user.age>18);
//console.log(newUsers2);
//#7
let newUsers3=users2.filter((user)=>user.age>18).map((user)=>user.name); 
console.log(newUsers3);

//#6

let words=["Hayk","Armen","Alex","Manvel"];
let newWords=words.filter((word)=>word.length>=5);
//console.log(newWords);


//#8
let nums3=[1,2,3,4,5,6,7,8,9,10];
let newNums3=nums.filter((n)=>n%2==0).map((n)=>n*n);
console.log(newNums3);

// #9

let products=[{name:"Iphone17",price:1300},{name:"Samsungs25",price:980},{name:"Xioami",price:750},{name:"Iphone17promax",price:1800}];
let newProducts=products.filter((product)=>product.price>1000).map((product)=>product.name);
console.log(newProducts);

//#10
let usr=[{name:"Anna",age:17},{name:"John",age:20},{name:"Harut",age:25}];
let newusr=usr.reduce((oldest,currentUser)=>currentUser.age>oldest.age ? currentUser : oldest);
console.log(`${newusr.name} is ${newusr.age} years old`);
