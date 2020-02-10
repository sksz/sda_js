// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// const arr3 = [7, 8, 9]

// const arr4 = arr1.concat(arr2, arr3);
// const arr5 = [...arr1, ...arr2, ...arr3];
// console.log(arr4, arr5);

// const arr = [1, 2, 3];
// const doesInclude = arr.includes(2);
// console.log(doesInclude);

// const arr = [1, 2, 3, 4, 5, 6, 7, 8];
// const filteredArray = arr.filter((element, index) => {
//   return element > 4;
// });
// console.log(filteredArray);

// const arr = [{ pole: 'test1'}, {pole: "test2"}, {pole: "test3"}];
// const foundObj = arr.find((element) => element.pole.includes("3"));
// console.log(foundObj);

// const arr = [{ pole: 'test1'}, {pole: "test2"}, {pole: "test3"}];
// const foundIndex = arr.findIndex((element) => element.pole.includes("3"));
// console.log(foundIndex);

// const arr = [ [1, 2], [3,4] ];
// const flattenArray = arr.flat();
// console.log(flattenArray)

// const obj1 = {};
// const obj2 = {};
// const obj3 = {};

// const arr = [obj1, obj2, obj3];
// const foundIndex = arr.indexOf(obj3);
// console.log(foundIndex);

// const arr = ["Ada", "Zosia", "Andrzej"];
// const newString = arr.join(" / ");
// console.log(newString)

// const arr = [1, 2, 3, 4];
// const mappedArray = arr.map((element, index) => {
//   return element * element;
// })
// console.log(mappedArray);

// const arr = [1,2,3];
// const removedValue = arr.pop();
// console.log(arr, removedValue);

// const array1 = [1, 2, 3, 4];
// const reducer = (accumulator, currentValue) => accumulator + currentValue;

// // 1 + 2 + 3 + 4
// console.log(array1.reduce(reducer));
// // expected output: 10

// // 5 + 1 + 2 + 3 + 4
// console.log(array1.reduce(reducer, 5));
// // expected output: 15


// const array1 = ['one', 'two', 'three'];
// console.log('array1:', array1);
// // expected output: "array1:" Array ["one", "two", "three"]

// const reversed = array1.reverse();
// console.log('reversed:', reversed);
// // expected output: "reversed:" Array ["three", "two", "one"]


// const arr1 = [1, 2 ,3, 4, 5];
// const arrCopy = arr1.slice(2);
// console.log(arr1 === arrCopy, arrCopy);

// const obj = { a: 2, b: 2 };
// const obj2 = { b: 3, d: 2 };
// const newObj = { ...obj, ...obj2 };
// console.log(newObj)

// const arr = [1, 2, 3, 4];
// const arr1 = [4, 5, 6, 7];
// const mewArr = [ ...arr, ...arr1 ];
// console.log(mewArr);


// function test(...params) {
//   console.log(...params);
// }
// test(1, 2 ,3);


// const obj = { pole: 1, test: 2 };
// const { pole, test } = obj;
// console.log(pole, test);


// const arr = [ 100, 4, 8, 9 , 87];
// console.log(arr.sort((a, b) => b - a));

