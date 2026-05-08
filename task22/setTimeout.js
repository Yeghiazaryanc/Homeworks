
// 1

setTimeout(()=>{
    console.log("Hello after 2 seconds");
},2000);

//2

function countdown(current){
    if(current>0){
        console.log(current);
        setTimeout(()=>countdown(current-1),1000);
    }else{
        console.log("Go!");
    }
}

countdown(5);

// 3

const timerId=setTimeout(()=>console.log("executed"),5000);
setTimeout(()=>{
    clearTimeout(timerId)
    console.log("timer cancelled");
},2000);

//4

function infLoop(num){
    console.log(num);
    setTimeout(()=>infLoop(num+1),1000);
}
infLoop(50);


