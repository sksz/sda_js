class Dog {
    constructor(name, color, age) {
        this.name = name;
        this.color = color;
        this.age = age;
    }

    bark() {
        console.log('bark');
    }
}

const pies1 = new Dog('Reksio', 'rudy', 34);
const pies2 = new Dog('Wacek', 'rudy', 34);
const pies3 = new Dog('Rdu', 'rudy', 34);
const pies4 = new Dog('Reksio', 'rudy', 34);

console.log(pies1);