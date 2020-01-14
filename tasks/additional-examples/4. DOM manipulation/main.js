$( "<h4>Test 1</h4>" ).insertAfter( ".container" );   // wstawia <h4> za .container na tym samym poziomie
$( ".container" ).after( "<h4>Test 2</h4>" );  // wstawia <h4> za .container na tym samym poziomie

$( "section" ).eq(1).text("New Test text");    // wstawia nowy tekst pierwszemu elementowi <section>

$("p")   //  pobranie wszystkich tagów ze znacznikiem P
  .contents()   //   pobranie zawartości ze wszystkich znalezionych wcześniej elementów
  .filter(function() {  // odfiltrowanie zawartości wyciagniętej w poprzedniej linijce kodu
    return this.nodeType === Node.TEXT_NODE;  // sprawdzam czy element jest elementem tekstowym
  })
  .wrap( "<b></b>" ); // jezeli tak to opakowywuje go znacznikiem <b>


