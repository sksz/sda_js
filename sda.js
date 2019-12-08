var init;

init = function() {
    var heading, heading_text;

    console.log('Hello');
    // document.getElementById('button1').hidden = true;
    // document.getElementById('button1').remove();
    // console.log(document.getElementById('button1'));

    heading = document.createElement('h1');
    heading_text = document.createTextNode('Big Head!');
    heading.appendChild(heading_text);
    document.body.appendChild(heading);
}
