let student ={
    name: "Marta",
    age: 99,
    subject: "Physics"
};

Object.freeze(student);
console.log(student);
student.age = 77;
student.name = "fff";
console.log(student);  
 //-> Չի փոխվում property-ի արժեքը