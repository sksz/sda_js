// Pobierz wszystkie dzieci z #list2 i #list3, przenieś je do #list1.
// Usuń #list2 oraz #list3;
// Wszystkim elementom listy usuń klasy "bold" oraz "underline"

(() => {
  const $listsNodes = $('#list2, #list3');  // pobieram elementy o ID list2 i list3;
  const $listsChildNodes = $listsNodes.children().detach();  // pobieram i usuwam wszystkie ich dzieci z drzewa DOM, usunięte elementy zostają zapisane w zmiennej za pomocą funkcji detach() dzięki czemu mogę je później łatwo przywrócić

  $('#list1').append($listsChildNodes);  // dodaje wszystkie usunięte wcześniej elementy do elementu o ID list1
  $('.bold, .underline').removeClass("bold underline"); // pobieram wszystkie elementy na stronie z klasami CSS .bold i .underline a następnie je usuwam

  $listsNodes.remove();  // usuwam wszystkie elementy znajdujące się w tej zmiennej z drzewa DOM
})()
