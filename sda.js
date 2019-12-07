var myObject, zmienna;

zmienna = 'year';

myObject = new Object();
myObject.producer = 'Ford';
myObject.model = 'Mustang';
myObject['year'] = 1969;

console.log(Object.keys(myObject));

