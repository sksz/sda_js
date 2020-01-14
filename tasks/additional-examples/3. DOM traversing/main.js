console.log($('#four').prev('.red'));  // pobranych elementów 0
console.log($('#four').prevAll('.red'));   // pobranych elementów 1
console.log($('#four').prevUntil('.black'));  // pobranych elementów 2 (blue, red)
console.log($('#four').siblings());  // pobranych elementów 4
console.log($('li').slice(-1)); // pobranych elementów 1 - ostatni