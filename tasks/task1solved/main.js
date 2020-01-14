// Pobierz selektorem element LI którego wartośc tekstowa wynosi 9. Dodaj mu klasę CSS "dark-theme" wywołując na pobranych elemencie metodę .addClass().
// Wykonaj zadanie pamiętając o dobrych praktykach pokazanych dotychczas.

(function() {
  $("li")
    .filter(function() {
      return $(this).text() === "9";
    })
    .addClass("dark-theme");
})();