// Pobierz wszystkie dzieci z #list2 i #list3, przenieś je do #list1.
// Usuń #list2 oraz #list3;
// Wszystkim elementom listy usuń klasy "bold" oraz "underline"

(() => {
  const $listsNodes = $('#list2, #list3');
  const $listsChildNodes = $listsNodes.children().detach();

  $('#list1').append($listsChildNodes);
  $('.bold, .underline').removeClass("bold underline");

  $listsNodes.remove();
})()
