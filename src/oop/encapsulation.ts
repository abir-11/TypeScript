//bairer access modifier kora jai na

class Animal {
     

    constructor(
        public name: string, 
        public species: string, 
        public sound: string) {}

   private makeSound() {
        console.log(`${this.name} is making sound : ${this.sound}`);
    }
    callMakeSound(){
        this.makeSound()
    }
}

const dog = new Animal('dogesh bhai', 'dog', 'ghew ghew');
const cat = new Animal("cat boy", "cat", "mew mew");
dog.callMakeSound();
//cat.makeSound();
