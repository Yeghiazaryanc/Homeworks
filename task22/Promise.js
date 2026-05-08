// 1

const myPromise=new Promise((resolve)=>{
    setTimeout(()=>resolve("Data loaded"),2000);
})
.then(data=>console.log(data));


// 2 

const errorPromise=new Promise((resolve,reject)=>{
    reject("Server Error");
})
.catch(error=>console.log(error));

//3

function pay(balance,amount){
    return new Promise((resolve,reject)=>{
        if(amount<=balance){
            resolve("Payment seccesfull");
        }else{
            resolve("Not enough money");
        }
    })
}
pay(3000,2000)
.then(res=>console.log(res))
.catch(err=>console.log(err));

//4

function getUser(){
    return new Promise((resolve)=>setTimeout(()=>resolve({id:1}),500));
}
function getPosts(){
    return new Promise((resolve)=>setTimeout(()=>resolve(["Post1","Post2"]),500));
}
function getComments(){
    return new Promise((resolve)=>setTimeout(()=>resolve(["Comment1"]),500));
}


getUser()
 .then(user=>getPosts(user))
 .then(posts=>getComments(posts))
 .then(comments=>console.log(comments));
