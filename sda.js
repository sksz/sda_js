var Person, test, Teacher;

test = 'aaa';

function Person(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
}

Person.prototype.nationality = `English ${test}`;
var instance = new Person('Ala', 'Nijaka', 12, 'black');

console.log(instance);
console.log(instance.nationality);

function Teacher(first, last, age, eyeColor, interests) {
    Person.call(this, first, last, age, eyeColor);

    this.interests = interests;
}

Teacher.prototype = Person.prototype;

var teach = new Teacher('Jan', 'Kowalski', 920, 'white', 'vodka');

console.log(teach);
console.log(teach.nationality);
