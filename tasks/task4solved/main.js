// Podepnij słuchacza zdarzeń do elementów z klasą square, który będzie nasłuchiwał gdy myszka najezdza i zjezdza z danego elementu.
// W trakcie zdarzenia dodaj/usuń danemu elementowi klasę 'dark-bg'.

$('.square').on('mouseenter mouseleave', function() { // pobieram wszystkie elementy .square i podpinam słuchacza zdarzeń
  $(this).toggleClass('dark-bg'); // który przełącza klasę CSS elementu który wywował zdarzenie
});
