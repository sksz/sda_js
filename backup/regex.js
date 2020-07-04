var regex, something;

something = 'ala@test.com';

regex = new RegExp('([a-z][a-z0-9_.-]*)@([a-z][a-z0-9-]+)((\\.[a-z][a-z0-9-]+))+');

console.log(regex);

var result = regex.test(something);

console.log(result);
