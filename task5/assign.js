    
let person1 = {
    name : "Gor",
    age : 23,
    country : "Armenia"
};

let person2 = {
    name : "Samo",
    age : 21,
    work : "structure"
};

let mergedPerson = Object.assign(person1, person2);         //-> mergedPerson = person1 != person2
console.log(mergedPerson);