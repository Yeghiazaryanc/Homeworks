
function filterSpam(text,badWordsArray){
    let badWordsSet=new Set(badWordsArray);
    return text.split(' ').map(word => badWordsSet.has(word) ? '***' : word).join(' ');
}

const text = "buy our new cheap product";
const badWords = ["cheap", "buy"];
console.log(filterSpam(text, badWords));