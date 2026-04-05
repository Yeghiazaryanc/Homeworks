function isEqual(obj1, obj2){
    if(Object.keys(obj1).length !== Object.keys(obj2).length) return false;

    for(let key in obj1){
        if(typeof obj1[key] !== 'object' || obj1[key] === null){
            if(obj1[key] !== obj2[key]) return false;
        }else if(!isEqual(obj1[key], obj2[key])) return false;

    }

    return true;
}


let test1 = {
    a:1,
    b:{
        d:3
    },
    c:2
};

let test2 = {
    a:1,
    b:{
        d:3
    },
    c:2
};

console.log(isEqual(test1, test2));