
let processedData=new WeakSet();
function processNotification(notif){
    if(processedData.has(notif)){
        return "Already processed, ignoring";
    }
    processedData.add(notif);
    return `Processed: ${notif.text}`;
}

const notif1 = { id: 1, text: 'Message 1' };
const notif2 = { id: 2, text: 'Message 2' };


console.log(processNotification(notif1));
console.log(processNotification(notif1));
console.log(processNotification(notif2));