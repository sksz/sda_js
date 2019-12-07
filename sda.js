var haystack, needle;

haystack = 'Ala na kota z wasami, kot lubi Alę.';
needle = 'kot';

document.getElementById('button1').innerHTML = haystack.includes(needle);

document.getElementById('button1').innerHTML += ' -first- ' + haystack.indexOf(needle);

document.getElementById('button1').innerHTML += ' -last- ' + haystack.lastIndexOf(needle);