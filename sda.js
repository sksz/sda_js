setInterval(function () {
    var data;
    data = new Date();
    document.getElementById('button1').innerHTML = data.getFullYear() + ' ' +
    (data.getMonth() + 1) + ' ' + (data.getDay() + 1) + ' ' + data.getHours() + ':' + data.getMinutes() +
    ':' + data.getSeconds();
}, 1000);
