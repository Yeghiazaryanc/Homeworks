
class App{
    constructor(name){
        this.name=name;
    }
    receiveNotification(message){
        console.log(`[${this.name}] received: ${message} `);
        
    }
};
class Facebook extends App{};
class Instagram extends App{};
class Telegram extends App{};

class NotificationCenter{
    constructor(){
        this.subscribers=[];
    };
    subscribe(app){
        if(this.subscribers.includes(app)){
            return `${app.name} is already subscribed`;
        }
        this.subscribers.push(app);
        return `${app.name} subscribed`;
    };
    unsubscribe(app){
        const index=this.subscribers.indexOf(app);
        if(index !== -1){
            this.subscribers.splice(index,1);
            return `${app.name} unsubscribed`;
        }
        return `${app.name} is not subscribed`;
    }
    notifyAll(message){
        if(this.subscribers.length === 0){
            console.log("No apps are currently subscribed");
            return;
        }
        this.subscribers.forEach((app)=>{
            app.receiveNotification(message);
        });
        return "Notification completed"
    }
}

const center = new NotificationCenter();

const facebook = new Facebook("Facebook");
const instagram = new Instagram("Instagram");
const telegram = new Telegram("Telegram");

console.log(center.subscribe(facebook));   // "App subscribed"
console.log(center.subscribe(instagram));  // "App subscribed"
console.log(center.notifyAll("New post added"));
// Facebook and Instagram should receive the message

console.log(center.unsubscribe(instagram)); // "App unsubscribed"

console.log(center.notifyAll("Story updated"));
// only Facebook should receive the message