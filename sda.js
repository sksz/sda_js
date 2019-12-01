var testObject;

testObject = {
    wartosc1: 'test',
    wartosc2: 'cos'
};

delete testObject.wartosc1;

// console.log(testObject);
document.getElementById('button1').innerHTML = ':P';
// alert('hello');

var odpowiedz = prompt('jeden', 'dwa');

// if (odpowiedz == null || odpowiedz == '') {
//     alert('a');
// } else {
//     alert('b');
// }

if (odpowiedz != '' && odpowiedz != null) {
    window.open(odpowiedz);
} else {
    alert('b');
}
