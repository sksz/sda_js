class Animal {
    constructor(name) { // odpowiednik wnętrza metody konstruktora
        this.name = name;
    }

    speak() { // odpowiednik Animal.prototype.speak = function(){}
        console.log(this.name + ' makes a noise.');
    }
}

class Dog extends Animal { // odpowiednik Dog.prototype = Object.create(Animal.prototype)
    constructor(name, age) {
        super(name) // odpowiednik Animal.call(this, name) //Animal( )
        this.age = age;
    }

    speak() {
        super.speak(); // odpowiednik Animal.speak.call(this, name)
        console.log(this.name + ' barks.');
    }
}

var d = new Dog('Mitzie', 4);
d.speak();
console.log(d instanceof Dog, d instanceof Animal)