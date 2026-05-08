//const wait = (time) => new Promise(resolve => setTimeout(resolve, time));

function wait(time){
    return new Promise((resolve)=>{
        setTimeout(resolve,time)
    })
};
wait(2000).then(()=>console.log("Done"));