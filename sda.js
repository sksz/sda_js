var instance, MyObject;

//Constructor
MyObject = {
    producer: '',
    model: '',
    year: '',
    mySpeed: 0,

    get speed () {
        return this.mySpeed + 1;
    },

    set speed (newSpeed) {
        this.mySpeed = newSpeed;
    }
}

MyObject.speed = 2;
console.log(MyObject);
console.log(MyObject.speed);
MyObject.mySpeed = 1;
console.log(MyObject.speed);
