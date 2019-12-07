var myObject, zmienna;

zmienna = 'year';

myObject = new Object();
myObject.producer = 'Ford';
myObject.model = 'Mustang';
myObject['year'] = 1969;

function power(base, index) {
    if (index < 0) {
        return;
    }
    
    if (!index) {
        return 1;
    }

    return base * power(base, index - 1);
}

console.log(power(2, 3));
