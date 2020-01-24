const makeSound = function (name, lastname) {
    console.log(this.sound + ' ' + name + ' ' + lastname)
}

const cat = {
    name: 'Fluffy',
    sound: 'Miauuu',
    makeSound: makeSound
}

makeSound.apply(cat, ['Janusz', 'Kowalski'])
makeSound.call(cat, 'Janusz', 'Kowalski')

makeSound.apply({ sound: 'Wooff' }, ['Janusz', 'Kowalski'])
makeSound.call({ sound: 'Wooff' }, 'Janusz', 'Kowalski')

makeSound('Janusz', 'Kowalski')
cat.makeSound('Janusz', 'Kowalski')

const bindedToCatMakeSound = makeSound.bind(cat)
bindedToCatMakeSound('Janusz', 'Kowalski')