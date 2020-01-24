class Prostokat {
    constructor(wysokosc, szerokosc) {
        this.wysokosc = wysokosc;
        this.szerokosc = szerokosc;
    }

    get pole() {
        return this.liczPole();
    }

    // pozwala na tworzenie pól obiektu, które w trakcie ich zmiany uruchamiają metodę wykonującą zdefiniowane przez nas instrukcje 
    // np. pozwalą poinformować inne obiekty, o tym, ze pole zostało zmodyfikowane i np. przesłać im nową wartość
    set pole(wartosc) {
        this.wysokosc = wartosc;
        this.szerokosc = wartosc;
        alert(wartosc);
    }

    liczPole() {
        return this.wysokosc * this.szerokosc;
    }
}

const kwadrat = new Prostokat(10, 10);
console.log(kwadrat.pole);
kwadrat.pole = 6;
console.log(kwadrat.pole);





function Prostokat2(wysokosc, szerokosc) {
    this.wysokosc = wysokosc;
    this.szerokosc = szerokosc;

    Object.defineProperties(this, {
        'pole': {
            'get': function() {
                return this.liczPole();
            },
            'set': function(wartosc) {
                this.wysokosc = wartosc;
                this.szerokosc = wartosc;
                alert(wartosc);
            }
        }
    })
}

Prostokat2.prototype.liczPole = function() {
    return this.wysokosc * this.szerokosc;
}

const kwadrat2 = new Prostokat2(10, 10);
console.log(kwadrat2.pole);
kwadrat2.pole = 3;
console.log(kwadrat2.pole);