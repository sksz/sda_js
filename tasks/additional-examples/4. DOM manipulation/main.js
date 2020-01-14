$( "<h4>Test 1</h4>" ).insertAfter( ".container" );
$( ".container" ).after( "<h4>Test 2</h4>" );

$( "section" ).eq(1).text("New Test text");

$("p")
  .contents()
  .filter(function() {
    return this.nodeType === Node.TEXT_NODE;
  })
  .wrap( "<b></b>" );


