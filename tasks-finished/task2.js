function returnX() {
    return this.x;
}

const obj = { x: 42 }
const boundReturnX = returnX.bind(obj);

console.log(returnX());
console.log(boundReturnX());
