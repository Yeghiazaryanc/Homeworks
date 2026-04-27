
class Tv{
    turnOn(){
        console.log("Tv turned on");
    }
    turnOff(){
        console.log("Tv tuned Off");
    }
};
class SoundSystem{
    turnOn(){
        console.log("Sound system turned on");
    }
    turnOff(){
        console.log("Sound system turned off");
    }
};
class Lights{
    dim(){
        console.log("Lights dimmed");
    }
    restore(){
        console.log("Lights resored");
    }
};
class CinemaFacade{
    constructor(tv,soundSystem,lights){
        this.tv=tv;
        this.soundSystem=soundSystem;
        this.lights=lights;
    }
    watchMovie(){
        this.tv.turnOn();
        this.soundSystem.turnOn();
        this.lights.dim();
        return "Movie mode activated";
    }
    endMovie(){
        this.tv.turnOff();
        this.soundSystem.turnOff();
        this.lights.restore();
        return "Movie mode deactivated";
    }
}
const tv = new Tv();
const sound = new SoundSystem();
const lights = new Lights();

const cinema = new CinemaFacade(tv, sound, lights);

console.log(cinema.watchMovie());
// TV turned on
// Sound system turned on
// Lights dimmed
// "Movie mode activated"

console.log(cinema.endMovie());
// TV turned off
// Sound system turned off
// Lights restored
// "Movie mode deactivated"


