function logInformation() {
    console.log(arguments);
    console.log(this)
}

const test1 = {name: 'Ala'};
const test2 = {name: 'Zenon'};

logInformation.call(test1, 'argument1', 'argument2');
logInformation.apply(test2, ['argument1', 'argument2']);

