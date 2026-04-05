let base = {
    days : 444,
    months : 30,
    years : 7,
    price : "44 million"
};

let toArr = Object.entries(base).filter((el) => typeof el[1] === 'number');         //filter to only numbers value

let filteredObj = {};
for(let [key, value] of toArr){
    filteredObj[key] = value;
}

console.log(filteredObj);