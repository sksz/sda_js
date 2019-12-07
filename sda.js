var haystack, needle;

haystack = 'Ala na kota z wasami, kot lubi Alę. Czy Ala i Kot to istoty?';
needle = 'kot';

function szukamKota() {
    var pozycjaKota, koty;
    pozycjaKota = 0;
    koty = [];

    while (pozycjaKota !== -1) {
        pozycjaKota = haystack.indexOf(needle, pozycjaKota + 1);
        if (pozycjaKota >= 0) {
            koty.push(pozycjaKota);
        }
    }

    return koty;
}

document.getElementById('button1').innerHTML = szukamKota();
