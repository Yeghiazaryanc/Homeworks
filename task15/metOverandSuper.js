class Animal{
    speak(){
        console.log("Animal makes a sound");
    }
};
class Dog extends Animal{
    speak(){
        super.speak();
        console.log("Dog Barks");
    }
}
const d = new Dog();
d.speak();
// Animal makes a sound
// Dog barks