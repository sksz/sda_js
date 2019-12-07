var haystack, needle;

haystack = 'kot Ala na kota z wasami, kot lubi Alę. Czy Ala i Kot to istoty?';
needle = 'kot';

function szukamKota() {
    var pozycjaKota, koty;

    if (needle === '') {
        return [];
    }

    pozycjaKota = 0;
    koty = [];

    while (pozycjaKota !== -1) {
        pozycjaKota = haystack.indexOf(needle, pozycjaKota);
        if (pozycjaKota >= 0) {
            koty.push(pozycjaKota);
            pozycjaKota++;
        }
    }

    return koty;
}

function kociakowanie() {
    var koty;

    koty = szukamKota();

    return koty.length > 0 ? koty : 'Nie ma kotów';
}

document.getElementById('button1').innerHTML = kociakowanie();
