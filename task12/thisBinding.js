//#1
function sum(a,b,c){
    return a+b+c;
};
const arr=[10,20,30];
let result=sum.apply(null,arr);
console.log(result);

//#2
const student1={name:"Anna",score:80};
const student2={name:"Mark",score:95};

function printResult(){
    console.log(this.name+" scored " +this.score);
};

printResult.call(student1);
printResult.apply(student2);

//#3

const user={
    name:"Alex",
    greet(){
        return "Hello " + this.name;
    },
};
const admin={
    name:"Admin",
};

console.log(user.greet.call(admin));//Hello Admin


//#4
const numbers=[5,10,8,20,315];
let p=Math.max.apply(null,numbers);
console.log(p);

//#5

const obj1={
    value:10,
    getValue(){
        return this.value;
    },
};
const obj2={
    value:50,
};

let a=obj1.getValue.call(obj2);
console.log(a);//50

//#6

function total(a,b,c){
    return a+b+c;
};

const args=[7,8,9];

let b=total.apply(null,args);
console.log(b);//24

//#7

function show(){
    return this.name;
};
//Եթե ֆունկցիան մեկ անգամ արդեն .bind() է եղել որևէ օբյեկտի հետ, նրա this-ը ընդմիշտ «կողպվում» է։ Հետո կանչված .call()-ը չի կարող այն փոխել:
const obj={name:"Test"};
const bound=show.bind(obj);
console.log(bound.call({name:"Wrong"}));// Test

//#8
const a1={name:"Anna",points:10};
const a2={name:"Mark",points:25};

function val(){
    return this.name+" has " + this.points;
};

let aa1=val.call(a1);
let aa2=val.call(a2);
console.log(val.call(a1));
console.log(val.call(a2));
console.log(aa1);
console.log(aa2);

//#9

function execute(fn,arr){
    return fn.apply(null,arr);
}
console.log(execute(sum,[2,4,6]));//12

//#10
function show2(){
    return this.name;
};
const aaa={name:"A"};
const bbb={name:"B"};
const fn=show2.bind(aaa);
console.log(fn.call());// A

//#11
const o={
    value:100,
    get(){
        inner=()=>{
            return this.value;
        }
        return inner();
    },
};
console.log(o.get());//

//#12
const nor={
    value:1,
    add(x){
        this.value+=x;
        return this;
    }
};
nor.add(5).add(10);
console.log(nor.value);

