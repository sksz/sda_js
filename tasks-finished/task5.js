function Cat2(name, sound) {
    return {
        name: name,
        sound: sound,
        makeSound: function() {
            console.log(this.sound)
        }
    }
}

const kot1 = Cat2('zenek', 'wrrr');
kot1.makeSound();
