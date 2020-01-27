const obj1 = {
    prop1: 'prop1'
}
const obj2 = {
    prop2: 'prop2'
}
const obj3 = {
    prop3: 'prop3'
}

const combinedObj = Object.assign({}, obj1, obj2, obj3);
console.log(combinedObj)