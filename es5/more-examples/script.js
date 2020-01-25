// // function add(num1, num2) { // definiujemy parametry
// //   return num1 + num2;
// // }

// // add(1, 2) // argumenty

// // class example { // polimirfizm
// //   add(a) {
// //     if (typeof a === "string") {
      
// //     }
// //     if (typeof a === "number") {

// //     }
// //   }
// // }

// // // 

// // const obj2 = {
// //   pole: 1,
// //   changeMyPole: function(value) {
// //     this.pole = value;
// //   }
// // };

// // const obj1 = {
// //   changeObjB: function() {
// //     obj2.changeMyPole(2)
// //   }
// // }

// // function test() {
// //   console.log(this);
// // }

// // test();

// // function sayHello() {
// // 	console.log(this.name + " mówi hej!");
// // }

// // const person = { 
// // 	name: "Zenek",
// // 	sayHello : sayHello
// // };

// // person.sayHello() // Zenek mówi hej!

// // sayHello() // Wacek mówi hej!
// // console.log(this);



// function testThis() {
//   console.log(this);
// }

// const obj = {
//   pole: "test",
//   testThis: testThis
// };

// const obj2 = {
//   pole: "test 2",
//   testThis: testThis
// };

// testThis(); // wywołując funkcję globalnie, this zawsze wskazuje na obiekt "window"
// obj.testThis();
// obj2.testThis();

// // kontekst - czyli wartość słowa kluczowego this wskazuje zawsze na obiekt który wywował naszą metodę


// // const testFunction = function() {

// // }

// // testFunction();

// // // function nowaFunkcja() {

// // // }

// function test(a, b) {
//   console.log(a, b);
//   console.log(this);
// }

// const obj = {
//   x: 123
// }

// test.call(obj, 1, 2)

// const cat1 = catFactory('fluffy', 'grrrrrr')


// const obj = {}
// obj.name = "asdasd"

// obj = "sadsadas";

// const obj = {};

// console.log(obj);

// const base = {
//   test: function() {
//     console.log('i am prototype');
//   }
// }

// const obj = Object.create(base);
// obj.test();
// console.log(obj);



// const obj1 = { a: 1, b: 2, c: 3 }
// const obj2 = { c: 4, d: 5 } 
// const obj3 = Object.assign({}, obj1, obj2)

// console.log(obj3 === obj1) // false

// const obj1 = { a: 1, b: 2, c: 3 }
// const obj2 = { c: 4, d: 5 } 
// const obj3 = Object.assign(obj1, obj2)

// console.log(obj3 === obj1) // true


// const test = [];
// test.forEach();

// function test(a, b) {
//   console.log(arguments)
// }

// test(112312, 22134123);

// Animal.functionTest = function()  {

// }

// Animal.functionTest()

const test = "asdasdasdasd";

console.log(typeof test === "string")
console.log(test.substr(3));