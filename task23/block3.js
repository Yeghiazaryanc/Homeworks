//8

function wait(ms){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve();
        },ms)
    })
}


async function demoDelay() {
    console.log("start");
    await wait(2000);
    console.log("end");
}