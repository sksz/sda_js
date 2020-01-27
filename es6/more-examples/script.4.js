function Animal(name) {
    this.name = name;
}

Animal.prototype.speak = function () {
    console.log(this.name + ' makes a noise.');
}

class Dog extends Animal {
    constructor(name) {
      super(name);
    }

    speak() {
        super.speak();
        console.log(this.name + ' barks.');
    }
}

Dog.prototype.miau = function(){
  console.log('miauu')
}

var d = new Dog('Mitzie');
d.speak();
d.miau();
