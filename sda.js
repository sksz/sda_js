var init;

init = function() {
    var heading, heading_text, elements, i;

    console.log('Hello');
    // document.getElementById('button1').hidden = true;
    // document.getElementById('button1').remove();
    // console.log(document.getElementById('button1'));

    // heading = document.createElement('h1');
    // heading_text = document.createTextNode('Big Head!');
    // heading.appendChild(heading_text);
    // document.body.appendChild(heading);

    document.getElementById('button1').onclick = function () {
        alert('click');
    };
    elements = document.getElementsByClassName('myButton');
    for (i = 0; i < elements.length; i++) {
        elements[i].setAttribute('id', 'test' + i);

    }
    document.getElementById('button1').setAttribute('style', 'color: red');

    // Kursor nad elementem
    document.getElementById('test0').onmouseover = function () {
        document.getElementById('test1').hidden = true;
    };

    // Kursor poza elementem
    document.getElementById('test0').onmouseleave = function () {
        document.getElementById('test1').hidden = false;
    };

    // Puszczenie wciśniętego przycisku
    document.getElementById('test1').onmouseup = function () {
        alert('a');
    }
}
