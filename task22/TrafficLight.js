
function delay(ms){
    return new Promise(resolve=>setTimeout(resolve,ms));
}
function runTrafficLight(){
    console.log("Red");
    delay(3000)
    .then(()=>{
        console.log("Yellow");
        return delay(1000);
    })
    .then(()=>{
        console.log("Green");
        return delay(2000)
    })
    .then(()=>{
        runTrafficLight()
    });
};

//runTrafficLight();

// 2 տարբերակ

const sleep=ms=>new Promise((resolve)=>setTimeout(resolve,ms));

async function trafficLight() {
    while(true){
        console.log("Red");
        await sleep(3000);
        console.log("Yellow");
        await sleep(1000);
        console.log("Green");
        await sleep(2000);
    }
}
trafficLight();