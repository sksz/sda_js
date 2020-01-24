// nienazwane
var Prostokat1 = class {
    constructor(wysokosc, szerokosc) {
        this.wysokosc = wysokosc;
        this.szerokosc = szerokosc;
    }
};

// nazwane
var Prostokat2 = class Prostokat {
    constructor(wysokosc, szerokosc) {
        this.wysokosc = wysokosc;
        this.szerokosc = szerokosc;
    }
};

class Prostokat3 {
    constructor(wysokosc, szerokosc) {
        this.wysokosc = wysokosc;
        this.szerokosc = szerokosc;
    }
}

const prostokat1 = new Prostokat1(3, 4);
const prostokat2 = new Prostokat2(3, 4);
const prostokat3 = new Prostokat3(3, 4);

console.log(prostokat1 instanceof Prostokat1)
console.log(prostokat2 instanceof Prostokat2)
console.log(prostokat3 instanceof Prostokat3)

