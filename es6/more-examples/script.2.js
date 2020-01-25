class Dog {
  constructor(name, color, age) {
    this.name = name;
    this.color = color;
    this.age = age;
  }

  bark() {
    console.log("bark");
  }

  static checkDogsHealth(dog) {
    const dogHealthy = false;

    if (dogHealthy) {
      console.log('Your dog is healthy');
    } else {
      console.log(' Your dog is ill!');
    }
  }
}

// Odpowiednik w ES5:
// function Dog(name, color, age) {
//   this.name = name;
//   this.color = color;
//   this.age = age;
// }

// Dog.prototype.bark = function() {
//   console.log("bark");
// }

// Dog.checkDogsHealth(dog) {
//   const dogHealthy = false;

//   if (dogHealthy) {
//     console.log('Your dog is healthy');
//   } else {
//     console.log(' Your dog is ill!');
//   }
// }

const pies1 = new Dog("Reksio", "rudy", 34);
console.log(pies1);
Dog.checkDogsHealth(pies1);
