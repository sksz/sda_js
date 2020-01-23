function test() {
  console.log('1');
  console.log('2');
  console.log('3');

  setTimeout(() => {
    console.log('4')
  }, 0)

  console.log('5');
  console.log('6');
}

test();
console.log('8');

// typy kodu asynchronicznego w JavaScript: setTimeout/setInterval, obsługa zdarzeń, AJAX, Promise/async

// w tym przypadku kod asynchroniczny w setTimeout() zostanie wykonany dopiero wtedy kiedy zakończymy wykonywanie kodu synchronicznego, 
// jest to związane z event loop która jest podstawą działania silnika JavaScript, polecam wam ten film wyjaśniający działanie pętli zdarzeń:
// https://www.youtube.com/watch?v=cCOL7MC4Pl0&t=1s
