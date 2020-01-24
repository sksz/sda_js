function Animal(name) {
    this.name = name;
}

Animal.prototype.speak = function () {
    console.log(this.name + ' makes a noise.');
}

class Dog extends Animal {
    constructor(props) {
      super(props);
    }

    // speak() {
    //     super.speak();
    //     console.log(this.name + ' barks.');
    // }

    miau() {
      console.log('miauuu')
    }
}

Dog.prototype.miau = function(){
  console.log('hauuu')
}

var d = new Dog('Mitzie');
d.speak();
d.miau();
