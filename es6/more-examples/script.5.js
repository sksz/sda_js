// const func = () => {
//   console.log(this);
// }

// const obj1 = {};
// obj1.testFunction = func;

// func() // window
// obj1.testFunction(); // window

const obj1 = {
  pole: 'obj1',
  // arrowFunctionTest: () => {
  //   console.log(this);
  // },
  testFunction: function() {
    this.arrowFunctionTest2 = () => {
      console.log(this)
    }
  }
};

// obj1.arrowFunctionTest(); // window
obj1.testFunction();
obj1.arrowFunctionTest(); // obj1

// Arrow functions don't bind their own scope, but inherit it from the parent one, which in this case is window or the global object.