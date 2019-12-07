var myObject, zmienna;

zmienna = 'year';

myObject = new Object();
myObject.producer = 'Ford';
myObject.model = 'Mustang';
myObject['year'] = 1969;

function showProperities(testedObject) {
    var result = [];

    for (var propertyName in testedObject) {
        // if (testedObject.hasOwnProperty(propertyName)) {
            result.push(propertyName);
        // }
    }

    return result;
}

console.log(showProperities(myObject));
console.log(Object.getOwnPropertyNames(myObject));
console.log(Object.keys(myObject));
