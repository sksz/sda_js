// Pobierz element .red znajdujący się w elemencie #list2 przypisując go do zmiennej $liNode.
// Odwołując się do elementu zapisanego w zmiennej $liNode, dodaj mu klasę "bold" wywołując na nim metodę .addClass() 
// Odwołując się do elementu zapisanego w zmiennej $liNode, pobierz jego brata posiadającego klasę .yellow i dodaj nowo pobranemu elementowi klasę .underline wywołując na nim metodę .addClass() 
// Odwołując się do elementu zapisanego w zmiennej $liNode, przejdź w górę drzewa dom do rodzica i dodaj rodzicowi klasę .greenBackground wywołując na nim metodę .addClass() 

(() => {
  const $liNode = $('#list2').find('.red');  // pobieram z #list2 wszystkie elementy mające klasę .red

  $liNode.addClass('bold');  // do wszystkich znalezionych elementów dodaję klasę CSS
  $liNode.nextAll('.yellow').addClass('underline');  // do wszystkich elementów z przodu na tym samym poziomie drzewa DOM posiadających klasę .yellow dodaję klasę CSS
  $liNode.parent().addClass('greenBackground');  // pobieram rodzica elementu .red i dodaję mu klasę CSS
})();
