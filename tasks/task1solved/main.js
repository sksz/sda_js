// Pobierz selektorem element LI którego wartośc tekstowa wynosi 9. Dodaj mu klasę CSS "dark-theme" wywołując na pobranych elemencie metodę .addClass().
// Wykonaj zadanie pamiętając o dobrych praktykach pokazanych dotychczas.

(function() {
  $("li") // pobieram wszystkie elementy LI znajdujące się aktualnie na stronie
    .filter(function() {
      return $(this).text() === "9";  // odfiltrowywuje tylko te których wartość tekstowa jest równa 9
    })
    .addClass("dark-theme");  // do odfiltrowanych elementów dodaje klasę CSS
})();