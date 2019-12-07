var myObject, myObject2, MyObject3;

myObject = new Object();
myObject.producer = 'Ford';
myObject.model = 'Mustang';
myObject.year = 1969;

myObject2 = {
    producer: 'Ford',
    model: 'Mustang',
    year: 1969
};

//Constructor
function MyObject3(producer, model, year) {
    this.producer = producer;
    this.model = model;
    this.year = year;
    this.speed = 0;
    this.accelerate = function (accelerateDelta) {
        this.speed += accelerateDelta;
    }
}

console.log(myObject);
console.log(myObject2);
var test1 = new MyObject3('aaa', 'ssss', 1234);
console.log(new MyObject3('Ford', 'Mustang', 1969));
console.log(test1);
test1.accelerate(1);
console.log(test1);
