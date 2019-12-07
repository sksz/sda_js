var instance, MyObject;

//Constructor
MyObject = {
    producer: '',
    model: '',
    year: '',
    mySpeed: 0,

    get speed () {return this.mySpeed},

    set speed (newSpeed) {
        if (typeof newSpeed !== 'number') {
            throw ('Musisz podać liczbę');
        }

        this.mySpeed = newSpeed;        
    },

    get PI () {
        return 3.1415;
    }
}

MyObject.speed = 2;
console.log(MyObject);
console.log(MyObject.speed);

